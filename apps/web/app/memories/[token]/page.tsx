"use client";

import { useEffect, useMemo, useState } from "react";
import { Alert, Button, FileUploadField, FormActions, FormField, useUnsavedChangesGuard } from "../../../components/ui";
import { useParams } from "next/navigation";
import { API_URL, ApiError, apiRequest } from "../../../lib/api";
import type { PublicMemoryAlbum } from "../../../lib/memories";
import { memoryMediaUrl } from "../../../lib/memories";

interface UploadItem { file: File; preview: string; status: "READY" | "UPLOADING" | "DONE" | "ERROR"; error?: string }
const fileKey = (file: File): string => `${file.name}-${file.size}-${file.lastModified}`;

export default function PublicMemoriesPage() {
  const { token } = useParams<{ token: string }>();
  const [invitationToken, setInvitationToken] = useState("");
  const [album, setAlbum] = useState<PublicMemoryAlbum | null>(null);
  const [items, setItems] = useState<UploadItem[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");

  async function load(): Promise<void> {
    try { setAlbum(await apiRequest<PublicMemoryAlbum>(`/public/memories/${encodeURIComponent(token)}`)); setError(""); }
    catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể mở album kỷ niệm"); }
  }
  useEffect(() => {
    setInvitationToken(new URLSearchParams(window.location.search).get("guest") ?? "");
    void load();
  }, [token]);
  const completed = items.filter((item) => item.status === "DONE").length;
  const uploadDirty = items.some((item) => item.status !== "DONE") || Boolean(name.trim()) || Boolean(message.trim());
  const guard = useUnsavedChangesGuard(uploadDirty && !busy);
  const gallery = useMemo(() => album?.assets ?? [], [album]);

  function choose(files: FileList | null): void {
    if (!files) return;
    const allowedTypes = new Set(["image/jpeg", "image/png", "image/webp", "video/mp4", "video/webm", "video/quicktime"]);
    const incoming = Array.from(files);
    const accepted = incoming.filter((file) => allowedTypes.has(file.type) && file.size <= (file.type.startsWith("video/") ? 30 * 1024 * 1024 : 10 * 1024 * 1024));
    const rejected = incoming.length - accepted.length;
    const existing = new Set(items.map((item) => fileKey(item.file)));
    const available = Math.max(0, 10 - items.length);
    const unique = accepted.filter((file) => !existing.has(fileKey(file)));
    if (rejected > 0) setError(`${rejected} file không đúng định dạng hoặc vượt giới hạn dung lượng.`);
    else if (unique.length > available) setError("Mỗi lần chỉ có thể chọn tối đa 10 file.");
    else setError("");
    setItems([...items, ...unique.slice(0, available).map((file) => ({ file, preview: URL.createObjectURL(file), status: "READY" as const }))]);
  }
  function remove(index: number): void {
    setItems((current) => { const item = current[index]; if (item) URL.revokeObjectURL(item.preview); return current.filter((_, itemIndex) => itemIndex !== index); });
  }
  async function upload(event: React.FormEvent): Promise<void> {
    event.preventDefault();
    if (!items.length) { setError("Vui lòng chọn ít nhất một ảnh hoặc video."); return; }
    setBusy(true); setError(""); setNotice("");
    let successCount = 0;
    for (let index = 0; index < items.length; index += 1) {
      if (items[index]?.status === "DONE") continue;
      setItems((current) => current.map((item, itemIndex) => itemIndex === index ? { ...item, status: "UPLOADING", error: undefined } : item));
      const form = new FormData();
      form.append("file", items[index]!.file);
      form.append("uploaderName", name);
      form.append("uploaderMessage", message);
      if (invitationToken) form.append("invitationToken", invitationToken);
      try {
        const response = await fetch(`${API_URL}/public/memories/${encodeURIComponent(token)}/upload`, { method: "POST", body: form });
        const body = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(String(body.message || "Upload không thành công"));
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
      await load();
    }
  }

  if (error && !album) return <main className="memory-public-state"><div><div className="memory-public-mark">ND</div><h1>Album chưa sẵn sàng</h1><p>{error}</p><a className="btn btn-primary" href="/">Về trang chủ</a></div></main>;
  if (!album) return <main className="memory-public-state"><div><div className="spinner" /><p>Đang mở album kỷ niệm...</p></div></main>;

  return <main className="memory-public">
    <header className="memory-public-hero"><div className="memory-public-overlay" /><div className="memory-public-copy"><span>Album kỷ niệm ngày cưới</span><h1>{album.wedding.groomName} <i>&</i> {album.wedding.brideName}</h1><h2>{album.title}</h2><p>{album.description}</p><a href="#share-memory" className="btn btn-primary">Chia sẻ khoảnh khắc</a></div></header>
    <section className="memory-public-section"><div className="memory-public-heading"><span>Cùng lưu giữ</span><h2>{album.thankYouTitle}</h2><p>{album.thankYouMessage}</p></div>{gallery.length ? <div className="memory-public-grid">{gallery.map((asset) => <figure key={asset.id}>{asset.type === "VIDEO" ? <video controls preload="metadata" src={memoryMediaUrl(asset.id, album.token)} /> : <img src={memoryMediaUrl(asset.id, album.token)} alt={asset.uploaderMessage || "Khoảnh khắc ngày cưới"} loading="lazy" />} {(album.showUploaderName && asset.uploaderName || asset.uploaderMessage) && <figcaption>{album.showUploaderName && asset.uploaderName && <strong>{asset.uploaderName}</strong>}{asset.uploaderMessage && <span>{asset.uploaderMessage}</span>}</figcaption>}</figure>)}</div> : <div className="memory-public-empty"><span>♡</span><h3>Hãy là người đầu tiên chia sẻ</h3><p>Những bức ảnh tự nhiên từ bạn bè và gia đình sẽ làm album này thật đặc biệt.</p></div>}</section>
    <section id="share-memory" className="memory-upload-section"><div className="memory-upload-copy"><span className="eyebrow">Gửi ảnh & video</span><h2>Thêm góc nhìn của bạn</h2><p>Chọn tối đa 10 file mỗi lần. Ảnh tối đa 10 MB, video tối đa 30 MB. Nội dung có thể cần được chủ nhân album duyệt trước khi hiển thị.</p><ul><li>Không cần đăng nhập.</li><li>Không đăng ảnh riêng tư của người khác khi chưa được đồng ý.</li><li>Giữ lại file gốc cho đến khi upload hoàn tất.</li></ul></div>{album.uploadEnabled ? <form className="memory-upload-card" onSubmit={(event) => void upload(event)} noValidate>
      <FileUploadField
        id="memory-files"
        label="Ảnh và video"
        accept="image/jpeg,image/png,image/webp,video/mp4,video/webm,video/quicktime"
        multiple
        disabled={busy}
        helperText="JPEG, PNG, WebP tối đa 10 MB; MP4, WebM, MOV tối đa 30 MB. Tối đa 10 file mỗi lượt."
        selectedSummary={items.length ? `Đã chọn ${items.length}/10 file` : undefined}
        error={error && !items.length ? error : undefined}
        onFilesSelected={choose}
      />
      {items.length > 0 ? <div className="memory-upload-list">{items.map((item, index) => <article key={fileKey(item.file)}><div className="memory-upload-thumb">{item.file.type.startsWith("video/") ? <video src={item.preview} /> : <img src={item.preview} alt="Xem trước file upload" />}</div><div><strong>{item.file.name}</strong><span>{(item.file.size / 1024 / 1024).toFixed(1)} MB · {{ READY: "Sẵn sàng", UPLOADING: "Đang tải…", DONE: "Đã gửi", ERROR: "Có lỗi" }[item.status]}</span>{item.error ? <small>{item.error}</small> : null}</div><button type="button" aria-label={`Xóa ${item.file.name}`} disabled={busy || item.status === "UPLOADING"} onClick={() => remove(index)}>×</button></article>)}</div> : null}
      <div className="form-grid two">
        <FormField id="memory-name" label="Tên của bạn" helperText="Tên sẽ chỉ hiển thị nếu chủ album bật tùy chọn này."><input maxLength={100} value={name} onChange={(event) => setName(event.target.value)} placeholder="Ví dụ: Gia đình Minh Anh" /></FormField>
        <FormField id="memory-message" label="Lời nhắn" helperText="Một lời chúc hoặc chú thích ngắn cho album."><input maxLength={500} value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Chúc hai bạn trăm năm hạnh phúc…" /></FormField>
      </div>
      {error ? <Alert tone="error" title="Có file chưa thể gửi">{error}</Alert> : null}
      {notice ? <Alert tone="success">{notice}</Alert> : null}
      <FormActions dirty={uploadDirty} saving={busy}>
        <Button type="submit" fullWidth loading={busy} loadingLabel={`Đang gửi ${completed}/${items.length}…`} disabled={!items.length}>{`Gửi ${items.length || ""} khoảnh khắc`}</Button>
      </FormActions>
      <small className="memory-privacy">Bằng việc gửi nội dung, bạn xác nhận mình có quyền chia sẻ và đồng ý để cô dâu chú rể lưu trong album kỷ niệm.</small>
    </form> : <div className="memory-upload-closed"><span>✓</span><h3>Album đã ngừng nhận nội dung mới</h3><p>Bạn vẫn có thể xem những khoảnh khắc đã được chia sẻ.</p></div>}</section>
    {guard.dialog}
    <footer className="memory-public-footer"><div className="memory-public-mark small">ND</div><p>Được lưu giữ cùng Ngày Đôi</p><a href="/">Tạo thiệp cưới của bạn</a></footer>
  </main>;
}
