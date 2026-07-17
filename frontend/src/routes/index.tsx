import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { Loader } from '../components/ui/Loader';
import { useAuth } from '../providers/AuthProvider';

// Lazy loading pages
const Login = lazy(() => import('../pages/Login'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Employees = lazy(() => import('../pages/Employees'));
const EmployeeDetails = lazy(() => import('../pages/EmployeeDetails'));
const Organization = lazy(() => import('../pages/Organization'));
const Profile = lazy(() => import('../pages/Profile'));
const Unauthorized = lazy(() => import('../pages/Unauthorized'));
const NotFound = lazy(() => import('../pages/NotFound'));

const Loadable = (Component: React.ComponentType) => (props: any) => (
  <Suspense fallback={<div className="flex h-full w-full items-center justify-center p-8"><Loader size="lg" /></div>}>
    <Component {...props} />
  </Suspense>
);

interface AuthGuardProps {
  children: React.ReactNode;
  allowedRoles?: string[];
}

const AuthGuard = ({ children, allowedRoles }: AuthGuardProps) => {
  const { isAuthenticated, user, isLoading } = useAuth();

  if (isLoading) {
    return <div className="flex h-screen items-center justify-center"><Loader size="lg" /></div>;
  }

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};

export const router = createBrowserRouter([
  {
    path: '/login',
    element: Loadable(Login)({}),
  },
  {
    path: '/',
    element: <AuthGuard><DashboardLayout /></AuthGuard>,
    children: [
      {
        path: '/',
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: 'dashboard',
        element: Loadable(Dashboard)({}),
      },
      {
        path: 'employees',
        element: <AuthGuard allowedRoles={['SUPER_ADMIN', 'HR_MANAGER']}>{Loadable(Employees)({})}</AuthGuard>,
      },
      {
        path: 'employees/:id',
        element: <AuthGuard allowedRoles={['SUPER_ADMIN', 'HR_MANAGER']}>{Loadable(EmployeeDetails)({})}</AuthGuard>, // Employee viewing own profile is on /profile
      },
      {
        path: 'organization',
        element: <AuthGuard allowedRoles={['SUPER_ADMIN', 'HR_MANAGER']}>{Loadable(Organization)({})}</AuthGuard>,
      },
      {
        path: 'profile',
        element: Loadable(Profile)({}),
      },
      {
        path: 'unauthorized',
        element: Loadable(Unauthorized)({}),
      },
      {
        path: '*',
        element: Loadable(NotFound)({}),
      },
    ],
  },
]);
