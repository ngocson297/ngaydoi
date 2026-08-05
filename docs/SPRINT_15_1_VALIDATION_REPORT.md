# Ngày Đôi v0.15.0 — Validation Report

## Kết quả kiểm tra tĩnh

- 191 file TypeScript/TSX được parse.
- Syntax errors: 0.
- Duplicate object fields: 0.
- Missing relative imports: 0.
- Targeted TypeScript semantic check cho các file Sprint 15.1: pass với compatibility stubs.
- JSON manifests hợp lệ.
- `globals.css` và `design-system.css` cân bằng dấu ngoặc.
- Root/API/Web version đồng bộ: `0.15.0`.
- Production Compose `APP_VERSION`: `0.15.0`.
- `scripts/pack-source.mjs` pass `node --check`.
- `npm run source:pack` đã chạy thành công.
- ZIP do script tạo đã pass integrity test.
- ZIP không chứa `.env`, secret, `node_modules`, `.next`, `dist`, `.git`, `.typecheck` hoặc dữ liệu local.

## Database

- Không sửa Prisma schema.
- Không thêm migration.
- Không cần `db:deploy` hoặc `db:seed`.
- Không có lệnh phá dữ liệu.

## Giới hạn xác nhận trong môi trường artifact

Lệnh `npm install` không hoàn thành vì npm proxy nội bộ trả 404 cho package `zeptomatch@2.1.0`. Do đó không thể chạy NestJS/Next.js production build đầy đủ trong môi trường artifact.

Cần xác nhận trên máy người dùng:

```bash
npm run build
npm run dev:api
npm run dev:web
```

## Khu vực cần regression thủ công

- Login/Register/Forgot/Reset/Verify Email.
- Account Profile và Change Password.
- Session revoke/logout all.
- Delete Account dialog.
- Global loading/error/404.
- Mobile 390px, tablet 768px, desktop 1440px.
- Keyboard focus và Reduce Motion.
