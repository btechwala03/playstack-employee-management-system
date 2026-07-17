import express from 'express';
import cors from 'cors';
import { errorHandler } from './middlewares/error.middleware';
import apiRoutes from './routes';

export const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/v1/health', (req, res) => {
  res.status(200).json({ status: 'success', message: 'API is running' });
});

app.use('/api', apiRoutes);

// Global Error Handler
app.use(errorHandler);
