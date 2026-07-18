"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startupErrors = void 0;
const app_1 = require("./app");
const db_1 = require("./config/db");
const env_1 = require("./config/env");
exports.startupErrors = [];
process.on('uncaughtException', (err) => {
    console.error('UNCAUGHT EXCEPTION:', err);
    exports.startupErrors.push('UNCAUGHT EXCEPTION: ' + err.message + '\n' + err.stack);
});
process.on('unhandledRejection', (reason, promise) => {
    console.error('UNHANDLED REJECTION:', reason);
    exports.startupErrors.push('UNHANDLED REJECTION: ' + String(reason));
});
const startServer = async () => {
    app_1.app.listen(Number(env_1.ENV.PORT), '0.0.0.0', () => {
        console.log(`Server running in ${env_1.ENV.NODE_ENV} mode on port ${env_1.ENV.PORT}`);
    });
    await (0, db_1.connectDB)();
};
startServer();
