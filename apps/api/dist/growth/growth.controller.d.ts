import type { AuthenticatedUser } from "../auth/auth.types.js";
import { GrowthService } from "./growth.service.js";
export declare class GrowthController {
    private readonly growth;
    constructor(growth: GrowthService);
    track(body: Record<string, unknown>): Promise<{
        accepted: true;
    }>;
    onboarding(user: AuthenticatedUser): Promise<unknown>;
    onboardingUpdate(user: AuthenticatedUser, body: Record<string, unknown>): Promise<unknown>;
    support(user: AuthenticatedUser, body: Record<string, unknown>): Promise<unknown>;
    mySupport(user: AuthenticatedUser): Promise<unknown>;
    domain(user: AuthenticatedUser, body: Record<string, unknown>): Promise<unknown>;
    domains(user: AuthenticatedUser): Promise<unknown>;
    referral(user: AuthenticatedUser, body: Record<string, unknown>): Promise<unknown>;
    referrals(user: AuthenticatedUser): Promise<unknown>;
    admin(): Promise<unknown>;
    ticket(id: string, body: Record<string, unknown>): Promise<unknown>;
    domainUpdate(id: string, body: Record<string, unknown>): Promise<unknown>;
}
