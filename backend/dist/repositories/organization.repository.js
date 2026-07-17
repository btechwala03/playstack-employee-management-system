"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.organizationRepository = exports.OrganizationRepository = void 0;
const Employee_1 = require("../models/Employee");
class OrganizationRepository {
    async getAllActiveEmployeesLean() {
        return await Employee_1.Employee.find({ isDeleted: false })
            .select('_id firstName lastName role department status reportingManager profileImage')
            .lean();
    }
    async getDirectReports(managerId) {
        return await Employee_1.Employee.find({ reportingManager: managerId, isDeleted: false })
            .select('-password -__v')
            .lean();
    }
}
exports.OrganizationRepository = OrganizationRepository;
exports.organizationRepository = new OrganizationRepository();
