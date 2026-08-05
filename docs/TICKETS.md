# Delivery Backlog

## Release Phase 1 — Foundation — DONE

### ND-001 Repository and local infrastructure — DONE

- npm workspaces.
- Next.js web.
- NestJS API.
- PostgreSQL Docker.
- Prisma schema, migration và seed.

### Starter UI — DONE

- Landing page.
- Public invitation demo.
- Dashboard demo.

## Release Phase 2 — Identity & Access — DONE in v0.2.0

### ND-003 Authentication — DONE

- Register/login.
- Email verification development flow.
- Access token.
- Refresh token rotation.
- Logout/logout-all.

### ND-016 Password recovery — DONE

- Forgot password.
- Reset token expiry và one-time use.
- Revoke sessions sau reset.

### ND-017 RBAC and ownership — DONE FOUNDATION

- CUSTOMER, FAMILY_EDITOR, STAFF, ADMIN, PARTNER, CHECKIN_STAFF.
- JWT guard, roles decorator và roles guard.
- Wedding ownership guard.

### ND-018 Account profile — DONE

- Profile.
- Change password.
- Session list/revoke.
- Account deletion request.

### ND-019 Security controls — DONE FOR LOCAL/STAGING FOUNDATION

- Login lock.
- Request rate limit.
- Audit logs.
- CSRF protection.
- Hashed refresh tokens.

## Release Phase 3 — Wedding Core — DONE

### ND-010 Create wedding

- Wedding name nội bộ.
- Bride/groom profiles.
- Slug availability.
- Main wedding date.
- Draft lifecycle.
- Create wizard.

### ND-011 Event management

- Engagement, ancestor ceremony, wedding ceremony, reception.
- Groom/bride/shared side.
- Date, timezone, venue, map and dress code.

### ND-012 Wedding settings

- Update wedding.
- Archive wedding.
- Ownership and permission policies.

## Release Phase 4 — Invitation Builder — DONE

### ND-013 Template and content editor — DONE

- Template selection.
- Copy, theme and music.
- Mobile/desktop preview.
- Autosave draft.

### ND-014 Media management — DONE

- Secure image upload.
- Compression and thumbnails.
- Cover and album ordering.

## Release Phase 5 — Guest & RSVP — DONE

### ND-020 Guest list — DONE

- CRUD guests.
- Groups, side and inviter.
- Plus-one and children.

### ND-021 Excel import/export — DONE

- Template download.
- Validation and duplicate detection.
- Import report.

### ND-022 Personalized invitation — DONE

- Unique guest token.
- Greeting and salutation.
- View tracking.
- Revoke/regenerate.

### ND-023 RSVP — DONE

- Attend/decline.
- Event selection.
- Party size, meal, transport and message.

### ND-024 Dashboard analytics — DONE

- Invited, viewed, attending, declined and pending.
- Headcount by group/event.

## Later phases

- Commercial MVP: plans, orders, payment, admin.
- Production readiness: CI/CD, monitoring, backup, security review.
- Event operations: tables and QR check-in.
- Post-wedding album.
- Partner portal.

---

# Release Phase 3 — Wedding Core

| Ticket | Scope | Status |
|---|---|---|
| ND-010 | Create wedding, date, slug and wizard | DONE |
| ND-011 | Event CRUD and event metadata | DONE |
| ND-025 | Couple and family profiles | DONE |
| ND-026 | Collaborator invite, permission and revoke | DONE |
| ND-027 | Wedding lifecycle and duplicate | DONE |
| ND-030 | Wedding dashboard and readiness checklist | DONE |
| ND-031 | Wedding Core automated smoke test | DONE |
