import React, { useState, useEffect } from 'react';
import { useCreateEmployee, useUpdateEmployee } from '../../hooks/useEmployees';
import { useAuth } from '../../providers/AuthProvider';
import { mapEmployeeToFigma } from '../../utils/mappers';
import { Modal, FieldInput, FieldSelect, Btn } from '../FigmaShared';
import toast from 'react-hot-toast';

interface EmployeeModalProps {
  isOpen: boolean;
  onClose: () => void;
  employee?: any;
}

const DEPARTMENTS = [
  { value: 'Engineering', label: 'Engineering' },
  { value: 'Product', label: 'Product' },
  { value: 'Design', label: 'Design' },
  { value: 'Marketing', label: 'Marketing' },
  { value: 'Sales', label: 'Sales' },
  { value: 'HR', label: 'HR' },
  { value: 'Finance', label: 'Finance' }
];

export default function EmployeeModal({ isOpen, onClose, employee }: EmployeeModalProps) {
  const isEditing = !!employee;
  const createMutation = useCreateEmployee();
  const updateMutation = useUpdateEmployee();
  const { user } = useAuth();
  const isSuperAdmin = user?.role === 'SUPER_ADMIN';

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    department: '',
    designation: '',
    salary: '',
    joiningDate: new Date().toISOString().split('T')[0],
    role: 'EMPLOYEE',
    status: 'ACTIVE'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (employee) {
      setFormData({
        firstName: employee.firstName || '',
        lastName: employee.lastName || '',
        email: employee.email || '',
        phone: employee.phone || '',
        department: employee.department || '',
        designation: employee.designation || '',
        salary: employee.salary ? String(employee.salary) : '',
        joiningDate: employee.joiningDate ? new Date(employee.joiningDate).toISOString().split('T')[0] : '',
        role: employee.role || 'EMPLOYEE',
        status: employee.status || 'ACTIVE'
      });
    } else {
      setFormData({
        firstName: '', lastName: '', email: '', phone: '', department: '',
        designation: '', salary: '', joiningDate: new Date().toISOString().split('T')[0],
        role: 'EMPLOYEE', status: 'ACTIVE'
      });
    }
    setErrors({});
  }, [employee, isOpen]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName) newErrors.firstName = "Required";
    if (!formData.lastName) newErrors.lastName = "Required";
    if (!formData.email) newErrors.email = "Required";
    if (!formData.phone) newErrors.phone = "Required";
    if (!formData.department) newErrors.department = "Required";
    if (!formData.designation) newErrors.designation = "Required";
    if (!formData.salary) newErrors.salary = "Required";
    if (!formData.joiningDate) newErrors.joiningDate = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    try {
      const payload = {
        ...formData,
        salary: Number(formData.salary)
      };

      if (isEditing && employee) {
        await updateMutation.mutateAsync({ id: employee._id, data: payload as any });
      } else {
        await createMutation.mutateAsync(payload as any);
      }
      onClose();
    } catch (e) {
      // hook handles toast
    }
  };

  const isLoading = createMutation.isPending || updateMutation.isPending;

  return (
    <Modal open={isOpen} onClose={onClose} title={isEditing ? 'Edit Employee' : 'Add Employee'}>
      <div className="space-y-4 max-h-[70vh] overflow-y-auto px-1 py-1 custom-scrollbar">
        <div className="grid grid-cols-2 gap-4">
          <FieldInput label="First Name" value={formData.firstName} onChange={(v) => setFormData({ ...formData, firstName: v })} error={errors.firstName} required />
          <FieldInput label="Last Name" value={formData.lastName} onChange={(v) => setFormData({ ...formData, lastName: v })} error={errors.lastName} required />
          <FieldInput label="Email" type="email" value={formData.email} onChange={(v) => setFormData({ ...formData, email: v })} error={errors.email} required disabled={isEditing} />
          <FieldInput label="Phone" value={formData.phone} onChange={(v) => setFormData({ ...formData, phone: v })} error={errors.phone} required />
          <FieldSelect label="Department" value={formData.department} onChange={(v) => setFormData({ ...formData, department: v })} options={DEPARTMENTS} error={errors.department} required />
          <FieldInput label="Designation" value={formData.designation} onChange={(v) => setFormData({ ...formData, designation: v })} error={errors.designation} required />
          <FieldInput label="Salary" type="number" value={formData.salary} onChange={(v) => setFormData({ ...formData, salary: v })} error={errors.salary} required />
          <FieldInput label="Joining Date" type="date" value={formData.joiningDate} onChange={(v) => setFormData({ ...formData, joiningDate: v })} error={errors.joiningDate} required />
          
          <FieldSelect 
            label="Role" 
            value={formData.role} 
            onChange={(v) => setFormData({ ...formData, role: v })} 
            options={[
              { value: 'EMPLOYEE', label: 'Employee' },
              { value: 'HR_MANAGER', label: 'HR Manager' },
              ...(isSuperAdmin ? [{ value: 'SUPER_ADMIN', label: 'Super Admin' }] : [])
            ]} 
          />
          <FieldSelect 
            label="Status" 
            value={formData.status} 
            onChange={(v) => setFormData({ ...formData, status: v })} 
            options={[
              { value: 'ACTIVE', label: 'Active' },
              { value: 'INACTIVE', label: 'Inactive' }
            ]} 
          />
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-3 pt-4 border-t border-border">
        <Btn variant="ghost" onClick={onClose} disabled={isLoading}>Cancel</Btn>
        <Btn variant="primary" onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? 'Saving...' : (isEditing ? 'Save Changes' : 'Create Employee')}
        </Btn>
      </div>
    </Modal>
  );
}
