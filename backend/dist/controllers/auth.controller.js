"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.login = void 0;
const auth_service_1 = require("../services/auth.service");
const response_1 = require("../utils/response");
const login = async (req, res) => {
    const { email, password } = req.body;
    const data = await auth_service_1.authService.login(email, password);
    (0, response_1.sendSuccess)(res, 200, data, 'Login successful');
};
exports.login = login;
const logout = async (req, res) => {
    // In a stateless JWT architecture, logout is typically handled client-side by destroying the token.
    // We can provide a generic success response.
    (0, response_1.sendSuccess)(res, 200, null, 'Logout successful');
};
exports.logout = logout;
