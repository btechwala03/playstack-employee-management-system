# Release Notes v1.0.0

**Release Date:** 2026-07-17

We are thrilled to announce the v1.0.0 General Availability release of Nexus EMS. This release marks the completion of the transition from the legacy user interface to our modern, highly aesthetic Figma-based design system, paired with a robust REST API backend.

## New Features & Enhancements
- **Complete Visual Overhaul:** Seamlessly integrated the new Figma-based design system featuring glassmorphic effects, modern typography (Outfit), and highly responsive layouts.
- **Dark Mode Support:** First-class dark mode integration utilizing dynamic CSS tokens for flawless switching.
- **Organizational Tree Visualization:** A beautiful new view for visualizing direct reports and managerial hierarchies.
- **Advanced Data Table:** Server-side sorting, filtering, searching, and pagination ensure lightning-fast performance even with thousands of employee records.
- **Role-Based Access Control (RBAC):** Super Admin, HR Manager, and standard Employee permissions rigorously enforced on both client and server boundaries.
- **Dashboard Analytics:** Live aggregating of department statistics, active/inactive counts, and clean visual charts.
- **Quick Demo Access:** Pre-configured mock login buttons on the authentication screen for rapid usability testing.

## Bug Fixes
- Fixed an issue where text within inputs would appear invisible in dark mode due to missing CSS background tokens.
- Fixed an asynchronous state issue causing the Quick Demo Access buttons to improperly submit validation errors.
- Resolved a dynamic import crash (`Failed to fetch dynamically imported module`) caused by a case-sensitive file path mismatch during lazy loading.
- Patched TypeScript strict type-checking errors related to nullable fields within the React component tree.

## Technical Improvements
- Cleaned and purged all dead UI components, obsolete hooks, and temporary testing scripts.
- Consolidated UI primitives into `FigmaShared.tsx` to prevent style drift and enforce design system consistency.
- Standardized Axios interceptors for automated global error handling and JWT expiration logouts.

## Known Limitations
- The application currently lacks Two-Factor Authentication (2FA).
- Profile images currently rely on an avatar fallback generator rather than direct image uploads.
