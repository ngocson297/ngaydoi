# Run Guide — v0.15.7 Sprint 15.8

## 1. Dừng API và Web

Nhấn `Ctrl + C` ở hai Terminal đang chạy.

## 2. Áp dụng patch

```bash
cd ~/Downloads/ngaydoi

git apply --check ~/Downloads/ngaydoi-v0.15.7-sprint15.8-invitation-experience.patch
git apply ~/Downloads/ngaydoi-v0.15.7-sprint15.8-invitation-experience.patch
```

## 3. Cập nhật Prisma và database

Sprint này có migration mới nhưng không xóa dữ liệu.

```bash
npm run db:up
npm run db:generate
npm run db:deploy
```

Không chạy `db:clean` hoặc `db:reset`.

## 4. Kiểm tra

```bash
npm run quality:check
npm run build
```

## 5. Chạy ứng dụng

Terminal API:

```bash
cd ~/Downloads/ngaydoi
npm run dev:api
```

Terminal Web:

```bash
cd ~/Downloads/ngaydoi
npm run dev:web
```

## 6. Self-test chính

- Mở `/templates`, xác nhận thumbnail có nhiều bố cục khác nhau.
- Mở Invitation Studio → Mẫu thiệp, thử ít nhất một mẫu thuộc mỗi layout.
- Upload 2–3 ảnh và kiểm tra portrait/split/arch/photo story.
- Kiểm tra countdown ở mobile và desktop.
- Kiểm tra phần Chương trình ở nhiều template.
- Mở tab `Mừng cưới`, thêm tài khoản, bật hiển thị và xem preview.
- Xác nhận QR hiển thị, sao chép số tài khoản hoạt động.
- Tắt `Mừng cưới`, xác nhận section biến mất.
- Nhập thiếu BIN/số tài khoản, xác nhận dữ liệu nháp vẫn lưu nhưng không công khai QR.

## 7. Sau khi work

```bash
git add .
git commit -m "feat: complete sprint 15.8 invitation experience and gift QR"
git tag -a v0.15.7 -m "Sprint 15.8 Invitation Experience"
```
