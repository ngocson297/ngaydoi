"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import { AppShell } from "../../components/app-shell";
import { AuthGate } from "../../components/auth-gate";
import { useAuth } from "../../components/auth-provider";
import { Alert, EmptyState, ErrorState, ListSkeleton, PageSkeleton } from "../../components/ui";
import { toUiError, type UiError } from "../../lib/api";

type Overview = {
  partner: null | { id: string; name: string; status: string; brandName: string | null; primaryColor: string; commissionRateBps: number; minimumPayout: number; hideNgayDoiBrand: boolean };
  metrics: { clients: number; weddings: number; pending: number; payable: number; paid: number };
  clients: Array<{ id: string; customer: { displayName: string; email: string } | null; wedding: { title: string; status: string } | null; externalRef: string | null }>;
  commissions: Array<{ id: string; description: string; commissionAmount: number; status: string; createdAt: string }>;
  payouts: Array<{ id: string; amount: number; status: string; requestedAt: string; accountNumberMasked: string }>;
};
const money = (value: number) => `${new Intl.NumberFormat("vi-VN").format(value)}đ`;

function Content() {
  const { authRequest } = useAuth();
  const [data, setData] = useState<Overview | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<UiError | null>(null);
  const [actionError, setActionError] = useState<UiError | null>(null);
  const [busy, setBusy] = useState(false);
  const [email, setEmail] = useState("");
  const [weddingId, setWeddingId] = useState("");
  const [brandName, setBrandName] = useState("");
  const [primaryColor, setPrimaryColor] = useState("#7A3045");
  const [bank, setBank] = useState({ bankName: "", accountName: "", accountNumber: "" });

  const load = useCallback(async () => {
    setLoading(true); setLoadError(null);
    try {
      const result = await authRequest<Overview>("/partner/overview");
      setData(result);
      if (result.partner) {
        setBrandName(result.partner.brandName || result.partner.name);
        setPrimaryColor(result.partner.primaryColor);
      }
    } catch (reason) {
      setLoadError(toUiError(reason, "Không thể tải Partner Portal."));
    } finally {
      setLoading(false);
    }
  }, [authRequest]);

  useEffect(() => { void load(); }, [load]);

  async function run(action: () => Promise<void>, fallback: string) {
    setBusy(true); setActionError(null);
    try { await action(); await load(); }
    catch (reason) { setActionError(toUiError(reason, fallback)); }
    finally { setBusy(false); }
  }

  async function apply(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    await run(async () => {
      await authRequest("/partner/apply", { method: "POST", body: JSON.stringify({ name: form.get("name"), brandName: form.get("brandName"), website: form.get("website") }) });
    }, "Không thể gửi hồ sơ đối tác.");
  }
  async function profile(event: FormEvent) {
    event.preventDefault();
    await run(async () => { await authRequest("/partner/profile", { method: "PATCH", body: JSON.stringify({ brandName, primaryColor }) }); }, "Không thể lưu thương hiệu.");
  }
  async function client(event: FormEvent) {
    event.preventDefault();
    await run(async () => {
      await authRequest("/partner/clients", { method: "POST", body: JSON.stringify({ email, weddingId: weddingId || undefined }) });
      setEmail(""); setWeddingId("");
    }, "Không thể thêm khách hàng.");
  }
  async function payout(event: FormEvent) {
    event.preventDefault();
    await run(async () => {
      await authRequest("/partner/payouts", { method: "POST", body: JSON.stringify(bank) });
      setBank({ bankName: "", accountName: "", accountNumber: "" });
    }, "Không thể tạo yêu cầu thanh toán.");
  }

  if (loading && !data) return <AppShell active="partner"><PageSkeleton cards={3} /></AppShell>;
  if (loadError || !data) return <AppShell active="partner"><div className="page-state-panel"><ErrorState title="Chưa thể tải Partner Portal" description={loadError?.message ?? "Dữ liệu đối tác chưa khả dụng."} requestId={loadError?.requestId} onRetry={() => void load()} /></div></AppShell>;

  if (!data.partner) return <AppShell active="partner">
    <div className="page-heading"><div><p className="eyebrow">PARTNER PROGRAM</p><h1>Đồng hành cùng Ngày Đôi</h1><p>Dành cho studio, wedding planner và nhà hàng muốn quản lý khách hàng tập trung.</p></div></div>
    {actionError ? <Alert tone="error" title="Chưa thể gửi hồ sơ" requestId={actionError.requestId}>{actionError.message}</Alert> : null}
    <section className="panel partner-apply"><form className="pilot-form" onSubmit={(event) => void apply(event)}><label>Tên doanh nghiệp<input name="name" required minLength={3} /></label><label>Tên thương hiệu<input name="brandName" /></label><label>Website<input name="website" placeholder="https://..." /></label><button className="btn btn-primary" disabled={busy}>{busy ? "Đang gửi…" : "Gửi hồ sơ đối tác"}</button></form></section>
  </AppShell>;

  return <AppShell active="partner">
    <div className="page-heading"><div><p className="eyebrow">PARTNER PORTAL</p><h1>{data.partner.brandName || data.partner.name}</h1><p>Khách hàng, hoa hồng và thanh toán trong một không gian làm việc.</p></div><span className={`status-pill ${data.partner.status.toLowerCase()}`}>{data.partner.status}</span></div>
    {actionError ? <Alert tone="error" title="Chưa thể hoàn tất thao tác" requestId={actionError.requestId}>{actionError.message}</Alert> : null}
    <div className="kpi-grid partner-kpis"><article><span>Khách hàng</span><strong>{data.metrics.clients}</strong></article><article><span>Wedding</span><strong>{data.metrics.weddings}</strong></article><article><span>Khả dụng</span><strong>{money(data.metrics.payable)}</strong></article><article><span>Đã trả</span><strong>{money(data.metrics.paid)}</strong></article></div>
    <div className="partner-grid">
      <section className="panel"><h2>Thương hiệu white-label</h2><form className="pilot-form" onSubmit={(event) => void profile(event)}><label>Tên hiển thị<input value={brandName} onChange={(event) => setBrandName(event.target.value)} /></label><label>Màu thương hiệu<input type="color" value={primaryColor} onChange={(event) => setPrimaryColor(event.target.value)} /></label><button className="btn btn-secondary" disabled={busy}>Lưu thương hiệu</button></form></section>
      <section className="panel"><h2>Gắn khách hàng</h2><form className="pilot-form" onSubmit={(event) => void client(event)}><label>Email tài khoản Ngày Đôi<input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} /></label><label>Wedding ID (tùy chọn)<input value={weddingId} onChange={(event) => setWeddingId(event.target.value)} /></label><button className="btn btn-primary" disabled={busy || data.partner.status !== "ACTIVE"}>Thêm khách hàng</button></form></section>
    </div>
    <div className="partner-grid">
      <section className="panel state-section"><h2>Khách hàng gần đây</h2><div className="growth-list">{loading ? <ListSkeleton rows={3} withAvatar={false} /> : data.clients.length ? data.clients.map((clientItem) => <article key={clientItem.id}><div><strong>{clientItem.customer?.displayName || "Khách hàng"}</strong><p>{clientItem.customer?.email}{clientItem.wedding ? ` · ${clientItem.wedding.title}` : ""}</p></div><span className="status-pill">{clientItem.wedding?.status || "ACCOUNT"}</span></article>) : <EmptyState compact icon="◇" title="Chưa có khách hàng" description="Gắn tài khoản khách hàng để quản lý wedding và theo dõi hoa hồng." />}</div></section>
      <section className="panel state-section"><h2>Hoa hồng</h2><div className="growth-list">{data.commissions.length ? data.commissions.map((commission) => <article key={commission.id}><div><strong>{commission.description}</strong><p>{new Date(commission.createdAt).toLocaleDateString("vi-VN")}</p></div><div><strong>{money(commission.commissionAmount)}</strong><span className={`status-pill ${commission.status.toLowerCase()}`}>{commission.status}</span></div></article>) : <EmptyState compact icon="↗" title="Chưa phát sinh hoa hồng" description="Hoa hồng sẽ xuất hiện sau khi khách hàng hoàn tất thanh toán hợp lệ." />}</div></section>
    </div>
    <section className="panel state-section"><h2>Yêu cầu thanh toán</h2><p>Số tiền tối thiểu: {money(data.partner.minimumPayout)}. Hệ thống chỉ lưu số tài khoản đã che.</p><form className="partner-payout-form" onSubmit={(event) => void payout(event)}><input required placeholder="Ngân hàng" value={bank.bankName} onChange={(event) => setBank({ ...bank, bankName: event.target.value })} /><input required placeholder="Tên chủ tài khoản" value={bank.accountName} onChange={(event) => setBank({ ...bank, accountName: event.target.value })} /><input required placeholder="Số tài khoản" value={bank.accountNumber} onChange={(event) => setBank({ ...bank, accountNumber: event.target.value })} /><button className="btn btn-primary" disabled={busy || data.metrics.payable < data.partner.minimumPayout}>Yêu cầu thanh toán</button></form><div className="growth-list">{data.payouts.length ? data.payouts.map((payoutItem) => <article key={payoutItem.id}><div><strong>{money(payoutItem.amount)}</strong><p>{payoutItem.accountNumberMasked} · {new Date(payoutItem.requestedAt).toLocaleDateString("vi-VN")}</p></div><span className={`status-pill ${payoutItem.status.toLowerCase()}`}>{payoutItem.status}</span></article>) : <EmptyState compact icon="✓" title="Chưa có yêu cầu thanh toán" description="Khi số dư đạt mức tối thiểu, bạn có thể tạo yêu cầu payout tại đây." />}</div></section>
  </AppShell>;
}
export default function Page() { return <AuthGate><Content /></AuthGate>; }
