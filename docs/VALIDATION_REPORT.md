# NGÀY ĐÔI v0.4.0 — VALIDATION REPORT

## Scope

Release Phase 4 — Invitation Builder.

## Static checks đã thực hiện

| Kiểm tra | Kết quả |
|---|---|
| TypeScript/TSX transpile syntax | 85 files, 0 syntax diagnostics |
| Relative imports không phải generated Prisma | Tất cả target tồn tại |
| Root/API/Web `package.json` | JSON hợp lệ |
| CSS brace balance | Hợp lệ |
| Phase 4 migration có `sectionOrder NOT NULL` | Hợp lệ |
| Invitation module được đăng ký trong AppModule | Hợp lệ |
| InvitationService được export cho WeddingsModule | Hợp lệ |
| Upload MIME và size guard | Có |
| Secure preview expiry/revoke | Có |
| Ownership/collaborator guard | Có |
| Smoke script Invitation Builder | Có |

## Các khu vực được rà soát logic

- Prisma migration và backfill design cho wedding cũ.
- Prisma schema relations.
- Autosave revision.
- Template application.
- FormData request headers.
- Image compression và upload.
- Cover state, reorder và delete.
- Secure preview token.
- Version snapshot/restore.
- Published invitation access.
- Public media access.
- Web Share/clipboard fallback.
- Mobile editor layout và public invitation responsive styles.

## Giới hạn môi trường artifact

Môi trường tạo artifact không tải được toàn bộ dependency từ npm registry, nên không thể chạy tại đây:

```bash
npm install
npm run db:setup
npm run build
npm run invitation:smoke
```

Nguyên nhân là registry/proxy của môi trường trả lỗi hoặc timeout với package ngoài, không phải một lỗi runtime đã được xác nhận trong source.

## Xác nhận bắt buộc trên máy người dùng

```bash
npm install
npm run db:setup
npm run build
```

Sau khi API chạy:

```bash
npm run security:test
npm run auth:smoke
npm run wedding:smoke
npm run invitation:smoke
```
