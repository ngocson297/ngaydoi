import { Module } from "@nestjs/common";
import { PlanningAdminController, PlanningController } from "./planning.controller.js";
import { PlanningService } from "./planning.service.js";

@Module({
  controllers: [PlanningController, PlanningAdminController],
  providers: [PlanningService],
  exports: [PlanningService],
})
export class PlanningModule {}
