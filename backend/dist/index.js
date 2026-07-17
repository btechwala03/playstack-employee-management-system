"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const db_1 = require("./config/db");
const env_1 = require("./config/env");
process.on('uncaughtException', (err) => {
    console.error('UNCAUGHT EXCEPTION:', err);
});
process.on('unhandledRejection', (reason, promise) => {
    console.error('UNHANDLED REJECTION:', reason);
});
const startServer = async () => {
    app_1.app.listen(Number(env_1.ENV.PORT), '0.0.0.0', () => {
        console.log(`Server running in ${env_1.ENV.NODE_ENV} mode on port ${env_1.ENV.PORT}`);
    });
    await (0, db_1.connectDB)();
};
startServer();
