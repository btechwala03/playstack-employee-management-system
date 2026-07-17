import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider';
import { Sidebar } from '../components/FigmaShared';
import { mapRoleToFigma } from '../utils/mappers';

export const DashboardLayout = () => {
  const { logout, user } = useAuth();

  const figmaUser = user ? {
    name: `${user.firstName} ${user.lastName}`,
    role: mapRoleToFigma(user.role)
  } : null;

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      <Sidebar currentUser={figmaUser} onLogout={logout} />
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <Outlet />
      </div>
    </div>
  );
};
