"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthGate } from "../../../components/auth-gate";
import { useAuth } from "../../../components/auth-provider";
import { Alert, EmptyState, PageSkeleton } from "../../../components/ui";
import { apiRequest, ApiError } from "../../../lib/api";
import { clearGuestDraft, readGuestDraft, saveGuestDraft, slugifyGuestDraft } from "../../../lib/guest-draft";
import type { InvitationTemplate } from "../../../lib/invitations";

function ContinueGuestDraft() {
  const router = useRouter();
  const { authRequest } = useAuth();
  const [error, setError] = useState("");
  const [missing, setMissing] = useState(false);
  const [busy, setBusy] = useState(false);
  const startedRef = useRef(false);

  const importDraft = useCallback(async () => {
    if (busy) return;
    const draft = readGuestDraft();
    if (!draft) { setMissing(true); return; }
    setBusy(true);
    setError("");
    try {
      const templates = await apiRequest<InvitationTemplate[]>("/templates");
      const template = templates.find((item) => item.key === draft.templateKey) ?? templates[0];
      let weddingId = draft.importedWeddingId;
      if (!weddingId) {
        const base = slugifyGuestDraft(`${draft.groomName}-${draft.brideName}`);
        let slug = base;
        for (let attempt = 0; attempt < 20; attempt += 1) {
          const result = await authRequest<{ available: boolean }>(`/weddings/slug-availability?slug=${encodeURIComponent(slug)}`);
          if (result.available) break;
          slug = `${base}-${String(Math.floor(1000 + Math.random() * 9000))}`;
        }
        const wedding = await authRequest<{ id: string }>("/weddings", {
          method: "POST",
          body: JSON.stringify({
            title: `Đám cưới ${draft.groomName} & ${draft.brideName}`,
            groomName: draft.groomName.trim(),
            brideName: draft.brideName.trim(),
            slug,
            timezone: "Asia/Ho_Chi_Minh",
            ...(draft.mainDate ? { mainDate: new Date(`${draft.mainDate}T00:00:00+07:00`).toISOString() } : {}),
          }),
        });
        weddingId = wedding.id;
        saveGuestDraft({ ...draft, importedWeddingId: weddingId });
      }
      let templateFallback = false;
      if (template) {
        const applyTemplate = (selected: InvitationTemplate) => authRequest(`/weddings/${weddingId}/invitation`, {
          method: "PATCH",
          body: JSON.stringify({
            templateKey: selected.key,
            paletteKey: selected.key,
            ...selected.palette,
            headingFont: selected.headingFont,
            bodyFont: selected.bodyFont,
            greeting: draft.greeting,
          }),
        });
        try {
          await applyTemplate(template);
        } catch (reason) {
          const freeTemplate = templates.find((item) => item.plan === "FREE");
          if (!(reason instanceof ApiError) || !reason.message.includes("chưa nằm trong gói") || !freeTemplate) throw reason;
          await applyTemplate(freeTemplate);
          templateFallback = true;
        }
      }
      clearGuestDraft();
      router.replace(`/weddings/${weddingId}/invitation?from=guest-draft${templateFallback ? "&template=fallback" : ""}`);
    } catch (reason) {
      setError(reason instanceof ApiError ? reason.message : "Không thể lưu bản nháp vào workspace.");
      setBusy(false);
    }
  }, [authRequest, busy, router]);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    void importDraft();
  }, [importDraft]);

  if (missing) return <main id="main-content" tabIndex={-1} className="guest-import-state"><EmptyState icon="✦" title="Không tìm thấy bản nháp" description="Bản nháp có thể đã được lưu trước đó hoặc đã bị xóa khỏi trình duyệt." primaryAction={{ label: "Tạo thiệp mới", href: "/create" }} secondaryAction={{ label: "Về dashboard", href: "/dashboard" }} /></main>;
  return <main id="main-content" tabIndex={-1} className="guest-import-state"><PageSkeleton />{error ? <Alert tone="error" title="Chưa thể lưu bản nháp">{error}<div className="inline-actions"><button className="btn btn-primary" type="button" onClick={() => void importDraft()} disabled={busy}>Thử lại</button><a className="btn btn-secondary" href="/create">Quay lại chỉnh thiệp</a></div></Alert> : <Alert tone="info" title="Đang tạo workspace">Ngày Đôi đang chuyển mẫu và nội dung bạn vừa thử vào tài khoản.</Alert>}</main>;
}

export default function ContinueGuestDraftPage() {
  return <AuthGate><ContinueGuestDraft /></AuthGate>;
}
