import { Router } from 'express';
import { login, logout } from '../controllers/auth.controller';
import { asyncWrapper } from '../utils/asyncWrapper';
import { validate } from '../middlewares/validate.middleware';
import { z } from 'zod';

const router = Router();

const loginSchema = z.object({
  body: z.object({
    email: z.string().email('Invalid email format'),
    password: z.string().min(1, 'Password is required'),
  }),
});

router.post('/login', validate(loginSchema), asyncWrapper(login));
router.post('/logout', asyncWrapper(logout));

export default router;
