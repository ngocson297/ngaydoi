import { Module } from "@nestjs/common";
import { EventOperationsController } from "./event-operations.controller.js";
import { EventOperationsService } from "./event-operations.service.js";

@Module({ controllers: [EventOperationsController], providers: [EventOperationsService] })
export class EventOperationsModule {}
