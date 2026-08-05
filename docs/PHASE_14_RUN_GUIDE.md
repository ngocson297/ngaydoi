# Ngày Đôi v0.14.0 — Hướng dẫn nâng cấp và chạy Phase 14

Tài liệu này nâng cấp bản đang hoạt động **v0.13.1 — Planning Date Format Hotfix** lên **v0.14.0 — Template Library, Theme Marketplace & Final Product Polish** mà không xóa dữ liệu hiện tại.

## 1. Trước khi nâng cấp

Dừng API và Web bằng `Ctrl + C` tại hai terminal đang chạy.

Giữ nguyên:

- Docker Desktop.
- Container `ngaydoi-postgres`.
- PostgreSQL volume.
- Folder `ngaydoi-local-data`.
- Source v0.13.1 để dự phòng.

Không chạy:

```bash
npm run db:clean
npm run db:reset
```

## 2. Giải nén source

```bash
cd ~/Downloads
unzip ngaydoi-v0.14.0-phase14-template-library.zip
cd ngaydoi-v0.14.0-phase14-template-library
```

Không chép đè vào folder v0.13.1.

## 3. Copy environment

```bash
cp ../ngaydoi-v0.13.1-phase13-date-format-hotfix/.env .env

cp ../ngaydoi-v0.13.1-phase13-date-format-hotfix/apps/api/.env \
   apps/api/.env

cp ../ngaydoi-v0.13.1-phase13-date-format-hotfix/apps/web/.env.local \
   apps/web/.env.local
```

Kiểm tra:

```bash
ls -la .env apps/api/.env apps/web/.env.local
grep '^DATABASE_URL=' apps/api/.env
```

`DATABASE_URL` local chuẩn:

```text
DATABASE_URL=postgresql://ngaydoi:ngaydoi_dev_password@127.0.0.1:5432/ngaydoi
```

Phase 14 không có biến môi trường mới bắt buộc.

## 4. Cài dependencies

```bash
npm install
```

## 5. Cập nhật database và quyền template

Phase 14 không có schema migration mới, nhưng vẫn nên chạy theo quy trình chuẩn:

```bash
npm run db:up
npm run db:generate
npm run db:deploy
npm run db:seed
```

Ý nghĩa:

- `db:generate`: tạo Prisma Client cho folder source mới.
- `db:deploy`: xác nhận toàn bộ migration Phase 1–13 đã được áp dụng.
- `db:seed`: cập nhật quyền template của các gói lên 3/8/16/24 mẫu.

`db:seed` dùng upsert và không xóa wedding, guest, RSVP, album, bàn tiệc hoặc công việc người dùng đã tạo.

Nếu `db:seed` báo thiếu bảng, chạy lại đúng thứ tự:

```bash
npm run db:deploy
npm run db:seed
```

## 6. Build

```bash
npm run build
```

Chỉ tiếp tục khi cả hai workspace đều pass:

```text
@ngaydoi/api
@ngaydoi/web
```

## 7. Chạy ứng dụng

### Terminal 1 — API

```bash
cd ~/Downloads/ngaydoi-v0.14.0-phase14-template-library
npm run db:up
npm run dev:api
```

Kiểm tra:

```text
http://localhost:4000/api/health
http://localhost:4000/api/health/ready
http://localhost:4000/api/templates
```

`/api/templates` phải trả 24 phần tử.

### Terminal 2 — Web

```bash
cd ~/Downloads/ngaydoi-v0.14.0-phase14-template-library
npm run dev:web
```

Mở:

```text
http://localhost:3000
http://localhost:3000/templates
```

### Terminal 3 — Smoke test

Giữ API và PostgreSQL đang chạy:

```bash
cd ~/Downloads/ngaydoi-v0.14.0-phase14-template-library
npm run template:smoke
```

Kết quả mong đợi:

```text
Template Library smoke test passed: 24 templates, 16 unlocked for Standard, locked-template guard active.
```

Chạy regression liên quan:

```bash
npm run invitation:smoke
npm run planning:smoke
```

Có thể chạy toàn bộ:

```bash
npm run security:test
npm run auth:smoke
npm run wedding:smoke
npm run invitation:smoke
npm run guest:smoke
npm run commercial:smoke
npm run operations:smoke
npm run pilot:smoke
npm run growth:smoke
npm run partner:smoke
npm run event-ops:smoke
npm run memories:smoke
npm run planning:smoke
npm run template:smoke
```

## 8. Tài khoản kiểm tra

```text
Customer
Email: demo@ngaydoi.vn
Password: Demo@12345

Admin
Email: admin@ngaydoi.vn
Password: Demo@12345

Partner
Email: partner@ngaydoi.vn
Password: Demo@12345

Collaborator
Email: family@ngaydoi.vn
Password: Demo@12345
```

## 9. Kiểm tra thư viện template công khai

Mở:

```text
http://localhost:3000/templates
```

Kiểm tra:

1. Hiển thị 24 template.
2. Tìm `hoa sen` phải thấy **Sen Việt thanh nhã**.
3. Tìm `tiệc tối` phải thấy các mẫu phù hợp.
4. Lọc **Phong cách Việt**.
5. Lọc theo gói **Tiêu chuẩn**.
6. Bật **Mẫu mới**.
7. Thêm một mẫu vào Yêu thích.
8. Refresh trang và xác nhận mẫu vẫn được yêu thích.
9. Kiểm tra grid tại 390px, 768px và 1440px.

## 10. Kiểm tra Invitation Studio

1. Đăng nhập `demo@ngaydoi.vn`.
2. Mở wedding **Minh & Anh**.
3. Chọn **Thiệp cưới**.
4. Mở tab **Mẫu thiệp**.
5. Xác nhận hiển thị `16/24 mẫu được mở` cho gói Tiêu chuẩn.
6. Tìm `sen`.
7. Áp dụng **Sen Việt thanh nhã**.
8. Xác nhận preview đổi màu/font/motif.
9. Chọn tab **Yêu thích**.
10. Thử click một template Cao cấp đang khóa.
11. Xác nhận template không được áp dụng và UI dẫn tới trang nâng cấp.

## 11. Kiểm tra API entitlement

Smoke test đã tự động kiểm tra, nhưng có thể xác nhận thủ công bằng DevTools Network:

- Đổi sang template đã mở: API trả 200.
- Gọi PATCH với `templateKey: "celestial-night"` khi wedding đang dùng gói Tiêu chuẩn: API trả 400.

## 12. Kiểm tra Home animation

Mở:

```text
http://localhost:3000
```

Kiểm tra:

- Hero có chuyển động parallax nhẹ khi di chuột.
- Phone mockup và decorative orb không làm nhảy layout.
- Showcase hiển thị 8 mẫu nổi bật.
- Dòng marquee chạy tên template.
- Link **Kho mẫu thiệp** mở `/templates`.
- Card reveal khi cuộn.
- Không có scrollbar ngang ở 390px.
- Khi bật Reduce Motion, marquee/parallax/animation được giảm hoặc tắt.

## 13. Kiểm tra sidebar và form

- Sidebar có mục **Kho mẫu thiệp — 24 mẫu**.
- Mobile drawer có Kho mẫu thiệp.
- Input tìm kiếm cao, dễ bấm.
- Select không cắt chữ.
- Filter pill cuộn ngang trên mobile.
- Favorite button có vùng bấm đủ lớn.
- Template title/tag dài không làm vỡ card.

## 14. Những lần chạy sau

Không cần chạy seed mỗi ngày.

### Terminal 1

```bash
cd ~/Downloads/ngaydoi-v0.14.0-phase14-template-library
npm run db:up
npm run dev:api
```

### Terminal 2

```bash
cd ~/Downloads/ngaydoi-v0.14.0-phase14-template-library
npm run dev:web
```

## 15. Dừng cuối buổi

Dừng API và Web bằng `Ctrl + C`.

Có thể giữ PostgreSQL chạy. Muốn dừng PostgreSQL nhưng giữ dữ liệu:

```bash
npm run db:down
```

Lần sau bật lại:

```bash
npm run db:up
```
