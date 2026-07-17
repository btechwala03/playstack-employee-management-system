"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const organization_controller_1 = require("../controllers/organization.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const role_middleware_1 = require("../middlewares/role.middleware");
const asyncWrapper_1 = require("../utils/asyncWrapper");
const router = (0, express_1.Router)();
router.use(auth_middleware_1.authenticate);
router.use(role_middleware_1.requireHrOrAbove); // Org features are for HR/Super Admin only
router.get('/tree', (0, asyncWrapper_1.asyncWrapper)(organization_controller_1.getOrganizationTree));
router.get('/:id/reportees', (0, asyncWrapper_1.asyncWrapper)(organization_controller_1.getDirectReports));
router.patch('/:id/manager', (0, asyncWrapper_1.asyncWrapper)(organization_controller_1.updateManager));
exports.default = router;
