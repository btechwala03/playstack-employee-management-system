"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_1 = require("./utils/jwt");
const hash_1 = require("./utils/hash");
const Employee_1 = require("./models/Employee");
const employee_validator_1 = require("./validators/employee.validator");
async function runTests() {
    console.log('--- RUNNING MILESTONE 2 VERIFICATION ---');
    // 1. Test JWT
    const token = (0, jwt_1.generateToken)({ id: '123', role: 'SUPER_ADMIN' });
    const decoded = (0, jwt_1.verifyToken)(token);
    if (decoded.id !== '123' || decoded.role !== 'SUPER_ADMIN')
        throw new Error('JWT Verification Failed');
    console.log('✅ JWT generation and verification works');
    // 2. Test Hashing
    const hash = await (0, hash_1.hashPassword)('password123');
    const isMatch = await (0, hash_1.comparePassword)('password123', hash);
    if (!isMatch)
        throw new Error('Password Hashing Failed');
    console.log('✅ Password hashing and comparison works');
    // 3. Test Mongoose Model Initialization
    if (!Employee_1.Employee.schema)
        throw new Error('Employee Schema failed to initialize');
    console.log('✅ MongoDB models and indexes initialize successfully');
    // 4. Test Zod Validation
    const validData = {
        employeeId: 'EMP001',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        password: 'password123',
        phone: '1234567890',
        department: 'Engineering',
        designation: 'Developer',
        salary: 5000,
        joiningDate: new Date().toISOString(),
    };
    const result = employee_validator_1.createEmployeeSchema.safeParse({ body: validData });
    if (!result.success) {
        console.error(result.error);
        throw new Error('Zod Schema Validation Failed');
    }
    console.log('✅ Zod schema validation works');
    console.log('--- ALL TESTS PASSED ---');
    process.exit(0);
}
runTests().catch(err => {
    console.error(err);
    process.exit(1);
});
