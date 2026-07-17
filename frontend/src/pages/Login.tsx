import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider';
import { FieldInput, Btn } from '../components/FigmaShared';
import { Building2, AlertCircle, ChevronRight } from 'lucide-react';
import toast from 'react-hot-toast';
import { authService } from '../services/auth.service';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const demoAccounts = [
    { label: "Super Admin", email: "admin@playstack.com", password: "Admin@123", hint: "Full access" },
    { label: "HR Manager", email: "hr@playstack.com", password: "Hr@123", hint: "Manage employees" },
    { label: "Employee", email: "employee@playstack.com", password: "Employee@123", hint: "Own profile only" },
  ];

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email.trim() || !password) {
      setError('Please enter both email and password.');
      return;
    }

    try {
      setLoading(true);
      const res = await authService.login({ email: email.trim().toLowerCase(), password });
      login(res);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to login');
      toast.error('Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mx-auto mb-4">
            <Building2 size={22} className="text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold text-foreground" style={{ fontFamily: "Outfit, sans-serif" }}>Nexus EMS</h1>
          <p className="text-sm text-muted-foreground mt-1">Employee Management System</p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
          <h2 className="text-lg font-semibold text-foreground mb-6" style={{ fontFamily: "Outfit, sans-serif" }}>Sign in to your account</h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <FieldInput label="Work email" value={email} onChange={setEmail} type="email" placeholder="you@playstack.com" required />
            <FieldInput label="Password" value={password} onChange={setPassword} type="password" placeholder="Enter your password" required />
            {error && (
              <div id="login-error" className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                <AlertCircle size={14} />{error}
              </div>
            )}
            <Btn type="submit" variant="primary" size="lg" className="w-full justify-center" disabled={loading}>
              {loading ? 'Signing in...' : 'Sign in'}
            </Btn>
          </form>

          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground mb-3 font-medium uppercase tracking-wider">Quick demo access</p>
            <div className="space-y-2">
              {demoAccounts.map((acc) => (
                <button
                  type="button"
                  key={acc.email}
                  onClick={() => { setEmail(acc.email); setPassword(acc.password); setError(""); }}
                  className="w-full flex items-center justify-between p-3 rounded-lg border border-border hover:border-primary/40 hover:bg-accent transition-all text-left group"
                >
                  <div>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{acc.label}</p>
                    <p className="text-xs text-muted-foreground">{acc.hint}</p>
                  </div>
                  <ChevronRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
