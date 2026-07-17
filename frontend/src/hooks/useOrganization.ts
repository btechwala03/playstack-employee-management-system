import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { organizationService } from '../services/organization.service';
import toast from 'react-hot-toast';

export const useOrganizationTree = () => {
  return useQuery({
    queryKey: ['organization', 'tree'],
    queryFn: () => organizationService.getTree(),
    staleTime: 5 * 60 * 1000,
  });
};

export const useDirectReports = (managerId: string) => {
  return useQuery({
    queryKey: ['organization', 'reportees', managerId],
    queryFn: () => organizationService.getReportees(managerId),
    enabled: !!managerId,
  });
};

export const useReassignManager = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ employeeId, newManagerId }: { employeeId: string; newManagerId: string | null }) =>
      organizationService.reassignManager(employeeId, newManagerId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['organization'] });
      queryClient.invalidateQueries({ queryKey: ['employees'] });
      queryClient.invalidateQueries({ queryKey: ['employee'] });
      toast.success('Manager reassigned successfully');
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || 'Failed to reassign manager');
    },
  });
};
