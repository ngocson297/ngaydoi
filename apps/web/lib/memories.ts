import { API_URL } from "./api";

export type MemoryStatus = "PENDING" | "APPROVED" | "REJECTED" | "ARCHIVED";
export type MemoryType = "IMAGE" | "VIDEO";

export interface MemoryAsset {
  id: string;
  type: MemoryType;
  status?: MemoryStatus;
  mimeType: string;
  sizeBytes: number;
  originalName?: string;
  uploaderName: string | null;
  uploaderMessage: string | null;
  rejectionReason?: string | null;
  moderationNote?: string | null;
  approvedAt?: string | null;
  rejectedAt?: string | null;
  createdAt: string;
  invitation?: { guest: { fullName: string } } | null;
}

export interface MemoryOwnerOverview {
  id: string;
  weddingId: string;
  token: string;
  title: string;
  description: string;
  thankYouTitle: string;
  thankYouMessage: string;
  uploadEnabled: boolean;
  publicEnabled: boolean;
  moderationRequired: boolean;
  showUploaderName: boolean;
  closesAt: string | null;
  access: "OWNER" | "EDIT" | "VIEW";
  wedding: { id: string; title: string; brideName: string; groomName: string; mainDate: string | null; slug: string };
  assets: MemoryAsset[];
  metrics: { total: number; pending: number; approved: number; rejected: number; archived: number; totalBytes: number };
}

export interface PublicMemoryAlbum {
  id: string;
  token: string;
  title: string;
  description: string;
  thankYouTitle: string;
  thankYouMessage: string;
  uploadEnabled: boolean;
  showUploaderName: boolean;
  closesAt: string | null;
  wedding: { title: string; brideName: string; groomName: string; mainDate: string | null; coverImageUrl: string | null };
  assets: MemoryAsset[];
}

export const memoryMediaUrl = (assetId: string, token: string): string => `${API_URL}/memories/assets/${encodeURIComponent(assetId)}?token=${encodeURIComponent(token)}`;
export const memoryAlbumUrl = (token: string): string => `/memories/${encodeURIComponent(token)}`;
