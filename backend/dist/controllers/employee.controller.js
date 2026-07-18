"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmployee = exports.updateEmployee = exports.getEmployeeById = exports.getEmployees = exports.createEmployee = void 0;
const employee_service_1 = require("../services/employee.service");
const response_1 = require("../utils/response");
const constants_1 = require("../utils/constants");
const AppError_1 = require("../utils/AppError");
const createEmployee = async (req, res) => {
    if (req.user?.role === constants_1.ROLES.HR_MANAGER && req.body.role === constants_1.ROLES.SUPER_ADMIN) {
        throw new AppError_1.AppError('HR Managers cannot create Super Admins', 403);
    }
    const employee = await employee_service_1.employeeService.createEmployee(req.body);
    (0, response_1.sendSuccess)(res, 201, employee, 'Employee created successfully');
};
exports.createEmployee = createEmployee;
const getEmployees = async (req, res) => {
    const { search, department, role, status, sortBy, sortOrder, page, limit } = req.query;
    const result = await employee_service_1.employeeService.getEmployees({
        search: search,
        department: department,
        role: role,
        status: status,
        sortBy: sortBy,
        sortOrder: sortOrder,
        page: page ? parseInt(page, 10) : 1,
        limit: limit ? parseInt(limit, 10) : 10,
    });
    (0, response_1.sendSuccess)(res, 200, result, 'Employees fetched successfully');
};
exports.getEmployees = getEmployees;
const getEmployeeById = async (req, res) => {
    const id = req.params.id;
    const employee = await employee_service_1.employeeService.getEmployeeById(id);
    (0, response_1.sendSuccess)(res, 200, employee, 'Employee fetched successfully');
};
exports.getEmployeeById = getEmployeeById;
const updateEmployee = async (req, res) => {
    const id = req.params.id;
    if (req.user?.role === constants_1.ROLES.HR_MANAGER && req.body.role === constants_1.ROLES.SUPER_ADMIN) {
        throw new AppError_1.AppError('HR Managers cannot assign Super Admin role', 403);
    }
    const employee = await employee_service_1.employeeService.updateEmployee(id, req.body);
    (0, response_1.sendSuccess)(res, 200, employee, 'Employee updated successfully');
};
exports.updateEmployee = updateEmployee;
const deleteEmployee = async (req, res) => {
    const id = req.params.id;
    if (req.user?.role !== constants_1.ROLES.SUPER_ADMIN) {
        throw new AppError_1.AppError('Only Super Admins can delete employees', 403);
    }
    const requesterRole = req.user.role;
    await employee_service_1.employeeService.deleteEmployee(id, requesterRole);
    (0, response_1.sendSuccess)(res, 200, null, 'Employee deleted successfully');
};
exports.deleteEmployee = deleteEmployee;
