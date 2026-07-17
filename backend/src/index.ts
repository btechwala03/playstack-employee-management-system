import { app } from './app';
import { connectDB } from './config/db';
import { ENV } from './config/env';

process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('UNHANDLED REJECTION:', reason);
});

const startServer = async () => {
  app.listen(Number(ENV.PORT), '0.0.0.0', () => {
    console.log(`Server running in ${ENV.NODE_ENV} mode on port ${ENV.PORT}`);
  });
  
  await connectDB();
};

startServer();
