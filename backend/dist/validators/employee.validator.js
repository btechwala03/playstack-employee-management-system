"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEmployeeSchema = exports.createEmployeeSchema = void 0;
const zod_1 = require("zod");
const constants_1 = require("../utils/constants");
exports.createEmployeeSchema = zod_1.z.object({
    body: zod_1.z.object({
        employeeId: zod_1.z.string().min(1, 'Employee ID must not be empty').optional(),
        firstName: zod_1.z.string().min(1, 'First name is required'),
        lastName: zod_1.z.string().min(1, 'Last name is required'),
        email: zod_1.z.string().email('Invalid email address'),
        password: zod_1.z.string().min(6, 'Password must be at least 6 characters').optional(),
        phone: zod_1.z.string().min(10, 'Phone must be at least 10 digits'),
        department: zod_1.z.string().min(1, 'Department is required'),
        designation: zod_1.z.string().min(1, 'Designation is required'),
        salary: zod_1.z.number().positive('Salary must be positive'),
        joiningDate: zod_1.z.string().datetime({ message: 'Invalid joining date format' }),
        status: zod_1.z.enum([constants_1.STATUS.ACTIVE, constants_1.STATUS.INACTIVE]).default(constants_1.STATUS.ACTIVE),
        role: zod_1.z.enum([constants_1.ROLES.SUPER_ADMIN, constants_1.ROLES.HR_MANAGER, constants_1.ROLES.EMPLOYEE]).default(constants_1.ROLES.EMPLOYEE),
        reportingManager: zod_1.z.string().optional(),
        profileImage: zod_1.z.string().url().optional(),
    }),
});
exports.updateEmployeeSchema = zod_1.z.object({
    body: zod_1.z.object({
        firstName: zod_1.z.string().min(1).optional(),
        lastName: zod_1.z.string().min(1).optional(),
        phone: zod_1.z.string().min(10).optional(),
        department: zod_1.z.string().min(1).optional(),
        designation: zod_1.z.string().min(1).optional(),
        salary: zod_1.z.number().positive().optional(),
        status: zod_1.z.enum([constants_1.STATUS.ACTIVE, constants_1.STATUS.INACTIVE]).optional(),
        role: zod_1.z.enum([constants_1.ROLES.SUPER_ADMIN, constants_1.ROLES.HR_MANAGER, constants_1.ROLES.EMPLOYEE]).optional(),
        reportingManager: zod_1.z.string().optional(),
        profileImage: zod_1.z.string().url().optional(),
    }),
});
