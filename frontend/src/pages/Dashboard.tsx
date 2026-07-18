import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider';
import { useTheme } from '../providers/ThemeProvider';
import { useDashboardSummary } from '../hooks/useDashboard';
import { useEmployees } from '../hooks/useEmployees';
import { mapEmployeeToFigma } from '../utils/mappers';
import { 
  TopBar, StatCard, ChartTooltip, DeptBadge, StatusBadge, Av, Btn, formatDate 
} from '../components/FigmaShared';
import { Users, UserCheck, User, Building2, ChevronRight } from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell 
} from 'recharts';

export default function Dashboard() {
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const { data: summary, isLoading: loadingSummary } = useDashboardSummary();
  const { data: recentData, isLoading: loadingRecent } = useEmployees({ sortBy: 'joiningDate', sortOrder: 'desc', limit: 5 });

  const isDark = theme === 'dark';

  if (loadingSummary || loadingRecent) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground animate-pulse">Loading dashboard...</p>
      </div>
    );
  }

  const active = summary?.activeEmployees || 0;
  const inactive = summary?.inactiveEmployees || 0;
  const onLeave = 0; // Not tracked in our backend right now

  const deptData = (summary?.employeesPerDepartment || []).map((d: any) => ({
    name: d._id === "Engineering" ? "Eng" : d._id === "Leadership" ? "Lead" : d._id === "Marketing" ? "Mktg" : d._id,
    count: d.count,
  }));

  const statusData = [
    { name: "Active", value: active, color: "#34d399" },
    { name: "Inactive", value: inactive, color: "#71717a" },
    { name: "On Leave", value: onLeave, color: "#fbbf24" },
  ].filter(s => s.value > 0);

  const recent = (recentData?.data || []).map(mapEmployeeToFigma);

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <TopBar 
        title={`Good morning, ${user?.firstName || 'User'}`} 
        subtitle="Here's what's happening today" 
        isDark={isDark} 
        toggleDark={toggleTheme} 
      />
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard label="Total Employees" value={summary?.totalEmployees || 0} icon={Users} color="bg-primary" trend="Across the org" />
          <StatCard label="Active" value={active} icon={UserCheck} color="bg-emerald-500" trend="Currently working" />
          <StatCard label="Inactive" value={inactive} icon={User} color="bg-zinc-500" trend="Offboarded" />
          <StatCard label="Departments" value={summary?.departmentCount || 0} icon={Building2} color="bg-violet-500" trend="Active departments" />
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
            <Btn variant="ghost" size="sm" onClick={() => navigate('/employees')}>
              View all <ChevronRight size={14} />
            </Btn>
          </div>
          <div className="divide-y divide-border">
            {recent.length === 0 ? (
               <div className="p-5 text-center text-sm text-muted-foreground">No recent hires found.</div>
            ) : recent.map((emp) => (
              <div
                key={emp.id}
                onClick={() => navigate(`/employees/${emp.id}`)}
                className="flex items-center gap-4 px-5 py-3.5 hover:bg-accent/40 transition-colors cursor-pointer"
              >
                <Av name={emp.name} size="sm" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{emp.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{emp.designation}</p>
                </div>
                <div className="hidden sm:block">
                  <DeptBadge dept={emp.department} />
                </div>
                <StatusBadge status={emp.status} />
                <span className="text-xs text-muted-foreground hidden sm:block w-24 text-right">{formatDate(emp.joiningDate)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
