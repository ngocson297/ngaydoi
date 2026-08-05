import { HttpException, HttpStatus, Injectable } from "@nestjs/common";

interface Bucket {
  count: number;
  resetsAt: number;
}

@Injectable()
export class RateLimitService {
  private readonly buckets = new Map<string, Bucket>();

  consume(key: string, limit: number, windowMs: number): void {
    const now = Date.now();
    const current = this.buckets.get(key);
    const bucket = !current || current.resetsAt <= now ? { count: 0, resetsAt: now + windowMs } : current;
    bucket.count += 1;
    this.buckets.set(key, bucket);

    if (bucket.count > limit) {
      throw new HttpException("Too many requests. Please try again later.", HttpStatus.TOO_MANY_REQUESTS);
    }
  }
}
