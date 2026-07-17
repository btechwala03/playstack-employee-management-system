"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.organizationService = exports.OrganizationService = void 0;
const organization_repository_1 = require("../repositories/organization.repository");
const employee_repository_1 = require("../repositories/employee.repository");
const AppError_1 = require("../utils/AppError");
class OrganizationService {
    async getOrganizationTree() {
        const employees = await organization_repository_1.organizationRepository.getAllActiveEmployeesLean();
        // Hash map to quickly access nodes and store their children
        const map = new Map();
        const roots = [];
        // Initialize map
        employees.forEach((emp) => {
            map.set(emp._id.toString(), { ...emp, directReports: [] });
        });
        // Build tree
        employees.forEach((emp) => {
            const node = map.get(emp._id.toString());
            if (emp.reportingManager) {
                const managerId = emp.reportingManager.toString();
                const managerNode = map.get(managerId);
                if (managerNode) {
                    managerNode.directReports.push(node);
                }
                else {
                    // If manager is not active/found, attach to roots temporarily or handle orphaned node
                    roots.push(node);
                }
            }
            else {
                roots.push(node); // Has no manager, so it's a root
            }
        });
        return roots;
    }
    async getDirectReports(managerId) {
        const manager = await employee_repository_1.employeeRepository.findById(managerId);
        if (!manager)
            throw new AppError_1.AppError('Manager not found', 404);
        return await organization_repository_1.organizationRepository.getDirectReports(managerId);
    }
    async updateManager(employeeId, newManagerId) {
        const employee = await employee_repository_1.employeeRepository.findById(employeeId);
        if (!employee)
            throw new AppError_1.AppError('Employee not found', 404);
        if (newManagerId) {
            const manager = await employee_repository_1.employeeRepository.findById(newManagerId);
            if (!manager)
                throw new AppError_1.AppError('Assigned manager does not exist or is deleted', 400);
        }
        // Set the new manager
        employee.reportingManager = newManagerId;
        // Trigger save which invokes the Mongoose pre('save') hook to validate circular reporting
        try {
            await employee.save();
        }
        catch (err) {
            // Catch mongoose validation errors (like our custom AppError from pre('save'))
            if (err instanceof AppError_1.AppError)
                throw err;
            throw new AppError_1.AppError(err.message || 'Failed to update manager', 400);
        }
        return employee;
    }
}
exports.OrganizationService = OrganizationService;
exports.organizationService = new OrganizationService();
