import type { AuthenticatedUser } from "../auth/auth.types.js";
import { MemoriesService } from "./memories.service.js";
export declare class MemoriesController {
    private readonly memories;
    constructor(memories: MemoriesService);
    ownerOverview(weddingId: string, user: AuthenticatedUser): Promise<unknown>;
    ownerAssets(weddingId: string, cursor: string | undefined, limit: string | undefined, status: string | undefined, user: AuthenticatedUser): Promise<unknown>;
    ownerMedia(weddingId: string, assetId: string, user: AuthenticatedUser): Promise<unknown>;
    ownerArchive(weddingId: string, assetIds: string | undefined, user: AuthenticatedUser): Promise<unknown>;
    ownerSocial(weddingId: string, user: AuthenticatedUser): Promise<unknown>;
    moderateSocial(weddingId: string, kind: string, id: string, body: Record<string, unknown>, user: AuthenticatedUser): Promise<unknown>;
    deleteOwnerComment(weddingId: string, commentId: string, user: AuthenticatedUser): Promise<{
        deleted: true;
    }>;
    updateSettings(weddingId: string, body: Record<string, unknown>, user: AuthenticatedUser): Promise<unknown>;
    regenerateToken(weddingId: string, user: AuthenticatedUser): Promise<{
        token: string;
    }>;
    setFeatured(weddingId: string, assetId: string, body: Record<string, unknown>, user: AuthenticatedUser): Promise<unknown>;
    moderate(weddingId: string, assetId: string, body: Record<string, unknown>, user: AuthenticatedUser): Promise<unknown>;
    bulkModerate(weddingId: string, body: Record<string, unknown>, user: AuthenticatedUser): Promise<{
        updated: number;
    }>;
    remove(weddingId: string, assetId: string, user: AuthenticatedUser): Promise<{
        deleted: true;
    }>;
    publicOverview(token: string, viewer: string | undefined): Promise<unknown>;
    publicAssets(token: string, cursor: string | undefined, limit: string | undefined, viewer: string | undefined): Promise<unknown>;
    prepareUpload(token: string, body: Record<string, unknown>): Promise<unknown>;
    completeUpload(token: string, body: Record<string, unknown>): Promise<unknown>;
    upload(token: string, file: Express.Multer.File | undefined, body: Record<string, unknown>): Promise<unknown>;
    toggleReaction(token: string, assetId: string, body: Record<string, unknown>): Promise<unknown>;
    comments(token: string, assetId: string, cursor: string | undefined, limit: string | undefined, viewer: string | undefined): Promise<unknown>;
    addComment(token: string, assetId: string, body: Record<string, unknown>): Promise<unknown>;
    deleteOwnComment(token: string, assetId: string, commentId: string, body: Record<string, unknown>): Promise<{
        deleted: true;
    }>;
    publicArchive(token: string, assetIds: string | undefined): Promise<unknown>;
    guestbook(token: string, cursor: string | undefined, limit: string | undefined): Promise<unknown>;
    media(assetId: string, token: string, download: string | undefined): Promise<unknown>;
    qr(token: string): Promise<string>;
}
