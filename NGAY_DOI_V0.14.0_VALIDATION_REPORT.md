# Ngày Đôi v0.14.0 — Validation Report

## Phạm vi kiểm tra

Kiểm tra source cho Phase 14 — Template Library, Theme Marketplace & Final Product Polish.

## Kết quả

- Root/API/Web version: **0.14.0**.
- TypeScript/TSX source parsed: **184 files**.
- Syntax diagnostics: **0**.
- Duplicate object fields: **0**.
- Missing relative imports: **0**, không tính generated Prisma Client được tạo bởi `db:generate`.
- JSON manifests parsed: **7 files**, hợp lệ.
- CSS braces: **2.066 mở / 2.066 đóng**, cân bằng.
- Targeted Web semantic check với compatible React/Next stubs: **pass**.
- API template constants + DTO semantic/decorator check: **pass**.
- `dateStyle`/`timeStyle` không còn trong Web source; hotfix v0.13.1 được giữ.

## Template library

- Tổng template: **24**.
- Unique template keys: **24**.
- Nhóm catalog: **8**.
- Các tier có mặt: `FREE`, `STARTER`, `STANDARD`, `PREMIUM`.
- Quyền seed theo gói:
  - FREE: 3.
  - STARTER: 8.
  - STANDARD: 16.
  - PREMIUM: 24.
- DTO dùng chung `INVITATION_TEMPLATE_KEYS`, không còn danh sách 5 key bị hard-code riêng.
- API gọi `assertTemplateAccess` khi đổi template.
- Guard không khóa các chỉnh sửa nội dung nếu wedding đang giữ một template cũ sau khi thay đổi gói.

## UI/UX

- Public route `/templates` tồn tại.
- Home route hiển thị showcase 8 mẫu và thông điệp 24 template.
- Sitemap và robots cho phép index `/templates`.
- Sidebar và mobile drawer có Kho mẫu thiệp.
- Responsive CSS có layout 4/3/2/1 cột cho catalog.
- Animation có fallback `prefers-reduced-motion`.
- Favorite button có accessible label.
- Empty/loading/error state có nội dung thân thiện.

## Database

- Phase 14 không thay đổi Prisma schema.
- Không có migration Phase 14 mới.
- `db:seed` được cập nhật bằng upsert để thay đổi `Plan.templateKeys`.
- Không thêm SQL xóa dữ liệu.

## Regression

- Thêm root script `npm run template:smoke`.
- Smoke test xác nhận 24 template, key duy nhất, nhóm Việt Nam, 16 mẫu Standard và server-side locked-template guard.
- Existing `invitation:smoke` được cập nhật để kỳ vọng 24 template.

## Giới hạn môi trường artifact

Đã thử:

```bash
npm install --ignore-scripts --no-audit --no-fund
```

Nhưng npm registry nội bộ của môi trường artifact trả `404` cho `@nestjs/cli@^11.0.10`. Vì vậy không thể chạy full NestJS build, Next.js build, Prisma runtime hoặc Docker smoke test trong môi trường này.

Các lệnh bắt buộc xác nhận trên máy người dùng:

```bash
npm install
npm run db:generate
npm run db:deploy
npm run db:seed
npm run build
npm run template:smoke
npm run invitation:smoke
```
