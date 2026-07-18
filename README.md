# Nexus - Employee Management System

![Nexus Hero Placeholder](https://via.placeholder.com/1200x400?text=Nexus+Employee+Management+System)

## 📋 Project Overview

Nexus is a full-stack Employee Management System designed to provide administrators and HR personnel with powerful tools to manage employees, track organizational hierarchies, and enforce Role-Based Access Control (RBAC).

## ✨ Features

- **Authentication & Authorization**: Secure JWT-based login with hashed passwords.
- **Role-Based Access Control (RBAC)**: 
  - **Super Admin**: Full CRUD capabilities, can assign roles and managers, and manage other admins.
  - **HR Manager**: Can create and edit employees, but cannot delete or assign Super Admin roles.
  - **Employee**: Can view their own profile and edit permitted fields.
- **Employee CRUD**: Complete management of employee records with comprehensive validations.
- **Organizational Hierarchy**: Assign reporting managers and visualize the direct report structure. Prevents circular reporting logic.
- **Interactive Dashboard**: Real-time statistics fetched directly from the database for total, active, and inactive employees.
- **Search, Filter & Sorting**: Efficiently locate employees by name, email, department, role, or status.
- **Responsive UI**: Fully optimized for Desktop, Tablet, and Mobile Android/iOS devices.

## 🛠️ Tech Stack

**Frontend:**
- React (Vite)
- TypeScript
- Tailwind CSS (Utility-first styling without frameworks)
- React Router DOM
- React Query (Data fetching)
- Recharts (Dashboard visualization)

**Backend:**
- Node.js & Express.js
- TypeScript
- MongoDB & Mongoose
- JSON Web Tokens (JWT) & bcrypt
- Zod (Request Validation)
- Helmet & Express Rate Limit (Security)

## 🚀 Deployment

- **Frontend (Vercel)**: [Live Demo URL](https://playstack-employee-management-system-production.up.railway.app)
- **Backend (Railway)**: [Live API URL](https://playstack-employee-management-system-production.up.railway.app)

## 📦 Installation & Running Locally

### Prerequisites
- Node.js (v18+)
- MongoDB (Local or Atlas URI)

### Environment Variables

**Backend (`backend/.env`)**
```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/nexus
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=24h
```

**Frontend (`frontend/.env`)**
```env
VITE_API_URL=http://localhost:5000/api
```

### Steps to Run

1. **Clone the repository**
```bash
git clone https://github.com/btechwala03/playstack-employee-management-system.git
cd playstack-employee-management-system
```

2. **Start the Backend**
```bash
cd backend
npm install
npm run dev
```

3. **Start the Frontend (in a new terminal)**
```bash
cd frontend
npm install --legacy-peer-deps
npm run dev
```

## 📂 Folder Structure

```
playstack/
├── backend/                  # Express/Node API
│   ├── src/
│   │   ├── controllers/      # Route logic
│   │   ├── middlewares/      # Auth, RBAC, Validation
│   │   ├── models/           # Mongoose schemas
│   │   ├── repositories/     # Database queries
│   │   ├── routes/           # Express routes
│   │   ├── services/         # Business logic
│   │   └── validators/       # Zod schemas
│   └── package.json
└── frontend/                 # React UI
    ├── src/
    │   ├── components/       # Shared UI components
    │   ├── hooks/            # React Query hooks
    │   ├── layouts/          # Layout wrappers
    │   ├── pages/            # Page components
    │   ├── providers/        # Context providers
    │   └── services/         # API clients
    └── package.json
```

## 📖 API Documentation

Please see the [API_DOCUMENTATION.md](./API_DOCUMENTATION.md) file for comprehensive API endpoint details.

## 🔒 Security Enhancements

- Input sanitization and validation using Zod.
- Secure HTTP headers via Helmet.
- Bruteforce protection via Rate Limiting.
- Passwords hashed via bcrypt before saving to DB.
- Prevention of NoSQL injections.
