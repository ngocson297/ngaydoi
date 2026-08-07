import { PrismaService } from "../prisma/prisma.service.js";
import type { WeddingEntitlements } from "./commercial.types.js";
export declare class EntitlementsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private toPlanSummary;
    getWeddingEntitlements(weddingId: string): Promise<WeddingEntitlements>;
    assertGuestCapacity(weddingId: string, requested: number): Promise<void>;
    assertMediaCapacity(weddingId: string, requested?: number): Promise<void>;
    assertTemplateAccess(weddingId: string, templateKey: string): Promise<void>;
}
