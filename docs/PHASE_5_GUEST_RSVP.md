# Release Phase 5 — Guest Management & RSVP Core

> Master Plan mapping: Phase 6 — Guest & RSVP  
> Release: `v0.5.0`  
> Status: Complete in source

## 1. Objective

Turn the invitation website into an operational guest-management product. A wedding owner can create and segment guests, issue a private link for each guest, collect structured RSVP information, monitor response progress and export the result for event preparation.

## 2. Delivered scope

### ND-020 — Guest list

- Create, read, update and delete guests.
- Search by name, phone, email, group, inviter and tag.
- Filter by wedding side, group and invitation/RSVP status.
- Pagination and responsive desktop/mobile presentation.
- Group, bride/groom/shared side, inviter, table placeholder, internal note and tags.
- Maximum adult and child allowance.
- Bulk mark sent, revoke, regenerate, archive, restore and delete.
- Owner and collaborator permissions.

### ND-021 — CSV import/export

- Download an Excel-compatible CSV template.
- Browser CSV parsing, including quoted cells and UTF-8 BOM.
- Preview before write.
- Row-level validation.
- Duplicate detection against the database and within the same file.
- Skip or update duplicate mode.
- Import report and sample preview.
- Export guest data, RSVP values and absolute personalized links.

### ND-022 — Personalized invitation

- One cryptographically random token per invitation.
- No name, email or phone in the URL.
- Personalized greeting and display name.
- Event visibility per guest.
- First-view, last-view and view-count tracking.
- Mark sent, revoke and regenerate lifecycle.
- Published/non-expired wedding enforcement.
- Archived guest enforcement.

### ND-023 — RSVP

- Attending, maybe and declining responses.
- Multiple event selection.
- Adult, child and vegetarian meal counts.
- Transport request and guest message.
- Party allowance validation.
- Existing response update through the same private link.
- RSVP event selections and history.
- Per-token submission rate limit.

### ND-024 — Analytics and notifications

- Invited, sent, viewed, responded, attending, declined, maybe and pending.
- Estimated headcount.
- Vegetarian meal and transport counts.
- View-to-RSVP conversion rate.
- Breakdown by event, wedding side, guest group and inviter.
- In-app notification when a guest submits or updates RSVP.
- Mark notification as read.

## 3. UI/UX improvements

- Direct Guest & RSVP navigation from the Wedding Workspace and sidebar.
- Dashboard-style KPI cards with clear labels.
- Search and filters stay together above the guest list.
- Empty, loading, success and error states.
- Side drawer for guest editing without losing list context.
- Destructive actions require confirmation.
- Import is presented as a three-step guided flow.
- RSVP uses large touch targets suitable for mobile devices.
- Client-side RSVP validation explains what is missing before submission.
- Personalized link opens with guest name and greeting immediately.
- Server-side personalized-page loading avoids double view tracking in development mode.

## 4. Data model additions

- `Guest.tags`
- `Guest.archivedAt`
- `Invitation.greeting`
- `Invitation.revokedAt`
- `InvitationEvent`
- `RsvpEventSelection`
- `RsvpHistory`
- `Notification`

The migration backfills existing invitations with visibility for every existing event in the same wedding, preserving Phase 4 behavior.

## 5. API additions

Public:

- `GET /api/guest-invitations/:token`
- `POST /api/rsvp/:token`

Private:

- `GET /api/weddings/:weddingId/guests`
- `POST /api/weddings/:weddingId/guests`
- `PATCH /api/weddings/:weddingId/guests/:guestId`
- `DELETE /api/weddings/:weddingId/guests/:guestId`
- `PATCH /api/weddings/:weddingId/guests/:guestId/invitation`
- `POST /api/weddings/:weddingId/guests/:guestId/mark-sent`
- `POST /api/weddings/:weddingId/guests/bulk`
- `POST /api/weddings/:weddingId/guests/import-preview`
- `POST /api/weddings/:weddingId/guests/import`
- `GET /api/weddings/:weddingId/guests/export`
- `GET /api/weddings/:weddingId/guests/analytics`
- `GET /api/weddings/:weddingId/notifications`
- `PATCH /api/weddings/:weddingId/notifications/:notificationId/read`

## 6. Security and privacy controls

- All private guest APIs require a valid access token.
- Wedding ownership/collaborator access is resolved before guest data is returned.
- VIEW collaborators cannot mutate guest or invitation data.
- Tokens are generated with `randomBytes(32)` and encoded as base64url.
- Personalized URLs do not expose guest PII.
- Revoked and archived records return not found publicly.
- Public links require a published, non-expired wedding.
- RSVP values are validated against invitation limits and visible events.
- RSVP submission is rate-limited per invitation token.
- RSVP changes are appended to `RsvpHistory`.
- Important guest operations are written to `AuditLog`.

## 7. Data preservation

This is an incremental migration. Do not run `db:clean` during upgrade.

The Phase 5 seed removes and recreates only guests tagged `seed-demo`. Guests created manually in the application are preserved.

## 8. Exit criteria

Phase 5 is considered complete when:

1. `npm run db:setup` completes without migration or seed errors.
2. `npm run build` completes for API and Web.
3. `npm run guest:smoke` passes while API is running.
4. An owner can create a guest and copy a personalized link.
5. The personalized link renders only the guest's allowed events.
6. The guest can submit and update RSVP.
7. Guest list and analytics reflect the response.
8. CSV preview detects invalid and duplicate rows.
9. A VIEW collaborator cannot mutate guest data.
10. Existing Phase 4 wedding, invitation design and uploaded images remain available.

## 9. Deferred scope

The following items remain for later phases:

- Email/SMS/Zalo delivery integration.
- Seating-plan engine and finalized table assignment.
- QR check-in.
- Payment plans and guest limits by subscription.
- Production-grade distributed rate limiting.
- Background notification delivery.
- XLSX binary import; this phase uses Excel-compatible CSV.
