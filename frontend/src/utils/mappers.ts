import { Employee as BackendEmployee } from '../types/employee.types';

export type FigmaRole = "Super Admin" | "HR Manager" | "Employee";
export type FigmaStatus = "Active" | "Inactive" | "On Leave";
export type FigmaDepartment = "Engineering" | "Design" | "Product" | "Marketing" | "Finance" | "HR" | "Leadership";

export interface FigmaEmployee {
  id: string;
  employeeId: string;
  name: string;
  email: string;
  phone: string;
  department: FigmaDepartment;
  designation: string;
  salary: number;
  joiningDate: string;
  status: FigmaStatus;
  role: FigmaRole;
  managerId: string | null;
}

export function mapRoleToFigma(role: string): FigmaRole {
  if (role === 'SUPER_ADMIN') return 'Super Admin';
  if (role === 'HR_MANAGER') return 'HR Manager';
  return 'Employee';
}

export function mapRoleToBackend(role: FigmaRole): 'SUPER_ADMIN' | 'HR_MANAGER' | 'EMPLOYEE' {
  if (role === 'Super Admin') return 'SUPER_ADMIN';
  if (role === 'HR Manager') return 'HR_MANAGER';
  return 'EMPLOYEE';
}

export function mapStatusToFigma(status: string): FigmaStatus {
  if (status === 'INACTIVE') return 'Inactive';
  // If we had 'ON_LEAVE' in backend, we'd map it. Otherwise map ACTIVE to Active
  return 'Active'; 
}

export function mapStatusToBackend(status: FigmaStatus): 'ACTIVE' | 'INACTIVE' {
  if (status === 'Inactive') return 'INACTIVE';
  return 'ACTIVE';
}

export function mapEmployeeToFigma(emp: BackendEmployee): FigmaEmployee {
  return {
    id: emp._id,
    employeeId: emp.employeeId,
    name: `${emp.firstName} ${emp.lastName}`,
    email: emp.email,
    phone: emp.phone || '',
    department: emp.department as FigmaDepartment,
    designation: emp.designation,
    salary: emp.salary,
    joiningDate: emp.joiningDate ? new Date(emp.joiningDate).toISOString().split('T')[0] : '', // format as YYYY-MM-DD
    status: mapStatusToFigma(emp.status),
    role: mapRoleToFigma(emp.role),
    managerId: emp.reportingManager || null
  };
}

export function mapFigmaToBackend(figmaEmp: Omit<FigmaEmployee, 'id' | 'employeeId'>): Partial<BackendEmployee> {
  const parts = figmaEmp.name.split(' ');
  const firstName = parts[0] || '';
  const lastName = parts.slice(1).join(' ') || '';

  return {
    firstName,
    lastName,
    email: figmaEmp.email,
    phone: figmaEmp.phone,
    department: figmaEmp.department,
    designation: figmaEmp.designation,
    salary: figmaEmp.salary,
    joiningDate: figmaEmp.joiningDate ? new Date(figmaEmp.joiningDate).toISOString() : new Date().toISOString(),
    status: mapStatusToBackend(figmaEmp.status),
    role: mapRoleToBackend(figmaEmp.role),
    reportingManager: figmaEmp.managerId
  };
}
