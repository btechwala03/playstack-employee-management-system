# System Architecture

Nexus EMS is designed as a modern, decoupled Single Page Application (SPA) leveraging a robust RESTful API backend.

## High-Level Overview

1. **Presentation Layer (Frontend)**
   - Built with **React 19** and **Vite**.
   - Uses **Tailwind CSS V4** combined with custom UI tokens for pixel-perfect fidelity to the original Figma design.
   - **React Router v6** manages client-side navigation.

2. **State & Data Synchronization Layer**
   - **TanStack React Query (v5)** manages server state, caching, and background synchronization.
   - **Axios** handles HTTP requests, equipped with interceptors for global authentication injection (JWT) and automatic logout on 401 Unauthorized errors.
   - **React Context API** (`AuthProvider`, `ThemeProvider`) handles global client state (current user, UI theme).

3. **Application & API Layer (Backend)**
   - Built with **Node.js** and **Express.js** in **TypeScript**.
   - **Controllers** handle incoming HTTP requests, sanitize inputs, and delegate logic to services.
   - **Services** encapsulate the core business logic (e.g., hash comparison, aggregate queries).
   - **Middlewares** enforce strict **Role-Based Access Control (RBAC)**, validating JWT signatures before allowing controller execution.

4. **Data Layer**
   - **MongoDB** serves as the primary document database.
   - **Mongoose ODM** defines schemas, enforces data integrity (e.g., unique indices on email and employeeId), and provides powerful aggregation pipelines (used heavily in the dashboard summary endpoints).

## Security Model
- **Authentication**: Stateless JWT authentication. Tokens are stored securely in the client and sent via `Authorization: Bearer <token>` headers.
- **Authorization**: Granular RBAC. `SUPER_ADMIN` has absolute access (including hard deletion). `HR_MANAGER` can provision and edit, but cannot delete. `EMPLOYEE` is restricted to read-only views of their peers and full view of their own profile.
- **Passwords**: Bcrypt is used to hash passwords with a minimum of 10 salt rounds before storage.

## Design System Integration
The frontend employs a unified `FigmaShared.tsx` component library. All primitive UI elements (Buttons, Inputs, Cards, Avatars) are strictly defined here to guarantee absolute consistency across all routes and to prevent design drift. Tailwind's `@theme` block provides centralized CSS variable resolution for Light/Dark mode toggling.
