import type { Response } from "express";
import { SystemHealthService } from "../operations/system-health.service.js";
export declare class HealthController {
    private readonly health;
    constructor(health: SystemHealthService);
    check(): {
        status: string;
        service: string;
        version: string;
        release: string;
        uptimeSeconds: number;
        timestamp: string;
    };
    live(): {
        status: string;
        service: string;
        version: string;
        release: string;
        uptimeSeconds: number;
        timestamp: string;
    };
    ready(response: Response): Promise<{
        status: string;
        checks: {
            database: {
                ok: boolean;
                latencyMs?: number;
                detail: string;
            };
            storage: {
                provider: string;
                ok: boolean;
                detail: string;
            };
            configuration: {
                ok: boolean;
            };
        };
        durationMs: number;
        timestamp: string;
    }>;
    status(): Promise<{
        status: string;
        services: {
            website: string;
            api: string;
            database: string;
            media: string;
        };
        updatedAt: string;
    }>;
}
