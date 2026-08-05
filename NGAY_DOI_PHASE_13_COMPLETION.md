# Phase 13 Completion — Wedding Planning Timeline & Smart Reminders

**Version:** v0.13.0  
**Status:** Hoàn tất source và static validation; cần xác nhận build/runtime trên máy đích.

## Phạm vi đã hoàn thành

### Wedding Planning Timeline

- Mỗi wedding có một timeline kế hoạch riêng.
- Tạo timeline thông minh theo ngày cưới.
- 16 công việc mẫu từ giai đoạn chuẩn bị ngân sách đến công việc sau cưới.
- Bootstrap idempotent, không tạo task hệ thống trùng.
- Tạo, sửa, hoàn thành, mở lại, hủy và xóa công việc tùy chỉnh.
- Lưu mô tả, nhóm việc, độ ưu tiên, hạn hoàn thành và người phụ trách.

### Dashboard tiến độ

- Phần trăm hoàn thành.
- Tổng công việc.
- Công việc đang hoạt động.
- Công việc đã hoàn thành.
- Công việc quá hạn.
- Công việc đến hạn trong 14 ngày.
- Bộ lọc tất cả, quá hạn, sắp tới và đã hoàn thành.
- Tìm kiếm theo nội dung và lọc theo nhóm.

### Smart Reminders

- Bật/tắt nhắc việc theo từng task.
- Cấu hình số ngày nhắc trước từ 0 đến 30 ngày.
- Background worker có chu kỳ cấu hình được.
- Tạo Notification cho owner.
- Xếp email vào Email Outbox.
- Có endpoint Admin để kích hoạt xử lý nhắc việc thủ công.
- Không gửi lặp lại cho cùng lịch nhắc.
- Khi đổi hạn hoặc cấu hình nhắc, lịch nhắc được mở lại.
- Nội dung HTML email được escape trước khi đưa vào Outbox.

### Home animation

- Animation hero nền nhẹ.
- Floating cards và decorative petals.
- Reveal-on-scroll bằng Intersection Observer.
- Animation cho feature, template, pricing và CTA.
- Không thêm thư viện animation nặng.
- Hỗ trợ `prefers-reduced-motion`.
- Hiệu ứng không chặn nội dung hoặc thao tác.

### UI/UX hardening

- Input, select, textarea và button có kích thước chạm lớn hơn.
- Focus state rõ ràng.
- Form planning responsive và có lỗi thân thiện.
- Sidebar được chia thành các nhóm chức năng.
- Active state rõ ràng hơn.
- Sidebar desktop có thể cuộn khi menu dài.
- Thêm mobile app bar, backdrop và navigation drawer.
- Menu Kế hoạch cưới được đưa vào workspace và sidebar.
- Nội dung dài tự wrap, hạn chế tràn layout.
- Breakpoint tối ưu cho mobile, tablet và desktop.

### Codex continuity

- Thêm `AGENTS.md` tại root.
- Ghi rõ quy tắc migration, build, smoke test và bảo toàn dữ liệu.
- Codex trong VS Code có thể đọc quy tắc dự án ngay khi mở folder gốc.

## Thay đổi dữ liệu

Đã thêm:

- `PlanningTask`
- `PlanningTaskStatus`
- `PlanningTaskPriority`
- `PlanningTaskCategory`
- `PlanningTaskSource`

Migration chỉ thêm enum, bảng, index và foreign key. Không có `DROP TABLE`, `DROP COLUMN`, `DELETE FROM` hoặc `TRUNCATE`.

## API mới

```text
GET    /api/weddings/:weddingId/planning
POST   /api/weddings/:weddingId/planning/bootstrap
POST   /api/weddings/:weddingId/planning/tasks
PATCH  /api/weddings/:weddingId/planning/tasks/:taskId
DELETE /api/weddings/:weddingId/planning/tasks/:taskId
POST   /api/admin/planning/reminders/process
```

## Exit criteria trên máy đích

```bash
npm install
npm run db:generate
npm run db:deploy
npm run db:seed
npm run build
npm run planning:smoke
```

Phase 13 được xác nhận hoàn toàn khi các lệnh trên pass và checklist responsive tại 390 px, 768 px và 1440 px đạt.
