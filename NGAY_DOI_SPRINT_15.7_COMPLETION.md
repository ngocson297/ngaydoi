# Sprint 15.7 Completion — Regression & Release Quality Gate

Version: **0.15.6**

## Completed

- Added `global-error.tsx` so root-layout failures show a safe Vietnamese recovery page instead of a blank screen.
- Added `npm run regression:audit` with route/loading coverage, package-version alignment, TypeScript/TSX parsing, relative-import validation and CSS balance checks.
- Added `npm run quality:check`, `npm run release:check` and `npm run smoke:all` as repeatable release gates.
- Added a regression matrix for customer, invitation, guest, commerce, event-operations, memories, navigation and resilience journeys.
- Completed a final readability pass for dense Guests, Admin, Billing, Order and Planning screens.
- Added stable horizontal scrolling and sticky guest identity columns for dense tables on smaller screens.
- Improved mobile stacking for Guest actions, metrics, filters, Admin queues and order rows.
- Preserved all API contracts, Prisma schema, migrations and business logic.

## Phase 15 status

All seven UX-hardening sprints are complete:

1. Design System Foundations
2. Navigation & Information Architecture
3. Form System & Unsaved Changes
4. Loading, Empty, Error & Retry States
5. Accessibility & Inclusive UX
6. UX Polish, Home Performance & Contact
7. Regression & Release Quality Gate
