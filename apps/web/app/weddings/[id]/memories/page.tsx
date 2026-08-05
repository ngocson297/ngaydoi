"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { AppShell } from "../../../../components/app-shell";
import { AuthGate } from "../../../../components/auth-gate";
import { useAuth } from "../../../../components/auth-provider";
import { Alert, DetailPageSkeleton, ErrorState, useConfirm } from "../../../../components/ui";
import { API_URL, ApiError, toUiError, type UiError } from "../../../../lib/api";
import type { MemoryAsset, MemoryOwnerOverview, MemoryStatus } from "../../../../lib/memories";
import { memoryAlbumUrl, memoryMediaUrl } from "../../../../lib/memories";

type Tab = "gallery" | "moderation" | "settings" | "share";
const formatBytes = (value: number): string => value < 1024 * 1024 ? `${Math.max(1, Math.round(value / 1024))} KB` : `${(value / 1024 / 1024).toFixed(1)} MB`;
const statusLabel: Record<MemoryStatus, string> = { PENDING: "Chờ duyệt", APPROVED: "Đã duyệt", REJECTED: "Từ chối", ARCHIVED: "Đã lưu trữ" };

function MemoriesContent() {
  const { confirm } = useConfirm();
  const { id: weddingId } = useParams<{ id: string }>();
  const { authRequest } = useAuth();
  const [data, setData] = useState<MemoryOwnerOverview | null>(null);
  const [tab, setTab] = useState<Tab>("gallery");
  const [filter, setFilter] = useState<MemoryStatus | "ALL">("ALL");
  const [selected, setSelected] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [loadError, setLoadError] = useState<UiError | null>(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [rejecting, setRejecting] = useState<MemoryAsset | null>(null);
  const [rejectReason, setRejectReason] = useState("");
  const [settings, setSettings] = useState({ title: "", description: "", thankYouTitle: "", thankYouMessage: "", uploadEnabled: true, publicEnabled: true, moderationRequired: true, showUploaderName: true, closesAt: "" });

  const load = useCallback(async () => {
    try {
      const result = await authRequest<MemoryOwnerOverview>(`/weddings/${weddingId}/memories`);
      setData(result);
      setSettings({ title: result.title, description: result.description, thankYouTitle: result.thankYouTitle, thankYouMessage: result.thankYouMessage, uploadEnabled: result.uploadEnabled, publicEnabled: result.publicEnabled, moderationRequired: result.moderationRequired, showUploaderName: result.showUploaderName, closesAt: result.closesAt ? new Date(result.closesAt).toISOString().slice(0, 16) : "" });
      setLoadError(null);
    } catch (reason) { setLoadError(toUiError(reason, "Không thể tải album kỷ niệm.")); }
    finally { setLoading(false); }
  }, [authRequest, weddingId]);

  useEffect(() => { void load(); }, [load]);
  const canEdit = data?.access === "OWNER" || data?.access === "EDIT";
  const filtered = useMemo(() => data?.assets.filter((item) => filter === "ALL" || item.status === filter) ?? [], [data, filter]);
  const publicPath = data ? memoryAlbumUrl(data.token) : "";
  const publicUrl = typeof window !== "undefined" && publicPath ? `${window.location.origin}${publicPath}` : publicPath;

  function flash(message: string): void { setSuccess(message); window.setTimeout(() => setSuccess(""), 3500); }
  async function moderate(assetId: string, status: "APPROVED" | "REJECTED" | "ARCHIVED", rejectionReason?: string): Promise<void> {
    setBusy(true); setError("");
    try { await authRequest(`/weddings/${weddingId}/memories/assets/${assetId}`, { method: "PATCH", body: JSON.stringify({ status, rejectionReason }) }); await load(); flash(status === "APPROVED" ? "Đã đưa nội dung vào album." : status === "REJECTED" ? "Đã từ chối nội dung." : "Đã lưu trữ nội dung."); }
    catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể cập nhật nội dung"); }
    finally { setBusy(false); setRejecting(null); setRejectReason(""); }
  }
  async function bulkApprove(): Promise<void> {
    if (!selected.length) return;
    setBusy(true);
    try { const result = await authRequest<{ updated: number }>(`/weddings/${weddingId}/memories/assets/bulk`, { method: "POST", body: JSON.stringify({ assetIds: selected, status: "APPROVED" }) }); setSelected([]); await load(); flash(`Đã duyệt ${result.updated} nội dung.`); }
    catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể duyệt hàng loạt"); }
    finally { setBusy(false); }
  }
  async function remove(asset: MemoryAsset): Promise<void> {
    if (!(await confirm({ title: "Xóa nội dung khỏi album?", description: "Ảnh hoặc video sẽ bị xóa vĩnh viễn khỏi storage và không thể khôi phục.", confirmLabel: "Xóa vĩnh viễn", tone: "danger" }))) return;
    setBusy(true);
    try { await authRequest(`/weddings/${weddingId}/memories/assets/${asset.id}`, { method: "DELETE" }); await load(); flash("Đã xóa nội dung."); }
    catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể xóa nội dung"); }
    finally { setBusy(false); }
  }
  async function saveSettings(event: React.FormEvent): Promise<void> {
    event.preventDefault(); setBusy(true); setError("");
    try { await authRequest(`/weddings/${weddingId}/memories`, { method: "PATCH", body: JSON.stringify({ ...settings, closesAt: settings.closesAt || null }) }); await load(); flash("Đã lưu cài đặt album."); }
    catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể lưu cài đặt"); }
    finally { setBusy(false); }
  }
  async function regenerate(): Promise<void> {
    if (!(await confirm({ title: "Tạo link album mới?", description: "Link và mã QR hiện tại sẽ ngừng hoạt động ngay sau khi tạo token mới.", confirmLabel: "Tạo link mới", tone: "danger" }))) return;
    setBusy(true);
    try { await authRequest(`/weddings/${weddingId}/memories/regenerate-token`, { method: "POST" }); await load(); flash("Đã tạo link album mới."); }
    catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể tạo link mới"); }
    finally { setBusy(false); }
  }
  async function copy(value: string): Promise<void> {
    try { await navigator.clipboard.writeText(value); flash("Đã sao chép liên kết."); }
    catch { setError("Trình duyệt không cho phép sao chép tự động. Hãy chọn và sao chép liên kết thủ công."); }
  }

  if (loading && !data) return <AppShell active="memories" weddingId={weddingId}><DetailPageSkeleton /></AppShell>;
  if (!data) return <AppShell active="memories" weddingId={weddingId}><ErrorState title="Không thể mở album kỷ niệm" description={loadError?.message ?? "Album chưa sẵn sàng hoặc bạn không còn quyền truy cập."} requestId={loadError?.requestId} onRetry={() => void load()} homeHref={`/weddings/${weddingId}`} homeLabel="Về wedding workspace" /></AppShell>;

  return <AppShell active="memories" weddingId={weddingId}>
    <a className="back-link" href={`/weddings/${weddingId}`}>← Về wedding workspace</a>
    <div className="memory-hero"><div><span className="eyebrow">Post-wedding Experience</span><h1>Album kỷ niệm chung</h1><p>Mời khách chia sẻ ảnh và video, kiểm duyệt nhanh rồi lưu giữ thành một album đẹp sau ngày cưới.</p></div><div className="memory-hero-actions"><a className="btn btn-secondary" href={publicPath} target="_blank">Mở album công khai ↗</a><button className="btn btn-primary" onClick={() => setTab("share")}>Chia sẻ QR</button></div></div>
    {loadError && <Alert tone="error" title="Dữ liệu chưa được làm mới" requestId={loadError.requestId}>{loadError.message}</Alert>}
    {error && <Alert tone="error">{error}</Alert>}{success && <Alert tone="success">{success}</Alert>}
    <div className="metric-grid memory-metrics"><article className="metric"><span>Tổng nội dung</span><strong>{data.metrics.total}</strong></article><article className="metric"><span>Chờ duyệt</span><strong>{data.metrics.pending}</strong></article><article className="metric"><span>Đã công khai</span><strong>{data.metrics.approved}</strong></article><article className="metric"><span>Dung lượng</span><strong className="memory-size">{formatBytes(data.metrics.totalBytes)}</strong></article></div>
    <nav className="workspace-tabs memory-tabs">{(["gallery", "moderation", "settings", "share"] as Tab[]).map((key) => <button key={key} className={tab === key ? "active" : ""} onClick={() => setTab(key)}>{{ gallery: "Album", moderation: `Kiểm duyệt (${data.metrics.pending})`, settings: "Cài đặt", share: "Chia sẻ & QR" }[key]}</button>)}</nav>

    {(tab === "gallery" || tab === "moderation") && <section className="panel memory-panel">
      <div className="memory-toolbar"><div><h2>{tab === "moderation" ? "Hàng đợi kiểm duyệt" : "Tất cả khoảnh khắc"}</h2><p className="muted-small">Ảnh và video được sắp xếp theo thời gian gửi mới nhất.</p></div><div className="memory-toolbar-actions"><select aria-label="Lọc trạng thái" value={tab === "moderation" ? "PENDING" : filter} onChange={(event) => setFilter(event.target.value as MemoryStatus | "ALL")} disabled={tab === "moderation"}><option value="ALL">Tất cả trạng thái</option><option value="PENDING">Chờ duyệt</option><option value="APPROVED">Đã duyệt</option><option value="REJECTED">Từ chối</option><option value="ARCHIVED">Lưu trữ</option></select>{selected.length > 0 && canEdit && <button className="btn btn-primary" disabled={busy} onClick={() => void bulkApprove()}>Duyệt {selected.length} mục</button>}</div></div>
      <div className="memory-grid">{(tab === "moderation" ? data.assets.filter((item) => item.status === "PENDING") : filtered).map((asset) => <article className="memory-card" key={asset.id}><div className="memory-preview">{asset.type === "VIDEO" ? <video controls preload="metadata" src={memoryMediaUrl(asset.id, data.token)} /> : <img alt={asset.uploaderMessage || "Khoảnh khắc ngày cưới"} src={memoryMediaUrl(asset.id, data.token)} loading="lazy" />}{canEdit && asset.status === "PENDING" && <label className="memory-select"><input type="checkbox" checked={selected.includes(asset.id)} onChange={(event) => setSelected((current) => event.target.checked ? [...current, asset.id] : current.filter((id) => id !== asset.id))} /><span>Chọn</span></label>}<span className={`memory-status status-${asset.status?.toLowerCase()}`}>{statusLabel[asset.status ?? "PENDING"]}</span></div><div className="memory-card-body"><div><strong>{asset.uploaderName || asset.invitation?.guest.fullName || "Khách mời"}</strong><span>{new Date(asset.createdAt).toLocaleString("vi-VN")} · {formatBytes(asset.sizeBytes)}</span></div>{asset.uploaderMessage && <p>{asset.uploaderMessage}</p>}{asset.rejectionReason && <p className="memory-reason">Lý do: {asset.rejectionReason}</p>}{canEdit && <div className="memory-actions">{asset.status !== "APPROVED" && <button className="memory-action approve" disabled={busy} onClick={() => void moderate(asset.id, "APPROVED")}>Duyệt</button>}{asset.status === "PENDING" && <button className="memory-action reject" disabled={busy} onClick={() => setRejecting(asset)}>Từ chối</button>}{asset.status === "APPROVED" && <button className="memory-action" disabled={busy} onClick={() => void moderate(asset.id, "ARCHIVED")}>Lưu trữ</button>}<button className="memory-action delete" disabled={busy} onClick={() => void remove(asset)}>Xóa</button></div>}</div></article>)}</div>
      {(tab === "moderation" ? data.metrics.pending === 0 : filtered.length === 0) && <div className="empty-panel"><div className="empty-icon">♡</div><h3>{tab === "moderation" ? "Không còn nội dung chờ duyệt" : "Chưa có khoảnh khắc phù hợp"}</h3><p>Chia sẻ link hoặc QR để khách gửi ảnh và video.</p></div>}
    </section>}

    {tab === "settings" && <form className="panel memory-settings" onSubmit={(event) => void saveSettings(event)}><div className="panel-head"><div><h2>Nội dung và quyền riêng tư</h2><p className="muted-small">Tùy chỉnh lời cảm ơn, thời gian nhận ảnh và cách album xuất hiện với khách.</p></div></div><div className="form-grid two"><label>Tiêu đề album<input required maxLength={120} value={settings.title} onChange={(event) => setSettings({ ...settings, title: event.target.value })} /></label><label>Nhận nội dung đến<input type="datetime-local" value={settings.closesAt} onChange={(event) => setSettings({ ...settings, closesAt: event.target.value })} /></label></div><label>Mô tả album<textarea rows={4} maxLength={1000} value={settings.description} onChange={(event) => setSettings({ ...settings, description: event.target.value })} /></label><div className="form-grid two"><label>Tiêu đề lời cảm ơn<input required maxLength={120} value={settings.thankYouTitle} onChange={(event) => setSettings({ ...settings, thankYouTitle: event.target.value })} /></label><label className="memory-switch"><input type="checkbox" checked={settings.showUploaderName} onChange={(event) => setSettings({ ...settings, showUploaderName: event.target.checked })} /><span><strong>Hiển thị tên người gửi</strong><small>Ẩn tên để album riêng tư hơn.</small></span></label></div><label>Lời cảm ơn<textarea rows={4} maxLength={1200} value={settings.thankYouMessage} onChange={(event) => setSettings({ ...settings, thankYouMessage: event.target.value })} /></label><div className="memory-switch-grid"><label className="memory-switch"><input type="checkbox" checked={settings.publicEnabled} onChange={(event) => setSettings({ ...settings, publicEnabled: event.target.checked })} /><span><strong>Mở album công khai</strong><small>Khách có link có thể xem album.</small></span></label><label className="memory-switch"><input type="checkbox" checked={settings.uploadEnabled} onChange={(event) => setSettings({ ...settings, uploadEnabled: event.target.checked })} /><span><strong>Cho phép upload</strong><small>Tạm tắt khi không muốn nhận thêm nội dung.</small></span></label><label className="memory-switch"><input type="checkbox" checked={settings.moderationRequired} onChange={(event) => setSettings({ ...settings, moderationRequired: event.target.checked })} /><span><strong>Duyệt trước khi công khai</strong><small>Khuyến nghị bật để kiểm soát nội dung.</small></span></label></div><div className="form-actions"><button className="btn btn-primary" disabled={busy || !canEdit}>{busy ? "Đang lưu..." : "Lưu cài đặt"}</button></div></form>}

    {tab === "share" && <section className="memory-share-layout"><article className="panel memory-share-card"><span className="eyebrow">Link dành cho khách</span><h2>Quét QR để góp ảnh</h2><p>Đặt QR tại bàn tiệc, backdrop hoặc gửi cùng tin nhắn cảm ơn sau cưới.</p><img className="memory-qr" src={`${API_URL}/public/memories/${encodeURIComponent(data.token)}/qr.svg`} alt="QR album kỷ niệm" /><div className="memory-link-row"><input readOnly value={publicUrl} aria-label="Link album kỷ niệm" /><button className="btn btn-primary" onClick={() => void copy(publicUrl)}>Sao chép</button></div><div className="memory-share-actions"><a className="btn btn-secondary" href={`${API_URL}/public/memories/${encodeURIComponent(data.token)}/qr.svg`} download>Tải QR SVG</a><button className="btn btn-secondary" disabled={!canEdit || busy} onClick={() => void regenerate()}>Tạo link mới</button></div></article><article className="panel memory-tips"><span className="eyebrow">Gợi ý sử dụng</span><h2>Thu được nhiều khoảnh khắc hơn</h2><ol><li>Đặt QR ở lối vào và trên mỗi bàn.</li><li>Nhờ MC nhắc khách chia sẻ ảnh trong tiệc.</li><li>Gửi lại link trong lời cảm ơn sau cưới.</li><li>Duyệt nội dung mỗi ngày để album luôn đẹp.</li></ol><div className="memory-note"><strong>Quyền riêng tư</strong><p>Link có token ngẫu nhiên. Tạo link mới ngay khi nghi ngờ link cũ bị chia sẻ ngoài ý muốn.</p></div></article></section>}

    {rejecting && <div className="dialog-backdrop" role="presentation" onMouseDown={() => setRejecting(null)}><section className="dialog-card" role="dialog" aria-modal="true" aria-labelledby="reject-title" onMouseDown={(event) => event.stopPropagation()}><span className="eyebrow">Kiểm duyệt nội dung</span><h2 id="reject-title">Từ chối ảnh hoặc video?</h2><p>Người gửi không nhận thông báo tự động. Lý do giúp đội quản trị hiểu quyết định sau này.</p><label>Lý do từ chối<textarea rows={4} value={rejectReason} onChange={(event) => setRejectReason(event.target.value)} placeholder="Ví dụ: ảnh bị mờ, nội dung không phù hợp..." /></label><div className="dialog-actions"><button className="btn btn-secondary" onClick={() => setRejecting(null)}>Hủy</button><button className="btn btn-primary" disabled={busy} onClick={() => void moderate(rejecting.id, "REJECTED", rejectReason)}>Xác nhận từ chối</button></div></section></div>}
  </AppShell>;
}

export default function MemoriesPage() { return <AuthGate><MemoriesContent /></AuthGate>; }
