"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { AppShell } from "../../../components/app-shell";
import { AuthGate } from "../../../components/auth-gate";
import { useAuth } from "../../../components/auth-provider";
import { Alert, DetailPageSkeleton, ErrorState } from "../../../components/ui";
import { toUiError, type UiError } from "../../../lib/api";
import type { CatalogResponse, OrderSummary } from "../../../lib/commercial";
import { formatMoney, orderStatusLabels, paymentStatusLabels } from "../../../lib/commercial";

interface OrderDetail extends OrderSummary {
  coupon: { code: string; name: string } | null;
  items: Array<{ id: string; itemType: string; name: string; quantity: number; unitAmount: number; totalAmount: number }>;
  notes: Array<{ id: string; body: string; createdAt: string }>;
}

function OrderContent() {
  const params = useParams<{ id: string }>();
  const { authRequest } = useAuth();
  const [order, setOrder] = useState<OrderDetail | null>(null);
  const [catalog, setCatalog] = useState<CatalogResponse | null>(null);
  const [reference, setReference] = useState("");
  const [note, setNote] = useState("");
  const [busy, setBusy] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<UiError | null>(null);
  const [actionError, setActionError] = useState<UiError | null>(null);
  const [message, setMessage] = useState("");
  const load = useCallback(async () => {
    setLoading(true);
    setLoadError(null);
    try {
      const [orderResult, catalogResult] = await Promise.all([authRequest<OrderDetail>(`/orders/${params.id}`), authRequest<CatalogResponse>("/plans")]);
      setOrder(orderResult);
      setCatalog(catalogResult);
    } catch (reason) {
      setLoadError(toUiError(reason, "Không thể tải đơn hàng."));
    } finally {
      setLoading(false);
    }
  }, [authRequest, params.id]);
  useEffect(() => { void load(); }, [load]);

  async function submitPayment(event: FormEvent): Promise<void> {
    event.preventDefault(); setBusy(true); setActionError(null); setMessage("");
    try { await authRequest(`/orders/${params.id}/payment-reference`, { method: "POST", body: JSON.stringify({ reference, note }) }); await load(); setMessage("Đã gửi thông tin. Đội ngũ Ngày Đôi sẽ đối soát thanh toán."); }
    catch (reason) { setActionError(toUiError(reason, "Không thể gửi thông tin thanh toán.")); }
    finally { setBusy(false); }
  }
  async function sandboxPay(): Promise<void> {
    setBusy(true); setActionError(null);
    try { await authRequest(`/orders/${params.id}/sandbox-pay`, { method: "POST" }); await load(); setMessage("Sandbox đã xác nhận thanh toán và kích hoạt quyền lợi."); }
    catch (reason) { setActionError(toUiError(reason, "Không thể thanh toán sandbox.")); }
    finally { setBusy(false); }
  }
  if (loading) return <AppShell active="billing"><DetailPageSkeleton /></AppShell>;
  if (loadError || !order) return <AppShell active="billing"><div className="page-state-panel"><ErrorState title={loadError?.status === 404 ? "Không tìm thấy đơn hàng" : "Chưa thể tải đơn hàng"} description={loadError?.message ?? "Đơn hàng không còn khả dụng."} requestId={loadError?.requestId} onRetry={() => void load()} homeHref="/billing" homeLabel="Về danh sách đơn" /></div></AppShell>;
  const payment = order.payments[0];
  const completed = order.paymentStatus === "CONFIRMED";
  return <AppShell active="billing">
    <div className="order-detail-head"><div><a className="back-link" href="/billing">← Quay lại đơn hàng</a><div className="eyebrow">{order.orderNumber}</div><h1>{order.plan.name} · {order.wedding.title}</h1><p>Tạo ngày {new Date(order.createdAt).toLocaleString("vi-VN")}</p></div><div className="order-total-box"><span>Tổng thanh toán</span><strong>{formatMoney(order.totalAmount)}</strong><em className={`commerce-status ${order.paymentStatus.toLowerCase()}`}>{paymentStatusLabels[order.paymentStatus] ?? order.paymentStatus}</em></div></div>
    {actionError ? <Alert tone="error" title="Chưa thể hoàn tất thao tác" requestId={actionError.requestId}>{actionError.message}</Alert> : null}{message ? <Alert tone="success" title="Đã cập nhật">{message}</Alert> : null}
    <div className="order-detail-grid">
      <div className="order-detail-main">
        <section className="order-timeline-card"><h2>Trạng thái đơn hàng</h2><div className="order-timeline">
          <div className="done"><i>✓</i><strong>Đã tạo đơn</strong><span>{new Date(order.createdAt).toLocaleString("vi-VN")}</span></div>
          <div className={payment?.submittedAt || completed ? "done" : "current"}><i>{payment?.submittedAt || completed ? "✓" : "2"}</i><strong>Gửi thông tin thanh toán</strong><span>{payment?.submittedAt ? new Date(payment.submittedAt).toLocaleString("vi-VN") : "Đang chờ bạn"}</span></div>
          <div className={completed ? "done" : payment?.submittedAt ? "current" : ""}><i>{completed ? "✓" : "3"}</i><strong>Đối soát</strong><span>{completed ? "Đã xác nhận" : "Nhân viên kiểm tra giao dịch"}</span></div>
          <div className={completed ? "done" : ""}><i>{completed ? "✓" : "4"}</i><strong>Kích hoạt gói</strong><span>{completed ? "Quyền lợi đã hoạt động" : "Tự động sau khi xác nhận"}</span></div>
        </div></section>
        {!completed && <section className="payment-instruction-card"><div className="payment-title"><div><small>Chuyển khoản thủ công · MVP</small><h2>Hướng dẫn thanh toán</h2></div><span>Không thu thẻ</span></div>
          <div className="bank-card"><div><span>Ngân hàng</span><strong>{catalog?.payment.bankName}</strong></div><div><span>Chủ tài khoản</span><strong>{catalog?.payment.accountName}</strong></div><div><span>Số tài khoản</span><strong>{catalog?.payment.accountNumber}</strong></div><div><span>Số tiền</span><strong>{formatMoney(order.totalAmount)}</strong></div><div className="wide"><span>Nội dung chuyển khoản</span><strong>{order.orderNumber}</strong></div></div>
          <form className="payment-reference-form" onSubmit={(event) => void submitPayment(event)}><label>Mã giao dịch / nội dung đã chuyển<input required minLength={4} value={reference} onChange={(event) => setReference(event.target.value)} placeholder="Ví dụ: FT240804123456" /></label><label>Ghi chú thêm<textarea value={note} onChange={(event) => setNote(event.target.value)} placeholder="Tên người chuyển hoặc thông tin cần hỗ trợ" /></label><button className="btn btn-primary" disabled={busy}>{busy ? "Đang gửi..." : payment?.status === "REJECTED" ? "Gửi lại thông tin" : "Tôi đã chuyển khoản"}</button></form>
          <div className="sandbox-box"><div><strong>Chế độ phát triển</strong><p>Giả lập thanh toán thành công để kiểm tra toàn bộ luồng mà không chuyển tiền thật.</p></div><button className="btn btn-secondary" disabled={busy} onClick={() => void sandboxPay()}>Thanh toán sandbox</button></div>
        </section>}
        {completed && <section className="receipt-card"><div className="receipt-success">✓</div><small>BIÊN NHẬN ĐIỆN TỬ</small><h2>Thanh toán đã hoàn tất</h2><p>Gói <strong>{order.plan.name}</strong> đang hoạt động cho wedding <strong>{order.wedding.title}</strong>.</p><dl><div><dt>Mã đơn</dt><dd>{order.orderNumber}</dd></div><div><dt>Phương thức</dt><dd>{payment?.method === "SANDBOX" ? "Sandbox" : "Chuyển khoản"}</dd></div><div><dt>Thời gian xác nhận</dt><dd>{payment?.confirmedAt ? new Date(payment.confirmedAt).toLocaleString("vi-VN") : "Đã xác nhận"}</dd></div><div><dt>Tổng tiền</dt><dd>{formatMoney(order.totalAmount)}</dd></div></dl><div className="receipt-actions"><a className="btn btn-primary" href={`/weddings/${order.wedding.id}`}>Mở wedding</a><button className="btn btn-secondary" onClick={() => window.print()}>In biên nhận</button></div></section>}
      </div>
      <aside className="order-breakdown-card"><span>Chi tiết thanh toán</span>{order.items.map((item) => <div className="breakdown-item" key={item.id}><div><strong>{item.name}</strong><small>{item.itemType === "PLAN" ? "Gói dịch vụ" : "Add-on"}</small></div><b>{formatMoney(item.totalAmount)}</b></div>)}{order.discountAmount > 0 && <div className="breakdown-line discount"><span>Ưu đãi {order.coupon?.code}</span><strong>-{formatMoney(order.discountAmount)}</strong></div>}<div className="breakdown-total"><span>Tổng cộng</span><strong>{formatMoney(order.totalAmount)}</strong></div><div className="order-help"><strong>Cần hỗ trợ?</strong><p>Ghi lại mã đơn <b>{order.orderNumber}</b> khi liên hệ đội ngũ vận hành.</p></div>{order.notes.map((item) => <div className="customer-order-note" key={item.id}><small>Cập nhật từ Ngày Đôi</small><p>{item.body}</p></div>)}</aside>
    </div>
  </AppShell>;
}
export default function OrderPage() { return <AuthGate><OrderContent /></AuthGate>; }
