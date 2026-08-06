# NGÀY ĐÔI API — v0.14.0

Base URL:

```text
http://localhost:4000/api
```

Private endpoints require:

```http
Authorization: Bearer <access-token>
```

## Health

| Method | Endpoint | Access |
|---|---|---|
| GET | `/health` | Public |

## Authentication and account

Phase 2 endpoints remain unchanged: register, verify email, login, refresh, logout, forgot/reset password, account profile, password and sessions.

## Wedding Core

| Method | Endpoint | Access | Purpose |
|---|---|---|---|
| GET | `/weddings` | Authenticated | List owned and accepted collaborative weddings |
| POST | `/weddings` | Authenticated | Create draft wedding |
| GET | `/weddings/slug-availability?slug=...` | Authenticated | Check invitation slug |
| GET | `/weddings/:id` | Member | Get wedding workspace |
| PATCH | `/weddings/:id` | Owner/EDIT | Update wedding and family profile |
| DELETE | `/weddings/:id` | Owner | Archive wedding |
| GET | `/weddings/:id/dashboard` | Member | Metrics and readiness checklist |
| POST | `/weddings/:id/lifecycle` | Owner | Change wedding status |
| POST | `/weddings/:id/duplicate` | Owner | Duplicate wedding and events |
| GET | `/weddings/public/:slug` | Public | Render published invitation |

## Events

| Method | Endpoint | Access | Purpose |
|---|---|---|---|
| POST | `/weddings/:id/events` | Owner/EDIT | Add event |
| PATCH | `/weddings/:id/events/:eventId` | Owner/EDIT | Update event |
| DELETE | `/weddings/:id/events/:eventId` | Owner/EDIT | Delete event |

## Collaborators

| Method | Endpoint | Access | Purpose |
|---|---|---|---|
| POST | `/weddings/:id/collaborators` | Owner | Create or resend invitation |
| DELETE | `/weddings/:id/collaborators/:collaboratorId` | Owner | Revoke access |
| POST | `/weddings/collaborations/:token/accept` | Invited authenticated user | Accept invitation |

## Lifecycle transitions

```text
DRAFT → READY_FOR_REVIEW → PUBLISHED
DRAFT/READY_FOR_REVIEW → ARCHIVED
READY_FOR_REVIEW → DRAFT
PUBLISHED → SUSPENDED | EXPIRED | ARCHIVED
SUSPENDED → PUBLISHED | EXPIRED | ARCHIVED
EXPIRED → DRAFT | ARCHIVED
ARCHIVED → DRAFT
```

Before `READY_FOR_REVIEW` or `PUBLISHED`, wedding must contain:

- Main wedding date.
- At least one event.


## Invitation Builder API

```text
GET    /api/templates
GET    /api/invitations/preview/:token
GET    /api/media/public/:mediaId
GET    /api/weddings/:id/invitation
PATCH  /api/weddings/:id/invitation
POST   /api/weddings/:id/invitation/preview-token
DELETE /api/weddings/:id/invitation/preview-token
POST   /api/weddings/:id/invitation/versions
POST   /api/weddings/:id/invitation/versions/:versionId/restore
POST   /api/weddings/:id/media
PATCH  /api/weddings/:id/media/:mediaId
POST   /api/weddings/:id/media/reorder
DELETE /api/weddings/:id/media/:mediaId
```

Private routes require a Bearer access token. Media upload uses `multipart/form-data` with field `file`.

---

## Phase 5 — Guest Management & RSVP

### Public personalized invitation

```http
GET /api/guest-invitations/:token
```

Returns the published wedding, only the events visible to that guest, personalized greeting, invitation tracking data and current RSVP.

### Submit or update RSVP

```http
POST /api/rsvp/:token
Content-Type: application/json

{
  "status": "ATTENDING",
  "adultCount": 2,
  "childCount": 1,
  "vegetarianCount": 1,
  "needsTransport": false,
  "selectedEventIds": ["event-id"],
  "message": "Hẹn gặp hai bạn trong ngày vui."
}
```

The same token updates the existing RSVP and appends `RsvpHistory`.

### Guest list

```http
GET /api/weddings/:weddingId/guests?page=1&pageSize=25&search=&side=&status=&groupName=
Authorization: Bearer <access-token>
```

Supported status filters: `ATTENDING`, `DECLINED`, `MAYBE`, `PENDING`, `SENT`, `VIEWED`, `CREATED`, `REVOKED`.

### Guest CRUD

```http
POST   /api/weddings/:weddingId/guests
PATCH  /api/weddings/:weddingId/guests/:guestId
DELETE /api/weddings/:weddingId/guests/:guestId
```

### Invitation settings and lifecycle

```http
PATCH /api/weddings/:weddingId/guests/:guestId/invitation
POST  /api/weddings/:weddingId/guests/:guestId/mark-sent
POST  /api/weddings/:weddingId/guests/bulk
```

Bulk actions: `MARK_SENT`, `REVOKE`, `REGENERATE`, `ARCHIVE`, `RESTORE`, `DELETE`.

### CSV import/export

```http
POST /api/weddings/:weddingId/guests/import-preview
POST /api/weddings/:weddingId/guests/import
GET  /api/weddings/:weddingId/guests/export
```

Import body:

```json
{
  "duplicateMode": "SKIP",
  "rows": [
    {
      "Họ tên": "Nguyễn Văn An",
      "Nhóm khách": "Đồng nghiệp",
      "Nhà trai/nhà gái": "GROOM",
      "Số người lớn": "2"
    }
  ]
}
```

### Analytics and notifications

```http
GET   /api/weddings/:weddingId/guests/analytics
GET   /api/weddings/:weddingId/notifications
PATCH /api/weddings/:weddingId/notifications/:notificationId/read
```


---

## Phase 13 — Wedding Planning Timeline & Smart Reminders

| Method | Endpoint | Access | Purpose |
|---|---|---|---|
| GET | `/weddings/:weddingId/planning` | Owner/Collaborator | Planning overview, metrics and tasks |
| POST | `/weddings/:weddingId/planning/bootstrap` | Owner/EDIT | Create smart timeline from wedding date |
| POST | `/weddings/:weddingId/planning/tasks` | Owner/EDIT | Create custom task |
| PATCH | `/weddings/:weddingId/planning/tasks/:taskId` | Owner/EDIT | Update task, status or reminder |
| DELETE | `/weddings/:weddingId/planning/tasks/:taskId` | Owner/EDIT | Delete task |
| POST | `/admin/planning/reminders/process` | ADMIN/STAFF | Run reminder processor manually |

Planning reminders are also processed by the API job runner when `JOB_RUNNER_ENABLED` is not `false`. The interval can be configured with `PLANNING_REMINDER_INTERVAL_MS`.


## Template Library (Phase 14)

- `GET /api/templates` — Public catalog of 36 invitation templates with category, plan, tags, motif and motion metadata.
- `PATCH /api/weddings/:id/invitation` — Validates template entitlement when `templateKey` changes.
