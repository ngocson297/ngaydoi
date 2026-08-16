"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { AppShell } from "../../../../components/app-shell";
import { AuthGate } from "../../../../components/auth-gate";
import { useAuth } from "../../../../components/auth-provider";
import { Alert, ConfirmDialog, DetailPageSkeleton, ErrorState, FormField, Tabs, tabPanelProps, useConfirm, useToast } from "../../../../components/ui";
import { API_URL, ApiError, toUiError, type UiError } from "../../../../lib/api";
import type { CursorPage, MemoryAsset, MemoryOwnerOverview, MemoryStatus, SocialModerationOverview } from "../../../../lib/memories";
import { memoryAlbumUrl, resolveMemoryMediaUrl } from "../../../../lib/memories";

type Tab = "gallery" | "moderation" | "social" | "settings" | "share";
const formatBytes = (value: number): string => value < 1024 * 1024 ? `${Math.max(1, Math.round(value / 1024))} KB` : value < 1024 * 1024 * 1024 ? `${(value / 1024 / 1024).toFixed(1)} MB` : `${(value / 1024 / 1024 / 1024).toFixed(2)} GB`;
const statusLabel: Record<MemoryStatus, string> = { PENDING: "Chờ duyệt", APPROVED: "Đã duyệt", REJECTED: "Từ chối", ARCHIVED: "Đã lưu trữ" };

function MemoriesContent() {
  const { confirm } = useConfirm();
  const { notify } = useToast();
  const { id: weddingId } = useParams<{ id: string }>();
  const { authRequest } = useAuth();
  const [data, setData] = useState<MemoryOwnerOverview | null>(null);
  const [assets, setAssets] = useState<MemoryAsset[]>([]);
  const [assetCursor, setAssetCursor] = useState<string | null>(null);
  const [assetLoading, setAssetLoading] = useState(false);
  const [social, setSocial] = useState<SocialModerationOverview | null>(null);
  const [socialLoading, setSocialLoading] = useState(false);
  const [tab, setTab] = useState<Tab>("gallery");
  const [filter, setFilter] = useState<MemoryStatus | "ALL">("ALL");
  const [selected, setSelected] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [loadError, setLoadError] = useState<UiError | null>(null);
  const [error, setError] = useState("");
  const [rejecting, setRejecting] = useState<MemoryAsset | null>(null);
  const [rejectReason, setRejectReason] = useState("");
  const [settings, setSettings] = useState({
    title: "", description: "", thankYouTitle: "", thankYouMessage: "", thankYouSignature: "", uploadEnabled: true, publicEnabled: true,
    moderationRequired: true, showUploaderName: true, reactionsEnabled: true, commentsEnabled: true,
    commentModerationRequired: false, downloadsEnabled: true, guestbookEnabled: true, guestbookModerationRequired: true,
    memoryModeEnabled: false, showCouplePhoto: true, showWeddingDate: true, closesAt: "",
  });

  const applySettings = useCallback((result: MemoryOwnerOverview) => {
    setSettings({
      title: result.title, description: result.description, thankYouTitle: result.thankYouTitle, thankYouMessage: result.thankYouMessage,
      uploadEnabled: result.uploadEnabled, publicEnabled: result.publicEnabled, moderationRequired: result.moderationRequired,
      showUploaderName: result.showUploaderName, reactionsEnabled: result.reactionsEnabled, commentsEnabled: result.commentsEnabled,
      commentModerationRequired: result.commentModerationRequired, downloadsEnabled: result.downloadsEnabled, guestbookEnabled: result.guestbookEnabled,
      guestbookModerationRequired: result.guestbookModerationRequired, memoryModeEnabled: result.memoryModeEnabled,
      thankYouSignature: result.thankYouSignature ?? "", showCouplePhoto: result.showCouplePhoto, showWeddingDate: result.showWeddingDate,
      closesAt: result.closesAt ? new Date(result.closesAt).toISOString().slice(0, 16) : "",
    });
  }, []);

  const load = useCallback(async () => {
    try {
      const result = await authRequest<MemoryOwnerOverview>(`/weddings/${weddingId}/memories`);
      setData(result);
      setAssets(result.assets);
      setAssetCursor(result.assetPageInfo.nextCursor);
      applySettings(result);
      setLoadError(null);
    } catch (reason) { setLoadError(toUiError(reason, "Không thể tải album kỷ niệm.")); }
    finally { setLoading(false); }
  }, [applySettings, authRequest, weddingId]);

  useEffect(() => { void load(); }, [load]);

  const canEdit = data?.access === "OWNER" || data?.access === "EDIT";
  const activeStatus = tab === "moderation" ? "PENDING" : filter;
  const publicPath = data ? memoryAlbumUrl(data.token) : "";
  const publicUrl = typeof window !== "undefined" && publicPath ? `${window.location.origin}${publicPath}` : publicPath;
  const socialPending = (data?.socialMetrics.pendingComments ?? 0) + (data?.socialMetrics.pendingGuestbook ?? 0);
  const visibleAssets = useMemo(() => assets.filter((item) => activeStatus === "ALL" || item.status === activeStatus), [activeStatus, assets]);

  const loadAssets = useCallback(async (status: MemoryStatus | "ALL", append = false) => {
    if (assetLoading) return;
    setAssetLoading(true);
    try {
      const cursor = append ? assetCursor : null;
      const page = await authRequest<CursorPage<MemoryAsset>>(`/weddings/${weddingId}/memories/assets?limit=36&status=${status}${cursor ? `&cursor=${encodeURIComponent(cursor)}` : ""}`);
      setAssets((current) => append ? [...current, ...page.items.filter((item) => !current.some((existing) => existing.id === item.id))] : page.items);
      setAssetCursor(page.nextCursor);
      setSelected([]);
    } catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể tải danh sách album"); }
    finally { setAssetLoading(false); }
  }, [assetCursor, assetLoading, authRequest, weddingId]);

  useEffect(() => {
    if (!data) return;
    if (tab === "moderation") void loadAssets("PENDING");
    else if (tab === "gallery") void loadAssets(filter);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab, filter]);

  const loadSocial = useCallback(async () => {
    setSocialLoading(true);
    try { setSocial(await authRequest<SocialModerationOverview>(`/weddings/${weddingId}/memories/social`)); }
    catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể tải hàng đợi tương tác"); }
    finally { setSocialLoading(false); }
  }, [authRequest, weddingId]);

  useEffect(() => { if (tab === "social") void loadSocial(); }, [loadSocial, tab]);

  async function moderate(assetId: string, status: "APPROVED" | "REJECTED" | "ARCHIVED", rejectionReason?: string): Promise<void> {
    setBusy(true); setError("");
    try {
      await authRequest(`/weddings/${weddingId}/memories/assets/${assetId}`, { method: "PATCH", body: JSON.stringify({ status, rejectionReason }) });
      notify({ tone: "success", title: status === "APPROVED" ? "Đã duyệt nội dung" : status === "REJECTED" ? "Đã từ chối nội dung" : "Đã lưu trữ nội dung" });
      await Promise.all([load(), loadAssets(activeStatus as MemoryStatus | "ALL")]);
    } catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể cập nhật nội dung"); }
    finally { setBusy(false); setRejecting(null); setRejectReason(""); }
  }

  async function toggleFeatured(asset: MemoryAsset): Promise<void> {
    const featured = asset.featuredOrder == null;
    setBusy(true); setError("");
    try {
      await authRequest(`/weddings/${weddingId}/memories/assets/${asset.id}/featured`, { method: "PATCH", body: JSON.stringify({ featured }) });
      notify({ tone: "success", title: featured ? "Đã thêm vào khoảnh khắc nổi bật" : "Đã bỏ khỏi khoảnh khắc nổi bật" });
      await Promise.all([load(), loadAssets(activeStatus as MemoryStatus | "ALL")]);
    } catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể cập nhật khoảnh khắc nổi bật"); }
    finally { setBusy(false); }
  }

  async function bulkApprove(): Promise<void> {
    if (!selected.length) return;
    setBusy(true);
    try {
      const result = await authRequest<{ updated: number }>(`/weddings/${weddingId}/memories/assets/bulk`, { method: "POST", body: JSON.stringify({ assetIds: selected, status: "APPROVED" }) });
      notify({ tone: "success", title: `Đã duyệt ${result.updated} nội dung` });
      setSelected([]);
      await Promise.all([load(), loadAssets("PENDING")]);
    } catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể duyệt hàng loạt"); }
    finally { setBusy(false); }
  }

  async function remove(asset: MemoryAsset): Promise<void> {
    if (!(await confirm({ title: "Xóa nội dung khỏi album?", description: "Ảnh hoặc video sẽ bị xóa vĩnh viễn khỏi storage và không thể khôi phục.", confirmLabel: "Xóa vĩnh viễn", tone: "danger" }))) return;
    setBusy(true);
    try {
      await authRequest(`/weddings/${weddingId}/memories/assets/${asset.id}`, { method: "DELETE" });
      notify({ tone: "success", title: "Đã xóa nội dung" });
      await Promise.all([load(), loadAssets(activeStatus as MemoryStatus | "ALL")]);
    } catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể xóa nội dung"); }
    finally { setBusy(false); }
  }

  async function moderateSocial(kind: "comment" | "guestbook", id: string, status: "APPROVED" | "HIDDEN"): Promise<void> {
    setBusy(true);
    try {
      await authRequest(`/weddings/${weddingId}/memories/social/${kind}/${id}`, { method: "PATCH", body: JSON.stringify({ status }) });
      notify({ tone: "success", title: status === "APPROVED" ? "Đã công khai nội dung" : "Đã ẩn nội dung" });
      await Promise.all([loadSocial(), load()]);
    } catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể kiểm duyệt tương tác"); }
    finally { setBusy(false); }
  }

  async function deleteOwnerComment(id: string): Promise<void> {
    if (!(await confirm({ title: "Xóa bình luận khỏi album?", description: "Bình luận sẽ biến mất với khách ngay lập tức nhưng vẫn được giữ trạng thái ẩn để đối chiếu moderation.", confirmLabel: "Xóa bình luận", tone: "danger" }))) return;
    setBusy(true); setError("");
    try {
      await authRequest(`/weddings/${weddingId}/memories/comments/${id}`, { method: "DELETE" });
      notify({ tone: "success", title: "Đã xóa bình luận" });
      await Promise.all([loadSocial(), load()]);
    } catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể xóa bình luận"); }
    finally { setBusy(false); }
  }

  async function saveSettings(event: React.FormEvent): Promise<void> {
    event.preventDefault(); setBusy(true); setError("");
    try {
      await authRequest(`/weddings/${weddingId}/memories`, { method: "PATCH", body: JSON.stringify({ ...settings, closesAt: settings.closesAt || null }) });
      await load();
      notify({ tone: "success", title: "Đã lưu cài đặt album" });
    } catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể lưu cài đặt"); }
    finally { setBusy(false); }
  }

  async function regenerate(): Promise<void> {
    if (!(await confirm({ title: "Tạo link album mới?", description: "Link và mã QR hiện tại sẽ ngừng hoạt động ngay sau khi tạo token mới.", confirmLabel: "Tạo link mới", tone: "danger" }))) return;
    setBusy(true);
    try { await authRequest(`/weddings/${weddingId}/memories/regenerate-token`, { method: "POST" }); await load(); notify({ tone: "success", title: "Đã tạo link album mới" }); }
    catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể tạo link mới"); }
    finally { setBusy(false); }
  }

  async function copy(value: string): Promise<void> {
    try { await navigator.clipboard.writeText(value); notify({ tone: "success", title: "Đã sao chép liên kết", message: "Liên kết album đã sẵn sàng để gửi cho khách." }); }
    catch { setError("Trình duyệt không cho phép sao chép tự động. Hãy chọn và sao chép liên kết thủ công."); }
  }

  if (loading && !data) return <AppShell active="memories" weddingId={weddingId}><DetailPageSkeleton /></AppShell>;
  if (!data) return <AppShell active="memories" weddingId={weddingId}><ErrorState title="Không thể mở album kỷ niệm" description={loadError?.message ?? "Album chưa sẵn sàng hoặc bạn không còn quyền truy cập."} requestId={loadError?.requestId} onRetry={() => void load()} homeHref={`/weddings/${weddingId}`} homeLabel="Về wedding workspace" /></AppShell>;

  return <AppShell active="memories" weddingId={weddingId}>
    <div className="memory-owner-page">
    <a className="back-link" href={`/weddings/${weddingId}`}>← Về wedding workspace</a>
    <div className="memory-hero"><div><span className="eyebrow">{data.memoryModeEnabled ? "Post-Wedding Memory" : "Wedding Social Space"}</span><h1>{data.memoryModeEnabled ? "Trang kỷ niệm sau ngày cưới" : "Album kỷ niệm chung"}</h1><p>{data.memoryModeEnabled ? "Thiệp công khai đang ở chế độ sau cưới: RSVP và đếm ngược được đóng, trong khi album, lời chúc và hành trình vẫn được giữ lại." : "Một nơi để khách cùng đăng ảnh, thả tim, bình luận và lưu lời chúc — vẫn nằm trong phạm vi riêng của từng đám cưới."}</p></div><div className="memory-hero-actions"><a className="btn btn-secondary" href={publicPath} target="_blank" rel="noreferrer">Mở album công khai ↗</a>{data.publicEnabled && data.downloadsEnabled && data.metrics.approved > 0 ? <a className="btn btn-secondary" href={`${API_URL}/public/memories/${encodeURIComponent(data.token)}/archive`}>Tải album ZIP</a> : null}<button className="btn btn-primary" onClick={() => setTab("share")}>Chia sẻ QR</button></div></div>
    {loadError && <Alert tone="error" title="Dữ liệu chưa được làm mới" requestId={loadError.requestId}>{loadError.message}</Alert>}
    {error && <Alert tone="error">{error}</Alert>}
    <div className="metric-grid memory-metrics"><article className="metric"><span>Tổng nội dung</span><strong>{data.metrics.total}</strong></article><article className="metric"><span>Chờ duyệt</span><strong>{data.metrics.pending}</strong></article><article className="metric"><span>Tương tác chờ duyệt</span><strong>{socialPending}</strong></article><article className="metric"><span>Dung lượng</span><strong className="memory-size">{formatBytes(data.metrics.totalBytes)}</strong><small>{formatBytes(data.storagePolicy.remainingBytes)} còn lại / {formatBytes(data.storagePolicy.maxBytes)}</small></article></div>
    <Tabs<Tab> id="memory-tabs" label="Khu vực album kỷ niệm" className="workspace-tabs memory-tabs" value={tab} onChange={setTab} items={[
      { value: "gallery", label: "Album" },
      { value: "moderation", label: `Ảnh chờ duyệt (${data.metrics.pending})` },
      { value: "social", label: `Lời chúc & bình luận (${socialPending})` },
      { value: "settings", label: "Cài đặt" },
      { value: "share", label: "Chia sẻ & QR" },
    ]} />

    {(tab === "gallery" || tab === "moderation") && <section className="panel memory-panel" {...tabPanelProps("memory-tabs", tab)}>
      <div className="memory-toolbar"><div><h2>{tab === "moderation" ? "Hàng đợi kiểm duyệt" : "Tất cả khoảnh khắc"}</h2><p className="muted-small">Dữ liệu được phân trang để album lớn vẫn tải nhanh.</p></div><div className="memory-toolbar-actions"><select aria-label="Lọc trạng thái" value={tab === "moderation" ? "PENDING" : filter} onChange={(event) => setFilter(event.target.value as MemoryStatus | "ALL")} disabled={tab === "moderation"}><option value="ALL">Tất cả trạng thái</option><option value="PENDING">Chờ duyệt</option><option value="APPROVED">Đã duyệt</option><option value="REJECTED">Từ chối</option><option value="ARCHIVED">Lưu trữ</option></select>{selected.length > 0 && canEdit && <button className="btn btn-primary" disabled={busy} onClick={() => void bulkApprove()}>Duyệt {selected.length} mục</button>}</div></div>
      <div className="memory-grid">{visibleAssets.map((asset) => <article className="memory-card" key={asset.id}><div className="memory-preview">{asset.type === "VIDEO" ? <video aria-label={asset.uploaderMessage || "Video khoảnh khắc ngày cưới"} controls preload="metadata" src={resolveMemoryMediaUrl(asset, data.token)} /> : <img alt={asset.uploaderMessage || "Khoảnh khắc ngày cưới"} src={resolveMemoryMediaUrl(asset, data.token)} loading="lazy" />}{canEdit && asset.status === "PENDING" && <label className="memory-select"><input type="checkbox" checked={selected.includes(asset.id)} onChange={(event) => setSelected((current) => event.target.checked ? [...current, asset.id] : current.filter((id) => id !== asset.id))} /><span>Chọn</span></label>}<span className={`memory-status status-${asset.status?.toLowerCase()}`}>{statusLabel[asset.status ?? "PENDING"]}</span>{asset.featuredOrder != null && <span className="memory-featured-badge">★ Nổi bật</span>}</div><div className="memory-card-body"><div><strong>{asset.uploaderName || asset.invitation?.guest.fullName || "Khách mời"}</strong><span>{new Date(asset.createdAt).toLocaleString("vi-VN")} · {formatBytes(asset.sizeBytes)}</span></div>{asset.uploaderMessage && <p>{asset.uploaderMessage}</p>}<div className="memory-owner-social-counts"><span>♥ {asset.reactionCount ?? 0}</span><span>◌ {asset.commentCount ?? 0}</span></div>{asset.rejectionReason && <p className="memory-reason">Lý do: {asset.rejectionReason}</p>}{canEdit && <div className="memory-actions">{asset.status !== "APPROVED" && <button className="memory-action approve" disabled={busy} onClick={() => void moderate(asset.id, "APPROVED")}>Duyệt</button>}{asset.status === "PENDING" && <button className="memory-action reject" disabled={busy} onClick={() => setRejecting(asset)}>Từ chối</button>}{asset.status === "APPROVED" && <button className={`memory-action ${asset.featuredOrder != null ? "featured" : ""}`} disabled={busy} onClick={() => void toggleFeatured(asset)}>{asset.featuredOrder != null ? "Bỏ nổi bật" : "★ Nổi bật"}</button>}{asset.status === "APPROVED" && <button className="memory-action" disabled={busy} onClick={() => void moderate(asset.id, "ARCHIVED")}>Lưu trữ</button>}<button className="memory-action delete" disabled={busy} onClick={() => void remove(asset)}>Xóa</button></div>}</div></article>)}</div>
      {visibleAssets.length === 0 && <div className="empty-panel"><div className="empty-icon">♡</div><h3>{tab === "moderation" ? "Không còn nội dung chờ duyệt" : "Chưa có khoảnh khắc phù hợp"}</h3><p>Chia sẻ link hoặc QR để khách gửi ảnh và video.</p></div>}
      {assetCursor && <div className="memory-owner-load-more"><button type="button" className="btn btn-secondary" disabled={assetLoading} onClick={() => void loadAssets(activeStatus as MemoryStatus | "ALL", true)}>{assetLoading ? "Đang tải…" : "Tải thêm nội dung"}</button></div>}
    </section>}

    {tab === "social" && <section className="panel memory-panel" {...tabPanelProps("memory-tabs", "social")}><div className="memory-toolbar"><div><h2>Quản lý lời chúc & bình luận</h2><p className="muted-small">Bình luận mặc định xuất hiện ngay. Bạn vẫn có thể bật duyệt trước hoặc xóa nội dung không phù hợp bất cứ lúc nào.</p></div><button type="button" className="btn btn-secondary" disabled={socialLoading} onClick={() => void loadSocial()}>Làm mới</button></div>{socialLoading && !social ? <p>Đang tải…</p> : <div className="memory-social-moderation-grid"><article><h3>Sổ lưu bút chờ duyệt <span>{social?.guestbook.length ?? 0}</span></h3>{social?.guestbook.length ? social.guestbook.map((entry) => <div className="memory-moderation-item" key={entry.id}><strong>{entry.authorName}</strong><p>{entry.message}</p><small>{new Date(entry.createdAt).toLocaleString("vi-VN")}</small>{canEdit && <div><button disabled={busy} onClick={() => void moderateSocial("guestbook", entry.id, "APPROVED")}>Duyệt</button><button disabled={busy} onClick={() => void moderateSocial("guestbook", entry.id, "HIDDEN")}>Ẩn</button></div>}</div>) : <p className="muted-small">Không có lời chúc chờ duyệt.</p>}</article><article><h3>Bình luận gần đây <span>{social?.comments.length ?? 0}</span></h3>{social?.comments.length ? social.comments.map((comment) => <div className="memory-moderation-item" key={comment.id}><div className="memory-comment-owner-head"><strong>{comment.authorName}</strong><span className={`memory-comment-status ${comment.status.toLowerCase()}`}>{comment.status === "PENDING" ? "Chờ duyệt" : "Đã đăng"}</span></div><p>{comment.body}</p><small>{new Date(comment.createdAt).toLocaleString("vi-VN")}</small>{canEdit && <div>{comment.status === "PENDING" && <button disabled={busy} onClick={() => void moderateSocial("comment", comment.id, "APPROVED")}>Duyệt</button>}<button className="danger" disabled={busy} onClick={() => void deleteOwnerComment(comment.id)}>Xóa</button></div>}</div>) : <p className="muted-small">Chưa có bình luận.</p>}</article></div>}</section>}

    {tab === "settings" && <form className="panel memory-settings" {...tabPanelProps("memory-tabs", "settings")} onSubmit={(event) => void saveSettings(event)}><div className="panel-head"><div><h2>Nội dung, quyền riêng tư và tương tác</h2><p className="muted-small">Bạn quyết định khách được xem, upload và tương tác đến mức nào.</p></div></div><div className={`memory-mode-callout ${settings.memoryModeEnabled ? "is-active" : ""}`}><div><span className="eyebrow">Sprint 15.13 · Post-Wedding</span><h3>Chế độ trang kỷ niệm</h3><p>Bật sau lễ cưới để giữ nguyên link thiệp nhưng chuyển trải nghiệm sang lời cảm ơn, khoảnh khắc nổi bật và sổ lưu bút. RSVP và đếm ngược sẽ tự đóng.</p></div><label className="memory-switch"><input type="checkbox" checked={settings.memoryModeEnabled} onChange={(event) => setSettings({ ...settings, memoryModeEnabled: event.target.checked })} /><span><strong>{settings.memoryModeEnabled ? "Đang bật trang kỷ niệm" : "Thiệp cưới đang hoạt động"}</strong><small>Có thể tắt để quay lại invitation mode.</small></span></label></div><div className="form-grid two"><label>Tiêu đề album<input required maxLength={120} value={settings.title} onChange={(event) => setSettings({ ...settings, title: event.target.value })} /></label><label>Nhận nội dung đến<input type="datetime-local" value={settings.closesAt} onChange={(event) => setSettings({ ...settings, closesAt: event.target.value })} /></label></div><label>Mô tả album<textarea rows={4} maxLength={1000} value={settings.description} onChange={(event) => setSettings({ ...settings, description: event.target.value })} /></label><div className="form-grid two"><label>Tiêu đề lời cảm ơn<input required maxLength={120} value={settings.thankYouTitle} onChange={(event) => setSettings({ ...settings, thankYouTitle: event.target.value })} /></label><label className="memory-switch"><input type="checkbox" checked={settings.showUploaderName} onChange={(event) => setSettings({ ...settings, showUploaderName: event.target.checked })} /><span><strong>Hiển thị tên người gửi</strong><small>Ẩn tên để album riêng tư hơn.</small></span></label></div><label>Lời cảm ơn<textarea rows={4} maxLength={1200} value={settings.thankYouMessage} onChange={(event) => setSettings({ ...settings, thankYouMessage: event.target.value })} /></label><div className="form-grid two"><label>Chữ ký lời cảm ơn<input maxLength={160} value={settings.thankYouSignature} onChange={(event) => setSettings({ ...settings, thankYouSignature: event.target.value })} placeholder={`${data.wedding.groomName} & ${data.wedding.brideName}`} /></label><div className="memory-switch-grid compact"><label className="memory-switch"><input type="checkbox" checked={settings.showCouplePhoto} onChange={(event) => setSettings({ ...settings, showCouplePhoto: event.target.checked })} /><span><strong>Hiển thị ảnh đôi</strong><small>Dùng ảnh cover hiện tại trên trang cảm ơn.</small></span></label><label className="memory-switch"><input type="checkbox" checked={settings.showWeddingDate} onChange={(event) => setSettings({ ...settings, showWeddingDate: event.target.checked })} /><span><strong>Hiển thị ngày cưới</strong><small>Giữ dấu mốc ngày chung đôi.</small></span></label></div></div><div className="memory-switch-grid"><label className="memory-switch"><input type="checkbox" checked={settings.publicEnabled} onChange={(event) => setSettings({ ...settings, publicEnabled: event.target.checked })} /><span><strong>Mở Wedding Space</strong><small>Khách có link có thể xem album và sổ lưu bút.</small></span></label><label className="memory-switch"><input type="checkbox" checked={settings.uploadEnabled} onChange={(event) => setSettings({ ...settings, uploadEnabled: event.target.checked })} /><span><strong>Cho phép upload</strong><small>Tạm tắt khi không muốn nhận thêm nội dung.</small></span></label><label className="memory-switch"><input type="checkbox" checked={settings.moderationRequired} onChange={(event) => setSettings({ ...settings, moderationRequired: event.target.checked })} /><span><strong>Duyệt ảnh/video trước</strong><small>Khuyến nghị bật trong ngày cưới.</small></span></label><label className="memory-switch"><input type="checkbox" checked={settings.reactionsEnabled} onChange={(event) => setSettings({ ...settings, reactionsEnabled: event.target.checked })} /><span><strong>Cho phép thả tim</strong><small>Khách có thể tương tác nhẹ với khoảnh khắc.</small></span></label><label className="memory-switch"><input type="checkbox" checked={settings.commentsEnabled} onChange={(event) => setSettings({ ...settings, commentsEnabled: event.target.checked })} /><span><strong>Cho phép bình luận</strong><small>Bình luận chỉ tồn tại trong wedding này.</small></span></label><label className="memory-switch"><input type="checkbox" checked={settings.commentModerationRequired} onChange={(event) => setSettings({ ...settings, commentModerationRequired: event.target.checked })} /><span><strong>Duyệt bình luận trước</strong><small>Mặc định tắt để bình luận xuất hiện ngay. Bật khi sự kiện cần kiểm duyệt chặt.</small></span></label><label className="memory-switch"><input type="checkbox" checked={settings.guestbookEnabled} onChange={(event) => setSettings({ ...settings, guestbookEnabled: event.target.checked })} /><span><strong>Hiển thị Sổ lưu bút</strong><small>Chỉ lời chúc mà khách đồng ý công khai.</small></span></label><label className="memory-switch"><input type="checkbox" checked={settings.guestbookModerationRequired} onChange={(event) => setSettings({ ...settings, guestbookModerationRequired: event.target.checked })} /><span><strong>Duyệt lời chúc trước</strong><small>Chủ thiệp quyết định lời chúc nào xuất hiện.</small></span></label><label className="memory-switch"><input type="checkbox" checked={settings.downloadsEnabled} onChange={(event) => setSettings({ ...settings, downloadsEnabled: event.target.checked })} /><span><strong>Cho phép tải file</strong><small>Khách có thể lưu lại ảnh/video công khai.</small></span></label></div><div className="form-actions"><button className="btn btn-primary" disabled={busy || !canEdit}>{busy ? "Đang lưu..." : "Lưu cài đặt"}</button></div></form>}

    {tab === "share" && <section className="memory-share-layout" {...tabPanelProps("memory-tabs", "share")}><article className="panel memory-share-card"><span className="eyebrow">Link dành cho khách</span><h2>Quét QR để vào Wedding Space</h2><p>Khách có thể xem album, góp ảnh, thả tim, bình luận và đọc lời chúc đã được duyệt.</p><img className="memory-qr" src={`${API_URL}/public/memories/${encodeURIComponent(data.token)}/qr.svg`} alt="QR album kỷ niệm" /><div className="memory-link-row"><input readOnly value={publicUrl} aria-label="Link album kỷ niệm" /><button className="btn btn-primary" onClick={() => void copy(publicUrl)}>Sao chép</button></div><div className="memory-share-actions"><a className="btn btn-secondary" href={`${API_URL}/public/memories/${encodeURIComponent(data.token)}/qr.svg`} download>Tải QR SVG</a><button className="btn btn-secondary" disabled={!canEdit || busy} onClick={() => void regenerate()}>Tạo link mới</button></div></article><article className="panel memory-tips"><span className="eyebrow">Production architecture</span><h2>Upload không làm nghẽn API</h2><div className="memory-architecture"><code>Điện thoại khách</code><span>↓</span><code>Object Storage (S3 / R2)</code><span>↓</span><code>CDN</code><span>↓</span><code>Album</code></div><p className="muted-small">Ở local, hệ thống tự fallback về upload qua API để self-test. Khi cấu hình S3/R2, client dùng presigned URL và upload trực tiếp.</p></article></section>}

    <ConfirmDialog open={Boolean(rejecting)} tone="danger" title="Từ chối ảnh hoặc video?" description="Người gửi không nhận thông báo tự động. Lý do giúp đội quản trị hiểu quyết định sau này." confirmLabel="Xác nhận từ chối" loading={busy} confirmDisabled={rejectReason.trim().length < 3} onClose={() => { setRejecting(null); setRejectReason(""); }} onConfirm={() => { if (rejecting) void moderate(rejecting.id, "REJECTED", rejectReason); }}><FormField id="memory-reject-reason" label="Lý do từ chối" required helperText="Mô tả ngắn gọn để đội quản trị có thể đối chiếu về sau." error={rejectReason.length > 0 && rejectReason.trim().length < 3 ? "Lý do cần có ít nhất 3 ký tự." : undefined}><textarea rows={4} required value={rejectReason} onChange={(event) => setRejectReason(event.target.value)} placeholder="Ví dụ: ảnh bị mờ, nội dung không phù hợp..." /></FormField></ConfirmDialog>
    </div>
  </AppShell>;
}

export default function MemoriesPage() { return <AuthGate><MemoriesContent /></AuthGate>; }
