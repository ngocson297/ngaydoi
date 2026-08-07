export declare class UpdateIssueDto {
    status?: "OPEN" | "INVESTIGATING" | "FIXED" | "VERIFIED" | "CLOSED";
    severity?: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
    assignee?: string;
    resolution?: string;
}
