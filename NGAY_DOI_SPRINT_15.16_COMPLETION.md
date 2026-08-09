# Ngày Đôi — Sprint 15.16 Completion

Version: **v0.15.15**
Sprint: **Release Candidate & End-to-End Hardening**

## Delivered

- Closed the public/private album boundary so only `APPROVED` media can be served through a public album token.
- Kept owner/editor preview of pending assets behind authenticated, wedding-scoped authorization.
- Revalidated `uploadEnabled` and `closesAt` during direct-upload completion, preventing stale upload tickets from bypassing a closed intake window.
- Added Sprint 15.16 static checks for wedding tenant isolation, Admin backend RBAC, album moderation boundaries, request IDs and public rate limits.
- Added root `lint` and `typecheck` commands plus `rc:smoke`, `rc:report` and `rc:check` orchestration.
- Updated release metadata to v0.15.15. No schema change or migration was required.

## Release commands

```bash
npm run rc:smoke
npm run rc:report
npm run rc:check
```

Database-backed `smoke:all` and production configuration validation remain environment gates and must pass against the intended Pilot environment before deployment.
