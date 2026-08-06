# Ngày Đôi — Regression Matrix v0.15.6

Sprint 15.7 closes the Phase 15 UX-hardening cycle. This matrix protects existing business logic while UI layers continue to evolve.

## Automated gates

| Gate | Command | Purpose |
|---|---|---|
| Accessibility | `npm run a11y:audit` | Browser dialogs, missing media labels, unsafe new-tab links and basic accessible naming |
| UX | `npm run ux:audit` | Sidebar, Planning checkbox, commerce totals/receipt, favorite buttons, Home motion and Contact |
| Regression | `npm run regression:audit` | Required routes/loading boundaries, aligned versions, relative imports, TS/TSX parsing and CSS balance |
| Quality | `npm run quality:check` | Runs all three static gates |
| Release | `npm run release:check` | Quality gates, Prisma validation and production builds |
| Runtime smoke | `npm run smoke:all` | Runs all existing API smoke suites against the local environment |

## Critical journeys

### Customer onboarding

1. Register and verify email.
2. Sign in and create a wedding.
3. Complete Getting Started steps.
4. Leave a dirty form and verify the unsaved-change warning.

### Invitation and guest journey

1. Choose an entitled template.
2. Edit and preview the invitation.
3. Add a guest and copy the personalized link.
4. Submit RSVP through the public guest link.
5. Confirm Guest metrics and status update.

### Commercial journey

1. Select wedding, plan and optional add-ons.
2. Confirm the Total Payment panel remains readable on 390px, 768px and desktop.
3. Create an order and submit payment information.
4. Open the order receipt and print preview; only the receipt document should print.
5. Admin confirms or rejects payment without exposing internal errors.

### Event and post-wedding journey

1. Create tables and assign guests.
2. Open QR check-in and reverse one check-in through the confirmation dialog.
3. Upload a memory asset, moderate it and open the public album.
4. Complete/reopen a Planning task and verify the square completion control.

### Navigation and resilience

1. Scroll a long Planning/Guests page; desktop sidebar remains available.
2. Use `⌘ K` / `Ctrl K`, Arrow keys and Enter to navigate.
3. Open/close mobile drawer and dialogs with keyboard and Escape.
4. Simulate an API error; page displays retry and support Request ID without stack trace.
5. Temporarily disconnect the API; no page should stay in an indefinite loading state.

## Viewports

- Mobile: 390 × 844
- Tablet: 768 × 1024
- Desktop: 1440 × 900
- Narrow desktop with browser zoom at 200%

## Release decision

A release candidate passes only when `npm run release:check` succeeds and the critical journeys above have no blocker or regression in existing logic.
