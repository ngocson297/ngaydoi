"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const routeNames: Array<[RegExp, string]> = [
  [/^\/dashboard/, "Tổng quan"],
  [/^\/weddings\/[^/]+\/guests/, "Quản lý khách mời"],
  [/^\/weddings\/[^/]+\/invitation/, "Thiết kế thiệp cưới"],
  [/^\/weddings\/[^/]+\/planning/, "Kế hoạch cưới"],
  [/^\/weddings\/[^/]+\/event-operations/, "Vận hành sự kiện"],
  [/^\/weddings\/[^/]+\/memories/, "Album kỷ niệm"],
  [/^\/weddings\/[^/]+/, "Không gian wedding"],
  [/^\/billing/, "Thanh toán"],
  [/^\/account/, "Tài khoản"],
  [/^\/partner/, "Partner Portal"],
  [/^\/admin/, "Quản trị hệ thống"],
  [/^\/support/, "Hỗ trợ"],
  [/^\/growth/, "Tăng trưởng"],
  [/^\/templates/, "Kho mẫu thiệp"],
];

function routeLabel(pathname: string): string {
  return routeNames.find(([pattern]) => pattern.test(pathname))?.[1] ?? "Trang mới";
}

export function SkipLink() {
  return <a className="ui-skip-link" href="#main-content">Bỏ qua điều hướng, đến nội dung chính</a>;
}

export function AccessibilityAnnouncer() {
  const pathname = usePathname();
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => setAnnouncement(`Đã mở: ${routeLabel(pathname)}`), 80);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return <div className="sr-only" aria-live="polite" aria-atomic="true">{announcement}</div>;
}
