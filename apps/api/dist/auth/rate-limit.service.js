var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
let RateLimitService = class RateLimitService {
    buckets = new Map();
    consume(key, limit, windowMs) {
        const now = Date.now();
        const current = this.buckets.get(key);
        const bucket = !current || current.resetsAt <= now ? { count: 0, resetsAt: now + windowMs } : current;
        bucket.count += 1;
        this.buckets.set(key, bucket);
        if (bucket.count > limit) {
            throw new HttpException("Too many requests. Please try again later.", HttpStatus.TOO_MANY_REQUESTS);
        }
    }
};
RateLimitService = __decorate([
    Injectable()
], RateLimitService);
export { RateLimitService };
//# sourceMappingURL=rate-limit.service.js.map