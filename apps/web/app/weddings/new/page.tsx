"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { AppShell } from "../../../components/app-shell";
import { AuthGate } from "../../../components/auth-gate";
import { useAuth } from "../../../components/auth-provider";
import { Alert, Button, ButtonLink, DateTimeField, FormActions, FormErrorSummary, FormField, FormRequiredNote, useUnsavedChangesGuard, type FormIssue } from "../../../components/ui";
import { ApiError } from "../../../lib/api";

interface SlugAvailability { slug: string; available: boolean; reason: string | null }

const initialForm = {
  groomName: "",
  brideName: "",
  title: "",
  slug: "",
  mainDate: "",
  timezone: "Asia/Ho_Chi_Minh",
};

function slugify(value: string): string {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/đ/g, "d").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 80);
}

function NewWeddingContent() {
  const { authRequest } = useAuth();
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [issues, setIssues] = useState<FormIssue[]>([]);
  const [slugState, setSlugState] = useState<"idle" | "checking" | "available" | "unavailable">("idle");
  const [form, setForm] = useState(initialForm);
  const dirty = useMemo(() => JSON.stringify(form) !== JSON.stringify(initialForm), [form]);
  const guard = useUnsavedChangesGuard(dirty && !submitting);
  const generatedTitle = useMemo(() => form.groomName && form.brideName ? `Đám cưới ${form.groomName} & ${form.brideName}` : "", [form.groomName, form.brideName]);

  useEffect(() => {
    if (!form.slug || form.slug.length < 3) { setSlugState("idle"); return; }
    setSlugState("checking");
    const timer = window.setTimeout(() => {
      void authRequest<SlugAvailability>(`/weddings/slug-availability?slug=${encodeURIComponent(form.slug)}`)
        .then((result) => setSlugState(result.available ? "available" : "unavailable"))
        .catch(() => setSlugState("unavailable"));
    }, 350);
    return () => window.clearTimeout(timer);
  }, [authRequest, form.slug]);

  function update(key: keyof typeof form, value: string): void {
    setForm((current) => ({ ...current, [key]: value }));
    setIssues((current) => current.filter((item) => item.fieldId !== `wedding-${key}`));
  }

  function goNext(): void {
    setError("");
    const nextIssues: FormIssue[] = [];
    if (step === 1) {
      if (form.groomName.trim().length < 2) nextIssues.push({ fieldId: "wedding-groomName", message: "Tên chú rể cần ít nhất 2 ký tự." });
      if (form.brideName.trim().length < 2) nextIssues.push({ fieldId: "wedding-brideName", message: "Tên cô dâu cần ít nhất 2 ký tự." });
      if (nextIssues.length) { setIssues(nextIssues); return; }
      setForm((current) => ({ ...current, title: current.title || generatedTitle, slug: current.slug || slugify(`${current.groomName}-${current.brideName}`) }));
    }
    if (step === 2) {
      if (!form.mainDate) nextIssues.push({ fieldId: "wedding-mainDate", message: "Vui lòng chọn ngày cưới chính." });
      if (slugState !== "available") nextIssues.push({ fieldId: "wedding-slug", message: "Đường dẫn thiệp chưa sẵn sàng hoặc đã được sử dụng." });
      if (nextIssues.length) { setIssues(nextIssues); return; }
    }
    setIssues([]);
    setStep((current) => Math.min(3, current + 1));
  }

  async function submit(event: FormEvent): Promise<void> {
    event.preventDefault();
    setSubmitting(true); setError(""); setIssues([]);
    try {
      const wedding = await authRequest<{ id: string }>("/weddings", {
        method: "POST",
        body: JSON.stringify({ ...form, mainDate: new Date(`${form.mainDate}T00:00:00+07:00`).toISOString() }),
      });
      guard.allowNavigation(() => router.push(`/weddings/${wedding.id}`));
    } catch (reason) {
      setError(reason instanceof ApiError ? reason.message : "Không thể tạo đám cưới. Vui lòng thử lại.");
    } finally { setSubmitting(false); }
  }

  return (
    <AppShell active="weddings">
      <div className="wizard-wrap">
        <a className="back-link" href="/dashboard">← Quay lại danh sách</a>
        <div className="wizard-head">
          <div><div className="eyebrow">Wedding setup wizard</div><h1>Tạo đám cưới mới</h1><p>Bạn chỉ cần ba bước. Các thông tin chi tiết có thể bổ sung sau.</p></div>
          <div className="wizard-progress" aria-label={`Bước ${step} trên 3`}>{[1, 2, 3].map((number) => <span className={number <= step ? "active" : ""} key={number}>{number}</span>)}</div>
        </div>

        <form className="wizard-card" onSubmit={(event) => void submit(event)} noValidate>
          <FormRequiredNote />
          <FormErrorSummary issues={issues} />
          {error ? <Alert tone="error" title="Chưa thể tạo workspace">{error}</Alert> : null}

          {step === 1 ? (
            <div className="wizard-step">
              <div className="step-title"><span>01</span><div><h2>Hai bạn là ai?</h2><p>Thông tin này sẽ được dùng xuyên suốt workspace.</p></div></div>
              <div className="form-grid two">
                <FormField id="wedding-groomName" label="Tên chú rể" required error={issues.find((item) => item.fieldId === "wedding-groomName")?.message}><input autoFocus value={form.groomName} onChange={(event) => update("groomName", event.target.value)} placeholder="Ví dụ: Minh" maxLength={60} /></FormField>
                <FormField id="wedding-brideName" label="Tên cô dâu" required error={issues.find((item) => item.fieldId === "wedding-brideName")?.message}><input value={form.brideName} onChange={(event) => update("brideName", event.target.value)} placeholder="Ví dụ: Anh" maxLength={60} /></FormField>
                <FormField id="wedding-title" label="Tên workspace nội bộ" helperText="Chỉ bạn và cộng tác viên nhìn thấy tên này trong dashboard." className="full"><input value={form.title || generatedTitle} onChange={(event) => update("title", event.target.value)} placeholder="Đám cưới Minh & Anh" maxLength={80} /></FormField>
              </div>
            </div>
          ) : null}

          {step === 2 ? (
            <div className="wizard-step">
              <div className="step-title"><span>02</span><div><h2>Ngày cưới và đường dẫn</h2><p>Ngày chính dùng cho checklist; sự kiện cụ thể sẽ thêm ở bước sau.</p></div></div>
              <div className="form-grid two">
                <DateTimeField id="wedding-mainDate" label="Ngày cưới chính" type="date" required value={form.mainDate} onChange={(event) => update("mainDate", event.target.value)} error={issues.find((item) => item.fieldId === "wedding-mainDate")?.message} />
                <FormField id="wedding-timezone" label="Múi giờ" required><select value={form.timezone} onChange={(event) => update("timezone", event.target.value)}><option value="Asia/Ho_Chi_Minh">Việt Nam · GMT+7</option><option value="Asia/Singapore">Singapore · GMT+8</option></select></FormField>
                <div className={`ui-field full ${issues.some((item) => item.fieldId === "wedding-slug") ? "ui-field-error" : ""}`}>
                  <label className="ui-field-label" htmlFor="wedding-slug"><span>Đường dẫn thiệp</span><span className="ui-field-required" aria-label="Bắt buộc">*</span></label>
                  <div className="slug-input"><span>ngaydoi.vn/i/</span><input id="wedding-slug" className="ui-control" value={form.slug} onChange={(event) => update("slug", slugify(event.target.value))} placeholder="minh-anh" aria-invalid={issues.some((item) => item.fieldId === "wedding-slug") || undefined} /></div>
                  <p className={`slug-state ${slugState}`} aria-live="polite">{slugState === "checking" ? "Đang kiểm tra…" : slugState === "available" ? "✓ Có thể sử dụng" : slugState === "unavailable" ? "⚠ Đường dẫn đã dùng hoặc không hợp lệ" : "Chỉ dùng chữ thường, số và dấu gạch ngang."}</p>
                </div>
              </div>
            </div>
          ) : null}

          {step === 3 ? (
            <div className="wizard-step">
              <div className="step-title"><span>03</span><div><h2>Kiểm tra và tạo workspace</h2><p>Workspace mới luôn ở trạng thái bản nháp.</p></div></div>
              <div className="review-card"><div className="review-monogram">{form.groomName.charAt(0)} <span>&</span> {form.brideName.charAt(0)}</div><h3>{form.groomName} & {form.brideName}</h3><dl><div><dt>Tên nội bộ</dt><dd>{form.title}</dd></div><div><dt>Ngày chính</dt><dd>{new Date(`${form.mainDate}T00:00:00`).toLocaleDateString("vi-VN")}</dd></div><div><dt>Đường dẫn</dt><dd>ngaydoi.vn/i/{form.slug}</dd></div><div><dt>Trạng thái</dt><dd>Bản nháp</dd></div></dl></div>
            </div>
          ) : null}

          <FormActions dirty={dirty} saving={submitting}>
            {step > 1 ? <Button variant="secondary" type="button" onClick={() => { setIssues([]); setError(""); setStep((current) => current - 1); }}>Quay lại</Button> : <ButtonLink variant="secondary" href="/dashboard">Hủy</ButtonLink>}
            {step < 3 ? <Button type="button" onClick={goNext}>Tiếp tục</Button> : <Button loading={submitting} loadingLabel="Đang tạo workspace…" type="submit">Tạo workspace</Button>}
          </FormActions>
        </form>
      </div>
      {guard.dialog}
    </AppShell>
  );
}

export default function NewWeddingPage() { return <AuthGate><NewWeddingContent /></AuthGate>; }
