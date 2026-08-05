# Ngày Đôi v0.13.0 — Hướng dẫn nâng cấp và chạy Phase 13

Tài liệu này nâng cấp bản đang hoạt động **v0.12.0 — Shared Guest Album** lên **v0.13.0 — Wedding Planning Timeline & Smart Reminders** mà không xóa dữ liệu hiện tại.

## 1. Trước khi nâng cấp

Dừng API tại Terminal 1:

```text
Ctrl + C
```

Dừng Web tại Terminal 2:

```text
Ctrl + C
```

Giữ nguyên:

- Docker Desktop.
- Container `ngaydoi-postgres`.
- PostgreSQL volume.
- Folder `ngaydoi-local-data`.
- Folder source v0.12.0 để dự phòng.

Không chạy:

```bash
npm run db:clean
npm run db:reset
```

Hai lệnh trên sẽ xóa dữ liệu local.

## 2. Giải nén release mới

```bash
cd ~/Downloads
unzip ngaydoi-v0.13.0-phase13-planning-automation.zip
cd ngaydoi-v0.13.0-phase13-planning-automation
```

Không chép đè source mới lên folder v0.12.0.

## 3. Copy environment từ Phase 12

```bash
cp ../ngaydoi-v0.12.0-phase12-shared-memories/.env .env
cp ../ngaydoi-v0.12.0-phase12-shared-memories/apps/api/.env apps/api/.env
cp ../ngaydoi-v0.12.0-phase12-shared-memories/apps/web/.env.local apps/web/.env.local
```

Kiểm tra:

```bash
ls -la .env apps/api/.env apps/web/.env.local
```

Kiểm tra `DATABASE_URL`:

```bash
grep '^DATABASE_URL=' apps/api/.env
```

Giá trị local chuẩn:

```text
DATABASE_URL=postgresql://ngaydoi:ngaydoi_dev_password@127.0.0.1:5432/ngaydoi
```

### Cấu hình nhắc việc tùy chọn

Phase 13 mặc định kiểm tra nhắc việc mỗi 60 phút. Không cần thêm biến mới để chạy local.

Để thay đổi chu kỳ kiểm tra, thêm vào `apps/api/.env`:

```env
PLANNING_REMINDER_INTERVAL_MS=3600000
```

Giá trị nhỏ hơn 15 phút sẽ tự được nâng lên tối thiểu 15 phút để tránh tạo tải không cần thiết.

## 4. Cài dependencies

```bash
npm install
```

Mỗi folder release có `node_modules` riêng, vì vậy cần chạy lại lệnh này.

## 5. Nâng cấp database đúng thứ tự

Database của dự án từng gặp lỗi thiếu bảng do seed chạy trước migration. Với Phase 13, chạy từng lệnh theo đúng thứ tự dưới đây.

### 5.1. Bật hoặc tái sử dụng PostgreSQL

```bash
npm run db:up
```

Kiểm tra container:

```bash
docker ps --filter name=ngaydoi-postgres
```

### 5.2. Generate Prisma Client

```bash
npm run db:generate
```

Nếu xuất hiện lỗi `Cannot resolve environment variable: DATABASE_URL`, kiểm tra lại `apps/api/.env` trước khi tiếp tục.

### 5.3. Chạy migration

```bash
npm run db:deploy
```

Phase 13 thêm:

```text
PlanningTask
PlanningTaskStatus
PlanningTaskPriority
PlanningTaskCategory
PlanningTaskSource
```

Migration chỉ tạo enum, bảng, index và foreign key mới. Migration không xóa dữ liệu Phase 12.

Có thể kiểm tra trạng thái migration bằng:

```bash
cd apps/api
npx prisma migrate status
cd ../..
```

### 5.4. Chạy seed sau migration

```bash
npm run db:seed
```

Seed Phase 13 sẽ tạo hoặc cập nhật một số công việc demo cho wedding `minh-anh`. Seed không xóa wedding, khách mời, RSVP, bàn tiệc, album hoặc nội dung người dùng đã tạo.

## 6. Build trước khi chạy

```bash
npm run build
```

Chỉ tiếp tục khi cả hai workspace đều build thành công:

```text
@ngaydoi/api
@ngaydoi/web
```

## 7. Chạy ứng dụng

### Terminal 1 — API

```bash
cd ~/Downloads/ngaydoi-v0.13.0-phase13-planning-automation
npm run db:up
npm run dev:api
```

Đợi API compile xong, sau đó kiểm tra:

```text
http://localhost:4000/api/health
http://localhost:4000/api/health/ready
```

### Terminal 2 — Web

```bash
cd ~/Downloads/ngaydoi-v0.13.0-phase13-planning-automation
npm run dev:web
```

Mở:

```text
http://localhost:3000
```

### Terminal 3 — Smoke test Phase 13

Giữ API và PostgreSQL đang chạy:

```bash
cd ~/Downloads/ngaydoi-v0.13.0-phase13-planning-automation
npm run planning:smoke
```

Kết quả mong đợi:

```text
Wedding Planning smoke test passed for minh-anh.
```

## 8. Tài khoản demo

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

## 9. Cách mở Phase 13

1. Đăng nhập bằng `demo@ngaydoi.vn`.
2. Vào Dashboard.
3. Mở wedding **Minh & Anh**.
4. Nhấn **Kế hoạch cưới**.

URL có dạng:

```text
http://localhost:3000/weddings/<WEDDING_ID>/planning
```

Có thể mở từ sidebar tại nhóm **Không gian cưới → Kế hoạch cưới**.

## 10. Checklist kiểm tra thủ công

### 10.1. Timeline thông minh

1. Mở trang **Kế hoạch cưới**.
2. Nếu chưa có timeline, nhấn **Tạo timeline thông minh**.
3. Xác nhận hệ thống tạo tối đa 16 công việc mẫu dựa trên ngày cưới.
4. Nhấn lại lần nữa.
5. Xác nhận không tạo bản ghi trùng.

Nếu wedding chưa có ngày cưới, hệ thống phải yêu cầu cập nhật ngày cưới trước.

### 10.2. Tạo công việc

Tạo công việc với dữ liệu mẫu:

```text
Tên: Chốt danh sách bài hát
Nhóm: Nghi lễ & chương trình
Ưu tiên: Cao
Người phụ trách: Minh
Nhắc trước: 3 ngày
```

Xác nhận:

- Tên dưới 3 ký tự bị chặn.
- Ngày không hợp lệ bị chặn.
- Form hiển thị lỗi dễ hiểu.
- Lưu thành công và công việc xuất hiện ngay.

### 10.3. Chỉnh sửa và trạng thái

1. Mở một công việc.
2. Đổi người phụ trách và hạn hoàn thành.
3. Chuyển `TODO → IN_PROGRESS`.
4. Đánh dấu hoàn thành.
5. Kiểm tra tiến độ tăng.
6. Mở lại công việc.
7. Kiểm tra `completedAt` được xóa và công việc quay lại trạng thái hoạt động.

### 10.4. Bộ lọc

Kiểm tra các bộ lọc:

```text
Tất cả
Quá hạn
Sắp tới
Đã hoàn thành
```

Thử thêm tìm kiếm theo tên và lọc theo nhóm công việc.

### 10.5. Nhắc việc

Để kiểm tra thủ công trên local:

1. Tạo công việc có hạn trong hôm nay.
2. Bật nhắc việc và chọn `0 ngày`.
3. Đăng nhập Admin.
4. Gọi endpoint bằng access token Admin hoặc đợi worker chạy:

```http
POST /api/admin/planning/reminders/process
```

5. Kiểm tra Notification của owner.
6. Kiểm tra Email Outbox tại `/admin/system`.

Mỗi lịch nhắc chỉ được xếp hàng một lần. Khi đổi ngày hoặc cấu hình nhắc, hệ thống cho phép nhắc lại theo lịch mới.

### 10.6. Home animation

Mở:

```text
http://localhost:3000
```

Kiểm tra:

- hero có chuyển động nền nhẹ;
- card hiển thị khi cuộn đến;
- hiệu ứng không làm nhảy layout;
- button vẫn bấm bình thường;
- bật `Reduce motion` trong hệ điều hành thì animation được giảm/tắt;
- trang không có scrollbar ngang.

### 10.7. Sidebar và mobile menu

Kiểm tra tại:

```text
390 px
768 px
1440 px
```

Xác nhận:

- sidebar desktop được chia nhóm rõ ràng;
- menu dài có thể cuộn;
- nút đăng xuất không đè menu;
- mobile có nút hamburger;
- drawer không vượt màn hình;
- backdrop đóng được menu;
- link `Kế hoạch cưới` mở đúng wedding hiện tại;
- input, select, textarea và button không tràn card.

## 11. Chạy toàn bộ regression

Sau khi `planning:smoke` pass, có thể chạy:

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
```

## 12. Những lần chạy sau

Không cần chạy migration hoặc seed mỗi ngày.

### Terminal 1

```bash
cd ~/Downloads/ngaydoi-v0.13.0-phase13-planning-automation
npm run db:up
npm run dev:api
```

### Terminal 2

```bash
cd ~/Downloads/ngaydoi-v0.13.0-phase13-planning-automation
npm run dev:web
```

## 13. Dừng cuối buổi

Dừng API và Web bằng:

```text
Ctrl + C
```

Có thể giữ PostgreSQL chạy.

Muốn dừng PostgreSQL nhưng giữ dữ liệu:

```bash
npm run db:down
```

Lần sau bật lại:

```bash
npm run db:up
```

## 14. Xử lý nhanh một số lỗi thường gặp

### `DATABASE_URL` không tồn tại

```bash
grep '^DATABASE_URL=' apps/api/.env
```

Nếu thiếu, copy lại `apps/api/.env` từ v0.12.0.

### Seed báo bảng `PlanningTask` không tồn tại

Không chạy seed lại ngay. Chạy:

```bash
npm run db:generate
npm run db:deploy
npm run db:seed
```

### Web chạy nhưng API có hàng loạt lỗi `Property ... does not exist on PrismaService`

Prisma Client chưa được generate. Dừng API và chạy:

```bash
npm run db:generate
npm run build
npm run dev:api
```

### Port 3000 hoặc 4000 đang bận

Tìm tiến trình:

```bash
lsof -i :3000
lsof -i :4000
```

Dừng đúng PID:

```bash
kill <PID>
```
