import { Request, Response } from 'express';
import { employeeService } from '../services/employee.service';
import { sendSuccess } from '../utils/response';
import { ROLES } from '../utils/constants';

export const createEmployee = async (req: Request, res: Response) => {
  const employee = await employeeService.createEmployee(req.body);
  sendSuccess(res, 201, employee, 'Employee created successfully');
};

export const getEmployees = async (req: Request, res: Response) => {
  const { search, department, role, status, sortBy, sortOrder, page, limit } = req.query;

  const result = await employeeService.getEmployees({
    search: search as string,
    department: department as string,
    role: role as string,
    status: status as string,
    sortBy: sortBy as string,
    sortOrder: sortOrder as 'asc' | 'desc',
    page: page ? parseInt(page as string, 10) : 1,
    limit: limit ? parseInt(limit as string, 10) : 10,
  });

  sendSuccess(res, 200, result, 'Employees fetched successfully');
};

export const getEmployeeById = async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const employee = await employeeService.getEmployeeById(id);
  sendSuccess(res, 200, employee, 'Employee fetched successfully');
};

export const updateEmployee = async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const employee = await employeeService.updateEmployee(id, req.body);
  sendSuccess(res, 200, employee, 'Employee updated successfully');
};

export const deleteEmployee = async (req: Request, res: Response) => {
  const id = req.params.id as string;
  // Mock requester role for now since Auth is not fully implemented
  // In production, this comes from req.user.role
  const requesterRole = req.user?.role || ROLES.SUPER_ADMIN; 

  await employeeService.deleteEmployee(id, requesterRole);
  sendSuccess(res, 200, null, 'Employee deleted successfully');
};
