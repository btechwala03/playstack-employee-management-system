"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDashboardSummary = void 0;
const dashboard_service_1 = require("../services/dashboard.service");
const response_1 = require("../utils/response");
const getDashboardSummary = async (req, res) => {
    const summary = await dashboard_service_1.dashboardService.getDashboardSummary();
    (0, response_1.sendSuccess)(res, 200, summary, 'Dashboard summary fetched successfully');
};
exports.getDashboardSummary = getDashboardSummary;
