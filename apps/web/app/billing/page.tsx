"use client";

import { useEffect, useMemo, useState } from "react";
import { AppShell } from "../../components/app-shell";
import { AuthGate } from "../../components/auth-gate";
import { useAuth } from "../../components/auth-provider";
import { ApiError } from "../../lib/api";
import type { OrderSummary } from "../../lib/commercial";
import { formatMoney, orderStatusLabels, paymentStatusLabels } from "../../lib/commercial";

function BillingContent() {
  const { authRequest } = useAuth();
  const [orders, setOrders] = useState<OrderSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => { void authRequest<OrderSummary[]>("/orders").then(setOrders).catch((reason: unknown) => setError(reason instanceof ApiError ? reason.message : "Không thể tải đơn hàng")).finally(() => setLoading(false)); }, [authRequest]);
  const metrics = useMemo(() => ({
    total: orders.length,
    pending: orders.filter((item) => ["PENDING", "SUBMITTED", "REJECTED"].includes(item.paymentStatus)).length,
    active: orders.filter((item) => item.fulfillmentStatus === "ACTIVE").length,
    spent: orders.filter((item) => item.paymentStatus === "CONFIRMED").reduce((sum, item) => sum + item.totalAmount, 0),
  }), [orders]);
  return <AppShell active="billing">
    <div className="commerce-head"><div><div className="eyebrow">Billing center</div><h1>Gói dịch vụ & đơn hàng</h1><p>Theo dõi thanh toán, quyền lợi và biên nhận của từng wedding.</p></div><a className="btn btn-primary" href="/pricing">+ Chọn gói</a></div>
    {error && <div className="alert alert-error">{error}</div>}
    <div className="billing-metrics"><article><span>Tổng đơn</span><strong>{metrics.total}</strong></article><article><span>Cần xử lý</span><strong>{metrics.pending}</strong></article><article><span>Đang hoạt động</span><strong>{metrics.active}</strong></article><article><span>Đã thanh toán</span><strong>{formatMoney(metrics.spent)}</strong></article></div>
    <section className="billing-panel"><div className="panel-head"><div><h2>Lịch sử đơn hàng</h2><p className="muted-small">Nhấn vào một đơn để xem hướng dẫn thanh toán hoặc biên nhận.</p></div></div>
      {loading ? <div className="empty-panel"><div className="spinner"/><p>Đang tải đơn hàng...</p></div> : !orders.length ? <div className="empty-panel"><div className="empty-icon">◇</div><h3>Chưa có đơn hàng</h3><p>Chọn gói để mở giới hạn khách, ảnh và template cho wedding.</p><a className="btn btn-primary" href="/pricing">Xem bảng giá</a></div> : <div className="order-list">{orders.map((order) => <a className="order-row" href={`/orders/${order.id}`} key={order.id}>
        <div className="order-logo">ND</div><div><small>{order.orderNumber}</small><strong>{order.plan.name} · {order.wedding.title}</strong><span>{new Date(order.createdAt).toLocaleDateString("vi-VN")}</span></div>
        <div className="order-state"><span className={`commerce-status ${order.paymentStatus.toLowerCase()}`}>{paymentStatusLabels[order.paymentStatus] ?? order.paymentStatus}</span><small>{orderStatusLabels[order.status] ?? order.status}</small></div>
        <b>{formatMoney(order.totalAmount, order.currency)}</b><i>→</i>
      </a>)}</div>}
    </section>
  </AppShell>;
}
export default function BillingPage() { return <AuthGate><BillingContent /></AuthGate>; }
