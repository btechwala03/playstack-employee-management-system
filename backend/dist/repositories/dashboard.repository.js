"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboardRepository = exports.DashboardRepository = void 0;
const Employee_1 = require("../models/Employee");
class DashboardRepository {
    async getSummaryStatistics() {
        const pipeline = [
            { $match: { isDeleted: false } },
            {
                $facet: {
                    totalCount: [{ $count: 'count' }],
                    statusCounts: [
                        {
                            $group: {
                                _id: '$status',
                                count: { $sum: 1 },
                            },
                        },
                    ],
                    departmentCounts: [
                        {
                            $group: {
                                _id: '$department',
                                count: { $sum: 1 },
                            },
                        },
                    ],
                    roleCounts: [
                        {
                            $group: {
                                _id: '$role',
                                count: { $sum: 1 },
                            },
                        },
                    ],
                    monthlyTrend: [
                        {
                            $match: {
                                joiningDate: {
                                    $gte: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
                                },
                            },
                        },
                        {
                            $group: {
                                _id: {
                                    year: { $year: '$joiningDate' },
                                    month: { $month: '$joiningDate' },
                                },
                                count: { $sum: 1 },
                            },
                        },
                        { $sort: { '_id.year': 1, '_id.month': 1 } },
                    ],
                },
            },
        ];
        const result = await Employee_1.Employee.aggregate(pipeline);
        return result[0];
    }
}
exports.DashboardRepository = DashboardRepository;
exports.dashboardRepository = new DashboardRepository();
