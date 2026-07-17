import mongoose, { SortOrder } from 'mongoose';
import { Employee, IEmployee } from '../models/Employee';

export interface PaginationMeta {
  page: number;
  limit: number;
  totalPages: number;
  totalRecords: number;
}

export interface PaginatedResult<T> {
  data: T[];
  meta: PaginationMeta;
}

export interface EmployeeQueryParams {
  search?: string;
  department?: string;
  role?: string;
  status?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

export class EmployeeRepository {
  async create(data: Partial<IEmployee>): Promise<IEmployee> {
    const employee = new Employee(data);
    return await employee.save();
  }

  async findById(id: string): Promise<IEmployee | null> {
    return await Employee.findOne({ _id: id, isDeleted: false });
  }

  async findByEmail(email: string): Promise<IEmployee | null> {
    return await Employee.findOne({ email, isDeleted: false });
  }

  async findByEmployeeId(employeeId: string): Promise<IEmployee | null> {
    return await Employee.findOne({ employeeId, isDeleted: false });
  }

  async update(id: string, data: Partial<IEmployee>): Promise<IEmployee | null> {
    const employee = await Employee.findOne({ _id: id, isDeleted: false });
    if (!employee) return null;

    Object.assign(employee, data);
    return await employee.save();
  }

  async softDelete(id: string): Promise<IEmployee | null> {
    const employee = await Employee.findOne({ _id: id, isDeleted: false });
    if (!employee) return null;

    employee.isDeleted = true;
    return await employee.save();
  }

  async findAllPaginated(params: EmployeeQueryParams): Promise<PaginatedResult<IEmployee>> {
    const {
      search,
      department,
      role,
      status,
      sortBy = 'createdAt',
      sortOrder = 'desc',
      page = 1,
      limit = 10,
    } = params;

    const query: Record<string, any> = { isDeleted: false };

    if (search) {
      query.$or = [
        { firstName: { $regex: search, $options: 'i' } },
        { lastName: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
      ];
    }

    if (department) query.department = department;
    if (role) query.role = role;
    if (status) query.status = status;

    const sort: Record<string, SortOrder> = { [sortBy]: sortOrder === 'asc' ? 1 : -1 };
    
    // Mapping specific sort fields to DB fields if necessary
    if (sortBy === 'name') {
      delete sort[sortBy];
      sort.firstName = sortOrder === 'asc' ? 1 : -1;
      sort.lastName = sortOrder === 'asc' ? 1 : -1;
    }

    const skip = (page - 1) * limit;

    const [data, totalRecords] = await Promise.all([
      Employee.find(query).sort(sort).skip(skip).limit(limit).select('-password'),
      Employee.countDocuments(query),
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

export const employeeRepository = new EmployeeRepository();
