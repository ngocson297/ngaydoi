# Ngày Đôi v0.15.0 — Hướng dẫn áp dụng Sprint 15.1

Sprint 15.1 chuẩn hóa nền tảng Design System và không thay đổi database.

## 1. Phương án khuyến nghị: áp dụng patch vào folder cố định

Folder làm việc giữ nguyên:

```text
~/Downloads/ngaydoi
```

### Bước 1 — Dừng API và Web

Tại hai terminal đang chạy:

```text
Ctrl + C
```

Giữ Docker Desktop và PostgreSQL. Không chạy `db:clean` hoặc `db:reset`.

### Bước 2 — Tạo mốc Git local

```bash
cd ~/Downloads/ngaydoi
git status
```

Nếu chưa dùng Git local:

```bash
git init -b main
git add .
git commit -m "chore: stable baseline before sprint 15.1"
```

Nếu đã có Git và đang có thay đổi hợp lệ:

```bash
git add .
git commit -m "chore: save work before sprint 15.1"
```

### Bước 3 — Kiểm tra và áp dụng patch

Đặt file patch trong `~/Downloads`, sau đó:

```bash
cd ~/Downloads/ngaydoi

git apply --check ~/Downloads/ngaydoi-v0.15.0-sprint15.1-design-system.patch
git apply ~/Downloads/ngaydoi-v0.15.0-sprint15.1-design-system.patch
```

Kiểm tra:

```bash
git status
```

### Bước 4 — Build

Sprint này không thêm dependency mới và không đổi Prisma schema. Nếu `node_modules` hiện tại vẫn còn, không bắt buộc chạy `npm install`.

```bash
npm run build
```

Không cần chạy:

```bash
npm run db:generate
npm run db:deploy
npm run db:seed
```

### Bước 5 — Chạy lại

Terminal 1:

```bash
cd ~/Downloads/ngaydoi
npm run db:up
npm run dev:api
```

Terminal 2:

```bash
cd ~/Downloads/ngaydoi
npm run dev:web
```

Mở:

```text
http://localhost:3000/login
http://localhost:3000/register
http://localhost:3000/account
```

### Bước 6 — Commit khi kiểm tra ổn

```bash
git add .
git commit -m "refactor: implement sprint 15.1 design system foundations"
git tag -a v0.15.0 -m "Sprint 15.1 Design System Foundations"
```

## 2. Phương án dự phòng: dùng full source ZIP

Chỉ dùng khi patch không áp dụng được.

```bash
cd ~/Downloads
rm -rf ngaydoi-sprint151-temp
mkdir ngaydoi-sprint151-temp
unzip ngaydoi-v0.15.0-sprint15.1-design-system.zip -d ngaydoi-sprint151-temp
rsync -a ngaydoi-sprint151-temp/ ngaydoi/
rm -rf ngaydoi-sprint151-temp
```

Full ZIP không chứa `.env`, vì vậy các file môi trường hiện tại trong `~/Downloads/ngaydoi` không bị ghi đè.

Sau đó:

```bash
cd ~/Downloads/ngaydoi
npm run build
```

## 3. Kiểm tra thủ công

### Authentication

- Login có label, helper text và loading button.
- Khi API lỗi, thông báo dễ hiểu và có Request ID nếu API trả về.
- Register, forgot password và reset password không submit lặp.
- Verify email có skeleton khi đang xử lý.

### Account

- Trang Account dùng sidebar chung.
- Save Profile có loading state và toast thành công.
- Disabled email có giải thích lý do.
- Đổi mật khẩu có helper text.
- Thu hồi session dùng button chuẩn.
- Xóa tài khoản mở dialog thay vì browser confirm.
- Dialog đóng được bằng Escape, click backdrop và nút Hủy.
- Focus không thoát khỏi dialog khi dùng Tab.

### Global states

- Loading route hiển thị skeleton.
- Trang 404 có CTA rõ ràng.
- Global error không hiển thị stack trace.
- Reduce Motion làm skeleton ngừng shimmer.

### Responsive

Kiểm tra tại 390px, 768px và 1440px:

- Input không tràn card.
- Button chính full-width phù hợp trên mobile.
- Account grid chuyển một cột.
- Dialog không vượt viewport.
- Toast không vượt chiều rộng màn hình.

## 4. Tạo ZIP source cho sprint sau

Từ Sprint 15.1, chỉ cần chạy:

```bash
cd ~/Downloads/ngaydoi
npm run source:pack
```

File tạo ra:

```text
~/Downloads/ngaydoi-current.zip
```

Sau đó upload ZIP này khi bắt đầu sprint mới hoặc khi bạn đã tự sửa source bằng Codex/VS Code.
