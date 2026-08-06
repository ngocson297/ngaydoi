import { defaultInvitationDesign } from "./invitations";
import type { InvitationTemplate, PublicInvitationData } from "./invitations";

export const GUEST_DRAFT_KEY = "ngaydoi.guest-invitation-draft.v1";

export interface GuestInvitationDraft {
  version: 1;
  templateKey: string;
  groomName: string;
  brideName: string;
  mainDate: string;
  greeting: string;
  importedWeddingId?: string;
  updatedAt: string;
}

export function createGuestDraft(templateKey = "classic-wine"): GuestInvitationDraft {
  return {
    version: 1,
    templateKey,
    groomName: "",
    brideName: "",
    mainDate: new Date(Date.now() + 120 * 86_400_000).toISOString().slice(0, 10),
    greeting: "Trân trọng kính mời bạn đến chung vui trong ngày trọng đại của chúng mình.",
    updatedAt: new Date().toISOString(),
  };
}

export function readGuestDraft(): GuestInvitationDraft | null {
  if (typeof window === "undefined") return null;
  try {
    const parsed = JSON.parse(window.localStorage.getItem(GUEST_DRAFT_KEY) ?? "null") as Partial<GuestInvitationDraft> | null;
    if (!parsed || parsed.version !== 1) return null;
    return {
      ...createGuestDraft(String(parsed.templateKey || "classic-wine")),
      ...parsed,
      version: 1,
      templateKey: String(parsed.templateKey || "classic-wine"),
      groomName: String(parsed.groomName || ""),
      brideName: String(parsed.brideName || ""),
      mainDate: String(parsed.mainDate || ""),
      greeting: String(parsed.greeting || ""),
      importedWeddingId: typeof parsed.importedWeddingId === "string" ? parsed.importedWeddingId : undefined,
      updatedAt: String(parsed.updatedAt || new Date().toISOString()),
    };
  } catch {
    return null;
  }
}

export function saveGuestDraft(draft: GuestInvitationDraft): void {
  window.localStorage.setItem(GUEST_DRAFT_KEY, JSON.stringify({ ...draft, updatedAt: new Date().toISOString() }));
}

export function clearGuestDraft(): void {
  if (typeof window !== "undefined") window.localStorage.removeItem(GUEST_DRAFT_KEY);
}

export function slugifyGuestDraft(value: string): string {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/đ/g, "d").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 64) || "ngay-doi";
}

export function guestDraftPreview(draft: GuestInvitationDraft, template?: InvitationTemplate): PublicInvitationData {
  const now = new Date().toISOString();
  const design = {
    ...defaultInvitationDesign,
    id: "guest-draft",
    weddingId: "guest-draft",
    templateKey: template?.key ?? draft.templateKey,
    paletteKey: template?.key ?? draft.templateKey,
    ...(template?.palette ?? {}),
    headingFont: (template?.headingFont ?? defaultInvitationDesign.headingFont) as typeof defaultInvitationDesign.headingFont,
    bodyFont: (template?.bodyFont ?? defaultInvitationDesign.bodyFont) as typeof defaultInvitationDesign.bodyFont,
    greeting: draft.greeting,
    createdAt: now,
    updatedAt: now,
    autosavedAt: now,
  };
  return {
    id: "guest-draft",
    slug: "ban-nhap-cua-ban",
    title: `Đám cưới ${draft.groomName || "Chú rể"} & ${draft.brideName || "Cô dâu"}`,
    groomName: draft.groomName || "Chú rể",
    brideName: draft.brideName || "Cô dâu",
    mainDate: draft.mainDate ? new Date(`${draft.mainDate}T10:00:00+07:00`).toISOString() : null,
    brideFatherName: null,
    brideMotherName: null,
    groomFatherName: null,
    groomMotherName: null,
    showBrideParents: false,
    showGroomParents: false,
    story: null,
    status: "DRAFT",
    timezone: "Asia/Ho_Chi_Minh",
    invitationDesign: design,
    events: [],
    mediaAssets: [],
  };
}
