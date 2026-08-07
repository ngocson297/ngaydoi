# v0.15.14 — Sprint 15.15 Production Pilot Readiness & Hardening

- Added strict production configuration checks, R2/S3 + CDN requirements, release SHA, HTTPS/cookie/email-verification and secret-isolation gates.
- Added security headers, backup restore drill, performance smoke test and `npm run production:check`.
- Added pilot Privacy Policy and Terms surfaces plus media-upload/public-invitation disclosures.
- Fixed QR-card printing so all guests have printable/scannable check-in QR data, including guests without invitation tokens.
- Fixed Invitation Studio “Mừng cưới” preview data shape and embedded mobile/desktop layout.
- Added Admin coupon management so discount codes can be created/edited/activated without modifying seed code.
- No Prisma migration is required for this sprint.
- Added `npm run sprint15.15:audit` to the quality gate.

# v0.15.13 — Sprint 15.14 Album Control, Download & Archive

- Comments now publish immediately by default; owners can still opt back into pre-moderation.
- Guests can delete comments created by their own browser interaction identity; owners can remove any recent comment from the Wedding Space dashboard.
- Comment deletion uses a hidden moderation state instead of destructive database deletion.
- Public albums support selecting up to 200 loaded memories and downloading them as a ZIP.
- Public albums and owners can download all approved album memories as a ZIP, with server-side item/byte safety limits.
- ZIP generation streams one stored object at a time and does not buffer the full archive in memory.
- Album storage usage and remaining quota are exposed in owner/public album data and surfaced in the owner dashboard.
- Existing upload-close date remains the album intake expiration control.
- Added additive migration to make instant comments the default and migrate existing albums to that behavior.
- Expanded `memories:smoke` and added `npm run sprint15.14:audit` to the quality gate.

# v0.15.12 — Sprint 15.13 Post-Wedding Memory & Thank-you Experience

- Added same-link post-wedding Memory Mode for existing `/thiep/:slug` invitation URLs.
- Added thank-you title/message/signature controls plus optional couple photo and wedding date.
- Closed RSVP in both public UI and API while Memory Mode is enabled without deleting historical responses.
- Added up to 12 owner-selected featured memories from the approved Shared Memories album.
- Reused the existing scalable album and Guestbook from Sprint 15.12 instead of creating duplicate post-wedding data.
- Added an additive Prisma migration only; no destructive reset/drop.
- Expanded `memories:smoke` and added `npm run sprint15.13:audit` to the release quality gate.

# v0.15.11 — Sprint 15.12 Wedding Social Experience & Album Scalability

- Added cursor-paginated album feeds with infinite-scroll UX instead of loading the entire wedding album at once.
- Added wedding-scoped hearts, guest comments and a public Guestbook with owner moderation controls.
- Added RSVP opt-in so a guest's private RSVP message is only published to the Guestbook when they explicitly allow it.
- Added upload quotas for image/video size, batch size, album item count and total album bytes.
- Added S3/R2 presigned direct-upload preparation so production media can bypass the API server while LOCAL self-test keeps the existing proxy upload path.
- Added owner controls for reactions, comments, downloads, Guestbook visibility and moderation.
- Expanded the Memories smoke test to cover cursor pagination, reactions, comments and moderation.
- Added an additive Prisma migration only; no existing wedding, invitation, RSVP or memory data is deleted.
- Added `npm run sprint15.12:audit` to the release quality gate.

# v0.15.10 — Sprint 15.11 Self-test Stabilization

- Fixed the Invitation Studio 390px preview by making the embedded invitation reflow independently from the outer desktop viewport.
- Redesigned the family announcement with a formal introduction, couple focal point, wedding date/venue and balanced parent cards.
- Rebuilt the timeline programme into milestone cards with clearer time, date, family side, venue and action hierarchy.
- Fixed dashboard couple monograms so initials never wrap or overflow their circle.
- Replaced public `/i/:slug` links with the clearer canonical `/thiep/:slug` route while preserving automatic redirects for existing shared links.
- Replaced the unstable planning search glyph with a properly sized accessible SVG icon.
- Added `npm run sprint15.11:audit` to the release quality gate.
- No database schema, migration, API contract or dependency changes.

# v0.15.9 — Sprint 15.10 Template Expansion & Mobile Stabilization

- Fixed gift QR autosave validation for `qrImageUrl`.
- Stabilized QR, countdown, events and invitation sections on mobile and desktop.
- Added one-time, reduced-motion-safe wedding fireworks on public invitation entry.
- Redesigned “Xem thiệp” actions in My Weddings and wedding workspace.
- Added a prominent three-step Home onboarding path and a differentiation section.
- Expanded the template library from 24 to 36 genuinely named concepts.
- Added product-wide mobile overflow and control-size hardening.

# Changelog

## v0.15.8 — Sprint 15.9 Guest-first Creation & UX Refinement

- Added a public `/create` flow so visitors can choose a template and start composing an invitation before registering.
- Added local draft persistence and a safe post-registration import flow with duplicate-wedding protection.
- Preserved `next` through login, registration and email verification so users return to their draft automatically.
- Added uploaded bank QR images as the default gift-transfer mode while keeping automatic VietQR generation as an advanced option.
- Added wedding-scoped QR asset storage, public streaming, safe deletion after autosave and an additive Prisma migration.
- Added fixed-position toast feedback for copied guest, collaborator and album links.
- Standardized native select triggers with consistent chevrons, focus/hover states and pointer cursors.
- Fixed Invitation Studio header overlap inside authenticated layouts.
- Replaced the persistent guest “check” action with a clear “Đã gửi?” action and a confirmed “Đã gửi” status.
- Retained the focused one-open sidebar accordion: the active group opens automatically and other groups remain collapsed.
- Added `npm run guest-first-ux:audit` to the quality gate.

## v0.15.7 — Sprint 15.8 Invitation Experience & Gift Transfer QR

- Chia 24 template thành 6 họ layout thực sự khác nhau: portrait, split, editorial, arch, photo story và minimal.
- Template có thể dùng ảnh bìa, ảnh chia đôi, khung vòm hoặc collage từ ảnh do người dùng tải lên; không dùng ảnh/asset sao chép từ website khác.
- Thiết kế lại countdown với 4 phong cách: cards, editorial, rings và minimal.
- Thiết kế lại chương trình cưới với 4 phong cách: timeline, cards, agenda và steps.
- Thêm phần “Mừng cưới qua QR”, tối đa 3 tài khoản cho nhà trai, nhà gái hoặc dùng chung.
- Tích hợp danh sách ngân hàng VietQR có cache/fallback nhập BIN thủ công; QR không điền sẵn số tiền và không tự xác nhận giao dịch.
- Bổ sung migration an toàn cho giftTitle, giftMessage, giftAccounts, showGift và section order.
- Thêm `npm run invitation-experience:audit` vào quality gate.

## 0.15.6 — Sprint 15.7 Regression & Release Quality Gate

- Added a root-level global error recovery page to prevent blank-screen failures.
- Added `regression:audit` for required routes/loading boundaries, package-version alignment, TS/TSX parsing, relative imports and CSS balance.
- Added `quality:check`, `release:check` and `smoke:all` release commands.
- Added a documented regression matrix covering customer, invitation, guest, commerce, event and post-wedding journeys.
- Completed the final readability pass for dense Guests, Admin, Billing, Order and Planning interfaces.
- Added stable mobile table scrolling with sticky guest selection and identity columns.
- No database schema, migration, API contract or runtime dependency changes.

## 0.15.5 — Sprint 15.6 UX Polish, Home Performance & Contact

- Simplified the desktop navigation into a focused accordion and fixed the sidebar to the viewport on long pages.
- Preserved detailed menu descriptions inside the command palette while reducing repeated copy in the sidebar.
- Fixed planning task check controls and template favorite buttons so touch-target rules cannot distort their shape.
- Increased legacy content typography, with a targeted readability pass for Guests, Planning and Commerce.
- Redesigned payment totals and the electronic receipt with a professional print layout.
- Fixed the Home “Khám phá 24 mẫu” CTA shape and added a public Contact page for Facebook, Zalo and email.
- Added low-power Home motion handling, inactive-tab animation pausing and below-the-fold rendering containment.
- Added `npm run ux:audit` for release regression checks.

## 0.15.4 — Sprint 15.5 Accessibility & Inclusive UX Audit

- Added a global skip link, route-change screen-reader announcements and consistent main-content landmarks.
- Added shared keyboard-accessible tabs with Arrow, Home and End navigation, then migrated Admin and core Wedding workspaces.
- Strengthened dialog, drawer and command-palette focus trapping, Escape handling, scroll locking, focus restoration and unique ARIA IDs.
- Added semantic radio behavior for RSVP choices, accessible progress bars, and labels for icon buttons, checkboxes, camera/video and media controls.
- Added higher-contrast focus states, minimum touch targets, forced-colors support and comprehensive reduced-motion behavior.
- Added `npm run a11y:audit` to catch unsafe browser dialogs, unlabeled media/icons, missing image alternatives and unsafe new-tab links.
- Removed the remaining `window.prompt` flow and replaced it with validated accessible dialogs.
- No database schema, migration or runtime dependency changes.

## 0.15.3 — Sprint 15.4 Loading, Empty, Error & Retry States

- Added centralized user-safe API error normalization that hides internal stack, SQL and framework details.
- Expanded shared skeleton, empty, permission, inline-error and full-page error components.
- Added retry actions and copyable support request IDs to high-impact authenticated, admin, partner and public flows.
- Added route-level loading boundaries for dashboard, account, billing, pricing, onboarding, support, growth, templates, orders, partner, admin and wedding workspaces.
- Migrated core wedding workspace, Invitation Studio, guests, event operations and memories away from indefinite spinners and dead-end error panels.
- Added guided empty states across dashboard, billing, guests, partner, support, growth, templates and administration.
- Fixed a Growth Hub reload loop and Pricing catalog re-fetch loop while auditing asynchronous page states.
- No database schema, migration or dependency changes.

## 0.15.2 — Sprint 15.3 Form System & Unsaved Changes Protection

- Added shared form error summaries with focus management and field links.
- Added shared save-state/actions, native date-time wrapper and accessible drag-and-drop upload field.
- Added unsaved-changes protection for internal links, browser close/refresh and workspace tab switches.
- Added global promise-based confirmation service and removed all remaining `window.confirm` usage from the Web app.
- Migrated create-wedding, planning, wedding workspace and public memory upload flows to the new form system.
- Added clearer loading, success, destructive-action and retry states on migrated flows.
- No database schema, migration or dependency changes.


## 0.15.1 — Sprint 15.2 Navigation & Information Architecture

- Replaced duplicated desktop/mobile navigation markup with one role-aware navigation model.
- Added collapsible groups with per-role browser persistence and progressive wedding-tool disclosure.
- Added keyboard-accessible command palette using `⌘ K` / `Ctrl K`.
- Added breadcrumbs for deep pages and wedding workspaces.
- Added accessible mobile drawer focus management, Escape handling, scroll locking and focus restoration.
- Added role labels and clearer user context in sidebar/drawer.
- Updated `source:pack` to exclude generated Prisma Client output.
- No database schema or migration changes.


## 0.15.0 — Sprint 15.1 Design System Foundations

- Added centralized design tokens and authoritative UI compatibility layer.
- Added shared Button, FormField, Alert, Dialog, Skeleton, Empty/Error State and Toast components.
- Migrated authentication, account, global loading/error and not-found experiences to the shared system.
- Replaced destructive account `window.confirm` with an accessible confirmation dialog.
- Separated API support request IDs from user-facing error messages.
- Added `npm run source:pack` for safe one-command source packaging without secrets or build output.
- No database schema or migration changes.


## 0.14.0 — Template Library, Theme Marketplace & Final Product Polish

- Expanded the invitation library from 5 to 24 templates.
- Added Vietnamese, traditional, romantic, botanical, minimal, modern, luxury and destination categories.
- Added a public searchable template catalog at `/templates`.
- Added template search, style filters, availability filters and browser-local favorites to Invitation Studio.
- Added server-side template entitlement enforcement.
- Expanded plan access to 3/8/16/24 templates.
- Added new heading/body font families, template motifs and reduced-motion-aware invitation animation.
- Enhanced Home with an eight-template showcase, animated 24-template marquee and pointer parallax.
- Added sidebar navigation and `template:smoke` regression coverage.

## 0.13.1 - Phase 13 date-format hotfix

- Fixed Planning page runtime crash caused by combining `dateStyle` with explicit hour/minute options.
- Added invalid-date fallback before rendering task deadlines.
- No database migration and no seed changes.

## 0.13.0 — Wedding Planning Timeline & Smart Reminders

- Added per-wedding planning timeline and task management.
- Added smart task templates generated relative to the wedding date.
- Added progress, overdue and due-soon metrics.
- Added task priority, category, assignee and reminder settings.
- Added background planning reminders through Notification and Email Outbox.
- Added a responsive planning workspace and `planning:smoke` regression test.
- Added professional, reduced-motion-aware animation to the public home page.
- Refined input fields, forms, buttons, desktop sidebar and mobile navigation drawer.

## 0.12.0 — Shared Guest Album & Post-wedding Experience

- Added a per-wedding shared memory album with a secure random link.
- Added guest image/video upload without account registration.
- Added owner moderation queue, bulk approval, rejection, archive and deletion.
- Added public post-wedding gallery and thank-you experience.
- Added downloadable QR for guest contribution.
- Added optional uploader names and album close date.
- Added album CTA to public and personalized invitations.
- Increased form-control size, body text scale and sidebar usability.
- Added responsive layouts for moderation cards, upload forms and public gallery.
- Added Phase 12 Prisma migration and `memories:smoke` regression test.

