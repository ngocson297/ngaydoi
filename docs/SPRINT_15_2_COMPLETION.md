# Sprint 15.2 — Navigation & Information Architecture

**Version:** v0.15.1
**Scope:** UX hardening only. No new product feature and no database change.

## Completed

- Central navigation model shared by desktop sidebar, mobile drawer and command palette.
- Role-aware visibility for Customer, Family Editor, Partner, Staff, Admin and Check-in Staff.
- Collapsible menu groups persisted per role in browser storage.
- Progressive disclosure: wedding tools remain summarized until a wedding context is selected.
- Command palette with `⌘ K` / `Ctrl K`, search, arrow navigation, Enter and Escape.
- Breadcrumbs for deep application and wedding workspace pages.
- Accessible mobile drawer with focus trap, Escape close, scroll lock and focus restoration.
- Clear role label and user context in desktop and mobile navigation.
- Reduced-motion support for navigation transitions and overlays.
- `source:pack` now excludes generated Prisma Client output.

## Role behavior

- Customer: dashboard, onboarding, wedding workspace, templates, billing, growth, support and account.
- Family Editor: wedding collaboration tools without owner billing.
- Partner: Partner Portal, templates, support and account.
- Staff/Admin: operational and administrative groups in addition to product tools.
- Check-in Staff: minimal dashboard/templates/support/account surface.

## Not included

- No Prisma migration.
- No seed change.
- No API route change.
- No new npm dependency.
- No production deployment configuration.

## Next sprint

Sprint 15.3 should standardize complex forms, date/time controls, uploads, unsaved-change protection and confirmation workflows across remaining product screens.
