import { Employee, IEmployee } from '../models/Employee';

export class OrganizationRepository {
  async getAllActiveEmployeesLean() {
    return await Employee.find({ isDeleted: false })
      .select('_id firstName lastName role department status reportingManager profileImage')
      .lean();
  }

  async getDirectReports(managerId: string) {
    return await Employee.find({ reportingManager: managerId, isDeleted: false })
      .select('-password -__v')
      .lean();
  }
}

export const organizationRepository = new OrganizationRepository();
