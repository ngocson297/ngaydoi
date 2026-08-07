# Ngày Đôi — Sprint 15.14 Completion

Version: **v0.15.13**
Sprint: **Album Control, Download & Archive**

## Delivered

- Comments publish immediately by default instead of waiting for owner approval.
- Comment pre-moderation remains available as an owner setting.
- Guest can delete only comments created by the same interaction identity/browser session.
- Owner/editor can remove any recent comment; deletion hides the comment from the public album immediately.
- Public album supports select-to-download and download-all as ZIP.
- ZIP archive contains approved media only and enforces archive item/byte safety limits.
- ZIP is streamed one object at a time, suitable for image/video media without buffering the entire archive.
- Owner dashboard shows used/remaining album storage quota.
- Upload close date remains visible/configurable as the intake expiration control.
- Additive Prisma migration only; no reset or destructive DROP required.
- `memories:smoke` covers instant comment, own-comment delete, owner delete and ZIP signature.
- `npm run sprint15.14:audit` is included in `quality:check`.
