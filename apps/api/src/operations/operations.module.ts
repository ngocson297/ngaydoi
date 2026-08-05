import { Global, Module } from "@nestjs/common";
import { EnvironmentService } from "../common/config/environment.service.js";
import { StorageService } from "../common/storage/storage.service.js";
import { MailService } from "./mail.service.js";
import { OperationsController } from "./operations.controller.js";
import { SystemHealthService } from "./system-health.service.js";
import { WebhookService } from "./webhook.service.js";

@Global()
@Module({
  controllers: [OperationsController],
  providers: [EnvironmentService, StorageService, MailService, WebhookService, SystemHealthService],
  exports: [EnvironmentService, StorageService, MailService, WebhookService, SystemHealthService],
})
export class OperationsModule {}
