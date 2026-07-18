import { z } from 'zod';
import { ROLES, STATUS } from '../utils/constants';

export const createEmployeeSchema = z.object({
  body: z.object({
    employeeId: z.string().min(1, 'Employee ID must not be empty').optional(),
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters').optional(),
    phone: z.string().min(10, 'Phone must be at least 10 digits'),
    department: z.string().min(1, 'Department is required'),
    designation: z.string().min(1, 'Designation is required'),
    salary: z.number().positive('Salary must be positive'),
    joiningDate: z.string().datetime({ message: 'Invalid joining date format' }),
    status: z.enum([STATUS.ACTIVE, STATUS.INACTIVE]).default(STATUS.ACTIVE),
    role: z.enum([ROLES.SUPER_ADMIN, ROLES.HR_MANAGER, ROLES.EMPLOYEE]).default(ROLES.EMPLOYEE),
    reportingManager: z.string().optional(),
    profileImage: z.string().url().optional(),
  }),
});

export const updateEmployeeSchema = z.object({
  body: z.object({
    firstName: z.string().min(1).optional(),
    lastName: z.string().min(1).optional(),
    phone: z.string().min(10).optional(),
    department: z.string().min(1).optional(),
    designation: z.string().min(1).optional(),
    salary: z.number().positive().optional(),
    status: z.enum([STATUS.ACTIVE, STATUS.INACTIVE]).optional(),
    role: z.enum([ROLES.SUPER_ADMIN, ROLES.HR_MANAGER, ROLES.EMPLOYEE]).optional(),
    reportingManager: z.string().optional(),
    profileImage: z.string().url().optional(),
  }),
});
