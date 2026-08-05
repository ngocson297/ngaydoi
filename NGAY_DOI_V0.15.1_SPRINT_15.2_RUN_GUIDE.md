# Ngày Đôi v0.15.1 — Hướng dẫn áp dụng Sprint 15.2

## File cần dùng

Ưu tiên dùng patch:

```text
ngaydoi-v0.15.1-sprint15.2-navigation.patch
```

Full ZIP chỉ dùng để dự phòng.

## 1. Dừng API và Web

Tại hai terminal đang chạy:

```text
Ctrl + C
```

Giữ Docker Desktop và PostgreSQL.

## 2. Tạo mốc Git local

```bash
cd ~/Downloads/ngaydoi
git status
git add .
git commit -m "chore: save stable sprint 15.1 baseline"
```

Nếu không có thay đổi để commit, Git sẽ báo working tree clean và có thể tiếp tục.

## 3. Áp dụng patch

```bash
cd ~/Downloads/ngaydoi

git apply --check ~/Downloads/ngaydoi-v0.15.1-sprint15.2-navigation.patch
git apply ~/Downloads/ngaydoi-v0.15.1-sprint15.2-navigation.patch
```

## 4. Build

Sprint này không thêm dependency và không đổi database:

```bash
npm run build
```

Không cần chạy:

```bash
npm install
npm run db:generate
npm run db:deploy
npm run db:seed
```

## 5. Chạy lại

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
http://localhost:3000/dashboard
```

## 6. Kiểm tra nhanh

- Nhóm menu có thể mở/thu gọn.
- Refresh trang vẫn nhớ trạng thái nhóm.
- `⌘ K` trên Mac hoặc `Ctrl K` trên Windows mở tìm kiếm menu.
- Gõ `khách`, `thiệp`, `thanh toán` và nhấn Enter.
- Breadcrumb hiển thị trên trang sâu.
- Mobile 390px: mở drawer, dùng Tab, nhấn Escape và kiểm tra focus trở lại nút menu.
- Customer không thấy menu Admin.
- Partner chỉ thấy Partner Portal và nhóm phù hợp.
- Admin thấy nhóm Quản trị.

## 7. Commit sau khi chạy ổn

```bash
cd ~/Downloads/ngaydoi
git add .
git commit -m "refactor: complete sprint 15.2 navigation architecture"
git tag -a v0.15.1 -m "Sprint 15.2 Navigation and Information Architecture"
```

## 8. Tạo ZIP cho sprint tiếp theo

```bash
cd ~/Downloads/ngaydoi
npm run source:pack
```

Upload:

```text
~/Downloads/ngaydoi-current.zip
```
