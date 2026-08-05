# NGÀY ĐÔI v0.3.0 — HƯỚNG DẪN NÂNG CẤP VÀ CHẠY PHASE 3

> Release Phase 3 — Wedding Core. Tài liệu dành cho macOS và source Phase 2 `v0.2.2` đang chạy được.

## 1. Phase này thêm gì?

- Danh sách wedding workspace theo tài khoản.
- Wizard tạo wedding mới.
- Kiểm tra slug realtime.
- Hồ sơ cô dâu, chú rể và cha mẹ hai bên.
- CRUD sự kiện nhà trai, nhà gái và sự kiện chung.
- Draft lifecycle: Draft → Ready for review → Published → Suspended/Expired/Archived.
- Điều kiện publish: có ngày cưới chính và tối thiểu một sự kiện.
- Mời cộng tác viên theo email với quyền `VIEW` hoặc `EDIT`.
- Chấp nhận và thu hồi lời mời.
- Ownership isolation giữa các tài khoản.
- Nhân bản wedding để thử nghiệm.
- Public invitation lấy dữ liệu thật từ API.
- Wedding Core smoke test.

## 2. Trước khi nâng cấp: dừng gì?

### Dừng API

Tại terminal đang chạy `npm run dev:api`, nhấn:

```text
Ctrl + C
```

### Dừng Web

Tại terminal đang chạy `npm run dev:web`, nhấn:

```text
Ctrl + C
```

### Không dừng hoặc xóa PostgreSQL

Giữ container sau đang chạy:

```text
ngaydoi-postgres
```

Không chạy:

```bash
npm run db:clean
```

`db:clean` dùng để xóa toàn bộ database local và chỉ được dùng khi bạn chủ động muốn reset sạch.

## 3. Giải nén bản mới

```bash
cd ~/Downloads
unzip ngaydoi-v0.3.0-phase3-wedding-core.zip
cd ngaydoi-v0.3.0-phase3-wedding-core
```

Không chép đè trực tiếp source mới lên folder cũ.

## 4. Sao chép environment từ Phase 2

Giả sử folder cũ là:

```text
~/Downloads/ngaydoi-v0.2.2-phase2-compile-fix
```

Chạy:

```bash
cp ../ngaydoi-v0.2.2-phase2-compile-fix/.env .env
cp ../ngaydoi-v0.2.2-phase2-compile-fix/apps/api/.env apps/api/.env
cp ../ngaydoi-v0.2.2-phase2-compile-fix/apps/web/.env.local apps/web/.env.local
```

Nếu folder cũ của bạn có tên khác, thay phần tên folder trong ba lệnh trên.

Nếu chưa có file environment, tạo từ example:

```bash
cp .env.example .env
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env.local
```

## 5. Cài dependency

```bash
npm install
```

## 6. Nâng cấp database

Chạy một lệnh:

```bash
npm run db:setup
```

Lệnh trên thực hiện tuần tự:

1. Tái sử dụng và khởi động `ngaydoi-postgres` nếu container đã tồn tại.
2. Generate Prisma Client.
3. Apply migration Phase 3.
4. Seed lại dữ liệu demo.

`db:setup` không gọi `db:clean`, nên các tài khoản/wedding do bạn tự tạo được giữ lại.

Kết quả seed demo:

```text
Owner:
  Email: demo@ngaydoi.vn
  Password: Demo@12345

Collaborator:
  Email: family@ngaydoi.vn
  Password: Demo@12345
```

## 7. Kiểm tra build trước khi chạy

```bash
npm run build
```

Chỉ đi tiếp khi API và Web đều build thành công.

## 8. Chạy ứng dụng

### Terminal 1 — API

```bash
cd ~/Downloads/ngaydoi-v0.3.0-phase3-wedding-core
npm run dev:api
```

API:

```text
http://localhost:4000/api
```

Health check:

```text
http://localhost:4000/api/health
```

### Terminal 2 — Web

```bash
cd ~/Downloads/ngaydoi-v0.3.0-phase3-wedding-core
npm run dev:web
```

Web:

```text
http://localhost:3000
```

### Terminal 3 — Automated tests

Giữ API và PostgreSQL đang chạy:

```bash
cd ~/Downloads/ngaydoi-v0.3.0-phase3-wedding-core
npm run security:test
npm run auth:smoke
npm run wedding:smoke
```

Kết quả cuối mong đợi:

```text
Wedding Core smoke test passed for smoke-wedding-...
```

## 9. URL cần kiểm tra

| Màn hình | URL |
|---|---|
| Landing | `http://localhost:3000` |
| Đăng nhập | `http://localhost:3000/login` |
| Dashboard wedding | `http://localhost:3000/dashboard` |
| Tạo wedding | `http://localhost:3000/weddings/new` |
| Wedding workspace | Mở từ card trên dashboard |
| Thiệp demo public | `http://localhost:3000/i/minh-anh` |
| Tài khoản | `http://localhost:3000/account` |
| API health | `http://localhost:4000/api/health` |

## 10. Checklist test thủ công Phase 3

1. Đăng nhập `demo@ngaydoi.vn`.
2. Dashboard hiển thị wedding `Minh & Anh`.
3. Tạo wedding mới bằng wizard.
4. Thử slug đã tồn tại `minh-anh`; hệ thống phải báo không khả dụng.
5. Thêm ngày cưới và thông tin cha mẹ hai bên.
6. Thêm sự kiện nhà trai, nhà gái và sự kiện chung.
7. Sửa và xóa một sự kiện.
8. Chuyển `DRAFT → READY_FOR_REVIEW → PUBLISHED`.
9. Mở public invitation theo slug.
10. Tạo lời mời cộng tác và sao chép link.
11. Đăng nhập tài khoản đúng email được mời rồi chấp nhận link.
12. Xác minh cộng tác viên `EDIT` chỉnh được thông tin/sự kiện nhưng không đổi lifecycle.
13. Xác minh cộng tác viên `VIEW` không chỉnh được dữ liệu.
14. Thu hồi cộng tác viên; tài khoản đó không còn thấy wedding.
15. Nhân bản wedding; bản sao phải là `DRAFT`, có sự kiện nhưng không có khách mời.

## 11. Dừng ứng dụng sau khi làm việc

### Dừng API và Web

Nhấn `Ctrl + C` trong hai terminal tương ứng.

### PostgreSQL

Có thể giữ PostgreSQL chạy để lần sau mở nhanh hơn.

Muốn dừng PostgreSQL nhưng giữ dữ liệu:

```bash
npm run db:down
```

Lần sau khởi động lại:

```bash
npm run db:up
```

Sau đó chạy lại API và Web. Không cần chạy migration mỗi lần.

## 12. Cách chạy lại vào ngày hôm sau

Terminal 1:

```bash
cd ~/Downloads/ngaydoi-v0.3.0-phase3-wedding-core
npm run db:up
npm run dev:api
```

Terminal 2:

```bash
cd ~/Downloads/ngaydoi-v0.3.0-phase3-wedding-core
npm run dev:web
```

## 13. Xử lý lỗi thường gặp

### Port 3000 đang bận

```bash
lsof -nP -iTCP:3000 -sTCP:LISTEN
kill <PID>
```

### Port 4000 đang bận

```bash
lsof -nP -iTCP:4000 -sTCP:LISTEN
kill <PID>
```

### PostgreSQL chưa sẵn sàng

```bash
npm run db:up
npm run db:wait
docker logs ngaydoi-postgres --tail=100
```

### Migration chưa được apply

```bash
npm run db:generate
npm run db:deploy
npm run db:seed
```

### Prisma Client bị thiếu

```bash
npm run db:generate
npm run build
```

## 14. Quy tắc chuyển sang phase tiếp theo

Trước mỗi phase tiếp theo:

1. Dừng API và Web bằng `Ctrl + C`.
2. Không xóa PostgreSQL volume.
3. Giải nén source mới vào folder mới.
4. Sao chép ba file environment.
5. Chạy `npm install`.
6. Chạy `npm run db:setup` để apply migration tăng dần.
7. Chạy `npm run build`.
8. Chạy API và Web ở hai terminal riêng.
9. Chạy smoke test của phase.
10. Chỉ xác nhận phase hoàn tất khi manual checklist và smoke test đều pass.
