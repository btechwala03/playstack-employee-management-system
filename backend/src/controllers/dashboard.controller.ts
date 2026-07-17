import { Request, Response } from 'express';
import { dashboardService } from '../services/dashboard.service';
import { sendSuccess } from '../utils/response';

export const getDashboardSummary = async (req: Request, res: Response) => {
  const summary = await dashboardService.getDashboardSummary();
  sendSuccess(res, 200, summary, 'Dashboard summary fetched successfully');
};
