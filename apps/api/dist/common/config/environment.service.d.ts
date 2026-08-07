import { type OnApplicationBootstrap } from "@nestjs/common";
export interface EnvironmentCheck {
    key: string;
    status: "ok" | "warning" | "error";
    message: string;
}
export declare class EnvironmentService implements OnApplicationBootstrap {
    private readonly logger;
    onApplicationBootstrap(): void;
    report(): EnvironmentCheck[];
}
