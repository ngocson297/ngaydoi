"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AppShell } from "../../components/app-shell";
import { AuthGate } from "../../components/auth-gate";
import { useAuth } from "../../components/auth-provider";
import { EmptyState, InlineErrorState, ListSkeleton, MetricSkeleton } from "../../components/ui";
import { toUiError, type UiError } from "../../lib/api";
import type { OrderSummary } from "../../lib/commercial";
import { formatMoney, orderStatusLabels, paymentStatusLabels } from "../../lib/commercial";

function BillingContent() {
  const { authRequest } = useAuth();
  const [orders, setOrders] = useState<OrderSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<UiError | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      setOrders(await authRequest<OrderSummary[]>("/orders"));
    } catch (reason) {
      setError(toUiError(reason, "Không thể tải đơn hàng."));
    } finally {
      setLoading(false);
    }
  }, [authRequest]);

  useEffect(() => { void load(); }, [load]);

  const metrics = useMemo(() => ({
    total: orders.length,
    pending: orders.filter((item) => ["PENDING", "SUBMITTED", "REJECTED"].includes(item.paymentStatus)).length,
    active: orders.filter((item) => item.fulfillmentStatus === "ACTIVE").length,
    spent: orders.filter((item) => item.paymentStatus === "CONFIRMED").reduce((sum, item) => sum + item.totalAmount, 0),
  }), [orders]);

  return <AppShell active="billing">
    <div className="commerce-head"><div><div className="eyebrow">Billing center</div><h1>Gói dịch vụ & đơn hàng</h1><p>Theo dõi thanh toán, quyền lợi và biên nhận của từng wedding.</p></div><a className="btn btn-primary" href="/pricing">+ Chọn gói</a></div>
    {loading ? <MetricSkeleton /> : <div className="billing-metrics"><article><span>Tổng đơn</span><strong>{metrics.total}</strong></article><article><span>Cần xử lý</span><strong>{metrics.pending}</strong></article><article><span>Đang hoạt động</span><strong>{metrics.active}</strong></article><article><span>Đã thanh toán</span><strong>{formatMoney(metrics.spent)}</strong></article></div>}
    <section className="billing-panel state-section"><div className="panel-head"><div><h2>Lịch sử đơn hàng</h2><p className="muted-small">Nhấn vào một đơn để xem hướng dẫn thanh toán hoặc biên nhận.</p></div></div>
      {error ? <InlineErrorState description={error.message} requestId={error.requestId} onRetry={() => void load()} /> : null}
      {loading ? <ListSkeleton rows={4} /> : !error && !orders.length ? <EmptyState icon="◇" title="Chưa có đơn hàng" description="Chọn gói để mở giới hạn khách, ảnh và template cho wedding." primaryAction={{ label: "Xem bảng giá", href: "/pricing" }} secondaryAction={{ label: "Về Dashboard", href: "/dashboard" }} compact /> : !error ? <div className="order-list">{orders.map((order) => <a className="order-row" href={`/orders/${order.id}`} key={order.id}>
        <div className="order-logo">ND</div><div><small>{order.orderNumber}</small><strong>{order.plan.name} · {order.wedding.title}</strong><span>{new Date(order.createdAt).toLocaleDateString("vi-VN")}</span></div>
        <div className="order-state"><span className={`commerce-status ${order.paymentStatus.toLowerCase()}`}>{paymentStatusLabels[order.paymentStatus] ?? order.paymentStatus}</span><small>{orderStatusLabels[order.status] ?? order.status}</small></div>
        <b>{formatMoney(order.totalAmount, order.currency)}</b><i>→</i>
      </a>)}</div> : null}
    </section>
  </AppShell>;
}
export default function BillingPage() { return <AuthGate><BillingContent /></AuthGate>; }
