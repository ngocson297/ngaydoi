# Ngày Đôi v0.8.0 — Hướng dẫn nâng cấp và chạy

## 1. Dừng gì trước khi nâng cấp

Dừng API và Web bằng `Ctrl + C`. Giữ Docker Desktop, container PostgreSQL, volume và thư mục `ngaydoi-local-data`. Không chạy `db:clean`.

## 2. Giải nén và sao chép environment

```bash
cd ~/Downloads
unzip ngaydoi-v0.8.0-phase8-pilot-hardening.zip
cd ngaydoi-v0.8.0-phase8-pilot-hardening

cp ../ngaydoi-v0.7.0-phase7-production-readiness/.env .env
cp ../ngaydoi-v0.7.0-phase7-production-readiness/apps/api/.env apps/api/.env
cp ../ngaydoi-v0.7.0-phase7-production-readiness/apps/web/.env.local apps/web/.env.local
```

## 3. Cài đặt và nâng cấp database

```bash
npm install
npm run db:setup
npm run build
```

Migration Phase 8 chỉ thêm checklist pilot, UAT issue và system announcement; không xóa dữ liệu Phase 7.

## 4. Chạy hệ thống

Terminal 1:

```bash
cd ~/Downloads/ngaydoi-v0.8.0-phase8-pilot-hardening
npm run db:up
npm run dev:api
```

Terminal 2:

```bash
cd ~/Downloads/ngaydoi-v0.8.0-phase8-pilot-hardening
npm run dev:web
```

Terminal 3:

```bash
cd ~/Downloads/ngaydoi-v0.8.0-phase8-pilot-hardening
npm run operations:smoke
npm run pilot:smoke
```

## 5. Tài khoản và URL

- Admin: `admin@ngaydoi.vn` / `Demo@12345`
- Pilot Center: `http://localhost:3000/admin/pilot`
- System Operations: `http://localhost:3000/admin/system`
- Status: `http://localhost:3000/status`

## 6. Kiểm tra thủ công

1. Mở Pilot Center bằng tài khoản Admin.
2. Chuyển checklist qua In Progress, Blocked và Passed.
3. Tạo issue High; xác nhận Go-live bị chặn.
4. Chuyển issue sang Verified và hoàn thành checklist.
5. Tạo thông báo bảo trì, kiểm tra API `/api/public/announcements`.
6. Kiểm tra responsive ở 390 px, 768 px và desktop.

## 7. Những lần chạy sau

Terminal 1: `npm run db:up && npm run dev:api`

Terminal 2: `npm run dev:web`

Không cần chạy lại `db:setup` mỗi ngày.

## 8. Dừng cuối buổi

Dừng API và Web bằng `Ctrl + C`. Muốn dừng PostgreSQL nhưng giữ dữ liệu: `npm run db:down`.
