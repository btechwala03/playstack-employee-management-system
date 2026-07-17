import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { AuthResponse } from '../services/auth.service';
import { authService } from '../services/auth.service';
import { apiClient } from '../services/api.client';

export interface User {
  _id: string;
  employeeId: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  department: string;
  designation: string;
  status: string;
  profileImage?: string;
  phone?: string;
  joiningDate?: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;
}

interface AuthContextType extends AuthState {
  login: (data: AuthResponse) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
    isLoading: true,
  });

  // Session Restoration
  useEffect(() => {
    const token = localStorage.getItem('playstack_token');
    const userStr = localStorage.getItem('playstack_user');

    if (token && userStr) {
      try {
        const user = JSON.parse(userStr);
        setAuthState({ isAuthenticated: true, user, isLoading: false });
      } catch (e) {
        // Invalid session data
        localStorage.removeItem('playstack_token');
        localStorage.removeItem('playstack_user');
        setAuthState({ isAuthenticated: false, user: null, isLoading: false });
      }
    } else {
      setAuthState({ isAuthenticated: false, user: null, isLoading: false });
    }
  }, []);

  const login = (data: AuthResponse) => {
    localStorage.setItem('playstack_token', data.token);
    localStorage.setItem('playstack_user', JSON.stringify(data.employee));
    setAuthState({ isAuthenticated: true, user: data.employee, isLoading: false });
  };

  const logout = async () => {
    await authService.logout();
    localStorage.removeItem('playstack_token');
    localStorage.removeItem('playstack_user');
    setAuthState({ isAuthenticated: false, user: null, isLoading: false });
    // Force a full reload to clear all React Query cache and state
    window.location.href = '/login';
  };

  // Provide an interceptor hook here if needed, but it's already in api.client.ts
  // api.client.ts handles 401 and redirecting to login

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {!authState.isLoading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
