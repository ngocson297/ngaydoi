export declare class CreateWebhookDto {
    name: string;
    url: string;
    events: string[];
    secret?: string;
    active?: boolean;
}
