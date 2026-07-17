import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/AppError';
import { ROLES } from '../utils/constants';

export const authorize = (allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return next(new AppError('User not authenticated', 401));
    }

    // Super Admin has implicit full access to everything
    if (req.user.role === ROLES.SUPER_ADMIN) {
      return next();
    }

    if (!allowedRoles.includes(req.user.role)) {
      return next(new AppError('You do not have permission to perform this action', 403));
    }

    next();
  };
};

// Reusable preset middlewares
export const requireSuperAdmin = authorize([ROLES.SUPER_ADMIN]);
export const requireHrOrAbove = authorize([ROLES.SUPER_ADMIN, ROLES.HR_MANAGER]);
