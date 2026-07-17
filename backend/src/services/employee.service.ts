import { IEmployee } from '../models/Employee';
import { employeeRepository, EmployeeQueryParams, PaginatedResult } from '../repositories/employee.repository';
import { AppError } from '../utils/AppError';
import { hashPassword } from '../utils/hash';
import { ROLES } from '../utils/constants';

export class EmployeeService {
  async createEmployee(data: Partial<IEmployee>): Promise<IEmployee> {
    // Business Rule: Duplicate Employee ID Check
    if (data.employeeId) {
      const existingId = await employeeRepository.findByEmployeeId(data.employeeId);
      if (existingId) throw new AppError('Employee ID already exists', 400);
    }

    // Business Rule: Duplicate Email Check
    if (data.email) {
      const existingEmail = await employeeRepository.findByEmail(data.email);
      if (existingEmail) throw new AppError('Email already exists', 400);
    }

    // Hash password if provided (required on create, but just safe-guarding)
    if (data.password) {
      data.password = await hashPassword(data.password);
    }

    return await employeeRepository.create(data);
  }

  async getEmployeeById(id: string): Promise<IEmployee> {
    const employee = await employeeRepository.findById(id);
    if (!employee) throw new AppError('Employee not found or has been deleted', 404);
    return employee;
  }

  async getEmployees(params: EmployeeQueryParams): Promise<PaginatedResult<IEmployee>> {
    return await employeeRepository.findAllPaginated(params);
  }

  async updateEmployee(id: string, data: Partial<IEmployee>): Promise<IEmployee> {
    const employee = await employeeRepository.findById(id);
    if (!employee) throw new AppError('Employee not found or has been deleted', 404);

    // Business Rule: Duplicate checks on update if fields are changed
    if (data.email && data.email !== employee.email) {
      const existingEmail = await employeeRepository.findByEmail(data.email);
      if (existingEmail) throw new AppError('Email already exists', 400);
    }

    if (data.password) {
      data.password = await hashPassword(data.password);
    }

    // Prevent role escalation tricks via regular endpoints if necessary (handled by RBAC controllers usually)
    const updated = await employeeRepository.update(id, data);
    if (!updated) throw new AppError('Failed to update employee', 500);
    
    return updated;
  }

  async deleteEmployee(id: string, requesterRole: string): Promise<void> {
    const employee = await employeeRepository.findById(id);
    if (!employee) throw new AppError('Employee not found or has been deleted', 404);

    // Business Rule: Deleting Super Admin constraint
    if (employee.role === ROLES.SUPER_ADMIN && requesterRole !== ROLES.SUPER_ADMIN) {
      throw new AppError('Only a Super Admin can delete another Super Admin', 403);
    }

    const deleted = await employeeRepository.softDelete(id);
    if (!deleted) throw new AppError('Failed to delete employee', 500);
  }
}

export const employeeService = new EmployeeService();
