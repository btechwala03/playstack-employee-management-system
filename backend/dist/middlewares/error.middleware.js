"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const response_1 = require("../utils/response");
const zod_1 = require("zod");
const env_1 = require("../config/env");
const errorHandler = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || 'Internal Server Error';
    let errors = null;
    if (err instanceof zod_1.ZodError) {
        statusCode = 400;
        message = 'Validation Error';
        errors = err.issues.map((e) => ({ path: e.path.join('.'), message: e.message }));
    }
    else if (err.name === 'ValidationError') {
        // Mongoose validation error
        statusCode = 400;
        message = 'Database Validation Error';
        errors = Object.values(err.errors).map((e) => e.message);
    }
    else if (err.code === 11000) {
        // Mongoose duplicate key error
        statusCode = 409;
        message = 'Duplicate field value entered';
        errors = Object.keys(err.keyValue);
    }
    // Hide stack trace in production unless operational
    if (env_1.ENV.NODE_ENV === 'production' && !err.isOperational && statusCode === 500) {
        message = 'Something went wrong';
    }
    const responseError = env_1.ENV.NODE_ENV === 'development' && statusCode === 500 ? err.stack : errors;
    (0, response_1.sendError)(res, statusCode, message, responseError);
};
exports.errorHandler = errorHandler;
