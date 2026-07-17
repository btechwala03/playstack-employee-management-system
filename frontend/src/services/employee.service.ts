import { apiClient } from './api.client';
import { API_ENDPOINTS } from '../constants/api.constants';
import { Employee, EmployeeQueryParams, PaginatedResponse } from '../types/employee.types';

export const employeeService = {
  getEmployees: async (params?: EmployeeQueryParams): Promise<PaginatedResponse<Employee>> => {
    const response: any = await apiClient.get(API_ENDPOINTS.EMPLOYEES.BASE, { params });
    return {
      data: response.data,
      total: response.meta.totalRecords,
      page: response.meta.page,
      totalPages: response.meta.totalPages,
      limit: response.meta.limit,
    };
  },

  getEmployeeById: async (id: string): Promise<Employee> => {
    const response: any = await apiClient.get(API_ENDPOINTS.EMPLOYEES.BY_ID(id));
    return response.data;
  },

  createEmployee: async (data: Partial<Employee>): Promise<Employee> => {
    const response: any = await apiClient.post(API_ENDPOINTS.EMPLOYEES.BASE, data);
    return response.data;
  },

  updateEmployee: async (id: string, data: Partial<Employee>): Promise<Employee> => {
    const response: any = await apiClient.put(API_ENDPOINTS.EMPLOYEES.BY_ID(id), data);
    return response.data;
  },

  deleteEmployee: async (id: string): Promise<void> => {
    await apiClient.delete(API_ENDPOINTS.EMPLOYEES.BY_ID(id));
  },
};
