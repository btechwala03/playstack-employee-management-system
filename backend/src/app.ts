import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { errorHandler } from './middlewares/error.middleware';
import apiRoutes from './routes';

export const app = express();

// Parse JSON with body size limit
app.use(cors());
app.use(express.json({ limit: '10kb' }));

// Security Middlewares
app.use(helmet());

// Rate Limiting
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: { status: 'error', message: 'Too many requests, please try again later.' }
});
app.use('/api', apiLimiter);

// Routes
app.get('/api', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to the PlayStack Employee Management API',
    version: '1.0.0',
    documentation: 'Coming Soon',
    health: '/api/health',
    availableEndpoints: {
      auth: '/api/auth',
      employees: '/api/employees',
      dashboard: '/api/dashboard',
      organization: '/api/organization'
    }
  });
});

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'success', message: 'API is running' });
});

app.get('/api/v1/health', (req, res) => {
  res.status(200).json({ status: 'success', message: 'API is running' });
});

app.use('/api', apiRoutes);

// Global Error Handler
app.use(errorHandler);
