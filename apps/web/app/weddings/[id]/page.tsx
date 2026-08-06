"use client";

import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { AppShell } from "../../../components/app-shell";
import { AuthGate } from "../../../components/auth-gate";
import { useAuth } from "../../../components/auth-provider";
import { Alert, Button, ConfirmDialog, DetailPageSkeleton, ErrorState, FormActions, Tabs, tabPanelProps, useUnsavedChangesGuard, useToast } from "../../../components/ui";
import { ApiError, toUiError, type UiError } from "../../../lib/api";
import {
  formatDate,
  statusClasses,
  statusLabels,
  toDateInput,
  toLocalInput,
} from "../../../lib/weddings";
import type { Collaborator, EventType, WeddingDetail, WeddingEvent, WeddingSide, WeddingStatus } from "../../../lib/weddings";

type WorkspaceTab = "overview" | "details" | "events" | "team" | "lifecycle";

const eventTypeLabels: Record<EventType, string> = {
  ENGAGEMENT: "Lễ đính hôn",
  ANCESTOR_CEREMONY: "Lễ gia tiên",
  WEDDING_CEREMONY: "Lễ thành hôn",
  RECEPTION: "Tiệc cưới",
  OTHER: "Sự kiện khác",
};

const sideLabels: Record<WeddingSide, string> = { SHARED: "Chung", BRIDE: "Nhà gái", GROOM: "Nhà trai" };

const initialDetails = {
  title: "", brideName: "", groomName: "", slug: "", mainDate: "", timezone: "Asia/Ho_Chi_Minh",
  brideFatherName: "", brideMotherName: "", groomFatherName: "", groomMotherName: "",
  showBrideParents: true, showGroomParents: true, story: "",
};

function emptyEvent(): Omit<WeddingEvent, "id"> {
  return {
    type: "RECEPTION",
    side: "SHARED",
    title: "Tiệc cưới",
    startsAt: "",
    endsAt: null,
    timezone: "Asia/Ho_Chi_Minh",
    venueName: "",
    address: "",
    mapUrl: null,
    dressCode: null,
    note: null,
    sortOrder: 0,
  };
}

function WorkspaceContent() {
  const { authRequest } = useAuth();
  const { notify } = useToast();
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const weddingId = params.id;
  const [wedding, setWedding] = useState<WeddingDetail | null>(null);
  const [tab, setTab] = useState<WorkspaceTab>("overview");
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [loadError, setLoadError] = useState<UiError | null>(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [details, setDetails] = useState(initialDetails);
  const [detailsBaseline, setDetailsBaseline] = useState(initialDetails);
  const [eventDraft, setEventDraft] = useState(emptyEvent());
  const [eventBaseline, setEventBaseline] = useState(emptyEvent());
  const [editingEventId, setEditingEventId] = useState<string | null>(null);
  const [collaborator, setCollaborator] = useState({ email: "", permission: "EDIT" as "VIEW" | "EDIT" });
  const [duplicate, setDuplicate] = useState({ title: "", slug: "" });
  const [deleteEventTarget, setDeleteEventTarget] = useState<string | null>(null);
  const [revokeTarget, setRevokeTarget] = useState<Collaborator | null>(null);

  const syncDetails = useCallback((data: WeddingDetail) => {
    const nextDetails = {
      title: data.title,
      brideName: data.brideName,
      groomName: data.groomName,
      slug: data.slug,
      mainDate: toDateInput(data.mainDate),
      timezone: data.timezone,
      brideFatherName: data.brideFatherName ?? "",
      brideMotherName: data.brideMotherName ?? "",
      groomFatherName: data.groomFatherName ?? "",
      groomMotherName: data.groomMotherName ?? "",
      showBrideParents: data.showBrideParents,
      showGroomParents: data.showGroomParents,
      story: data.story ?? "",
    };
    setDetails(nextDetails);
    setDetailsBaseline(nextDetails);
  }, []);

  const load = useCallback(async () => {
    try {
      const data = await authRequest<WeddingDetail>(`/weddings/${weddingId}`);
      setWedding(data);
      syncDetails(data);
      setDuplicate({ title: `${data.title} - Bản sao`, slug: `${data.slug}-copy` });
      setEventDraft((current) => ({ ...current, timezone: data.timezone }));
      setEventBaseline((current) => ({ ...current, timezone: data.timezone }));
      setLoadError(null);
    } catch (reason) {
      setLoadError(toUiError(reason, "Không thể tải wedding workspace."));
    } finally {
      setLoading(false);
    }
  }, [authRequest, syncDetails, weddingId]);

  useEffect(() => { void load(); }, [load]);

  const canEdit = wedding?.access === "OWNER" || wedding?.access === "EDIT";
  const isOwner = wedding?.access === "OWNER";
  const detailsDirty = useMemo(() => JSON.stringify(details) !== JSON.stringify(detailsBaseline), [details, detailsBaseline]);
  const eventDirty = useMemo(() => JSON.stringify(eventDraft) !== JSON.stringify(eventBaseline), [eventBaseline, eventDraft]);
  const guard = useUnsavedChangesGuard(Boolean(canEdit) && (detailsDirty || eventDirty) && !busy);

  const lifecycleOptions = useMemo((): Array<{ status: WeddingStatus; label: string; kind?: string }> => {
    if (!wedding) return [];
    switch (wedding.status) {
      case "DRAFT": return [{ status: "READY_FOR_REVIEW", label: "Gửi chờ duyệt" }, { status: "ARCHIVED", label: "Lưu trữ", kind: "secondary" }];
      case "READY_FOR_REVIEW": return [{ status: "DRAFT", label: "Quay lại bản nháp", kind: "secondary" }, { status: "ARCHIVED", label: "Lưu trữ", kind: "secondary" }];
      case "PUBLISHED": return [{ status: "SUSPENDED", label: "Tạm ngưng", kind: "secondary" }, { status: "EXPIRED", label: "Đánh dấu hết hạn", kind: "secondary" }, { status: "ARCHIVED", label: "Lưu trữ", kind: "secondary" }];
      case "SUSPENDED": return [{ status: "EXPIRED", label: "Đánh dấu hết hạn", kind: "secondary" }];
      case "EXPIRED": return [{ status: "DRAFT", label: "Mở lại thành bản nháp" }, { status: "ARCHIVED", label: "Lưu trữ", kind: "secondary" }];
      case "ARCHIVED": return [{ status: "DRAFT", label: "Khôi phục bản nháp" }];
    }
    return [];
  }, [wedding]);

  function flash(message: string): void {
    setSuccess(message);
    window.setTimeout(() => setSuccess(""), 3500);
  }

  async function saveDetails(event: FormEvent): Promise<void> {
    event.preventDefault();
    setBusy(true); setError("");
    try {
      await authRequest(`/weddings/${weddingId}`, {
        method: "PATCH",
        body: JSON.stringify({
          ...details,
          mainDate: new Date(`${details.mainDate}T00:00:00+07:00`).toISOString(),
        }),
      });
      await load();
      flash("Đã lưu thông tin wedding.");
    } catch (reason) {
      setError(reason instanceof ApiError ? reason.message : "Không thể lưu thay đổi");
    } finally { setBusy(false); }
  }

  function beginEditEvent(item: WeddingEvent): void {
    setEditingEventId(item.id);
    const nextDraft = {
      ...item,
      startsAt: toLocalInput(item.startsAt),
      endsAt: item.endsAt ? toLocalInput(item.endsAt) : null,
    };
    setEventDraft(nextDraft);
    setEventBaseline(nextDraft);
    guard.requestAction(() => setTab("events"));
    document.getElementById("event-form")?.scrollIntoView({ behavior: "smooth" });
  }

  function resetEventForm(): void {
    setEditingEventId(null);
    const nextDraft = { ...emptyEvent(), timezone: wedding?.timezone ?? "Asia/Ho_Chi_Minh" };
    setEventDraft(nextDraft);
    setEventBaseline(nextDraft);
  }

  async function saveEvent(event: FormEvent): Promise<void> {
    event.preventDefault();
    setBusy(true); setError("");
    try {
      const payload = {
        ...eventDraft,
        startsAt: new Date(eventDraft.startsAt).toISOString(),
        endsAt: eventDraft.endsAt ? new Date(eventDraft.endsAt).toISOString() : undefined,
        mapUrl: eventDraft.mapUrl || undefined,
        dressCode: eventDraft.dressCode || undefined,
        note: eventDraft.note || undefined,
      };
      await authRequest(`/weddings/${weddingId}/events${editingEventId ? `/${editingEventId}` : ""}`, {
        method: editingEventId ? "PATCH" : "POST",
        body: JSON.stringify(payload),
      });
      resetEventForm();
      await load();
      flash(editingEventId ? "Đã cập nhật sự kiện." : "Đã thêm sự kiện.");
    } catch (reason) {
      setError(reason instanceof ApiError ? reason.message : "Không thể lưu sự kiện");
    } finally { setBusy(false); }
  }

  async function deleteEvent(): Promise<void> {
    if (!deleteEventTarget) return;
    setBusy(true); setError("");
    try {
      await authRequest(`/weddings/${weddingId}/events/${deleteEventTarget}`, { method: "DELETE" });
      setDeleteEventTarget(null);
      await load();
      flash("Đã xóa sự kiện.");
    } catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể xóa sự kiện"); }
    finally { setBusy(false); }
  }

  async function changeLifecycle(status: WeddingStatus): Promise<void> {
    setBusy(true); setError("");
    try {
      await authRequest(`/weddings/${weddingId}/lifecycle`, { method: "POST", body: JSON.stringify({ status }) });
      await load();
      flash(`Đã chuyển trạng thái sang “${statusLabels[status]}”.`);
    } catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể đổi trạng thái"); }
    finally { setBusy(false); }
  }

  async function requestPublish(): Promise<void> {
    const requiresPublishReview = wedding?.activePlan?.requiresPublishReview ?? false;
    setBusy(true); setError("");
    try {
      await authRequest(`/weddings/${weddingId}/publish-request`, { method: "POST" });
      await load();
      flash(requiresPublishReview ? "Đã gửi yêu cầu xuất bản. Đội ngũ Ngày Đôi sẽ kiểm tra thiệp." : "Thiệp đã được xuất bản.");
    } catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể gửi yêu cầu xuất bản"); }
    finally { setBusy(false); }
  }

  async function inviteCollaborator(event: FormEvent): Promise<void> {
    event.preventDefault();
    setBusy(true); setError("");
    try {
      await authRequest(`/weddings/${weddingId}/collaborators`, { method: "POST", body: JSON.stringify(collaborator) });
      setCollaborator({ email: "", permission: "EDIT" });
      await load();
      flash("Đã tạo lời mời cộng tác.");
    } catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể gửi lời mời"); }
    finally { setBusy(false); }
  }

  async function revokeCollaborator(): Promise<void> {
    if (!revokeTarget) return;
    setBusy(true); setError("");
    try {
      await authRequest(`/weddings/${weddingId}/collaborators/${revokeTarget.id}`, { method: "DELETE" });
      setRevokeTarget(null);
      await load();
      flash("Đã thu hồi quyền cộng tác.");
    } catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể thu hồi quyền"); }
    finally { setBusy(false); }
  }

  async function copyInvite(token: string): Promise<void> {
    await navigator.clipboard.writeText(`${window.location.origin}/collaborate/${token}`);
    notify({ tone: "success", title: "Đã sao chép link mời", message: "Bạn có thể gửi link này cho cộng tác viên ngay." });
  }

  async function duplicateWedding(event: FormEvent): Promise<void> {
    event.preventDefault();
    setBusy(true); setError("");
    try {
      const copy = await authRequest<{ id: string }>(`/weddings/${weddingId}/duplicate`, { method: "POST", body: JSON.stringify(duplicate) });
      router.push(`/weddings/${copy.id}`);
    } catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể nhân bản wedding"); }
    finally { setBusy(false); }
  }

  if (loading && !wedding) return <AppShell active="weddings" weddingId={weddingId}><DetailPageSkeleton /></AppShell>;
  if (!wedding) return <AppShell active="weddings" weddingId={weddingId}><ErrorState title="Không thể mở wedding workspace" description={loadError?.message ?? "Wedding không tồn tại hoặc bạn không còn quyền truy cập."} requestId={loadError?.requestId} onRetry={() => void load()} homeHref="/dashboard" homeLabel="Về dashboard" /></AppShell>;

  return (
    <AppShell active="weddings" weddingId={weddingId}>
      <a className="back-link" href="/dashboard">← Tất cả đám cưới</a>
      <div className="workspace-header">
        <div>
          <div className="workspace-title-row"><h1>{wedding.groomName} & {wedding.brideName}</h1><span className={`status-pill ${statusClasses[wedding.status]}`}>{statusLabels[wedding.status]}</span></div>
          <p>{wedding.title} · {formatDate(wedding.mainDate)} · Quyền: {wedding.access === "OWNER" ? "Chủ sở hữu" : wedding.access === "EDIT" ? "Chỉnh sửa" : "Chỉ xem"}</p>
        </div>
        <div className="dash-actions">
          {wedding.status === "PUBLISHED" && <a className="btn btn-secondary wedding-view-button" href={`/i/${wedding.slug}`} target="_blank" rel="noreferrer"><span aria-hidden="true">◉</span> Xem thiệp ↗</a>}
          <div className="workspace-primary-actions">{isOwner && <a className="btn btn-secondary" href={`/pricing?weddingId=${weddingId}`}>{wedding.activePlan ? "Nâng cấp gói" : "Chọn gói"}</a>}<a className="btn btn-secondary" href={`/weddings/${weddingId}/planning`}>Kế hoạch cưới</a><a className="btn btn-secondary" href={`/weddings/${weddingId}/guests`}>Khách & RSVP</a><a className="btn btn-secondary" href={`/weddings/${weddingId}/event-operations`}>Phân bàn & check-in</a><a className="btn btn-secondary" href={`/weddings/${weddingId}/memories`}>Album kỷ niệm</a><a className="btn btn-primary" href={`/weddings/${weddingId}/invitation`}>{canEdit ? "Thiết kế thiệp" : "Xem thiết kế"} →</a></div>
        </div>
      </div>

      {loadError && <Alert tone="error" title="Dữ liệu chưa được làm mới" requestId={loadError.requestId}>{loadError.message}</Alert>}
      {error && <Alert tone="error">{error}</Alert>}
      {success && <Alert tone="success">{success}</Alert>}

      <Tabs<WorkspaceTab>
        id="workspace-tabs"
        label="Khu vực quản lý wedding"
        className="workspace-tabs"
        value={tab}
        onChange={(key) => guard.requestAction(() => { setDetails(detailsBaseline); setEventDraft(eventBaseline); setTab(key); })}
        items={[
          { value: "overview", label: "Tổng quan" },
          { value: "details", label: "Cặp đôi & gia đình" },
          { value: "events", label: `Sự kiện (${wedding.events.length})` },
          { value: "team", label: "Cộng tác" },
          { value: "lifecycle", label: "Trạng thái" },
        ]}
      />

      {tab === "overview" && (
        <div className="workspace-layout" {...tabPanelProps("workspace-tabs", "overview")}>
          <section className="panel">
            <div className="panel-head"><div><h2>Tiến độ thiết lập</h2><p className="muted-small">Hoàn thành các mục bắt buộc trước khi gửi duyệt.</p></div><strong>{wedding.checklist.completed}/{wedding.checklist.required}</strong></div>
            <div className="checklist-list">
              {wedding.checklist.items.map((item) => <button key={item.key} onClick={() => guard.requestAction(() => { setDetails(detailsBaseline); setEventDraft(eventBaseline); setTab(item.key === "events" ? "events" : "details"); })}><span className={item.complete ? "done" : ""}>{item.complete ? "✓" : ""}</span><div><strong>{item.label}</strong><small>{item.required ? "Bắt buộc" : "Khuyến nghị"}</small></div><em>{item.complete ? "Hoàn thành" : "Bổ sung →"}</em></button>)}
            </div>
          </section>
          <aside className="panel summary-panel">
            <div className="commercial-quick-card"><div><span>GÓI ĐANG DÙNG</span><h3>{wedding.activePlan?.name ?? "Khởi đầu"}</h3><p>{wedding.activePlan ? `${wedding.activePlan.guestLimit} khách · ${wedding.activePlan.mediaLimit} ảnh` : "30 khách · 5 ảnh · chưa thể xuất bản"}</p></div><a href={`/pricing?weddingId=${weddingId}`}>{wedding.activePlan ? "Nâng cấp" : "Chọn gói"} →</a></div>
            <div className="invitation-quick-card"><span>Invitation Studio</span><h3>Biến thông tin thành một thiệp cưới hoàn chỉnh</h3><p>Chọn mẫu, chỉnh màu và nội dung, thêm album rồi xem trước trên điện thoại.</p><a href={`/weddings/${weddingId}/invitation`}>Mở trình tạo thiệp →</a></div>
            <div className="couple-monogram large">{wedding.groomName.charAt(0)} <span>&</span> {wedding.brideName.charAt(0)}</div>
            <h3>{wedding.groomName} & {wedding.brideName}</h3>
            <dl><div><dt>Ngày chính</dt><dd>{formatDate(wedding.mainDate)}</dd></div><div><dt>Đường dẫn</dt><dd>/i/{wedding.slug}</dd></div><div><dt>Sự kiện</dt><dd>{wedding.events.length}</dd></div><div><dt>Cộng tác viên</dt><dd>{wedding.collaborators.filter((item) => item.status === "ACCEPTED").length}</dd></div></dl>
          </aside>
        </div>
      )}

      {tab === "details" && (
        <form className="panel workspace-form" {...tabPanelProps("workspace-tabs", "details")} onSubmit={(event) => void saveDetails(event)}>
          <div className="panel-head"><div><h2>Thông tin cặp đôi và gia đình</h2><p className="muted-small">Các trường bỏ trống sẽ không hiển thị trên thiệp.</p></div>{!canEdit && <span className="access-chip">Chỉ xem</span>}</div>
          <div className="form-section"><h3>Thông tin cơ bản</h3><div className="form-grid two">
            <label>Tên workspace<input disabled={!canEdit} value={details.title} onChange={(e) => setDetails({ ...details, title: e.target.value })} /></label>
            <label>Đường dẫn thiệp<div className="slug-input"><span>/i/</span><input disabled={!canEdit} value={details.slug} onChange={(e) => setDetails({ ...details, slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "") })} /></div></label>
            <label>Tên chú rể<input disabled={!canEdit} value={details.groomName} onChange={(e) => setDetails({ ...details, groomName: e.target.value })} /></label>
            <label>Tên cô dâu<input disabled={!canEdit} value={details.brideName} onChange={(e) => setDetails({ ...details, brideName: e.target.value })} /></label>
            <label>Ngày cưới chính<input disabled={!canEdit} type="date" value={details.mainDate} onChange={(e) => setDetails({ ...details, mainDate: e.target.value })} /></label>
            <label>Múi giờ<select disabled={!canEdit} value={details.timezone} onChange={(e) => setDetails({ ...details, timezone: e.target.value })}><option value="Asia/Ho_Chi_Minh">Việt Nam · GMT+7</option><option value="Asia/Singapore">Singapore · GMT+8</option></select></label>
          </div></div>
          <div className="form-section"><h3>Gia đình nhà trai</h3><div className="form-grid two"><label>Họ tên cha<input disabled={!canEdit} value={details.groomFatherName} onChange={(e) => setDetails({ ...details, groomFatherName: e.target.value })} /></label><label>Họ tên mẹ<input disabled={!canEdit} value={details.groomMotherName} onChange={(e) => setDetails({ ...details, groomMotherName: e.target.value })} /></label><label className="check-inline full"><input disabled={!canEdit} type="checkbox" checked={details.showGroomParents} onChange={(e) => setDetails({ ...details, showGroomParents: e.target.checked })} /> Hiển thị thông tin nhà trai trên thiệp</label></div></div>
          <div className="form-section"><h3>Gia đình nhà gái</h3><div className="form-grid two"><label>Họ tên cha<input disabled={!canEdit} value={details.brideFatherName} onChange={(e) => setDetails({ ...details, brideFatherName: e.target.value })} /></label><label>Họ tên mẹ<input disabled={!canEdit} value={details.brideMotherName} onChange={(e) => setDetails({ ...details, brideMotherName: e.target.value })} /></label><label className="check-inline full"><input disabled={!canEdit} type="checkbox" checked={details.showBrideParents} onChange={(e) => setDetails({ ...details, showBrideParents: e.target.checked })} /> Hiển thị thông tin nhà gái trên thiệp</label></div></div>
          <div className="form-section"><h3>Câu chuyện</h3><label>Giới thiệu ngắn<textarea disabled={!canEdit} rows={5} maxLength={3000} value={details.story} onChange={(e) => setDetails({ ...details, story: e.target.value })} placeholder="Từ một cuộc gặp tình cờ..." /></label></div>
          {canEdit ? <FormActions dirty={detailsDirty} saving={busy}><Button type="submit" loading={busy} loadingLabel="Đang lưu thay đổi…" disabled={!details.mainDate}>Lưu thay đổi</Button></FormActions> : null}
        </form>
      )}

      {tab === "events" && (
        <div className="workspace-layout events-layout" {...tabPanelProps("workspace-tabs", "events")}>
          <section className="event-list">
            {wedding.events.length === 0 ? <div className="empty-panel"><div className="empty-icon">◷</div><h3>Chưa có sự kiện</h3><p>Thêm lễ gia tiên, lễ thành hôn hoặc tiệc cưới.</p></div> : wedding.events.map((item) => <article className="event-manage-card" key={item.id}><div className="event-index">{String(item.sortOrder + 1).padStart(2, "0")}</div><div><div className="event-tags"><span>{sideLabels[item.side]}</span><span>{eventTypeLabels[item.type]}</span></div><h3>{item.title}</h3><p><strong>{formatDate(item.startsAt, true)}</strong><br />{item.venueName}<br />{item.address}</p>{item.dressCode && <small>Dress code: {item.dressCode}</small>}</div>{canEdit && <div className="row-actions"><button onClick={() => beginEditEvent(item)}>Sửa</button><button className="danger-link" disabled={busy} onClick={() => setDeleteEventTarget(item.id)}>Xóa</button></div>}</article>)}
          </section>
          {canEdit && <form id="event-form" className="panel event-form" onSubmit={(event) => void saveEvent(event)}><div className="panel-head"><div><h2>{editingEventId ? "Sửa sự kiện" : "Thêm sự kiện"}</h2><p className="muted-small">Thời gian được lưu theo ISO và múi giờ đã chọn.</p></div>{editingEventId && <button type="button" className="text-button" onClick={resetEventForm}>Hủy sửa</button>}</div><div className="form-grid two">
            <label>Loại sự kiện<select value={eventDraft.type} onChange={(e) => setEventDraft({ ...eventDraft, type: e.target.value as EventType })}>{Object.entries(eventTypeLabels).map(([value, label]) => <option value={value} key={value}>{label}</option>)}</select></label>
            <label>Phía tổ chức<select value={eventDraft.side} onChange={(e) => setEventDraft({ ...eventDraft, side: e.target.value as WeddingSide })}>{Object.entries(sideLabels).map(([value, label]) => <option value={value} key={value}>{label}</option>)}</select></label>
            <label className="full">Tên hiển thị<input required minLength={2} value={eventDraft.title} onChange={(e) => setEventDraft({ ...eventDraft, title: e.target.value })} /></label>
            <label>Bắt đầu<input required type="datetime-local" value={eventDraft.startsAt} onChange={(e) => setEventDraft({ ...eventDraft, startsAt: e.target.value })} /></label>
            <label>Kết thúc<input type="datetime-local" value={eventDraft.endsAt ?? ""} onChange={(e) => setEventDraft({ ...eventDraft, endsAt: e.target.value || null })} /></label>
            <label className="full">Địa điểm<input required value={eventDraft.venueName} onChange={(e) => setEventDraft({ ...eventDraft, venueName: e.target.value })} /></label>
            <label className="full">Địa chỉ<input required value={eventDraft.address} onChange={(e) => setEventDraft({ ...eventDraft, address: e.target.value })} /></label>
            <label className="full">Google Maps URL<input type="url" value={eventDraft.mapUrl ?? ""} onChange={(e) => setEventDraft({ ...eventDraft, mapUrl: e.target.value || null })} placeholder="https://maps.google.com/..." /></label>
            <label>Dress code<input value={eventDraft.dressCode ?? ""} onChange={(e) => setEventDraft({ ...eventDraft, dressCode: e.target.value || null })} /></label>
            <label>Thứ tự<input min={0} max={999} type="number" value={eventDraft.sortOrder} onChange={(e) => setEventDraft({ ...eventDraft, sortOrder: Number(e.target.value) })} /></label>
            <label className="full">Ghi chú<textarea rows={3} value={eventDraft.note ?? ""} onChange={(e) => setEventDraft({ ...eventDraft, note: e.target.value || null })} /></label>
          </div><FormActions dirty={eventDirty} saving={busy}><Button type="submit" loading={busy} loadingLabel="Đang lưu sự kiện…">{editingEventId ? "Cập nhật sự kiện" : "Thêm sự kiện"}</Button></FormActions></form>}
        </div>
      )}

      {tab === "team" && (
        <div className="workspace-layout" {...tabPanelProps("workspace-tabs", "team")}>
          <section className="panel"><div className="panel-head"><div><h2>Cộng tác viên</h2><p className="muted-small">Người được mời chỉ truy cập được wedding này.</p></div></div>{wedding.collaborators.length === 0 ? <p className="muted-small">Chưa có lời mời nào.</p> : <div className="collaborator-list">{wedding.collaborators.map((item) => <div className="collaborator-row" key={item.id}><div className="avatar-circle">{item.email.charAt(0).toUpperCase()}</div><div><strong>{item.user?.displayName ?? item.email}</strong><p>{item.email} · {item.permission === "EDIT" ? "Có thể chỉnh sửa" : "Chỉ xem"}</p><span className={`mini-status ${item.status.toLowerCase()}`}>{item.status}</span></div>{isOwner && <div className="row-actions">{item.status === "PENDING" && <button onClick={() => void copyInvite(item.token)}>Sao chép link mời</button>}{item.status !== "REVOKED" && <button className="danger-link" onClick={() => setRevokeTarget(item)}>Thu hồi</button>}</div>}</div>)}</div>}</section>
          {isOwner && <form className="panel compact-form" onSubmit={(event) => void inviteCollaborator(event)}><h2>Mời người thân</h2><p className="muted-small">Trong môi trường local, hãy sao chép link sau khi tạo lời mời và gửi thủ công.</p><label>Email<input required type="email" value={collaborator.email} onChange={(e) => setCollaborator({ ...collaborator, email: e.target.value })} placeholder="family@example.com" /></label><label>Quyền<select value={collaborator.permission} onChange={(e) => setCollaborator({ ...collaborator, permission: e.target.value as "VIEW" | "EDIT" })}><option value="EDIT">Có thể chỉnh sửa</option><option value="VIEW">Chỉ xem</option></select></label><button className="btn btn-primary full-button" disabled={busy} type="submit">Tạo lời mời</button></form>}
        </div>
      )}

      {tab === "lifecycle" && (
        <div className="workspace-layout" {...tabPanelProps("workspace-tabs", "lifecycle")}>
          <section className="panel"><div className="panel-head"><div><h2>Vòng đời wedding</h2><p className="muted-small">Xuất bản được kiểm soát theo gói và trạng thái thanh toán.</p></div><span className={`status-pill ${statusClasses[wedding.status]}`}>{statusLabels[wedding.status]}</span></div><div className="publish-plan-banner"><div><span>Gói hiện tại</span><strong>{wedding.activePlan?.name ?? "Khởi đầu"}</strong><small>{wedding.activePlan?.requiresPublishReview ? "Cần nhân viên duyệt trước khi public" : wedding.activePlan ? "Có thể tự động xuất bản khi đủ thông tin" : "Cần mua gói để xuất bản"}</small></div><a href={`/pricing?weddingId=${weddingId}`}>{wedding.activePlan ? "Nâng cấp gói" : "Chọn gói"}</a></div><div className="lifecycle-track">{["DRAFT", "READY_FOR_REVIEW", "PUBLISHED", "EXPIRED", "ARCHIVED"].map((status) => <div className={wedding.status === status ? "active" : ""} key={status}><span />{statusLabels[status as WeddingStatus]}</div>)}</div>{isOwner ? <><div className="publish-review-state"><span>Trạng thái kiểm duyệt</span><strong>{wedding.publishReviewStatus}</strong>{wedding.publishReviewStatus === "CHANGES_REQUESTED" && <small>Hãy chỉnh sửa thiệp rồi gửi yêu cầu lại.</small>}</div><div className="lifecycle-actions">{["DRAFT", "READY_FOR_REVIEW", "SUSPENDED"].includes(wedding.status) && <button className="btn btn-primary" disabled={busy || !wedding.checklist.readyToReview} onClick={() => void requestPublish()}>{wedding.publishReviewStatus === "REQUESTED" || wedding.publishReviewStatus === "IN_REVIEW" ? "Đang chờ duyệt" : wedding.status === "SUSPENDED" ? "Yêu cầu mở lại" : "Gửi yêu cầu xuất bản"}</button>}{lifecycleOptions.map((option) => <button className={`btn ${option.kind === "secondary" ? "btn-secondary" : "btn-primary"}`} disabled={busy} key={option.status} onClick={() => void changeLifecycle(option.status)}>{option.label}</button>)}</div></> : <div className="alert">Bạn không phải chủ sở hữu nên không thể đổi trạng thái.</div>}</section>
          {isOwner && <form className="panel compact-form" onSubmit={(event) => void duplicateWedding(event)}><h2>Nhân bản để thử nghiệm</h2><p className="muted-small">Sao chép hồ sơ gia đình và sự kiện; không sao chép khách mời.</p><label>Tên bản sao<input value={duplicate.title} onChange={(e) => setDuplicate({ ...duplicate, title: e.target.value })} /></label><label>Slug mới<input value={duplicate.slug} onChange={(e) => setDuplicate({ ...duplicate, slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "") })} /></label><button className="btn btn-secondary full-button" disabled={busy} type="submit">Tạo bản sao</button></form>}
        </div>
      )}
      <ConfirmDialog open={Boolean(deleteEventTarget)} title="Xóa sự kiện?" description="Sự kiện sẽ bị xóa vĩnh viễn. Những lời mời đang liên kết với sự kiện này có thể bị ảnh hưởng." confirmLabel="Xóa sự kiện" tone="danger" loading={busy} onConfirm={() => void deleteEvent()} onClose={() => setDeleteEventTarget(null)} />
      <ConfirmDialog open={Boolean(revokeTarget)} title="Thu hồi quyền cộng tác?" description={revokeTarget ? <>Tài khoản <strong>{revokeTarget.email}</strong> sẽ không còn truy cập được wedding này.</> : ""} confirmLabel="Thu hồi quyền" tone="danger" loading={busy} onConfirm={() => void revokeCollaborator()} onClose={() => setRevokeTarget(null)} />
      {guard.dialog}
    </AppShell>
  );
}

export default function WeddingWorkspacePage() {
  return <AuthGate><WorkspaceContent /></AuthGate>;
}
