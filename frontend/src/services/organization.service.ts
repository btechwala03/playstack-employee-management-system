import { apiClient } from './api.client';
import { API_ENDPOINTS } from '../constants/api.constants';
import { Employee } from '../types/employee.types';

export interface OrgNode extends Employee {
  reportees: OrgNode[];
  reporteeCount?: number;
}

export const organizationService = {
  getTree: async (): Promise<OrgNode[]> => {
    const response: any = await apiClient.get(API_ENDPOINTS.ORGANIZATION.TREE);
    return response.data;
  },

  getReportees: async (managerId: string): Promise<Employee[]> => {
    const response: any = await apiClient.get(API_ENDPOINTS.ORGANIZATION.REPORTEES(managerId));
    return response.data;
  },

  reassignManager: async (employeeId: string, newManagerId: string | null): Promise<Employee> => {
    const response: any = await apiClient.patch(API_ENDPOINTS.ORGANIZATION.MANAGER(employeeId), {
      reportingManager: newManagerId
    });
    return response.data;
  },
};
