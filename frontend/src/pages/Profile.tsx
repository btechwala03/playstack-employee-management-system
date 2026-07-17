import React, { useState, useEffect } from 'react';
import { useAuth } from '../providers/AuthProvider';
import { useUpdateEmployee } from '../hooks/useEmployees';
import { useTheme } from '../providers/ThemeProvider';
import { mapEmployeeToFigma } from '../utils/mappers';
import { TopBar, Av, RoleBadge, DeptBadge, FieldInput, Btn } from '../components/FigmaShared';
import { Check, X, Moon, Sun } from 'lucide-react';

export default function Profile() {
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const updateMutation = useUpdateEmployee();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (user) {
      setName(`${user.firstName} ${user.lastName}`);
      setPhone(user.phone || '');
    }
  }, [user]);

  if (!user) return null;

  const figmaUser = mapEmployeeToFigma(user as any);
  const isDark = theme === 'dark';

  const handleSave = async () => {
    const parts = name.split(' ');
    const firstName = parts[0] || '';
    const lastName = parts.slice(1).join(' ') || '';

    try {
      await updateMutation.mutateAsync({
        id: user._id,
        data: { firstName, lastName, phone }
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch (e) {
      // Handled by react-query
    }
  };

  const canCreate = user.role === 'SUPER_ADMIN' || user.role === 'HR_MANAGER';
  const canDelete = user.role === 'SUPER_ADMIN';

  return (
    <div className="flex flex-col h-full overflow-hidden bg-background">
      <TopBar title="Settings" subtitle="Manage your account preferences" isDark={isDark} toggleDark={toggleTheme} />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-sm font-semibold text-foreground mb-5" style={{ fontFamily: "Outfit, sans-serif" }}>Profile</h3>
            <div className="flex items-center gap-5 mb-6 pb-6 border-b border-border">
              <Av name={name} size="xl" />
              <div>
                <p className="text-base font-semibold text-foreground">{name}</p>
                <p className="text-sm text-muted-foreground">{user.email}</p>
                <div className="flex items-center gap-2 mt-2">
                  <RoleBadge role={figmaUser.role} />
                  <DeptBadge dept={figmaUser.department} />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <FieldInput label="Full Name" value={name} onChange={setName} required />
              <FieldInput label="Phone" value={phone} onChange={setPhone} />
              <FieldInput label="Email" value={user.email} onChange={() => {}} disabled />
              <FieldInput label="Employee ID" value={user.employeeId} onChange={() => {}} disabled />
            </div>
            <div className="mt-4 flex items-center gap-3">
              <Btn variant="primary" onClick={handleSave} disabled={updateMutation.isPending}>
                {saved ? <><Check size={14} /> Saved!</> : (updateMutation.isPending ? "Saving..." : "Save Changes")}
              </Btn>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-sm font-semibold text-foreground mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>Access & Permissions</h3>
            <div className="space-y-3">
              {[
                { label: "View all employees", allowed: user.role !== "EMPLOYEE" },
                { label: "Create & edit employees", allowed: canCreate },
                { label: "Delete employees", allowed: canDelete },
                { label: "Assign system roles", allowed: user.role === "SUPER_ADMIN" },
                { label: "View salary information", allowed: user.role !== "EMPLOYEE" },
              ].map((p) => (
                <div key={p.label} className="flex items-center justify-between py-2.5 px-3 rounded-lg bg-muted/30">
                  <span className="text-sm text-foreground">{p.label}</span>
                  <span className={`flex items-center gap-1.5 text-xs font-medium ${p.allowed ? "text-emerald-400" : "text-muted-foreground"}`}>
                    {p.allowed ? <><Check size={12} /> Allowed</> : <><X size={12} /> Restricted</>}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-sm font-semibold text-foreground mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>Appearance</h3>
            <div className="flex items-center justify-between py-2.5 px-3 rounded-lg bg-muted/30">
              <div>
                <p className="text-sm text-foreground">Dark Mode</p>
                <p className="text-xs text-muted-foreground">Switch between light and dark themes</p>
              </div>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border hover:bg-accent transition-colors text-sm text-foreground"
              >
                {isDark ? <><Sun size={14} /> Light</> : <><Moon size={14} /> Dark</>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
