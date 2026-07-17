import { Request, Response, NextFunction } from 'express';
import { sendError } from '../utils/response';
import { ZodError } from 'zod';
import { ENV } from '../config/env';

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Internal Server Error';
  let errors = null;

  if (err instanceof ZodError) {
    statusCode = 400;
    message = 'Validation Error';
    errors = err.issues.map((e: any) => ({ path: e.path.join('.'), message: e.message }));
  } else if (err.name === 'ValidationError') {
    // Mongoose validation error
    statusCode = 400;
    message = 'Database Validation Error';
    errors = Object.values(err.errors).map((e: any) => e.message);
  } else if (err.code === 11000) {
    // Mongoose duplicate key error
    statusCode = 409;
    message = 'Duplicate field value entered';
    errors = Object.keys(err.keyValue);
  }

  // Hide stack trace in production unless operational
  if (ENV.NODE_ENV === 'production' && !err.isOperational && statusCode === 500) {
    message = 'Something went wrong';
  }

  const responseError = ENV.NODE_ENV === 'development' && statusCode === 500 ? err.stack : errors;

  sendError(res, statusCode, message, responseError);
};
