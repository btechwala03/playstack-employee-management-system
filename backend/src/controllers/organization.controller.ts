import { Request, Response } from 'express';
import { organizationService } from '../services/organization.service';
import { sendSuccess } from '../utils/response';

export const getOrganizationTree = async (req: Request, res: Response) => {
  const tree = await organizationService.getOrganizationTree();
  sendSuccess(res, 200, tree, 'Organization tree fetched successfully');
};

export const getDirectReports = async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const reports = await organizationService.getDirectReports(id);
  sendSuccess(res, 200, reports, 'Direct reports fetched successfully');
};

export const updateManager = async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const { newManagerId } = req.body;
  const employee = await organizationService.updateManager(id, newManagerId || null);
  sendSuccess(res, 200, employee, 'Manager updated successfully');
};
