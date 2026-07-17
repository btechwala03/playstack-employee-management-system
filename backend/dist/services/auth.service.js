"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = exports.AuthService = void 0;
const Employee_1 = require("../models/Employee");
const AppError_1 = require("../utils/AppError");
const jwt_1 = require("../utils/jwt");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const constants_1 = require("../utils/constants");
class AuthService {
    async login(email, passwordString) {
        const employee = await Employee_1.Employee.findOne({ email }).select('+password');
        if (!employee) {
            throw new AppError_1.AppError('Invalid credentials', 401);
        }
        if (employee.isDeleted) {
            throw new AppError_1.AppError('Account has been deleted', 403);
        }
        if (employee.status === constants_1.STATUS.INACTIVE) {
            throw new AppError_1.AppError('Account is disabled', 403);
        }
        const isMatch = await bcryptjs_1.default.compare(passwordString, employee.password);
        if (!isMatch) {
            throw new AppError_1.AppError('Invalid credentials', 401);
        }
        const token = (0, jwt_1.generateToken)({
            id: employee._id,
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
exports.AuthService = AuthService;
exports.authService = new AuthService();
