# Ngày Đôi — Sprint 15.11 Completion

Version: `v0.15.10`

## Completed feedback

1. Fixed the critical 390px Invitation Studio preview. Embedded invitations now use an explicit mobile-preview layout instead of relying on the desktop browser viewport.
2. Redesigned the family announcement with formal copy, couple names, wedding date, primary venue and balanced family cards.
3. Redesigned the programme timeline into a modern itinerary with milestone markers and readable cards.
4. Fixed the My Weddings circular initials so letters and ampersand cannot wrap or escape the circle.
5. Changed canonical public invitation paths from `/i/:slug` to `/thiep/:slug`; old links redirect and preserve query parameters.
6. Replaced the Planning search glyph with a stable 21px SVG icon.

## Compatibility

- No database changes.
- No migration or seed required.
- No API contract changes.
- No new dependencies.
- Existing `/i/...` links remain valid.
