"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const asyncWrapper_1 = require("../utils/asyncWrapper");
const validate_middleware_1 = require("../middlewares/validate.middleware");
const zod_1 = require("zod");
const router = (0, express_1.Router)();
const loginSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string().email('Invalid email format'),
        password: zod_1.z.string().min(1, 'Password is required'),
    }),
});
router.post('/login', (0, validate_middleware_1.validate)(loginSchema), (0, asyncWrapper_1.asyncWrapper)(auth_controller_1.login));
router.post('/logout', (0, asyncWrapper_1.asyncWrapper)(auth_controller_1.logout));
exports.default = router;
