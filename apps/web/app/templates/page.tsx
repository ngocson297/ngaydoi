"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { HomeMotion } from "../../components/home-motion";
import { CardSkeleton, EmptyState, InlineErrorState } from "../../components/ui";
import { apiRequest, toUiError, type UiError } from "../../lib/api";
import type { InvitationTemplate } from "../../lib/invitations";

const categoryLabels: Record<string, string> = {
  ALL: "Tất cả",
  VIETNAMESE: "Phong cách Việt",
  TRADITIONAL: "Truyền thống",
  ROMANTIC: "Lãng mạn",
  BOTANICAL: "Hoa lá & ngoài trời",
  MINIMAL: "Tối giản",
  MODERN: "Hiện đại",
  LUXURY: "Sang trọng",
  DESTINATION: "Destination",
};

const planLabels: Record<string, string> = {
  ALL: "Mọi gói",
  FREE: "Khởi đầu",
  STARTER: "Cơ bản",
  STANDARD: "Tiêu chuẩn",
  PREMIUM: "Cao cấp",
};

function TemplatePreview({ template }: { template: InvitationTemplate }) {
  const symbol = template.motif === "lotus" ? "❀" : template.motif === "star" || template.motif === "moon" ? "✦" : template.motif === "wave" || template.motif === "shell" ? "≈" : "ND";
  return (
    <div className={`catalog-template-preview motif-${template.motif} motion-${template.motion}`} style={{ background: template.palette.backgroundColor, color: template.palette.primaryColor }}>
      <div className="catalog-template-aura" style={{ background: template.palette.accentColor }} />
      <div className="catalog-template-frame" style={{ borderColor: template.palette.accentColor }}>
        <span className="catalog-template-symbol">{symbol}</span>
        <small>Save the date</small>
        <strong>Minh <i>&</i> Anh</strong>
        <time>18 · 10 · 2026</time>
      </div>
    </div>
  );
}

export default function TemplateCatalogPage() {
  const [templates, setTemplates] = useState<InvitationTemplate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<UiError | null>(null);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("ALL");
  const [plan, setPlan] = useState("ALL");
  const [onlyNew, setOnlyNew] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [onlyFavorites, setOnlyFavorites] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      setTemplates(await apiRequest<InvitationTemplate[]>("/templates"));
    } catch (reason) {
      setError(toUiError(reason, "Không thể tải thư viện template."));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("ngaydoi-template-favorites");
      if (saved) setFavorites(JSON.parse(saved) as string[]);
    } catch {
      setFavorites([]);
    }
    void load();
  }, [load]);

  const categories = useMemo(() => ["ALL", ...Array.from(new Set(templates.map((item) => item.category)))], [templates]);
  const filtered = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase("vi-VN");
    return templates.filter((template) => {
      if (category !== "ALL" && template.category !== category) return false;
      if (plan !== "ALL" && template.plan !== plan) return false;
      if (onlyNew && !template.isNew) return false;
      if (onlyFavorites && !favorites.includes(template.key)) return false;
      return !needle || `${template.name} ${template.style} ${template.description} ${template.tags.join(" ")}`.toLocaleLowerCase("vi-VN").includes(needle);
    });
  }, [category, favorites, onlyFavorites, onlyNew, plan, query, templates]);

  function toggleFavorite(key: string): void {
    setFavorites((current) => {
      const next = current.includes(key) ? current.filter((item) => item !== key) : [...current, key];
      window.localStorage.setItem("ngaydoi-template-favorites", JSON.stringify(next));
      return next;
    });
  }

  return (
    <main id="main-content" tabIndex={-1} className="template-catalog-page">
      <HomeMotion />
      <nav className="nav catalog-nav">
        <div className="container nav-inner">
          <a className="brand" href="/">Ngày <span>Đôi</span></a>
          <div className="nav-links"><a href="/">Trang chủ</a><a href="/pricing">Bảng giá</a><a href="/login">Đăng nhập</a><a className="btn btn-primary" href="/register">Tạo thiệp</a></div>
        </div>
      </nav>

      <header className="catalog-hero">
        <div className="catalog-orbit orbit-one" aria-hidden="true" />
        <div className="catalog-orbit orbit-two" aria-hidden="true" />
        <div className="container catalog-hero-grid">
          <div className="reveal-up" data-reveal>
            <span className="eyebrow">Template Library · 24 lựa chọn</span>
            <h1>Mỗi câu chuyện tình yêu cần một phong cách riêng.</h1>
            <p>Từ lễ cưới Việt truyền thống đến tiệc biển, garden wedding, Art Deco hay editorial hiện đại. Chọn một mẫu, sau đó tùy chỉnh màu, font, ảnh và nội dung trong Invitation Studio.</p>
            <div className="catalog-hero-actions"><a className="btn btn-primary" href="/register">Bắt đầu tạo thiệp</a><a className="btn btn-secondary" href="/i/minh-anh">Xem thiệp đang hoạt động</a></div>
          </div>
          <div className="catalog-stack reveal-scale" data-reveal aria-label="Xem trước nhiều phong cách template">
            {templates.slice(0, 3).map((template, index) => <div className={`catalog-stack-card stack-${index + 1}`} key={template.key}><TemplatePreview template={template} /></div>)}
          </div>
        </div>
      </header>

      <section className="container catalog-browser">
        <div className="catalog-filter-panel reveal-up" data-reveal>
          <label className="catalog-search"><span>Tìm theo phong cách, màu hoặc chủ đề</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ví dụ: hoa sen, tiệc tối, tối giản..." /></label>
          <label><span>Gói</span><select value={plan} onChange={(event) => setPlan(event.target.value)}>{Object.entries(planLabels).map(([key, label]) => <option key={key} value={key}>{label}</option>)}</select></label>
          <div className="catalog-toggle-row"><button className={onlyNew ? "active" : ""} type="button" onClick={() => setOnlyNew((value) => !value)}>✦ Mẫu mới</button><button className={onlyFavorites ? "active" : ""} type="button" onClick={() => setOnlyFavorites((value) => !value)}>♥ Yêu thích ({favorites.length})</button></div>
        </div>

        <div className="catalog-category-pills" data-reveal>
          {categories.map((key) => <button className={category === key ? "active" : ""} type="button" key={key} onClick={() => setCategory(key)}>{categoryLabels[key] ?? key}</button>)}
        </div>

        <div className="catalog-result-head"><div><strong>{filtered.length}</strong><span>template phù hợp</span></div><p>Free 3 · Cơ bản 8 · Tiêu chuẩn 16 · Cao cấp 24</p></div>

        {error ? <InlineErrorState description={error.message} requestId={error.requestId} onRetry={() => void load()} /> : null}
        {loading ? <div className="catalog-template-grid" aria-label="Đang tải thư viện template" aria-busy="true"><CardSkeleton lines={4} /><CardSkeleton lines={4} /><CardSkeleton lines={4} /><CardSkeleton lines={4} /><CardSkeleton lines={4} /><CardSkeleton lines={4} /></div> : !error && filtered.length === 0 ? <EmptyState icon="⌕" title="Không tìm thấy mẫu phù hợp" description="Thử xóa bớt bộ lọc hoặc dùng một từ khóa rộng hơn." primaryAction={{ label: "Xóa bộ lọc", onClick: () => { setQuery(""); setCategory("ALL"); setPlan("ALL"); setOnlyNew(false); setOnlyFavorites(false); } }} secondaryAction={{ label: "Tạo thiệp", href: "/register" }} /> : !error ? <div className="catalog-template-grid">
          {filtered.map((template) => {
            const favorite = favorites.includes(template.key);
            return <article className="catalog-template-card" key={template.key}>
              <TemplatePreview template={template} />
              <div className="catalog-template-content">
                <div className="catalog-template-meta"><span>{template.style}</span><em>{planLabels[template.plan]}</em></div>
                <h2>{template.name}</h2>
                <p>{template.description}</p>
                <div className="catalog-template-tags">{template.tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="catalog-template-actions"><a className="btn btn-primary compact" href="/register">Dùng mẫu này</a><button className={`catalog-favorite ${favorite ? "active" : ""}`} type="button" onClick={() => toggleFavorite(template.key)} aria-label={favorite ? "Bỏ khỏi yêu thích" : "Thêm vào yêu thích"}>{favorite ? "♥" : "♡"}</button></div>
              </div>
              {(template.isNew || template.badge) && <b className="catalog-card-badge">{template.isNew ? "Mới" : template.badge}</b>}
            </article>;
          })}
        </div> : null}
      </section>

      <section className="catalog-final-cta"><div className="container home-final-card reveal-scale" data-reveal><div><span className="eyebrow">Không bị giới hạn bởi template</span><h2>Chọn mẫu làm điểm bắt đầu, rồi biến thành thiệp của riêng bạn.</h2><p>Invitation Studio cho phép thay bảng màu, font, ảnh, nội dung và thứ tự từng phần. Mọi thay đổi được tự động lưu.</p></div><div className="home-final-actions"><a className="btn btn-primary" href="/register">Tạo thiệp miễn phí</a><a className="btn btn-secondary" href="/pricing">So sánh các gói</a></div></div></section>
    </main>
  );
}
