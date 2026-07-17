import { Router } from 'express';
import { getDashboardSummary } from '../controllers/dashboard.controller';
import { authenticate } from '../middlewares/auth.middleware';
import { asyncWrapper } from '../utils/asyncWrapper';

const router = Router();

router.use(authenticate);
router.get('/summary', asyncWrapper(getDashboardSummary));

export default router;
