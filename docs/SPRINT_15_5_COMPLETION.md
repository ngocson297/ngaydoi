# Ngày Đôi — Sprint 15.5 Completion

Version: **0.15.4**

## Completed

- Added a global skip link, route-change announcements and consistent `main` landmarks.
- Added a shared accessible Tabs component with Arrow, Home and End keyboard navigation.
- Migrated eight Admin/Wedding tab workspaces to the shared Tabs component.
- Strengthened focus trap, Escape handling, scroll locking, unique ARIA IDs and focus restoration for dialogs, mobile drawer and command palette.
- Improved toast live-region behavior and pause-on-hover/focus timing.
- Added semantic radio behavior to public RSVP choices.
- Added accessible names to icon buttons, row/select-all checkboxes, camera/video previews and media controls.
- Added progressbar semantics to wedding planning, guest response and seating-capacity indicators.
- Removed the remaining `window.prompt` flow and replaced it with a validated accessible dialog.
- Added minimum touch targets, visible focus rings, higher-contrast/forced-color support and comprehensive reduced-motion handling.
- Added `npm run a11y:audit` for static accessibility regression checks.

## User experience result

Keyboard and assistive-technology users can now skip repetitive navigation, understand route changes, operate the main tabbed workspaces, remain safely contained inside dialogs/drawers, and receive textual/semantic feedback instead of relying only on color or animation.

## Database

No Prisma schema or migration changes.

## Dependencies

No new runtime or development package dependency.
