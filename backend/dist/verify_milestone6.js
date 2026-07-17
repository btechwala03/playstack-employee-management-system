"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_service_1 = require("./services/auth.service");
const Employee_1 = require("./models/Employee");
const constants_1 = require("./utils/constants");
async function runTests() {
    console.log('--- RUNNING MILESTONE 6 BACKEND AUTH LOGIC VERIFICATION ---');
    const mockDb = [];
    // Mock Employee Mongoose calls
    Employee_1.Employee.findOne = ((query) => {
        return {
            select: () => {
                const user = mockDb.find(e => e.email === query.email);
                if (!user)
                    return null;
                return {
                    ...user,
                    toObject: () => ({ ...user })
                };
            }
        };
    });
    mockDb.push({
        _id: 'mock_id_admin',
        email: 'admin@playstack.com',
        password: '$2a$10$f/p.gXv5T.w.oF/oT8vj/u6.xT0s6.yU/s.tU5vW.x.y.z', // hashed "password123" (fake)
        role: constants_1.ROLES.SUPER_ADMIN,
        status: constants_1.STATUS.ACTIVE,
        isDeleted: false,
    });
    mockDb.push({
        _id: 'mock_id_deleted',
        email: 'deleted@playstack.com',
        password: 'hash',
        role: constants_1.ROLES.EMPLOYEE,
        status: constants_1.STATUS.ACTIVE,
        isDeleted: true,
    });
    mockDb.push({
        _id: 'mock_id_inactive',
        email: 'inactive@playstack.com',
        password: 'hash',
        role: constants_1.ROLES.EMPLOYEE,
        status: constants_1.STATUS.INACTIVE,
        isDeleted: false,
    });
    // Because bcrypt.compare requires real hashes, we will mock bcrypt.compare for the test
    const bcrypt = require('bcryptjs');
    bcrypt.compare = async (plain, hash) => {
        return plain === 'password123' && hash.startsWith('$2a$10$');
    };
    console.log('1. Testing Login Success...');
    const res = await auth_service_1.authService.login('admin@playstack.com', 'password123');
    if (!res.token || res.employee.email !== 'admin@playstack.com') {
        throw new Error('Login failed');
    }
    console.log('✅ JWT generated and login successful');
    console.log('2. Testing Invalid Password...');
    try {
        await auth_service_1.authService.login('admin@playstack.com', 'wrong');
        throw new Error('Should have failed');
    }
    catch (err) {
        if (err.message !== 'Invalid credentials')
            throw err;
        console.log('✅ Invalid credentials blocked');
    }
    console.log('3. Testing Deleted Account...');
    try {
        await auth_service_1.authService.login('deleted@playstack.com', 'password123');
        throw new Error('Should have failed');
    }
    catch (err) {
        if (err.message !== 'Account has been deleted')
            throw err;
        console.log('✅ Deleted account blocked');
    }
    console.log('4. Testing Disabled Account...');
    try {
        await auth_service_1.authService.login('inactive@playstack.com', 'password123');
        throw new Error('Should have failed');
    }
    catch (err) {
        if (err.message !== 'Account is disabled')
            throw err;
        console.log('✅ Disabled account blocked');
    }
    console.log('--- ALL BACKEND TESTS PASSED ---');
    process.exit(0);
}
runTests().catch(err => {
    console.error(err);
    process.exit(1);
});
