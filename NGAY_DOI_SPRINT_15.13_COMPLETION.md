# Ngày Đôi — Sprint 15.13 Completion

Version: **v0.15.12**
Sprint: **Post-Wedding Memory & Thank-you Experience**

## Delivered

- Existing public invitation URL can switch between wedding invitation mode and post-wedding memory mode.
- Memory mode keeps the wedding story, event timeline, approved Guestbook and album links while hiding the countdown and RSVP form.
- RSVP API is also blocked while memory mode is enabled; historical RSVP data is preserved.
- Owner can edit thank-you title/message/signature and choose whether to show the couple photo and wedding date.
- Owner can mark up to 12 approved album assets as featured memories.
- Featured memories appear on the existing public invitation in post-wedding mode and link to the full scalable album from Sprint 15.12.
- Additive Prisma migration only; no reset or destructive DROP is required.
- `memories:smoke` now validates memory mode + featured memories.
- `npm run sprint15.13:audit` is included in `quality:check`.
