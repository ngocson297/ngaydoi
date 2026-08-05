# Ngày Đôi — Sprint 15.4 Completion

Version: **0.15.3**

## Completed

- Centralized API error normalization for user-safe messages.
- Internal Prisma, SQL, file-path, stack and framework details are no longer rendered to users.
- Shared request-ID display with copy action.
- Shared full-page error, inline error, permission, empty and retry states.
- Expanded metric, list, table, detail and page skeletons.
- Route-level loading boundaries for 13 major application areas.
- Migrated Dashboard, Billing, Pricing, Orders, Support, Growth, Templates, Partner and Admin flows.
- Migrated core Wedding Workspace, Invitation Studio, Guests, Event Operations and Memories flows.
- Migrated public invitation, secure preview, public memory album and check-in token pages.
- Added actionable empty states instead of blank panels.
- Fixed asynchronous reload loops found in Growth Hub and Pricing during the audit.

## User experience result

Users now receive a clear loading state, a guided empty state, or a recoverable error state. API failures expose a support request ID when available, provide a retry action, and never expose an internal stack trace.

## Database

No Prisma schema or migration changes.

## Dependencies

No new package dependency.
