import { Employee } from '../models/Employee';
import { AppError } from '../utils/AppError';
import { generateToken } from '../utils/jwt';
import bcrypt from 'bcryptjs';
import { STATUS } from '../utils/constants';

export class AuthService {
  async login(email: string, passwordString: string) {
    const employee = await Employee.findOne({ email }).select('+password');
    
    if (!employee) {
      throw new AppError('Invalid credentials', 401);
    }

    if (employee.isDeleted) {
      throw new AppError('Account has been deleted', 403);
    }

    if (employee.status === STATUS.INACTIVE) {
      throw new AppError('Account is disabled', 403);
    }

    const isMatch = await bcrypt.compare(passwordString, employee.password as string);
    if (!isMatch) {
      throw new AppError('Invalid credentials', 401);
    }

    const token = generateToken({
      id: employee._id as unknown as string,
      role: employee.role,
    });

    const employeeProfile = employee.toObject();
    delete employeeProfile.password;

    return {
      token,
      employee: employeeProfile,
    };
  }
}

export const authService = new AuthService();
