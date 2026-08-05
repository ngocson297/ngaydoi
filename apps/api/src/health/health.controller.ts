import { Controller, Get, Res } from "@nestjs/common";
import type { Response } from "express";
import { SystemHealthService } from "../operations/system-health.service.js";

@Controller("health")
export class HealthController {
  constructor(private readonly health: SystemHealthService) {}

  @Get()
  check() { return this.health.live(); }

  @Get("live")
  live() { return this.health.live(); }

  @Get("ready")
  async ready(@Res({ passthrough: true }) response: Response) {
    const result = await this.health.ready();
    if (result.status !== "ready") response.status(503);
    return result;
  }

  @Get("status")
  status() { return this.health.publicStatus(); }
}
