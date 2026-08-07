export declare class UpdateChecklistDto {
    status?: "NOT_STARTED" | "IN_PROGRESS" | "BLOCKED" | "PASSED" | "FAILED" | "WAIVED";
    owner?: string;
    notes?: string;
    evidenceUrl?: string;
}
