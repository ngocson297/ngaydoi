"use client";

import type { ChangeEvent, ReactNode } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { AppShell } from "../../../../components/app-shell";
import { AuthGate } from "../../../../components/auth-gate";
import { PublicInvitation } from "../../../../components/public-invitation";
import { useAuth } from "../../../../components/auth-provider";
import { Alert, DetailPageSkeleton, ErrorState, FileUploadField, useConfirm, useToast } from "../../../../components/ui";
import { ApiError, toUiError, type UiError } from "../../../../lib/api";
import { compressWeddingImage } from "../../../../lib/image";
import { giftAccountQrUrl, resolveMediaUrl } from "../../../../lib/invitations";
import type {
  EditorTab,
  GiftTransferAccount,
  GiftTransferBank,
  InvitationDesign,
  InvitationEditorData,
  InvitationMedia,
  InvitationSectionKey,
  InvitationTemplate,
  PublicInvitationData,
} from "../../../../lib/invitations";
import { formatDate, statusLabels } from "../../../../lib/weddings";

const editorTabs: Array<{ key: EditorTab; label: string; icon: string }> = [
  { key: "templates", label: "Mẫu thiệp", icon: "✦" },
  { key: "content", label: "Nội dung", icon: "T" },
  { key: "style", label: "Màu & font", icon: "◐" },
  { key: "media", label: "Hình ảnh", icon: "▧" },
  { key: "gift", label: "Mừng cưới", icon: "QR" },
  { key: "settings", label: "Bố cục", icon: "☷" },
  { key: "history", label: "Phiên bản", icon: "↶" },
];

const templatePlanLabels: Record<InvitationTemplate["plan"], string> = {
  FREE: "Khởi đầu",
  STARTER: "Cơ bản",
  STANDARD: "Tiêu chuẩn",
  PREMIUM: "Cao cấp",
};

const sectionLabels: Record<InvitationSectionKey, string> = {
  hero: "Mở đầu",
  family: "Hai gia đình",
  story: "Câu chuyện",
  gallery: "Album ảnh",
  countdown: "Đếm ngược",
  events: "Chương trình",
  gift: "Mừng cưới qua QR",
  footer: "Lời cảm ơn",
};

const visibilityKeys: Record<InvitationSectionKey, keyof InvitationDesign> = {
  hero: "showHero",
  family: "showFamily",
  story: "showStory",
  gallery: "showGallery",
  countdown: "showCountdown",
  events: "showEvents",
  gift: "showGift",
  footer: "showFooter",
};

function SettingGroup({ title, description, children }: { title: string; description?: string; children: ReactNode }) {
  return <section className="editor-setting-group"><div className="editor-setting-head"><h3>{title}</h3>{description && <p>{description}</p>}</div>{children}</section>;
}

function InvitationEditorContent() {
  const { confirm } = useConfirm();
  const { notify } = useToast();
  const { id: weddingId } = useParams<{ id: string }>();
  const { authRequest } = useAuth();
  const [data, setData] = useState<InvitationEditorData | null>(null);
  const [design, setDesign] = useState<InvitationDesign | null>(null);
  const [templates, setTemplates] = useState<InvitationTemplate[]>([]);
  const [templateQuery, setTemplateQuery] = useState("");
  const [templateStyle, setTemplateStyle] = useState("ALL");
  const [templateAccess, setTemplateAccess] = useState<"ALL" | "OPEN" | "LOCKED" | "FAVORITE">("ALL");
  const [favoriteTemplates, setFavoriteTemplates] = useState<string[]>([]);
  const [giftBanks, setGiftBanks] = useState<GiftTransferBank[]>([]);
  const [giftBanksLoading, setGiftBanksLoading] = useState(false);
  const [giftBanksUnavailable, setGiftBanksUnavailable] = useState(false);
  const giftBanksLoadedRef = useRef(false);
  const [activeTab, setActiveTab] = useState<EditorTab>("templates");
  const [device, setDevice] = useState<"mobile" | "desktop">("mobile");
  const [loading, setLoading] = useState(true);
  const [saveStatus, setSaveStatus] = useState<"idle" | "dirty" | "saving" | "saved" | "error">("idle");
  const [message, setMessage] = useState("");
  const [loadError, setLoadError] = useState<UiError | null>(null);
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);
  const [giftQrUploadingId, setGiftQrUploadingId] = useState<string | null>(null);
  const [historyBusy, setHistoryBusy] = useState(false);
  const lastSavedRef = useRef("");
  const saveRequestRef = useRef(0);
  const pendingGiftQrDeleteRef = useRef<Set<string>>(new Set());
  const guestDraftNoticeRef = useRef(false);

  useEffect(() => {
    if (guestDraftNoticeRef.current) return;
    const params = new URLSearchParams(window.location.search);
    if (params.get("from") !== "guest-draft") return;
    guestDraftNoticeRef.current = true;
    if (params.get("template") === "fallback") {
      notify({ tone: "info", title: "Bản nháp đã được lưu", message: "Mẫu bạn thử cần gói cao hơn, nên workspace đang dùng một mẫu miễn phí. Nội dung tên, ngày cưới và lời mời vẫn được giữ nguyên." });
    } else {
      notify({ tone: "success", title: "Đã lưu bản nháp vào workspace", message: "Bạn có thể tiếp tục thêm ảnh, chương trình, khách mời và QR mừng cưới." });
    }
  }, [notify]);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const [editor, templateList] = await Promise.all([
        authRequest<InvitationEditorData>(`/weddings/${weddingId}/invitation`),
        authRequest<InvitationTemplate[]>("/templates"),
      ]);
      if (!editor.invitationDesign) throw new Error("Invitation design was not initialized");
      const rawGiftAccounts = Array.isArray(editor.invitationDesign.giftAccounts)
        ? editor.invitationDesign.giftAccounts.map((raw) => ({
            id: raw.id,
            side: raw.side,
            label: raw.label,
            mode: raw.mode === "UPLOAD" ? "UPLOAD" as const : "VIETQR" as const,
            qrAssetId: raw.qrAssetId ?? "",
            qrImageUrl: raw.qrImageUrl ?? "",
            bankBin: raw.bankBin ?? "",
            bankCode: raw.bankCode ?? "",
            bankName: raw.bankName ?? "",
            accountNumber: raw.accountNumber ?? "",
            accountName: raw.accountName ?? "",
            transferNote: raw.transferNote ?? "",
          }))
        : [];
      const sectionOrder = editor.invitationDesign.sectionOrder.includes("gift")
        ? editor.invitationDesign.sectionOrder
        : [...editor.invitationDesign.sectionOrder.filter((key) => key !== "footer"), "gift" as const, "footer" as const];
      const normalizedDesign = { ...editor.invitationDesign, giftAccounts: rawGiftAccounts, sectionOrder };
      setData({ ...editor, invitationDesign: normalizedDesign });
      setDesign(normalizedDesign);
      setTemplates(templateList);
      lastSavedRef.current = JSON.stringify(normalizedDesign);
      setSaveStatus("saved");
      setLoadError(null);
    } catch (reason) {
      setLoadError(toUiError(reason, "Không thể tải trình tạo thiệp."));
    } finally {
      setLoading(false);
    }
  }, [authRequest, weddingId]);

  useEffect(() => { void load(); }, [load]);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("ngaydoi-template-favorites");
      if (saved) setFavoriteTemplates(JSON.parse(saved) as string[]);
    } catch {
      setFavoriteTemplates([]);
    }
  }, []);

  useEffect(() => {
    if (activeTab !== "gift" || giftBanksLoadedRef.current) return;
    giftBanksLoadedRef.current = true;
    setGiftBanksLoading(true);
    void authRequest<{ banks: GiftTransferBank[]; source: "LIVE" | "UNAVAILABLE" }>("/gift-transfer/banks")
      .then((result) => {
        setGiftBanks(result.banks);
        setGiftBanksUnavailable(result.source === "UNAVAILABLE" || result.banks.length === 0);
      })
      .catch(() => setGiftBanksUnavailable(true))
      .finally(() => setGiftBanksLoading(false));
  }, [activeTab, authRequest]);

  useEffect(() => {
    if (!design || !data || data.access === "VIEW") return;
    const serialized = JSON.stringify(design);
    if (serialized === lastSavedRef.current) return;
    setSaveStatus("dirty");
    const requestId = ++saveRequestRef.current;
    const timer = window.setTimeout(async () => {
      setSaveStatus("saving");
      try {
        const updated = await authRequest<InvitationDesign>(`/weddings/${weddingId}/invitation`, {
          method: "PATCH",
          body: JSON.stringify({
            templateKey: design.templateKey,
            paletteKey: design.paletteKey,
            primaryColor: design.primaryColor,
            accentColor: design.accentColor,
            backgroundColor: design.backgroundColor,
            surfaceColor: design.surfaceColor,
            textColor: design.textColor,
            headingFont: design.headingFont,
            bodyFont: design.bodyFont,
            heroEyebrow: design.heroEyebrow,
            greeting: design.greeting,
            storyTitle: design.storyTitle,
            galleryTitle: design.galleryTitle,
            eventsTitle: design.eventsTitle,
            countdownTitle: design.countdownTitle,
            giftTitle: design.giftTitle,
            giftMessage: design.giftMessage,
            giftAccounts: design.giftAccounts.map(({ qrImageUrl: _derivedQrImageUrl, ...account }) => account),
            footerMessage: design.footerMessage,
            showHero: design.showHero,
            showFamily: design.showFamily,
            showStory: design.showStory,
            showGallery: design.showGallery,
            showEvents: design.showEvents,
            showCountdown: design.showCountdown,
            showGift: design.showGift,
            showFooter: design.showFooter,
            musicEnabled: design.musicEnabled,
            musicUrl: design.musicUrl ?? "",
            sectionOrder: design.sectionOrder,
          }),
        });
        if (requestId === saveRequestRef.current) {
          setDesign((current) => current ? { ...current, revision: updated.revision, autosavedAt: updated.autosavedAt, updatedAt: updated.updatedAt } : current);
          lastSavedRef.current = JSON.stringify({ ...design, revision: updated.revision, autosavedAt: updated.autosavedAt, updatedAt: updated.updatedAt });
          setSaveStatus("saved");
          const activeGiftQrIds = new Set(design.giftAccounts.flatMap((account) => account.qrAssetId ? [account.qrAssetId] : []));
          const removableGiftQrIds = [...pendingGiftQrDeleteRef.current].filter((assetId) => !activeGiftQrIds.has(assetId));
          if (removableGiftQrIds.length) {
            removableGiftQrIds.forEach((assetId) => pendingGiftQrDeleteRef.current.delete(assetId));
            void Promise.all(removableGiftQrIds.map((assetId) => authRequest(`/weddings/${weddingId}/gift-qr/${assetId}`, { method: "DELETE" }).catch(() => undefined)));
          }
        }
      } catch (reason) {
        if (requestId === saveRequestRef.current) {
          setSaveStatus("error");
          setError(reason instanceof ApiError ? reason.message : "Không thể tự động lưu thay đổi");
        }
      }
    }, 900);
    return () => window.clearTimeout(timer);
  }, [authRequest, data, design, weddingId]);

  const canEdit = data?.access === "OWNER" || data?.access === "EDIT";
  const previewData = useMemo<PublicInvitationData | null>(() => data && design ? { ...data, invitationDesign: design } : null, [data, design]);
  const templateStyles = useMemo(() => ["ALL", ...Array.from(new Set(templates.map((template) => template.style))).sort((a, b) => a.localeCompare(b, "vi"))], [templates]);
  const filteredTemplates = useMemo(() => {
    const needle = templateQuery.trim().toLocaleLowerCase("vi-VN");
    return templates.filter((template) => {
      const unlocked = Boolean(data?.entitlements.templateKeys.includes(template.key));
      if (templateStyle !== "ALL" && template.style !== templateStyle) return false;
      if (templateAccess === "OPEN" && !unlocked) return false;
      if (templateAccess === "LOCKED" && unlocked) return false;
      if (templateAccess === "FAVORITE" && !favoriteTemplates.includes(template.key)) return false;
      return !needle || `${template.name} ${template.style} ${template.description} ${template.tags.join(" ")}`.toLocaleLowerCase("vi-VN").includes(needle);
    });
  }, [data?.entitlements.templateKeys, favoriteTemplates, templateAccess, templateQuery, templateStyle, templates]);

  function updateDesign<K extends keyof InvitationDesign>(key: K, value: InvitationDesign[K]): void {
    setDesign((current) => current ? { ...current, [key]: value } : current);
  }

  function updateGiftAccount(accountId: string, patch: Partial<GiftTransferAccount>): void {
    setDesign((current) => current ? {
      ...current,
      giftAccounts: current.giftAccounts.map((account) => account.id === accountId ? { ...account, ...patch } : account),
    } : current);
  }

  function addGiftAccount(): void {
    setDesign((current) => {
      if (!current || current.giftAccounts.length >= 3) return current;
      const side = current.giftAccounts.length === 0 ? "GROOM" : current.giftAccounts.length === 1 ? "BRIDE" : "SHARED";
      const label = side === "GROOM" ? "Mừng cưới chú rể" : side === "BRIDE" ? "Mừng cưới cô dâu" : "Mừng cưới đôi mình";
      const account: GiftTransferAccount = {
        id: typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `gift-${Date.now()}`,
        side, label, mode: "UPLOAD", qrAssetId: "", qrImageUrl: "", bankBin: "", bankCode: "", bankName: "", accountNumber: "", accountName: "", transferNote: "MUNG CUOI",
      };
      return { ...current, giftAccounts: [...current.giftAccounts, account], showGift: true };
    });
  }

  function removeGiftAccount(accountId: string): void {
    const account = design?.giftAccounts.find((item) => item.id === accountId);
    if (account?.qrAssetId) pendingGiftQrDeleteRef.current.add(account.qrAssetId);
    setDesign((current) => current ? { ...current, giftAccounts: current.giftAccounts.filter((item) => item.id !== accountId) } : current);
  }

  function chooseGiftBank(accountId: string, bankBin: string): void {
    const bank = giftBanks.find((item) => item.bin === bankBin);
    updateGiftAccount(accountId, bank ? { bankBin: bank.bin, bankCode: bank.code, bankName: bank.name } : { bankBin, bankCode: "", bankName: "" });
  }

  function giftAccountReady(account: GiftTransferAccount): boolean {
    if (account.mode === "UPLOAD") return Boolean(account.qrImageUrl.trim());
    return /^\d{6}$/.test(account.bankBin) && /^\d{6,19}$/.test(account.accountNumber) && Boolean(account.accountName.trim());
  }

  async function uploadGiftQr(accountId: string, files: FileList | null): Promise<void> {
    const file = files?.[0];
    if (!file) return;
    const account = design?.giftAccounts.find((item) => item.id === accountId);
    if (!account) return;
    setGiftQrUploadingId(accountId);
    setError("");
    try {
      const form = new FormData();
      form.append("file", file);
      const asset = await authRequest<{ id: string; publicUrl: string }>(`/weddings/${weddingId}/gift-qr`, { method: "POST", body: form });
      if (account.qrAssetId && account.qrAssetId !== asset.id) pendingGiftQrDeleteRef.current.add(account.qrAssetId);
      updateGiftAccount(accountId, { mode: "UPLOAD", qrAssetId: asset.id, qrImageUrl: asset.publicUrl });
      notify({ tone: "success", title: "Đã tải QR ngân hàng", message: "Ảnh QR sẽ xuất hiện trên thiệp sau khi tự động lưu hoàn tất." });
    } catch (reason) {
      setError(reason instanceof ApiError ? reason.message : "Không thể tải ảnh QR");
    } finally {
      setGiftQrUploadingId(null);
    }
  }

  function toggleFavorite(templateKey: string): void {
    setFavoriteTemplates((current) => {
      const next = current.includes(templateKey) ? current.filter((key) => key !== templateKey) : [...current, templateKey];
      window.localStorage.setItem("ngaydoi-template-favorites", JSON.stringify(next));
      return next;
    });
  }

  function applyTemplate(template: InvitationTemplate): void {
    setDesign((current) => current ? {
      ...current,
      templateKey: template.key,
      paletteKey: template.key,
      ...template.palette,
      headingFont: template.headingFont as InvitationDesign["headingFont"],
      bodyFont: template.bodyFont as InvitationDesign["bodyFont"],
    } : current);
    setMessage(`Đã áp dụng mẫu “${template.name}”. Thay đổi đang được tự động lưu.`);
    window.setTimeout(() => setMessage(""), 3000);
  }

  async function createSecurePreview(): Promise<void> {
    const previewWindow = window.open("", "_blank");
    try {
      const result = await authRequest<{ path: string }>(`/weddings/${weddingId}/invitation/preview-token`, { method: "POST" });
      const previewUrl = new URL(result.path, window.location.origin).toString();
      if (previewWindow) previewWindow.location.href = previewUrl;
      else window.location.href = previewUrl;
    } catch (reason) {
      previewWindow?.close();
      setError(reason instanceof ApiError ? reason.message : "Không thể tạo link xem trước");
    }
  }

  async function handleUpload(event: ChangeEvent<HTMLInputElement>): Promise<void> {
    const files = (Array.from(event.target.files ?? []) as File[]).slice(0, 10);
    event.target.value = "";
    if (!files.length) return;
    setUploading(true); setError("");
    try {
      for (const source of files) {
        const compressed = await compressWeddingImage(source);
        const form = new FormData();
        form.append("file", compressed.file);
        form.append("width", String(compressed.width));
        form.append("height", String(compressed.height));
        form.append("altText", `${data?.groomName ?? ""} & ${data?.brideName ?? ""} - ảnh cưới`);
        await authRequest(`/weddings/${weddingId}/media`, { method: "POST", body: form });
      }
      await load();
      setActiveTab("media");
      setMessage(`Đã tải lên ${files.length} ảnh và tối ưu dung lượng.`);
      window.setTimeout(() => setMessage(""), 3500);
    } catch (reason) {
      setError(reason instanceof ApiError ? reason.message : reason instanceof Error ? reason.message : "Không thể tải ảnh");
    } finally { setUploading(false); }
  }

  async function updateMedia(mediaId: string, patch: Partial<InvitationMedia>): Promise<void> {
    try {
      await authRequest(`/weddings/${weddingId}/media/${mediaId}`, { method: "PATCH", body: JSON.stringify(patch) });
      setData((current) => current ? {
        ...current,
        mediaAssets: current.mediaAssets.map((item) => {
          if (patch.isCover) return { ...item, isCover: item.id === mediaId };
          return item.id === mediaId ? { ...item, ...patch } : item;
        }),
      } : current);
    } catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể cập nhật ảnh"); }
  }

  async function deleteMedia(mediaId: string): Promise<void> {
    if (!(await confirm({ title: "Xóa ảnh khỏi thiệp?", description: "Ảnh sẽ bị xóa vĩnh viễn khỏi thư viện của wedding và không thể hoàn tác.", confirmLabel: "Xóa ảnh", tone: "danger" }))) return;
    try {
      await authRequest(`/weddings/${weddingId}/media/${mediaId}`, { method: "DELETE" });
      await load();
    } catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể xóa ảnh"); }
  }

  async function moveMedia(index: number, direction: -1 | 1): Promise<void> {
    if (!data) return;
    const nextIndex = index + direction;
    if (nextIndex < 0 || nextIndex >= data.mediaAssets.length) return;
    const items = [...data.mediaAssets];
    [items[index], items[nextIndex]] = [items[nextIndex], items[index]];
    setData({ ...data, mediaAssets: items.map((item, order) => ({ ...item, sortOrder: order })) });
    try {
      await authRequest(`/weddings/${weddingId}/media/reorder`, { method: "POST", body: JSON.stringify({ mediaIds: items.map((item) => item.id) }) });
    } catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể đổi thứ tự ảnh"); await load(); }
  }

  function moveSection(index: number, direction: -1 | 1): void {
    if (!design) return;
    const next = index + direction;
    if (next < 0 || next >= design.sectionOrder.length) return;
    const order = [...design.sectionOrder];
    [order[index], order[next]] = [order[next], order[index]];
    updateDesign("sectionOrder", order);
  }

  async function createVersion(): Promise<void> {
    setHistoryBusy(true);
    try {
      await authRequest(`/weddings/${weddingId}/invitation/versions`, { method: "POST", body: JSON.stringify({ reason: "MANUAL" }) });
      await load();
      setActiveTab("history");
      setMessage("Đã lưu một phiên bản để bạn có thể khôi phục sau này.");
    } catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể lưu phiên bản"); }
    finally { setHistoryBusy(false); }
  }

  async function restoreVersion(versionId: string, versionNumber: number): Promise<void> {
    if (!(await confirm({ title: `Khôi phục phiên bản ${versionNumber}?`, description: "Thiết kế hiện tại sẽ được thay thế bằng phiên bản đã chọn. Bạn có thể tạo thêm phiên bản trước khi khôi phục.", confirmLabel: "Khôi phục phiên bản", tone: "danger" }))) return;
    setHistoryBusy(true);
    try {
      await authRequest(`/weddings/${weddingId}/invitation/versions/${versionId}/restore`, { method: "POST" });
      await load();
      setMessage(`Đã khôi phục phiên bản ${versionNumber}.`);
    } catch (reason) { setError(reason instanceof ApiError ? reason.message : "Không thể khôi phục phiên bản"); }
    finally { setHistoryBusy(false); }
  }

  if (loading && (!data || !design)) return <AppShell active="invitation" weddingId={weddingId}><DetailPageSkeleton /></AppShell>;
  if (!data || !design) return <AppShell active="invitation" weddingId={weddingId}><ErrorState title="Không thể mở trình tạo thiệp" description={loadError?.message ?? "Thiết kế chưa sẵn sàng hoặc bạn không còn quyền truy cập."} requestId={loadError?.requestId} onRetry={() => void load()} homeHref={`/weddings/${weddingId}`} homeLabel="Về wedding workspace" /></AppShell>;

  return (
    <AppShell active="invitation" weddingId={weddingId}>
      <div className="editor-page">
        <header className="editor-topbar">
          <div className="editor-title-row">
            <a className="editor-back" href={`/weddings/${weddingId}`} aria-label="Quay lại wedding workspace">←</a>
            <div><span className="editor-overline">Invitation Studio</span><h1>{data.groomName} & {data.brideName}</h1></div>
          </div>
          <div className="editor-toolbar">
            <div className={`save-indicator ${saveStatus}`}><i />{saveStatus === "saving" ? "Đang lưu..." : saveStatus === "dirty" ? "Chờ tự động lưu" : saveStatus === "error" ? "Lưu thất bại" : "Đã lưu"}</div>
            <button className="btn btn-secondary compact" type="button" onClick={createVersion} disabled={!canEdit || historyBusy}>Lưu phiên bản</button>
            <button className="btn btn-primary compact" type="button" onClick={createSecurePreview}>Xem trước bảo mật</button>
          </div>
        </header>

        {data.access === "VIEW" && <Alert tone="warning">Bạn đang ở chế độ chỉ xem. Chủ sở hữu có thể nâng quyền chỉnh sửa trong phần Cộng tác.</Alert>}
        {loadError && <Alert tone="error" title="Dữ liệu chưa được làm mới" requestId={loadError.requestId}>{loadError.message}</Alert>}
        {error && <Alert tone="error">{error}</Alert>}
        {message && <Alert tone="success">{message}</Alert>}

        <div className="editor-shell">
          <nav className="editor-nav" aria-label="Công cụ thiết kế">
            {editorTabs.map((item) => <button className={activeTab === item.key ? "active" : ""} type="button" key={item.key} onClick={() => setActiveTab(item.key)}><i>{item.icon}</i><span>{item.label}</span></button>)}
          </nav>

          <aside className="editor-controls">
            <div className="editor-controls-head"><div><span>{statusLabels[data.status]}</span><h2>{editorTabs.find((item) => item.key === activeTab)?.label}</h2></div><small>Revision {design.revision}</small></div>
            {activeTab === "templates" && <div className="template-explorer">
              <div className="editor-entitlement-note">
                <div>
                  <strong>Gói {data.entitlements.plan.name}</strong>
                  <span>{data.entitlements.templateKeys.length}/{templates.length} mẫu được mở · {data.entitlements.remainingMedia}/{data.entitlements.mediaLimit} ảnh còn lại</span>
                </div>
                <a href={`/pricing?weddingId=${weddingId}`}>Mở thêm template →</a>
              </div>

              <div className="template-toolbar">
                <label className="template-search">
                  <span>Tìm mẫu phù hợp</span>
                  <input value={templateQuery} onChange={(event) => setTemplateQuery(event.target.value)} placeholder="Ví dụ: hoa sen, tối giản, tiệc biển..." />
                </label>
                <label>
                  <span>Phong cách</span>
                  <select value={templateStyle} onChange={(event) => setTemplateStyle(event.target.value)}>
                    {templateStyles.map((style) => <option key={style} value={style}>{style === "ALL" ? "Tất cả phong cách" : style}</option>)}
                  </select>
                </label>
              </div>

              <div className="template-filter-pills" aria-label="Lọc template">
                {([
                  ["ALL", "Tất cả"],
                  ["OPEN", "Đã mở"],
                  ["FAVORITE", `Yêu thích (${favoriteTemplates.length})`],
                  ["LOCKED", "Cần nâng cấp"],
                ] as const).map(([key, label]) => <button className={templateAccess === key ? "active" : ""} type="button" key={key} onClick={() => setTemplateAccess(key)}>{label}</button>)}
              </div>

              <div className="template-result-head">
                <strong>{filteredTemplates.length} mẫu phù hợp</strong>
                <a href="/templates" target="_blank" rel="noreferrer">Xem thư viện toàn màn hình ↗</a>
              </div>

              {filteredTemplates.length === 0 ? <div className="editor-mini-empty"><b>Chưa tìm thấy mẫu phù hợp</b><p>Thử bỏ bớt bộ lọc hoặc tìm bằng từ khóa khác.</p></div> : <div className="template-list">
                {filteredTemplates.map((template) => {
                  const unlocked = data.entitlements.templateKeys.includes(template.key);
                  const favorite = favoriteTemplates.includes(template.key);
                  return <article className={`template-card-shell ${design.templateKey === template.key ? "selected" : ""}`} key={template.key}>
                    <button className={`template-card ${design.templateKey === template.key ? "selected" : ""} ${!unlocked ? "locked" : ""}`} type="button" onClick={() => unlocked && applyTemplate(template)} disabled={!canEdit || !unlocked}>
                      <div className={`template-swatch motif-${template.motif} motion-${template.motion} layout-${template.layout} photo-${template.photoTreatment}`} style={{ background: template.palette.backgroundColor, color: template.palette.primaryColor }}>
                        <div className="template-mini-photo" aria-hidden="true"><span>♥</span><i /><i /></div>
                        <div className="template-mini-copy"><small>Save the date</small><strong>A <span>&</span> B</strong><time>18 · 10 · 2026</time></div>
                        {template.layout === "story" && <div className="template-mini-collage" aria-hidden="true"><i /><i /><i /></div>}
                        <b className="template-layout-chip">{template.layout === "split" ? "Chia đôi" : template.layout === "editorial" ? "Editorial" : template.layout === "arch" ? "Vòm" : template.layout === "story" ? "Photo story" : template.layout === "minimal" ? "Tối giản" : "Chân dung"}</b>
                        {!unlocked && <em>🔒</em>}
                      </div>
                      <div>
                        <span>{template.style} · {templatePlanLabels[template.plan]}</span>
                        <h3>{template.name}</h3>
                        <p>{unlocked ? template.description : `Mẫu thuộc gói ${templatePlanLabels[template.plan]}. Nâng cấp để áp dụng.`}</p>
                        <small>{template.tags.slice(0, 3).join(" · ")}</small>
                      </div>
                      {design.templateKey === template.key && <b>✓</b>}
                    </button>
                    <button className={`template-favorite ${favorite ? "active" : ""}`} type="button" aria-label={favorite ? `Bỏ ${template.name} khỏi yêu thích` : `Thêm ${template.name} vào yêu thích`} onClick={() => toggleFavorite(template.key)}>{favorite ? "♥" : "♡"}</button>
                    {(template.badge || template.isNew) && <span className="template-badge">{template.isNew ? "Mới" : template.badge}</span>}
                  </article>;
                })}
              </div>}
            </div>}

            {activeTab === "content" && <div className="editor-form-stack">
              <SettingGroup title="Phần mở đầu" description="Nội dung đầu tiên khách nhìn thấy khi mở thiệp.">
                <label>Thông điệp nhỏ<input value={design.heroEyebrow} disabled={!canEdit} maxLength={120} onChange={(event) => updateDesign("heroEyebrow", event.target.value)} /></label>
                <label>Lời mời<textarea rows={4} value={design.greeting} disabled={!canEdit} maxLength={500} onChange={(event) => updateDesign("greeting", event.target.value)} /></label>
              </SettingGroup>
              <SettingGroup title="Tiêu đề các phần">
                <label>Câu chuyện<input value={design.storyTitle} disabled={!canEdit} onChange={(event) => updateDesign("storyTitle", event.target.value)} /></label>
                <label>Album ảnh<input value={design.galleryTitle} disabled={!canEdit} onChange={(event) => updateDesign("galleryTitle", event.target.value)} /></label>
                <label>Đếm ngược<input value={design.countdownTitle} disabled={!canEdit} onChange={(event) => updateDesign("countdownTitle", event.target.value)} /></label>
                <label>Chương trình<input value={design.eventsTitle} disabled={!canEdit} onChange={(event) => updateDesign("eventsTitle", event.target.value)} /></label>
              </SettingGroup>
              <SettingGroup title="Lời cảm ơn"><label>Nội dung cuối thiệp<textarea rows={4} value={design.footerMessage} disabled={!canEdit} maxLength={500} onChange={(event) => updateDesign("footerMessage", event.target.value)} /></label></SettingGroup>
              <a className="editor-inline-link" href={`/weddings/${weddingId}`}>Sửa tên cặp đôi, câu chuyện và sự kiện tại Wedding Core →</a>
            </div>}

            {activeTab === "style" && <div className="editor-form-stack">
              <SettingGroup title="Bảng màu" description="Màu đã được kiểm soát độ tương phản trong các template.">
                <div className="color-grid">
                  {(["primaryColor", "accentColor", "backgroundColor", "surfaceColor", "textColor"] as const).map((key) => <label key={key}><span>{key === "primaryColor" ? "Màu chính" : key === "accentColor" ? "Màu nhấn" : key === "backgroundColor" ? "Nền" : key === "surfaceColor" ? "Thẻ" : "Chữ"}</span><div><input type="color" value={design[key]} disabled={!canEdit} onChange={(event) => updateDesign(key, event.target.value)} /><code>{design[key]}</code></div></label>)}
                </div>
              </SettingGroup>
              <SettingGroup title="Kiểu chữ">
                <label>Tiêu đề<select value={design.headingFont} disabled={!canEdit} onChange={(event) => updateDesign("headingFont", event.target.value as InvitationDesign["headingFont"])}><option value="elegant-serif">Elegant Serif</option><option value="romantic-serif">Romantic Serif</option><option value="editorial-serif">Editorial Serif</option><option value="heritage-serif">Heritage Serif</option><option value="minimal-serif">Minimal Serif</option><option value="display-serif">Display Serif</option></select></label>
                <label>Nội dung<select value={design.bodyFont} disabled={!canEdit} onChange={(event) => updateDesign("bodyFont", event.target.value as InvitationDesign["bodyFont"])}><option value="clean-sans">Clean Sans</option><option value="modern-sans">Modern Sans</option><option value="humanist-sans">Humanist Sans</option><option value="soft-sans">Soft Sans</option></select></label>
              </SettingGroup>
            </div>}

            {activeTab === "media" && <div className="editor-form-stack">
              <SettingGroup title="Ảnh cưới" description="Ảnh được tự động thu nhỏ tối đa 1.800 px và chuyển WebP trước khi tải lên.">
                <label className={`media-upload ${uploading ? "busy" : ""}`}><input type="file" accept="image/jpeg,image/png,image/webp" multiple disabled={!canEdit || uploading} onChange={(event) => void handleUpload(event)} /><strong>{uploading ? "Đang tối ưu và tải ảnh..." : "+ Chọn ảnh từ máy"}</strong><span>Tối đa 10 ảnh/lần · 12 MB/ảnh gốc</span></label>
              </SettingGroup>
              {data.mediaAssets.length === 0 ? <div className="editor-mini-empty"><b>Chưa có hình ảnh</b><p>Tải ảnh bìa và album để thiệp có cảm xúc hơn.</p></div> : <div className="media-editor-list">{data.mediaAssets.map((item, index) => <article key={item.id}><img src={resolveMediaUrl(item.publicUrl) ?? ""} alt={item.altText ?? "Ảnh cưới"} /><div><span>{item.isCover ? "Ảnh bìa" : `Ảnh ${index + 1}`}</span><small>{item.width && item.height ? `${item.width} × ${item.height}` : "Đã tối ưu"}</small></div><div className="media-actions"><button type="button" title="Đưa lên" disabled={!canEdit || index === 0} onClick={() => void moveMedia(index, -1)}>↑</button><button type="button" title="Đưa xuống" disabled={!canEdit || index === data.mediaAssets.length - 1} onClick={() => void moveMedia(index, 1)}>↓</button>{!item.isCover && <button type="button" title="Đặt làm ảnh bìa" disabled={!canEdit} onClick={() => void updateMedia(item.id, { isCover: true })}>★</button>}<button className="danger" type="button" title="Xóa ảnh" disabled={!canEdit} onClick={() => void deleteMedia(item.id)}>×</button></div></article>)}</div>}
            </div>}

            {activeTab === "gift" && <div className="editor-form-stack gift-editor">
              <SettingGroup title="Mừng cưới qua QR" description="Mặc định, bạn chỉ cần tải ảnh QR từ ứng dụng ngân hàng. Tạo VietQR tự động là lựa chọn nâng cao.">
                <label className="toggle-row"><span><b>Hiển thị phần mừng cưới</b><small>Khách tự kiểm tra người nhận và nhập số tiền trong ứng dụng ngân hàng.</small></span><input type="checkbox" checked={design.showGift} disabled={!canEdit} onChange={(event) => updateDesign("showGift", event.target.checked)} /></label>
                <label>Tiêu đề<input value={design.giftTitle} disabled={!canEdit} maxLength={120} onChange={(event) => updateDesign("giftTitle", event.target.value)} /></label>
                <label>Lời nhắn<textarea rows={4} value={design.giftMessage} disabled={!canEdit} maxLength={500} onChange={(event) => updateDesign("giftMessage", event.target.value)} /></label>
              </SettingGroup>

              <Alert tone="info" title="Cách đơn giản nhất">Mở ứng dụng ngân hàng, tải hoặc chụp QR cá nhân rồi upload. BIN chỉ được yêu cầu khi bạn chọn tạo QR tự động.</Alert>
              {giftBanksUnavailable && design.giftAccounts.some((account) => account.mode === "VIETQR") && <Alert tone="warning" title="Chưa tải được danh sách ngân hàng">Bạn vẫn có thể nhập BIN 6 số và tên ngân hàng thủ công cho chế độ VietQR.</Alert>}

              <div className="gift-editor-list">
                {design.giftAccounts.map((account, index) => {
                  const ready = giftAccountReady(account);
                  const uploadingQr = giftQrUploadingId === account.id;
                  return <article className="gift-editor-card" key={account.id}>
                    <header><div><span>Tài khoản {index + 1}</span><h3>{account.label || "Tài khoản mừng cưới"}</h3></div><button className="gift-editor-remove" type="button" disabled={!canEdit || uploadingQr} onClick={() => removeGiftAccount(account.id)} aria-label={`Xóa tài khoản ${index + 1}`}>Xóa</button></header>
                    <div className="gift-mode-switch" role="radiogroup" aria-label={`Cách tạo QR cho tài khoản ${index + 1}`}>
                      <button type="button" role="radio" aria-checked={account.mode === "UPLOAD"} className={account.mode === "UPLOAD" ? "active" : ""} disabled={!canEdit} onClick={() => updateGiftAccount(account.id, { mode: "UPLOAD" })}><span>↑</span><b>Tải QR ngân hàng</b><small>Nhanh nhất, không cần BIN</small></button>
                      <button type="button" role="radio" aria-checked={account.mode === "VIETQR"} className={account.mode === "VIETQR" ? "active" : ""} disabled={!canEdit} onClick={() => updateGiftAccount(account.id, { mode: "VIETQR" })}><span>QR</span><b>Tạo QR tự động</b><small>Nhập ngân hàng và tài khoản</small></button>
                    </div>
                    <div className="gift-editor-grid">
                      <label>Hiển thị cho<select value={account.side} disabled={!canEdit} onChange={(event) => updateGiftAccount(account.id, { side: event.target.value as GiftTransferAccount["side"] })}><option value="GROOM">Nhà trai</option><option value="BRIDE">Nhà gái</option><option value="SHARED">Cô dâu & chú rể</option></select></label>
                      <label>Tên thẻ<input value={account.label} disabled={!canEdit} maxLength={80} placeholder="Mừng cưới cô dâu" onChange={(event) => updateGiftAccount(account.id, { label: event.target.value })} /></label>
                    </div>

                    {account.mode === "UPLOAD" ? <div className="gift-upload-panel">
                      <FileUploadField id={`gift-qr-${account.id}`} label="Ảnh QR từ ứng dụng ngân hàng" accept="image/jpeg,image/png,image/webp" disabled={!canEdit || uploadingQr} helperText="PNG, JPG hoặc WebP · tối đa 4 MB · nên dùng ảnh vuông, rõ nét" selectedSummary={uploadingQr ? "Đang tải ảnh QR…" : account.qrImageUrl ? "Đã có ảnh QR · chọn file khác để thay thế" : undefined} onFilesSelected={(files) => void uploadGiftQr(account.id, files)} />
                      <div className="gift-editor-grid">
                        <label>Ngân hàng <small>Không bắt buộc</small><input value={account.bankName} disabled={!canEdit} maxLength={120} placeholder="Ví dụ: Vietcombank" onChange={(event) => updateGiftAccount(account.id, { bankName: event.target.value })} /></label>
                        <label>Chủ tài khoản <small>Không bắt buộc</small><input value={account.accountName} disabled={!canEdit} maxLength={120} placeholder="NGUYEN VAN A" onChange={(event) => updateGiftAccount(account.id, { accountName: event.target.value.toUpperCase() })} /></label>
                        <label>Số tài khoản <small>Không bắt buộc</small><input inputMode="numeric" value={account.accountNumber} disabled={!canEdit} maxLength={19} placeholder="Dùng cho nút sao chép" onChange={(event) => updateGiftAccount(account.id, { accountNumber: event.target.value.replace(/\D/g, "").slice(0, 19) })} /></label>
                        <label>Nội dung gợi ý <small>Không bắt buộc</small><input value={account.transferNote} disabled={!canEdit} maxLength={25} placeholder="MUNG CUOI MINH ANH" onChange={(event) => updateGiftAccount(account.id, { transferNote: event.target.value.toUpperCase() })} /></label>
                      </div>
                    </div> : <div className="gift-auto-panel">
                      <div className="gift-editor-grid">
                        <label className="gift-editor-wide">Ngân hàng{giftBanksLoading ? <small>Đang tải danh sách...</small> : giftBanks.length > 0 ? <select value={account.bankBin} disabled={!canEdit} onChange={(event) => chooseGiftBank(account.id, event.target.value)}><option value="">Chọn ngân hàng</option>{giftBanks.map((bank) => <option key={bank.bin} value={bank.bin}>{bank.shortName} · {bank.name}</option>)}</select> : <input value={account.bankName} disabled={!canEdit} maxLength={120} placeholder="Tên ngân hàng" onChange={(event) => updateGiftAccount(account.id, { bankName: event.target.value })} />}</label>
                        <label>BIN ngân hàng<input inputMode="numeric" value={account.bankBin} disabled={!canEdit} maxLength={6} placeholder="970436" onChange={(event) => updateGiftAccount(account.id, { bankBin: event.target.value.replace(/\D/g, "").slice(0, 6) })} /><small>Chỉ cần khi chọn ngân hàng thủ công.</small></label>
                        <label>Tên ngân hàng<input value={account.bankName} disabled={!canEdit} maxLength={120} placeholder="Vietcombank" onChange={(event) => updateGiftAccount(account.id, { bankName: event.target.value })} /></label>
                        <label>Số tài khoản<input inputMode="numeric" value={account.accountNumber} disabled={!canEdit} maxLength={19} placeholder="0123456789" onChange={(event) => updateGiftAccount(account.id, { accountNumber: event.target.value.replace(/\D/g, "").slice(0, 19) })} /></label>
                        <label>Chủ tài khoản<input value={account.accountName} disabled={!canEdit} maxLength={120} placeholder="NGUYEN VAN A" onChange={(event) => updateGiftAccount(account.id, { accountName: event.target.value.toUpperCase() })} /></label>
                        <label className="gift-editor-wide">Nội dung gợi ý<input value={account.transferNote} disabled={!canEdit} maxLength={25} placeholder="MUNG CUOI MINH ANH" onChange={(event) => updateGiftAccount(account.id, { transferNote: event.target.value.toUpperCase() })} /><small>Tối đa 25 ký tự để tương thích tốt với ứng dụng ngân hàng.</small></label>
                      </div>
                    </div>}

                    <div className={`gift-editor-preview ${ready ? "ready" : "incomplete"}`}>
                      {ready ? <><img src={giftAccountQrUrl(account)} alt={`Xem trước QR ${account.label}`} /><div><b>QR đã sẵn sàng</b><span>{account.mode === "UPLOAD" ? "Ảnh QR do bạn tải lên" : `${account.bankName || account.bankCode} · ${account.accountNumber}`}</span><small>Khách quét QR và kiểm tra người nhận trước khi chuyển khoản.</small></div></> : <><div className="gift-editor-qr-placeholder">QR</div><div><b>Chưa đủ dữ liệu</b><span>{account.mode === "UPLOAD" ? "Tải ảnh QR từ ứng dụng ngân hàng." : "Chọn ngân hàng, nhập số tài khoản và tên chủ tài khoản."}</span></div></>}
                    </div>
                  </article>;
                })}
              </div>

              {design.showGift && design.giftAccounts.length > 0 && !design.giftAccounts.some(giftAccountReady) && <Alert tone="warning">Phần mừng cưới đang bật nhưng chưa có QR hợp lệ nên sẽ chưa xuất hiện trên thiệp công khai.</Alert>}
              <button className="btn btn-secondary full-width" type="button" disabled={!canEdit || design.giftAccounts.length >= 3} onClick={addGiftAccount}>{design.giftAccounts.length >= 3 ? "Tối đa 3 tài khoản" : "+ Thêm tài khoản nhận lời chúc"}</button>
            </div>}

            {activeTab === "settings" && <div className="editor-form-stack">
              <SettingGroup title="Hiển thị và thứ tự" description="Ẩn phần chưa có nội dung và sắp xếp theo hành trình bạn muốn.">
                <div className="section-sort-list">{design.sectionOrder.map((key, index) => { const visibilityKey = visibilityKeys[key]; const visible = Boolean(design[visibilityKey]); return <article key={key}><span className="drag-handle">⋮⋮</span><label><input type="checkbox" checked={visible} disabled={!canEdit} onChange={(event) => updateDesign(visibilityKey, event.target.checked as never)} /><b>{sectionLabels[key]}</b></label><div><button type="button" disabled={!canEdit || index === 0} onClick={() => moveSection(index, -1)}>↑</button><button type="button" disabled={!canEdit || index === design.sectionOrder.length - 1} onClick={() => moveSection(index, 1)}>↓</button></div></article>; })}</div>
              </SettingGroup>
              <SettingGroup title="Nhạc nền" description="Trình duyệt yêu cầu khách chủ động bật nhạc; thiệp không tự phát âm thanh.">
                <label className="toggle-row"><span><b>Bật nút phát nhạc</b><small>Chỉ hiện khi có URL nhạc hợp lệ.</small></span><input type="checkbox" checked={design.musicEnabled} disabled={!canEdit} onChange={(event) => updateDesign("musicEnabled", event.target.checked)} /></label>
                <label>URL file nhạc<input type="url" placeholder="https://.../music.mp3" value={design.musicUrl ?? ""} disabled={!canEdit || !design.musicEnabled} onChange={(event) => updateDesign("musicUrl", event.target.value || null)} /></label>
              </SettingGroup>
              <SettingGroup title="Đường dẫn công khai"><div className="public-link-box"><span>ngaydoi.vn/thiep/{data.slug}</span>{data.status === "PUBLISHED" ? <a href={`/thiep/${data.slug}`} target="_blank" rel="noreferrer">Mở thiệp ↗</a> : <small>Thiệp chỉ truy cập công khai sau khi xuất bản.</small>}</div></SettingGroup>
            </div>}

            {activeTab === "history" && <div className="editor-form-stack">
              <SettingGroup title="Lịch sử phiên bản" description="Hệ thống tự tạo một phiên bản mỗi lần xuất bản. Bạn cũng có thể lưu thủ công trước thay đổi lớn.">
                <button className="btn btn-secondary full-width" type="button" disabled={!canEdit || historyBusy} onClick={() => void createVersion()}>{historyBusy ? "Đang xử lý..." : "+ Lưu phiên bản hiện tại"}</button>
              </SettingGroup>
              {data.invitationVersions.length === 0 ? <div className="editor-mini-empty"><b>Chưa có phiên bản</b><p>Lưu phiên bản đầu tiên để có điểm khôi phục.</p></div> : <div className="version-list">{data.invitationVersions.map((version) => <article key={version.id}><div><b>Phiên bản {version.versionNumber}</b><span>{version.reason === "PUBLISH" ? "Tự động khi xuất bản" : "Lưu thủ công"}</span><small>{formatDate(version.createdAt, true)}</small></div><button type="button" disabled={!canEdit || historyBusy} onClick={() => void restoreVersion(version.id, version.versionNumber)}>Khôi phục</button></article>)}</div>}
            </div>}
          </aside>

          <section className="editor-preview-area">
            <div className="preview-toolbar"><div className="device-toggle"><button className={device === "mobile" ? "active" : ""} type="button" onClick={() => setDevice("mobile")}>Điện thoại</button><button className={device === "desktop" ? "active" : ""} type="button" onClick={() => setDevice("desktop")}>Máy tính</button></div><span>{device === "mobile" ? "390 px" : "100%"}</span></div>
            <div className={`preview-stage ${device}`}><div className="preview-browser"><div className="preview-browser-bar"><i /><i /><i /><span>ngaydoi.vn/thiep/{data.slug}</span></div><div className="preview-scroll">{previewData && <PublicInvitation data={previewData} embedded previewViewport={device} />}</div></div></div>
          </section>
        </div>
      </div>
    </AppShell>
  );
}

export default function InvitationEditorPage() {
  return <AuthGate><InvitationEditorContent /></AuthGate>;
}
