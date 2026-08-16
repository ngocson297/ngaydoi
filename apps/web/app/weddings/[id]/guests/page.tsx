"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { AppShell } from "../../../../components/app-shell";
import { AuthGate } from "../../../../components/auth-gate";
import { useAuth } from "../../../../components/auth-provider";
import { Alert, EmptyState, ErrorState, ListSkeleton, Tabs, tabPanelProps, useConfirm, useToast } from "../../../../components/ui";
import { ApiError, toUiError, type UiError } from "../../../../lib/api";
import {
  downloadText,
  emptyGuestDraft,
  invitationStatusClass,
  invitationStatusLabel,
  parseCsv,
  toCsv,
} from "../../../../lib/guests";
import type { GuestAnalytics, GuestDraft, GuestItem, GuestListResponse } from "../../../../lib/guests";
import { formatDate } from "../../../../lib/weddings";

type GuestTab = "list" | "analytics" | "import" | "notifications";

type ImportReport = {
  preview: boolean;
  totalRows: number;
  validRows: number;
  errorRows: number;
  duplicateRows: number;
  willCreate: number;
  willUpdate: number;
  willSkip: number;
  errors: Array<{ row: number; message: string }>;
  duplicates: Array<{ row: number; guestId: string; fullName: string }>;
  sample: Array<Record<string, unknown>>;
  imported?: number;
};

type NotificationList = {
  unread: number;
  items: Array<{ id: string; title: string; message: string; type: string; readAt: string | null; createdAt: string }>;
};

function GuestManagementContent() {
  const { confirm } = useConfirm();
  const { notify } = useToast();
  const { id: weddingId } = useParams<{ id: string }>();
  const { authRequest } = useAuth();
  const [tab, setTab] = useState<GuestTab>("list");
  const [data, setData] = useState<GuestListResponse | null>(null);
  const [analytics, setAnalytics] = useState<GuestAnalytics | null>(null);
  const [notifications, setNotifications] = useState<NotificationList>({ unread: 0, items: [] });
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [loadError, setLoadError] = useState<UiError | null>(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [search, setSearch] = useState("");
  const [side, setSide] = useState("");
  const [status, setStatus] = useState("");
  const [groupName, setGroupName] = useState("");
  const [showArchived, setShowArchived] = useState(false);
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<string[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerRef = useRef<HTMLFormElement>(null);
  const drawerTriggerRef = useRef<HTMLElement | null>(null);
  const [editing, setEditing] = useState<GuestItem | null>(null);
  const [draft, setDraft] = useState<GuestDraft>(emptyGuestDraft);
  const [importRows, setImportRows] = useState<Array<Record<string, string>>>([]);
  const [importMode, setImportMode] = useState<"SKIP" | "UPDATE">("SKIP");
  const [importReport, setImportReport] = useState<ImportReport | null>(null);

  useEffect(() => {
    if (!drawerOpen) return;
    drawerTriggerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => drawerRef.current?.querySelector<HTMLElement>("input, button, select, textarea")?.focus(), 0);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { event.preventDefault(); setDrawerOpen(false); return; }
      if (event.key !== "Tab" || !drawerRef.current) return;
      const focusable = Array.from(drawerRef.current.querySelectorAll<HTMLElement>('button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])')).filter((node) => node.getClientRects().length > 0);
      if (!focusable.length) return;
      const first = focusable[0]; const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => { window.clearTimeout(timer); document.removeEventListener("keydown", onKeyDown); document.body.style.overflow = originalOverflow; drawerTriggerRef.current?.focus(); };
  }, [drawerOpen]);

  const canEdit = data?.wedding.access === "OWNER" || data?.wedding.access === "EDIT";

  const loadList = useCallback(async () => {
    const query = new URLSearchParams({ page: String(page), pageSize: "25" });
    if (search.trim()) query.set("search", search.trim());
    if (side) query.set("side", side);
    if (status) query.set("status", status);
    if (groupName) query.set("groupName", groupName);
    if (showArchived) query.set("archived", "true");
    try {
      const result = await authRequest<GuestListResponse>(`/weddings/${weddingId}/guests?${query}`);
      setData(result);
      setSelected((current) => current.filter((id) => result.items.some((item) => item.id === id)));
      setLoadError(null);
    } catch (reason) {
      setLoadError(toUiError(reason, "Không thể tải danh sách khách."));
    } finally {
      setLoading(false);
    }
  }, [authRequest, groupName, page, search, showArchived, side, status, weddingId]);

  const loadAnalytics = useCallback(async () => {
    try { setAnalytics(await authRequest<GuestAnalytics>(`/weddings/${weddingId}/guests/analytics`)); }
    catch { /* list remains usable if analytics fails */ }
  }, [authRequest, weddingId]);

  const loadNotifications = useCallback(async () => {
    try { setNotifications(await authRequest<NotificationList>(`/weddings/${weddingId}/notifications`)); }
    catch { /* notification is non-blocking */ }
  }, [authRequest, weddingId]);

  useEffect(() => {
    const timer = window.setTimeout(() => void loadList(), 250);
    return () => window.clearTimeout(timer);
  }, [loadList]);

  useEffect(() => { void loadAnalytics(); void loadNotifications(); }, [loadAnalytics, loadNotifications]);

  const metrics = analytics?.metrics;
  const allSelected = Boolean(data?.items.length) && data!.items.every((item) => selected.includes(item.id));

  function flash(message: string): void {
    setSuccess(message);
    window.setTimeout(() => setSuccess(""), 3200);
  }

  function openCreate(): void {
    setEditing(null);
    setDraft({ ...emptyGuestDraft, eventIds: data?.wedding.events.map((event) => event.id) ?? [] });
    setDrawerOpen(true);
  }

  function openEdit(item: GuestItem): void {
    setEditing(item);
    setDraft({
      fullName: item.fullName,
      salutation: item.salutation ?? "",
      phone: item.phone ?? "",
      email: item.email ?? "",
      groupName: item.groupName ?? "",
      side: item.side,
      invitedBy: item.invitedBy ?? "",
      tableName: item.tableName ?? "",
      maxAdultCount: item.maxAdultCount,
      maxChildCount: item.maxChildCount,
      note: item.note ?? "",
      tags: item.tags.join(", "),
      greeting: item.invitation?.greeting ?? "",
      eventIds: item.invitation?.visibleEvents.map((event) => event.eventId) ?? data?.wedding.events.map((event) => event.id) ?? [],
    });
    setDrawerOpen(true);
  }

  function payloadFromDraft(): Record<string, unknown> {
    const optional = (value: string): string | null | undefined => {
      const cleaned = value.trim();
      return cleaned || (editing ? null : undefined);
    };
    return {
      ...draft,
      salutation: optional(draft.salutation),
      phone: optional(draft.phone),
      email: optional(draft.email),
      groupName: optional(draft.groupName),
      invitedBy: optional(draft.invitedBy),
      tableName: optional(draft.tableName),
      note: optional(draft.note),
      greeting: optional(draft.greeting),
      tags: draft.tags.split(/[,;|]/).map((tag) => tag.trim()).filter(Boolean),
    };
  }

  async function saveGuest(event: React.FormEvent): Promise<void> {
    event.preventDefault();
    setBusy(true); setError("");
    try {
      await authRequest(`/weddings/${weddingId}/guests${editing ? `/${editing.id}` : ""}`, {
        method: editing ? "PATCH" : "POST",
        body: JSON.stringify(payloadFromDraft()),
      });
      setDrawerOpen(false);
      await Promise.all([loadList(), loadAnalytics()]);
      flash(editing ? "Đã cập nhật thông tin khách." : "Đã thêm khách và tạo link cá nhân.");
    } catch (reason) {
      setError(reason instanceof ApiError ? reason.message : "Không thể lưu khách mời");
    } finally { setBusy(false); }
  }

  async function removeGuest(item: GuestItem): Promise<void> {
    if (!(await confirm({ title: `Xóa ${item.fullName}?`, description: "Khách mời, thiệp cá nhân và toàn bộ phản hồi RSVP liên quan sẽ bị xóa vĩnh viễn.", confirmLabel: "Xóa khách mời", tone: "danger" }))) return;
    setBusy(true);
    try {
      await authRequest(`/weddings/${weddingId}/guests/${item.id}`, { method: "DELETE" });
      await Promise.all([loadList(), loadAnalytics()]);
      flash("Đã xóa khách mời.");
    } catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể xóa khách"); }
    finally { setBusy(false); }
  }

  async function copyLink(item: GuestItem): Promise<void> {
    if (!item.invitation) return;
    const link = `${window.location.origin}/g/${item.invitation.token}`;
    try { await navigator.clipboard.writeText(link); }
    catch {
      const input = document.createElement("textarea"); input.value = link; document.body.appendChild(input); input.select(); document.execCommand("copy"); input.remove();
    }
    notify({ tone: "success", title: "Đã sao chép link mời", message: `Link cá nhân của ${item.fullName} đã sẵn sàng để gửi.` });
  }

  async function markSent(item: GuestItem): Promise<void> {
    setBusy(true);
    try {
      await authRequest(`/weddings/${weddingId}/guests/${item.id}/mark-sent`, { method: "POST" });
      await Promise.all([loadList(), loadAnalytics()]);
      flash("Đã đánh dấu thiệp được gửi.");
    } catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể cập nhật trạng thái"); }
    finally { setBusy(false); }
  }

  async function bulkAction(action: "MARK_SENT" | "REVOKE" | "REGENERATE" | "ARCHIVE" | "RESTORE" | "DELETE"): Promise<void> {
    if (!selected.length) return;
    if (["REVOKE", "REGENERATE", "DELETE"].includes(action) && !(await confirm({ title: `Áp dụng cho ${selected.length} khách?`, description: action === "DELETE" ? "Các khách đã chọn và dữ liệu liên quan sẽ bị xóa vĩnh viễn." : "Thao tác sẽ cập nhật toàn bộ khách đang được chọn.", confirmLabel: action === "DELETE" ? "Xóa khách đã chọn" : "Xác nhận thao tác", tone: "danger" }))) return;
    setBusy(true);
    try {
      await authRequest(`/weddings/${weddingId}/guests/bulk`, { method: "POST", body: JSON.stringify({ guestIds: selected, action }) });
      setSelected([]);
      await Promise.all([loadList(), loadAnalytics()]);
      flash("Đã cập nhật các khách được chọn.");
    } catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể thực hiện thao tác hàng loạt"); }
    finally { setBusy(false); }
  }

  async function exportGuests(): Promise<void> {
    setBusy(true);
    try {
      const rows = await authRequest<Array<Record<string, unknown>>>(`/weddings/${weddingId}/guests/export`);
      const exportRows = rows.map((row) => ({
        ...row,
        personalizedLink: row.personalizedPath ? `${window.location.origin}${String(row.personalizedPath)}` : "",
      }));
      downloadText(`ngaydoi-guests-${data?.wedding.slug ?? weddingId}.csv`, toCsv(exportRows));
      flash("Đã xuất danh sách khách và link cá nhân.");
    } catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể xuất danh sách"); }
    finally { setBusy(false); }
  }

  function downloadTemplate(): void {
    const template = [{
      "Xưng hô": "Anh/Chị", "Họ tên": "Nguyễn Văn An", "Số điện thoại": "0900000000", Email: "", "Nhóm khách": "Bạn chú rể",
      "Nhà trai/nhà gái": "GROOM", "Người mời": "Minh", "Số người lớn": 2, "Số trẻ em": 0, Tags: "thân thiết|đồng nghiệp", "Ghi chú": "",
    }];
    downloadText("ngaydoi-mau-import-khach.csv", toCsv(template));
  }

  async function chooseImportFile(file: File | undefined): Promise<void> {
    if (!file) return;
    const rows = parseCsv(await file.text());
    setImportRows(rows);
    setImportReport(null);
    if (!rows.length) { setError("File CSV không có dòng dữ liệu hợp lệ."); return; }
    setBusy(true);
    try {
      const report = await authRequest<ImportReport>(`/weddings/${weddingId}/guests/import-preview`, {
        method: "POST", body: JSON.stringify({ rows, duplicateMode: importMode }),
      });
      setImportReport(report);
    } catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể đọc file import"); }
    finally { setBusy(false); }
  }

  async function refreshImportPreview(mode = importMode): Promise<void> {
    if (!importRows.length) return;
    setBusy(true);
    try {
      setImportReport(await authRequest<ImportReport>(`/weddings/${weddingId}/guests/import-preview`, {
        method: "POST", body: JSON.stringify({ rows: importRows, duplicateMode: mode }),
      }));
    } catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể kiểm tra file import"); }
    finally { setBusy(false); }
  }

  async function applyImport(): Promise<void> {
    if (!importRows.length || !importReport || importReport.errorRows > 0) return;
    setBusy(true);
    try {
      const result = await authRequest<ImportReport>(`/weddings/${weddingId}/guests/import`, {
        method: "POST", body: JSON.stringify({ rows: importRows, duplicateMode: importMode }),
      });
      setImportRows([]); setImportReport(null); setTab("list");
      await Promise.all([loadList(), loadAnalytics()]);
      flash(`Đã nhập ${result.imported ?? 0} khách.`);
    } catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể nhập danh sách"); }
    finally { setBusy(false); }
  }

  async function markNotificationRead(id: string): Promise<void> {
    await authRequest(`/weddings/${weddingId}/notifications/${id}/read`, { method: "PATCH" });
    await loadNotifications();
  }

  const responseProgress = metrics?.invited ? Math.round((metrics.responded / metrics.invited) * 100) : 0;

  if (loading && !data) return <AppShell active="guests" weddingId={weddingId}><ListSkeleton rows={8} /></AppShell>;
  if (!data && loadError) return <AppShell active="guests" weddingId={weddingId}><ErrorState title="Không thể tải danh sách khách" description={loadError.message} requestId={loadError.requestId} onRetry={() => void loadList()} homeHref={`/weddings/${weddingId}`} homeLabel="Về wedding workspace" /></AppShell>;

  return (
    <AppShell active="guests" weddingId={weddingId}>
      <div className="guest-management-page">
        <div className="guest-page-head">
          <div><a className="back-link" href={`/weddings/${weddingId}`}>← Không gian đám cưới</a><div className="eyebrow">Khách mời & RSVP</div><h1>{data?.wedding.title ?? "Quản lý khách mời"}</h1><p>Quản lý danh sách, lời mời và phản hồi trong một nơi.</p></div>
          <div className="guest-head-actions"><button className="btn btn-secondary" onClick={() => void exportGuests()} disabled={busy}>Xuất CSV</button>{canEdit && <button className="btn btn-primary" onClick={openCreate}>+ Thêm khách</button>}</div>
        </div>

      {loadError && <Alert tone="error" title="Chưa thể làm mới danh sách" requestId={loadError.requestId}>{loadError.message}</Alert>}
      {error && <Alert tone="error">{error}</Alert>}
      {success && <Alert tone="success">{success}</Alert>}

        <div className="guest-metric-grid">
          <article><span>Tổng khách</span><strong>{metrics?.invited ?? data?.pagination.total ?? 0}</strong><small>{metrics?.sent ?? 0} thiệp đã gửi</small></article>
          <article><span>Sẽ tham dự</span><strong>{metrics?.attending ?? 0}</strong><small>{metrics?.estimatedHeadcount ?? 0} người dự kiến</small></article>
          <article><span>Không tham dự</span><strong>{metrics?.declined ?? 0}</strong><small>đã phản hồi từ chối</small></article>
          <article><span>Chưa phản hồi</span><strong>{metrics?.pending ?? 0}</strong><small>{metrics?.viewed ?? 0} người đã xem thiệp</small></article>
        </div>

      <Tabs<GuestTab>
        id="guest-tabs"
        label="Khu vực quản lý khách mời"
        className="guest-tabs"
        value={tab}
        onChange={setTab}
        items={[
          { value: "list", label: "Danh sách khách" },
          { value: "analytics", label: "Phân tích" },
          { value: "import", label: "Nhập danh sách" },
          { value: "notifications", label: `Thông báo${notifications.unread ? ` (${notifications.unread})` : ""}` },
        ]}
      />

      {tab === "list" && <section className="guest-list-panel" {...tabPanelProps("guest-tabs", "list")}>
        <div className="guest-filters">
          <label className="guest-search"><span aria-hidden="true">⌕</span><input aria-label="Tìm khách mời" value={search} onChange={(event) => { setSearch(event.target.value); setPage(1); }} placeholder="Tìm tên, số điện thoại, nhóm..." /></label>
          <select value={side} onChange={(event) => { setSide(event.target.value); setPage(1); }}><option value="">Tất cả hai bên</option><option value="GROOM">Nhà trai</option><option value="BRIDE">Nhà gái</option><option value="SHARED">Khách chung</option></select>
          <select value={status} onChange={(event) => { setStatus(event.target.value); setPage(1); }}><option value="">Mọi trạng thái</option><option value="ATTENDING">Sẽ tham dự</option><option value="DECLINED">Không tham dự</option><option value="MAYBE">Chưa chắc</option><option value="PENDING">Chưa phản hồi</option><option value="VIEWED">Đã xem</option><option value="SENT">Đã gửi</option><option value="CREATED">Chưa gửi</option></select>
          <select value={groupName} onChange={(event) => { setGroupName(event.target.value); setPage(1); }}><option value="">Tất cả nhóm</option>{data?.groups.map((group) => <option key={group.name} value={group.name === "Chưa phân nhóm" ? "" : group.name}>{group.name} ({group.count})</option>)}</select>
          <select value={showArchived ? "archived" : "active"} onChange={(event) => { setShowArchived(event.target.value === "archived"); setGroupName(""); setStatus(""); setSelected([]); setPage(1); }}><option value="active">Khách đang dùng</option><option value="archived">Đã lưu trữ</option></select>
        </div>

        {selected.length > 0 && canEdit && <div className="guest-bulkbar"><strong>{selected.length} khách đã chọn</strong><div>{showArchived ? <button onClick={() => void bulkAction("RESTORE")}>Khôi phục</button> : <><button onClick={() => void bulkAction("MARK_SENT")}>Đánh dấu đã gửi</button><button onClick={() => void bulkAction("REGENERATE")}>Tạo link mới</button><button onClick={() => void bulkAction("REVOKE")}>Thu hồi link</button><button onClick={() => void bulkAction("ARCHIVE")}>Lưu trữ</button></>}<button className="danger" onClick={() => void bulkAction("DELETE")}>Xóa</button></div></div>}

        {loading ? <ListSkeleton rows={6} /> : !data?.items.length ? <EmptyState title={showArchived ? "Chưa có khách được lưu trữ" : data?.pagination.total === 0 ? "Chưa có khách mời" : "Chưa tìm thấy khách phù hợp"} description={showArchived ? "Khách được lưu trữ sẽ xuất hiện tại đây và có thể khôi phục bất kỳ lúc nào." : data?.pagination.total === 0 ? "Thêm khách mời đầu tiên hoặc nhập danh sách có sẵn." : "Thử bỏ bộ lọc hoặc thêm khách đầu tiên để tạo link thiệp cá nhân."} primaryAction={canEdit && !showArchived ? { label: "Thêm khách đầu tiên", onClick: openCreate } : undefined} /> : <>
          <div className="guest-table-wrap"><table className="guest-table"><thead><tr><th><input type="checkbox" aria-label="Chọn tất cả khách trên trang" checked={allSelected} onChange={(event) => setSelected(event.target.checked ? data.items.map((item) => item.id) : [])} /></th><th>Khách mời</th><th>Nhóm / bên</th><th>Số lượng</th><th>Trạng thái</th><th>Thiệp cá nhân</th><th /></tr></thead><tbody>{data.items.map((item) => <tr key={item.id}><td><input type="checkbox" aria-label={`Chọn ${item.fullName}`} checked={selected.includes(item.id)} onChange={(event) => setSelected((current) => event.target.checked ? [...current, item.id] : current.filter((id) => id !== item.id))} /></td><td><div className="guest-identity"><span>{item.fullName.charAt(0).toUpperCase()}</span><div><strong>{item.salutation ? `${item.salutation} ` : ""}{item.fullName}</strong><small>{item.phone || item.email || "Chưa có thông tin liên hệ"}</small>{item.tags.length > 0 && <em>{item.tags.slice(0, 2).join(" · ")}</em>}</div></div></td><td><strong>{item.groupName || "Chưa phân nhóm"}</strong><small>{item.side === "GROOM" ? "Nhà trai" : item.side === "BRIDE" ? "Nhà gái" : "Khách chung"}{item.invitedBy ? ` · ${item.invitedBy} mời` : ""}</small></td><td><strong>{item.maxAdultCount + item.maxChildCount}</strong><small>{item.maxAdultCount} lớn · {item.maxChildCount} trẻ em</small></td><td><span className={`guest-status ${invitationStatusClass(item)}`}>{invitationStatusLabel(item)}</span>{item.invitation?.rsvp?.status === "ATTENDING" && <small>{item.invitation.rsvp.adultCount + item.invitation.rsvp.childCount} người xác nhận</small>}</td><td><button className="guest-link-button" disabled={!item.invitation || Boolean(item.archivedAt)} onClick={() => void copyLink(item)}>⧉ Sao chép link</button><small>{item.invitation?.viewCount ?? 0} lượt mở</small></td><td><div className="guest-row-actions">{canEdit && <>{!item.archivedAt && item.invitation && !item.invitation.sentAt ? <button type="button" className="mark-sent-action" disabled={busy} aria-label={`Đánh dấu thiệp của ${item.fullName} đã gửi`} title="Đánh dấu đã gửi" onClick={() => void markSent(item)}>✓<span>Đã gửi?</span></button> : item.invitation?.sentAt ? <span className="guest-sent-confirmed" title={`Đã gửi lúc ${formatDate(item.invitation.sentAt, true)}`}>✓ Đã gửi</span> : null}<button type="button" aria-label={`Chỉnh sửa ${item.fullName}`} title="Chỉnh sửa" onClick={() => openEdit(item)}>✎</button><button type="button" className="danger" aria-label={`Xóa ${item.fullName}`} title="Xóa" onClick={() => void removeGuest(item)}>×</button></>}</div></td></tr>)}</tbody></table></div>
          <div className="guest-pagination"><span>Hiển thị {data.items.length} / {data.pagination.total} khách</span><div><button disabled={page <= 1} onClick={() => setPage((value) => value - 1)}>← Trước</button><strong>{page}/{data.pagination.totalPages}</strong><button disabled={page >= data.pagination.totalPages} onClick={() => setPage((value) => value + 1)}>Sau →</button></div></div>
        </>}
      </section>}

      {tab === "analytics" && <section className="guest-analytics-grid" {...tabPanelProps("guest-tabs", "analytics")}>
        <article className="guest-analytics-main"><div className="panel-head"><div><h2>Tiến độ phản hồi</h2><p className="muted-small">Tỷ lệ từ lúc gửi thiệp đến khi khách xác nhận.</p></div><strong>{responseProgress}%</strong></div><div className="response-progress" role="progressbar" aria-label="Tỷ lệ khách đã phản hồi" aria-valuemin={0} aria-valuemax={100} aria-valuenow={responseProgress}><i style={{ width: `${responseProgress}%` }} /></div><div className="response-legend"><span><i className="attending" />Tham dự <b>{metrics?.attending ?? 0}</b></span><span><i className="maybe" />Chưa chắc <b>{metrics?.maybe ?? 0}</b></span><span><i className="declined" />Từ chối <b>{metrics?.declined ?? 0}</b></span><span><i className="pending" />Chờ phản hồi <b>{metrics?.pending ?? 0}</b></span></div></article>
        <article className="guest-breakdown"><h2>Theo sự kiện</h2>{analytics?.byEvent.map((item) => <div key={item.id}><span>{item.title}</span><strong>{item.headcount} người</strong></div>)}</article>
        <article className="guest-breakdown"><h2>Theo nhóm khách</h2>{analytics?.byGroup.slice(0, 8).map((item) => <div key={item.label}><span>{item.label}<small>{item.total} lời mời</small></span><strong>{item.headcount} người</strong></div>)}</article>
        <article className="guest-breakdown"><h2>Theo hai bên</h2>{analytics?.bySide.map((item) => <div key={item.label}><span>{item.label === "GROOM" ? "Nhà trai" : item.label === "BRIDE" ? "Nhà gái" : "Khách chung"}<small>{item.attending}/{item.total} phản hồi tham dự</small></span><strong>{item.headcount} người</strong></div>)}</article>
      </section>}

        {tab === "import" && <section className="guest-import-layout" {...tabPanelProps("guest-tabs", "import")}><article className="guest-import-card"><div className="import-icon">CSV</div><h2>Nhập danh sách khách</h2><p>Tải file mẫu, điền thông tin rồi chọn lại file. Hệ thống sẽ kiểm tra trước khi ghi dữ liệu.</p><div className="import-steps"><span><b>1</b>Chọn file</span><span><b>2</b>Xem trước</span><span><b>3</b>Kiểm tra lỗi</span><span><b>4</b>Nhập khách</span></div><button className="btn btn-secondary" onClick={downloadTemplate}>Tải file CSV mẫu</button><label className="import-dropzone"><input type="file" accept=".csv,text/csv" onChange={(event) => void chooseImportFile(event.target.files?.[0])} /><strong>Chọn hoặc kéo file CSV vào đây</strong><small>Tối đa 1.000 dòng mỗi lần nhập</small></label></article><article className="guest-import-preview"><div className="panel-head"><div><h2>Kết quả kiểm tra</h2><p className="muted-small">Dữ liệu chỉ được lưu khi không còn dòng lỗi.</p></div></div>{!importReport ? <div className="empty-panel small"><p>Chưa có file để kiểm tra.</p></div> : <><div className="import-summary"><span><strong>{importReport.totalRows}</strong>Tổng dòng</span><span className="success"><strong>{importReport.validRows}</strong>Dòng hợp lệ</span><span className="warning"><strong>{importReport.duplicateRows}</strong>Trùng lặp</span><span className="danger"><strong>{importReport.errorRows}</strong>Dòng lỗi</span></div><label className="duplicate-mode">Khi gặp khách trùng<select value={importMode} onChange={(event) => { const mode = event.target.value as "SKIP" | "UPDATE"; setImportMode(mode); void refreshImportPreview(mode); }}><option value="SKIP">Bỏ qua khách trùng</option><option value="UPDATE">Cập nhật thông tin khách cũ</option></select></label>{importReport.errors.length > 0 && <div className="import-errors">{importReport.errors.slice(0, 12).map((item) => <p key={`${item.row}-${item.message}`}><b>Dòng {item.row}</b>{item.message}</p>)}</div>}<div className="import-sample"><h3>Xem trước dữ liệu</h3>{importReport.sample.slice(0, 6).map((item, index) => <div key={index}><strong>{String(item.fullName ?? "")}</strong><span>{String(item.groupName ?? "Chưa phân nhóm")}</span><em>{item.duplicate ? "Trùng" : "Mới"}</em></div>)}</div><button className="btn btn-primary full-button" disabled={busy || importReport.errorRows > 0} onClick={() => void applyImport()}>{busy ? "Đang xử lý..." : `Nhập ${importReport.willCreate + importReport.willUpdate} khách`}</button></>}</article></section>}

      {tab === "notifications" && <section className="guest-notification-panel" {...tabPanelProps("guest-tabs", "notifications")}><div className="panel-head"><div><h2>Phản hồi gần đây</h2><p className="muted-small">Thông báo nội bộ khi khách gửi hoặc cập nhật RSVP.</p></div><span>{notifications.unread} chưa đọc</span></div>{notifications.items.length === 0 ? <div className="empty-panel"><div className="empty-icon">♧</div><h3>Chưa có phản hồi mới</h3><p>Khi khách gửi RSVP, thông báo sẽ xuất hiện tại đây.</p></div> : <div className="notification-list">{notifications.items.map((item) => <button className={item.readAt ? "read" : ""} key={item.id} onClick={() => void markNotificationRead(item.id)}><i aria-hidden="true">{item.readAt ? "✓" : "●"}</i><span><strong>{item.title}</strong><p>{item.message}</p><small>{formatDate(item.createdAt, true)}</small></span></button>)}</div>}</section>}

      {drawerOpen && <div className="guest-drawer-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setDrawerOpen(false); }}><form className="guest-drawer" ref={drawerRef} role="dialog" aria-modal="true" aria-labelledby="guest-drawer-title" onSubmit={(event) => void saveGuest(event)}><header><div><span>{editing ? "Chỉnh sửa khách" : "Thêm khách mới"}</span><h2 id="guest-drawer-title">{editing?.fullName ?? "Tạo link mời cá nhân"}</h2></div><button type="button" aria-label="Đóng form khách mời" onClick={() => setDrawerOpen(false)}>×</button></header><div className="guest-form-scroll"><section><h3>Thông tin cơ bản</h3><div className="guest-form-grid"><label>Xưng hô<input value={draft.salutation} onChange={(event) => setDraft({ ...draft, salutation: event.target.value })} placeholder="Anh/Chị, Cô/Chú..." /></label><label className="wide">Tên khách mời *<input required minLength={2} value={draft.fullName} onChange={(event) => setDraft({ ...draft, fullName: event.target.value })} /></label><label>Số điện thoại<input value={draft.phone} onChange={(event) => setDraft({ ...draft, phone: event.target.value })} /></label><label>Email<input type="email" value={draft.email} onChange={(event) => setDraft({ ...draft, email: event.target.value })} /></label><label>Nhóm khách<input value={draft.groupName} onChange={(event) => setDraft({ ...draft, groupName: event.target.value })} placeholder="Gia đình, đồng nghiệp..." /></label><label>Thuộc bên<select value={draft.side} onChange={(event) => setDraft({ ...draft, side: event.target.value as GuestDraft["side"] })}><option value="SHARED">Khách chung</option><option value="GROOM">Nhà trai</option><option value="BRIDE">Nhà gái</option></select></label><label>Người mời<input value={draft.invitedBy} onChange={(event) => setDraft({ ...draft, invitedBy: event.target.value })} /></label><label>Tên bàn<input value={draft.tableName} onChange={(event) => setDraft({ ...draft, tableName: event.target.value })} placeholder="Chưa xếp bàn" /></label></div></section><section><h3>Số lượng & phân loại</h3><div className="guest-form-grid"><label>Người lớn tối đa<input type="number" min={1} max={20} value={draft.maxAdultCount} onChange={(event) => setDraft({ ...draft, maxAdultCount: Number(event.target.value) })} /></label><label>Trẻ em tối đa<input type="number" min={0} max={20} value={draft.maxChildCount} onChange={(event) => setDraft({ ...draft, maxChildCount: Number(event.target.value) })} /></label><label className="wide">Tags<input value={draft.tags} onChange={(event) => setDraft({ ...draft, tags: event.target.value })} placeholder="thân thiết, VIP, cần gọi lại" /></label></div></section><section><h3>Sự kiện được mời</h3><div className="guest-event-options">{data?.wedding.events.map((event) => <label key={event.id}><input type="checkbox" checked={draft.eventIds.includes(event.id)} onChange={(change) => setDraft({ ...draft, eventIds: change.target.checked ? [...draft.eventIds, event.id] : draft.eventIds.filter((id) => id !== event.id) })} /><span><strong>{event.title}</strong><small>{formatDate(event.startsAt, true)} · {event.venueName}</small></span></label>)}</div></section><section><h3>Lời chào trên thiệp</h3><label className="drawer-full-label">Lời mời cá nhân<textarea rows={3} value={draft.greeting} onChange={(event) => setDraft({ ...draft, greeting: event.target.value })} placeholder={`Trân trọng kính mời ${draft.salutation} ${draft.fullName}`.trim()} /></label><label className="drawer-full-label">Ghi chú nội bộ<textarea rows={3} value={draft.note} onChange={(event) => setDraft({ ...draft, note: event.target.value })} placeholder="Thông tin này không hiển thị với khách." /></label></section></div><footer><button className="btn btn-secondary" type="button" onClick={() => setDrawerOpen(false)}>Hủy</button><button className="btn btn-primary" disabled={busy} type="submit">{busy ? "Đang lưu..." : editing ? "Lưu thay đổi" : "Thêm khách & tạo link"}</button></footer></form></div>}
      </div>
    </AppShell>
  );
}

export default function GuestManagementPage() {
  return <AuthGate><GuestManagementContent /></AuthGate>;
}
