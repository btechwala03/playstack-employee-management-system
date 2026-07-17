export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    ME: '/auth/me',
  },
  EMPLOYEES: {
    BASE: '/employees',
    BY_ID: (id: string) => `/employees/${id}`,
  },
  DASHBOARD: {
    SUMMARY: '/dashboard/summary',
  },
  ORGANIZATION: {
    TREE: '/organization/tree',
    REPORTEES: (id: string) => `/organization/${id}/reportees`,
    MANAGER: (id: string) => `/organization/${id}/manager`,
  },
} as const;
