export declare class RateLimitService {
    private readonly buckets;
    consume(key: string, limit: number, windowMs: number): void;
}
