"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { AppShell } from "../../../../components/app-shell";
import { AuthGate } from "../../../../components/auth-gate";
import { useAuth } from "../../../../components/auth-provider";
import { API_URL, ApiError } from "../../../../lib/api";
import type { EventOpsOverview, GuestOperation, SeatingTable } from "../../../../lib/event-operations";
import { occupiedSeats } from "../../../../lib/event-operations";

const eventLabel = (data: EventOpsOverview | null, eventId: string): string => !eventId ? "Toàn bộ đám cưới" : data?.events.find((item) => item.id === eventId)?.title ?? "Sự kiện";
const download = (content: string, filename: string): void => { const url = URL.createObjectURL(new Blob([content], { type: "text/csv;charset=utf-8" })); const a = document.createElement("a"); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };

type Tab = "tables" | "guests" | "checkin" | "print";

function EventOperationsContent() {
  const { id: weddingId } = useParams<{ id: string }>();
  const { authRequest } = useAuth();
  const [data, setData] = useState<EventOpsOverview | null>(null);
  const [tab, setTab] = useState<Tab>("tables");
  const [eventId, setEventId] = useState("");
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [query, setQuery] = useState("");
  const [tableDraft, setTableDraft] = useState({ name: "", code: "", capacity: 10, zone: "", shape: "ROUND", note: "" });
  const [stationName, setStationName] = useState("Bàn đón khách chính");

  const load = useCallback(async () => {
    try {
      const result = await authRequest<EventOpsOverview>(`/weddings/${weddingId}/event-operations${eventId ? `?eventId=${encodeURIComponent(eventId)}` : ""}`);
      setData(result); setError("");
    } catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể tải vận hành sự kiện"); }
    finally { setLoading(false); }
  }, [authRequest, eventId, weddingId]);

  useEffect(() => { void load(); }, [load]);
  const canEdit = data?.access === "OWNER" || data?.access === "EDIT";
  const filteredGuests = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!data) return [];
    return data.guests.filter((guest) => !q || [guest.fullName, guest.groupName, guest.phone, guest.email].some((value) => value?.toLowerCase().includes(q)));
  }, [data, query]);
  const unassigned = filteredGuests.filter((guest) => !guest.assignment);

  function flash(message: string): void { setSuccess(message); window.setTimeout(() => setSuccess(""), 3200); }
  async function createTable(event: React.FormEvent): Promise<void> {
    event.preventDefault(); setBusy(true); setError("");
    try { await authRequest(`/weddings/${weddingId}/event-operations/tables`, { method: "POST", body: JSON.stringify({ ...tableDraft, eventId: eventId || undefined }) }); setTableDraft({ name: "", code: "", capacity: 10, zone: "", shape: "ROUND", note: "" }); await load(); flash("Đã tạo bàn mới."); }
    catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể tạo bàn"); }
    finally { setBusy(false); }
  }
  async function updateTable(table: SeatingTable, patch: Record<string, unknown>): Promise<void> {
    setBusy(true); setError("");
    try { await authRequest(`/weddings/${weddingId}/event-operations/tables/${table.id}`, { method: "PATCH", body: JSON.stringify(patch) }); await load(); flash("Đã cập nhật bàn."); }
    catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể cập nhật bàn"); }
    finally { setBusy(false); }
  }
  async function deleteTable(table: SeatingTable): Promise<void> {
    if (!window.confirm(`Xóa ${table.name}?`)) return;
    setBusy(true); try { await authRequest(`/weddings/${weddingId}/event-operations/tables/${table.id}`, { method: "DELETE" }); await load(); flash("Đã xóa bàn."); }
    catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể xóa bàn"); } finally { setBusy(false); }
  }
  async function assign(guest: GuestOperation, tableId: string): Promise<void> {
    const rsvp = guest.invitation?.rsvp;
    const seatCount = rsvp?.status === "ATTENDING" ? Math.max(1, rsvp.adultCount + rsvp.childCount) : 1;
    setBusy(true); setError("");
    try { await authRequest(`/weddings/${weddingId}/event-operations/assignments`, { method: "POST", body: JSON.stringify({ guestId: guest.id, tableId, seatCount }) }); await load(); }
    catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể phân bàn"); } finally { setBusy(false); }
  }
  async function unassign(guest: GuestOperation): Promise<void> {
    if (!guest.assignment) return; setBusy(true);
    try { await authRequest(`/weddings/${weddingId}/event-operations/assignments/${guest.assignment.id}`, { method: "DELETE" }); await load(); }
    catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể bỏ phân bàn"); } finally { setBusy(false); }
  }
  async function autoAssign(): Promise<void> {
    if (!window.confirm("Tự động phân các khách chưa có bàn theo sức chứa hiện tại?")) return;
    setBusy(true); setError("");
    try { const result = await authRequest<{ assigned: number; remaining: number }>(`/weddings/${weddingId}/event-operations/auto-assign`, { method: "POST", body: JSON.stringify({ eventId: eventId || undefined }) }); await load(); flash(`Đã phân ${result.assigned} khách. Còn ${result.remaining} khách chưa có bàn.`); }
    catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể tự động phân bàn"); } finally { setBusy(false); }
  }
  async function createStation(event: React.FormEvent): Promise<void> {
    event.preventDefault(); setBusy(true); setError("");
    try { await authRequest(`/weddings/${weddingId}/event-operations/stations`, { method: "POST", body: JSON.stringify({ name: stationName, eventId: eventId || undefined }) }); await load(); flash("Đã tạo trạm check-in."); }
    catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể tạo trạm"); } finally { setBusy(false); }
  }
  async function toggleStation(id: string, status: string): Promise<void> {
    setBusy(true); try { await authRequest(`/weddings/${weddingId}/event-operations/stations/${id}`, { method: "PATCH", body: JSON.stringify({ status: status === "ACTIVE" ? "DISABLED" : "ACTIVE" }) }); await load(); }
    catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể cập nhật trạm"); } finally { setBusy(false); }
  }
  async function exportCsv(): Promise<void> {
    try { const result = await authRequest<string>(`/weddings/${weddingId}/event-operations/export${eventId ? `?eventId=${eventId}` : ""}`); download(result, `ngaydoi-event-operations-${Date.now()}.csv`); }
    catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể xuất CSV"); }
  }

  if (loading) return <AppShell active="eventOps" weddingId={weddingId}><div className="empty-panel"><div className="spinner" /><p>Đang chuẩn bị khu vực vận hành...</p></div></AppShell>;
  if (!data) return <AppShell active="eventOps" weddingId={weddingId}><div className="alert alert-error">{error || "Không tải được dữ liệu"}</div></AppShell>;

  return <AppShell active="eventOps" weddingId={weddingId}>
    <a className="back-link" href={`/weddings/${weddingId}`}>← Về wedding workspace</a>
    <div className="ops-hero">
      <div><span className="eyebrow">Event Operations</span><h1>Phân bàn & check-in</h1><p>Quản lý sơ đồ bàn, phân khách và theo dõi khách đến trong một màn hình dễ sử dụng.</p></div>
      <div className="ops-hero-actions"><button className="btn btn-secondary" onClick={() => void exportCsv()}>Xuất CSV</button><a className="btn btn-primary" href="#stations" onClick={() => setTab("checkin")}>Mở check-in</a></div>
    </div>
    <div className="ops-scope panel"><label>Phạm vi vận hành<select value={eventId} onChange={(e) => { setEventId(e.target.value); setLoading(true); }}><option value="">Toàn bộ đám cưới</option>{data.events.map((item) => <option key={item.id} value={item.id}>{item.title} · {item.venueName}</option>)}</select></label><div><span>Đang quản lý</span><strong>{eventLabel(data, eventId)}</strong></div></div>
    {error && <div className="alert alert-error">{error}</div>}{success && <div className="alert alert-success">{success}</div>}
    <div className="metric-grid ops-metrics"><article className="metric"><span>Số bàn</span><strong>{data.metrics.tables}</strong></article><article className="metric"><span>Ghế đã phân</span><strong>{data.metrics.assignedSeats}<small>/{data.metrics.capacity}</small></strong></article><article className="metric"><span>Chưa có bàn</span><strong>{data.metrics.unassignedGuests}</strong></article><article className="metric"><span>Đã đến</span><strong>{data.metrics.checkedInPeople}<small> người</small></strong></article></div>
    <nav className="workspace-tabs ops-tabs">{(["tables", "guests", "checkin", "print"] as Tab[]).map((key) => <button key={key} className={tab === key ? "active" : ""} onClick={() => setTab(key)}>{{ tables: "Sơ đồ bàn", guests: "Phân khách", checkin: "Trạm check-in", print: "Thẻ QR" }[key]}</button>)}</nav>

    {tab === "tables" && <div className="ops-layout">
      <section className="ops-table-grid">{data.tables.length ? data.tables.map((table) => { const occupied = occupiedSeats(table); return <article className={`seating-table-card ${occupied >= table.capacity ? "full" : ""}`} key={table.id}><header><div><span>{table.code}</span><h2>{table.name}</h2><p>{table.zone || "Chưa đặt khu vực"} · {table.shape}</p></div><strong>{occupied}/{table.capacity}</strong></header><div className="capacity-bar"><i style={{ width: `${Math.min(100, occupied / table.capacity * 100)}%` }} /></div><div className="assigned-guest-list">{table.assignments.length ? table.assignments.map((item) => <div key={item.id}><span>{item.guest?.fullName}</span><small>{item.seatCount} ghế</small></div>) : <p>Chưa có khách tại bàn này.</p>}</div>{canEdit && <footer><button disabled={busy} onClick={() => { const value = window.prompt("Sức chứa mới", String(table.capacity)); if (value) void updateTable(table, { capacity: Number(value) }); }}>Sửa sức chứa</button><button className="danger-link" disabled={busy || Boolean(table.assignments.length)} onClick={() => void deleteTable(table)}>Xóa</button></footer>}</article>; }) : <div className="empty-panel"><div className="empty-icon">⌑</div><h3>Chưa có bàn tiệc</h3><p>Tạo bàn đầu tiên để bắt đầu phân khách.</p></div>}</section>
      {canEdit && <form className="panel ops-form" onSubmit={(e) => void createTable(e)}><div><span className="eyebrow">Bàn mới</span><h2>Tạo bàn tiệc</h2><p className="muted-small">Tên và mã bàn nên ngắn, dễ đọc tại khu vực đón khách.</p></div><label>Tên bàn<input required value={tableDraft.name} onChange={(e) => setTableDraft({ ...tableDraft, name: e.target.value, code: tableDraft.code || e.target.value.toUpperCase().replace(/\s+/g, "-") })} placeholder="Bàn Hoa Hồng" /></label><div className="form-grid two"><label>Mã bàn<input required value={tableDraft.code} onChange={(e) => setTableDraft({ ...tableDraft, code: e.target.value.toUpperCase() })} placeholder="A01" /></label><label>Sức chứa<input type="number" min={1} max={50} value={tableDraft.capacity} onChange={(e) => setTableDraft({ ...tableDraft, capacity: Number(e.target.value) })} /></label><label>Khu vực<input value={tableDraft.zone} onChange={(e) => setTableDraft({ ...tableDraft, zone: e.target.value })} placeholder="Sảnh A" /></label><label>Kiểu bàn<select value={tableDraft.shape} onChange={(e) => setTableDraft({ ...tableDraft, shape: e.target.value })}><option value="ROUND">Bàn tròn</option><option value="RECTANGLE">Bàn chữ nhật</option><option value="LONG">Bàn dài</option><option value="OTHER">Khác</option></select></label></div><label>Ghi chú<textarea rows={3} value={tableDraft.note} onChange={(e) => setTableDraft({ ...tableDraft, note: e.target.value })} placeholder="Gần sân khấu, dành cho gia đình..." /></label><button className="btn btn-primary full-button" disabled={busy}>Tạo bàn</button></form>}
    </div>}

    {tab === "guests" && <section className="panel"><div className="panel-head ops-panel-head"><div><h2>Phân khách vào bàn</h2><p className="muted-small">Hệ thống mặc định lấy số ghế từ RSVP. Bạn có thể đổi bàn bất kỳ lúc nào.</p></div>{canEdit && <button className="btn btn-secondary" disabled={busy || !data.tables.length || !unassigned.length} onClick={() => void autoAssign()}>Tự động phân bàn</button>}</div><div className="ops-filter"><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Tìm tên, nhóm, điện thoại hoặc email..." /><span>{filteredGuests.length} khách</span></div><div className="guest-assignment-list">{filteredGuests.map((guest) => <article key={guest.id}><div className="guest-avatar">{guest.fullName.charAt(0).toUpperCase()}</div><div className="guest-assignment-info"><strong>{guest.fullName}</strong><span>{guest.groupName || "Chưa phân nhóm"} · {guest.invitation?.rsvp?.status === "ATTENDING" ? `${guest.invitation.rsvp.adultCount + guest.invitation.rsvp.childCount} người tham dự` : "Chưa xác nhận tham dự"}</span></div><div className="guest-table-control">{canEdit ? <select value={guest.assignment ? data.tables.find((table) => table.assignments.some((item) => item.id === guest.assignment?.id))?.id ?? "" : ""} onChange={(e) => e.target.value ? void assign(guest, e.target.value) : void unassign(guest)}><option value="">Chưa có bàn</option>{data.tables.map((table) => <option key={table.id} value={table.id}>{table.name} · {occupiedSeats(table)}/{table.capacity}</option>)}</select> : <span>{guest.assignment ? "Đã phân bàn" : "Chưa có bàn"}</span>}</div></article>)}</div></section>}

    {tab === "checkin" && <div className="ops-layout" id="stations"><section className="panel"><div className="panel-head"><div><h2>Trạm check-in</h2><p className="muted-small">Mỗi trạm có một link riêng. Mở link trên điện thoại hoặc máy tính bảng của nhân viên đón khách.</p></div></div><div className="station-list">{data.stations.length ? data.stations.map((station) => <article key={station.id}><div><span className={`mini-status ${station.status === "ACTIVE" ? "accepted" : "revoked"}`}>{station.status === "ACTIVE" ? "Đang hoạt động" : "Đã tắt"}</span><h3>{station.name}</h3><p>Lần sử dụng gần nhất: {station.lastUsedAt ? new Date(station.lastUsedAt).toLocaleString("vi-VN") : "Chưa sử dụng"}</p></div><div><a className="btn btn-primary" target="_blank" href={`/checkin/${station.token}`}>Mở trạm ↗</a>{canEdit && <button className="btn btn-secondary" disabled={busy} onClick={() => void toggleStation(station.id, station.status)}>{station.status === "ACTIVE" ? "Tạm dừng" : "Bật lại"}</button>}</div></article>) : <div className="empty-panel"><h3>Chưa có trạm check-in</h3><p>Tạo một trạm cho quầy đón khách chính.</p></div>}</div></section>{canEdit && <form className="panel ops-form" onSubmit={(e) => void createStation(e)}><span className="eyebrow">Thiết bị mới</span><h2>Tạo trạm check-in</h2><label>Tên trạm<input required value={stationName} onChange={(e) => setStationName(e.target.value)} /></label><p className="form-note">Gợi ý: “Quầy đón khách chính”, “Sảnh A” hoặc “Cửa VIP”.</p><button className="btn btn-primary full-button" disabled={busy}>Tạo trạm</button></form>}</div>}

    {tab === "print" && <section className="panel qr-print-section"><div className="panel-head ops-panel-head"><div><h2>Thẻ QR check-in</h2><p className="muted-small">In hoặc lưu các thẻ này. Nhân viên quét mã tại trạm check-in để tìm đúng khách.</p></div><button className="btn btn-primary no-print" onClick={() => window.print()}>In thẻ QR</button></div><div className="qr-card-grid">{data.guests.filter((guest) => guest.invitation?.token).map((guest) => { const table = data.tables.find((item) => item.assignments.some((assignment) => assignment.guestId === guest.id)); return <article className="qr-guest-card" key={guest.id}><div><span>NGÀY ĐÔI · CHECK-IN</span><h3>{guest.fullName}</h3><p>{eventLabel(data, eventId)}</p><strong>{table ? `${table.name}${table.zone ? ` · ${table.zone}` : ""}` : "Chưa phân bàn"}</strong></div><img alt={`QR check-in của ${guest.fullName}`} src={`${API_URL}/checkin/guest-qr/${guest.invitation?.token}.svg`} /></article>; })}</div></section>}
  </AppShell>;
}

export default function EventOperationsPage() { return <AuthGate><EventOperationsContent /></AuthGate>; }
