import { organizationRepository } from '../repositories/organization.repository';
import { employeeRepository } from '../repositories/employee.repository';
import { AppError } from '../utils/AppError';

export class OrganizationService {
  async getOrganizationTree() {
    const employees = await organizationRepository.getAllActiveEmployeesLean();
    
    // Hash map to quickly access nodes and store their children
    const map = new Map<string, any>();
    const roots: any[] = [];

    // Initialize map
    employees.forEach((emp: any) => {
      map.set(emp._id.toString(), { ...emp, directReports: [] });
    });

    // Build tree
    employees.forEach((emp: any) => {
      const node = map.get(emp._id.toString());
      if (emp.reportingManager) {
        const managerId = emp.reportingManager.toString();
        const managerNode = map.get(managerId);
        
        if (managerNode) {
          managerNode.directReports.push(node);
        } else {
          // If manager is not active/found, attach to roots temporarily or handle orphaned node
          roots.push(node); 
        }
      } else {
        roots.push(node); // Has no manager, so it's a root
      }
    });

    return roots;
  }

  async getDirectReports(managerId: string) {
    const manager = await employeeRepository.findById(managerId);
    if (!manager) throw new AppError('Manager not found', 404);

    return await organizationRepository.getDirectReports(managerId);
  }

  async updateManager(employeeId: string, newManagerId: string | null) {
    const employee = await employeeRepository.findById(employeeId);
    if (!employee) throw new AppError('Employee not found', 404);

    if (newManagerId) {
      const manager = await employeeRepository.findById(newManagerId);
      if (!manager) throw new AppError('Assigned manager does not exist or is deleted', 400);
    }

    // Set the new manager
    employee.reportingManager = newManagerId as any;

    // Trigger save which invokes the Mongoose pre('save') hook to validate circular reporting
    try {
      await employee.save();
    } catch (err: any) {
      // Catch mongoose validation errors (like our custom AppError from pre('save'))
      if (err instanceof AppError) throw err;
      throw new AppError(err.message || 'Failed to update manager', 400);
    }

    return employee;
  }
}

export const organizationService = new OrganizationService();
