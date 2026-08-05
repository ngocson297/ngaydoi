"use client";

import { useCallback, useEffect, useState } from "react";
import { Alert, Button, ListSkeleton } from "../../components/ui";
import { API_URL } from "../../lib/api";

interface PublicStatus {
  status: "operational" | "degraded";
  services: Record<string, "operational" | "degraded" | "outage">;
  updatedAt: string;
}

const labels: Record<string, string> = { website: "Website", api: "API", database: "Cơ sở dữ liệu", media: "Hình ảnh & media" };
const statusLabels = { operational: "Hoạt động bình thường", degraded: "Đang bị ảnh hưởng", outage: "Tạm gián đoạn" } as const;

export default function StatusPage() {
  const [data, setData] = useState<PublicStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<{ message: string; requestId?: string } | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/health/status`, { cache: "no-store" });
      if (!response.ok) {
        throw { requestId: response.headers.get("x-request-id") || undefined };
      }
      setData(await response.json() as PublicStatus);
    } catch (reason) {
      const requestId = typeof reason === "object" && reason && "requestId" in reason ? String((reason as { requestId?: unknown }).requestId || "") || undefined : undefined;
      setError({ message: "Không thể kết nối dịch vụ trạng thái. Vui lòng thử lại sau.", requestId });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
    const timer = window.setInterval(() => void load(), 30_000);
    return () => window.clearInterval(timer);
  }, [load]);

  return <main className="status-page">
    <header className="status-nav"><a className="brand" href="/">Ngày <span>Đôi</span></a><a href="/login">Đăng nhập</a></header>
    <section className="status-hero">
      <span className={`status-beacon ${data?.status ?? "unknown"}`} aria-hidden="true" />
      <p className="eyebrow">TRẠNG THÁI HỆ THỐNG</p>
      <h1>{data?.status === "operational" ? "Mọi dịch vụ đang hoạt động" : data ? "Một số dịch vụ đang bị ảnh hưởng" : "Đang kiểm tra hệ thống"}</h1>
      <p>Trang này tự cập nhật mỗi 30 giây để bạn biết thiệp, RSVP và trang quản trị có đang hoạt động bình thường hay không.</p>
      {error ? <Alert tone="error" title="Chưa thể cập nhật trạng thái" requestId={error.requestId}>{error.message}</Alert> : null}
    </section>
    <section className="status-card">
      <div className="status-card-head"><div><h2>Dịch vụ Ngày Đôi</h2><p>Cập nhật gần nhất: {data ? new Date(data.updatedAt).toLocaleString("vi-VN") : "Chưa có dữ liệu"}</p></div><Button variant="secondary" size="sm" loading={loading} loadingLabel="Đang kiểm tra…" onClick={() => void load()}>Làm mới</Button></div>
      {loading && !data ? <ListSkeleton rows={4} withAvatar={false} /> : <div className="service-status-list">
        {Object.entries(labels).map(([key, label]) => {
          const status = data?.services[key] ?? "degraded";
          return <article key={key}><div><span className={`service-dot ${status}`} /><strong>{label}</strong></div><em className={status}>{statusLabels[status]}</em></article>;
        })}
      </div>}
    </section>
    <footer className="status-footer">Gặp sự cố khi sử dụng? Hãy lưu mã yêu cầu hiển thị trong thông báo lỗi để đội ngũ hỗ trợ tra cứu nhanh hơn.</footer>
  </main>;
}
