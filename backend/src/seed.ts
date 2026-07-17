import mongoose from 'mongoose';
import { ENV } from './config/env';
import { Employee } from './models/Employee';
import { hashPassword } from './utils/hash';
import { ROLES, STATUS } from './utils/constants';

const seedDB = async () => {
  try {
    await mongoose.connect(ENV.MONGO_URI);
    console.log('Connected to MongoDB for seeding');

    // Clear existing data
    await Employee.deleteMany({});
    console.log('Cleared existing employees');

    const adminPassword = await hashPassword('Admin@123');
    const hrPassword = await hashPassword('Hr@123');
    const empPassword = await hashPassword('Employee@123');

    // Create Super Admin
    const superAdmin = await Employee.create({
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
      status: STATUS.ACTIVE,
      role: ROLES.SUPER_ADMIN,
    });

    // Create HR Manager
    const hrManager = await Employee.create({
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
      status: STATUS.ACTIVE,
      role: ROLES.HR_MANAGER,
      reportingManager: superAdmin._id,
    });

    // Create Base Employee
    const baseEmployee = await Employee.create({
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
      status: STATUS.ACTIVE,
      role: ROLES.EMPLOYEE,
      reportingManager: superAdmin._id,
    });

    // Create 20 more employees
    const departments = ['Engineering', 'Finance', 'Marketing', 'Sales', 'Operations'];
    
    // Create department heads first
    const deptHeads: any = {};
    for (const dept of departments) {
      deptHeads[dept] = await Employee.create({
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
        status: STATUS.ACTIVE,
        role: ROLES.EMPLOYEE,
        reportingManager: superAdmin._id,
      });
    }

    // Create standard employees under heads
    for (let i = 1; i <= 15; i++) {
      const dept = departments[i % departments.length];
      await Employee.create({
        employeeId: `EMP-${dept}-00${i+1}`,
        firstName: `Employee${i}`,
        lastName: `Staff`,
        email: `emp${i}.${dept.toLowerCase()}@playstack.com`,
        password: empPassword,
        phone: `222333444${i}`,
        department: dept,
        designation: `${dept} Specialist`,
        salary: 60000 + (i * 1000),
        joiningDate: new Date('2023-05-01'),
        status: STATUS.ACTIVE,
        role: ROLES.EMPLOYEE,
        reportingManager: deptHeads[dept]._id,
      });
    }

    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
};

seedDB();
