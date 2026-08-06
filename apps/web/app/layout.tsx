import type { Metadata } from "next";
import "./globals.css";
import "./design-system.css";
import { SkipLink } from "../components/accessibility";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Ngày Đôi — Thiệp cưới và quản lý khách mời",
  description: "Thiệp cưới online dành riêng cho đám cưới Việt Nam.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body><SkipLink /><Providers>{children}</Providers></body>
    </html>
  );
}
