var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Global, Module } from "@nestjs/common";
import { EnvironmentService } from "../common/config/environment.service.js";
import { StorageService } from "../common/storage/storage.service.js";
import { MailService } from "./mail.service.js";
import { OperationsController } from "./operations.controller.js";
import { SystemHealthService } from "./system-health.service.js";
import { WebhookService } from "./webhook.service.js";
let OperationsModule = class OperationsModule {
};
OperationsModule = __decorate([
    Global(),
    Module({
        controllers: [OperationsController],
        providers: [EnvironmentService, StorageService, MailService, WebhookService, SystemHealthService],
        exports: [EnvironmentService, StorageService, MailService, WebhookService, SystemHealthService],
    })
], OperationsModule);
export { OperationsModule };
//# sourceMappingURL=operations.module.js.map