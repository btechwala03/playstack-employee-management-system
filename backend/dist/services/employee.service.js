"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeService = exports.EmployeeService = void 0;
const employee_repository_1 = require("../repositories/employee.repository");
const AppError_1 = require("../utils/AppError");
const hash_1 = require("../utils/hash");
const constants_1 = require("../utils/constants");
class EmployeeService {
    async createEmployee(data) {
        // Business Rule: Duplicate Employee ID Check
        if (data.employeeId) {
            const existingId = await employee_repository_1.employeeRepository.findByEmployeeId(data.employeeId);
            if (existingId)
                throw new AppError_1.AppError('Employee ID already exists', 400);
        }
        // Business Rule: Duplicate Email Check
        if (data.email) {
            const existingEmail = await employee_repository_1.employeeRepository.findByEmail(data.email);
            if (existingEmail)
                throw new AppError_1.AppError('Email already exists', 400);
        }
        // Hash password if provided (required on create, but just safe-guarding)
        if (data.password) {
            data.password = await (0, hash_1.hashPassword)(data.password);
        }
        return await employee_repository_1.employeeRepository.create(data);
    }
    async getEmployeeById(id) {
        const employee = await employee_repository_1.employeeRepository.findById(id);
        if (!employee)
            throw new AppError_1.AppError('Employee not found or has been deleted', 404);
        return employee;
    }
    async getEmployees(params) {
        return await employee_repository_1.employeeRepository.findAllPaginated(params);
    }
    async updateEmployee(id, data) {
        const employee = await employee_repository_1.employeeRepository.findById(id);
        if (!employee)
            throw new AppError_1.AppError('Employee not found or has been deleted', 404);
        // Business Rule: Duplicate checks on update if fields are changed
        if (data.email && data.email !== employee.email) {
            const existingEmail = await employee_repository_1.employeeRepository.findByEmail(data.email);
            if (existingEmail)
                throw new AppError_1.AppError('Email already exists', 400);
        }
        if (data.password) {
            data.password = await (0, hash_1.hashPassword)(data.password);
        }
        // Prevent role escalation tricks via regular endpoints if necessary (handled by RBAC controllers usually)
        const updated = await employee_repository_1.employeeRepository.update(id, data);
        if (!updated)
            throw new AppError_1.AppError('Failed to update employee', 500);
        return updated;
    }
    async deleteEmployee(id, requesterRole) {
        const employee = await employee_repository_1.employeeRepository.findById(id);
        if (!employee)
            throw new AppError_1.AppError('Employee not found or has been deleted', 404);
        // Business Rule: Deleting Super Admin constraint
        if (employee.role === constants_1.ROLES.SUPER_ADMIN && requesterRole !== constants_1.ROLES.SUPER_ADMIN) {
            throw new AppError_1.AppError('Only a Super Admin can delete another Super Admin', 403);
        }
        const deleted = await employee_repository_1.employeeRepository.softDelete(id);
        if (!deleted)
            throw new AppError_1.AppError('Failed to delete employee', 500);
    }
}
exports.EmployeeService = EmployeeService;
exports.employeeService = new EmployeeService();
