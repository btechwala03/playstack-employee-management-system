# Deployment Guide

This guide outlines how to prepare and deploy both the Nexus EMS backend and frontend to modern cloud hosting providers.

## 1. Backend Deployment (e.g., Render, Railway, Heroku)

The backend is a standard Node.js Express application written in TypeScript.

### Prerequisites
- Provision a **MongoDB Atlas** cluster (or any hosted MongoDB).
- Generate a secure JWT Secret string.

### Build Steps
The backend must be compiled from TypeScript to JavaScript before deployment.
```bash
cd backend
npm install
npm run build
```
This generates the compiled code in `backend/dist/`.

### Deployment Configuration
Ensure your hosting provider executes the following start command:
```bash
node dist/index.js
```
*(Note: If your entry point is `server.js`, adjust accordingly: `node dist/server.js`)*

### Environment Variables
Configure the following in your hosting provider's dashboard:
- `NODE_ENV`: `production`
- `PORT`: `5000` (or leave default, as hosting platforms inject their own)
- `MONGO_URI`: `<Your MongoDB Atlas Connection String>`
- `JWT_SECRET`: `<Your Secure Secret Key>`
- `JWT_EXPIRES_IN`: `7d`

## 2. Frontend Deployment (e.g., Vercel, Netlify, Cloudflare Pages)

The frontend is a Vite-powered React application.

### Build Steps
```bash
cd frontend
npm install
npm run build
```
This outputs a production-ready static bundle into `frontend/dist/`.

### Vercel Deployment (Recommended)
1. Connect your GitHub repository to Vercel.
2. Select the `/frontend` directory as the Root Directory.
3. Vercel will automatically detect Vite and set:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Add Environment Variables:
   - `VITE_API_URL`: `<Your deployed Backend URL>` (e.g., `https://nexus-backend.onrender.com/api`)

### Note on Client-Side Routing
If deploying to a static host (like Netlify or AWS S3), ensure you configure fallback routing (rewrites) so that all requests route to `index.html`, allowing React Router to handle the URL paths. Vercel handles this automatically for Vite projects.
