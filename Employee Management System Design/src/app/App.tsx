import { useState, useMemo } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
} from "recharts";
import {
  LayoutDashboard, Users, GitBranch, Settings, LogOut, Search, Plus,
  Pencil, Trash2, Eye, ChevronRight, X, Filter, ArrowUpDown, Bell,
  Building2, UserCheck, ChevronLeft, Mail, Phone, Calendar, DollarSign,
  Shield, User, AlertCircle, ChevronDown, Check, Moon, Sun, TrendingUp,
  MoreHorizontal, ChevronUp,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────
type Role = "Super Admin" | "HR Manager" | "Employee";
type Status = "Active" | "Inactive" | "On Leave";
type Department =
  | "Engineering" | "Design" | "Product"
  | "Marketing" | "Finance" | "HR" | "Leadership";
type View = "login" | "dashboard" | "employees" | "detail" | "form" | "org" | "settings";

interface Employee {
  id: string;
  employeeId: string;
  name: string;
  email: string;
  phone: string;
  department: Department;
  designation: string;
  salary: number;
  joiningDate: string;
  status: Status;
  role: Role;
  managerId: string | null;
}

interface TreeNode {
  employee: Employee;
  children: TreeNode[];
}

type FormData = Omit<Employee, "id" | "employeeId">;
type FormErrors = Partial<Record<keyof FormData, string>>;

// ─── Mock Data ────────────────────────────────────────────────────────────────
const SEED_EMPLOYEES: Employee[] = [
  { id: "1", employeeId: "EMP-001", name: "Jordan Walsh", email: "jordan@nexuscorp.io", phone: "+1 (555) 901-2201", department: "Leadership", designation: "Chief Executive Officer", salary: 280000, joiningDate: "2019-01-15", status: "Active", role: "Super Admin", managerId: null },
  { id: "2", employeeId: "EMP-002", name: "Sarah Chen", email: "sarah@nexuscorp.io", phone: "+1 (555) 901-2202", department: "HR", designation: "HR Director", salary: 145000, joiningDate: "2019-03-20", status: "Active", role: "HR Manager", managerId: "1" },
  { id: "3", employeeId: "EMP-003", name: "Marcus Reid", email: "marcus@nexuscorp.io", phone: "+1 (555) 901-2203", department: "Engineering", designation: "Chief Technology Officer", salary: 240000, joiningDate: "2019-06-10", status: "Active", role: "Employee", managerId: "1" },
  { id: "4", employeeId: "EMP-004", name: "Priya Sharma", email: "priya@nexuscorp.io", phone: "+1 (555) 901-2204", department: "Engineering", designation: "VP Engineering", salary: 190000, joiningDate: "2020-02-14", status: "Active", role: "Employee", managerId: "3" },
  { id: "5", employeeId: "EMP-005", name: "Alex Torres", email: "alex@nexuscorp.io", phone: "+1 (555) 901-2205", department: "Engineering", designation: "Senior Engineer", salary: 155000, joiningDate: "2020-08-01", status: "Active", role: "Employee", managerId: "4" },
  { id: "6", employeeId: "EMP-006", name: "Sam Liu", email: "sam@nexuscorp.io", phone: "+1 (555) 901-2206", department: "Engineering", designation: "Software Engineer", salary: 125000, joiningDate: "2021-03-15", status: "Active", role: "Employee", managerId: "4" },
  { id: "7", employeeId: "EMP-007", name: "Jamie Park", email: "jamie@nexuscorp.io", phone: "+1 (555) 901-2207", department: "Design", designation: "Design Lead", salary: 140000, joiningDate: "2020-05-20", status: "Active", role: "Employee", managerId: "1" },
  { id: "8", employeeId: "EMP-008", name: "Riley Moss", email: "riley@nexuscorp.io", phone: "+1 (555) 901-2208", department: "Design", designation: "UI/UX Designer", salary: 105000, joiningDate: "2021-07-12", status: "On Leave", role: "Employee", managerId: "7" },
  { id: "9", employeeId: "EMP-009", name: "Morgan Blake", email: "morgan@nexuscorp.io", phone: "+1 (555) 901-2209", department: "Product", designation: "Head of Product", salary: 175000, joiningDate: "2020-01-08", status: "Active", role: "Employee", managerId: "1" },
  { id: "10", employeeId: "EMP-010", name: "Casey Quinn", email: "casey@nexuscorp.io", phone: "+1 (555) 901-2210", department: "Marketing", designation: "Marketing Director", salary: 145000, joiningDate: "2020-09-30", status: "Active", role: "Employee", managerId: "1" },
  { id: "11", employeeId: "EMP-011", name: "Taylor Kim", email: "taylor@nexuscorp.io", phone: "+1 (555) 901-2211", department: "Marketing", designation: "Marketing Analyst", salary: 85000, joiningDate: "2022-01-10", status: "Active", role: "Employee", managerId: "10" },
  { id: "12", employeeId: "EMP-012", name: "Drew Evans", email: "drew@nexuscorp.io", phone: "+1 (555) 901-2212", department: "Finance", designation: "Finance Manager", salary: 155000, joiningDate: "2019-11-05", status: "Active", role: "Employee", managerId: "1" },
  { id: "13", employeeId: "EMP-013", name: "Logan Chen", email: "logan@nexuscorp.io", phone: "+1 (555) 901-2213", department: "Finance", designation: "Financial Analyst", salary: 90000, joiningDate: "2022-04-18", status: "Inactive", role: "Employee", managerId: "12" },
  { id: "14", employeeId: "EMP-014", name: "Avery White", email: "avery@nexuscorp.io", phone: "+1 (555) 901-2214", department: "HR", designation: "HR Specialist", salary: 75000, joiningDate: "2022-06-01", status: "Active", role: "Employee", managerId: "2" },
  { id: "15", employeeId: "EMP-015", name: "Blake Turner", email: "blake@nexuscorp.io", phone: "+1 (555) 901-2215", department: "Engineering", designation: "Junior Engineer", salary: 95000, joiningDate: "2023-02-20", status: "Active", role: "Employee", managerId: "5" },
];

const DEPARTMENTS: Department[] = ["Engineering", "Design", "Product", "Marketing", "Finance", "HR", "Leadership"];
const DESIGNATIONS = [
  "Chief Executive Officer", "Chief Technology Officer", "VP Engineering", "HR Director",
  "Head of Product", "Marketing Director", "Finance Manager", "Design Lead",
  "Senior Engineer", "Software Engineer", "Junior Engineer", "UI/UX Designer",
  "Marketing Analyst", "Financial Analyst", "HR Specialist", "Product Manager",
  "Data Engineer", "DevOps Engineer",
];

const MONTHLY_HIRES = [
  { month: "Jan", hires: 2 }, { month: "Feb", hires: 1 }, { month: "Mar", hires: 3 },
  { month: "Apr", hires: 2 }, { month: "May", hires: 4 }, { month: "Jun", hires: 1 },
  { month: "Jul", hires: 3 }, { month: "Aug", hires: 2 }, { month: "Sep", hires: 5 },
  { month: "Oct", hires: 2 }, { month: "Nov", hires: 3 }, { month: "Dec", hires: 1 },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function getInitials(name: string): string {
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

function avatarGradient(name: string): string {
  return AVATAR_GRADIENTS[name.charCodeAt(0) % AVATAR_GRADIENTS.length];
}

function buildTree(employees: Employee[], managerId: string | null): TreeNode[] {
  return employees
    .filter((e) => e.managerId === managerId)
    .map((e) => ({ employee: e, children: buildTree(employees, e.id) }));
}

function wouldCreateCycle(employees: Employee[], employeeId: string, newManagerId: string): boolean {
  let current: Employee | undefined = employees.find((e) => e.id === newManagerId);
  while (current) {
    if (current.id === employeeId) return true;
    current = employees.find((e) => e.id === current!.managerId);
  }
  return false;
}

function formatCurrency(n: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

function formatDate(d: string): string {
  return new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

function nextId(employees: Employee[]): { id: string; employeeId: string } {
  const max = employees.reduce((m, e) => Math.max(m, parseInt(e.id)), 0);
  const n = max + 1;
  return { id: String(n), employeeId: `EMP-${String(n).padStart(3, "0")}` };
}

function canCreate(u: Employee | null) { return u?.role === "Super Admin" || u?.role === "HR Manager"; }
function canDelete(u: Employee | null) { return u?.role === "Super Admin"; }
function canViewSalary(u: Employee | null, t: Employee) {
  return u?.role === "Super Admin" || u?.role === "HR Manager" || u?.id === t.id;
}
function canEditEmployee(u: Employee | null, t: Employee) {
  return u?.role === "Super Admin" || u?.role === "HR Manager" || u?.id === t.id;
}

function validateForm(data: Partial<FormData>, userRole: Role): FormErrors {
  const errors: FormErrors = {};
  if (!data.name || data.name.trim().length < 2) errors.name = "Name must be at least 2 characters";
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Valid email required";
  if (!data.phone || data.phone.replace(/\D/g, "").length < 10) errors.phone = "Valid phone number required";
  if (!data.department) errors.department = "Department is required";
  if (!data.designation) errors.designation = "Designation is required";
  if (userRole !== "Employee") {
    if (!data.salary || data.salary <= 0) errors.salary = "Valid salary required";
    if (!data.joiningDate) errors.joiningDate = "Joining date is required";
  }
  return errors;
}

// ─── Micro Components ─────────────────────────────────────────────────────────
function Av({ name, size = "md" }: { name: string; size?: "xs" | "sm" | "md" | "lg" | "xl" }) {
  const sz = { xs: "w-6 h-6 text-[10px]", sm: "w-8 h-8 text-xs", md: "w-10 h-10 text-sm", lg: "w-12 h-12 text-base", xl: "w-16 h-16 text-xl" }[size];
  return (
    <div className={`${sz} rounded-full bg-gradient-to-br ${avatarGradient(name)} flex items-center justify-center font-semibold text-white flex-shrink-0`}>
      {getInitials(name)}
    </div>
  );
}

function StatusBadge({ status }: { status: Status }) {
  const map: Record<Status, string> = {
    "Active": "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
    "Inactive": "bg-zinc-500/15 text-zinc-400 border-zinc-500/20",
    "On Leave": "bg-amber-500/15 text-amber-400 border-amber-500/20",
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${map[status]}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${status === "Active" ? "bg-emerald-400" : status === "Inactive" ? "bg-zinc-400" : "bg-amber-400"}`} />
      {status}
    </span>
  );
}

function RoleBadge({ role }: { role: Role }) {
  const map: Record<Role, string> = {
    "Super Admin": "bg-violet-500/15 text-violet-400 border-violet-500/20",
    "HR Manager": "bg-blue-500/15 text-blue-400 border-blue-500/20",
    "Employee": "bg-muted text-muted-foreground border-border",
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${map[role]}`}>
      {role}
    </span>
  );
}

function DeptBadge({ dept }: { dept: Department }) {
  const map: Record<Department, string> = {
    Engineering: "bg-cyan-500/12 text-cyan-400 border-cyan-500/20",
    Design: "bg-pink-500/12 text-pink-400 border-pink-500/20",
    Product: "bg-purple-500/12 text-purple-400 border-purple-500/20",
    Marketing: "bg-orange-500/12 text-orange-400 border-orange-500/20",
    Finance: "bg-green-500/12 text-green-400 border-green-500/20",
    HR: "bg-sky-500/12 text-sky-400 border-sky-500/20",
    Leadership: "bg-violet-500/12 text-violet-400 border-violet-500/20",
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium border ${map[dept]}`}>
      {dept}
    </span>
  );
}

function Btn({
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

function FieldInput({
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

function FieldSelect({
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

function Modal({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: React.ReactNode }) {
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

function StatCard({ label, value, icon: Icon, color, trend }: {
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

// ─── Custom Recharts Tooltip ──────────────────────────────────────────────────
function ChartTooltip({ active, payload, label }: { active?: boolean; payload?: { name: string; value: number; color?: string }[]; label?: string }) {
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
function Sidebar({
  view, setView, currentUser, onLogout,
}: {
  view: View; setView: (v: View) => void; currentUser: Employee | null; onLogout: () => void;
}) {
  const navItems: { id: View; label: string; icon: React.ElementType }[] = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "employees", label: "Employees", icon: Users },
    { id: "org", label: "Org Chart", icon: GitBranch },
    { id: "settings", label: "Settings", icon: Settings },
  ];
  return (
    <aside className="w-60 h-full flex flex-col bg-sidebar border-r border-sidebar-border flex-shrink-0">
      <div className="px-5 py-5 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
            <Building2 size={16} className="text-primary-foreground" />
          </div>
          <div>
            <p className="text-sm font-semibold text-sidebar-foreground" style={{ fontFamily: "Outfit, sans-serif" }}>Nexus Corp</p>
            <p className="text-xs text-muted-foreground">EMS Platform</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {navItems.map((item) => {
          const active = view === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setView(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                active
                  ? "bg-primary/15 text-primary"
                  : "text-muted-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent"
              }`}
            >
              <item.icon size={16} className={active ? "text-primary" : ""} />
              {item.label}
              {active && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />}
            </button>
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
              className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive"
              title="Sign out"
            >
              <LogOut size={15} />
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}

// ─── TopBar ───────────────────────────────────────────────────────────────────
function TopBar({
  title, subtitle, actions, isDark, toggleDark,
}: {
  title: string; subtitle?: string; actions?: React.ReactNode; isDark: boolean; toggleDark: () => void;
}) {
  return (
    <header className="h-14 flex items-center justify-between px-6 border-b border-border bg-background flex-shrink-0">
      <div>
        <h1 className="text-base font-semibold text-foreground" style={{ fontFamily: "Outfit, sans-serif" }}>{title}</h1>
        {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-3">
        {actions}
        <button
          onClick={toggleDark}
          className="w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
        >
          {isDark ? <Sun size={15} /> : <Moon size={15} />}
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors relative">
          <Bell size={15} />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-primary" />
        </button>
      </div>
    </header>
  );
}

// ─── Login View ───────────────────────────────────────────────────────────────
function LoginView({ employees, onLogin }: { employees: Employee[]; onLogin: (e: Employee) => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const demoAccounts = [
    { label: "Super Admin", email: "jordan@nexuscorp.io", hint: "Full access" },
    { label: "HR Manager", email: "sarah@nexuscorp.io", hint: "Manage employees" },
    { label: "Employee", email: "alex@nexuscorp.io", hint: "Own profile only" },
  ];

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const found = employees.find((emp) => emp.email === email.trim().toLowerCase());
    if (!found) { setError("No account found with that email address."); return; }
    if (password.length < 1) { setError("Please enter a password."); return; }
    onLogin(found);
  }

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
            <FieldInput label="Work email" value={email} onChange={setEmail} type="email" placeholder="you@nexuscorp.io" required />
            <FieldInput label="Password" value={password} onChange={setPassword} type="password" placeholder="Enter your password" required />
            {error && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                <AlertCircle size={14} />{error}
              </div>
            )}
            <Btn type="submit" variant="primary" size="lg" className="w-full justify-center">
              Sign in
            </Btn>
          </form>

          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground mb-3 font-medium uppercase tracking-wider">Quick demo access</p>
            <div className="space-y-2">
              {demoAccounts.map((acc) => (
                <button
                  key={acc.email}
                  onClick={() => { setEmail(acc.email); setPassword("demo1234"); setError(""); }}
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
}

// ─── Dashboard View ───────────────────────────────────────────────────────────
function DashboardView({
  employees, currentUser, setView, setSelectedId, isDark, toggleDark,
}: {
  employees: Employee[]; currentUser: Employee; setView: (v: View) => void;
  setSelectedId: (id: string) => void; isDark: boolean; toggleDark: () => void;
}) {
  const active = employees.filter((e) => e.status === "Active").length;
  const inactive = employees.filter((e) => e.status === "Inactive").length;
  const onLeave = employees.filter((e) => e.status === "On Leave").length;

  const deptData = DEPARTMENTS.map((d) => ({
    name: d === "Engineering" ? "Eng" : d === "Leadership" ? "Lead" : d === "Marketing" ? "Mktg" : d,
    count: employees.filter((e) => e.department === d).length,
  })).filter((d) => d.count > 0);

  const statusData = [
    { name: "Active", value: active, color: "#34d399" },
    { name: "Inactive", value: inactive, color: "#71717a" },
    { name: "On Leave", value: onLeave, color: "#fbbf24" },
  ];

  const recent = [...employees].sort((a, b) => new Date(b.joiningDate).getTime() - new Date(a.joiningDate).getTime()).slice(0, 5);

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <TopBar title={`Good morning, ${currentUser.name.split(" ")[0]}`} subtitle="Here's what's happening today" isDark={isDark} toggleDark={toggleDark} />
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard label="Total Employees" value={employees.length} icon={Users} color="bg-primary" trend={`+${employees.filter(e => e.joiningDate >= "2023-01-01").length} this year`} />
          <StatCard label="Active" value={active} icon={UserCheck} color="bg-emerald-500" trend="Currently working" />
          <StatCard label="Inactive" value={inactive} icon={User} color="bg-zinc-500" trend="Offboarded" />
          <StatCard label="Departments" value={DEPARTMENTS.filter(d => employees.some(e => e.department === d)).length} icon={Building2} color="bg-violet-500" trend="Across the org" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 bg-card border border-border rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-semibold text-foreground" style={{ fontFamily: "Outfit, sans-serif" }}>Employees by Department</h3>
                <p className="text-xs text-muted-foreground">Headcount distribution</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={deptData} barSize={28}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(128,128,160,0.1)" vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#8080a2" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "#8080a2" }} axisLine={false} tickLine={false} />
                <Tooltip content={<ChartTooltip />} cursor={{ fill: "rgba(124,122,245,0.06)" }} />
                <Bar dataKey="count" name="Employees" fill="#7c7af5" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-card border border-border rounded-xl p-5">
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-foreground" style={{ fontFamily: "Outfit, sans-serif" }}>Status Breakdown</h3>
              <p className="text-xs text-muted-foreground">Employment status</p>
            </div>
            <ResponsiveContainer width="100%" height={140}>
              <PieChart>
                <Pie data={statusData} cx="50%" cy="50%" innerRadius={40} outerRadius={60} paddingAngle={3} dataKey="value">
                  {statusData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                </Pie>
                <Tooltip content={<ChartTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2 mt-2">
              {statusData.map((s) => (
                <div key={s.name} className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: s.color }} />
                    {s.name}
                  </span>
                  <span className="font-medium text-foreground">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl">
          <div className="flex items-center justify-between px-5 py-4 border-b border-border">
            <div>
              <h3 className="text-sm font-semibold text-foreground" style={{ fontFamily: "Outfit, sans-serif" }}>Recent Hires</h3>
              <p className="text-xs text-muted-foreground">Latest additions to the team</p>
            </div>
            <Btn variant="ghost" size="sm" onClick={() => setView("employees")}>
              View all <ChevronRight size={14} />
            </Btn>
          </div>
          <div className="divide-y divide-border">
            {recent.map((emp) => (
              <div
                key={emp.id}
                onClick={() => { setSelectedId(emp.id); setView("detail"); }}
                className="flex items-center gap-4 px-5 py-3.5 hover:bg-accent/40 transition-colors cursor-pointer"
              >
                <Av name={emp.name} size="sm" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{emp.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{emp.designation}</p>
                </div>
                <DeptBadge dept={emp.department} />
                <StatusBadge status={emp.status} />
                <span className="text-xs text-muted-foreground w-24 text-right">{formatDate(emp.joiningDate)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Employees View ───────────────────────────────────────────────────────────
function EmployeesView({
  employees, currentUser, setView, setSelectedId, onDelete, isDark, toggleDark,
}: {
  employees: Employee[]; currentUser: Employee; setView: (v: View) => void;
  setSelectedId: (id: string) => void; onDelete: (id: string) => void; isDark: boolean; toggleDark: () => void;
}) {
  const [search, setSearch] = useState("");
  const [filterDept, setFilterDept] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterRole, setFilterRole] = useState("");
  const [sortField, setSortField] = useState<"name" | "joiningDate">("name");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [showFilters, setShowFilters] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let list = [...employees];
    if (currentUser.role === "Employee") list = list.filter((e) => e.id === currentUser.id);
    if (search) list = list.filter((e) => e.name.toLowerCase().includes(search.toLowerCase()) || e.email.toLowerCase().includes(search.toLowerCase()));
    if (filterDept) list = list.filter((e) => e.department === filterDept);
    if (filterStatus) list = list.filter((e) => e.status === filterStatus);
    if (filterRole) list = list.filter((e) => e.role === filterRole);
    list.sort((a, b) => {
      const va = sortField === "name" ? a.name : a.joiningDate;
      const vb = sortField === "name" ? b.name : b.joiningDate;
      return sortDir === "asc" ? va.localeCompare(vb) : vb.localeCompare(va);
    });
    return list;
  }, [employees, currentUser, search, filterDept, filterStatus, filterRole, sortField, sortDir]);

  function toggleSort(field: "name" | "joiningDate") {
    if (sortField === field) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else { setSortField(field); setSortDir("asc"); }
  }

  const SortIcon = ({ field }: { field: "name" | "joiningDate" }) => {
    if (sortField !== field) return <ArrowUpDown size={12} className="text-muted-foreground" />;
    return sortDir === "asc" ? <ChevronUp size={12} className="text-primary" /> : <ChevronDown size={12} className="text-primary" />;
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <TopBar
        title="Employees"
        subtitle={`${filtered.length} of ${employees.length} members`}
        isDark={isDark}
        toggleDark={toggleDark}
        actions={
          canCreate(currentUser) ? (
            <Btn variant="primary" size="sm" onClick={() => { setSelectedId(""); setView("form"); }}>
              <Plus size={14} /> Add Employee
            </Btn>
          ) : undefined
        }
      />

      <div className="flex-1 overflow-hidden flex flex-col">
        <div className="px-6 py-4 flex items-center gap-3 border-b border-border flex-shrink-0">
          <div className="relative flex-1 max-w-sm">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={search} onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name or email…"
              className="w-full pl-9 pr-3 py-2 bg-input-background border border-border rounded-lg text-sm text-foreground placeholder-muted-foreground outline-none focus:ring-1 focus:ring-primary focus:border-primary/50 transition-colors"
            />
            {search && <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"><X size={13} /></button>}
          </div>
          <Btn variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)}>
            <Filter size={13} /> Filters {(filterDept || filterStatus || filterRole) && <span className="bg-primary text-primary-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center">{[filterDept, filterStatus, filterRole].filter(Boolean).length}</span>}
          </Btn>
        </div>

        {showFilters && (
          <div className="px-6 py-3 border-b border-border bg-muted/30 flex items-center gap-3 flex-wrap flex-shrink-0">
            <select value={filterDept} onChange={(e) => setFilterDept(e.target.value)} className="px-3 py-1.5 bg-input-background border border-border rounded-lg text-xs text-foreground outline-none focus:ring-1 focus:ring-primary">
              <option value="">All Departments</option>
              {DEPARTMENTS.map((d) => <option key={d} value={d}>{d}</option>)}
            </select>
            <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="px-3 py-1.5 bg-input-background border border-border rounded-lg text-xs text-foreground outline-none focus:ring-1 focus:ring-primary">
              <option value="">All Statuses</option>
              {["Active", "Inactive", "On Leave"].map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            <select value={filterRole} onChange={(e) => setFilterRole(e.target.value)} className="px-3 py-1.5 bg-input-background border border-border rounded-lg text-xs text-foreground outline-none focus:ring-1 focus:ring-primary">
              <option value="">All Roles</option>
              {["Super Admin", "HR Manager", "Employee"].map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
            {(filterDept || filterStatus || filterRole) && (
              <button onClick={() => { setFilterDept(""); setFilterStatus(""); setFilterRole(""); }} className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1">
                <X size={11} /> Clear
              </button>
            )}
          </div>
        )}

        <div className="flex-1 overflow-y-auto">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <Users size={40} className="text-muted-foreground/40 mb-4" />
              <p className="text-sm font-medium text-muted-foreground">No employees found</p>
              <p className="text-xs text-muted-foreground/60 mt-1">Try adjusting your search or filters</p>
            </div>
          ) : (
            <table className="w-full">
              <thead className="sticky top-0 bg-card/95 backdrop-blur-sm border-b border-border z-10">
                <tr>
                  <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    <button onClick={() => toggleSort("name")} className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                      Employee <SortIcon field="name" />
                    </button>
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Department</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Role</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    <button onClick={() => toggleSort("joiningDate")} className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                      Joined <SortIcon field="joiningDate" />
                    </button>
                  </th>
                  <th className="text-right px-6 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filtered.map((emp) => (
                  <tr key={emp.id} className="hover:bg-accent/30 transition-colors group">
                    <td className="px-6 py-3.5">
                      <div className="flex items-center gap-3">
                        <Av name={emp.name} size="sm" />
                        <div>
                          <p className="text-sm font-medium text-foreground">{emp.name}</p>
                          <p className="text-xs text-muted-foreground">{emp.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3.5"><DeptBadge dept={emp.department} /></td>
                    <td className="px-4 py-3.5"><StatusBadge status={emp.status} /></td>
                    <td className="px-4 py-3.5"><RoleBadge role={emp.role} /></td>
                    <td className="px-4 py-3.5">
                      <span className="text-xs text-muted-foreground mono">{formatDate(emp.joiningDate)}</span>
                    </td>
                    <td className="px-6 py-3.5">
                      <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => { setSelectedId(emp.id); setView("detail"); }}
                          className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                          title="View"
                        >
                          <Eye size={14} />
                        </button>
                        {canEditEmployee(currentUser, emp) && (
                          <button
                            onClick={() => { setSelectedId(emp.id); setView("form"); }}
                            className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                            title="Edit"
                          >
                            <Pencil size={14} />
                          </button>
                        )}
                        {canDelete(currentUser) && emp.id !== currentUser.id && (
                          <button
                            onClick={() => setDeleteId(emp.id)}
                            className="p-1.5 rounded-md text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                            title="Delete"
                          >
                            <Trash2 size={14} />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      <Modal
        open={!!deleteId}
        onClose={() => setDeleteId(null)}
        title="Delete Employee"
      >
        <p className="text-sm text-muted-foreground mb-6">
          Are you sure you want to delete{" "}
          <span className="text-foreground font-medium">{employees.find((e) => e.id === deleteId)?.name}</span>?
          This action cannot be undone.
        </p>
        <div className="flex justify-end gap-3">
          <Btn variant="outline" onClick={() => setDeleteId(null)}>Cancel</Btn>
          <Btn variant="danger" onClick={() => { if (deleteId) { onDelete(deleteId); setDeleteId(null); } }}>
            <Trash2 size={14} /> Delete
          </Btn>
        </div>
      </Modal>
    </div>
  );
}

// ─── Employee Detail View ─────────────────────────────────────────────────────
function EmployeeDetailView({
  employee, employees, currentUser, onBack, onEdit, isDark, toggleDark,
}: {
  employee: Employee; employees: Employee[]; currentUser: Employee;
  onBack: () => void; onEdit: () => void; isDark: boolean; toggleDark: () => void;
}) {
  const manager = employees.find((e) => e.id === employee.managerId);
  const directReports = employees.filter((e) => e.managerId === employee.id);

  const fields = [
    { icon: Shield, label: "Employee ID", value: employee.employeeId, mono: true },
    { icon: Mail, label: "Email", value: employee.email },
    { icon: Phone, label: "Phone", value: employee.phone },
    { icon: Building2, label: "Department", value: employee.department },
    { icon: User, label: "Designation", value: employee.designation },
    { icon: Calendar, label: "Joined", value: formatDate(employee.joiningDate) },
    ...(canViewSalary(currentUser, employee)
      ? [{ icon: DollarSign, label: "Salary", value: formatCurrency(employee.salary), mono: true }]
      : []),
    { icon: Users, label: "Reporting To", value: manager ? manager.name : "— (Top Level)" },
  ];

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <TopBar
        title="Employee Profile"
        isDark={isDark}
        toggleDark={toggleDark}
        actions={
          <div className="flex items-center gap-2">
            <Btn variant="ghost" size="sm" onClick={onBack}><ChevronLeft size={14} /> Back</Btn>
            {canEditEmployee(currentUser, employee) && (
              <Btn variant="primary" size="sm" onClick={onEdit}><Pencil size={14} /> Edit</Btn>
            )}
          </div>
        }
      />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-card border border-border rounded-xl p-6 flex items-center gap-6">
            <Av name={employee.name} size="xl" />
            <div className="flex-1">
              <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: "Outfit, sans-serif" }}>{employee.name}</h2>
              <p className="text-sm text-muted-foreground mt-0.5">{employee.designation}</p>
              <div className="flex items-center gap-2 mt-3 flex-wrap">
                <StatusBadge status={employee.status} />
                <RoleBadge role={employee.role} />
                <DeptBadge dept={employee.department} />
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-sm font-semibold text-foreground mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>Employee Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {fields.map((f) => (
                <div key={f.label} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                  <div className="w-7 h-7 rounded-md bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <f.icon size={13} className="text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">{f.label}</p>
                    <p className={`text-sm font-medium text-foreground mt-0.5 ${f.mono ? "font-mono text-xs" : ""}`}>{f.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {directReports.length > 0 && (
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-sm font-semibold text-foreground mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>
                Direct Reports <span className="text-muted-foreground font-normal">({directReports.length})</span>
              </h3>
              <div className="space-y-2">
                {directReports.map((rep) => (
                  <div key={rep.id} className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-accent/30 transition-colors">
                    <Av name={rep.name} size="sm" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground">{rep.name}</p>
                      <p className="text-xs text-muted-foreground">{rep.designation}</p>
                    </div>
                    <DeptBadge dept={rep.department} />
                    <StatusBadge status={rep.status} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {directReports.length === 0 && (
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-sm font-semibold text-foreground mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>Direct Reports</h3>
              <div className="flex flex-col items-center py-6 text-center text-muted-foreground">
                <Users size={32} className="opacity-30 mb-2" />
                <p className="text-sm">No direct reports</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Employee Form View ───────────────────────────────────────────────────────
function EmployeeFormView({
  employee, employees, currentUser, onSave, onCancel, isDark, toggleDark,
}: {
  employee: Employee | null; employees: Employee[]; currentUser: Employee;
  onSave: (data: Partial<Employee>) => void; onCancel: () => void; isDark: boolean; toggleDark: () => void;
}) {
  const isNew = !employee;
  const isOwnProfile = employee?.id === currentUser.id;
  const limitedEdit = currentUser.role === "Employee" && isOwnProfile;

  const [form, setForm] = useState<Partial<FormData>>({
    name: employee?.name ?? "",
    email: employee?.email ?? "",
    phone: employee?.phone ?? "",
    department: employee?.department ?? "",
    designation: employee?.designation ?? "",
    salary: employee?.salary ?? 0,
    joiningDate: employee?.joiningDate ?? "",
    status: employee?.status ?? "Active",
    role: employee?.role ?? "Employee",
    managerId: employee?.managerId ?? null,
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validManagers = useMemo(() => {
    return employees.filter((e) => {
      if (e.id === employee?.id) return false;
      if (employee && wouldCreateCycle(employees, employee.id, e.id)) return false;
      return true;
    });
  }, [employees, employee]);

  function set(key: keyof FormData, value: string | number | null) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key as keyof FormErrors]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validateForm(form, currentUser.role);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    onSave(form);
  }

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <TopBar
        title={isNew ? "Add Employee" : "Edit Employee"}
        subtitle={isNew ? "Fill in the details below" : `Editing ${employee?.name}`}
        isDark={isDark}
        toggleDark={toggleDark}
        actions={<Btn variant="ghost" size="sm" onClick={onCancel}><ChevronLeft size={14} /> Cancel</Btn>}
      />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {!isNew && (
              <div className="bg-card border border-border rounded-xl p-5 flex items-center gap-4">
                <Av name={employee!.name} size="lg" />
                <div>
                  <p className="text-base font-semibold text-foreground">{employee!.name}</p>
                  <p className="text-xs text-muted-foreground mono">{employee!.employeeId}</p>
                </div>
              </div>
            )}

            <div className="bg-card border border-border rounded-xl p-5 space-y-4">
              <h3 className="text-sm font-semibold text-foreground" style={{ fontFamily: "Outfit, sans-serif" }}>Personal Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <FieldInput label="Full Name" value={form.name ?? ""} onChange={(v) => set("name", v)} error={errors.name} required />
                <FieldInput label="Email" value={form.email ?? ""} onChange={(v) => set("email", v)} type="email" error={errors.email} required disabled={limitedEdit} />
                <FieldInput label="Phone" value={form.phone ?? ""} onChange={(v) => set("phone", v)} placeholder="+1 (555) 000-0000" error={errors.phone} required />
                {!limitedEdit && (
                  <FieldSelect
                    label="Status" value={form.status ?? ""} onChange={(v) => set("status", v as Status)}
                    options={["Active", "Inactive", "On Leave"].map((s) => ({ value: s, label: s }))}
                    required
                  />
                )}
              </div>
            </div>

            {!limitedEdit && (
              <div className="bg-card border border-border rounded-xl p-5 space-y-4">
                <h3 className="text-sm font-semibold text-foreground" style={{ fontFamily: "Outfit, sans-serif" }}>Role & Organization</h3>
                <div className="grid grid-cols-2 gap-4">
                  <FieldSelect
                    label="Department" value={form.department ?? ""} onChange={(v) => set("department", v as Department)}
                    options={DEPARTMENTS.map((d) => ({ value: d, label: d }))} error={errors.department} required
                  />
                  <FieldSelect
                    label="Designation" value={form.designation ?? ""} onChange={(v) => set("designation", v)}
                    options={DESIGNATIONS.map((d) => ({ value: d, label: d }))} error={errors.designation} required
                  />
                  <FieldInput
                    label="Salary (USD)" value={form.salary ? String(form.salary) : ""}
                    onChange={(v) => set("salary", parseFloat(v) || 0)}
                    type="number" placeholder="85000" error={errors.salary} required
                  />
                  <FieldInput label="Joining Date" value={form.joiningDate ?? ""} onChange={(v) => set("joiningDate", v)} type="date" error={errors.joiningDate} required />
                  <FieldSelect
                    label="Reporting Manager"
                    value={form.managerId ?? ""}
                    onChange={(v) => set("managerId", v || null)}
                    options={validManagers.map((m) => ({ value: m.id, label: m.name }))}
                    placeholder="No manager (top level)"
                  />
                  {currentUser.role === "Super Admin" && (
                    <FieldSelect
                      label="System Role" value={form.role ?? ""}
                      onChange={(v) => set("role", v as Role)}
                      options={[
                        { value: "Super Admin", label: "Super Admin" },
                        { value: "HR Manager", label: "HR Manager" },
                        { value: "Employee", label: "Employee" },
                      ]}
                      required
                    />
                  )}
                </div>
              </div>
            )}

            <div className="flex justify-end gap-3">
              <Btn variant="outline" onClick={onCancel}>Cancel</Btn>
              <Btn variant="primary" type="submit">
                <Check size={14} /> {isNew ? "Create Employee" : "Save Changes"}
              </Btn>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// ─── Org Tree Node ────────────────────────────────────────────────────────────
function OrgNode({
  node, depth, employees, setSelectedId, setView,
}: {
  node: TreeNode; depth: number; employees: Employee[]; setSelectedId: (id: string) => void; setView: (v: View) => void;
}) {
  const [expanded, setExpanded] = useState(depth < 2);
  const { employee: emp, children } = node;
  const hasChildren = children.length > 0;

  return (
    <div className={depth > 0 ? "ml-6 border-l border-border pl-4 mt-1" : ""}>
      <div className="flex items-center gap-1 py-1">
        <button
          onClick={() => setExpanded(!expanded)}
          className={`w-5 h-5 rounded flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors flex-shrink-0 ${!hasChildren ? "opacity-0 pointer-events-none" : ""}`}
        >
          {expanded ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
        </button>
        <div
          role="button"
          tabIndex={0}
          className={`flex items-center gap-3 flex-1 p-2.5 rounded-lg hover:bg-accent/40 transition-colors cursor-pointer group ${depth === 0 ? "bg-primary/8 border border-primary/15" : ""}`}
          onClick={() => { setSelectedId(emp.id); setView("detail"); }}
          onKeyDown={(e) => e.key === "Enter" && (setSelectedId(emp.id), setView("detail"))}
        >
          <Av name={emp.name} size={depth === 0 ? "md" : "sm"} />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">{emp.name}</p>
            <p className="text-xs text-muted-foreground truncate">{emp.designation}</p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <DeptBadge dept={emp.department} />
            {hasChildren && (
              <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                {children.length} report{children.length !== 1 ? "s" : ""}
              </span>
            )}
          </div>
        </div>
      </div>
      {expanded && hasChildren && (
        <div>
          {children.map((child) => (
            <OrgNode
              key={child.employee.id} node={child} depth={depth + 1}
              employees={employees} setSelectedId={setSelectedId} setView={setView}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function OrgTreeView({
  employees, setSelectedId, setView, isDark, toggleDark,
}: {
  employees: Employee[]; setSelectedId: (id: string) => void; setView: (v: View) => void; isDark: boolean; toggleDark: () => void;
}) {
  const tree = useMemo(() => buildTree(employees, null), [employees]);

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <TopBar title="Organization Hierarchy" subtitle="Reporting structure across the company" isDark={isDark} toggleDark={toggleDark} />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs text-muted-foreground">Click any employee to view their profile. Expand nodes with the arrow icons.</p>
            </div>
            {tree.map((node) => (
              <OrgNode
                key={node.employee.id} node={node} depth={0}
                employees={employees} setSelectedId={setSelectedId} setView={setView}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Settings View ────────────────────────────────────────────────────────────
function SettingsView({
  currentUser, employees, onSave, isDark, toggleDark,
}: {
  currentUser: Employee; employees: Employee[]; onSave: (data: Partial<Employee>) => void; isDark: boolean; toggleDark: () => void;
}) {
  const [name, setName] = useState(currentUser.name);
  const [phone, setPhone] = useState(currentUser.phone);
  const [saved, setSaved] = useState(false);

  function handleSave() {
    onSave({ name, phone });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <TopBar title="Settings" subtitle="Manage your account preferences" isDark={isDark} toggleDark={toggleDark} />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-sm font-semibold text-foreground mb-5" style={{ fontFamily: "Outfit, sans-serif" }}>Profile</h3>
            <div className="flex items-center gap-5 mb-6 pb-6 border-b border-border">
              <Av name={currentUser.name} size="xl" />
              <div>
                <p className="text-base font-semibold text-foreground">{currentUser.name}</p>
                <p className="text-sm text-muted-foreground">{currentUser.email}</p>
                <div className="flex items-center gap-2 mt-2">
                  <RoleBadge role={currentUser.role} />
                  <DeptBadge dept={currentUser.department} />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <FieldInput label="Full Name" value={name} onChange={setName} required />
              <FieldInput label="Phone" value={phone} onChange={setPhone} />
              <FieldInput label="Email" value={currentUser.email} onChange={() => {}} disabled />
              <FieldInput label="Employee ID" value={currentUser.employeeId} onChange={() => {}} disabled />
            </div>
            <div className="mt-4 flex items-center gap-3">
              <Btn variant="primary" onClick={handleSave}>
                {saved ? <><Check size={14} /> Saved!</> : "Save Changes"}
              </Btn>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-sm font-semibold text-foreground mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>Access & Permissions</h3>
            <div className="space-y-3">
              {[
                { label: "View all employees", allowed: currentUser.role !== "Employee" },
                { label: "Create & edit employees", allowed: canCreate(currentUser) },
                { label: "Delete employees", allowed: canDelete(currentUser) },
                { label: "Assign system roles", allowed: currentUser.role === "Super Admin" },
                { label: "View salary information", allowed: currentUser.role !== "Employee" },
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
                onClick={toggleDark}
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

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [view, setView] = useState<View>("login");
  const [currentUser, setCurrentUser] = useState<Employee | null>(null);
  const [employees, setEmployees] = useState<Employee[]>(SEED_EMPLOYEES);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedEmployee = employees.find((e) => e.id === selectedId) ?? null;

  function handleLogin(emp: Employee) {
    setCurrentUser(emp);
    setView("dashboard");
  }

  function handleLogout() {
    setCurrentUser(null);
    setView("login");
    setSelectedId(null);
  }

  function handleSaveEmployee(data: Partial<Employee>) {
    if (!selectedId) {
      const { id, employeeId } = nextId(employees);
      setEmployees((prev) => [...prev, { ...(data as Employee), id, employeeId }]);
    } else {
      setEmployees((prev) =>
        prev.map((e) => (e.id === selectedId ? { ...e, ...data } : e))
      );
      if (currentUser?.id === selectedId) {
        setCurrentUser((prev) => prev ? { ...prev, ...data } : prev);
      }
    }
    setView(selectedId ? "detail" : "employees");
  }

  function handleDeleteEmployee(id: string) {
    setEmployees((prev) => prev.map((e) => e.managerId === id ? { ...e, managerId: null } : e).filter((e) => e.id !== id));
    setView("employees");
  }

  function handleSaveSettings(data: Partial<Employee>) {
    if (!currentUser) return;
    setCurrentUser((prev) => prev ? { ...prev, ...data } : prev);
    setEmployees((prev) => prev.map((e) => e.id === currentUser.id ? { ...e, ...data } : e));
  }

  const toggleDark = () => setIsDark((d) => !d);
  const commonProps = { isDark, toggleDark };

  if (!currentUser || view === "login") {
    return (
      <div className={isDark ? "dark" : ""}>
        <LoginView employees={employees} onLogin={handleLogin} />
      </div>
    );
  }

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="flex h-screen overflow-hidden bg-background text-foreground">
        <Sidebar view={view} setView={setView} currentUser={currentUser} onLogout={handleLogout} />
        <div className="flex-1 flex flex-col overflow-hidden">
          {view === "dashboard" && (
            <DashboardView
              employees={employees} currentUser={currentUser}
              setView={setView} setSelectedId={setSelectedId}
              {...commonProps}
            />
          )}
          {view === "employees" && (
            <EmployeesView
              employees={employees} currentUser={currentUser}
              setView={setView} setSelectedId={setSelectedId}
              onDelete={handleDeleteEmployee}
              {...commonProps}
            />
          )}
          {view === "detail" && selectedEmployee && (
            <EmployeeDetailView
              employee={selectedEmployee} employees={employees} currentUser={currentUser}
              onBack={() => setView("employees")}
              onEdit={() => setView("form")}
              {...commonProps}
            />
          )}
          {view === "form" && (
            <EmployeeFormView
              employee={selectedEmployee} employees={employees} currentUser={currentUser}
              onSave={handleSaveEmployee}
              onCancel={() => setView(selectedId ? "detail" : "employees")}
              {...commonProps}
            />
          )}
          {view === "org" && (
            <OrgTreeView
              employees={employees} setSelectedId={setSelectedId} setView={setView}
              {...commonProps}
            />
          )}
          {view === "settings" && (
            <SettingsView
              currentUser={currentUser} employees={employees}
              onSave={handleSaveSettings}
              {...commonProps}
            />
          )}
        </div>
      </div>
    </div>
  );
}
