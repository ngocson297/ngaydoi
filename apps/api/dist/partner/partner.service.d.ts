import { PrismaService } from "../prisma/prisma.service.js";
import type { AuthenticatedUser } from "../auth/auth.types.js";
export declare class PartnerService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private membership;
    overview(user: AuthenticatedUser): Promise<unknown>;
    apply(user: AuthenticatedUser, body: Record<string, unknown>): Promise<unknown>;
    updateProfile(user: AuthenticatedUser, body: Record<string, unknown>): Promise<unknown>;
    addClient(user: AuthenticatedUser, body: Record<string, unknown>): Promise<unknown>;
    requestPayout(user: AuthenticatedUser, body: Record<string, unknown>): Promise<unknown>;
    adminOverview(): Promise<unknown>;
    reviewPartner(user: AuthenticatedUser, id: string, body: Record<string, unknown>): Promise<unknown>;
    reviewPayout(user: AuthenticatedUser, id: string, body: Record<string, unknown>): Promise<unknown>;
}
