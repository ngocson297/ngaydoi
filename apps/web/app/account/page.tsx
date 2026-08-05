"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import { AppShell } from "../../components/app-shell";
import { AuthGate } from "../../components/auth-gate";
import { AuthUser, useAuth } from "../../components/auth-provider";
import { Alert, Button, ConfirmDialog, EmptyState, FormField, PageSkeleton, useToast } from "../../components/ui";
import { ApiError } from "../../lib/api";

interface Profile extends AuthUser { phone?: string | null; avatarUrl?: string | null; status: string; emailVerifiedAt?: string | null; createdAt: string }
interface Session { id: string; userAgent?: string | null; ipAddress?: string | null; createdAt: string; expiresAt: string; lastUsedAt?: string | null; current: boolean }

function dateTimeLabel(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Không rõ thời gian";
  return date.toLocaleString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", hour12: false });
}

function AccountContent() {
  const { authRequest, updateLocalUser, logout, logoutAll } = useAuth();
  const { notify } = useToast();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [error, setError] = useState<ApiError | Error | null>(null);
  const [loading, setLoading] = useState(true);
  const [savingProfile, setSavingProfile] = useState(false);
  const [changingPassword, setChangingPassword] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deletePassword, setDeletePassword] = useState("");
  const [deleting, setDeleting] = useState(false);

  const load = useCallback(async () => {
    setError(null);
    setLoading(true);
    try {
      const [me, activeSessions] = await Promise.all([authRequest<Profile>("/account/me"), authRequest<Session[]>("/account/sessions")]);
      setProfile(me);
      setSessions(activeSessions);
    } catch (cause) {
      setError(cause instanceof Error ? cause : new Error("Không thể tải tài khoản"));
    } finally {
      setLoading(false);
    }
  }, [authRequest]);

  useEffect(() => { void load(); }, [load]);

  async function saveProfile(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSavingProfile(true);
    const data = new FormData(event.currentTarget);
    try {
      const result = await authRequest<Profile>("/account/profile", { method: "PATCH", body: JSON.stringify({ displayName: data.get("displayName"), phone: data.get("phone") }) });
      setProfile((old) => old ? { ...old, ...result } : result);
      updateLocalUser(result);
      notify({ tone: "success", title: "Đã lưu hồ sơ", message: "Thông tin tài khoản của bạn đã được cập nhật." });
    } catch (cause) {
      setError(cause instanceof Error ? cause : new Error("Không thể cập nhật hồ sơ"));
    } finally {
      setSavingProfile(false);
    }
  }

  async function changePassword(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get("newPassword") !== data.get("confirmPassword")) { setError(new Error("Mật khẩu xác nhận không khớp. Vui lòng nhập lại.")); return; }
    setChangingPassword(true);
    try {
      await authRequest<{ message: string }>("/account/change-password", { method: "POST", body: JSON.stringify({ currentPassword: data.get("currentPassword"), newPassword: data.get("newPassword") }) });
      form.reset();
      notify({ tone: "success", title: "Đã đổi mật khẩu", message: "Bạn sẽ được đăng xuất để đăng nhập lại bằng mật khẩu mới." });
      window.setTimeout(() => void logout(), 1500);
    } catch (cause) {
      setError(cause instanceof Error ? cause : new Error("Không thể đổi mật khẩu"));
    } finally {
      setChangingPassword(false);
    }
  }

  async function revoke(id: string) {
    try {
      await authRequest(`/account/sessions/${id}`, { method: "DELETE" });
      notify({ tone: "success", title: "Đã thu hồi phiên đăng nhập" });
      await load();
    } catch (cause) {
      setError(cause instanceof Error ? cause : new Error("Không thể thu hồi phiên"));
    }
  }

  async function requestDeletion() {
    if (!deletePassword) return;
    setDeleting(true);
    setError(null);
    try {
      await authRequest("/account/request-deletion", { method: "POST", body: JSON.stringify({ password: deletePassword }) });
      await logout();
      window.location.href = "/";
    } catch (cause) {
      setError(cause instanceof Error ? cause : new Error("Không thể gửi yêu cầu xóa tài khoản"));
      setDeleteOpen(false);
    } finally {
      setDeleting(false);
      setDeletePassword("");
    }
  }

  return <AppShell active="account"><div className="account-container account-container-shell">
    <header className="page-heading"><div><div className="eyebrow">Tài khoản và bảo mật</div><h1>Cài đặt tài khoản</h1><p className="auth-lead">Quản lý hồ sơ, mật khẩu và các thiết bị đang đăng nhập.</p></div></header>
    {error ? <Alert tone="error" title="Chưa thể hoàn tất thao tác" requestId={error instanceof ApiError ? error.requestId : undefined}>{error.message}</Alert> : null}
    {loading ? <PageSkeleton /> : <>
      <section className="account-grid">
        <article className="settings-card"><div className="panel-head"><div><h2>Hồ sơ</h2><p className="muted-small">Thông tin hiển thị trong không gian quản lý của bạn.</p></div></div>{profile ? <form className="auth-form" onSubmit={saveProfile}>
          <FormField id="account-display-name" label="Tên hiển thị" required helperText="Có thể dùng tên của bạn hoặc tên hai bạn."><input name="displayName" defaultValue={profile.displayName} required /></FormField>
          <FormField id="account-email" label="Email" disabledReason="Email đăng nhập chưa thể thay đổi trong phiên bản hiện tại."><input value={profile.email} disabled /></FormField>
          <FormField id="account-phone" label="Số điện thoại" helperText="Chỉ dùng khi cần liên hệ hỗ trợ tài khoản."><input name="phone" type="tel" defaultValue={profile.phone ?? ""} placeholder="Ví dụ: 0901 234 567" /></FormField>
          <div className="account-meta" aria-label="Thông tin tài khoản"><span>Vai trò: {profile.role}</span><span>Trạng thái: {profile.status}</span></div>
          <Button type="submit" loading={savingProfile} loadingLabel="Đang lưu hồ sơ…">Lưu hồ sơ</Button>
        </form> : null}</article>
        <article className="settings-card"><div className="panel-head"><div><h2>Đổi mật khẩu</h2><p className="muted-small">Sau khi đổi, các phiên đăng nhập cũ sẽ được bảo vệ lại.</p></div></div><form className="auth-form" onSubmit={changePassword}>
          <FormField id="current-password" label="Mật khẩu hiện tại" required><input name="currentPassword" type="password" autoComplete="current-password" required /></FormField>
          <FormField id="new-password" label="Mật khẩu mới" required helperText="Ít nhất 8 ký tự, có chữ hoa, chữ thường và chữ số."><input name="newPassword" type="password" autoComplete="new-password" minLength={8} required /></FormField>
          <FormField id="confirm-password" label="Nhập lại mật khẩu" required><input name="confirmPassword" type="password" autoComplete="new-password" minLength={8} required /></FormField>
          <Button type="submit" variant="secondary" loading={changingPassword} loadingLabel="Đang đổi mật khẩu…">Đổi mật khẩu</Button>
        </form></article>
      </section>

      <section className="settings-card sessions-card"><div className="panel-head"><div><h2>Phiên đăng nhập</h2><p className="muted-small">Thu hồi thiết bị bạn không nhận ra hoặc không còn sử dụng.</p></div><Button variant="secondary" onClick={() => void logoutAll()}>Đăng xuất mọi thiết bị</Button></div>
        <div className="session-list">{sessions.map((session) => <div className="session-item" key={session.id}><div><strong>{session.current ? "Thiết bị hiện tại" : "Thiết bị khác"}</strong><p>{session.userAgent || "Không rõ trình duyệt"}</p><span>{session.ipAddress || "Không rõ IP"} · Tạo {dateTimeLabel(session.createdAt)}</span></div><Button size="sm" variant="ghost" disabled={session.current} title={session.current ? "Không thể thu hồi phiên đang dùng tại đây" : undefined} onClick={() => void revoke(session.id)}>{session.current ? "Đang dùng" : "Thu hồi"}</Button></div>)}{sessions.length === 0 ? <EmptyState icon="◎" title="Không có phiên đang hoạt động" description="Khi bạn đăng nhập trên thiết bị khác, phiên đó sẽ xuất hiện tại đây." /> : null}</div>
      </section>

      <section className="settings-card danger-card"><h2>Yêu cầu xóa tài khoản</h2><p>Tài khoản sẽ bị khóa và đăng xuất khỏi tất cả thiết bị. Đây là hành động nghiêm trọng và cần mật khẩu để xác nhận.</p><Button variant="danger" onClick={() => setDeleteOpen(true)}>Yêu cầu xóa tài khoản</Button></section>
    </>}
    <ConfirmDialog open={deleteOpen} tone="danger" title="Yêu cầu xóa tài khoản?" description={<p>Tài khoản của bạn sẽ bị khóa và đăng xuất khỏi mọi thiết bị. Nhập mật khẩu để xác nhận yêu cầu.</p>} confirmLabel="Xác nhận yêu cầu xóa" loading={deleting} onClose={() => { setDeleteOpen(false); setDeletePassword(""); }} onConfirm={() => void requestDeletion()}>
      <FormField id="delete-account-password" label="Mật khẩu" required><input type="password" autoComplete="current-password" value={deletePassword} onChange={(event) => setDeletePassword(event.target.value)} /></FormField>
    </ConfirmDialog>
  </div></AppShell>;
}

export default function AccountPage() { return <AuthGate><AccountContent /></AuthGate>; }
