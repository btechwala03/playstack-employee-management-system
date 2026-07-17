import { Request, Response } from 'express';
import { authService } from '../services/auth.service';
import { sendSuccess } from '../utils/response';

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const data = await authService.login(email, password);
  sendSuccess(res, 200, data, 'Login successful');
};

export const logout = async (req: Request, res: Response) => {
  // In a stateless JWT architecture, logout is typically handled client-side by destroying the token.
  // We can provide a generic success response.
  sendSuccess(res, 200, null, 'Logout successful');
};
