"use client";

import { useCallback, useEffect, useState } from "react";
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
  const [error, setError] = useState("");
  const load = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/health/status`, { cache: "no-store" });
      if (!response.ok) throw new Error("Status endpoint unavailable");
      setData(await response.json() as PublicStatus);
      setError("");
    } catch {
      setError("Không thể kết nối dịch vụ trạng thái. Vui lòng thử lại sau.");
    }
  }, []);
  useEffect(() => { void load(); const timer = setInterval(() => void load(), 30_000); return () => clearInterval(timer); }, [load]);

  return <main className="status-page">
    <header className="status-nav"><a className="brand" href="/">Ngày <span>Đôi</span></a><a href="/login">Đăng nhập</a></header>
    <section className="status-hero">
      <span className={`status-beacon ${data?.status ?? "unknown"}`} aria-hidden="true" />
      <p className="eyebrow">TRẠNG THÁI HỆ THỐNG</p>
      <h1>{data?.status === "operational" ? "Mọi dịch vụ đang hoạt động" : data ? "Một số dịch vụ đang bị ảnh hưởng" : "Đang kiểm tra hệ thống"}</h1>
      <p>Trang này tự cập nhật mỗi 30 giây để bạn biết thiệp, RSVP và trang quản trị có đang hoạt động bình thường hay không.</p>
      {error ? <div className="status-alert">{error}<button onClick={() => void load()}>Thử lại</button></div> : null}
    </section>
    <section className="status-card">
      <div className="status-card-head"><div><h2>Dịch vụ Ngày Đôi</h2><p>Cập nhật gần nhất: {data ? new Date(data.updatedAt).toLocaleString("vi-VN") : "Đang tải..."}</p></div><button onClick={() => void load()}>Làm mới</button></div>
      <div className="service-status-list">
        {Object.entries(labels).map(([key, label]) => {
          const status = data?.services[key] ?? "degraded";
          return <article key={key}><div><span className={`service-dot ${status}`} /><strong>{label}</strong></div><em className={status}>{statusLabels[status]}</em></article>;
        })}
      </div>
    </section>
    <footer className="status-footer">Gặp sự cố khi sử dụng? Hãy lưu mã yêu cầu hiển thị trong thông báo lỗi để đội ngũ hỗ trợ tra cứu nhanh hơn.</footer>
  </main>;
}
