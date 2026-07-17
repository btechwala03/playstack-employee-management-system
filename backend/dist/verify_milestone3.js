"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee_service_1 = require("./services/employee.service");
const employee_repository_1 = require("./repositories/employee.repository");
const constants_1 = require("./utils/constants");
async function runTests() {
    console.log('--- RUNNING MILESTONE 3 LOGIC VERIFICATION (MOCKED DB) ---');
    // Mock Repository
    const mockDb = [];
    employee_repository_1.employeeRepository.create = async (data) => {
        const newEmp = { ...data, _id: 'mock_id_' + Math.random(), isDeleted: false, status: constants_1.STATUS.ACTIVE };
        mockDb.push(newEmp);
        return newEmp;
    };
    employee_repository_1.employeeRepository.findByEmployeeId = async (id) => mockDb.find(e => e.employeeId === id && !e.isDeleted) || null;
    employee_repository_1.employeeRepository.findByEmail = async (email) => mockDb.find(e => e.email === email && !e.isDeleted) || null;
    employee_repository_1.employeeRepository.findById = async (id) => mockDb.find(e => e._id === id && !e.isDeleted) || null;
    employee_repository_1.employeeRepository.softDelete = async (id) => {
        const emp = mockDb.find(e => e._id === id);
        if (emp) {
            emp.isDeleted = true;
            return emp;
        }
        return null;
    };
    employee_repository_1.employeeRepository.findAllPaginated = async (params) => {
        let filtered = mockDb.filter(e => !e.isDeleted);
        if (params.search)
            filtered = filtered.filter(e => e.firstName.includes(params.search));
        if (params.department)
            filtered = filtered.filter(e => e.department === params.department);
        return {
            data: filtered,
            meta: { page: 1, limit: 10, totalPages: 1, totalRecords: filtered.length }
        };
    };
    console.log('1. Testing Create Employee & Hashing...');
    const emp1 = await employee_service_1.employeeService.createEmployee({
        employeeId: 'E100',
        firstName: 'Alice',
        lastName: 'Smith',
        email: 'alice@example.com',
        password: 'password123',
        department: 'Engineering',
        role: constants_1.ROLES.SUPER_ADMIN
    });
    if (emp1.password === 'password123')
        throw new Error('Password was not hashed');
    console.log('✅ Create successful & Password Hashed');
    const emp2 = await employee_service_1.employeeService.createEmployee({
        employeeId: 'E101',
        firstName: 'Bob',
        lastName: 'Jones',
        email: 'bob@example.com',
        password: 'password123',
        department: 'Marketing',
        role: constants_1.ROLES.EMPLOYEE
    });
    console.log('2. Testing Duplicate Validation...');
    try {
        await employee_service_1.employeeService.createEmployee({
            employeeId: 'E100', // duplicate ID
            firstName: 'Charlie',
            email: 'charlie@example.com',
        });
        throw new Error('Should have failed duplicate ID');
    }
    catch (err) {
        if (err.message !== 'Employee ID already exists')
            throw err;
        console.log('✅ Duplicate Employee ID validation works');
    }
    console.log('3. Testing Search & Filtering...');
    const searchResult = await employee_service_1.employeeService.getEmployees({ search: 'Alice' });
    if (searchResult.data.length !== 1 || searchResult.data[0].firstName !== 'Alice')
        throw new Error('Search failed');
    const filterResult = await employee_service_1.employeeService.getEmployees({ department: 'Marketing' });
    if (filterResult.data.length !== 1 || filterResult.data[0].firstName !== 'Bob')
        throw new Error('Filter failed');
    console.log('✅ Search and Filter works');
    console.log('4. Testing Soft Delete & Constraints...');
    try {
        await employee_service_1.employeeService.deleteEmployee(emp1._id, constants_1.ROLES.HR_MANAGER);
        throw new Error('Should have blocked Super Admin deletion');
    }
    catch (err) {
        if (err.message !== 'Only a Super Admin can delete another Super Admin')
            throw err;
        console.log('✅ Super Admin deletion constraint works');
    }
    await employee_service_1.employeeService.deleteEmployee(emp2._id, constants_1.ROLES.SUPER_ADMIN);
    const findBob = await employee_service_1.employeeService.getEmployeeById(emp2._id).catch(() => null);
    if (findBob)
        throw new Error('Soft delete failed');
    console.log('✅ Soft Delete works');
    console.log('--- ALL TESTS PASSED ---');
    process.exit(0);
}
runTests().catch(err => {
    console.error(err);
    process.exit(1);
});
