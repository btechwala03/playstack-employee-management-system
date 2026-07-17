"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employee_controller_1 = require("../controllers/employee.controller");
const validate_middleware_1 = require("../middlewares/validate.middleware");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const role_middleware_1 = require("../middlewares/role.middleware");
const employee_validator_1 = require("../validators/employee.validator");
const asyncWrapper_1 = require("../utils/asyncWrapper");
const router = (0, express_1.Router)();
// Protect all employee routes
router.use(auth_middleware_1.authenticate);
// Routes
router.post('/', role_middleware_1.requireHrOrAbove, (0, validate_middleware_1.validate)(employee_validator_1.createEmployeeSchema), (0, asyncWrapper_1.asyncWrapper)(employee_controller_1.createEmployee));
router.get('/', role_middleware_1.requireHrOrAbove, (0, asyncWrapper_1.asyncWrapper)(employee_controller_1.getEmployees));
router.get('/:id', (0, asyncWrapper_1.asyncWrapper)(employee_controller_1.getEmployeeById));
router.put('/:id', (0, validate_middleware_1.validate)(employee_validator_1.updateEmployeeSchema), (0, asyncWrapper_1.asyncWrapper)(employee_controller_1.updateEmployee));
router.delete('/:id', role_middleware_1.requireHrOrAbove, (0, asyncWrapper_1.asyncWrapper)(employee_controller_1.deleteEmployee));
exports.default = router;
