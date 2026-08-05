import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard.js";
import { Roles } from "../auth/roles.decorator.js";
import { RolesGuard } from "../auth/roles.guard.js";
import { CreateWebhookDto } from "./dto/create-webhook.dto.js";
import { ToggleWebhookDto } from "./dto/toggle-webhook.dto.js";
import { MailService } from "./mail.service.js";
import { SystemHealthService } from "./system-health.service.js";
import { WebhookService } from "./webhook.service.js";

@Controller("admin/system")
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles("ADMIN", "STAFF")
export class OperationsController {
  constructor(
    private readonly health: SystemHealthService,
    private readonly mail: MailService,
    private readonly webhooks: WebhookService,
  ) {}

  @Get("overview")
  overview() { return this.health.adminOverview(); }

  @Get("emails")
  emails() { return this.mail.summary(); }

  @Post("emails/process")
  processEmails() { return this.mail.processPending(30); }

  @Post("emails/:id/retry")
  async retryEmail(@Param("id") id: string) { await this.mail.retry(id); return { success: true }; }

  @Get("webhooks")
  webhooksList() { return this.webhooks.list(); }

  @Post("webhooks")
  createWebhook(@Body() dto: CreateWebhookDto) { return this.webhooks.create(dto); }

  @Delete("webhooks/:id")
  deleteWebhook(@Param("id") id: string) { return this.webhooks.remove(id); }

  @Patch("webhooks/:id")
  toggleWebhook(@Param("id") id: string, @Body() dto: ToggleWebhookDto) { return this.webhooks.toggle(id, dto.active); }

  @Post("webhooks/:id/test")
  testWebhook(@Param("id") id: string) { return this.webhooks.test(id); }

  @Get("webhook-deliveries")
  webhookDeliveries(@Query("endpointId") endpointId?: string) { return this.webhooks.deliveries(endpointId); }

  @Post("webhook-deliveries/:id/retry")
  async retryWebhook(@Param("id") id: string) { await this.webhooks.retry(id); return { success: true }; }

  @Post("webhooks/process")
  processWebhooks() { return this.webhooks.processPending(30); }
}
