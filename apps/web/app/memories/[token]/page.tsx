"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { Alert, Button, ErrorState, FileUploadField, FormActions, FormField, PageSkeleton, useConfirm, useUnsavedChangesGuard } from "../../../components/ui";
import { API_URL, ApiError, apiRequest, toUiError, type UiError } from "../../../lib/api";
import type { CursorPage, GuestbookEntry, MemoryAsset, MemoryComment, PublicMemoryAlbum } from "../../../lib/memories";
import { memoryDownloadUrl, resolveMemoryMediaUrl } from "../../../lib/memories";

interface UploadItem { file: File; preview: string; status: "READY" | "UPLOADING" | "DONE" | "ERROR"; error?: string }
interface DirectUploadPreparation { strategy: "DIRECT" | "PROXY"; uploadUrl?: string; headers?: Record<string, string>; uploadTicket?: string }
const fileKey = (file: File): string => `${file.name}-${file.size}-${file.lastModified}`;
const formatMb = (bytes: number): string => `${Math.max(1, Math.round(bytes / 1024 / 1024))} MB`;

function HeartIcon({ filled = false }: { filled?: boolean }) {
  return <svg className="memory-action-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function CommentIcon() {
  return <svg className="memory-action-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9.5 9.5 0 0 1-3.7-.8L3 21l1.8-5A8.5 8.5 0 1 1 21 11.5Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function DownloadIcon() {
  return <svg className="memory-action-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 20h14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function TrashIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16m-10 4v6m4-6v6M9 7l1-3h4l1 3m3 0-1 14H7L6 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function SendIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21 3-7.5 18-2.6-7.9L3 10.5 21 3Zm-10.1 10.1L21 3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function ensureViewerKey(): string {
  const storageKey = "ngaydoi-memory-viewer-key";
  const existing = window.localStorage.getItem(storageKey);
  if (existing) return existing;
  const value = window.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}-${Math.random().toString(36).slice(2)}`;
  window.localStorage.setItem(storageKey, value);
  return value;
}

export default function PublicMemoriesPage() {
  const { token } = useParams<{ token: string }>();
  const { confirm } = useConfirm();
  const [viewerKey, setViewerKey] = useState("");
  const [invitationToken, setInvitationToken] = useState("");
  const [album, setAlbum] = useState<PublicMemoryAlbum | null>(null);
  const [assets, setAssets] = useState<MemoryAsset[]>([]);
  const [nextCursor, setNextCursor] = useState<string | null>(null);
  const [loadingMore, setLoadingMore] = useState(false);
  const [guestbook, setGuestbook] = useState<GuestbookEntry[]>([]);
  const [guestbookCursor, setGuestbookCursor] = useState<string | null>(null);
  const [guestbookBusy, setGuestbookBusy] = useState(false);
  const [items, setItems] = useState<UploadItem[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<UiError | null>(null);
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");
  const [expandedComments, setExpandedComments] = useState<string | null>(null);
  const [comments, setComments] = useState<Record<string, MemoryComment[]>>({});
  const [commentsCursor, setCommentsCursor] = useState<Record<string, string | null>>({});
  const [commentDraft, setCommentDraft] = useState<Record<string, string>>({});
  const [commentBusy, setCommentBusy] = useState<string | null>(null);
  const [reactionBusy, setReactionBusy] = useState<string | null>(null);
  const [downloadMode, setDownloadMode] = useState(false);
  const [downloadSelected, setDownloadSelected] = useState<string[]>([]);
  const [archiveBusy, setArchiveBusy] = useState(false);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const load = useCallback(async (key: string): Promise<void> => {
    setLoading(true);
    setLoadError(null);
    try {
      const result = await apiRequest<PublicMemoryAlbum>(`/public/memories/${encodeURIComponent(token)}?viewer=${encodeURIComponent(key)}`);
      setAlbum(result);
      setAssets(result.assets);
      setNextCursor(result.assetPageInfo.nextCursor);
      setGuestbook(result.guestbook ?? []);
      setGuestbookCursor(result.guestbookPageInfo?.nextCursor ?? null);
    } catch (reason) { setLoadError(toUiError(reason, "Không thể mở album kỷ niệm.")); }
    finally { setLoading(false); }
  }, [token]);

  useEffect(() => {
    const key = ensureViewerKey();
    setViewerKey(key);
    setInvitationToken(new URLSearchParams(window.location.search).get("guest") ?? "");
    void load(key);
  }, [load]);

  const loadMore = useCallback(async (): Promise<void> => {
    if (!nextCursor || loadingMore || !viewerKey) return;
    setLoadingMore(true);
    try {
      const page = await apiRequest<CursorPage<MemoryAsset>>(`/public/memories/${encodeURIComponent(token)}/assets?cursor=${encodeURIComponent(nextCursor)}&limit=24&viewer=${encodeURIComponent(viewerKey)}`);
      setAssets((current) => [...current, ...page.items.filter((item) => !current.some((existing) => existing.id === item.id))]);
      setNextCursor(page.nextCursor);
    } catch (reason) { setError(reason instanceof ApiError ? reason.message : "Chưa thể tải thêm khoảnh khắc."); }
    finally { setLoadingMore(false); }
  }, [loadingMore, nextCursor, token, viewerKey]);

  useEffect(() => {
    const node = loadMoreRef.current;
    if (!node || !nextCursor) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) void loadMore();
    }, { rootMargin: "500px 0px" });
    observer.observe(node);
    return () => observer.disconnect();
  }, [loadMore, nextCursor]);

  const completed = items.filter((item) => item.status === "DONE").length;
  const uploadDirty = items.some((item) => item.status !== "DONE") || Boolean(name.trim()) || Boolean(message.trim());
  const guard = useUnsavedChangesGuard(uploadDirty && !busy);

  function choose(files: FileList | null): void {
    if (!files || !album) return;
    const incoming = Array.from(files);
    const policy = album.uploadPolicy;
    const accepted = incoming.filter((file) => {
      if (!["image/jpeg", "image/png", "image/webp", "video/mp4", "video/webm", "video/quicktime"].includes(file.type)) return false;
      return file.size <= (file.type.startsWith("video/") ? policy.maxVideoBytes : policy.maxImageBytes);
    });
    const rejected = incoming.length - accepted.length;
    const existing = new Set(items.map((item) => fileKey(item.file)));
    const available = Math.max(0, Math.min(policy.maxFilesPerBatch, policy.remainingItems) - items.length);
    const unique = accepted.filter((file) => !existing.has(fileKey(file)));
    if (rejected > 0) setError(`${rejected} file không đúng định dạng hoặc vượt giới hạn dung lượng.`);
    else if (unique.length > available) setError(`Mỗi lượt chỉ có thể chọn tối đa ${Math.min(policy.maxFilesPerBatch, policy.remainingItems)} file.`);
    else setError("");
    setItems([...items, ...unique.slice(0, available).map((file) => ({ file, preview: URL.createObjectURL(file), status: "READY" as const }))]);
  }

  function remove(index: number): void {
    setItems((current) => {
      const item = current[index];
      if (item) URL.revokeObjectURL(item.preview);
      return current.filter((_, itemIndex) => itemIndex !== index);
    });
  }

  async function uploadOne(file: File): Promise<void> {
    if (!album) throw new Error("Album chưa sẵn sàng");
    if (album.uploadPolicy.strategy === "DIRECT") {
      const prep = await apiRequest<DirectUploadPreparation>(`/public/memories/${encodeURIComponent(token)}/upload/prepare`, {
        method: "POST",
        body: JSON.stringify({
          mimeType: file.type,
          sizeBytes: file.size,
          originalName: file.name,
          uploaderName: name,
          uploaderMessage: message,
          invitationToken,
        }),
      });
      if (prep.strategy === "DIRECT" && prep.uploadUrl && prep.uploadTicket) {
        const response = await fetch(prep.uploadUrl, { method: "PUT", headers: prep.headers, body: file });
        if (!response.ok) throw new Error(`Storage từ chối upload (${response.status}).`);
        await apiRequest(`/public/memories/${encodeURIComponent(token)}/upload/complete`, { method: "POST", body: JSON.stringify({ uploadTicket: prep.uploadTicket }) });
        return;
      }
    }
    const form = new FormData();
    form.append("file", file);
    form.append("uploaderName", name);
    form.append("uploaderMessage", message);
    if (invitationToken) form.append("invitationToken", invitationToken);
    const response = await fetch(`${API_URL}/public/memories/${encodeURIComponent(token)}/upload`, { method: "POST", body: form });
    const body = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(String(body.message || "Upload không thành công"));
  }

  async function upload(event: React.FormEvent): Promise<void> {
    event.preventDefault();
    if (!items.length) { setError("Vui lòng chọn ít nhất một ảnh hoặc video."); return; }
    setBusy(true); setError(""); setNotice("");
    let successCount = 0;
    for (let index = 0; index < items.length; index += 1) {
      if (items[index]?.status === "DONE") continue;
      setItems((current) => current.map((item, itemIndex) => itemIndex === index ? { ...item, status: "UPLOADING", error: undefined } : item));
      try {
        await uploadOne(items[index]!.file);
        successCount += 1;
        setItems((current) => current.map((item, itemIndex) => itemIndex === index ? { ...item, status: "DONE" } : item));
      } catch (reason) {
        const messageText = reason instanceof Error ? reason.message : "Upload không thành công";
        setItems((current) => current.map((item, itemIndex) => itemIndex === index ? { ...item, status: "ERROR", error: messageText } : item));
      }
    }
    setBusy(false);
    if (successCount) {
      setNotice(`Đã gửi ${successCount} khoảnh khắc. Cảm ơn bạn đã góp vào album!`);
      setItems((current) => current.filter((item) => item.status !== "DONE"));
      setName(""); setMessage("");
      if (viewerKey) await load(viewerKey);
    }
  }

  async function toggleReaction(assetId: string): Promise<void> {
    if (!viewerKey || !album?.reactionsEnabled || reactionBusy === assetId) return;
    setReactionBusy(assetId);
    try {
      const result = await apiRequest<{ reacted: boolean; count: number }>(`/public/memories/${encodeURIComponent(token)}/assets/${assetId}/reactions/toggle`, { method: "POST", body: JSON.stringify({ actorKey: viewerKey }) });
      setAssets((current) => current.map((asset) => asset.id === assetId ? { ...asset, viewerReacted: result.reacted, reactionCount: result.count } : asset));
    } catch (reason) { setError(reason instanceof ApiError ? reason.message : "Chưa thể cập nhật lượt thích."); }
    finally { setReactionBusy(null); }
  }

  async function loadComments(assetId: string, append = false): Promise<void> {
    const cursor = append ? commentsCursor[assetId] : null;
    try {
      const page = await apiRequest<CursorPage<MemoryComment>>(`/public/memories/${encodeURIComponent(token)}/assets/${assetId}/comments?limit=12${cursor ? `&cursor=${encodeURIComponent(cursor)}` : ""}${viewerKey ? `&viewer=${encodeURIComponent(viewerKey)}` : ""}`);
      setComments((current) => ({ ...current, [assetId]: append ? [...(current[assetId] ?? []), ...page.items] : page.items }));
      setCommentsCursor((current) => ({ ...current, [assetId]: page.nextCursor }));
    } catch (reason) { setError(reason instanceof ApiError ? reason.message : "Chưa thể tải bình luận."); }
  }

  async function toggleComments(assetId: string): Promise<void> {
    if (expandedComments === assetId) { setExpandedComments(null); return; }
    setExpandedComments(assetId);
    if (!comments[assetId]) await loadComments(assetId);
  }

  async function submitComment(assetId: string): Promise<void> {
    const body = (commentDraft[assetId] ?? "").trim();
    if (body.length < 2 || !viewerKey) return;
    setCommentBusy(assetId);
    try {
      const result = await apiRequest<{ status: "PENDING" | "APPROVED"; message: string }>(`/public/memories/${encodeURIComponent(token)}/assets/${assetId}/comments`, {
        method: "POST",
        body: JSON.stringify({ actorKey: viewerKey, authorName: name, body, invitationToken }),
      });
      setCommentDraft((current) => ({ ...current, [assetId]: "" }));
      setNotice(result.message);
      if (result.status === "APPROVED") {
        await loadComments(assetId);
        setAssets((current) => current.map((asset) => asset.id === assetId ? { ...asset, commentCount: (asset.commentCount ?? 0) + 1 } : asset));
      }
    } catch (reason) { setError(reason instanceof ApiError ? reason.message : "Chưa thể gửi bình luận."); }
    finally { setCommentBusy(null); }
  }

  async function deleteComment(assetId: string, commentId: string): Promise<void> {
    if (!viewerKey) return;
    if (!(await confirm({ title: "Xóa bình luận này?", description: "Bình luận sẽ biến mất khỏi album ngay lập tức.", confirmLabel: "Xóa bình luận", tone: "danger" }))) return;
    setCommentBusy(assetId);
    setError("");
    try {
      await apiRequest(`/public/memories/${encodeURIComponent(token)}/assets/${assetId}/comments/${commentId}`, { method: "DELETE", body: JSON.stringify({ actorKey: viewerKey }) });
      setComments((current) => ({ ...current, [assetId]: (current[assetId] ?? []).filter((comment) => comment.id !== commentId) }));
      setAssets((current) => current.map((asset) => asset.id === assetId ? { ...asset, commentCount: Math.max(0, (asset.commentCount ?? 0) - 1) } : asset));
      setNotice("Đã xóa bình luận.");
    } catch (reason) { setError(reason instanceof ApiError ? reason.message : "Chưa thể xóa bình luận."); }
    finally { setCommentBusy(null); }
  }

  function toggleDownloadAsset(assetId: string): void {
    setDownloadSelected((current) => current.includes(assetId) ? current.filter((id) => id !== assetId) : [...current, assetId]);
  }

  async function downloadArchive(assetIds?: string[]): Promise<void> {
    if (!album?.downloadsEnabled || archiveBusy) return;
    if (assetIds && !assetIds.length) { setError("Vui lòng chọn ít nhất một ảnh hoặc video."); return; }
    setArchiveBusy(true); setError(""); setNotice("");
    try {
      const query = assetIds?.length ? `?assetIds=${encodeURIComponent(assetIds.join(","))}` : "";
      const response = await fetch(`${API_URL}/public/memories/${encodeURIComponent(token)}/archive${query}`);
      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(String(body.message || "Không thể tạo file ZIP."));
      }
      const blob = await response.blob();
      const href = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = href;
      link.download = assetIds?.length ? "ngaydoi-memories-selected.zip" : "ngaydoi-memories.zip";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(href), 1000);
      setNotice(assetIds?.length ? `Đã chuẩn bị ${assetIds.length} khoảnh khắc để tải.` : "Đã chuẩn bị album ZIP để tải.");
    } catch (reason) { setError(reason instanceof Error ? reason.message : "Không thể tải album ZIP."); }
    finally { setArchiveBusy(false); }
  }

  async function loadMoreGuestbook(): Promise<void> {
    if (!guestbookCursor || guestbookBusy) return;
    setGuestbookBusy(true);
    try {
      const page = await apiRequest<CursorPage<GuestbookEntry>>(`/public/memories/${encodeURIComponent(token)}/guestbook?limit=12&cursor=${encodeURIComponent(guestbookCursor)}`);
      setGuestbook((current) => [...current, ...page.items.filter((item) => !current.some((existing) => existing.id === item.id))]);
      setGuestbookCursor(page.nextCursor);
    } catch (reason) { setError(reason instanceof ApiError ? reason.message : "Chưa thể tải thêm lời chúc."); }
    finally { setGuestbookBusy(false); }
  }

  if (loading && !album) return <main id="main-content" tabIndex={-1} className="friendly-error"><PageSkeleton cards={2} /></main>;
  if (loadError || !album) return <main id="main-content" tabIndex={-1} className="friendly-error"><ErrorState title="Album chưa sẵn sàng" description={loadError?.message ?? "Album không còn khả dụng."} requestId={loadError?.requestId} onRetry={() => viewerKey && void load(viewerKey)} homeHref="/" homeLabel="Về trang chủ" /></main>;

  return <main id="main-content" tabIndex={-1} className="memory-public">
    <header className="memory-public-hero"><div className="memory-public-overlay" /><div className="memory-public-copy"><span>Wedding Space</span><h1>{album.wedding.groomName} <i>&</i> {album.wedding.brideName}</h1><h2>{album.title}</h2><p>{album.description}</p><div className="memory-public-hero-actions"><a href="#moments" className="btn btn-secondary">Xem khoảnh khắc</a><a href="#share-memory" className="btn btn-primary">Chia sẻ ảnh</a></div></div></header>
    {error ? <div className="memory-floating-notice"><Alert tone="error">{error}</Alert></div> : null}
    {notice ? <div className="memory-floating-notice"><Alert tone="success">{notice}</Alert></div> : null}

    <section id="moments" className="memory-public-section"><div className="memory-public-heading"><span>Album chung</span><h2>{album.thankYouTitle}</h2><p>{album.thankYouMessage}</p></div>{album.downloadsEnabled && assets.length ? <div className="memory-download-toolbar"><div><strong>Tải kỷ niệm</strong><span>{album.uploadPolicy.totalItems} nội dung · {formatMb(album.uploadPolicy.totalBytes)} đã lưu</span></div><div><button type="button" className="btn btn-secondary" disabled={archiveBusy} onClick={() => { setDownloadMode((current) => !current); setDownloadSelected([]); }}>{downloadMode ? "Hủy chọn" : "Chọn để tải"}</button>{downloadMode ? <button type="button" className="btn btn-primary" disabled={archiveBusy || !downloadSelected.length} onClick={() => void downloadArchive(downloadSelected)}>{archiveBusy ? "Đang chuẩn bị…" : `Tải ${downloadSelected.length} mục (.ZIP)`}</button> : <button type="button" className="btn btn-primary" disabled={archiveBusy} onClick={() => void downloadArchive()}>{archiveBusy ? "Đang chuẩn bị…" : "Tải toàn bộ (.ZIP)"}</button>}</div></div> : null}{assets.length ? <div className="memory-public-grid">{assets.map((asset) => <figure className={`memory-social-card ${downloadSelected.includes(asset.id) ? "is-selected" : ""}`} key={asset.id}><div className="memory-social-media">{downloadMode && <label className="memory-download-select"><input type="checkbox" checked={downloadSelected.includes(asset.id)} onChange={() => toggleDownloadAsset(asset.id)} /><span>{downloadSelected.includes(asset.id) ? "Đã chọn" : "Chọn"}</span></label>}{asset.type === "VIDEO" ? <video aria-label={asset.uploaderMessage || "Video khoảnh khắc ngày cưới"} controls preload="metadata" src={resolveMemoryMediaUrl(asset, album.token)} /> : <img src={resolveMemoryMediaUrl(asset, album.token)} alt={asset.uploaderMessage || "Khoảnh khắc ngày cưới"} loading="lazy" />}</div><figcaption>{(album.showUploaderName && asset.uploaderName || asset.uploaderMessage) && <div className="memory-social-caption">{album.showUploaderName && asset.uploaderName && <strong>{asset.uploaderName}</strong>}{asset.uploaderMessage && <span>{asset.uploaderMessage}</span>}</div>}<div className="memory-social-actions">{album.reactionsEnabled && <button type="button" disabled={reactionBusy === asset.id} className={`memory-action memory-action-heart ${asset.viewerReacted ? "active" : ""}`} aria-label={asset.viewerReacted ? "Bỏ thích khoảnh khắc này" : "Thích khoảnh khắc này"} aria-pressed={asset.viewerReacted} onClick={() => void toggleReaction(asset.id)}><span className="memory-action-icon-badge"><HeartIcon filled={asset.viewerReacted} /></span><span className="memory-action-label">Thích</span><span className="memory-action-count" aria-live="polite">{asset.reactionCount ?? 0}</span></button>}{album.commentsEnabled && <button type="button" className={`memory-action memory-action-comment ${expandedComments === asset.id ? "is-open" : ""}`} aria-expanded={expandedComments === asset.id} onClick={() => void toggleComments(asset.id)}><span className="memory-action-icon-badge"><CommentIcon /></span><span className="memory-action-label">Bình luận</span><span className="memory-action-count">{asset.commentCount ?? 0}</span></button>}{album.downloadsEnabled && <a className="memory-action memory-action-download" href={memoryDownloadUrl(asset.id, album.token)} download aria-label="Tải khoảnh khắc này"><span className="memory-action-icon-badge"><DownloadIcon /></span><span className="memory-action-label">Tải</span></a>}</div>{expandedComments === asset.id && <div className="memory-comments"><div className="memory-comments-title"><div><CommentIcon /><strong>Bình luận</strong></div><span>{asset.commentCount ?? 0}</span></div><div className="memory-comment-list">{(comments[asset.id] ?? []).map((comment) => <article key={comment.id}><div className="memory-comment-avatar" aria-hidden="true">{comment.authorName.trim().charAt(0).toUpperCase() || "N"}</div><div className="memory-comment-content"><div className="memory-comment-head"><div><strong>{comment.authorName}</strong><time>{new Date(comment.createdAt).toLocaleString("vi-VN")}</time></div>{comment.canDelete && <button type="button" className="memory-comment-delete" aria-label={`Xóa bình luận của ${comment.authorName}`} disabled={commentBusy === asset.id} onClick={() => void deleteComment(asset.id, comment.id)}><TrashIcon /></button>}</div><p>{comment.body}</p></div></article>)}{(comments[asset.id] ?? []).length === 0 && <div className="memory-comment-empty"><CommentIcon /><div><strong>Chưa có bình luận</strong><span>Hãy để lại lời nhắn đầu tiên cho khoảnh khắc này.</span></div></div>}{commentsCursor[asset.id] && <button type="button" className="memory-comment-more" onClick={() => void loadComments(asset.id, true)}>Xem thêm bình luận</button>}</div><div className="memory-comment-compose"><div className="memory-comment-input"><CommentIcon /><input maxLength={600} value={commentDraft[asset.id] ?? ""} onChange={(event) => setCommentDraft((current) => ({ ...current, [asset.id]: event.target.value }))} placeholder="Viết một bình luận…" aria-label="Viết bình luận" /></div><button type="button" aria-label="Gửi bình luận" disabled={commentBusy === asset.id || (commentDraft[asset.id] ?? "").trim().length < 2} onClick={() => void submitComment(asset.id)}><SendIcon /><span>{commentBusy === asset.id ? "Đang gửi…" : "Gửi"}</span></button></div></div>}</figcaption></figure>)}</div> : <div className="memory-public-empty"><span>♡</span><h3>Hãy là người đầu tiên chia sẻ</h3><p>Những bức ảnh tự nhiên từ bạn bè và gia đình sẽ làm album này thật đặc biệt.</p></div>}
      <div ref={loadMoreRef} className="memory-load-more" aria-live="polite">{loadingMore ? <span>Đang tải thêm khoảnh khắc…</span> : nextCursor ? <button className="btn btn-secondary" type="button" onClick={() => void loadMore()}>Tải thêm</button> : assets.length ? <span>Đã xem hết album.</span> : null}</div>
    </section>

    {album.guestbookEnabled && <section id="guestbook" className="memory-guestbook-section"><div className="memory-public-heading"><span>Sổ lưu bút</span><h2>Lời chúc từ những người thương</h2><p>Những lời chúc khách đã chọn chia sẻ công khai, được lưu lại như một phần của ngày đặc biệt.</p></div>{guestbook.length ? <div className="memory-guestbook-grid">{guestbook.map((entry) => <blockquote key={entry.id}><span aria-hidden="true">“</span><p>{entry.message}</p><footer><span className="memory-wish-avatar" aria-hidden="true">{entry.authorName.trim().charAt(0).toUpperCase() || "N"}</span><strong>{entry.authorName}</strong></footer></blockquote>)}</div> : <div className="memory-public-empty compact"><span>✦</span><h3>Sổ lưu bút đang chờ lời chúc đầu tiên</h3><p>Khách có thiệp cá nhân có thể gửi lời chúc trong phần RSVP.</p></div>}{guestbookCursor && <div className="memory-load-more"><button className="btn btn-secondary" disabled={guestbookBusy} type="button" onClick={() => void loadMoreGuestbook()}>{guestbookBusy ? "Đang tải…" : "Xem thêm lời chúc"}</button></div>}</section>}

    <section id="share-memory" className="memory-upload-section"><div className="memory-upload-copy"><span className="eyebrow">Gửi ảnh & video</span><h2>Thêm góc nhìn của bạn</h2><p>Ảnh/video sẽ đi vào album chung. Khi hệ thống chạy với S3/R2, file được upload thẳng từ thiết bị lên object storage thay vì đi qua API.</p><ul><li>Không cần đăng nhập.</li><li>Tối đa {album.uploadPolicy.maxFilesPerBatch} file mỗi lượt.</li><li>Ảnh tối đa {formatMb(album.uploadPolicy.maxImageBytes)}; video tối đa {formatMb(album.uploadPolicy.maxVideoBytes)}.</li><li>Không đăng ảnh riêng tư của người khác khi chưa được đồng ý.</li></ul><div className="memory-storage-note"><strong>{album.uploadPolicy.strategy === "DIRECT" ? "Direct upload đang bật" : "Local self-test mode"}</strong><span>{album.uploadPolicy.strategy === "DIRECT" ? "Thiết bị → Object Storage → CDN → Album" : "Local hiện vẫn upload qua API; production sẽ tự chuyển sang direct upload khi cấu hình S3/R2."}</span></div></div>{album.uploadEnabled ? <form className="memory-upload-card" onSubmit={(event) => void upload(event)} noValidate>
      <FileUploadField id="memory-files" label="Ảnh và video" accept="image/jpeg,image/png,image/webp,video/mp4,video/webm,video/quicktime" multiple disabled={busy} helperText={`Tối đa ${album.uploadPolicy.maxFilesPerBatch} file/lượt. Ảnh ${formatMb(album.uploadPolicy.maxImageBytes)}, video ${formatMb(album.uploadPolicy.maxVideoBytes)}.`} selectedSummary={items.length ? `Đã chọn ${items.length}/${album.uploadPolicy.maxFilesPerBatch} file` : undefined} error={error && !items.length ? error : undefined} onFilesSelected={choose} />
      {items.length > 0 ? <div className="memory-upload-list">{items.map((item, index) => <article key={fileKey(item.file)}><div className="memory-upload-thumb">{item.file.type.startsWith("video/") ? <video aria-label={`Xem trước video ${item.file.name}`} src={item.preview} /> : <img src={item.preview} alt="Xem trước file upload" />}</div><div><strong>{item.file.name}</strong><span>{(item.file.size / 1024 / 1024).toFixed(1)} MB · {{ READY: "Sẵn sàng", UPLOADING: "Đang tải…", DONE: "Đã gửi", ERROR: "Có lỗi" }[item.status]}</span>{item.error ? <small>{item.error}</small> : null}</div><button type="button" aria-label={`Xóa ${item.file.name}`} disabled={busy || item.status === "UPLOADING"} onClick={() => remove(index)}>×</button></article>)}</div> : null}
      <div className="form-grid two"><FormField id="memory-name" label="Tên của bạn" helperText="Tên này cũng được dùng khi bạn bình luận trong album."><input maxLength={100} value={name} onChange={(event) => setName(event.target.value)} placeholder="Ví dụ: Gia đình Minh Anh" /></FormField><FormField id="memory-message" label="Lời nhắn" helperText="Một lời chúc hoặc chú thích ngắn cho album."><input maxLength={500} value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Chúc hai bạn trăm năm hạnh phúc…" /></FormField></div>
      <FormActions dirty={uploadDirty} saving={busy}><Button type="submit" fullWidth loading={busy} loadingLabel={`Đang gửi ${completed}/${items.length}…`} disabled={!items.length}>{`Gửi ${items.length || ""} khoảnh khắc`}</Button></FormActions>
      <small className="memory-privacy">Bằng việc gửi nội dung, bạn xác nhận mình có quyền chia sẻ và đồng ý để cô dâu chú rể lưu trong album kỷ niệm. <a href="/privacy">Chính sách bảo mật</a> · <a href="/terms">Điều khoản sử dụng</a>.</small>
    </form> : <div className="memory-upload-closed"><span>✓</span><h3>Album đã ngừng nhận nội dung mới</h3><p>Bạn vẫn có thể xem và tương tác với những khoảnh khắc đã được chia sẻ.</p></div>}</section>
    {guard.dialog}
    <footer className="memory-public-footer"><div className="memory-public-mark small">ND</div><p>Được lưu giữ cùng Ngày Đôi</p><a href="/">Tạo thiệp cưới của bạn</a></footer>
  </main>;
}
