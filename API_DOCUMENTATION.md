# Nexus EMS API Documentation

Base URL: `/api`

## Authentication

### POST `/api/auth/login`
Authenticates a user and returns a JWT token.
- **Request Body:**
  ```json
  {
    "email": "admin@playstack.com",
    "password": "Password@123"
  }
  ```
- **Response:** `200 OK`
  ```json
  {
    "token": "eyJhbGciOiJIUz...",
    "employee": {
      "_id": "60d5ec...",
      "firstName": "System",
      "lastName": "Admin",
      "role": "SUPER_ADMIN",
      ...
    }
  }
  ```
- **Validation:** Both `email` and `password` are required.

### POST `/api/auth/logout`
Invalidates the current session token (handled client-side by clearing localStorage, but endpoint provided for future server-side blocklisting).
- **Authorization:** Bearer Token (Any authenticated user)

## Employees

### GET `/api/employees`
Retrieves a paginated list of employees.
- **Authorization:** Bearer Token (Any authenticated user)
- **Query Parameters:**
  - `page` (default: 1)
  - `limit` (default: 10)
  - `search` (matches against name/email)
  - `department` (exact match)
  - `role` (exact match)
  - `status` (exact match)
  - `sortBy` (default: 'createdAt')
  - `sortOrder` (asc | desc, default: 'desc')
- **Response:** `200 OK`
  ```json
  {
    "data": [{...}, {...}],
    "total": 50,
    "page": 1,
    "limit": 10,
    "totalPages": 5
  }
  ```

### GET `/api/employees/:id`
Retrieves a specific employee's details.
- **Authorization:** Bearer Token (Any authenticated user)
- **Response:** `200 OK` (Employee Object)

### GET `/api/employees/:id/reports`
Retrieves the direct reports (subordinates) of a specific employee.
- **Authorization:** Bearer Token (Any authenticated user)
- **Response:** `200 OK` (Array of Employee Objects)

### POST `/api/employees`
Creates a new employee.
- **Authorization:** Bearer Token (`SUPER_ADMIN` or `HR_MANAGER`)
- **Request Body:**
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@playstack.com",
    "department": "Engineering",
    "designation": "Frontend Developer",
    "salary": 85000,
    "joiningDate": "2024-01-01",
    "role": "EMPLOYEE",
    "status": "ACTIVE"
  }
  ```
- **Validation:** Validates duplicate email and duplicate employeeId.

### PUT `/api/employees/:id`
Updates an existing employee.
- **Authorization:** Bearer Token (`SUPER_ADMIN` or `HR_MANAGER`)
- **Validation:** Cannot change `email` or `employeeId` to one that already exists.

### DELETE `/api/employees/:id`
Soft deletes an employee (sets status to `INACTIVE` or removes them depending on implementation).
- **Authorization:** Bearer Token (`SUPER_ADMIN` only)
- **Validation:** Cannot delete oneself.

## Dashboard

### GET `/api/dashboard/summary`
Retrieves aggregate metrics for the dashboard.
- **Authorization:** Bearer Token (Any authenticated user)
- **Response:** `200 OK`
  ```json
  {
    "totalEmployees": 150,
    "activeEmployees": 140,
    "inactiveEmployees": 10,
    "departmentStats": [
      { "_id": "Engineering", "count": 50 },
      ...
    ]
  }
  ```
