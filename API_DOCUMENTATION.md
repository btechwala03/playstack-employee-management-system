# API Documentation

All endpoints are prefixed with `/api` and require a valid Bearer token in the `Authorization` header unless otherwise specified.

## Authentication

### 1. Login
- **Method:** `POST`
- **URL:** `/api/auth/login`
- **Authentication:** None
- **Request Body:**
```json
{
  "email": "admin@playstack.com",
  "password": "Password123"
}
```
- **Response (200 OK):**
```json
{
  "status": "success",
  "data": {
    "token": "eyJhbG...",
    "user": {
      "id": "123",
      "email": "admin@playstack.com",
      "role": "SUPER_ADMIN"
    }
  }
}
```

### 2. Logout
- **Method:** `POST`
- **URL:** `/api/auth/logout`
- **Authentication:** Required
- **Response (200 OK):**
```json
{
  "status": "success",
  "message": "Logged out successfully"
}
```

---

## Employees

### 1. Get All Employees
- **Method:** `GET`
- **URL:** `/api/employees`
- **Authentication:** Required (HR_MANAGER or SUPER_ADMIN)
- **Query Params:** `search`, `department`, `role`, `status`, `page`, `limit`
- **Response (200 OK):**
```json
{
  "status": "success",
  "data": {
    "data": [...],
    "total": 50,
    "page": 1,
    "totalPages": 5
  }
}
```

### 2. Create Employee
- **Method:** `POST`
- **URL:** `/api/employees`
- **Authentication:** Required (HR_MANAGER or SUPER_ADMIN)
- **Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@playstack.com",
  "phone": "1234567890",
  "department": "Engineering",
  "designation": "Developer",
  "salary": 60000,
  "joiningDate": "2023-01-01T00:00:00.000Z",
  "role": "EMPLOYEE",
  "status": "ACTIVE"
}
```
*Note: `employeeId` and `password` are auto-generated if omitted.*
- **Response (201 Created):** Returns the created employee object.

### 3. Update Employee
- **Method:** `PUT`
- **URL:** `/api/employees/:id`
- **Authentication:** Required (HR_MANAGER or SUPER_ADMIN)
- **Request Body:** Any subset of employee fields.
- **Response (200 OK):** Returns the updated employee object.

### 4. Delete Employee
- **Method:** `DELETE`
- **URL:** `/api/employees/:id`
- **Authentication:** Required (SUPER_ADMIN)
- **Response (200 OK):**
```json
{
  "status": "success",
  "message": "Employee deleted successfully"
}
```

---

## Organization & Hierarchy

### 1. Get Organization Tree
- **Method:** `GET`
- **URL:** `/api/organization/tree`
- **Authentication:** Required (HR_MANAGER or SUPER_ADMIN)
- **Response (200 OK):** Returns nested tree structure of employees.

### 2. Get Direct Reportees
- **Method:** `GET`
- **URL:** `/api/employees/:id/reportees`
- **Authentication:** Required (HR_MANAGER or SUPER_ADMIN)
- **Response (200 OK):** Returns an array of employees reporting to the specified ID.

### 3. Assign Reporting Manager
- **Method:** `PATCH`
- **URL:** `/api/employees/:id/manager`
- **Authentication:** Required (HR_MANAGER or SUPER_ADMIN)
- **Request Body:**
```json
{
  "managerId": "64bc1234abcd567890ef"
}
```
- **Response (200 OK):** Returns updated employee profile.
