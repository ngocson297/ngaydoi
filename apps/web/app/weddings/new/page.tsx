"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AppShell } from "../../../components/app-shell";
import { AuthGate } from "../../../components/auth-gate";
import { useAuth } from "../../../components/auth-provider";
import { ApiError } from "../../../lib/api";

interface SlugAvailability { slug: string; available: boolean; reason: string | null }

function slugify(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function NewWeddingContent() {
  const { authRequest } = useAuth();
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [slugState, setSlugState] = useState<"idle" | "checking" | "available" | "unavailable">("idle");
  const [form, setForm] = useState({
    groomName: "",
    brideName: "",
    title: "",
    slug: "",
    mainDate: "",
    timezone: "Asia/Ho_Chi_Minh",
  });

  const generatedTitle = useMemo(() => form.groomName && form.brideName ? `Đám cưới ${form.groomName} & ${form.brideName}` : "", [form.groomName, form.brideName]);

  useEffect(() => {
    if (!form.slug || form.slug.length < 3) {
      setSlugState("idle");
      return;
    }
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
  }

  function goNext(): void {
    setError("");
    if (step === 1) {
      if (form.groomName.trim().length < 2 || form.brideName.trim().length < 2) {
        setError("Vui lòng nhập tên cô dâu và chú rể.");
        return;
      }
      setForm((current) => ({
        ...current,
        title: current.title || generatedTitle,
        slug: current.slug || slugify(`${current.groomName}-${current.brideName}`),
      }));
    }
    if (step === 2 && (!form.mainDate || slugState !== "available")) {
      setError(!form.mainDate ? "Vui lòng chọn ngày cưới chính." : "Đường dẫn thiệp chưa sẵn sàng.");
      return;
    }
    setStep((current) => Math.min(3, current + 1));
  }

  async function submit(event: FormEvent): Promise<void> {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const wedding = await authRequest<{ id: string }>("/weddings", {
        method: "POST",
        body: JSON.stringify({
          title: form.title,
          brideName: form.brideName,
          groomName: form.groomName,
          slug: form.slug,
          mainDate: new Date(`${form.mainDate}T00:00:00+07:00`).toISOString(),
          timezone: form.timezone,
        }),
      });
      router.push(`/weddings/${wedding.id}`);
    } catch (reason) {
      setError(reason instanceof ApiError ? reason.message : "Không thể tạo đám cưới");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <AppShell active="weddings">
      <div className="wizard-wrap">
        <a className="back-link" href="/dashboard">← Quay lại danh sách</a>
        <div className="wizard-head">
          <div><div className="eyebrow">Wedding setup wizard</div><h1>Tạo đám cưới mới</h1><p>Bạn chỉ cần ba bước. Các thông tin chi tiết có thể bổ sung sau.</p></div>
          <div className="wizard-progress" aria-label={`Bước ${step} trên 3`}>
            {[1, 2, 3].map((number) => <span className={number <= step ? "active" : ""} key={number}>{number}</span>)}
          </div>
        </div>

        <form className="wizard-card" onSubmit={(event) => void submit(event)}>
          {error && <div className="alert alert-error">{error}</div>}

          {step === 1 && (
            <div className="wizard-step">
              <div className="step-title"><span>01</span><div><h2>Hai bạn là ai?</h2><p>Thông tin này sẽ được dùng xuyên suốt workspace.</p></div></div>
              <div className="form-grid two">
                <label>Tên chú rể<input autoFocus value={form.groomName} onChange={(event) => update("groomName", event.target.value)} placeholder="Ví dụ: Minh" maxLength={60} /></label>
                <label>Tên cô dâu<input value={form.brideName} onChange={(event) => update("brideName", event.target.value)} placeholder="Ví dụ: Anh" maxLength={60} /></label>
                <label className="full">Tên workspace nội bộ<input value={form.title || generatedTitle} onChange={(event) => update("title", event.target.value)} placeholder="Đám cưới Minh & Anh" maxLength={80} /><small>Chỉ bạn và cộng tác viên nhìn thấy tên này trong dashboard.</small></label>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="wizard-step">
              <div className="step-title"><span>02</span><div><h2>Ngày cưới và đường dẫn</h2><p>Ngày chính dùng cho checklist; sự kiện cụ thể sẽ thêm ở bước sau.</p></div></div>
              <div className="form-grid two">
                <label>Ngày cưới chính<input type="date" value={form.mainDate} onChange={(event) => update("mainDate", event.target.value)} /></label>
                <label>Múi giờ<select value={form.timezone} onChange={(event) => update("timezone", event.target.value)}><option value="Asia/Ho_Chi_Minh">Việt Nam · GMT+7</option><option value="Asia/Singapore">Singapore · GMT+8</option></select></label>
                <label className="full">Đường dẫn thiệp<div className="slug-input"><span>ngaydoi.vn/i/</span><input value={form.slug} onChange={(event) => update("slug", slugify(event.target.value))} placeholder="minh-anh" /></div><small className={`slug-state ${slugState}`}>{slugState === "checking" ? "Đang kiểm tra..." : slugState === "available" ? "✓ Có thể sử dụng" : slugState === "unavailable" ? "Đường dẫn đã dùng hoặc không hợp lệ" : "Chỉ dùng chữ thường, số và dấu gạch ngang."}</small></label>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="wizard-step">
              <div className="step-title"><span>03</span><div><h2>Kiểm tra và tạo workspace</h2><p>Workspace mới luôn ở trạng thái bản nháp.</p></div></div>
              <div className="review-card">
                <div className="review-monogram">{form.groomName.charAt(0)} <span>&</span> {form.brideName.charAt(0)}</div>
                <h3>{form.groomName} & {form.brideName}</h3>
                <dl><div><dt>Tên nội bộ</dt><dd>{form.title}</dd></div><div><dt>Ngày chính</dt><dd>{new Date(`${form.mainDate}T00:00:00`).toLocaleDateString("vi-VN")}</dd></div><div><dt>Đường dẫn</dt><dd>ngaydoi.vn/i/{form.slug}</dd></div><div><dt>Trạng thái</dt><dd>Bản nháp</dd></div></dl>
              </div>
            </div>
          )}

          <div className="wizard-actions">
            {step > 1 ? <button className="btn btn-secondary" type="button" onClick={() => { setError(""); setStep((current) => current - 1); }}>Quay lại</button> : <a className="btn btn-secondary" href="/dashboard">Hủy</a>}
            {step < 3 ? <button className="btn btn-primary" type="button" onClick={goNext}>Tiếp tục</button> : <button className="btn btn-primary" disabled={submitting} type="submit">{submitting ? "Đang tạo..." : "Tạo workspace"}</button>}
          </div>
        </form>
      </div>
    </AppShell>
  );
}

export default function NewWeddingPage() {
  return <AuthGate><NewWeddingContent /></AuthGate>;
}
