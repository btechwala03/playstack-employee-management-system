import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEmployee } from '../hooks/useEmployees';
import { useDirectReports } from '../hooks/useOrganization';
import { useAuth } from '../providers/AuthProvider';
import { useTheme } from '../providers/ThemeProvider';
import { mapEmployeeToFigma } from '../utils/mappers';
import { 
  TopBar, Btn, Av, StatusBadge, RoleBadge, DeptBadge, formatDate, formatCurrency, Modal
} from '../components/FigmaShared';
import { 
  ChevronLeft, Pencil, Shield, Mail, Phone, Building2, User, Calendar, DollarSign, Users, Trash2
} from 'lucide-react';
import EmployeeModal from '../components/employees/EmployeeModal';
import { useDeleteEmployee } from '../hooks/useEmployees';

function ManagerInfo({ managerId }: { managerId?: string }) {
  const { data: manager } = useEmployee(managerId || '');
  if (!managerId) return <>— (Top Level)</>;
  if (!manager) return <>Loading...</>;
  return <>{manager.firstName} {manager.lastName}</>;
}

export default function EmployeeDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const { data: employee, isLoading, isError } = useEmployee(id || '');
  const { data: directReports } = useDirectReports(id || '');
  const deleteMutation = useDeleteEmployee();

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);

  const isDark = theme === 'dark';

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <p className="text-sm font-medium text-muted-foreground animate-pulse">Loading employee profile...</p>
      </div>
    );
  }

  if (isError || !employee) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center p-6">
        <p className="text-sm font-medium text-muted-foreground">Employee not found.</p>
        <Btn variant="outline" size="sm" onClick={() => navigate(-1)} className="mt-4">Go Back</Btn>
      </div>
    );
  }

  const figmaEmp = mapEmployeeToFigma(employee);
  const canEdit = user?.role === 'SUPER_ADMIN' || user?.role === 'HR_MANAGER' || user?._id === id;
  const canViewSalary = user?.role === 'SUPER_ADMIN' || user?.role === 'HR_MANAGER' || user?._id === id;
  const canDelete = user?.role === 'SUPER_ADMIN' && user?._id !== id;

  const fields = [
    { icon: Shield, label: "Employee ID", value: figmaEmp.employeeId, mono: true },
    { icon: Mail, label: "Email", value: figmaEmp.email },
    { icon: Phone, label: "Phone", value: figmaEmp.phone || 'N/A' },
    { icon: Building2, label: "Department", value: figmaEmp.department },
    { icon: User, label: "Designation", value: figmaEmp.designation },
    { icon: Calendar, label: "Joined", value: formatDate(figmaEmp.joiningDate) },
    ...(canViewSalary ? [{ icon: DollarSign, label: "Salary", value: formatCurrency(figmaEmp.salary), mono: true }] : []),
    { icon: Users, label: "Reporting To", value: <ManagerInfo managerId={employee.reportingManager || undefined} /> },
  ];

  const handleDelete = async () => {
    await deleteMutation.mutateAsync(employee._id);
    setDeleteConfirmOpen(false);
    navigate('/employees');
  };

  return (
    <div className="flex flex-col h-full overflow-hidden bg-background">
      <TopBar
        title="Employee Profile"
        isDark={isDark}
        toggleDark={toggleTheme}
        actions={
          <div className="flex items-center gap-2">
            <Btn variant="ghost" size="sm" onClick={() => navigate(-1)}><ChevronLeft size={14} /> Back</Btn>
            {canEdit && (
              <Btn variant="primary" size="sm" onClick={() => setIsEditModalOpen(true)}><Pencil size={14} /> Edit</Btn>
            )}
            {canDelete && (
              <Btn variant="danger" size="sm" onClick={() => setDeleteConfirmOpen(true)}><Trash2 size={14} /> Delete</Btn>
            )}
          </div>
        }
      />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-card border border-border rounded-xl p-6 flex items-center gap-6">
            <Av name={figmaEmp.name} size="xl" />
            <div className="flex-1">
              <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: "Outfit, sans-serif" }}>{figmaEmp.name}</h2>
              <p className="text-sm text-muted-foreground mt-0.5">{figmaEmp.designation}</p>
              <div className="flex items-center gap-2 mt-3 flex-wrap">
                <StatusBadge status={figmaEmp.status} />
                <RoleBadge role={figmaEmp.role} />
                <DeptBadge dept={figmaEmp.department} />
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
                    <div className={`text-sm font-medium text-foreground mt-0.5 ${f.mono ? "font-mono text-xs" : ""}`}>{f.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {(directReports && directReports.length > 0) ? (
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-sm font-semibold text-foreground mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>
                Direct Reports <span className="text-muted-foreground font-normal">({directReports.length})</span>
              </h3>
              <div className="space-y-2">
                {directReports.map((rep: any) => {
                  const fRep = mapEmployeeToFigma(rep);
                  return (
                    <div 
                      key={rep._id} 
                      className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-accent/30 transition-colors cursor-pointer"
                      onClick={() => navigate(`/employees/${rep._id}`)}
                    >
                      <Av name={fRep.name} size="sm" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground">{fRep.name}</p>
                        <p className="text-xs text-muted-foreground">{fRep.designation}</p>
                      </div>
                      <DeptBadge dept={fRep.department} />
                      <StatusBadge status={fRep.status} />
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
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

      {isEditModalOpen && (
        <EmployeeModal 
          isOpen={isEditModalOpen} 
          onClose={() => setIsEditModalOpen(false)} 
          employee={employee} 
        />
      )}

      <Modal open={deleteConfirmOpen} onClose={() => setDeleteConfirmOpen(false)} title="Delete Employee">
        <p className="text-sm text-muted-foreground mb-6">
          Are you sure you want to delete this employee? This action cannot be undone.
        </p>
        <div className="flex justify-end gap-3">
          <Btn variant="ghost" onClick={() => setDeleteConfirmOpen(false)}>Cancel</Btn>
          <Btn variant="danger" onClick={handleDelete} disabled={deleteMutation.isPending}>
            {deleteMutation.isPending ? "Deleting..." : "Delete"}
          </Btn>
        </div>
      </Modal>
    </div>
  );
}
