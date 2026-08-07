# Ngày Đôi — Sprint 15.12 Completion

Version: **v0.15.11**
Sprint: **Wedding Social Experience & Album Scalability**

## Goal

Turn Shared Memories from a static upload gallery into a wedding-scoped social experience while preventing large albums and future video uploads from overloading the application server.

## Delivered

### 1. Scalable album feed
- Public album uses cursor pagination.
- Initial public page returns 24 approved assets.
- Additional pages are loaded with infinite scroll and a manual **Tải thêm** fallback.
- Owner album also loads assets in pages instead of keeping the entire album in the DOM.
- Album metrics use database aggregate/group queries rather than loading every asset.

### 2. Upload protection
- Image, video, batch, album-item and album-byte limits are configurable through environment variables.
- Default image limit: 12 MiB.
- Default local/proxy video limit: 30 MiB.
- Default direct-upload video limit: 150 MiB.
- Default album capacity: 3,000 items / 20 GiB.
- Local uploads keep file-signature validation.

### 3. Production direct-upload path
- LOCAL mode keeps the current proxy upload through NestJS for self-test.
- S3/R2 mode can request a short-lived presigned PUT URL.
- Browser uploads the object directly to storage.
- Client then completes the upload with a signed upload ticket.
- API verifies the stored object size and MIME type before creating MemoryAsset metadata.
- Storage object key remains wedding-scoped.

Production direction:

```text
Guest phone
    ↓
Object Storage (S3 / Cloudflare R2)
    ↓
CDN
    ↓
Wedding Album
```

The API remains responsible for authorization, quotas, metadata and moderation, not the large file transfer.

### 4. Wedding reactions
- Approved album media can receive a heart reaction.
- Reaction identity is anonymous and stored as a one-way actor hash.
- One browser actor can toggle one HEART per asset.
- Public feed returns reaction count and current viewer reaction state.

### 5. Wedding comments
- Guests can comment on approved media.
- Owner can enable/disable comments.
- Comment moderation can be required.
- Pending comments do not appear in the public feed.
- Owner moderation supports approve/hide.

### 6. Public Guestbook
- RSVP form includes an explicit opt-in to publish the guest's wish.
- Normal RSVP data remains private.
- Opted-in wishes become Guestbook entries.
- Guestbook moderation can be required.
- Approved wishes appear on the public invitation and full album Guestbook.
- A guest can later remove public permission by updating RSVP, which removes the linked Guestbook entry.

### 7. Owner privacy and moderation controls
Added controls for:
- reactions,
- comments,
- comment moderation,
- downloads,
- Guestbook,
- Guestbook moderation,
- existing media moderation,
- existing uploader-name visibility.

Owner album includes a dedicated **Lời chúc & bình luận** moderation area.

### 8. Data model
Additive migration adds:
- `Rsvp.publishWish`,
- social settings on `MemoryAlbum`,
- `MemoryReaction`,
- `MemoryComment`,
- `GuestbookEntry`,
- supporting enum types, relations and indexes,
- unique `MemoryAsset.storageKey`.

No DROP, reset or destructive migration is used.

### 9. Quality gates
Added `npm run sprint15.12:audit` and included it in `npm run quality:check`.

`memories:smoke` now also validates:
- cursor public feed,
- reaction toggle,
- comment submission,
- owner moderation,
- public comment visibility.

## Not included yet
- image resize/transcoding workers,
- video transcoding/HLS,
- malware/media-content scanning,
- CDN signed URLs/private CDN policy,
- websocket live-feed push,
- generic user profiles/follow/DM/social network features.

These are intentionally outside this stabilization sprint.
