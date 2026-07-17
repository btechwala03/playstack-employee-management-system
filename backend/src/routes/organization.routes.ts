import { Router } from 'express';
import { getOrganizationTree, getDirectReports, updateManager } from '../controllers/organization.controller';
import { authenticate } from '../middlewares/auth.middleware';
import { requireHrOrAbove } from '../middlewares/role.middleware';
import { asyncWrapper } from '../utils/asyncWrapper';

const router = Router();

router.use(authenticate);
router.use(requireHrOrAbove); // Org features are for HR/Super Admin only

router.get('/tree', asyncWrapper(getOrganizationTree));
router.get('/:id/reportees', asyncWrapper(getDirectReports));
router.patch('/:id/manager', asyncWrapper(updateManager));

export default router;
