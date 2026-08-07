declare const WEDDING_STATUSES: readonly ["DRAFT", "READY_FOR_REVIEW", "PUBLISHED", "SUSPENDED", "EXPIRED", "ARCHIVED"];
export declare class UpdateLifecycleDto {
    status: (typeof WEDDING_STATUSES)[number];
}
export {};
