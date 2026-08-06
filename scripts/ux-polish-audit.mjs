import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const failures = [];
const read = (path) => readFileSync(join(root, path), "utf8");
const requireFile = (path) => {
  if (!existsSync(join(root, path))) failures.push(`${path}: missing required file`);
};
const requireText = (path, pattern, message) => {
  const source = read(path);
  if (!pattern.test(source)) failures.push(`${path}: ${message}`);
};

requireFile("apps/web/app/contact/page.tsx");
requireText("apps/web/app/page.tsx", /href="\/contact"/, "Home navigation must expose the Contact page");
requireText("apps/web/app/page.tsx", /home-template-cta/, "Home template CTA must use the stable pill-shaped class");
requireText("apps/web/components/app-shell.tsx", /navigation\.groups\.v2/, "Sidebar must use the compact accordion state key");
requireText("apps/web/app/design-system.css", /\.navigation-sidebar\s*\{[\s\S]*?position:\s*fixed;/, "Desktop sidebar must remain fixed in the viewport");
requireText("apps/web/app/design-system.css", /\.planning-check\s*\{[\s\S]*?aspect-ratio:\s*1;/, "Planning checkbox must preserve a square aspect ratio");
requireText("apps/web/app/design-system.css", /\.catalog-favorite[\s\S]*?border-radius:\s*50%/, "Template favorite control must be circular");
requireText("apps/web/app/orders/\[id\]/page.tsx", /receipt-document/, "Order page must use the professional receipt layout");
requireText("apps/web/app/pricing/page.tsx", /payment-total-focus/, "Pricing total must use the focused payment summary");
requireText("apps/web/components/home-motion.tsx", /visibilitychange/, "Home motion must pause or reset when the tab is inactive");
requireText("apps/web/app/design-system.css", /content-visibility:\s*auto/, "Below-the-fold Home sections must use content visibility containment");

if (failures.length) {
  console.error(`UX polish audit failed (${failures.length}):\n${failures.join("\n")}`);
  process.exit(1);
}

console.log("UX polish audit passed: sidebar, planning, commerce, templates, Home performance and Contact checks succeeded.");
