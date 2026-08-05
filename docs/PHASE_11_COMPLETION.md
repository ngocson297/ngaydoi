# Phase 11 Completion — Seating, QR Check-in & Event Operations

## Trạng thái

Hoàn tất phạm vi code của Release v0.11.0.

## Deliverables

- Quản lý bàn theo wedding hoặc event.
- Sức chứa, khu vực, kiểu bàn và ghi chú.
- Phân bàn thủ công.
- Tự động phân bàn theo RSVP và sức chứa.
- Trạm check-in bằng token riêng.
- QR check-in dựa trên invitation token.
- Camera QR khi trình duyệt hỗ trợ.
- Tìm khách thủ công và phương án dự phòng.
- Check-in, checkout/undo và lịch sử gần nhất.
- Attendance metrics và CSV export.
- Print layout cho thẻ QR.
- Global font/form accessibility uplift.
- Sidebar and responsive overflow hardening.

## Exit criteria

- Migration tăng dần, không có lệnh phá dữ liệu.
- API module đã đăng ký trong `AppModule`.
- Route workspace và station đã được tạo.
- Smoke test Phase 11 đã được thêm.
- Source không chứa `.env`, secret, `node_modules`, `.next` hoặc `dist`.
