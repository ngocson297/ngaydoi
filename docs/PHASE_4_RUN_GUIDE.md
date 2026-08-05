# NGÀY ĐÔI v0.4.0 — HƯỚNG DẪN NÂNG CẤP VÀ CHẠY PHASE 4

> Dành cho macOS, nâng cấp từ `v0.3.0-phase3-wedding-core` đang chạy được. Phase này dùng migration tăng dần và giữ dữ liệu Phase 3.

## 1. Trước khi bắt đầu

Đảm bảo:

- Docker Desktop đang mở.
- Phase 3 đã chạy được.
- Bạn đang biết folder Phase 3 trên máy.
- Không có lệnh `db:clean` nào được chạy trong quá trình nâng cấp.

## 2. Dừng những gì?

### Dừng API

Trong terminal đang chạy:

```bash
npm run dev:api
```

nhấn:

```text
Ctrl + C
```

### Dừng Web

Trong terminal đang chạy:

```bash
npm run dev:web
```

nhấn:

```text
Ctrl + C
```

### PostgreSQL

Có thể **giữ nguyên PostgreSQL đang chạy**. Không cần xóa container và không xóa volume.

Không chạy:

```bash
npm run db:clean
```

## 3. Giải nén source Phase 4

```bash
cd ~/Downloads
unzip ngaydoi-v0.4.0-phase4-invitation-builder.zip
cd ngaydoi-v0.4.0-phase4-invitation-builder
```

Không chép đè source Phase 4 trực tiếp vào folder Phase 3.

## 4. Sao chép environment từ Phase 3

Giả sử folder cũ là:

```text
~/Downloads/ngaydoi-v0.3.0-phase3-wedding-core
```

Chạy:

```bash
cp ../ngaydoi-v0.3.0-phase3-wedding-core/.env .env
cp ../ngaydoi-v0.3.0-phase3-wedding-core/apps/api/.env apps/api/.env
cp ../ngaydoi-v0.3.0-phase3-wedding-core/apps/web/.env.local apps/web/.env.local
```

Bổ sung nơi lưu ảnh local:

```bash
grep -q '^UPLOAD_DIR=' apps/api/.env || echo 'UPLOAD_DIR=../../../ngaydoi-local-data/uploads' >> apps/api/.env
```

Kiểm tra:

```bash
grep -E '^(DATABASE_URL|UPLOAD_DIR)=' apps/api/.env
```

Kết quả cần có dạng:

```text
DATABASE_URL=postgresql://ngaydoi:ngaydoi_dev_password@127.0.0.1:5432/ngaydoi
UPLOAD_DIR=../../../ngaydoi-local-data/uploads
```

Nếu folder Phase 3 của bạn có tên khác, thay đúng tên trong ba lệnh `cp`.

Nếu không còn environment cũ:

```bash
cp .env.example .env
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env.local
```

## 5. Cài dependencies

Phase 4 thêm package upload media nên bắt buộc chạy:

```bash
npm install
```

## 6. Nâng cấp database

Chạy:

```bash
npm run db:setup
```

Lệnh này thực hiện:

1. Tái sử dụng hoặc khởi động `ngaydoi-postgres`.
2. Generate Prisma Client v0.4.0.
3. Apply migration Invitation Builder.
4. Seed/update dữ liệu demo.

Không xóa dữ liệu Phase 3.

Kiểm tra container:

```bash
docker ps --filter name=ngaydoi-postgres
```

## 7. Kiểm tra build

```bash
npm run build
```

Chỉ chạy ứng dụng sau khi cả API và Web build thành công.

## 8. Chạy ứng dụng

### Terminal 1 — API

```bash
cd ~/Downloads/ngaydoi-v0.4.0-phase4-invitation-builder
npm run dev:api
```

Kiểm tra:

```text
http://localhost:4000/api/health
```

### Terminal 2 — Web

```bash
cd ~/Downloads/ngaydoi-v0.4.0-phase4-invitation-builder
npm run dev:web
```

Mở:

```text
http://localhost:3000
```

### Terminal 3 — Automated checks

Giữ PostgreSQL và API đang chạy:

```bash
cd ~/Downloads/ngaydoi-v0.4.0-phase4-invitation-builder
npm run security:test
npm run auth:smoke
npm run wedding:smoke
npm run invitation:smoke
```

Kết quả cuối mong đợi:

```text
Invitation Builder smoke test passed for minh-anh (...).
```

## 9. Tài khoản demo

### Owner

```text
Email: demo@ngaydoi.vn
Password: Demo@12345
```

### Collaborator

```text
Email: family@ngaydoi.vn
Password: Demo@12345
```

## 10. Cách mở Invitation Studio

1. Mở `http://localhost:3000/login`.
2. Đăng nhập bằng owner demo.
3. Vào Dashboard.
4. Chọn wedding **Minh & Anh**.
5. Chọn **Thiết kế thiệp**.

URL có dạng:

```text
http://localhost:3000/weddings/<WEDDING_ID>/invitation
```

## 11. URL cần kiểm tra

```text
Landing + template catalog:
http://localhost:3000

Login:
http://localhost:3000/login

Dashboard:
http://localhost:3000/dashboard

Public invitation demo:
http://localhost:3000/i/minh-anh

API health:
http://localhost:4000/api/health

Template API:
http://localhost:4000/api/templates
```

## 12. Checklist test thủ công Phase 4

### Template và autosave

- Mở Invitation Studio.
- Chọn lần lượt 5 mẫu.
- Xác nhận preview đổi màu và font.
- Chờ trạng thái chuyển từ “Đang lưu” sang “Đã lưu”.
- Refresh trang và xác nhận mẫu vẫn được giữ.

### Nội dung và section

- Sửa lời mời và tiêu đề album.
- Bật/tắt Family, Story, Gallery, Countdown, Events.
- Đổi thứ tự section.
- Refresh và xác nhận dữ liệu vẫn đúng.

### Hình ảnh

- Upload một JPEG hoặc PNG.
- Xác nhận ảnh được hiển thị trong editor và public preview.
- Upload thêm ảnh.
- Đặt ảnh khác làm cover.
- Đổi thứ tự album.
- Xóa một ảnh.

### Preview bảo mật

- Tạo link preview.
- Mở link trong tab mới.
- Xác nhận có banner “Bản xem trước bảo mật”.
- Tạo link preview mới và xác nhận link cũ hết hiệu lực.

### Version

- Lưu một phiên bản.
- Thay template hoặc nội dung.
- Khôi phục phiên bản cũ.
- Xác nhận thiết kế quay về đúng snapshot.

### Responsive

- Kiểm tra landing ở kích thước mobile.
- Kiểm tra Invitation Studio ở mobile.
- Kiểm tra public invitation ở mobile.
- Xác nhận không có nội dung tràn ngang bất thường.

## 13. Lưu ý vị trí ảnh

Với source nằm trong `~/Downloads`, ảnh được lưu tại:

```text
~/Downloads/ngaydoi-local-data/uploads
```

Folder này nằm ngoài source version. Vì vậy:

- Không cần copy ảnh khi chuyển từ v0.4.0 sang phase sau.
- Không xóa `ngaydoi-local-data` nếu còn cần ảnh.
- `npm run db:clean` không tự xóa folder ảnh.

## 14. Chạy project vào những lần sau

### Terminal 1

```bash
cd ~/Downloads/ngaydoi-v0.4.0-phase4-invitation-builder
npm run db:up
npm run dev:api
```

### Terminal 2

```bash
cd ~/Downloads/ngaydoi-v0.4.0-phase4-invitation-builder
npm run dev:web
```

Không cần chạy `db:setup` mỗi lần mở project.

## 15. Dừng project cuối buổi

### Dừng API

Tại terminal API:

```text
Ctrl + C
```

### Dừng Web

Tại terminal Web:

```text
Ctrl + C
```

### PostgreSQL

Có thể giữ PostgreSQL chạy.

Muốn dừng container nhưng vẫn giữ dữ liệu:

```bash
npm run db:down
```

Lần sau khởi động:

```bash
npm run db:up
```

## 16. Khi gặp lỗi thường gặp

### Container đã tồn tại

Bản này dùng script tái sử dụng `ngaydoi-postgres`. Không tự xóa container. Kiểm tra:

```bash
docker ps -a --filter name=ngaydoi-postgres
```

Sau đó:

```bash
npm run db:up
```

### Prisma Client chưa generate

```bash
npm run db:generate
npm run build
```

### Migration chưa chạy

```bash
npm run db:deploy
npm run db:seed
```

### Upload báo lỗi folder

```bash
mkdir -p ../ngaydoi-local-data/uploads
```

Sau đó restart API.

### Port 3000 hoặc 4000 đang bị chiếm

Kiểm tra:

```bash
lsof -nP -iTCP:3000 -sTCP:LISTEN
lsof -nP -iTCP:4000 -sTCP:LISTEN
```

Dừng process cũ bằng `Ctrl + C` tại terminal tương ứng.

## 17. Điều kiện xác nhận Phase 4 worked

Phase 4 được xem là chạy thành công khi:

```bash
npm run build
npm run invitation:smoke
```

đều pass, đồng thời bạn có thể:

- Mở Invitation Studio.
- Chọn template.
- Sửa nội dung và thấy autosave.
- Upload ảnh.
- Mở secure preview.
- Lưu/khôi phục version.
- Mở public invitation `minh-anh`.
