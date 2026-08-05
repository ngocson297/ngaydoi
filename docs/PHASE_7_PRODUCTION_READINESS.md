# NGÀY ĐÔI v0.7.0 — Phase 7 Completion Report

## 1. Release summary

**Release:** v0.7.0  
**Release phase:** Phase 7 — Production Readiness Foundation  
**Upgrade source:** v0.6.1 — Phase 6 Build Hotfix  
**Database strategy:** incremental migration; no reset and no destructive migration.

Phase 7 turns the local MVP into an application that can be operated and prepared for deployment safely. It adds deployment gates, provider abstractions, health endpoints, durable background delivery, signed webhooks, structured logs, backups and an operations dashboard.

> This release is production-readiness infrastructure, not a claim that the application is already live. Real domains, TLS certificates, merchant/payment-provider onboarding, production credentials and a restore drill must still be completed before public launch.

## 2. Delivered scope

### 2.1 Configuration and deployment gates

- Central environment validation at API startup.
- Production refuses to start when critical settings are unsafe:
  - weak/default JWT secret;
  - non-HTTPS frontend origin;
  - insecure refresh cookie;
  - payment sandbox left enabled;
  - console-only email provider;
  - local-only media storage;
  - missing webhook encryption key.
- Separate browser API URL and internal server API URL.
- Release metadata through `APP_VERSION` and `RELEASE_SHA`.
- Graceful shutdown hooks and proxy awareness.

### 2.2 Health, readiness and public status

- `GET /api/health` — backward-compatible liveness.
- `GET /api/health/live` — process liveness.
- `GET /api/health/ready` — database, storage and configuration readiness; returns HTTP 503 when unsafe.
- `GET /api/health/status` — sanitized public service state.
- Public friendly status page at `/status`, refreshing every 30 seconds.
- Admin operations dashboard at `/admin/system`.

### 2.3 Observability and error handling

- Request ID for every API request.
- Incoming `X-Request-ID` is reused when valid; otherwise a UUID is generated.
- Structured JSON request logs with method, route, status and duration.
- Security headers on API responses.
- Production HSTS support.
- Internal 5xx details are hidden from clients.
- Client error messages include a support/request ID for tracing.
- Custom friendly loading, not-found and unexpected-error pages.

### 2.4 Durable email outbox

- Database-backed `EmailOutbox`.
- Email is stored before provider delivery.
- `CONSOLE` provider for local development.
- `RESEND` provider adapter for production credentials.
- Background worker with exponential retry.
- Dead-letter state after repeated failure.
- Manual retry and manual queue processing from Admin.
- Interrupted `PROCESSING` jobs are recovered automatically.
- Verification and password-reset flows now queue actual messages.

### 2.5 Signed outbound webhooks

- Admin CRUD for webhook endpoints.
- Event subscription list and wildcard `*` support.
- Webhook secrets encrypted with AES-256-GCM at rest.
- Signing secret shown once after endpoint creation.
- HMAC SHA-256 request signature:
  - `x-ngaydoi-event`;
  - `x-ngaydoi-delivery`;
  - `x-ngaydoi-timestamp`;
  - `x-ngaydoi-signature: v1=<hex>`.
- Timeout, exponential retry and dead-letter state.
- Idempotent delivery records through endpoint/event unique key.
- Test delivery from Admin.
- Interrupted worker recovery.
- Events currently emitted for RSVP, orders, payment review/refund and publish review.

### 2.6 Storage abstraction

- `LOCAL` provider for development.
- S3-compatible provider for production, including Cloudflare R2-style endpoints.
- Provider-independent upload, read, delete and health checks.
- Existing Invitation Studio media flow migrated to the storage abstraction.
- `INTERNAL_API_URL` prevents server-rendered pages from incorrectly calling relative `/api` URLs inside containers.
- `PUBLIC_APP_URL` ensures social preview media URLs are public rather than internal container URLs.

### 2.7 Backup and restore

- `npm run backup:create` — PostgreSQL custom-format dump, media archive, manifest and verification.
- `npm run backup:list` — inventory and size.
- `npm run backup:restore -- <name> --yes` — deliberate destructive restore.
- Retention limit through `BACKUP_RETENTION_COUNT`.
- Backup files remain outside versioned source folders.

### 2.8 Deployment artifacts

- Multi-stage API Dockerfile.
- Multi-stage Web Dockerfile.
- Production Docker Compose for PostgreSQL, API, Web and Nginx gateway.
- Nginx reverse proxy with upload limit and forwarded headers.
- `.env.production.example` with required deployment settings.
- `.dockerignore` excluding secrets and development artifacts.

### 2.9 Admin UX

- New **Hệ thống** navigation item for Admin/Staff.
- Readiness badge and deployment checklist.
- Database latency and size.
- Storage provider status.
- Node/runtime memory information.
- Email queue metrics and retry controls.
- Webhook endpoint creation, test, delivery history and retries.
- Responsive layouts and mobile-friendly controls.

## 3. Database changes

The incremental migration adds:

- `DeliveryStatus` enum.
- `EmailOutbox` table.
- `WebhookEndpoint` table.
- `WebhookDelivery` table.
- Supporting indexes and cascade relation from delivery to endpoint.

The migration contains no `DROP TABLE`, `DROP COLUMN`, `TRUNCATE` or data deletion.

## 4. Events available

- `rsvp.updated`
- `order.created`
- `payment.submitted`
- `payment.confirmed`
- `payment.rejected`
- `payment.refunded`
- `publish.approved`
- `publish.rejected`
- `system.webhook.test`
- `*` wildcard subscription

## 5. Security decisions

- Webhook plaintext secrets are never returned after creation.
- Secrets are encrypted before database storage.
- Signature covers `<timestamp>.<raw-json-body>`.
- Webhook destination must use HTTPS in production.
- Production refresh cookies must be secure.
- API exception responses do not expose stack traces.
- Deployment is blocked when development-only providers remain enabled.
- No `.env` or credentials are packaged in the release ZIP.

## 6. Exit criteria

Phase 7 is complete when all of the following pass on the target machine:

```bash
npm run db:setup
npm run build
npm run operations:smoke
npm run backup:create
npm run backup:list
```

Manual checks:

- `/api/health/ready` returns `ready` locally.
- `/status` renders and refreshes.
- Admin can open `/admin/system`.
- A test webhook is delivered and its HMAC verifies.
- Verification/reset email appears in Email Outbox using `CONSOLE` locally.
- A backup is created and listed.

## 7. Remaining before public go-live

- Buy/configure a production domain and TLS termination.
- Create production PostgreSQL/storage/email credentials.
- Choose and onboard a real payment gateway or retain verified manual transfer operations.
- Configure DNS/SPF/DKIM/DMARC for the sending domain.
- Store secrets in the hosting platform’s secret manager.
- Run a restore drill against a disposable environment.
- Configure external uptime monitoring and alerts.
- Complete privacy policy, terms, retention policy and operational ownership.
- Perform penetration/security review and load testing.

## 8. Next recommended phase

**Phase 8 — Pilot Launch & Operational Hardening**:

- deploy staging and production environments;
- integrate the selected real payment provider after merchant onboarding;
- configure production email/storage/domain;
- run UAT with real wedding operators;
- alerting, incident drills and restore drill;
- legal/privacy launch checklist;
- controlled pilot customers and launch metrics.
