"use client";

import { useEffect, useId, useMemo, useRef, useState, type ChangeEvent, type KeyboardEvent as ReactKeyboardEvent, type MouseEvent as ReactMouseEvent, type ReactNode } from "react";
import { useAuth } from "./auth-provider";
import {
  activeGroupId,
  activeLabel,
  buildBreadcrumbs,
  buildNavigation,
  roleLabel,
  type ActiveNavKey,
  type BreadcrumbItem,
  type NavigationGroup,
  type NavigationItem,
} from "./navigation/navigation-model";

interface AppShellProps {
  children: ReactNode;
  active?: ActiveNavKey;
  weddingId?: string;
  breadcrumbs?: BreadcrumbItem[];
}

type ExpandedGroups = Record<string, boolean>;

function focusableElements(container: HTMLElement | null): HTMLElement[] {
  if (!container) return [];
  return Array.from(container.querySelectorAll<HTMLElement>(
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
  )).filter((element) => !element.hasAttribute("hidden") && element.getAttribute("aria-hidden") !== "true");
}

function trapTab(event: KeyboardEvent, container: HTMLElement | null): void {
  if (event.key !== "Tab") return;
  const focusable = focusableElements(container);
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function NavigationLink({ item, active, onNavigate }: { item: NavigationItem; active: ActiveNavKey; onNavigate?: () => void }) {
  const isActive = item.key === active;
  return (
    <a
      className={`app-nav-link ${isActive ? "active" : ""}`}
      href={item.href}
      aria-current={isActive ? "page" : undefined}
      aria-label={`${item.label}. ${item.description}`}
      title={item.description}
      onClick={onNavigate}
    >
      <span className="app-nav-icon" aria-hidden="true">{item.icon}</span>
      <span className="app-nav-copy">
        <strong>{item.label}</strong>
        <small>{item.description}</small>
      </span>
      {item.badge ? <em>{item.badge}</em> : null}
    </a>
  );
}

function NavigationGroups({
  groups,
  active,
  expanded,
  onToggle,
  onNavigate,
  idPrefix,
}: {
  groups: NavigationGroup[];
  active: ActiveNavKey;
  expanded: ExpandedGroups;
  onToggle: (id: string) => void;
  onNavigate?: () => void;
  idPrefix: string;
}) {
  return (
    <div className="app-nav-groups">
      {groups.map((group) => {
        const isExpanded = expanded[group.id] ?? false;
        const containsActive = group.items.some((entry) => entry.key === active);
        const panelId = `${idPrefix}-nav-group-${group.id}`;
        return (
          <section className={`app-nav-group ${containsActive ? "contains-active" : ""}`} key={group.id}>
            <button
              className="app-nav-group-toggle"
              type="button"
              aria-expanded={isExpanded}
              aria-controls={panelId}
              onClick={() => onToggle(group.id)}
            >
              <span>
                <strong>{group.label}</strong>
                <small>{group.description}</small>
              </span>
              <span className="app-nav-chevron" aria-hidden="true">⌄</span>
            </button>
            {isExpanded ? (
              <div className="app-nav-group-panel" id={panelId}>
                {group.items.length ? group.items.map((entry) => (
                  <NavigationLink item={entry} active={active} onNavigate={onNavigate} key={entry.key} />
                )) : (
                  <a className="app-nav-context" href="/dashboard#my-weddings" onClick={onNavigate}>
                    <span aria-hidden="true">♡</span>
                    <span>{group.contextMessage ?? "Chưa có mục khả dụng trong nhóm này."}</span>
                  </a>
                )}
              </div>
            ) : null}
          </section>
        );
      })}
    </div>
  );
}

function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  if (!items.length) return null;
  return (
    <nav className="app-breadcrumbs" aria-label="Đường dẫn trang">
      <ol>
        {items.map((entry, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${entry.label}-${index}`}>
              {index ? <span className="app-breadcrumb-separator" aria-hidden="true">›</span> : null}
              {entry.href && !isLast ? <a href={entry.href}>{entry.label}</a> : <span aria-current={isLast ? "page" : undefined}>{entry.label}</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function CommandPalette({
  open,
  groups,
  onClose,
}: {
  open: boolean;
  groups: NavigationGroup[];
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const id = useId();
  const titleId = `${id}-title`;
  const descriptionId = `${id}-description`;
  const resultsId = `${id}-results`;
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const items = useMemo(() => groups.flatMap((group) => group.items.map((entry) => ({ ...entry, groupLabel: group.label }))), [groups]);
  const normalizedQuery = query.trim().toLocaleLowerCase("vi-VN");
  const filtered = useMemo(() => {
    if (!normalizedQuery) return items;
    return items.filter((entry) => [entry.label, entry.description, entry.groupLabel, ...entry.keywords]
      .join(" ")
      .toLocaleLowerCase("vi-VN")
      .includes(normalizedQuery));
  }, [items, normalizedQuery]);

  useEffect(() => {
    setActiveIndex(0);
  }, [normalizedQuery]);

  useEffect(() => {
    if (!open) return;
    previousFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => inputRef.current?.focus(), 0);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      trapTab(event, dialogRef.current);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  function navigate(entry: NavigationItem): void {
    onClose();
    window.location.assign(entry.href);
  }

  function handleInputKeyDown(event: ReactKeyboardEvent<HTMLInputElement>): void {
    if (!filtered.length) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((current) => (current + 1) % filtered.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((current) => (current - 1 + filtered.length) % filtered.length);
    } else if (event.key === "Home") {
      event.preventDefault();
      setActiveIndex(0);
    } else if (event.key === "End") {
      event.preventDefault();
      setActiveIndex(filtered.length - 1);
    } else if (event.key === "Enter") {
      event.preventDefault();
      navigate(filtered[Math.min(activeIndex, filtered.length - 1)]);
    }
  }

  return (
    <div className="command-palette-backdrop" role="presentation" onMouseDown={(event: ReactMouseEvent<HTMLDivElement>) => { if (event.currentTarget === event.target) onClose(); }}>
      <div className="command-palette" role="dialog" aria-modal="true" aria-labelledby={titleId} aria-describedby={descriptionId} ref={dialogRef}>
        <header>
          <div>
            <p className="eyebrow">ĐIỀU HƯỚNG NHANH</p>
            <h2 id={titleId}>Bạn muốn mở phần nào?</h2>
            <p className="sr-only" id={descriptionId}>Nhập từ khóa rồi dùng phím mũi tên để chọn kết quả. Nhấn Enter để mở hoặc Escape để đóng.</p>
          </div>
          <button type="button" aria-label="Đóng tìm kiếm menu" onClick={onClose}>×</button>
        </header>
        <label className="command-search">
          <span aria-hidden="true">⌕</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setQuery(event.target.value)}
            onKeyDown={handleInputKeyDown}
            placeholder="Tìm khách mời, thiệp cưới, thanh toán..."
            role="combobox"
            aria-expanded="true"
            aria-autocomplete="list"
            aria-label="Tìm trong menu"
            aria-controls={resultsId}
            aria-activedescendant={filtered.length ? `${id}-result-${activeIndex}` : undefined}
            autoComplete="off"
          />
          <kbd>ESC</kbd>
        </label>
        <p className="sr-only" aria-live="polite">{filtered.length} kết quả điều hướng.</p>
        <div className="command-results" id={resultsId} role="listbox" aria-label="Kết quả điều hướng">
          {filtered.length ? filtered.map((entry, index) => (
            <button
              type="button"
              role="option"
              aria-selected={index === activeIndex}
              className={index === activeIndex ? "active" : ""}
              id={`${id}-result-${index}`}
              tabIndex={-1}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => navigate(entry)}
              key={`${entry.groupLabel}-${entry.key}`}
            >
              <span className="command-result-icon" aria-hidden="true">{entry.icon}</span>
              <span>
                <strong>{entry.label}</strong>
                <small>{entry.groupLabel} · {entry.description}</small>
              </span>
              <span className="command-enter" aria-hidden="true">↵</span>
            </button>
          )) : (
            <div className="command-empty">
              <span aria-hidden="true">⌕</span>
              <strong>Không tìm thấy mục phù hợp</strong>
              <p>Thử từ khóa ngắn hơn như “khách”, “thiệp” hoặc “hỗ trợ”.</p>
            </div>
          )}
        </div>
        <footer>
          <span><kbd>↑</kbd><kbd>↓</kbd> Di chuyển</span>
          <span><kbd>↵</kbd> Mở</span>
          <span>Kết quả đã được lọc theo quyền tài khoản.</span>
        </footer>
      </div>
    </div>
  );
}

export function AppShell({ children, active = "weddings", weddingId, breadcrumbs }: AppShellProps) {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const drawerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const groups = useMemo(() => buildNavigation(user?.role, weddingId), [user?.role, weddingId]);
  const currentGroup = activeGroupId(groups, active);
  const [expanded, setExpanded] = useState<ExpandedGroups>(() => ({ overview: true }));
  const breadcrumbItems = breadcrumbs ?? buildBreadcrumbs(active, weddingId);

  useEffect(() => {
    const storageKey = `ngaydoi.navigation.groups.v2.${user?.role ?? "guest"}`;
    let preferredGroup: string | null = null;
    try {
      preferredGroup = window.localStorage.getItem(storageKey);
    } catch {
      preferredGroup = null;
    }
    const groupToOpen = currentGroup ?? (groups.some((group) => group.id === preferredGroup) ? preferredGroup : "overview");
    setExpanded(Object.fromEntries(groups.map((group) => [group.id, group.id === groupToOpen])));
  }, [currentGroup, groups, user?.role]);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLocaleLowerCase() === "k") {
        event.preventDefault();
        setMenuOpen(false);
        setCommandOpen((current) => !current);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => focusableElements(drawerRef.current)[0]?.focus(), 0);
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setMenuOpen(false);
        return;
      }
      trapTab(event, drawerRef.current);
    };
    document.addEventListener("keydown", handler);
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handler);
      menuButtonRef.current?.focus();
    };
  }, [menuOpen]);

  function toggleGroup(id: string): void {
    setExpanded((current) => {
      const opening = !current[id];
      const next = Object.fromEntries(groups.map((group) => [group.id, opening && group.id === id]));
      try {
        if (opening) window.localStorage.setItem(`ngaydoi.navigation.groups.v2.${user?.role ?? "guest"}`, id);
        else window.localStorage.removeItem(`ngaydoi.navigation.groups.v2.${user?.role ?? "guest"}`);
      } catch {
        // Navigation remains usable when storage is unavailable.
      }
      return next;
    });
  }

  function openCommand(): void {
    setMenuOpen(false);
    setCommandOpen(true);
  }

  return (
    <div className="dashboard app-shell">
      <header className="mobile-appbar app-mobile-bar">
        <a className="brand" href="/dashboard">Ngày <span>Đôi</span></a>
        <span className="app-mobile-title">{activeLabel(active)}</span>
        <nav aria-label="Thao tác nhanh trên mobile">
          <button type="button" aria-label="Tìm trong menu" onClick={openCommand}>⌕</button>
          <button
            ref={menuButtonRef}
            type="button"
            aria-label="Mở menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation-drawer"
            onClick={() => setMenuOpen(true)}
          >☰</button>
        </nav>
      </header>

      {menuOpen ? (
        <>
          <div className="app-drawer-backdrop" role="presentation" onMouseDown={() => setMenuOpen(false)} />
          <aside
            className="app-mobile-drawer"
            id="mobile-navigation-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Menu điều hướng"
            ref={drawerRef}
          >
            <header>
              <div className="app-mobile-user">
                <span className="app-user-avatar" aria-hidden="true">{user?.displayName?.trim().charAt(0).toUpperCase() || "N"}</span>
                <div>
                  <strong>{user?.displayName}</strong>
                  <span>{roleLabel(user?.role)}</span>
                  <small>{user?.email}</small>
                </div>
              </div>
              <button type="button" aria-label="Đóng menu" onClick={() => setMenuOpen(false)}>×</button>
            </header>
            <button className="app-nav-search mobile" type="button" onClick={openCommand}>
              <span aria-hidden="true">⌕</span>
              <span>Tìm trong menu</span>
              <kbd>⌘ K</kbd>
            </button>
            <nav className="app-mobile-navigation" aria-label="Menu theo quyền tài khoản">
              <NavigationGroups groups={groups} active={active} expanded={expanded} onToggle={toggleGroup} onNavigate={() => setMenuOpen(false)} idPrefix="mobile" />
            </nav>
            <button className="app-mobile-logout" type="button" onClick={() => void logout()}>Đăng xuất</button>
          </aside>
        </>
      ) : null}

      <div className="dash-shell">
        <aside className="sidebar navigation-sidebar" aria-label="Điều hướng chính">
          <a className="brand" href="/dashboard">Ngày <span>Đôi</span></a>
          <div className="app-sidebar-user">
            <span className="app-user-avatar" aria-hidden="true">{user?.displayName?.trim().charAt(0).toUpperCase() || "N"}</span>
            <div>
              <strong>{user?.displayName}</strong>
              <span>{roleLabel(user?.role)}</span>
              <small>{user?.email}</small>
            </div>
          </div>
          <button className="app-nav-search" type="button" onClick={openCommand} aria-keyshortcuts="Meta+K Control+K">
            <span aria-hidden="true">⌕</span>
            <span>Tìm trong menu</span>
            <kbd>⌘ K</kbd>
          </button>
          <nav className="app-sidebar-navigation" aria-label="Menu theo quyền tài khoản">
            <NavigationGroups groups={groups} active={active} expanded={expanded} onToggle={toggleGroup} idPrefix="desktop" />
          </nav>
          <button className="side-logout app-sidebar-logout" type="button" onClick={() => void logout()}>Đăng xuất</button>
        </aside>
        <main className="dash-main app-main-content" id="main-content" tabIndex={-1}>
          <Breadcrumbs items={breadcrumbItems} />
          {children}
        </main>
      </div>

      <CommandPalette open={commandOpen} groups={groups} onClose={() => setCommandOpen(false)} />
    </div>
  );
}
