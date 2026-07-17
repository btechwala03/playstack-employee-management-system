import { apiClient } from './api.client';
import { API_ENDPOINTS } from '../constants/api.constants';

export interface DashboardSummary {
  totalEmployees: number;
  activeEmployees: number;
  inactiveEmployees: number;
  departmentCount: number;
  employeesPerDepartment: { _id: string; count: number }[];
  employeesPerRole: { _id: string; count: number }[];
  monthlyJoiningTrend: {
    year: number;
    month: number;
    count: number;
    monthName: string;
  }[];
}

export const dashboardService = {
  getSummary: async (): Promise<DashboardSummary> => {
    const response: any = await apiClient.get(API_ENDPOINTS.DASHBOARD.SUMMARY);
    return response.data;
  },
};
