import { Employee } from '../models/Employee';

export class DashboardRepository {
  async getSummaryStatistics() {
    const pipeline: any[] = [
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

    const result = await Employee.aggregate(pipeline);
    return result[0];
  }
}

export const dashboardRepository = new DashboardRepository();
