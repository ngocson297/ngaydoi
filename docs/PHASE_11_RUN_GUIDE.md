# Ngày Đôi v0.11.0 — Hướng dẫn nâng cấp và chạy

## 1. Trước khi nâng cấp

Dừng API và Web bằng `Ctrl + C`. Giữ Docker Desktop, container `ngaydoi-postgres`, PostgreSQL volume và folder `ngaydoi-local-data`.

Không chạy `npm run db:clean` hoặc `npm run db:reset`.

## 2. Giải nén và vào source mới

```bash
cd ~/Downloads
unzip ngaydoi-v0.11.0-phase11-event-operations.zip
cd ngaydoi-v0.11.0-phase11-event-operations
```

## 3. Copy environment từ v0.10.0

```bash
cp ../ngaydoi-v0.10.0-phase10-partner-portal/.env .env
cp ../ngaydoi-v0.10.0-phase10-partner-portal/apps/api/.env apps/api/.env
cp ../ngaydoi-v0.10.0-phase10-partner-portal/apps/web/.env.local apps/web/.env.local
```

Kiểm tra database URL:

```bash
grep '^DATABASE_URL=' apps/api/.env
```

Kết quả local chuẩn:

```text
DATABASE_URL=postgresql://ngaydoi:ngaydoi_dev_password@127.0.0.1:5432/ngaydoi
```

## 4. Cài dependencies

Phase 11 thêm thư viện tạo QR, vì vậy bắt buộc chạy:

```bash
npm install
```

## 5. Nâng cấp database

```bash
npm run db:up
npm run db:generate
npm run db:deploy
npm run db:seed
```

Có thể dùng lệnh gộp:

```bash
npm run db:setup
```

Migration chỉ thêm bảng Phase 11, không xóa dữ liệu cũ:

- `SeatingTable`
- `SeatAssignment`
- `CheckinStation`
- `CheckinRecord`

## 6. Build

```bash
npm run build
```

Chỉ chạy ứng dụng khi API và Web đều build thành công.

## 7. Chạy ứng dụng

### Terminal 1 — API

```bash
cd ~/Downloads/ngaydoi-v0.11.0-phase11-event-operations
npm run db:up
npm run dev:api
```

Kiểm tra `http://localhost:4000/api/health`.

### Terminal 2 — Web

```bash
cd ~/Downloads/ngaydoi-v0.11.0-phase11-event-operations
npm run dev:web
```

Mở `http://localhost:3000`.

### Terminal 3 — Smoke test

```bash
cd ~/Downloads/ngaydoi-v0.11.0-phase11-event-operations
npm run event-ops:smoke
```

Kết quả mong đợi:

```text
Event Operations smoke test passed for minh-anh.
```

## 8. Tài khoản demo

```text
Customer: demo@ngaydoi.vn / Demo@12345
Admin: admin@ngaydoi.vn / Demo@12345
Partner: partner@ngaydoi.vn / Demo@12345
Collaborator: family@ngaydoi.vn / Demo@12345
```

## 9. Kiểm tra Phase 11

1. Đăng nhập Customer.
2. Mở wedding `Minh & Anh`.
3. Nhấn **Phân bàn & check-in**.
4. Chọn sự kiện **Tiệc cưới**.
5. Tạo, sửa và xóa bàn trống.
6. Phân khách thủ công hoặc dùng **Tự động phân bàn**.
7. Tạo một trạm check-in.
8. Mở link trạm trong tab mới.
9. Tìm khách theo tên và check-in.
10. Mở tab **Thẻ QR**, in hoặc quét mã vào trạm.
11. Kiểm tra số người đã đến được cập nhật.
12. Thử **Hoàn tác** một lượt check-in.
13. Xuất CSV và kiểm tra tên khách, bàn, RSVP, check-in.

## 10. Camera và QR

- Camera QR dùng `BarcodeDetector` khi trình duyệt hỗ trợ.
- Nếu không hỗ trợ, giao diện vẫn cho dùng máy quét QR dạng bàn phím, dán mã hoặc tìm khách theo tên/điện thoại/email.
- QR chứa token ngẫu nhiên `NDG:...`, không chứa tên, điện thoại hoặc email.

## 11. Những lần chạy sau

Terminal 1:

```bash
cd ~/Downloads/ngaydoi-v0.11.0-phase11-event-operations
npm run db:up
npm run dev:api
```

Terminal 2:

```bash
cd ~/Downloads/ngaydoi-v0.11.0-phase11-event-operations
npm run dev:web
```

Không cần chạy lại migration hằng ngày.

## 12. Dừng cuối buổi

Dừng API và Web bằng `Ctrl + C`.

Có thể giữ PostgreSQL chạy. Muốn dừng nhưng vẫn giữ dữ liệu:

```bash
npm run db:down
```
