"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const env_1 = require("./config/env");
const Employee_1 = require("./models/Employee");
const hash_1 = require("./utils/hash");
const constants_1 = require("./utils/constants");
const seedDB = async () => {
    try {
        await mongoose_1.default.connect(env_1.ENV.MONGO_URI);
        console.log('Connected to MongoDB for seeding');
        // Clear existing data
        await Employee_1.Employee.deleteMany({});
        console.log('Cleared existing employees');
        const adminPassword = await (0, hash_1.hashPassword)('Admin@123');
        const hrPassword = await (0, hash_1.hashPassword)('Hr@123');
        const empPassword = await (0, hash_1.hashPassword)('Employee@123');
        // Create Super Admin
        const superAdmin = await Employee_1.Employee.create({
            employeeId: 'EMP-001',
            firstName: 'System',
            lastName: 'Admin',
            email: 'admin@playstack.com',
            password: adminPassword,
            phone: '1234567890',
            department: 'Operations',
            designation: 'CEO',
            salary: 250000,
            joiningDate: new Date('2023-01-01'),
            status: constants_1.STATUS.ACTIVE,
            role: constants_1.ROLES.SUPER_ADMIN,
        });
        // Create HR Manager
        const hrManager = await Employee_1.Employee.create({
            employeeId: 'EMP-002',
            firstName: 'HR',
            lastName: 'Manager',
            email: 'hr@playstack.com',
            password: hrPassword,
            phone: '0987654321',
            department: 'HR',
            designation: 'HR Director',
            salary: 120000,
            joiningDate: new Date('2023-02-01'),
            status: constants_1.STATUS.ACTIVE,
            role: constants_1.ROLES.HR_MANAGER,
            reportingManager: superAdmin._id,
        });
        // Create Base Employee
        const baseEmployee = await Employee_1.Employee.create({
            employeeId: 'EMP-003',
            firstName: 'John',
            lastName: 'Doe',
            email: 'employee@playstack.com',
            password: empPassword,
            phone: '5555555555',
            department: 'Engineering',
            designation: 'Software Engineer',
            salary: 80000,
            joiningDate: new Date('2023-03-01'),
            status: constants_1.STATUS.ACTIVE,
            role: constants_1.ROLES.EMPLOYEE,
            reportingManager: superAdmin._id,
        });
        // Create 20 more employees
        const departments = ['Engineering', 'Finance', 'Marketing', 'Sales', 'Operations'];
        // Create department heads first
        const deptHeads = {};
        for (const dept of departments) {
            deptHeads[dept] = await Employee_1.Employee.create({
                employeeId: `EMP-${dept}-001`,
                firstName: `${dept}`,
                lastName: 'Head',
                email: `head.${dept.toLowerCase()}@playstack.com`,
                password: empPassword,
                phone: '1112223333',
                department: dept,
                designation: `${dept} Director`,
                salary: 150000,
                joiningDate: new Date('2023-04-01'),
                status: constants_1.STATUS.ACTIVE,
                role: constants_1.ROLES.EMPLOYEE,
                reportingManager: superAdmin._id,
            });
        }
        // Create standard employees under heads
        for (let i = 1; i <= 15; i++) {
            const dept = departments[i % departments.length];
            await Employee_1.Employee.create({
                employeeId: `EMP-${dept}-00${i + 1}`,
                firstName: `Employee${i}`,
                lastName: `Staff`,
                email: `emp${i}.${dept.toLowerCase()}@playstack.com`,
                password: empPassword,
                phone: `222333444${i}`,
                department: dept,
                designation: `${dept} Specialist`,
                salary: 60000 + (i * 1000),
                joiningDate: new Date('2023-05-01'),
                status: constants_1.STATUS.ACTIVE,
                role: constants_1.ROLES.EMPLOYEE,
                reportingManager: deptHeads[dept]._id,
            });
        }
        console.log('Database seeded successfully');
        process.exit(0);
    }
    catch (error) {
        console.error('Seeding error:', error);
        process.exit(1);
    }
};
seedDB();
