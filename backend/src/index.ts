import { app } from './app';
import { connectDB } from './config/db';
import { ENV } from './config/env';
export let startupErrors: string[] = [];

process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION:', err);
  startupErrors.push('UNCAUGHT EXCEPTION: ' + err.message + '\n' + err.stack);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('UNHANDLED REJECTION:', reason);
  startupErrors.push('UNHANDLED REJECTION: ' + String(reason));
});

const startServer = async () => {
  app.listen(Number(ENV.PORT), '0.0.0.0', () => {
    console.log(`Server running in ${ENV.NODE_ENV} mode on port ${ENV.PORT}`);
  });
  
  await connectDB();
};

startServer();
