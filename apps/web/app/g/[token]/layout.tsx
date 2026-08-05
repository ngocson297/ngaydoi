import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thiệp mời cá nhân · Ngày Đôi",
  robots: { index: false, follow: false, noarchive: true, nocache: true },
};

export default function PersonalizedInvitationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
