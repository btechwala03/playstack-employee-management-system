import React from 'react';
import { LayoutDashboard, Users, GitBranch, Settings, LogOut, Bell, Building2, Moon, Sun, AlertCircle, ChevronRight, ChevronLeft, ChevronUp, ChevronDown, ArrowUpDown, X, Filter, Plus, Pencil, Trash2, Eye, Menu } from "lucide-react";
import { Link, useLocation } from 'react-router-dom';

// ─── Helpers ──────────────────────────────────────────────────────────────────
export function getInitials(name: string): string {
  if (!name) return 'U';
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

const AVATAR_GRADIENTS = [
  "from-violet-500 to-indigo-600",
  "from-blue-500 to-cyan-600",
  "from-emerald-500 to-teal-600",
  "from-orange-500 to-amber-600",
  "from-rose-500 to-pink-600",
  "from-sky-500 to-blue-600",
  "from-purple-500 to-violet-600",
  "from-teal-500 to-emerald-600",
];

export function avatarGradient(name: string): string {
  if (!name) return AVATAR_GRADIENTS[0];
  return AVATAR_GRADIENTS[name.charCodeAt(0) % AVATAR_GRADIENTS.length];
}

export function formatCurrency(n: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

export function formatDate(d: string): string {
  if (!d) return '';
  return new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

// ─── Micro Components ─────────────────────────────────────────────────────────
export function Av({ name, size = "md" }: { name: string; size?: "xs" | "sm" | "md" | "lg" | "xl" }) {
  const sz = { xs: "w-6 h-6 text-[10px]", sm: "w-8 h-8 text-xs", md: "w-10 h-10 text-sm", lg: "w-12 h-12 text-base", xl: "w-16 h-16 text-xl" }[size];
  return (
    <div className={`${sz} rounded-full bg-gradient-to-br ${avatarGradient(name)} flex items-center justify-center font-semibold text-white flex-shrink-0`}>
      {getInitials(name)}
    </div>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    "Active": "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
    "Inactive": "bg-zinc-500/15 text-zinc-400 border-zinc-500/20",
    "On Leave": "bg-amber-500/15 text-amber-400 border-amber-500/20",
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${map[status] || map["Active"]}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${status === "Active" ? "bg-emerald-400" : status === "Inactive" ? "bg-zinc-400" : "bg-amber-400"}`} />
      {status}
    </span>
  );
}

export function RoleBadge({ role }: { role: string }) {
  const map: Record<string, string> = {
    "Super Admin": "bg-violet-500/15 text-violet-400 border-violet-500/20",
    "HR Manager": "bg-blue-500/15 text-blue-400 border-blue-500/20",
    "Employee": "bg-muted text-muted-foreground border-border",
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${map[role] || map["Employee"]}`}>
      {role}
    </span>
  );
}

export function DeptBadge({ dept }: { dept: string }) {
  const map: Record<string, string> = {
    Engineering: "bg-cyan-500/12 text-cyan-400 border-cyan-500/20",
    Design: "bg-pink-500/12 text-pink-400 border-pink-500/20",
    Product: "bg-purple-500/12 text-purple-400 border-purple-500/20",
    Marketing: "bg-orange-500/12 text-orange-400 border-orange-500/20",
    Finance: "bg-green-500/12 text-green-400 border-green-500/20",
    HR: "bg-sky-500/12 text-sky-400 border-sky-500/20",
    Leadership: "bg-violet-500/12 text-violet-400 border-violet-500/20",
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium border ${map[dept] || map["Engineering"]}`}>
      {dept}
    </span>
  );
}

export function Btn({
  children, variant = "primary", size = "md", onClick, disabled = false, type = "button", className = "",
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "danger" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
}) {
  const base = "inline-flex items-center gap-2 font-medium rounded-lg transition-all duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
  const sz = { sm: "px-3 py-1.5 text-xs", md: "px-4 py-2 text-sm", lg: "px-5 py-2.5 text-sm" }[size];
  const v = {
    primary: "bg-primary text-primary-foreground hover:opacity-90 active:scale-95",
    secondary: "bg-secondary text-secondary-foreground hover:bg-muted",
    ghost: "text-muted-foreground hover:text-foreground hover:bg-accent",
    danger: "bg-destructive/10 text-destructive border border-destructive/20 hover:bg-destructive hover:text-white",
    outline: "border border-border text-foreground hover:bg-accent",
  }[variant];
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${base} ${sz} ${v} ${className}`}>
      {children}
    </button>
  );
}

export function FieldInput({
  label, value, onChange, placeholder = "", type = "text", error, disabled = false, required = false,
}: {
  label: string; value: string; onChange: (v: string) => void;
  placeholder?: string; type?: string; error?: string; disabled?: boolean; required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
        {label}{required && <span className="text-destructive ml-1">*</span>}
      </label>
      <input
        type={type} value={value} disabled={disabled} placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-3 py-2 rounded-lg bg-input-background border text-sm text-foreground placeholder-muted-foreground transition-colors outline-none focus:ring-1 focus:ring-primary ${error ? "border-destructive/50 focus:ring-destructive" : "border-border focus:border-primary/50"} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      />
      {error && <span className="text-xs text-destructive flex items-center gap-1"><AlertCircle size={11} />{error}</span>}
    </div>
  );
}

export function FieldSelect({
  label, value, onChange, options, placeholder = "Select…", error, disabled = false, required = false,
}: {
  label: string; value: string; onChange: (v: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string; error?: string; disabled?: boolean; required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
        {label}{required && <span className="text-destructive ml-1">*</span>}
      </label>
      <select
        value={value} disabled={disabled} onChange={(e) => onChange(e.target.value)}
        className={`w-full px-3 py-2 rounded-lg bg-input-background border text-sm text-foreground transition-colors outline-none focus:ring-1 focus:ring-primary ${error ? "border-destructive/50 focus:ring-destructive" : "border-border focus:border-primary/50"} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        <option value="">{placeholder}</option>
        {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
      {error && <span className="text-xs text-destructive flex items-center gap-1"><AlertCircle size={11} />{error}</span>}
    </div>
  );
}

export function Modal({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: React.ReactNode }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-card border border-border rounded-xl shadow-2xl w-full max-w-md mx-4 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-semibold text-foreground">{title}</h3>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
            <X size={18} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export function StatCard({ label, value, icon: Icon, color, trend }: {
  label: string; value: number | string; icon: React.ElementType; color: string; trend?: string;
}) {
  return (
    <div className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors group">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">{label}</p>
          <p className="text-3xl font-bold text-foreground" style={{ fontFamily: "Outfit, sans-serif" }}>{value}</p>
          {trend && <p className="text-xs text-muted-foreground mt-1">{trend}</p>}
        </div>
        <div className={`w-10 h-10 rounded-lg ${color} flex items-center justify-center flex-shrink-0`}>
          <Icon size={18} className="text-white" />
        </div>
      </div>
    </div>
  );
}

export function ChartTooltip({ active, payload, label }: { active?: boolean; payload?: { name: string; value: number; color?: string }[]; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-popover border border-border rounded-lg p-3 shadow-xl text-sm">
      {label && <p className="text-muted-foreground text-xs mb-1.5">{label}</p>}
      {payload.map((p) => (
        <p key={p.name} className="font-medium text-foreground">
          <span style={{ color: p.color }} className="mr-1">●</span>
          {p.name}: {p.value}
        </p>
      ))}
    </div>
  );
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────
export function Sidebar({
  currentUser, onLogout, mobileOpen = false, onClose
}: {
  currentUser: { name: string, role: string } | null; onLogout: () => void; mobileOpen?: boolean; onClose?: () => void;
}) {
  const location = useLocation();
  const path = location.pathname;

  const navItems = [
    { id: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "/employees", label: "Employees", icon: Users },
    { id: "/organization", label: "Org Chart", icon: GitBranch },
    { id: "/profile", label: "My Profile", icon: Settings },
  ];
  return (
    <>
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 md:hidden" onClick={onClose} />
      )}
      <aside className={`fixed inset-y-0 left-0 z-50 w-60 transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'} h-full flex flex-col bg-sidebar border-r border-sidebar-border flex-shrink-0`}>
        <div className="px-5 py-5 border-b border-sidebar-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
              <Building2 size={16} className="text-primary-foreground" />
            </div>
            <div>
              <p className="text-sm font-semibold text-sidebar-foreground" style={{ fontFamily: "Outfit, sans-serif" }}>Nexus Corp</p>
              <p className="text-xs text-muted-foreground">EMS Platform</p>
            </div>
          </div>
          {mobileOpen && onClose && (
            <button onClick={onClose} className="md:hidden text-muted-foreground hover:text-foreground">
              <X size={18} />
            </button>
          )}
        </div>

      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {navItems.map((item) => {
          const active = path.startsWith(item.id);
          return (
            <Link
              key={item.id}
              to={item.id}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                active
                  ? "bg-primary/15 text-primary"
                  : "text-muted-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent"
              }`}
            >
              <item.icon size={16} className={active ? "text-primary" : ""} />
              {item.label}
              {active && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />}
            </Link>
          );
        })}
      </nav>

      {currentUser && (
        <div className="px-3 py-4 border-t border-sidebar-border">
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-sidebar-accent transition-colors group">
            <Av name={currentUser.name} size="sm" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-foreground truncate">{currentUser.name}</p>
              <p className="text-xs text-muted-foreground truncate">{currentUser.role}</p>
            </div>
            <button
              onClick={onLogout}
              className="md:opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive"
              title="Sign out"
            >
              <LogOut size={15} />
            </button>
          </div>
        </div>
      )}
    </aside>
    </>
  );
}

// ─── TopBar ───────────────────────────────────────────────────────────────────
export function TopBar({
  title, subtitle, actions, isDark, toggleDark,
}: {
  title: string; subtitle?: string; actions?: React.ReactNode; isDark: boolean; toggleDark: () => void;
}) {
  return (
    <header className="h-14 flex items-center justify-between px-4 md:px-6 border-b border-border bg-background flex-shrink-0">
      <div className="flex items-center gap-3">
        <button
          onClick={() => window.dispatchEvent(new Event('toggle-mobile-menu'))}
          className="md:hidden w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
        >
          <Menu size={18} />
        </button>
        <div>
          <h1 className="text-base font-semibold text-foreground" style={{ fontFamily: "Outfit, sans-serif" }}>{title}</h1>
          {subtitle && <p className="text-xs text-muted-foreground hidden sm:block">{subtitle}</p>}
        </div>
      </div>
      <div className="flex items-center gap-2 md:gap-3 overflow-x-auto">
        {actions}
        <button
          onClick={toggleDark}
          className="w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors flex-shrink-0"
        >
          {isDark ? <Sun size={15} /> : <Moon size={15} />}
        </button>
        <button className="hidden sm:flex w-8 h-8 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors relative flex-shrink-0">
          <Bell size={15} />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-primary" />
        </button>
      </div>
    </header>
  );
}
