"use client";

import { useState } from "react";
import { useAuth } from "./auth-provider";

interface AppShellProps {
  children: React.ReactNode;
  active?: "dashboard" | "weddings" | "invitation" | "guests" | "billing" | "account" | "admin" | "system" | "pilot" | "growth" | "growthAdmin" | "onboarding" | "support" | "partner" | "partnersAdmin" | "eventOps" | "memories" | "planning" | "templates";
  weddingId?: string;
}

export function AppShell({ children, active = "weddings", weddingId }: AppShellProps) {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="dashboard">
      <header className="mobile-appbar">
        <a className="brand" href="/dashboard">Ngày <span>Đôi</span></a>
        <nav><a href="/dashboard" aria-label="Dashboard">⌂</a><a href="/account" aria-label="Tài khoản">◎</a><button type="button" aria-label="Mở menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>☰</button></nav>
      </header>
      {menuOpen && <><button className="mobile-menu-backdrop" aria-label="Đóng menu" onClick={() => setMenuOpen(false)} /><aside className="mobile-menu-drawer" aria-label="Điều hướng chính"><header><div><strong>{user?.displayName}</strong><span>{user?.email}</span></div><button type="button" aria-label="Đóng menu" onClick={() => setMenuOpen(false)}>×</button></header><nav><a href="/dashboard">⌂ Tổng quan</a><a href="/getting-started">✦ Bắt đầu nhanh</a><a href="/dashboard#my-weddings">♡ Đám cưới của tôi</a>{weddingId && <><a href={`/weddings/${weddingId}/planning`}>✓ Kế hoạch cưới</a><a href={`/weddings/${weddingId}/invitation`}>✉ Thiệp cưới</a><a href={`/weddings/${weddingId}/guests`}>◎ Khách mời & RSVP</a><a href={`/weddings/${weddingId}/event-operations`}>⌖ Phân bàn & check-in</a><a href={`/weddings/${weddingId}/memories`}>▧ Album kỷ niệm</a></>}<a href="/templates">✦ Kho mẫu thiệp</a><a href="/billing">◇ Gói & thanh toán</a><a href="/support">? Hỗ trợ</a><a href="/account">◎ Tài khoản</a>{user && ["ADMIN", "STAFF"].includes(user.role) && <a href="/admin">⚙ Vận hành Admin</a>}</nav><button className="mobile-menu-logout" type="button" onClick={() => void logout()}>Đăng xuất</button></aside></>}
      <div className="dash-shell">
        <aside className="sidebar">
          <a className="brand" href="/dashboard">Ngày <span>Đôi</span></a>
          <div className="sidebar-user">
            <strong>{user?.displayName}</strong>
            <span>{user?.email}</span>
          </div>
          <div className="side-section-label">Tổng quan</div>
          <a className={`side-link ${active === "dashboard" ? "active" : ""}`} href="/dashboard"><span>⌂ Tổng quan</span></a>
          <a className={`side-link ${active === "onboarding" ? "active" : ""}`} href="/getting-started"><span>✦ Bắt đầu nhanh</span><em>Guide</em></a>
          <a className={`side-link ${active === "weddings" ? "active" : ""}`} href="/dashboard#my-weddings"><span>♡ Đám cưới của tôi</span></a>
          <div className="side-section-label">Không gian cưới</div>
          <a className={`side-link ${active === "planning" ? "active" : ""}`} href={weddingId ? `/weddings/${weddingId}/planning` : "/dashboard#my-weddings"}><span>✓ Kế hoạch cưới</span><em>Timeline</em></a>
          <a className={`side-link ${active === "invitation" ? "active" : ""}`} href={weddingId ? `/weddings/${weddingId}/invitation` : "/dashboard#my-weddings"}><span>✉ Thiệp cưới</span><em>Studio</em></a>
          {weddingId ? <><a className={`side-link ${active === "guests" ? "active" : ""}`} href={`/weddings/${weddingId}/guests`}><span>◎ Khách mời</span><em>RSVP</em></a><a className={`side-link ${active === "eventOps" ? "active" : ""}`} href={`/weddings/${weddingId}/event-operations`}><span>⌖ Phân bàn & check-in</span><em>Event</em></a><a className={`side-link ${active === "memories" ? "active" : ""}`} href={`/weddings/${weddingId}/memories`}><span>▧ Album kỷ niệm</span><em>Memories</em></a></> : <><span className="side-link disabled"><span>◎ Khách mời</span><em>Chọn wedding</em></span><span className="side-link disabled"><span>⌖ Phân bàn & check-in</span><em>Chọn wedding</em></span><span className="side-link disabled"><span>▧ Album kỷ niệm</span><em>Chọn wedding</em></span></> }
          <div className="side-section-label">Dịch vụ</div>
          <a className={`side-link ${active === "templates" ? "active" : ""}`} href="/templates"><span>✦ Kho mẫu thiệp</span><em>24 mẫu</em></a>
          <a className={`side-link ${active === "billing" ? "active" : ""}`} href="/billing"><span>◇ Gói & thanh toán</span><em>Billing</em></a>
          <a className={`side-link ${active === "growth" ? "active" : ""}`} href="/growth"><span>↗ Growth Hub</span><em>Domain</em></a>
          <a className={`side-link ${active === "partner" ? "active" : ""}`} href="/partner"><span>♢ Đối tác</span><em>Partner</em></a>
          {user && ["ADMIN", "STAFF"].includes(user.role) ? <><div className="side-section-label">Quản trị</div><a className={`side-link ${active === "admin" ? "active" : ""}`} href="/admin">Vận hành <em>Admin</em></a><a className={`side-link ${active === "system" ? "active" : ""}`} href="/admin/system">Hệ thống <em>Ops</em></a><a className={`side-link ${active === "pilot" ? "active" : ""}`} href="/admin/pilot">Pilot launch <em>UAT</em></a><a className={`side-link ${active === "growthAdmin" ? "active" : ""}`} href="/admin/growth">Growth <em>Launch</em></a><a className={`side-link ${active === "partnersAdmin" ? "active" : ""}`} href="/admin/partners">Đối tác <em>Revenue</em></a></> : null}
          <div className="side-section-label">Tài khoản</div>
          <a className={`side-link ${active === "support" ? "active" : ""}`} href="/support"><span>? Hỗ trợ</span><em>Inbox</em></a>
          <a className={`side-link ${active === "account" ? "active" : ""}`} href="/account"><span>◎ Tài khoản</span></a>
          <button className="side-logout" onClick={() => void logout()}>Đăng xuất</button>
        </aside>
        <section className="dash-main">{children}</section>
      </div>
    </main>
  );
}
