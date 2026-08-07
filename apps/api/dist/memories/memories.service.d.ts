import { StreamableFile } from "@nestjs/common";
import type { AuthenticatedUser } from "../auth/auth.types.js";
import { RateLimitService } from "../auth/rate-limit.service.js";
import { StorageService } from "../common/storage/storage.service.js";
import { PrismaService } from "../prisma/prisma.service.js";
export declare class MemoriesService {
    private readonly prisma;
    private readonly storage;
    private readonly rateLimit;
    constructor(prisma: PrismaService, storage: StorageService, rateLimit: RateLimitService);
    private access;
    private ensureAlbum;
    private uploadLimits;
    private albumUsage;
    private assertCapacity;
    private validateUploadMetadata;
    private actorHash;
    private ticketSecret;
    private signUploadTicket;
    private verifyUploadTicket;
    private resolveInvitation;
    private assetMediaUrl;
    private decoratePublicAssets;
    private publicAssetPage;
    ownerOverview(weddingId: string, user: AuthenticatedUser): Promise<unknown>;
    private ownerAssetPage;
    ownerAssets(weddingId: string, user: AuthenticatedUser, cursor?: string, limitValue?: unknown, status?: string): Promise<unknown>;
    publicOverview(token: string, viewerKey?: string): Promise<unknown>;
    publicAssets(token: string, cursor?: string, limitValue?: unknown, viewerKey?: string): Promise<unknown>;
    updateSettings(weddingId: string, body: Record<string, unknown>, user: AuthenticatedUser): Promise<unknown>;
    regenerateToken(weddingId: string, user: AuthenticatedUser): Promise<{
        token: string;
    }>;
    private createAssetFromMetadata;
    prepareUpload(token: string, body: Record<string, unknown>): Promise<unknown>;
    completeUpload(token: string, body: Record<string, unknown>): Promise<unknown>;
    upload(token: string, file: Express.Multer.File | undefined, body: Record<string, unknown>): Promise<unknown>;
    private parseArchiveAssetIds;
    private approvedArchiveAssets;
    private archiveStream;
    publicArchive(token: string, assetIdsValue?: unknown): Promise<StreamableFile>;
    ownerArchive(weddingId: string, user: AuthenticatedUser, assetIdsValue?: unknown): Promise<StreamableFile>;
    toggleReaction(token: string, assetId: string, body: Record<string, unknown>): Promise<{
        reacted: boolean;
        count: number;
    }>;
    comments(token: string, assetId: string, cursor?: string, limitValue?: unknown, viewerKey?: unknown): Promise<unknown>;
    addComment(token: string, assetId: string, body: Record<string, unknown>): Promise<unknown>;
    deleteOwnComment(token: string, assetId: string, commentId: string, body: Record<string, unknown>): Promise<{
        deleted: true;
    }>;
    private publicGuestbookPage;
    guestbook(token: string, cursor?: string, limitValue?: unknown): Promise<unknown>;
    ownerSocial(weddingId: string, user: AuthenticatedUser): Promise<unknown>;
    moderateSocial(weddingId: string, kind: string, id: string, body: Record<string, unknown>, user: AuthenticatedUser): Promise<unknown>;
    deleteOwnerComment(weddingId: string, commentId: string, user: AuthenticatedUser): Promise<{
        deleted: true;
    }>;
    moderate(weddingId: string, assetId: string, body: Record<string, unknown>, user: AuthenticatedUser): Promise<unknown>;
    setFeatured(weddingId: string, assetId: string, body: Record<string, unknown>, user: AuthenticatedUser): Promise<unknown>;
    bulkModerate(weddingId: string, body: Record<string, unknown>, user: AuthenticatedUser): Promise<{
        updated: number;
    }>;
    remove(weddingId: string, assetId: string, user: AuthenticatedUser): Promise<{
        deleted: true;
    }>;
    media(assetId: string, token: string, download?: boolean): Promise<StreamableFile>;
    ownerMedia(weddingId: string, assetId: string, user: AuthenticatedUser): Promise<StreamableFile>;
    qr(token: string): Promise<string>;
}
