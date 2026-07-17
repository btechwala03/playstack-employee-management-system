import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useEmployees, useDeleteEmployee } from '../hooks/useEmployees';
import { useAuth } from '../providers/AuthProvider';
import { useTheme } from '../providers/ThemeProvider';
import { mapEmployeeToFigma } from '../utils/mappers';
import { 
  TopBar, Btn, Av, DeptBadge, StatusBadge, RoleBadge, formatDate, Modal 
} from '../components/FigmaShared';
import { Search, Filter, X, ChevronUp, ChevronDown, ArrowUpDown, Plus, Eye, Pencil, Trash2, Users } from 'lucide-react';
import EmployeeModal from '../components/employees/EmployeeModal';

const DEPARTMENTS = ['Engineering', 'Product', 'Design', 'Marketing', 'Sales', 'HR', 'Finance'];
const ROLES = ['SUPER_ADMIN', 'HR_MANAGER', 'EMPLOYEE'];
const STATUSES = ['ACTIVE', 'INACTIVE'];

export default function Employees() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [showFilters, setShowFilters] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<any>(undefined);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [employeeToDelete, setEmployeeToDelete] = useState<string | null>(null);

  const isDark = theme === 'dark';
  const isHrOrAdmin = user?.role === 'SUPER_ADMIN' || user?.role === 'HR_MANAGER';
  const isSuperAdmin = user?.role === 'SUPER_ADMIN';

  const queryParams = {
    page: Number(searchParams.get('page')) || 1,
    limit: Number(searchParams.get('limit')) || 10,
    search: searchParams.get('search') || '',
    department: searchParams.get('department') || '',
    role: searchParams.get('role') || '',
    status: searchParams.get('status') || '',
    sortBy: searchParams.get('sortBy') || 'createdAt',
    sortOrder: (searchParams.get('sortOrder') as 'asc' | 'desc') || 'desc',
  };

  const { data, isLoading } = useEmployees(queryParams);
  const deleteMutation = useDeleteEmployee();

  useEffect(() => {
    const handler = setTimeout(() => {
      updateParams({ search: searchTerm, page: 1 });
    }, 500);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  const updateParams = (newParams: Partial<typeof queryParams>) => {
    const merged = { ...queryParams, ...newParams };
    const params = new URLSearchParams();
    
    if (merged.page > 1) params.set('page', String(merged.page));
    if (merged.limit !== 10) params.set('limit', String(merged.limit));
    if (merged.search) params.set('search', merged.search);
    if (merged.department) params.set('department', merged.department);
    if (merged.role) params.set('role', merged.role);
    if (merged.status) params.set('status', merged.status);
    if (merged.sortBy !== 'createdAt') params.set('sortBy', merged.sortBy);
    if (merged.sortOrder !== 'desc') params.set('sortOrder', merged.sortOrder);
    
    setSearchParams(params);
  };

  const handleSort = (field: string) => {
    const isAsc = queryParams.sortBy === field && queryParams.sortOrder === 'asc';
    updateParams({ sortBy: field, sortOrder: isAsc ? 'desc' : 'asc', page: 1 });
  };

  const SortIcon = ({ field }: { field: string }) => {
    if (queryParams.sortBy !== field) return <ArrowUpDown size={12} className="text-muted-foreground" />;
    return queryParams.sortOrder === 'asc' ? <ChevronUp size={12} className="text-primary" /> : <ChevronDown size={12} className="text-primary" />;
  };

  const activeFiltersCount = [queryParams.department, queryParams.role, queryParams.status].filter(Boolean).length;

  const figmaEmployees = (data?.data || []).map(mapEmployeeToFigma);

  const handleDelete = async () => {
    if (employeeToDelete) {
      await deleteMutation.mutateAsync(employeeToDelete);
      setDeleteConfirmOpen(false);
      setEmployeeToDelete(null);
    }
  };

  return (
    <div className="flex flex-col h-full overflow-hidden bg-background">
      <TopBar
        title="Employees"
        subtitle={data ? `${data.total} members` : "Loading..."}
        isDark={isDark}
        toggleDark={toggleTheme}
        actions={
          isHrOrAdmin ? (
            <Btn variant="primary" size="sm" onClick={() => { setSelectedEmployee(undefined); setIsModalOpen(true); }}>
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
              value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name or email…"
              className="w-full pl-9 pr-3 py-2 bg-input-background border border-border rounded-lg text-sm text-foreground placeholder-muted-foreground outline-none focus:ring-1 focus:ring-primary focus:border-primary/50 transition-colors"
            />
            {searchTerm && <button onClick={() => setSearchTerm("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"><X size={13} /></button>}
          </div>
          <Btn variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)}>
            <Filter size={13} /> Filters {activeFiltersCount > 0 && <span className="bg-primary text-primary-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center">{activeFiltersCount}</span>}
          </Btn>
        </div>

        {showFilters && (
          <div className="px-6 py-3 border-b border-border bg-muted/30 flex items-center gap-3 flex-wrap flex-shrink-0">
            <select value={queryParams.department} onChange={(e) => updateParams({ department: e.target.value, page: 1 })} className="px-3 py-1.5 bg-input-background border border-border rounded-lg text-xs text-foreground outline-none focus:ring-1 focus:ring-primary">
              <option value="">All Departments</option>
              {DEPARTMENTS.map((d) => <option key={d} value={d}>{d}</option>)}
            </select>
            <select value={queryParams.status} onChange={(e) => updateParams({ status: e.target.value, page: 1 })} className="px-3 py-1.5 bg-input-background border border-border rounded-lg text-xs text-foreground outline-none focus:ring-1 focus:ring-primary">
              <option value="">All Statuses</option>
              {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            <select value={queryParams.role} onChange={(e) => updateParams({ role: e.target.value, page: 1 })} className="px-3 py-1.5 bg-input-background border border-border rounded-lg text-xs text-foreground outline-none focus:ring-1 focus:ring-primary">
              <option value="">All Roles</option>
              {ROLES.map((r) => <option key={r} value={r.replace('_', ' ')}>{r.replace('_', ' ')}</option>)}
            </select>
            {activeFiltersCount > 0 && (
              <button onClick={() => { updateParams({ department: "", role: "", status: "", page: 1 }); }} className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1">
                <X size={11} /> Clear
              </button>
            )}
          </div>
        )}

        <div className="flex-1 overflow-y-auto">
          {isLoading ? (
             <div className="flex flex-col items-center justify-center h-64 text-center">
               <p className="text-sm font-medium text-muted-foreground animate-pulse">Loading employees...</p>
             </div>
          ) : figmaEmployees.length === 0 ? (
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
                    <button onClick={() => handleSort('firstName')} className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                      Employee <SortIcon field="firstName" />
                    </button>
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Department</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Role</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    <button onClick={() => handleSort('joiningDate')} className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                      Joined <SortIcon field="joiningDate" />
                    </button>
                  </th>
                  <th className="text-right px-6 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {figmaEmployees.map((emp) => (
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
                          onClick={() => navigate(`/employees/${emp.id}`)}
                          className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                          title="View"
                        >
                          <Eye size={14} />
                        </button>
                        {isHrOrAdmin && (
                          <button
                            onClick={() => {
                              const originalEmp = data?.data.find((e: any) => e._id === emp.id);
                              setSelectedEmployee(originalEmp);
                              setIsModalOpen(true);
                            }}
                            className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                            title="Edit"
                          >
                            <Pencil size={14} />
                          </button>
                        )}
                        {isSuperAdmin && emp.id !== user?._id && (
                          <button
                            onClick={() => { setEmployeeToDelete(emp.id); setDeleteConfirmOpen(true); }}
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
        
        {/* Pagination */}
        {data && data.total > 0 && (
          <div className="flex items-center justify-between border-t border-border px-6 py-3 bg-card flex-shrink-0">
            <p className="text-xs text-muted-foreground">
              Showing <span className="font-medium text-foreground">{(data.page - 1) * data.limit + 1}</span> to{' '}
              <span className="font-medium text-foreground">{Math.min(data.page * data.limit, data.total)}</span> of{' '}
              <span className="font-medium text-foreground">{data.total}</span> results
            </p>
            <div className="flex items-center gap-2">
              <Btn variant="outline" size="sm" onClick={() => updateParams({ page: data.page - 1 })} disabled={data.page === 1}>
                Previous
              </Btn>
              <Btn variant="outline" size="sm" onClick={() => updateParams({ page: data.page + 1 })} disabled={data.page === data.totalPages}>
                Next
              </Btn>
            </div>
          </div>
        )}
      </div>

      {isModalOpen && (
        <EmployeeModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          employee={selectedEmployee} 
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
