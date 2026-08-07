export declare class CreateIssueDto {
    title: string;
    description: string;
    severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
    area: string;
    reporter?: string;
    assignee?: string;
    reproduction?: string;
}
