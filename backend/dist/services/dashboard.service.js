"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboardService = exports.DashboardService = void 0;
const dashboard_repository_1 = require("../repositories/dashboard.repository");
const constants_1 = require("../utils/constants");
class DashboardService {
    async getDashboardSummary() {
        const rawStats = await dashboard_repository_1.dashboardRepository.getSummaryStatistics();
        const totalEmployees = rawStats.totalCount[0]?.count || 0;
        const activeEmployees = rawStats.statusCounts.find((s) => s._id === constants_1.STATUS.ACTIVE)?.count || 0;
        const inactiveEmployees = rawStats.statusCounts.find((s) => s._id === constants_1.STATUS.INACTIVE)?.count || 0;
        const departmentCount = rawStats.departmentCounts.length;
        // Format monthly trend to readable format
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const formattedTrend = rawStats.monthlyTrend.map((t) => ({
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
exports.DashboardService = DashboardService;
exports.dashboardService = new DashboardService();
