# Release Phase 2 — Identity & Access

**Version:** `0.2.0`  
**Status:** Implemented  
**Mapping:** tương ứng Master Plan Phase 3 — Identity & Access.

## 1. Scope hoàn thành

### ND-003 — Authentication

- Register email/password.
- Password hash bằng Node.js `crypto.scrypt` với salt ngẫu nhiên.
- Email verification token lưu hash, có expiry và one-time use.
- Login bằng email/password.
- Access token HMAC-SHA256, TTL mặc định 15 phút.
- Opaque refresh token, TTL mặc định 7 ngày.
- Refresh-token rotation và session family.
- HttpOnly refresh cookie.
- CSRF double-submit token cho cookie-auth endpoints.
- Logout current session.
- Logout all sessions.

### ND-016 — Password recovery

- Forgot password trả generic response để tránh email enumeration.
- Reset token lưu hash.
- Token hết hạn và chỉ dùng một lần.
- Reset password thu hồi mọi refresh session.
- `authVersion` làm mất hiệu lực access token cũ.

### ND-017 — RBAC and ownership

Roles:

- `CUSTOMER`.
- `FAMILY_EDITOR`.
- `STAFF`.
- `ADMIN`.
- `PARTNER`.
- `CHECKIN_STAFF`.

Đã có:

- `JwtAuthGuard`.
- `Roles` decorator.
- `RolesGuard`.
- Ownership enforcement cho create wedding và dashboard.
- Public invitation chỉ trả wedding `PUBLISHED`.

### ND-018 — Account profile

- View profile.
- Update display name, phone, avatar URL.
- Change password.
- List active sessions.
- Revoke a session.
- Logout all devices.
- Request account deletion.

### ND-019 — Security controls

- Login rate limit theo IP + email trong một API instance.
- Register/forgot/resend rate limit.
- Lock 15 phút sau 5 lần sai.
- Audit login success/failure.
- Audit register, verify, refresh, logout và password changes.
- Refresh-token hash at rest.
- Refresh-token reuse handling.
- 30-second race grace cho request rotation đồng thời.
- Frontend shared refresh promise để tránh React dev double-refresh.
- CORS origin allowlist qua `FRONTEND_URL`.

## 2. Database entities mới

- `RefreshSession`.
- `EmailVerificationToken`.
- `PasswordResetToken`.
- `AuditLog`.

User được bổ sung:

- `status`.
- `phone`.
- `avatarUrl`.
- `emailVerifiedAt`.
- `passwordChangedAt`.
- `authVersion`.
- `failedLoginAttempts`.
- `lockedUntil`.
- `accountDeletionRequestedAt`.
- `deletedAt`.

## 3. Frontend mới

- `/register`.
- `/verify-email`.
- `/login`.
- `/forgot-password`.
- `/reset-password`.
- `/account`.
- AuthProvider giữ access token trong memory.
- Refresh cookie phục hồi session khi reload.
- AuthGate bảo vệ dashboard/account.

## 4. Security decisions

### Password

Password không mã hóa hai chiều. Hệ thống chỉ lưu salted scrypt hash.

### Access token

- TTL ngắn.
- Gửi qua `Authorization: Bearer`.
- Không lưu localStorage.
- Chứa `authVersion` và session ID.

### Refresh token

- Random opaque token.
- Client giữ trong HttpOnly cookie.
- Database chỉ giữ SHA-256 hash.
- Rotate mỗi lần refresh.
- Có thể revoke theo session.

### CSRF

Các endpoint dùng refresh cookie yêu cầu:

- SameSite cookie.
- CSRF cookie đọc được bởi frontend.
- Header `x-csrf-token` phải trùng CSRF cookie.

### Account lock

- Sai lần 1–4: ghi nhận attempt.
- Sai lần 5: khóa 15 phút.
- Login thành công reset counter.

## 5. Known production follow-ups

Không phải blocker cho local development, nhưng bắt buộc trước public launch:

- Gửi email thật thay vì development URL.
- Redis rate-limit storage cho multi-instance.
- Secret manager và secret rotation.
- HTTPS-only cookie.
- Worker xử lý account data retention/deletion.
- SIEM/log aggregation nếu mở rộng.
- Automated E2E trong CI với PostgreSQL service.

## 6. Exit criteria

| Tiêu chí | Trạng thái |
|---|---|
| Register/login/verify/reset implemented | Done |
| Refresh rotation implemented | Done |
| Private account endpoints protected | Done |
| Wedding create/dashboard ownership | Done |
| Session list/revoke/logout-all | Done |
| Audit events | Done |
| Security self-test included | Done |
| Auth smoke test included | Done |
| Source syntax validation | Pass |
| Full runtime build in delivery environment | Chạy tại máy người dùng bằng README |
