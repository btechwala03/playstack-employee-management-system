import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider';
import { Sidebar } from '../components/FigmaShared';
import { mapRoleToFigma } from '../utils/mappers';

export const DashboardLayout = () => {
  const { logout, user } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleToggle = () => setMobileMenuOpen((prev) => !prev);
    window.addEventListener('toggle-mobile-menu', handleToggle);
    return () => window.removeEventListener('toggle-mobile-menu', handleToggle);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const figmaUser = user ? {
    name: `${user.firstName} ${user.lastName}`,
    role: mapRoleToFigma(user.role)
  } : null;

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      <Sidebar currentUser={figmaUser} onLogout={logout} mobileOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <Outlet />
      </div>
    </div>
  );
};
