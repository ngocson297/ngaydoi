"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AppShell } from "../../components/app-shell";
import { AuthGate } from "../../components/auth-gate";
import { useAuth } from "../../components/auth-provider";
import { ApiError } from "../../lib/api";
import type { CatalogResponse, PlanSummary } from "../../lib/commercial";
import { formatMoney } from "../../lib/commercial";
import type { WeddingSummary } from "../../lib/weddings";

interface QuoteResponse {
  plan: PlanSummary;
  addOns: Array<{ code: string; name: string; priceAmount: number; totalAmount: number }>;
  coupon: { code: string; name: string } | null;
  subtotalAmount: number;
  discountAmount: number;
  totalAmount: number;
  currency: string;
}

function PricingContent() {
  const { authRequest } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [catalog, setCatalog] = useState<CatalogResponse | null>(null);
  const [weddings, setWeddings] = useState<WeddingSummary[]>([]);
  const [weddingId, setWeddingId] = useState(searchParams.get("weddingId") ?? "");
  const [planCode, setPlanCode] = useState(searchParams.get("plan") ?? "STANDARD");
  const [addOnCodes, setAddOnCodes] = useState<string[]>([]);
  const [couponCode, setCouponCode] = useState("WELCOME10");
  const [quote, setQuote] = useState<QuoteResponse | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    void Promise.all([
      authRequest<CatalogResponse>("/plans"),
      authRequest<WeddingSummary[]>("/weddings"),
    ]).then(([catalogResult, weddingResult]) => {
      setCatalog(catalogResult);
      setWeddings(weddingResult.filter((item) => item.access === "OWNER"));
      if (!weddingId && weddingResult.length) setWeddingId(weddingResult.find((item) => item.access === "OWNER")?.id ?? "");
    }).catch((reason: unknown) => setError(reason instanceof ApiError ? reason.message : "Không thể tải bảng giá"));
  }, [authRequest, weddingId]);

  const selectedPlan = useMemo(() => catalog?.plans.find((item) => item.code === planCode) ?? null, [catalog, planCode]);

  async function calculateQuote(): Promise<void> {
    if (!weddingId) { setError("Vui lòng chọn đám cưới áp dụng gói."); return; }
    setBusy(true); setError("");
    try {
      const result = await authRequest<QuoteResponse>("/orders/quote", {
        method: "POST",
        body: JSON.stringify({ weddingId, planCode, addOnCodes, couponCode: couponCode.trim() || undefined }),
      });
      setQuote(result);
    } catch (reason) {
      setQuote(null);
      setError(reason instanceof ApiError ? reason.message : "Không thể tính giá");
    } finally { setBusy(false); }
  }

  async function createOrder(): Promise<void> {
    if (!quote || !weddingId) { await calculateQuote(); return; }
    setBusy(true); setError("");
    try {
      const order = await authRequest<{ id: string }>("/orders", {
        method: "POST",
        body: JSON.stringify({ weddingId, planCode, addOnCodes, couponCode: couponCode.trim() || undefined }),
      });
      router.push(`/orders/${order.id}`);
    } catch (reason) {
      setError(reason instanceof ApiError ? reason.message : "Không thể tạo đơn hàng");
    } finally { setBusy(false); }
  }

  function toggleAddOn(code: string): void {
    setQuote(null);
    setAddOnCodes((current) => current.includes(code) ? current.filter((item) => item !== code) : [...current, code]);
  }

  return (
    <AppShell active="billing">
      <div className="commerce-head">
        <div><div className="eyebrow">Commercial foundation</div><h1>Chọn gói phù hợp với ngày cưới</h1><p>Giá một lần cho một wedding. Bạn luôn thấy rõ giới hạn và số tiền trước khi tạo đơn.</p></div>
        <a className="btn btn-secondary" href="/billing">Đơn hàng của tôi</a>
      </div>
      {error && <div className="alert alert-error">{error}</div>}

      <section className="commerce-step-card">
        <div className="commerce-step-number">1</div>
        <div className="commerce-step-body">
          <h2>Chọn wedding cần kích hoạt</h2>
          <select value={weddingId} onChange={(event) => { setWeddingId(event.target.value); setQuote(null); }}>
            <option value="">Chọn đám cưới</option>
            {weddings.map((item) => <option value={item.id} key={item.id}>{item.groomName} & {item.brideName} · {item.activePlan?.name ?? "Khởi đầu"}</option>)}
          </select>
          {!weddings.length && <p className="commerce-hint">Bạn cần tạo một wedding trước khi mua gói. <a href="/weddings/new">Tạo wedding →</a></p>}
        </div>
      </section>

      <section className="commerce-section">
        <div className="commerce-section-title"><span>2</span><div><h2>Chọn gói dịch vụ</h2><p>Có thể nâng cấp sau. Quyền lợi mới được kích hoạt ngay khi thanh toán được xác nhận.</p></div></div>
        <div className="commerce-plan-grid">
          {catalog?.plans.filter((plan) => plan.code !== "FREE").map((plan) => (
            <button className={`commerce-plan-card ${planCode === plan.code ? "selected" : ""} ${plan.recommended ? "recommended" : ""}`} type="button" onClick={() => { setPlanCode(plan.code); setQuote(null); }} key={plan.id}>
              {plan.recommended && <span className="commerce-ribbon">Được chọn nhiều</span>}
              <div className="commerce-plan-check">{planCode === plan.code ? "✓" : ""}</div>
              <small>{plan.code}</small><h3>{plan.name}</h3><p>{plan.description}</p>
              <strong>{formatMoney(plan.priceAmount, plan.currency)}</strong><em>/ wedding</em>
              <ul>
                <li>Tối đa {plan.guestLimit.toLocaleString("vi-VN")} khách</li>
                <li>Tối đa {plan.mediaLimit} ảnh</li>
                <li>{plan.templateKeys.length} mẫu thiệp</li>
                <li>{plan.prioritySupport ? "Hỗ trợ ưu tiên" : "Hỗ trợ tiêu chuẩn"}</li>
              </ul>
            </button>
          ))}
        </div>
      </section>

      <section className="commerce-section">
        <div className="commerce-section-title"><span>3</span><div><h2>Mở rộng khi cần</h2><p>Add-on chỉ áp dụng cho wedding đã chọn và được cộng vào giới hạn hiện tại.</p></div></div>
        <div className="addon-grid">
          {catalog?.addOns.map((item) => (
            <label className={`addon-card ${addOnCodes.includes(item.code) ? "selected" : ""}`} key={item.id}>
              <input type="checkbox" checked={addOnCodes.includes(item.code)} onChange={() => toggleAddOn(item.code)} />
              <div><strong>{item.name}</strong><p>{item.description}</p></div><b>{formatMoney(item.priceAmount)}</b>
            </label>
          ))}
        </div>
      </section>

      <section className="commerce-checkout-grid">
        <div className="coupon-card">
          <div className="commerce-section-title compact"><span>4</span><div><h2>Mã ưu đãi</h2><p>Thử mã dành cho môi trường demo.</p></div></div>
          <div className="coupon-row"><input value={couponCode} onChange={(event) => { setCouponCode(event.target.value.toUpperCase()); setQuote(null); }} placeholder="WELCOME10" /><button className="btn btn-secondary" disabled={busy} onClick={() => void calculateQuote()}>Áp dụng</button></div>
          <small>Demo: <strong>WELCOME10</strong> giảm 10%.</small>
        </div>
        <aside className="order-summary-card">
          <span>Tóm tắt lựa chọn</span>
          <h3>{selectedPlan?.name ?? "Chưa chọn gói"}</h3>
          <div className="summary-line"><span>Gói dịch vụ</span><strong>{formatMoney(selectedPlan?.priceAmount ?? 0)}</strong></div>
          {addOnCodes.map((code) => {
            const item = catalog?.addOns.find((addOn) => addOn.code === code);
            return item ? <div className="summary-line" key={code}><span>{item.name}</span><strong>{formatMoney(item.priceAmount)}</strong></div> : null;
          })}
          {quote?.discountAmount ? <div className="summary-line discount"><span>Ưu đãi {quote.coupon?.code}</span><strong>-{formatMoney(quote.discountAmount)}</strong></div> : null}
          <div className="summary-total"><span>Tổng thanh toán</span><strong>{formatMoney(quote?.totalAmount ?? (selectedPlan?.priceAmount ?? 0) + addOnCodes.reduce((sum, code) => sum + (catalog?.addOns.find((item) => item.code === code)?.priceAmount ?? 0), 0))}</strong></div>
          {!quote ? <button className="btn btn-primary" disabled={busy || !weddingId} onClick={() => void calculateQuote()}>{busy ? "Đang tính..." : "Xem giá cuối cùng"}</button> : <button className="btn btn-primary" disabled={busy} onClick={() => void createOrder()}>{busy ? "Đang tạo đơn..." : "Tạo đơn hàng"}</button>}
          <small>Chưa thu tiền ở bước này. Bạn sẽ nhận hướng dẫn chuyển khoản sau khi tạo đơn.</small>
        </aside>
      </section>
    </AppShell>
  );
}

export default function PricingPage() { return <AuthGate><PricingContent /></AuthGate>; }
