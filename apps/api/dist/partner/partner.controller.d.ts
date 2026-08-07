import type { AuthenticatedUser } from "../auth/auth.types.js";
import { PartnerService } from "./partner.service.js";
export declare class PartnerController {
    private readonly partner;
    constructor(partner: PartnerService);
    overview(user: AuthenticatedUser): Promise<unknown>;
    apply(user: AuthenticatedUser, body: Record<string, unknown>): Promise<unknown>;
    profile(user: AuthenticatedUser, body: Record<string, unknown>): Promise<unknown>;
    client(user: AuthenticatedUser, body: Record<string, unknown>): Promise<unknown>;
    payout(user: AuthenticatedUser, body: Record<string, unknown>): Promise<unknown>;
    admin(): Promise<unknown>;
    review(user: AuthenticatedUser, id: string, body: Record<string, unknown>): Promise<unknown>;
    reviewPayout(user: AuthenticatedUser, id: string, body: Record<string, unknown>): Promise<unknown>;
}
