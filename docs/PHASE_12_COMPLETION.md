# Phase 12 Completion — Shared Guest Album & Post-wedding Experience

**Version:** v0.12.0  
**Status:** Implemented, pending runtime confirmation on the target machine.

## Completed scope

### Shared album
- One memory album per wedding.
- Secure random album token.
- Public/open and upload-enabled controls.
- Optional closing date for new uploads.
- Custom album title, description and thank-you message.
- Regenerate link to revoke the previous public link.

### Guest contribution
- No account required.
- Image support: JPEG, PNG and WebP up to 10 MB.
- Video support: MP4, WebM and MOV up to 30 MB.
- Up to 10 files selected per browser batch.
- Client-side format/size feedback before upload.
- Server-side binary signature validation to detect spoofed file types.
- Configurable per-album limits, defaulting to 1,000 assets and 5 GB.
- Optional uploader name and message.
- Personalized invitation token may be attached without putting personal data in the album URL.

### Moderation
- PENDING, APPROVED, REJECTED and ARCHIVED states.
- Approve, reject, archive and permanently delete.
- Bulk approval.
- Rejection reason and moderation notes foundation.
- Owner notification when new content is submitted.

### Public post-wedding experience
- Responsive gallery for approved images and videos.
- Thank-you title and message.
- Public upload area.
- Friendly empty, closed, loading, success and failure states.
- QR endpoint for printing and sharing.
- CTA from public/personalized wedding invitation to the memory album.

### UI/UX hardening
- Increased base typography and helper-text size.
- Minimum 48 px form controls.
- Stronger focus indicators.
- Consistent input, textarea, select and button sizing.
- Friendlier moderation dialog.
- Improved sidebar item height and text readability.
- Responsive owner gallery, settings, share panel and public upload flow.
- Long file names, messages and URLs wrap instead of breaking layouts.
- Larger invitation footer actions and clearer tap targets.
- Sidebar, input fields, forms and buttons follow consistent height, spacing and focus rules.

## Data changes

Added:
- `MemoryAlbum`
- `MemoryAsset`
- `MemoryAssetStatus`
- `MemoryAssetType`

The migration only creates new enums, tables, indexes and foreign keys. It does not delete Phase 11 data.

## Exit criteria

Phase 12 is complete after the target machine confirms:

```bash
npm run db:deploy
npm run db:seed
npm run build
npm run memories:smoke
```
