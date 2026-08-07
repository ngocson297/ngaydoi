import type { AuthenticatedUser } from "../auth/auth.types.js";
import { PlanningService } from "./planning.service.js";
export declare class PlanningController {
    private readonly planning;
    constructor(planning: PlanningService);
    overview(weddingId: string, user: AuthenticatedUser): Promise<unknown>;
    bootstrap(weddingId: string, user: AuthenticatedUser): Promise<{
        created: number;
        skipped: number;
    }>;
    create(weddingId: string, body: Record<string, unknown>, user: AuthenticatedUser): Promise<unknown>;
    update(weddingId: string, taskId: string, body: Record<string, unknown>, user: AuthenticatedUser): Promise<unknown>;
    remove(weddingId: string, taskId: string, user: AuthenticatedUser): Promise<{
        deleted: true;
    }>;
}
export declare class PlanningAdminController {
    private readonly planning;
    constructor(planning: PlanningService);
    processReminders(): Promise<{
        processed: number;
    }>;
}
