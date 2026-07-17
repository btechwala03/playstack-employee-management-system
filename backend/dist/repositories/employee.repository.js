"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeRepository = exports.EmployeeRepository = void 0;
const Employee_1 = require("../models/Employee");
class EmployeeRepository {
    async create(data) {
        const employee = new Employee_1.Employee(data);
        return await employee.save();
    }
    async findById(id) {
        return await Employee_1.Employee.findOne({ _id: id, isDeleted: false });
    }
    async findByEmail(email) {
        return await Employee_1.Employee.findOne({ email, isDeleted: false });
    }
    async findByEmployeeId(employeeId) {
        return await Employee_1.Employee.findOne({ employeeId, isDeleted: false });
    }
    async update(id, data) {
        const employee = await Employee_1.Employee.findOne({ _id: id, isDeleted: false });
        if (!employee)
            return null;
        Object.assign(employee, data);
        return await employee.save();
    }
    async softDelete(id) {
        const employee = await Employee_1.Employee.findOne({ _id: id, isDeleted: false });
        if (!employee)
            return null;
        employee.isDeleted = true;
        return await employee.save();
    }
    async findAllPaginated(params) {
        const { search, department, role, status, sortBy = 'createdAt', sortOrder = 'desc', page = 1, limit = 10, } = params;
        const query = { isDeleted: false };
        if (search) {
            query.$or = [
                { firstName: { $regex: search, $options: 'i' } },
                { lastName: { $regex: search, $options: 'i' } },
                { email: { $regex: search, $options: 'i' } },
            ];
        }
        if (department)
            query.department = department;
        if (role)
            query.role = role;
        if (status)
            query.status = status;
        const sort = { [sortBy]: sortOrder === 'asc' ? 1 : -1 };
        // Mapping specific sort fields to DB fields if necessary
        if (sortBy === 'name') {
            delete sort[sortBy];
            sort.firstName = sortOrder === 'asc' ? 1 : -1;
            sort.lastName = sortOrder === 'asc' ? 1 : -1;
        }
        const skip = (page - 1) * limit;
        const [data, totalRecords] = await Promise.all([
            Employee_1.Employee.find(query).sort(sort).skip(skip).limit(limit).select('-password'),
            Employee_1.Employee.countDocuments(query),
        ]);
        return {
            data,
            meta: {
                page,
                limit,
                totalRecords,
                totalPages: Math.ceil(totalRecords / limit),
            },
        };
    }
}
exports.EmployeeRepository = EmployeeRepository;
exports.employeeRepository = new EmployeeRepository();
