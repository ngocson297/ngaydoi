"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { apiRequest, ApiError } from "../lib/api";
import { formatDate } from "../lib/weddings";
import { buildVietQrImageUrl, normalizeGiftAccounts, resolveMediaUrl, resolveTemplateExperience, withDefaultDesign } from "../lib/invitations";
import type { GiftTransferAccount, InvitationPersonalization, InvitationSectionKey, PublicInvitationData } from "../lib/invitations";

interface PublicInvitationProps {
  data: PublicInvitationData;
  preview?: boolean;
  embedded?: boolean;
}

type RsvpStatus = "ATTENDING" | "DECLINED" | "MAYBE";

function Countdown({ target, variant }: { target: string | null; variant: "cards" | "editorial" | "rings" | "minimal" }) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const tick = () => { if (!document.hidden) setNow(Date.now()); };
    const timer = window.setInterval(tick, reduced ? 60_000 : 1_000);
    document.addEventListener("visibilitychange", tick);
    return () => { window.clearInterval(timer); document.removeEventListener("visibilitychange", tick); };
  }, []);
  if (!target) return <p className="inv-empty-copy">Ngày cưới đang được cập nhật.</p>;
  const difference = Math.max(0, new Date(target).getTime() - now);
  const days = Math.floor(difference / 86_400_000);
  const hours = Math.floor((difference / 3_600_000) % 24);
  const minutes = Math.floor((difference / 60_000) % 60);
  const seconds = Math.floor((difference / 1_000) % 60);
  const items = difference === 0
    ? [{ value: "♥", label: "Ngày vui đã đến" }]
    : [
      { value: String(days).padStart(2, "0"), label: "Ngày" },
      { value: String(hours).padStart(2, "0"), label: "Giờ" },
      { value: String(minutes).padStart(2, "0"), label: "Phút" },
      { value: String(seconds).padStart(2, "0"), label: "Giây" },
    ];
  return (
    <div className={`inv8-countdown variant-${variant}`} role="timer" aria-label={difference === 0 ? "Ngày cưới đã đến" : `Còn ${days} ngày ${hours} giờ ${minutes} phút`}>
      {items.map(({ value, label }) => <div key={label}><span className="inv8-countdown-ring" aria-hidden="true" /><strong>{value}</strong><small>{label}</small></div>)}
    </div>
  );
}

function GiftTransferSection({ title, message, accounts, copiedAccountId, onCopy }: { title: string; message: string; accounts: GiftTransferAccount[]; copiedAccountId: string | null; onCopy: (account: GiftTransferAccount) => void }) {
  const [failedQrIds, setFailedQrIds] = useState<string[]>([]);
  return (
    <section id="gift-transfer" className="inv4-section inv8-gift-section">
      <div className="inv4-section-head"><span>Lời chúc mừng</span><h2>{title}</h2></div>
      <p className="inv8-gift-intro">{message}</p>
      <div className={`inv8-gift-grid count-${Math.min(accounts.length, 3)}`}>
        {accounts.map((account) => {
          const qrFailed = failedQrIds.includes(account.id);
          const sideLabel = account.side === "BRIDE" ? "Nhà gái" : account.side === "GROOM" ? "Nhà trai" : "Cô dâu & chú rể";
          return (
            <article className="inv8-gift-card" key={account.id}>
              <div className="inv8-gift-qr">
                {!qrFailed ? <img src={buildVietQrImageUrl(account)} alt={`QR chuyển khoản ${account.bankName} cho ${account.accountName}`} loading="lazy" onError={() => setFailedQrIds((current) => current.includes(account.id) ? current : [...current, account.id])} /> : <div className="inv8-gift-qr-fallback"><span>QR</span><small>Vui lòng dùng thông tin bên cạnh</small></div>}
              </div>
              <div className="inv8-gift-details">
                <span>{sideLabel}</span>
                <h3>{account.label || "Tài khoản mừng cưới"}</h3>
                <dl>
                  <div><dt>Ngân hàng</dt><dd>{account.bankName || account.bankCode}</dd></div>
                  <div><dt>Chủ tài khoản</dt><dd>{account.accountName}</dd></div>
                  <div><dt>Số tài khoản</dt><dd>{account.accountNumber}</dd></div>
                  <div><dt>Nội dung</dt><dd>{account.transferNote}</dd></div>
                </dl>
                <button type="button" onClick={() => onCopy(account)}>{copiedAccountId === account.id ? "Đã sao chép số tài khoản" : "Sao chép số tài khoản"}</button>
              </div>
            </article>
          );
        })}
      </div>
      <p className="inv8-gift-note">Quét bằng ứng dụng ngân hàng hỗ trợ VietQR. Số tiền do khách chủ động nhập; Ngày Đôi không lưu hoặc tự động xác nhận giao dịch.</p>
    </section>
  );
}

function PersonalizedRsvpSection({ personalization, events }: { personalization: InvitationPersonalization; events: PublicInvitationData["events"] }) {
  const existing = personalization.currentRsvp;
  const [status, setStatus] = useState<RsvpStatus>(existing?.status ?? "ATTENDING");
  const [adultCount, setAdultCount] = useState(existing?.adultCount ?? Math.min(1, personalization.maxAdultCount));
  const [childCount, setChildCount] = useState(existing?.childCount ?? 0);
  const [vegetarianCount, setVegetarianCount] = useState(existing?.vegetarianCount ?? 0);
  const [needsTransport, setNeedsTransport] = useState(existing?.needsTransport ?? false);
  const [selectedEventIds, setSelectedEventIds] = useState<string[]>(existing?.selectedEventIds ?? events.map((event) => event.id));
  const [message, setMessage] = useState(existing?.message ?? "");
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState(existing ? "Bạn đã phản hồi và vẫn có thể cập nhật." : "");
  const [error, setError] = useState("");
  const [hasResponded, setHasResponded] = useState(Boolean(existing));

  useEffect(() => {
    const total = adultCount + childCount;
    setVegetarianCount((current) => Math.min(current, total));
  }, [adultCount, childCount]);

  const missingAttendee = status !== "DECLINED" && adultCount + childCount < 1;
  const missingEvent = status === "ATTENDING" && events.length > 0 && selectedEventIds.length === 0;

  function toggleEvent(eventId: string): void {
    setSelectedEventIds((current) => current.includes(eventId) ? current.filter((id) => id !== eventId) : [...current, eventId]);
  }
  const rsvpStatuses: RsvpStatus[] = ["ATTENDING", "MAYBE", "DECLINED"];
  function moveStatus(current: RsvpStatus, direction: 1 | -1): void {
    const index = rsvpStatuses.indexOf(current);
    const next = rsvpStatuses[(index + direction + rsvpStatuses.length) % rsvpStatuses.length];
    setStatus(next);
    window.requestAnimationFrame(() => document.getElementById(`rsvp-status-${next}`)?.focus());
  }

  async function submit(event: React.FormEvent): Promise<void> {
    event.preventDefault();
    setBusy(true);
    setError("");
    setNotice("");
    try {
      const result = await apiRequest<{ message: string }>(`/rsvp/${encodeURIComponent(personalization.token)}`, {
        method: "POST",
        body: JSON.stringify({
          status,
          adultCount: status === "DECLINED" ? 0 : adultCount,
          childCount: status === "DECLINED" ? 0 : childCount,
          vegetarianCount: status === "DECLINED" ? 0 : vegetarianCount,
          needsTransport: status === "DECLINED" ? false : needsTransport,
          selectedEventIds: status === "DECLINED" ? [] : selectedEventIds,
          message,
        }),
      });
      setNotice(result.message);
      setHasResponded(true);
    } catch (reason) {
      setError(reason instanceof ApiError ? reason.message : "Chưa thể gửi phản hồi. Vui lòng thử lại.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section id="rsvp" className="inv4-section inv5-rsvp">
      <div className="inv4-section-head"><span>Xác nhận tham dự</span><h2>Chúng mình mong tin từ bạn</h2></div>
      <p className="inv5-rsvp-intro">Phản hồi giúp gia đình chuẩn bị chỗ ngồi và đón tiếp chu đáo hơn. Bạn có thể quay lại cập nhật bằng chính liên kết này.</p>
      <form className="inv5-rsvp-card" onSubmit={(event) => void submit(event)}>
        <div className="inv5-response-options" role="radiogroup" aria-label="Khả năng tham dự">
          {([
            ["ATTENDING", "Sẽ tham dự", "Rất vui được chung vui"],
            ["MAYBE", "Chưa chắc", "Mình sẽ xác nhận sau"],
            ["DECLINED", "Không thể dự", "Gửi lời chúc từ xa"],
          ] as const).map(([value, label, hint]) => (
            <button
              id={`rsvp-status-${value}`}
              className={status === value ? "active" : ""}
              type="button"
              role="radio"
              aria-checked={status === value}
              tabIndex={status === value ? 0 : -1}
              key={value}
              onClick={() => setStatus(value)}
              onKeyDown={(event) => {
                if (["ArrowRight", "ArrowDown"].includes(event.key)) { event.preventDefault(); moveStatus(value, 1); }
                else if (["ArrowLeft", "ArrowUp"].includes(event.key)) { event.preventDefault(); moveStatus(value, -1); }
                else if (event.key === "Home") { event.preventDefault(); setStatus("ATTENDING"); window.requestAnimationFrame(() => document.getElementById("rsvp-status-ATTENDING")?.focus()); }
                else if (event.key === "End") { event.preventDefault(); setStatus("DECLINED"); window.requestAnimationFrame(() => document.getElementById("rsvp-status-DECLINED")?.focus()); }
              }}
            >
              <span aria-hidden="true">{value === "ATTENDING" ? "✓" : value === "MAYBE" ? "?" : "×"}</span><strong>{label}</strong><small>{hint}</small>
            </button>
          ))}
        </div>

        {status !== "DECLINED" && (
          <>
            {events.length > 0 && <fieldset className="inv5-fieldset"><legend>Bạn tham dự chương trình nào?</legend><div className="inv5-event-checks">{events.map((event) => <label key={event.id}><input type="checkbox" checked={selectedEventIds.includes(event.id)} onChange={() => toggleEvent(event.id)} /><span><strong>{event.title}</strong><small>{formatDate(event.startsAt, true)} · {event.venueName}</small></span></label>)}</div></fieldset>}
            <div className="inv5-count-grid">
              <label>Người lớn<select value={adultCount} onChange={(event) => setAdultCount(Number(event.target.value))}>{Array.from({ length: personalization.maxAdultCount + 1 }, (_, value) => <option value={value} key={value}>{value}</option>)}</select></label>
              <label>Trẻ em<select value={childCount} onChange={(event) => setChildCount(Number(event.target.value))}>{Array.from({ length: personalization.maxChildCount + 1 }, (_, value) => <option value={value} key={value}>{value}</option>)}</select></label>
              <label>Suất chay<select value={vegetarianCount} onChange={(event) => setVegetarianCount(Number(event.target.value))}>{Array.from({ length: adultCount + childCount + 1 }, (_, value) => <option value={value} key={value}>{value}</option>)}</select></label>
            </div>
            <label className="inv5-transport"><input type="checkbox" checked={needsTransport} onChange={(event) => setNeedsTransport(event.target.checked)} /><span><strong>Tôi cần hỗ trợ xe đưa đón</strong><small>Gia đình sẽ liên hệ lại để xác nhận.</small></span></label>
          </>
        )}

        <label className="inv5-message">Lời nhắn dành cho cô dâu chú rể<textarea rows={4} maxLength={1000} value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Gửi một lời chúc thật ấm áp..." /></label>
        {error && <div className="inv5-form-message error" role="alert">{error}</div>}
        {notice && <div className="inv5-form-message success" role="status"><span aria-hidden="true">✓</span> {notice}</div>}
        {missingAttendee && <div className="inv5-form-message error" role="alert">Vui lòng chọn ít nhất một người tham dự.</div>}
        {missingEvent && <div className="inv5-form-message error" role="alert">Vui lòng chọn ít nhất một chương trình sẽ tham dự.</div>}
        <button className="inv5-submit" type="submit" disabled={busy || missingAttendee || missingEvent}>{busy ? "Đang gửi phản hồi..." : hasResponded ? "Cập nhật phản hồi" : "Gửi xác nhận"}</button>
        <small className="inv5-privacy-note">Thông tin phản hồi chỉ được chia sẻ với chủ nhân thiệp.</small>
      </form>
    </section>
  );
}

export function PublicInvitation({ data, preview = false, embedded = false }: PublicInvitationProps) {
  const wedding = withDefaultDesign(data);
  const design = wedding.invitationDesign;
  const experience = resolveTemplateExperience(design.templateKey);
  const [copied, setCopied] = useState(false);
  const [copiedAccountId, setCopiedAccountId] = useState<string | null>(null);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const cover = wedding.mediaAssets.find((item) => item.isCover) ?? wedding.mediaAssets[0];
  const coverUrl = resolveMediaUrl(cover?.publicUrl);
  const gallery = wedding.mediaAssets.filter((item) => !item.isCover || wedding.mediaAssets.length === 1);
  const heroImages = wedding.mediaAssets.slice(0, 3).map((item) => ({ ...item, resolvedUrl: resolveMediaUrl(item.publicUrl) })).filter((item) => item.resolvedUrl);
  const giftAccounts = normalizeGiftAccounts(design.giftAccounts);
  const mainDate = wedding.mainDate ? new Date(wedding.mainDate) : null;
  const day = mainDate ? String(mainDate.getDate()).padStart(2, "0") : "--";
  const month = mainDate ? String(mainDate.getMonth() + 1).padStart(2, "0") : "--";
  const year = mainDate ? mainDate.getFullYear() : "----";
  const greeting = wedding.personalization?.greeting || design.greeting;

  const style = {
    "--inv-primary": design.primaryColor,
    "--inv-accent": design.accentColor,
    "--inv-bg": design.backgroundColor,
    "--inv-surface": design.surfaceColor,
    "--inv-text": design.textColor,
  } as CSSProperties;

  const calendarEvent = wedding.events[0];
  function addToCalendar(): void {
    const start = new Date(calendarEvent?.startsAt ?? wedding.mainDate ?? Date.now());
    const end = new Date(calendarEvent?.endsAt ?? start.getTime() + 2 * 60 * 60 * 1000);
    const stamp = (date: Date) => date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
    const content = [
      "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Ngay Doi//Wedding Invitation//VI", "BEGIN:VEVENT",
      `UID:${wedding.id}@ngaydoi.vn`, `DTSTAMP:${stamp(new Date())}`, `DTSTART:${stamp(start)}`, `DTEND:${stamp(end)}`,
      `SUMMARY:${wedding.title}`, `LOCATION:${calendarEvent ? `${calendarEvent.venueName}, ${calendarEvent.address}` : ""}`,
      `DESCRIPTION:${greeting.replace(/\n/g, "\\n")}`, "END:VEVENT", "END:VCALENDAR",
    ].join("\r\n");
    const anchor = document.createElement("a");
    anchor.href = URL.createObjectURL(new Blob([content], { type: "text/calendar;charset=utf-8" }));
    anchor.download = `${wedding.slug}-wedding.ics`;
    anchor.click();
    URL.revokeObjectURL(anchor.href);
  }

  async function writeClipboard(value: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const input = document.createElement("textarea");
      input.value = value;
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.remove();
    }
  }

  async function shareInvitation(): Promise<void> {
    const shareData = { title: wedding.title, text: `${wedding.groomName} & ${wedding.brideName} trân trọng mời bạn đến chung vui.`, url: window.location.href };
    if (navigator.share) {
      await navigator.share(shareData).catch(() => undefined);
      return;
    }
    await writeClipboard(window.location.href);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  }

  async function copyGiftAccount(account: GiftTransferAccount): Promise<void> {
    await writeClipboard(account.accountNumber);
    setCopiedAccountId(account.id);
    window.setTimeout(() => setCopiedAccountId((current) => current === account.id ? null : current), 2400);
  }

  async function toggleMusic(): Promise<void> {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      await audio.play().catch(() => undefined);
      setMusicPlaying(!audio.paused);
    } else {
      audio.pause();
      setMusicPlaying(false);
    }
  }

  const eventIcon = (type: string) => type === "ENGAGEMENT" ? "◇" : type === "ANCESTOR_CEREMONY" ? "⌂" : type === "WEDDING_CEREMONY" ? "♥" : type === "RECEPTION" ? "✦" : "•";

  const sections: Record<InvitationSectionKey, React.ReactNode> = {
    hero: design.showHero ? (
      <section className={`inv4-hero inv8-hero template-${design.templateKey} layout-${experience.layout} photo-${experience.photoTreatment}`}>
        <div className="inv8-hero-media" aria-hidden={!coverUrl}>
          {experience.layout === "story" && heroImages.length > 1 ? (
            <div className="inv8-hero-collage">{heroImages.map((item, index) => <figure className={`photo-${index + 1}`} key={item.id}><img src={item.resolvedUrl ?? ""} alt="" loading={index === 0 ? "eager" : "lazy"} /></figure>)}</div>
          ) : coverUrl ? <img src={coverUrl} alt={cover?.altText ?? `Ảnh cưới của ${wedding.groomName} và ${wedding.brideName}`} loading="eager" /> : <div className="inv8-hero-placeholder"><span>ND</span><small>Thêm ảnh cưới để hoàn thiện mẫu này</small></div>}
        </div>
        <div className="inv4-hero-inner">
          <div className="inv4-ornament">ND</div>
          <div className="inv4-kicker">{design.heroEyebrow}</div>
          {wedding.personalization && <div className="inv5-guest-badge"><span>Thiệp trân trọng gửi</span><strong>{wedding.personalization.displayName}</strong></div>}
          <h1>{wedding.groomName}<span>&</span>{wedding.brideName}</h1>
          <p className="inv4-greeting">{greeting}</p>
          <div className="inv4-date"><div><span>Ngày</span><strong>{day}</strong></div><i /><div><span>Tháng {month}</span><strong>{year}</strong></div></div>
          <div className="inv4-hero-actions">
            {design.showEvents && wedding.events.length > 0 && <a className="inv4-button primary" href="#invitation-events">Xem chương trình</a>}
            {wedding.personalization && !preview && <a className="inv4-button glass" href="#rsvp">Xác nhận tham dự</a>}
            <button className="inv4-button glass" type="button" onClick={shareInvitation}>{copied ? "Đã sao chép" : "Chia sẻ thiệp"}</button>
          </div>
        </div>
      </section>
    ) : null,
    family: design.showFamily && (wedding.showGroomParents || wedding.showBrideParents) ? (
      <section className="inv4-section inv4-family"><div className="inv4-section-head"><span>Hai gia đình</span><h2>Trân trọng báo tin</h2></div><div className="inv4-family-grid">{wedding.showGroomParents && <article><small>Nhà trai</small><p>{wedding.groomFatherName || "Thông tin đang cập nhật"}</p><p>{wedding.groomMotherName || ""}</p></article>}<div className="inv4-family-mark">♥</div>{wedding.showBrideParents && <article><small>Nhà gái</small><p>{wedding.brideFatherName || "Thông tin đang cập nhật"}</p><p>{wedding.brideMotherName || ""}</p></article>}</div></section>
    ) : null,
    story: design.showStory && wedding.story ? <section className="inv4-section inv4-story"><div className="inv4-section-head"><span>Câu chuyện của chúng mình</span><h2>{design.storyTitle}</h2></div><p>{wedding.story}</p></section> : null,
    gallery: design.showGallery && gallery.length > 0 ? <section className="inv4-section inv4-gallery"><div className="inv4-section-head"><span>Album cưới</span><h2>{design.galleryTitle}</h2></div><div className={`inv4-gallery-grid count-${Math.min(gallery.length, 6)} layout-${experience.layout}`}>{gallery.slice(0, 9).map((item, index) => <figure key={item.id} className={index === 0 ? "featured" : ""}><img src={resolveMediaUrl(item.publicUrl) ?? ""} alt={item.altText ?? "Ảnh cưới"} loading={index < 2 ? "eager" : "lazy"} /></figure>)}</div></section> : null,
    countdown: design.showCountdown ? <section className="inv4-section inv4-countdown-section inv8-countdown-section"><div className="inv4-section-head"><span>Save the date</span><h2>{design.countdownTitle}</h2></div><Countdown target={wedding.mainDate} variant={experience.countdownStyle} /><button className="inv4-text-button" type="button" onClick={addToCalendar}>+ Thêm vào lịch</button></section> : null,
    events: design.showEvents ? <section id="invitation-events" className={`inv4-section inv4-events inv8-events style-${experience.eventStyle}`}><div className="inv4-section-head"><span>Chương trình</span><h2>{design.eventsTitle}</h2></div>{wedding.events.length ? <div className="inv8-event-list">{wedding.events.map((event, index) => { const startsAt = new Date(event.startsAt); return <article key={event.id}><div className="inv8-event-date"><strong>{String(startsAt.getDate()).padStart(2, "0")}</strong><span>Tháng {String(startsAt.getMonth() + 1).padStart(2, "0")}</span></div><div className="inv8-event-marker"><span>{eventIcon(event.type)}</span><i /></div><div className="inv8-event-content"><small>{event.side === "BRIDE" ? "Nhà gái" : event.side === "GROOM" ? "Nhà trai" : "Hai gia đình"} · Chương trình {String(index + 1).padStart(2, "0")}</small><h3>{event.title}</h3><p className="inv8-event-time"><strong>{formatDate(event.startsAt, true)}</strong>{event.endsAt ? ` – ${new Intl.DateTimeFormat("vi-VN", { hour: "2-digit", minute: "2-digit" }).format(new Date(event.endsAt))}` : ""}</p><p className="inv8-event-place"><b>{event.venueName}</b><span>{event.address}</span></p>{event.dressCode && <p className="inv4-note"><b>Trang phục</b> {event.dressCode}</p>}{event.note && <p className="inv4-note">{event.note}</p>}<div className="inv4-event-actions">{event.mapUrl && <a href={event.mapUrl} target="_blank" rel="noreferrer">Mở bản đồ ↗</a>}{index === 0 && <button type="button" onClick={addToCalendar}>Thêm vào lịch</button>}</div></div></article>; })}</div> : <p className="inv-empty-copy">Chương trình đang được cập nhật.</p>}</section> : null,
    gift: design.showGift && giftAccounts.length > 0 ? <GiftTransferSection title={design.giftTitle} message={design.giftMessage} accounts={giftAccounts} copiedAccountId={copiedAccountId} onCopy={(account) => void copyGiftAccount(account)} /> : null,
    footer: design.showFooter ? <footer className="inv4-footer"><div className="inv4-ornament small">ND</div><h2>{wedding.groomName} <span>&</span> {wedding.brideName}</h2><p>{design.footerMessage}</p><div className="inv4-footer-actions"><button type="button" onClick={shareInvitation}>{copied ? "Đã sao chép liên kết" : "Chia sẻ ngày vui"}</button>{wedding.memoryAlbum?.publicEnabled && <a href={`/memories/${wedding.memoryAlbum.token}${wedding.personalization ? `?guest=${encodeURIComponent(wedding.personalization.token)}` : ""}`}>Góp ảnh vào album</a>}</div></footer> : null,
  };

  const Root = embedded ? "div" : "main";

  return (
    <Root id={embedded ? undefined : "main-content"} tabIndex={embedded ? undefined : -1} className={`inv4 invitation-template-${design.templateKey} invitation-layout-${experience.layout} invitation-photo-${experience.photoTreatment} heading-${design.headingFont} body-${design.bodyFont} ${embedded ? "is-embedded" : ""}`} style={style}>
      {preview && <div className="inv4-preview-banner">Bản xem trước bảo mật · Chưa phải link công khai</div>}
      {design.musicEnabled && design.musicUrl && <><audio ref={audioRef} src={design.musicUrl} loop preload="none" /><button className={`inv4-music ${musicPlaying ? "playing" : ""}`} type="button" onClick={toggleMusic} aria-label={musicPlaying ? "Tạm dừng nhạc nền" : "Phát nhạc nền"} aria-pressed={musicPlaying}>{musicPlaying ? "Ⅱ" : "♪"}</button></>}
      {design.sectionOrder.map((key) => <div key={key}>{key === "footer" && wedding.personalization && !preview && <PersonalizedRsvpSection personalization={wedding.personalization} events={wedding.events} />}{sections[key]}</div>)}
    </Root>
  );
}
