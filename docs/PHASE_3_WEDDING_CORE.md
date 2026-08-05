# RELEASE PHASE 3 — WEDDING CORE COMPLETION REPORT

## Mapping

- Release Phase 1: Engineering Foundation — Complete.
- Release Phase 2: Identity & Access — Complete.
- Release Phase 3: Wedding Core — Implemented in `v0.3.0`.
- Release Phase 3 tương ứng Master Plan Phase 4 vì Master Plan có Discovery và Brand trước engineering.

## Scope delivered

### ND-010 — Create wedding

- Wedding internal title.
- Bride and groom names.
- Main wedding date.
- Timezone.
- Slug validation and availability endpoint.
- Reserved slug protection.
- Three-step creation wizard.
- Default draft state.

### ND-011 — Event management

- Create, read, update and delete events.
- Engagement, ancestor ceremony, wedding ceremony, reception and other types.
- Bride, groom and shared side.
- Start/end date-time and timezone.
- Venue, address, map URL, dress code, note and sort order.
- Validation that end time is after start time.

### ND-025 — Couple and family profiles

- Bride/groom display names.
- Parents of both families.
- Show/hide family sections.
- Story field.
- Empty optional fields are not rendered publicly.

### ND-026 — Collaborators

- Invite by email.
- VIEW and EDIT permissions.
- Secure random invitation token.
- Seven-day invitation expiry.
- Email-match check when accepting.
- Revoke access.
- Owner-only collaborator administration.
- Collaborator isolation from unrelated weddings.

### ND-027 — Wedding lifecycle

- DRAFT.
- READY_FOR_REVIEW.
- PUBLISHED.
- SUSPENDED.
- EXPIRED.
- ARCHIVED.
- Valid transition matrix.
- Publish readiness rules.
- Duplicate wedding for testing.
- Audit log for important actions.

## Additional delivery

- Real dashboard list from API.
- Workspace progress checklist.
- Real public invitation rendering.
- Demo owner and collaborator accounts.
- Incremental Prisma migration.
- Reusable Docker container start/stop scripts.
- Wedding Core automated smoke test.

## Security rules

- All private wedding APIs require access tokens.
- Owner can manage lifecycle and collaborators.
- EDIT collaborator can change profile and events.
- VIEW collaborator can only read.
- Non-members receive not-found behavior rather than wedding data.
- Pending invitation tokens are only returned to the owner.
- Public API only returns published and non-expired weddings.

## Exit criteria

- Customer can create a wedding without direct database changes: implemented.
- At least one valid event is required before review/publish: implemented.
- Bride/groom family data is separated and rendered correctly: implemented.
- Collaborators cannot access unrelated weddings: implemented.
- Wedding can move through defined lifecycle states: implemented.
- Wedding can be duplicated for testing: implemented.

## Verification commands

```bash
npm run db:setup
npm run build
npm run security:test
npm run auth:smoke
npm run wedding:smoke
```

## Known boundary

- Actual outbound email delivery is not part of Phase 3. In local development the owner copies an invitation URL and sends it manually.
- Template editing, image upload and full invitation builder belong to the next release phase.
- Personalized guest links and production RSVP belong to Guest & RSVP phase.
