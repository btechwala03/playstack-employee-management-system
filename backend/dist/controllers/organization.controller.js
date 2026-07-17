"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateManager = exports.getDirectReports = exports.getOrganizationTree = void 0;
const organization_service_1 = require("../services/organization.service");
const response_1 = require("../utils/response");
const getOrganizationTree = async (req, res) => {
    const tree = await organization_service_1.organizationService.getOrganizationTree();
    (0, response_1.sendSuccess)(res, 200, tree, 'Organization tree fetched successfully');
};
exports.getOrganizationTree = getOrganizationTree;
const getDirectReports = async (req, res) => {
    const id = req.params.id;
    const reports = await organization_service_1.organizationService.getDirectReports(id);
    (0, response_1.sendSuccess)(res, 200, reports, 'Direct reports fetched successfully');
};
exports.getDirectReports = getDirectReports;
const updateManager = async (req, res) => {
    const id = req.params.id;
    const { newManagerId } = req.body;
    const employee = await organization_service_1.organizationService.updateManager(id, newManagerId || null);
    (0, response_1.sendSuccess)(res, 200, employee, 'Manager updated successfully');
};
exports.updateManager = updateManager;
