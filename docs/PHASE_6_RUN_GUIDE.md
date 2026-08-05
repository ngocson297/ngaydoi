# NGÀY ĐÔI v0.6.0 — HƯỚNG DẪN NÂNG CẤP VÀ CHẠY

Tài liệu dành cho người đang chạy thành công:

```text
ngaydoi-v0.5.1-phase5-ts4053-hotfix
```

Bản mới:

```text
ngaydoi-v0.6.0-phase6-commercial-foundation
```

## A. Trước khi nâng cấp

### Phải dừng

Dừng API và Web cũ bằng `Ctrl + C` tại hai terminal tương ứng.

### Giữ nguyên

- Container PostgreSQL `ngaydoi-postgres`.
- Docker volume PostgreSQL.
- Folder `~/Downloads/ngaydoi-local-data/uploads`.
- Folder source v0.5.1 để dự phòng.

### Tuyệt đối không chạy

```bash
npm run db:clean
```

Lệnh này xóa PostgreSQL volume local.

---

## B. Giải nén source mới

```bash
cd ~/Downloads
unzip ngaydoi-v0.6.0-phase6-commercial-foundation.zip
cd ngaydoi-v0.6.0-phase6-commercial-foundation
```

Không chép đè source mới vào folder v0.5.1.

---

## C. Copy environment từ Phase 5

```bash
export PREVIOUS_DIR="$HOME/Downloads/ngaydoi-v0.5.1-phase5-ts4053-hotfix"
export NEW_DIR="$HOME/Downloads/ngaydoi-v0.6.0-phase6-commercial-foundation"

cp "$PREVIOUS_DIR/.env" "$NEW_DIR/.env"
cp "$PREVIOUS_DIR/apps/api/.env" "$NEW_DIR/apps/api/.env"
cp "$PREVIOUS_DIR/apps/web/.env.local" "$NEW_DIR/apps/web/.env.local"
```

Kiểm tra file tồn tại:

```bash
ls -la "$NEW_DIR/.env" "$NEW_DIR/apps/api/.env" "$NEW_DIR/apps/web/.env.local"
```

---

## D. Bổ sung cấu hình Commercial local

Chạy một lần:

```bash
grep -q '^PAYMENT_SANDBOX_ENABLED=' "$NEW_DIR/apps/api/.env" || echo 'PAYMENT_SANDBOX_ENABLED=true' >> "$NEW_DIR/apps/api/.env"
grep -q '^BANK_NAME=' "$NEW_DIR/apps/api/.env" || echo 'BANK_NAME=Ngân hàng Demo' >> "$NEW_DIR/apps/api/.env"
grep -q '^BANK_ACCOUNT_NAME=' "$NEW_DIR/apps/api/.env" || echo 'BANK_ACCOUNT_NAME=NGAY DOI DEMO' >> "$NEW_DIR/apps/api/.env"
grep -q '^BANK_ACCOUNT_NUMBER=' "$NEW_DIR/apps/api/.env" || echo 'BANK_ACCOUNT_NUMBER=0123456789' >> "$NEW_DIR/apps/api/.env"
```

Kiểm tra:

```bash
grep -E '^(DATABASE_URL|UPLOAD_DIR|PAYMENT_SANDBOX_ENABLED|BANK_NAME|BANK_ACCOUNT_NAME|BANK_ACCOUNT_NUMBER)=' "$NEW_DIR/apps/api/.env"
```

Dữ liệu ngân hàng trên chỉ dùng local/demo. Không nhập thông tin thật vào source hoặc commit lên Git.

---

## E. Cài dependencies

```bash
cd "$NEW_DIR"
npm install
```

Mỗi folder version có `node_modules` riêng nên phải chạy lại `npm install`.

---

## F. Nâng cấp database

```bash
npm run db:setup
```

Lệnh này lần lượt:

1. Khởi động/tái sử dụng `ngaydoi-postgres`.
2. Generate Prisma Client v0.6.0.
3. Chạy migration Commercial Foundation.
4. Seed/update plan, add-on, coupon và tài khoản Admin demo.

Migration không xóa dữ liệu Phase 5.

Không chạy `db:clean`.

---

## G. Build trước khi run

```bash
npm run build
```

Chỉ tiếp tục khi API và Web build thành công.

---

## H. Chạy ứng dụng

### Terminal 1 — API

```bash
cd ~/Downloads/ngaydoi-v0.6.0-phase6-commercial-foundation
npm run dev:api
```

Kiểm tra:

```text
http://localhost:4000/api/health
```

### Terminal 2 — Web

```bash
cd ~/Downloads/ngaydoi-v0.6.0-phase6-commercial-foundation
npm run dev:web
```

Mở:

```text
http://localhost:3000
```

### Terminal 3 — Smoke tests

Giữ PostgreSQL và API đang chạy:

```bash
cd ~/Downloads/ngaydoi-v0.6.0-phase6-commercial-foundation

npm run security:test
npm run auth:smoke
npm run wedding:smoke
npm run invitation:smoke
npm run guest:smoke
npm run commercial:smoke
```

Kết quả cuối mong đợi:

```text
Commercial MVP smoke test passed for ND-...
```

Lưu ý: `commercial:smoke` tạo order test và kích hoạt PREMIUM cho wedding demo. Đây là hành vi test có chủ đích.

---

## I. Tài khoản demo

### Customer/Owner

```text
Email: demo@ngaydoi.vn
Password: Demo@12345
```

### Collaborator

```text
Email: family@ngaydoi.vn
Password: Demo@12345
```

### Admin

```text
Email: admin@ngaydoi.vn
Password: Demo@12345
```

---

## J. Kiểm tra thủ công luồng mua gói

### 1. Customer tạo đơn

1. Mở `http://localhost:3000/login`.
2. Đăng nhập `demo@ngaydoi.vn`.
3. Mở `http://localhost:3000/pricing`.
4. Chọn wedding `Minh & Anh`.
5. Chọn gói PREMIUM.
6. Chọn add-on `+100 khách mời`.
7. Giữ coupon `WELCOME10`.
8. Nhấn **Xem giá cuối cùng**.
9. Kiểm tra discount và total.
10. Nhấn **Tạo đơn hàng**.

### 2A. Test sandbox nhanh

Trong trang order, nhấn:

```text
Thanh toán sandbox
```

Kiểm tra:

- Timeline hoàn tất.
- Hiện biên nhận.
- Wedding chuyển sang PREMIUM.
- Invitation Studio mở đủ template.
- Guest limit tăng.

### 2B. Test manual payment và Admin

Không nhấn sandbox.

1. Nhập mã giao dịch test, ví dụ `FT-DEMO-001`.
2. Nhấn **Tôi đã chuyển khoản**.
3. Mở cửa sổ Incognito/Private.
4. Đăng nhập `admin@ngaydoi.vn`.
5. Mở `http://localhost:3000/admin`.
6. Chọn order trong hàng đợi.
7. Kiểm tra reference.
8. Nhập ghi chú.
9. Nhấn **Xác nhận thanh toán**.
10. Quay lại tài khoản customer và refresh order.

### 3. Test từ chối payment

1. Tạo một order khác hoặc gửi reference mới.
2. Admin chọn **Yêu cầu bổ sung**.
3. Customer mở order.
4. Kiểm tra trạng thái và customer note.
5. Customer gửi lại reference.

### 4. Test publish review

1. Customer mở Wedding Workspace.
2. Đảm bảo wedding có ngày chính và ít nhất một event.
3. Nhấn gửi yêu cầu publish.
4. Admin mở tab Wedding.
5. Nhấn **Duyệt** hoặc **Yêu cầu sửa**.
6. Kiểm tra dialog, validation ghi chú và trạng thái sau xử lý.

### 5. Test entitlement

- FREE/STARTER không mở được template ngoài gói.
- Upload ảnh vượt giới hạn bị chặn.
- Thêm/import/restore khách vượt giới hạn bị chặn.
- Mua add-on rồi kiểm tra giới hạn tăng.

### 6. Test refund

Chỉ làm trên dữ liệu demo:

1. Admin mở order đã CONFIRMED.
2. Nhập lý do.
3. Chọn **Hoàn tiền & thu hồi**.
4. Xác nhận order chuyển REFUNDED.
5. Kiểm tra wedding dùng order hợp lệ gần nhất; nếu không còn thì về FREE.
6. Nếu wedding published và không còn paid plan thì wedding chuyển SUSPENDED.

---

## K. URL quan trọng

```text
Landing:             http://localhost:3000
Login:               http://localhost:3000/login
Dashboard:           http://localhost:3000/dashboard
Pricing:             http://localhost:3000/pricing
Billing:             http://localhost:3000/billing
Order detail:        http://localhost:3000/orders/<ORDER_ID>
Admin Operations:    http://localhost:3000/admin
Wedding Workspace:   http://localhost:3000/weddings/<WEDDING_ID>
Invitation Studio:   http://localhost:3000/weddings/<WEDDING_ID>/invitation
Guest Management:    http://localhost:3000/weddings/<WEDDING_ID>/guests
Public invitation:   http://localhost:3000/i/minh-anh
API Health:          http://localhost:4000/api/health
Plan Catalog API:    http://localhost:4000/api/plans
```

---

## L. Những lần chạy sau

Không chạy lại `db:setup` mỗi ngày.

### Terminal 1

```bash
cd ~/Downloads/ngaydoi-v0.6.0-phase6-commercial-foundation
npm run db:up
npm run dev:api
```

### Terminal 2

```bash
cd ~/Downloads/ngaydoi-v0.6.0-phase6-commercial-foundation
npm run dev:web
```

---

## M. Dừng cuối buổi

Dừng API và Web:

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

---

## N. Troubleshooting

### Container trùng tên

```bash
docker ps -a --filter name=ngaydoi-postgres
```

Source v0.6.0 dùng script tái sử dụng container. Không tự xóa container khi nó chứa dữ liệu cần giữ.

### API báo Prisma Client cũ

```bash
npm run db:generate
npm run build
```

### Migration chưa chạy

```bash
npm run db:deploy
npm run db:seed
```

### Sandbox bị disabled

Kiểm tra:

```bash
grep '^PAYMENT_SANDBOX_ENABLED=' apps/api/.env
```

Local cần:

```env
PAYMENT_SANDBOX_ENABLED=true
```

Production phải đặt `false`.

### Port bị chiếm

```bash
lsof -nP -iTCP:3000 -sTCP:LISTEN
lsof -nP -iTCP:4000 -sTCP:LISTEN
lsof -nP -iTCP:5432 -sTCP:LISTEN
```
