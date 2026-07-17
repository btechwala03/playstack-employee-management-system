import { dashboardRepository } from '../repositories/dashboard.repository';
import { STATUS } from '../utils/constants';

export class DashboardService {
  async getDashboardSummary() {
    const rawStats = await dashboardRepository.getSummaryStatistics();
    
    const totalEmployees = rawStats.totalCount[0]?.count || 0;
    const activeEmployees = rawStats.statusCounts.find((s: any) => s._id === STATUS.ACTIVE)?.count || 0;
    const inactiveEmployees = rawStats.statusCounts.find((s: any) => s._id === STATUS.INACTIVE)?.count || 0;
    
    const departmentCount = rawStats.departmentCounts.length;
    
    // Format monthly trend to readable format
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const formattedTrend = rawStats.monthlyTrend.map((t: any) => ({
      month: `${monthNames[t._id.month - 1]} ${t._id.year}`,
      count: t.count,
    }));

    return {
      totalEmployees,
      activeEmployees,
      inactiveEmployees,
      departmentCount,
      employeesPerDepartment: rawStats.departmentCounts,
      employeesPerRole: rawStats.roleCounts,
      monthlyTrend: formattedTrend,
    };
  }
}

export const dashboardService = new DashboardService();
