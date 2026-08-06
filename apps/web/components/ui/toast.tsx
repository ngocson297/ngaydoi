"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";

interface ToastItem { id: number; tone: "success" | "error" | "info"; title: string; message?: string }
interface ToastContextValue { notify: (toast: Omit<ToastItem, "id">) => void }
const ToastContext = createContext<ToastContextValue | null>(null);

function ToastCard({ item, onClose }: { item: ToastItem; onClose: () => void }) {
  const remainingRef = useRef(7000);
  const startedAtRef = useRef(0);
  const timerRef = useRef<number | null>(null);
  const start = useCallback(() => {
    if (timerRef.current !== null) return;
    startedAtRef.current = Date.now();
    timerRef.current = window.setTimeout(onClose, remainingRef.current);
  }, [onClose]);
  const pause = useCallback(() => {
    if (timerRef.current === null) return;
    window.clearTimeout(timerRef.current);
    timerRef.current = null;
    remainingRef.current = Math.max(0, remainingRef.current - (Date.now() - startedAtRef.current));
  }, []);
  useEffect(() => { start(); return pause; }, [pause, start]);
  return <div className={`ui-toast ui-toast-${item.tone}`} role={item.tone === "error" ? "alert" : "status"} aria-live={item.tone === "error" ? "assertive" : "polite"} onMouseEnter={pause} onMouseLeave={start} onFocus={pause} onBlur={start}>
    <span aria-hidden="true">{item.tone === "success" ? "✓" : item.tone === "error" ? "!" : "i"}</span><div><strong>{item.title}</strong>{item.message ? <p>{item.message}</p> : null}</div><button type="button" aria-label={`Đóng thông báo: ${item.title}`} onClick={onClose}>×</button>
  </div>;
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<ToastItem[]>([]);
  const notify = useCallback((toast: Omit<ToastItem, "id">) => {
    const id = Date.now() + Math.floor(Math.random() * 1000);
    setItems((current) => [...current, { ...toast, id }].slice(-3));
  }, []);
  const value = useMemo(() => ({ notify }), [notify]);
  return <ToastContext.Provider value={value}>{children}<div className="ui-toast-region" aria-label="Thông báo hệ thống">{items.map((item) => <ToastCard key={item.id} item={item} onClose={() => setItems((current) => current.filter((entry) => entry.id !== item.id))} />)}</div></ToastContext.Provider>;
}

export function useToast(): ToastContextValue {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used inside ToastProvider");
  return context;
}
