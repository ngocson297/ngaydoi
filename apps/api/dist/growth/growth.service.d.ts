import { PrismaService } from "../prisma/prisma.service.js";
import type { AuthenticatedUser } from "../auth/auth.types.js";
export declare class GrowthService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    track(body: Record<string, unknown>, user?: AuthenticatedUser): Promise<{
        accepted: true;
    }>;
    onboarding(user: AuthenticatedUser): Promise<unknown>;
    updateOnboarding(user: AuthenticatedUser, body: Record<string, unknown>): Promise<unknown>;
    createSupport(user: AuthenticatedUser, body: Record<string, unknown>): Promise<unknown>;
    mySupport(user: AuthenticatedUser): Promise<unknown>;
    requestDomain(user: AuthenticatedUser, body: Record<string, unknown>): Promise<unknown>;
    myDomains(user: AuthenticatedUser): Promise<unknown>;
    createReferral(user: AuthenticatedUser, body: Record<string, unknown>): Promise<unknown>;
    myReferrals(user: AuthenticatedUser): Promise<unknown>;
    adminOverview(): Promise<unknown>;
    updateTicket(id: string, body: Record<string, unknown>): Promise<unknown>;
    updateDomain(id: string, body: Record<string, unknown>): Promise<unknown>;
}
