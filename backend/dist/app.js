"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const error_middleware_1 = require("./middlewares/error.middleware");
const routes_1 = __importDefault(require("./routes"));
exports.app = (0, express_1.default)();
// Parse JSON with body size limit
exports.app.use((0, cors_1.default)());
exports.app.use(express_1.default.json({ limit: '10kb' }));
// Security Middlewares
exports.app.use((0, helmet_1.default)());
// Rate Limiting
const apiLimiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    standardHeaders: true,
    legacyHeaders: false,
    message: { status: 'error', message: 'Too many requests, please try again later.' }
});
exports.app.use('/api', apiLimiter);
// Routes
exports.app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'success', message: 'API is running' });
});
exports.app.get('/api/v1/health', (req, res) => {
    res.status(200).json({ status: 'success', message: 'API is running' });
});
exports.app.use('/api', routes_1.default);
// Global Error Handler
exports.app.use(error_middleware_1.errorHandler);
