"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { PublicInvitation } from "../../components/public-invitation";
import { useAuth } from "../../components/auth-provider";
import { Alert, Button, FormField, InlineErrorState } from "../../components/ui";
import { apiRequest, toUiError, type UiError } from "../../lib/api";
import { createGuestDraft, guestDraftPreview, readGuestDraft, saveGuestDraft, type GuestInvitationDraft } from "../../lib/guest-draft";
import type { InvitationTemplate } from "../../lib/invitations";

export default function GuestCreatePage() {
  const router = useRouter();
  const { status } = useAuth();
  const [templates, setTemplates] = useState<InvitationTemplate[]>([]);
  const [draft, setDraft] = useState<GuestInvitationDraft>(() => createGuestDraft());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<UiError | null>(null);
  const [validation, setValidation] = useState("");

  useEffect(() => {
    const queryTemplate = new URLSearchParams(window.location.search).get("template") || "";
    const saved = readGuestDraft();
    setDraft(saved ? { ...saved, templateKey: queryTemplate || saved.templateKey } : createGuestDraft(queryTemplate || "classic-wine"));
    void apiRequest<InvitationTemplate[]>("/templates")
      .then((items) => { setTemplates(items); setError(null); })
      .catch((reason) => setError(toUiError(reason, "Không thể tải mẫu thiệp.")))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => saveGuestDraft(draft), 180);
    return () => window.clearTimeout(timer);
  }, [draft]);

  const selectedTemplate = useMemo(() => templates.find((item) => item.key === draft.templateKey) ?? templates[0], [draft.templateKey, templates]);
  const preview = useMemo(() => guestDraftPreview(draft, selectedTemplate), [draft, selectedTemplate]);
  const selectedPlanLabel = selectedTemplate?.plan === "PREMIUM" ? "Cao cấp" : selectedTemplate?.plan === "STANDARD" ? "Tiêu chuẩn" : selectedTemplate?.plan === "STARTER" ? "Cơ bản" : "Miễn phí";

  function update<K extends keyof GuestInvitationDraft>(key: K, value: GuestInvitationDraft[K]): void {
    setDraft((current) => ({ ...current, [key]: value, updatedAt: new Date().toISOString() }));
    setValidation("");
  }

  function continueFlow(): void {
    if (draft.groomName.trim().length < 2 || draft.brideName.trim().length < 2) {
      setValidation("Vui lòng nhập tên cô dâu và chú rể, mỗi tên ít nhất 2 ký tự.");
      return;
    }
    saveGuestDraft(draft);
    if (status === "authenticated") router.push("/create/continue");
    else router.push("/register?next=/create/continue&from=guest-draft");
  }

  return (
    <main id="main-content" tabIndex={-1} className="guest-create-page">
      <header className="guest-create-header">
        <a className="brand" href="/">Ngày <span>Đôi</span></a>
        <div><span>Bản nháp được lưu trên thiết bị</span><a href="/templates">Đổi mẫu</a></div>
      </header>
      <div className="guest-create-shell">
        <aside className="guest-create-controls">
          <div className="eyebrow">Tạo trước · đăng ký sau</div>
          <h1>Thử làm thiệp ngay.</h1>
          <p>Bạn có thể chọn mẫu, nhập tên và ngày cưới trước. Chỉ khi lưu vào workspace, Ngày Đôi mới yêu cầu tài khoản.</p>
          {validation ? <Alert tone="warning">{validation}</Alert> : null}
          {selectedTemplate && selectedTemplate.plan !== "FREE" ? <Alert tone="info" title={`Đang thử mẫu gói ${selectedPlanLabel}`}>Bạn vẫn có thể chỉnh thử. Khi lưu vào workspace, Ngày Đôi sẽ kiểm tra quyền của gói; nếu chưa mở khóa, nội dung vẫn được giữ và hệ thống dùng một mẫu miễn phí để bạn tiếp tục.</Alert> : null}
          {error ? <InlineErrorState description={error.message} requestId={error.requestId} onRetry={() => window.location.reload()} /> : null}
          <div className="guest-create-form">
            <div className="form-grid two">
              <FormField id="guest-draft-groom" label="Tên chú rể" required><input value={draft.groomName} onChange={(event) => update("groomName", event.target.value)} maxLength={60} /></FormField>
              <FormField id="guest-draft-bride" label="Tên cô dâu" required><input value={draft.brideName} onChange={(event) => update("brideName", event.target.value)} maxLength={60} /></FormField>
            </div>
            <FormField id="guest-draft-date" label="Ngày cưới" helperText="Có thể đổi lại sau khi lưu workspace."><input type="date" value={draft.mainDate} onChange={(event) => update("mainDate", event.target.value)} /></FormField>
            <FormField id="guest-draft-greeting" label="Lời mời mở đầu"><textarea rows={4} value={draft.greeting} onChange={(event) => update("greeting", event.target.value)} maxLength={500} /></FormField>
            <label className="guest-template-picker"><span>Mẫu đang dùng</span><select disabled={loading || !templates.length} value={draft.templateKey} onChange={(event) => update("templateKey", event.target.value)}>{templates.map((template) => <option value={template.key} key={template.key}>{template.name} · {template.style} · {template.plan === "FREE" ? "Miễn phí" : template.plan === "STARTER" ? "Cơ bản" : template.plan === "STANDARD" ? "Tiêu chuẩn" : "Cao cấp"}</option>)}</select></label>
          </div>
          <div className="guest-create-actions">
            <Button type="button" fullWidth onClick={continueFlow}>{status === "authenticated" ? "Lưu vào workspace" : "Lưu thiệp miễn phí"}</Button>
            <small>Không mất bản nháp khi chuyển sang đăng ký hoặc đăng nhập.</small>
          </div>
        </aside>
        <section className="guest-create-preview" aria-label="Xem trước thiệp đang chỉnh">
          <div className="guest-create-device"><span /><span /><span /><strong>Xem trước trực tiếp</strong></div>
          <div className="guest-create-preview-scroll"><PublicInvitation data={preview} preview embedded /></div>
        </section>
      </div>
    </main>
  );
}
