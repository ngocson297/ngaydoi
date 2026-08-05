"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import { AuthGate } from "../../components/auth-gate";
import { AuthUser, useAuth } from "../../components/auth-provider";
import { ApiError } from "../../lib/api";

interface Profile extends AuthUser { phone?: string | null; avatarUrl?: string | null; status: string; emailVerifiedAt?: string | null; createdAt: string }
interface Session { id: string; userAgent?: string | null; ipAddress?: string | null; createdAt: string; expiresAt: string; lastUsedAt?: string | null; current: boolean }

function AccountContent() {
  const { authRequest, updateLocalUser, logout, logoutAll } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    try {
      const [me, activeSessions] = await Promise.all([authRequest<Profile>("/account/me"), authRequest<Session[]>("/account/sessions")]);
      setProfile(me); setSessions(activeSessions);
    } catch (cause) { setError(cause instanceof ApiError ? cause.message : "Không thể tải tài khoản"); }
  }, [authRequest]);
  useEffect(() => { void load(); }, [load]);

  async function saveProfile(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError(""); setNotice(""); const data=new FormData(event.currentTarget);
    try { const result=await authRequest<Profile>("/account/profile",{method:"PATCH",body:JSON.stringify({displayName:data.get("displayName"),phone:data.get("phone")})}); setProfile((old)=>old?{...old,...result}:result); updateLocalUser(result); setNotice("Đã cập nhật hồ sơ."); }
    catch(cause){setError(cause instanceof ApiError?cause.message:"Không thể cập nhật");}
  }
  async function changePassword(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError(""); setNotice(""); const form=event.currentTarget; const data=new FormData(form);
    if(data.get("newPassword")!==data.get("confirmPassword")){setError("Mật khẩu xác nhận không khớp.");return;}
    try{const result=await authRequest<{message:string}>("/account/change-password",{method:"POST",body:JSON.stringify({currentPassword:data.get("currentPassword"),newPassword:data.get("newPassword")})});setNotice(result.message);form.reset();setTimeout(()=>void logout(),1200);}
    catch(cause){setError(cause instanceof ApiError?cause.message:"Không thể đổi mật khẩu");}
  }
  async function revoke(id:string){try{await authRequest(`/account/sessions/${id}`,{method:"DELETE"});await load();}catch(cause){setError(cause instanceof ApiError?cause.message:"Không thể thu hồi phiên");}}
  async function deleteAccount(event:FormEvent<HTMLFormElement>){event.preventDefault();if(!window.confirm("Yêu cầu xóa sẽ khóa tài khoản và đăng xuất mọi thiết bị. Tiếp tục?"))return;const data=new FormData(event.currentTarget);try{await authRequest("/account/request-deletion",{method:"POST",body:JSON.stringify({password:data.get("password")})});await logout();window.location.href="/";}catch(cause){setError(cause instanceof ApiError?cause.message:"Không thể gửi yêu cầu");}}

  return <main className="account-page"><header className="account-top"><a className="brand" href="/">Ngày <span>Đôi</span></a><nav><a href="/dashboard">Dashboard</a><button onClick={()=>void logout()}>Đăng xuất</button></nav></header><div className="account-container"><div><div className="eyebrow">Tài khoản và bảo mật</div><h1>Cài đặt tài khoản</h1><p className="auth-lead">Quản lý thông tin cá nhân, mật khẩu và các thiết bị đang đăng nhập.</p></div>{notice&&<div className="alert alert-success">{notice}</div>}{error&&<div className="alert alert-error">{error}</div>}<section className="account-grid"><article className="settings-card"><h2>Hồ sơ</h2>{profile&&<form className="auth-form" onSubmit={saveProfile}><label>Tên hiển thị<input name="displayName" defaultValue={profile.displayName} required /></label><label>Email<input value={profile.email} disabled /></label><label>Số điện thoại<input name="phone" defaultValue={profile.phone??""} placeholder="Tùy chọn" /></label><div className="account-meta"><span>Vai trò: {profile.role}</span><span>Trạng thái: {profile.status}</span></div><button className="btn btn-primary">Lưu hồ sơ</button></form>}</article><article className="settings-card"><h2>Đổi mật khẩu</h2><form className="auth-form" onSubmit={changePassword}><label>Mật khẩu hiện tại<input name="currentPassword" type="password" required /></label><label>Mật khẩu mới<input name="newPassword" type="password" minLength={8} required /></label><label>Nhập lại mật khẩu<input name="confirmPassword" type="password" minLength={8} required /></label><button className="btn btn-secondary">Đổi mật khẩu</button></form></article></section><section className="settings-card sessions-card"><div className="panel-head"><div><h2>Phiên đăng nhập</h2><p className="muted-small">Refresh token được xoay vòng và chỉ lưu dạng hash trong database.</p></div><button className="btn btn-secondary" onClick={()=>void logoutAll()}>Đăng xuất mọi thiết bị</button></div><div className="session-list">{sessions.map(session=><div className="session-item" key={session.id}><div><strong>{session.current?"Thiết bị hiện tại":"Thiết bị khác"}</strong><p>{session.userAgent||"Không rõ trình duyệt"}</p><span>{session.ipAddress||"Không rõ IP"} · Tạo {new Date(session.createdAt).toLocaleString("vi-VN")}</span></div><button onClick={()=>void revoke(session.id)}>Thu hồi</button></div>)}{sessions.length===0&&<p>Không có phiên refresh đang hoạt động.</p>}</div></section><section className="settings-card danger-card"><h2>Yêu cầu xóa tài khoản</h2><p>Tài khoản sẽ bị khóa và đăng xuất khỏi tất cả thiết bị. Xóa dữ liệu vật lý sẽ được xử lý theo retention policy ở phase production.</p><form className="danger-form" onSubmit={deleteAccount}><input name="password" type="password" placeholder="Nhập mật khẩu để xác nhận" required/><button>Yêu cầu xóa</button></form></section></div></main>;
}
export default function AccountPage(){return <AuthGate><AccountContent/></AuthGate>;}
