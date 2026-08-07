"use client";

import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { AppShell } from "../../components/app-shell";
import { AuthGate } from "../../components/auth-gate";
import { useAuth } from "../../components/auth-provider";
import { Alert, ConfirmDialog, FormField, InlineErrorState, PageSkeleton, PermissionState, Tabs, tabPanelProps, useConfirm } from "../../components/ui";
import { toUiError, type UiError } from "../../lib/api";
import { formatMoney, orderStatusLabels, paymentStatusLabels } from "../../lib/commercial";
import styles from "./admin-console.module.css";

interface AdminOverview {
  metrics: { users: number; weddings: number; awaitingPayment: number; paymentReview: number; paidOrders: number; revenue: number; publishQueue: number; activeCoupons: number; openSupportTickets: number; pendingDomains: number; pilotBlockers: number; pendingPartners: number; pendingPayouts: number };
  recentOrders: AdminOrder[];
}
interface AdminOrder {
  id: string; orderNumber: string; totalAmount: number; status: string; paymentStatus: string; fulfillmentStatus: string; createdAt: string;
  plan: { name: string; code: string };
  user: { id: string; displayName: string; email: string };
  wedding: { id: string; title: string; slug: string; status: string; publishReviewStatus: string };
  payments: Array<{ id: string; status: string; reference: string | null; submittedAt: string | null }>;
}
interface AdminOrderDetail extends AdminOrder {
  customerNote: string | null;
  items: Array<{ id: string; name: string; itemType: string; totalAmount: number }>;
  notes: Array<{ id: string; body: string; visibility: string; createdAt: string; author: { displayName: string; email: string } | null }>;
}
interface AdminUser { id: string; displayName: string; email: string; role: string; status: string; createdAt: string; _count: { weddings: number; customerOrders: number } }
interface AdminWedding { id: string; title: string; slug: string; status: string; publishReviewStatus: string; mainDate: string | null; owner: { displayName: string; email: string }; activePlan: { name: string; code: string } | null; _count: { guests: number; events: number; orders: number } }
interface AdminCoupon { id: string; code: string; name: string; discountType: "FIXED" | "PERCENTAGE"; discountValue: number; startsAt: string | null; endsAt: string | null; usageLimit: number | null; usedCount: number; active: boolean; planCodes: string[]; createdAt: string; }
type CouponForm = { code: string; name: string; discountType: "FIXED" | "PERCENTAGE"; discountValue: string; startsAt: string; endsAt: string; usageLimit: string; active: boolean; planCodes: string[] };
const emptyCouponForm: CouponForm = { code: "", name: "", discountType: "PERCENTAGE", discountValue: "10", startsAt: "", endsAt: "", usageLimit: "", active: true, planCodes: ["STARTER", "STANDARD", "PREMIUM"] };
const planOptions = ["FREE", "STARTER", "STANDARD", "PREMIUM"] as const;

type Tab = "overview" | "orders" | "users" | "weddings" | "coupons";
type PublishDecision = "APPROVE" | "CHANGES_REQUESTED";

function AdminContent() {
  const { confirm } = useConfirm();
  const { user, authRequest } = useAuth();
  const [tab, setTab] = useState<Tab>("overview");
  const [overview, setOverview] = useState<AdminOverview | null>(null);
  const [orders, setOrders] = useState<AdminOrder[]>([]);
  const [selected, setSelected] = useState<AdminOrderDetail | null>(null);
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [weddings, setWeddings] = useState<AdminWedding[]>([]);
  const [coupons, setCoupons] = useState<AdminCoupon[]>([]);
  const [couponEditingId, setCouponEditingId] = useState<string | null>(null);
  const [couponForm, setCouponForm] = useState<CouponForm>(emptyCouponForm);
  const [search, setSearch] = useState("");
  const [note, setNote] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<UiError | null>(null);
  const [message, setMessage] = useState("");
  const [publishDialog, setPublishDialog] = useState<{ weddingId: string; weddingTitle: string; decision: PublishDecision } | null>(null);
  const [publishNote, setPublishNote] = useState("");

  const loadCore = useCallback(async () => {
    const [overviewResult, orderResult] = await Promise.all([authRequest<AdminOverview>("/admin/overview"), authRequest<AdminOrder[]>("/admin/orders")]);
    setOverview(overviewResult); setOrders(orderResult);
  }, [authRequest]);
  useEffect(() => { if (user && ["ADMIN", "STAFF"].includes(user.role)) void loadCore().catch((reason: unknown) => setError(toUiError(reason, "Không thể tải trang vận hành."))); }, [loadCore, user]);
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("tab");
    if (["overview", "orders", "users", "weddings", "coupons"].includes(requested ?? "")) { setTab(requested as Tab); if (requested === "coupons") void loadCoupons(); }
  }, []);

  async function loadOrder(id: string): Promise<void> { setSelected(await authRequest<AdminOrderDetail>(`/admin/orders/${id}`)); }
  async function action(path: string, success: string): Promise<void> {
    if (!selected) return; setBusy(true); setError(null); setMessage("");
    try { const result = await authRequest<AdminOrderDetail>(`/admin/orders/${selected.id}/${path}`, { method: "POST", body: JSON.stringify({ note: note.trim() || undefined }) }); setSelected(result); setNote(""); setMessage(success); await loadCore(); }
    catch (reason) { setError(toUiError(reason, "Không thể xử lý đơn hàng.")); }
    finally { setBusy(false); }
  }
  async function addNote(event: FormEvent): Promise<void> {
    event.preventDefault(); if (!selected || !note.trim()) return; setBusy(true);
    try { await authRequest(`/admin/orders/${selected.id}/notes`, { method: "POST", body: JSON.stringify({ body: note, visibility: "CUSTOMER" }) }); setNote(""); await loadOrder(selected.id); setMessage("Đã gửi cập nhật cho khách hàng."); }
    catch (reason) { setError(toUiError(reason, "Không thể thêm ghi chú.")); } finally { setBusy(false); }
  }
  async function searchUsers(): Promise<void> { setUsers(await authRequest<AdminUser[]>(`/admin/users?search=${encodeURIComponent(search)}`)); }
  async function searchWeddings(): Promise<void> { setWeddings(await authRequest<AdminWedding[]>(`/admin/weddings?search=${encodeURIComponent(search)}`)); }
  async function loadCoupons(): Promise<void> { setCoupons(await authRequest<AdminCoupon[]>("/admin/coupons")); }
  function editCoupon(item?: AdminCoupon): void {
    if (!item) { setCouponEditingId(null); setCouponForm(emptyCouponForm); return; }
    const localDate = (value: string | null) => value ? new Date(value).toISOString().slice(0, 16) : "";
    setCouponEditingId(item.id);
    setCouponForm({ code: item.code, name: item.name, discountType: item.discountType, discountValue: String(item.discountValue), startsAt: localDate(item.startsAt), endsAt: localDate(item.endsAt), usageLimit: item.usageLimit ? String(item.usageLimit) : "", active: item.active, planCodes: item.planCodes });
  }
  async function saveCoupon(event: FormEvent): Promise<void> {
    event.preventDefault(); if (user?.role !== "ADMIN") return;
    setBusy(true); setError(null); setMessage("");
    try {
      const body = {
        code: couponForm.code.trim().toUpperCase(), name: couponForm.name.trim(), discountType: couponForm.discountType,
        discountValue: Number(couponForm.discountValue), startsAt: couponForm.startsAt ? new Date(couponForm.startsAt).toISOString() : null,
        endsAt: couponForm.endsAt ? new Date(couponForm.endsAt).toISOString() : null, usageLimit: couponForm.usageLimit ? Number(couponForm.usageLimit) : null,
        active: couponForm.active, planCodes: couponForm.planCodes,
      };
      await authRequest(couponEditingId ? `/admin/coupons/${couponEditingId}` : "/admin/coupons", { method: couponEditingId ? "PATCH" : "POST", body: JSON.stringify(body) });
      await loadCoupons(); editCoupon(); setMessage(couponEditingId ? "Đã cập nhật mã giảm giá." : "Đã tạo mã giảm giá.");
    } catch (reason) { setError(toUiError(reason, "Không thể lưu mã giảm giá.")); }
    finally { setBusy(false); }
  }
  async function toggleCoupon(item: AdminCoupon): Promise<void> {
    if (user?.role !== "ADMIN") return; setBusy(true); setError(null);
    try { await authRequest(`/admin/coupons/${item.id}`, { method: "PATCH", body: JSON.stringify({ active: !item.active }) }); await loadCoupons(); setMessage(item.active ? "Đã tạm dừng mã giảm giá." : "Đã kích hoạt mã giảm giá."); }
    catch (reason) { setError(toUiError(reason, "Không thể cập nhật mã giảm giá.")); }
    finally { setBusy(false); }
  }
  function openPublishReview(weddingId: string, weddingTitle: string, decision: PublishDecision): void {
    setPublishNote("");
    setPublishDialog({ weddingId, weddingTitle, decision });
  }
  async function reviewPublish(): Promise<void> {
    if (!publishDialog) return;
    if (publishDialog.decision === "CHANGES_REQUESTED" && publishNote.trim().length < 5) {
      setError({ message: "Vui lòng mô tả rõ nội dung khách hàng cần chỉnh sửa." });
      return;
    }
    setBusy(true); setError(null);
    try {
      await authRequest(`/admin/weddings/${publishDialog.weddingId}/publish-review`, { method: "POST", body: JSON.stringify({ decision: publishDialog.decision, note: publishNote.trim() || undefined }) });
      setPublishDialog(null); setPublishNote("");
      await searchWeddings(); await loadCore(); setMessage("Đã cập nhật trạng thái kiểm duyệt.");
    }
    catch (reason) { setError(toUiError(reason, "Không thể cập nhật kiểm duyệt.")); }
    finally { setBusy(false); }
  }

  const queue = useMemo(() => orders.filter((item) => item.paymentStatus === "SUBMITTED" || item.wedding.publishReviewStatus === "REQUESTED"), [orders]);
  if (!user || !["ADMIN", "STAFF"].includes(user.role)) return <AppShell active="admin"><div className="page-state-panel"><PermissionState description="Trung tâm vận hành chỉ dành cho Admin và Staff." /></div></AppShell>;
  if (!overview && !error) return <AppShell active="admin"><PageSkeleton cards={3} /></AppShell>;

  function changeTab(item: Tab): void {
    setTab(item); setSelected(null); setSearch("");
    const url = new URL(window.location.href);
    if (item === "overview") url.searchParams.delete("tab"); else url.searchParams.set("tab", item);
    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
    if (item === "users") void searchUsers();
    if (item === "weddings") void searchWeddings();
    if (item === "coupons") void loadCoupons();
  }

  return <AppShell active={tab === "coupons" ? "couponsAdmin" : "admin"}><div className={styles.consolePage}>
    <div className={`${styles.consoleHeader} admin-head`}><div><div className="eyebrow">ADMIN COMMAND CENTER</div><h1>Trung tâm quản trị</h1><p>Admin có quyền nhìn toàn cảnh hệ thống: thương mại, wedding, coupon, vận hành kỹ thuật, pilot, tăng trưởng và đối tác.</p></div><div className={styles.headerActions}><div className="admin-live"><i/>Sandbox operations</div></div></div>
    {error ? <InlineErrorState description={error.message} requestId={error.requestId} onRetry={() => void loadCore()} /> : null}{message ? <Alert tone="success" title="Đã cập nhật">{message}</Alert> : null}
    <Tabs<Tab> id="admin-tabs" label="Khu vực quản trị" className={`${styles.consoleTabs} admin-tabs`} value={tab} onChange={changeTab} items={[{ value: "overview", label: "Tổng quan" }, { value: "orders", label: "Đơn hàng" }, { value: "users", label: "Khách hàng" }, { value: "weddings", label: "Wedding" }, { value: "coupons", label: "Mã giảm giá" }]} />

    {tab === "overview" && <div {...tabPanelProps("admin-tabs", "overview")}>
      <div className="admin-metrics"><article><span>Doanh thu xác nhận</span><strong>{formatMoney(overview?.metrics.revenue ?? 0)}</strong><small>{overview?.metrics.paidOrders ?? 0} đơn đã thanh toán</small></article><article><span>Chờ đối soát</span><strong>{overview?.metrics.paymentReview ?? 0}</strong><small>Cần xử lý thanh toán</small></article><article><span>Chờ duyệt publish</span><strong>{overview?.metrics.publishQueue ?? 0}</strong><small>Wedding cần review</small></article><article><span>Người dùng / Wedding</span><strong>{overview?.metrics.users ?? 0} / {overview?.metrics.weddings ?? 0}</strong><small>Toàn hệ thống</small></article></div>
      <div className={styles.roleScope}><span>◎</span><div><strong>Phạm vi ADMIN: toàn hệ thống</strong><br/>Tổng quan hiển thị dữ liệu tổng hợp của mọi khu vực. Các màn chuyên sâu vẫn tách riêng để tránh nhồi toàn bộ bảng dữ liệu vào một trang.</div></div>
      <div className={styles.commandGrid}>
        <a className={styles.commandCard} href="/admin?tab=coupons"><span className={styles.commandIcon}>%</span><div><strong>Mã giảm giá</strong><small>Tạo, sửa, bật/tắt coupon và theo dõi lượt dùng.</small></div><span className={styles.commandValue}><b>{overview?.metrics.activeCoupons ?? 0}</b><span>đang bật</span></span></a>
        <a className={styles.commandCard} href="/admin/system"><span className={styles.commandIcon}>◉</span><div><strong>Hệ thống</strong><small>Health, storage, email, webhook và production readiness.</small></div><span className={styles.commandValue}><b>↗</b><span>mở</span></span></a>
        <a className={styles.commandCard} href="/admin/pilot"><span className={styles.commandIcon}>◫</span><div><strong>Pilot & UAT</strong><small>Checklist go-live và blocker High/Critical.</small></div><span className={styles.commandValue}><b>{overview?.metrics.pilotBlockers ?? 0}</b><span>blocker</span></span></a>
        <a className={styles.commandCard} href="/admin/growth"><span className={styles.commandIcon}>↗</span><div><strong>Tăng trưởng & CSKH</strong><small>Support inbox, custom domain, funnel và referral.</small></div><span className={styles.commandValue}><b>{overview?.metrics.openSupportTickets ?? 0}</b><span>ticket mở</span></span></a>
        <a className={styles.commandCard} href="/admin/growth"><span className={styles.commandIcon}>◎</span><div><strong>Custom domain</strong><small>Yêu cầu DNS đang chờ xác minh hoặc kích hoạt.</small></div><span className={styles.commandValue}><b>{overview?.metrics.pendingDomains ?? 0}</b><span>đang chờ</span></span></a>
        <a className={styles.commandCard} href="/admin/partners"><span className={styles.commandIcon}>◇</span><div><strong>Đối tác & hoa hồng</strong><small>Duyệt partner và xử lý payout.</small></div><span className={styles.commandValue}><b>{(overview?.metrics.pendingPartners ?? 0) + (overview?.metrics.pendingPayouts ?? 0)}</b><span>cần xử lý</span></span></a>
      </div>
      <div className="admin-overview-grid"><section className="admin-queue-card"><div className="panel-head"><div><h2>Hàng đợi ưu tiên</h2><p className="muted-small">Thanh toán hoặc publish đang chờ phản hồi.</p></div><span>{queue.length}</span></div>{queue.length ? <div className="admin-mini-list">{queue.slice(0, 8).map((order) => <button onClick={() => { setTab("orders"); void loadOrder(order.id); }} key={order.id}><i>{order.paymentStatus === "SUBMITTED" ? "₫" : "✓"}</i><div><strong>{order.orderNumber}</strong><span>{order.user.displayName} · {order.wedding.title}</span></div><em>{order.paymentStatus === "SUBMITTED" ? "Đối soát" : "Duyệt thiệp"}</em></button>)}</div> : <div className="admin-empty"><strong>Hàng đợi đã sạch</strong><p>Không có tác vụ khẩn cấp.</p></div>}</section>
      <section className="admin-process-card"><small>QUY TRÌNH VẬN HÀNH</small><h2>Một đơn được xử lý như thế nào?</h2><ol><li><b>1</b><div><strong>Khách tạo đơn</strong><span>Hệ thống khóa giá, coupon và quyền lợi.</span></div></li><li><b>2</b><div><strong>Đối soát thanh toán</strong><span>Kiểm tra mã giao dịch trước khi xác nhận.</span></div></li><li><b>3</b><div><strong>Kích hoạt entitlement</strong><span>Giới hạn khách, ảnh và template cập nhật tự động.</span></div></li><li><b>4</b><div><strong>Duyệt xuất bản</strong><span>Gói có review sẽ vào hàng đợi kiểm duyệt.</span></div></li></ol></section></div>
    </div>}

    {tab === "orders" && <div className="admin-order-layout" {...tabPanelProps("admin-tabs", "orders")}><section className="admin-order-list"><div className="admin-list-tools"><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Tìm mã đơn, email, wedding..."/><button className="btn btn-secondary" onClick={async () => setOrders(await authRequest<AdminOrder[]>(`/admin/orders?search=${encodeURIComponent(search)}`))}>Tìm</button></div>{orders.map((order) => <button className={selected?.id === order.id ? "active" : ""} onClick={() => void loadOrder(order.id)} key={order.id}><div><small>{order.orderNumber}</small><strong>{order.user.displayName}</strong><span>{order.wedding.title} · {order.plan.name}</span></div><aside><b>{formatMoney(order.totalAmount)}</b><em className={`commerce-status ${order.paymentStatus.toLowerCase()}`}>{paymentStatusLabels[order.paymentStatus]}</em></aside></button>)}</section>
      <section className="admin-order-detail">{selected ? <><header><div><small>{selected.orderNumber}</small><h2>{selected.user.displayName}</h2><p>{selected.user.email} · {selected.wedding.title}</p></div><strong>{formatMoney(selected.totalAmount)}</strong></header><div className="admin-detail-status"><span>Đơn hàng<b>{orderStatusLabels[selected.status]}</b></span><span>Thanh toán<b>{paymentStatusLabels[selected.paymentStatus]}</b></span><span>Kích hoạt<b>{selected.fulfillmentStatus}</b></span></div><div className="admin-payment-proof"><h3>Thông tin đối soát</h3><dl><div><dt>Mã giao dịch</dt><dd>{selected.payments[0]?.reference ?? "Chưa cung cấp"}</dd></div><div><dt>Gửi lúc</dt><dd>{selected.payments[0]?.submittedAt ? new Date(selected.payments[0].submittedAt).toLocaleString("vi-VN") : "—"}</dd></div></dl></div><label className="admin-note-input">Ghi chú xử lý<textarea value={note} onChange={(event) => setNote(event.target.value)} placeholder="Lý do xác nhận, từ chối hoặc hoàn tiền"/></label><div className="admin-order-actions">{selected.paymentStatus !== "CONFIRMED" && <><button className="btn btn-primary" disabled={busy} onClick={() => void action("confirm-payment", "Đã xác nhận thanh toán và kích hoạt gói.")}>Xác nhận thanh toán</button><button className="btn btn-secondary danger-text" disabled={busy} onClick={() => void action("reject-payment", "Đã yêu cầu khách bổ sung thông tin.")}>Yêu cầu bổ sung</button></>}{selected.paymentStatus === "CONFIRMED" && <button className="btn btn-secondary danger-text" disabled={busy} onClick={() => void (async () => { if (await confirm({ title: "Hoàn tiền và thu hồi quyền lợi?", description: "Wedding sẽ bị hạ về gói miễn phí và có thể bị tạm ngưng ngay sau thao tác này.", confirmLabel: "Hoàn tiền", tone: "danger" })) await action("refund", "Đã ghi nhận hoàn tiền và thu hồi quyền lợi."); })()}>Hoàn tiền & thu hồi</button>}</div><form className="admin-customer-note" onSubmit={(event) => void addNote(event)}><strong>Gửi cập nhật cho khách</strong><p>Nội dung sẽ hiển thị trong trang chi tiết đơn hàng.</p><button className="btn btn-secondary" disabled={busy || !note.trim()}>Gửi cập nhật</button></form><div className="admin-note-history">{selected.notes.map((item) => <article key={item.id}><small>{item.visibility} · {new Date(item.createdAt).toLocaleString("vi-VN")}</small><p>{item.body}</p></article>)}</div></> : <div className="admin-empty large"><div>◇</div><h3>Chọn một đơn hàng</h3><p>Chi tiết đối soát và thao tác vận hành sẽ xuất hiện tại đây.</p></div>}</section></div>}

    {(tab === "users" || tab === "weddings") && <section className="admin-directory" {...tabPanelProps("admin-tabs", tab)}><div className="admin-list-tools"><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder={tab === "users" ? "Tên hoặc email khách hàng" : "Tên wedding, slug hoặc email owner"}/><button className="btn btn-primary" onClick={() => void (tab === "users" ? searchUsers() : searchWeddings())}>Tìm kiếm</button></div>{tab === "users" ? <div className="admin-directory-list">{users.map((item) => <article key={item.id}><div className="avatar-circle">{item.displayName.charAt(0)}</div><div><strong>{item.displayName}</strong><span>{item.email}</span></div><em>{item.role}</em><small>{item._count.weddings} wedding · {item._count.customerOrders} đơn</small><b>{item.status}</b></article>)}</div> : <div className="admin-directory-list wedding-dir">{weddings.map((item) => <article key={item.id}><div className="avatar-circle">♥</div><div><strong>{item.title}</strong><span>/{item.slug} · {item.owner.email}</span></div><em>{item.activePlan?.name ?? "Khởi đầu"}</em><small>{item._count.guests} khách · {item._count.events} sự kiện</small><div className="publish-actions">{item.publishReviewStatus === "REQUESTED" ? <><button className={`btn btn-primary ${styles.compactButton}`} disabled={busy} onClick={() => openPublishReview(item.id, item.title, "APPROVE")}>Duyệt</button><button className={`btn btn-secondary ${styles.compactButton}`} disabled={busy} onClick={() => openPublishReview(item.id, item.title, "CHANGES_REQUESTED")}>Yêu cầu sửa</button></> : <b>{item.publishReviewStatus}</b>}</div></article>)}</div>}</section>}


    {tab === "coupons" && <div className="coupon-admin-layout" {...tabPanelProps("admin-tabs", "coupons")}>
      <section className="panel coupon-admin-list"><div className="panel-head"><div><h2>Mã giảm giá</h2><p className="muted-small">Quản lý coupon áp dụng tại trang bảng giá. Mã WELCOME10 trước đây được seed; từ Sprint 15.15 có thể cấu hình tại đây.</p></div><button className="btn btn-secondary" type="button" onClick={() => editCoupon()}>+ Mã mới</button></div>
        {coupons.length ? <div className="coupon-admin-rows">{coupons.map((item) => <article key={item.id} className={!item.active ? "inactive" : ""}><div><span className="coupon-code">{item.code}</span><strong>{item.name}</strong><small>{item.discountType === "PERCENTAGE" ? `${item.discountValue}%` : formatMoney(item.discountValue)} · {item.planCodes.length ? item.planCodes.join(" · ") : "Tất cả gói"}</small></div><div><b>{item.usedCount}{item.usageLimit ? `/${item.usageLimit}` : ""} lượt</b><small>{item.endsAt ? `Đến ${new Date(item.endsAt).toLocaleDateString("vi-VN")}` : "Không giới hạn ngày"}</small></div><div className="coupon-admin-actions"><button className={`btn btn-secondary ${styles.compactButton}`} type="button" onClick={() => editCoupon(item)}>Sửa</button><button className={`btn btn-secondary ${styles.compactButton}`} type="button" disabled={busy || user?.role !== "ADMIN"} onClick={() => void toggleCoupon(item)}>{item.active ? "Tạm dừng" : "Kích hoạt"}</button></div></article>)}</div> : <div className="admin-empty"><strong>Chưa có mã giảm giá</strong><p>Tạo mã đầu tiên để áp dụng tại trang Pricing.</p></div>}
      </section>
      <form className="panel coupon-admin-form" onSubmit={(event) => void saveCoupon(event)}><div><span className="eyebrow">{couponEditingId ? "CHỈNH SỬA" : "COUPON MỚI"}</span><h2>{couponEditingId ? "Cập nhật mã giảm giá" : "Tạo mã giảm giá"}</h2><p className="muted-small">Chỉ Admin được thay đổi coupon; Staff vẫn có thể xem trạng thái sử dụng.</p></div><label>Mã coupon<input required minLength={3} maxLength={32} value={couponForm.code} disabled={user?.role !== "ADMIN"} onChange={(event) => setCouponForm({ ...couponForm, code: event.target.value.toUpperCase().replace(/[^A-Z0-9_-]/g, "") })} placeholder="WELCOME10" /></label><label>Tên chương trình<input required maxLength={120} value={couponForm.name} disabled={user?.role !== "ADMIN"} onChange={(event) => setCouponForm({ ...couponForm, name: event.target.value })} placeholder="Ưu đãi khách hàng mới" /></label><div className="form-grid two"><label>Loại giảm<select value={couponForm.discountType} disabled={user?.role !== "ADMIN"} onChange={(event) => setCouponForm({ ...couponForm, discountType: event.target.value as CouponForm["discountType"] })}><option value="PERCENTAGE">Phần trăm (%)</option><option value="FIXED">Số tiền cố định</option></select></label><label>Giá trị<input required type="number" min={1} max={couponForm.discountType === "PERCENTAGE" ? 100 : undefined} value={couponForm.discountValue} disabled={user?.role !== "ADMIN"} onChange={(event) => setCouponForm({ ...couponForm, discountValue: event.target.value })} /></label><label>Bắt đầu<input type="datetime-local" value={couponForm.startsAt} disabled={user?.role !== "ADMIN"} onChange={(event) => setCouponForm({ ...couponForm, startsAt: event.target.value })} /></label><label>Kết thúc<input type="datetime-local" value={couponForm.endsAt} disabled={user?.role !== "ADMIN"} onChange={(event) => setCouponForm({ ...couponForm, endsAt: event.target.value })} /></label><label>Giới hạn lượt<input type="number" min={1} value={couponForm.usageLimit} disabled={user?.role !== "ADMIN"} onChange={(event) => setCouponForm({ ...couponForm, usageLimit: event.target.value })} placeholder="Không giới hạn" /></label><label className="check-inline"><input type="checkbox" checked={couponForm.active} disabled={user?.role !== "ADMIN"} onChange={(event) => setCouponForm({ ...couponForm, active: event.target.checked })} /> Đang hoạt động</label></div><fieldset className="coupon-plan-fieldset" disabled={user?.role !== "ADMIN"}><legend>Áp dụng cho gói</legend>{planOptions.map((plan) => <label key={plan}><input type="checkbox" checked={couponForm.planCodes.includes(plan)} onChange={(event) => setCouponForm({ ...couponForm, planCodes: event.target.checked ? [...couponForm.planCodes, plan] : couponForm.planCodes.filter((item) => item !== plan) })} /> {plan}</label>)}</fieldset><button className="btn btn-primary full-button" disabled={busy || user?.role !== "ADMIN"}>{busy ? "Đang lưu..." : couponEditingId ? "Lưu thay đổi" : "Tạo mã"}</button></form>
    </div>}

    <ConfirmDialog
      open={Boolean(publishDialog)}
      title={publishDialog?.decision === "APPROVE" ? "Duyệt thiệp để xuất bản?" : "Yêu cầu khách hàng chỉnh sửa"}
      description={publishDialog ? <><strong>{publishDialog.weddingTitle}</strong>{publishDialog.decision === "APPROVE" ? " sẽ được xuất bản ngay và lưu một phiên bản phát hành." : " sẽ quay về trạng thái cần chỉnh sửa."}</> : ""}
      confirmLabel={publishDialog?.decision === "APPROVE" ? "Duyệt & xuất bản" : "Gửi yêu cầu sửa"}
      loading={busy}
      confirmDisabled={publishDialog?.decision === "CHANGES_REQUESTED" && publishNote.trim().length < 5}
      onClose={() => { setPublishDialog(null); setPublishNote(""); }}
      onConfirm={() => void reviewPublish()}
    >
      <FormField
        id="publish-review-note"
        label={publishDialog?.decision === "APPROVE" ? "Ghi chú cho khách hàng" : "Nội dung cần chỉnh sửa"}
        required={publishDialog?.decision === "CHANGES_REQUESTED"}
        helperText={publishDialog?.decision === "APPROVE" ? "Không bắt buộc." : "Nhập ít nhất 5 ký tự để khách hàng hiểu cần sửa gì."}
        error={publishDialog?.decision === "CHANGES_REQUESTED" && publishNote.length > 0 && publishNote.trim().length < 5 ? "Nội dung cần có ít nhất 5 ký tự." : undefined}
      >
        <textarea rows={4} value={publishNote} onChange={(event) => setPublishNote(event.target.value)} placeholder={publishDialog?.decision === "APPROVE" ? "Ví dụ: Thiệp đã đạt yêu cầu và sẵn sàng chia sẻ." : "Ví dụ: Vui lòng bổ sung địa chỉ tiệc cưới và kiểm tra lại thời gian."} />
      </FormField>
    </ConfirmDialog>
  </div></AppShell>;
}

export default function AdminPage() { return <AuthGate><AdminContent /></AuthGate>; }
