"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireHrOrAbove = exports.requireSuperAdmin = exports.authorize = void 0;
const AppError_1 = require("../utils/AppError");
const constants_1 = require("../utils/constants");
const authorize = (allowedRoles) => {
    return (req, res, next) => {
        if (!req.user) {
            return next(new AppError_1.AppError('User not authenticated', 401));
        }
        // Super Admin has implicit full access to everything
        if (req.user.role === constants_1.ROLES.SUPER_ADMIN) {
            return next();
        }
        if (!allowedRoles.includes(req.user.role)) {
            return next(new AppError_1.AppError('You do not have permission to perform this action', 403));
        }
        next();
    };
};
exports.authorize = authorize;
// Reusable preset middlewares
exports.requireSuperAdmin = (0, exports.authorize)([constants_1.ROLES.SUPER_ADMIN]);
exports.requireHrOrAbove = (0, exports.authorize)([constants_1.ROLES.SUPER_ADMIN, constants_1.ROLES.HR_MANAGER]);
