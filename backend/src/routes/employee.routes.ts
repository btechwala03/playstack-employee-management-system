import { Router } from 'express';
import { createEmployee, getEmployees, getEmployeeById, updateEmployee, deleteEmployee } from '../controllers/employee.controller';
import { validate } from '../middlewares/validate.middleware';
import { authenticate } from '../middlewares/auth.middleware';
import { requireHrOrAbove } from '../middlewares/role.middleware';
import { createEmployeeSchema, updateEmployeeSchema } from '../validators/employee.validator';
import { asyncWrapper } from '../utils/asyncWrapper';

const router = Router();

// Protect all employee routes
router.use(authenticate);

// Routes
router.post('/', requireHrOrAbove, validate(createEmployeeSchema), asyncWrapper(createEmployee));
router.get('/', requireHrOrAbove, asyncWrapper(getEmployees));
router.get('/:id', asyncWrapper(getEmployeeById));
router.put('/:id', validate(updateEmployeeSchema), asyncWrapper(updateEmployee));
router.delete('/:id', requireHrOrAbove, asyncWrapper(deleteEmployee));

export default router;
