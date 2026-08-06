"use client";

import { AuthProvider } from "../components/auth-provider";
import { AccessibilityAnnouncer } from "../components/accessibility";
import { ConfirmProvider, ToastProvider } from "../components/ui";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ToastProvider><ConfirmProvider><AuthProvider><AccessibilityAnnouncer />{children}</AuthProvider></ConfirmProvider></ToastProvider>;
}
