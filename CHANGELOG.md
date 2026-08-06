# Changelog

## 0.15.4 — Sprint 15.5 Accessibility & Inclusive UX Audit

- Added a global skip link, route-change screen-reader announcements and consistent main-content landmarks.
- Added shared keyboard-accessible tabs with Arrow, Home and End navigation, then migrated Admin and core Wedding workspaces.
- Strengthened dialog, drawer and command-palette focus trapping, Escape handling, scroll locking, focus restoration and unique ARIA IDs.
- Added semantic radio behavior for RSVP choices, accessible progress bars, and labels for icon buttons, checkboxes, camera/video and media controls.
- Added higher-contrast focus states, minimum touch targets, forced-colors support and comprehensive reduced-motion behavior.
- Added `npm run a11y:audit` to catch unsafe browser dialogs, unlabeled media/icons, missing image alternatives and unsafe new-tab links.
- Removed the remaining `window.prompt` flow and replaced it with validated accessible dialogs.
- No database schema, migration or runtime dependency changes.

## 0.15.3 — Sprint 15.4 Loading, Empty, Error & Retry States

- Added centralized user-safe API error normalization that hides internal stack, SQL and framework details.
- Expanded shared skeleton, empty, permission, inline-error and full-page error components.
- Added retry actions and copyable support request IDs to high-impact authenticated, admin, partner and public flows.
- Added route-level loading boundaries for dashboard, account, billing, pricing, onboarding, support, growth, templates, orders, partner, admin and wedding workspaces.
- Migrated core wedding workspace, Invitation Studio, guests, event operations and memories away from indefinite spinners and dead-end error panels.
- Added guided empty states across dashboard, billing, guests, partner, support, growth, templates and administration.
- Fixed a Growth Hub reload loop and Pricing catalog re-fetch loop while auditing asynchronous page states.
- No database schema, migration or dependency changes.

## 0.15.2 — Sprint 15.3 Form System & Unsaved Changes Protection

- Added shared form error summaries with focus management and field links.
- Added shared save-state/actions, native date-time wrapper and accessible drag-and-drop upload field.
- Added unsaved-changes protection for internal links, browser close/refresh and workspace tab switches.
- Added global promise-based confirmation service and removed all remaining `window.confirm` usage from the Web app.
- Migrated create-wedding, planning, wedding workspace and public memory upload flows to the new form system.
- Added clearer loading, success, destructive-action and retry states on migrated flows.
- No database schema, migration or dependency changes.


## 0.15.1 — Sprint 15.2 Navigation & Information Architecture

- Replaced duplicated desktop/mobile navigation markup with one role-aware navigation model.
- Added collapsible groups with per-role browser persistence and progressive wedding-tool disclosure.
- Added keyboard-accessible command palette using `⌘ K` / `Ctrl K`.
- Added breadcrumbs for deep pages and wedding workspaces.
- Added accessible mobile drawer focus management, Escape handling, scroll locking and focus restoration.
- Added role labels and clearer user context in sidebar/drawer.
- Updated `source:pack` to exclude generated Prisma Client output.
- No database schema or migration changes.


## 0.15.0 — Sprint 15.1 Design System Foundations

- Added centralized design tokens and authoritative UI compatibility layer.
- Added shared Button, FormField, Alert, Dialog, Skeleton, Empty/Error State and Toast components.
- Migrated authentication, account, global loading/error and not-found experiences to the shared system.
- Replaced destructive account `window.confirm` with an accessible confirmation dialog.
- Separated API support request IDs from user-facing error messages.
- Added `npm run source:pack` for safe one-command source packaging without secrets or build output.
- No database schema or migration changes.


## 0.14.0 — Template Library, Theme Marketplace & Final Product Polish

- Expanded the invitation library from 5 to 24 templates.
- Added Vietnamese, traditional, romantic, botanical, minimal, modern, luxury and destination categories.
- Added a public searchable template catalog at `/templates`.
- Added template search, style filters, availability filters and browser-local favorites to Invitation Studio.
- Added server-side template entitlement enforcement.
- Expanded plan access to 3/8/16/24 templates.
- Added new heading/body font families, template motifs and reduced-motion-aware invitation animation.
- Enhanced Home with an eight-template showcase, animated 24-template marquee and pointer parallax.
- Added sidebar navigation and `template:smoke` regression coverage.

## 0.13.1 - Phase 13 date-format hotfix

- Fixed Planning page runtime crash caused by combining `dateStyle` with explicit hour/minute options.
- Added invalid-date fallback before rendering task deadlines.
- No database migration and no seed changes.

## 0.13.0 — Wedding Planning Timeline & Smart Reminders

- Added per-wedding planning timeline and task management.
- Added smart task templates generated relative to the wedding date.
- Added progress, overdue and due-soon metrics.
- Added task priority, category, assignee and reminder settings.
- Added background planning reminders through Notification and Email Outbox.
- Added a responsive planning workspace and `planning:smoke` regression test.
- Added professional, reduced-motion-aware animation to the public home page.
- Refined input fields, forms, buttons, desktop sidebar and mobile navigation drawer.

## 0.12.0 — Shared Guest Album & Post-wedding Experience

- Added a per-wedding shared memory album with a secure random link.
- Added guest image/video upload without account registration.
- Added owner moderation queue, bulk approval, rejection, archive and deletion.
- Added public post-wedding gallery and thank-you experience.
- Added downloadable QR for guest contribution.
- Added optional uploader names and album close date.
- Added album CTA to public and personalized invitations.
- Increased form-control size, body text scale and sidebar usability.
- Added responsive layouts for moderation cards, upload forms and public gallery.
- Added Phase 12 Prisma migration and `memories:smoke` regression test.
