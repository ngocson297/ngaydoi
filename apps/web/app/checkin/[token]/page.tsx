"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { Alert, ErrorState, PageSkeleton, useConfirm } from "../../../components/ui";
import { ApiError, apiRequest, toUiError, type UiError } from "../../../lib/api";

type SearchGuest = { id: string; fullName: string; salutation: string | null; groupName: string | null; phone: string | null; invitationToken: string | null; rsvp: { status: string; adultCount: number; childCount: number } | null; assignment: { table: { name: string; code: string; zone: string | null }; seatCount: number } | null; checkin: { adultCount: number; childCount: number; checkedInAt: string; checkedOutAt: string | null } | null };
type StationData = { station: { id: string; name: string }; wedding: { title: string; brideName: string; groomName: string }; event: { title: string; startsAt: string; venueName: string } | null; recent: Array<{ id: string; guestId: string; adultCount: number; childCount: number; checkedInAt: string; checkedOutAt: string | null; guest: { fullName: string }; station: { name: string } | null }>; metrics: { guests: number; people: number } };

export default function CheckinPage() {
  const { confirm } = useConfirm();
  const { token } = useParams<{ token: string }>();
  const [data, setData] = useState<StationData | null>(null);
  const [query, setQuery] = useState("");
  const [guests, setGuests] = useState<SearchGuest[]>([]);
  const [selected, setSelected] = useState<SearchGuest | null>(null);
  const [counts, setCounts] = useState({ adults: 1, children: 0 });
  const [scanValue, setScanValue] = useState("");
  const [busy, setBusy] = useState(false);
  const [loading, setLoading] = useState(true);
  const [stationError, setStationError] = useState<UiError | null>(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const scanInput = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [cameraActive, setCameraActive] = useState(false);

  const load = useCallback(async () => {
    setLoading(true); setStationError(null);
    try { setData(await apiRequest<StationData>(`/checkin/stations/${token}`)); }
    catch (reason) { setStationError(toUiError(reason, "Trạm check-in không hoạt động.")); }
    finally { setLoading(false); }
  }, [token]);
  useEffect(() => { void load(); }, [load]);
  useEffect(() => () => { streamRef.current?.getTracks().forEach((track) => track.stop()); }, []);
  useEffect(() => { const timer = window.setTimeout(async () => { if (query.trim().length < 2) { setGuests([]); return; } try { setGuests(await apiRequest<SearchGuest[]>(`/checkin/stations/${token}/search?q=${encodeURIComponent(query.trim())}`)); } catch { setGuests([]); } }, 250); return () => window.clearTimeout(timer); }, [query, token]);

  function choose(guest: SearchGuest): void { setSelected(guest); setCounts({ adults: guest.rsvp?.status === "ATTENDING" ? guest.rsvp.adultCount : 1, children: guest.rsvp?.status === "ATTENDING" ? guest.rsvp.childCount : 0 }); setSuccess(""); }
  async function checkIn(payload: Record<string, unknown>): Promise<void> { setBusy(true); setError(""); try { await apiRequest(`/checkin/stations/${token}/check-in`, { method: "POST", body: JSON.stringify({ ...payload, adultCount: counts.adults, childCount: counts.children }) }); setSuccess(`Đã check-in ${selected?.fullName ?? "khách mời"}.`); setSelected(null); setQuery(""); setGuests([]); setScanValue(""); await load(); window.setTimeout(() => scanInput.current?.focus(), 100); } catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể check-in"); } finally { setBusy(false); } }
  async function checkout(guestId: string): Promise<void> { if (!(await confirm({ title: "Hoàn tác check-in?", description: "Lượt check-in này sẽ được đánh dấu là đã hoàn tác và số liệu khách đến sẽ được cập nhật lại.", confirmLabel: "Hoàn tác", tone: "danger" }))) return; setBusy(true); try { await apiRequest(`/checkin/stations/${token}/check-out`, { method: "POST", body: JSON.stringify({ guestId }) }); await load(); setSuccess("Đã hoàn tác check-in."); } catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể hoàn tác"); } finally { setBusy(false); } }

  async function startCamera(): Promise<void> {
    setError("");
    const BarcodeDetectorCtor = (window as unknown as { BarcodeDetector?: new (options: { formats: string[] }) => { detect(source: HTMLVideoElement): Promise<Array<{ rawValue: string }>> } }).BarcodeDetector;
    if (!BarcodeDetectorCtor || !navigator.mediaDevices?.getUserMedia) {
      setError("Trình duyệt này chưa hỗ trợ quét QR trực tiếp. Bạn vẫn có thể dùng máy quét hoặc tìm khách theo tên.");
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: "environment" } }, audio: false });
      streamRef.current = stream;
      if (videoRef.current) { videoRef.current.srcObject = stream; await videoRef.current.play(); }
      setCameraActive(true);
      const detector = new BarcodeDetectorCtor({ formats: ["qr_code"] });
      const scan = async (): Promise<void> => {
        if (!streamRef.current || !videoRef.current) return;
        try {
          const codes = await detector.detect(videoRef.current);
          const value = codes[0]?.rawValue;
          if (value) {
            stream.getTracks().forEach((track) => track.stop()); streamRef.current = null; setCameraActive(false); setScanValue(value);
            await checkIn({ invitationToken: value.replace(/^.*NDG:/, "NDG:") });
            return;
          }
        } catch { /* keep scanning; manual fallback remains available */ }
        window.setTimeout(() => void scan(), 450);
      };
      void scan();
    } catch {
      setError("Không thể mở camera. Hãy cấp quyền camera hoặc dùng ô tìm kiếm thủ công.");
    }
  }
  function stopCamera(): void { streamRef.current?.getTracks().forEach((track) => track.stop()); streamRef.current = null; setCameraActive(false); }

  function submitScan(event: React.FormEvent): void { event.preventDefault(); const value = scanValue.trim(); if (!value) return; setSelected(null); setCounts({ adults: 1, children: 0 }); void checkIn({ invitationToken: value.replace(/^.*NDG:/, "NDG:") }); }

  if (loading && !data) return <main className="checkin-shell"><PageSkeleton cards={2} /></main>;
  if (stationError || !data) return <main className="checkin-shell"><section className="checkin-card"><ErrorState title="Không thể mở trạm check-in" description={stationError?.message ?? "Trạm check-in không còn khả dụng."} requestId={stationError?.requestId} onRetry={() => void load()} homeHref="/" homeLabel="Về trang chủ" compact /></section></main>;
  return <main className="checkin-shell">
    <header className="checkin-header"><div><span>NGÀY ĐÔI · EVENT OPS</span><h1>{data.wedding.groomName} & {data.wedding.brideName}</h1><p>{data.event?.title ?? "Toàn bộ đám cưới"} · {data.station.name}</p></div><div className="checkin-live"><strong>{data.metrics.people}</strong><span>người đã đến</span></div></header>
    <div className="checkin-layout">
      <section className="checkin-card checkin-main-card"><div className="checkin-tabs"><strong>Quét QR hoặc tìm khách</strong><span>Luôn có thể nhập tên nếu camera không hoạt động</span></div>
        {error ? <Alert tone="error">{error}</Alert> : null}{success ? <Alert tone="success">{success}</Alert> : null}
        <div className="camera-actions"><button className="btn btn-secondary" type="button" onClick={() => cameraActive ? stopCamera() : void startCamera()}>{cameraActive ? "Tắt camera" : "Bật camera quét QR"}</button><span>Hoạt động trên trình duyệt có hỗ trợ BarcodeDetector; luôn có phương án tìm thủ công.</span></div>{cameraActive && <div className="camera-preview"><video muted playsInline ref={videoRef} /><div>Đưa mã QR vào giữa khung hình</div></div>}<form className="scan-form" onSubmit={submitScan}><label>Mã QR / mã khách<input autoFocus ref={scanInput} value={scanValue} onChange={(e) => setScanValue(e.target.value)} placeholder="Quét mã QR hoặc dán mã NDG:..." /></label><button className="btn btn-primary" disabled={busy || !scanValue.trim()}>Check-in bằng mã</button></form>
        <div className="checkin-divider"><span>hoặc tìm thủ công</span></div>
        <label className="guest-search-label">Tên, số điện thoại hoặc email<input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Nhập ít nhất 2 ký tự..." /></label>
        <div className="station-search-results">{guests.map((guest) => <button key={guest.id} className={selected?.id === guest.id ? "selected" : ""} onClick={() => choose(guest)}><span className="guest-avatar">{guest.fullName.charAt(0)}</span><div><strong>{guest.fullName}</strong><small>{guest.groupName || "Chưa phân nhóm"}{guest.assignment ? ` · ${guest.assignment.table.name}` : " · Chưa có bàn"}</small></div>{guest.checkin && !guest.checkin.checkedOutAt ? <em>Đã đến</em> : <i>Chọn</i>}</button>)}</div>
        {selected && <div className="checkin-confirm"><div><span>Khách được chọn</span><h2>{selected.fullName}</h2><p>{selected.assignment ? `Bàn: ${selected.assignment.table.name}${selected.assignment.table.zone ? ` · ${selected.assignment.table.zone}` : ""}` : "Khách chưa được phân bàn"}</p></div>{selected.checkin && !selected.checkin.checkedOutAt ? <div className="alert alert-success">Khách đã check-in lúc {new Date(selected.checkin.checkedInAt).toLocaleTimeString("vi-VN")}</div> : <><div className="people-stepper"><label>Người lớn<input type="number" min={0} max={20} value={counts.adults} onChange={(e) => setCounts({ ...counts, adults: Number(e.target.value) })} /></label><label>Trẻ em<input type="number" min={0} max={20} value={counts.children} onChange={(e) => setCounts({ ...counts, children: Number(e.target.value) })} /></label></div><button className="btn btn-primary full-button" disabled={busy || counts.adults + counts.children < 1} onClick={() => void checkIn({ guestId: selected.id })}>{busy ? "Đang ghi nhận..." : `Xác nhận ${counts.adults + counts.children} người đến`}</button></>}</div>}
      </section>
      <aside className="checkin-card recent-checkins"><div className="panel-head"><div><h2>Khách vừa đến</h2><p className="muted-small">Cập nhật theo thời gian thực sau mỗi thao tác.</p></div><button onClick={() => void load()}>Làm mới</button></div>{data.recent.length ? data.recent.map((record) => <article key={record.id} className={record.checkedOutAt ? "checked-out" : ""}><div><strong>{record.guest.fullName}</strong><span>{record.adultCount + record.childCount} người · {new Date(record.checkedInAt).toLocaleTimeString("vi-VN")}</span></div>{record.checkedOutAt ? <em>Đã hoàn tác</em> : <button disabled={busy} onClick={() => void checkout(record.guestId)}>Hoàn tác</button>}</article>) : <div className="empty-panel"><h3>Chưa có khách đến</h3><p>Lượt check-in mới sẽ xuất hiện tại đây.</p></div>}</aside>
    </div>
  </main>;
}
