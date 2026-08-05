# Ngày Đôi v0.13.0 — Validation Report

## Static validation đã hoàn thành

- TypeScript/TSX files parsed: **182**.
- TypeScript syntax diagnostics: **0**.
- Duplicate object literal fields: **0**.
- Missing relative imports, không tính generated Prisma Client: **0**.
- Package JSON files: hợp lệ.
- Root/API/Web version: **0.13.0**.
- PlanningModule registered in AppModule: có.
- `planning:smoke` registered at root và API workspace: có.
- Prisma `PlanningTask` model: có.
- Wedding ↔ PlanningTask relation: có.
- Duplicate Prisma model fields: **0**.
- CSS block pairs: **1,903**, cân bằng.
- Phase 13 migration destructive operations: không có.
- `.env`, `.env.local`, secret, `node_modules`, `.next`, `dist` và generated Prisma Client: không được đóng gói.

## Migration review

Migration `20260805130000_phase13_planning_automation` chỉ thực hiện:

- tạo bốn enum;
- tạo bảng `PlanningTask`;
- tạo index;
- tạo foreign key đến `Wedding` với `ON DELETE CASCADE`.

Không phát hiện:

```text
DROP TABLE
DROP COLUMN
DELETE FROM
TRUNCATE
```

## UI/UX review

Đã rà source cho:

- planning form một cột trên mobile;
- input/select/textarea/button có chiều cao và focus state nhất quán;
- dashboard task không tràn ngang;
- sidebar desktop có section label và scroll;
- mobile drawer có backdrop và nút đóng;
- home animation không phụ thuộc thư viện ngoài;
- reveal animation có fallback `prefers-reduced-motion`;
- long text và task title có quy tắc wrap;
- breakpoint 430, 680, 900 và 1,120 px.

## Security review

- Access planning dùng owner/collaborator permission hiện có.
- User `VIEW` không được tạo, sửa hoặc xóa task.
- Task title/description/assignee có giới hạn độ dài.
- Priority/category/status chỉ nhận giá trị hợp lệ.
- Reminder days được giới hạn từ 0 đến 30.
- Reminder worker giới hạn 100 candidate mỗi lượt.
- HTML email reminder escape dữ liệu do người dùng nhập.
- Endpoint xử lý reminder thủ công chỉ dành cho `ADMIN`/`STAFF`.

## Runtime limitation trong môi trường tạo artifact

Không thể hoàn tất `npm install` vì npm proxy của môi trường tạo artifact trả `404` cho package `@nestjs/cli`. Vì vậy, NestJS/Next.js production build, Prisma runtime migration, Docker và smoke test phải được xác nhận trên máy của người dùng.

Các lệnh xác nhận bắt buộc:

```bash
npm install
npm run db:generate
npm run db:deploy
npm run db:seed
npm run build
npm run planning:smoke
```

## Artifact packaging

- Source files trong release folder: **265**.
- ZIP archive integrity test: **passed**.
- Forbidden runtime/secret paths: không có.
