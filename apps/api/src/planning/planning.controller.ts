import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import type { AuthenticatedUser } from "../auth/auth.types.js";
import { CurrentUser } from "../auth/current-user.decorator.js";
import { JwtAuthGuard } from "../auth/jwt-auth.guard.js";
import { Roles } from "../auth/roles.decorator.js";
import { RolesGuard } from "../auth/roles.guard.js";
import { PlanningService } from "./planning.service.js";

@Controller("weddings/:weddingId/planning")
@UseGuards(JwtAuthGuard)
export class PlanningController {
  constructor(private readonly planning: PlanningService) {}

  @Get()
  overview(@Param("weddingId") weddingId: string, @CurrentUser() user: AuthenticatedUser): Promise<unknown> {
    return this.planning.overview(weddingId, user);
  }

  @Post("bootstrap")
  bootstrap(@Param("weddingId") weddingId: string, @CurrentUser() user: AuthenticatedUser): Promise<{ created: number; skipped: number }> {
    return this.planning.bootstrap(weddingId, user);
  }

  @Post("tasks")
  create(@Param("weddingId") weddingId: string, @Body() body: Record<string, unknown>, @CurrentUser() user: AuthenticatedUser): Promise<unknown> {
    return this.planning.create(weddingId, body, user);
  }

  @Patch("tasks/:taskId")
  update(@Param("weddingId") weddingId: string, @Param("taskId") taskId: string, @Body() body: Record<string, unknown>, @CurrentUser() user: AuthenticatedUser): Promise<unknown> {
    return this.planning.update(weddingId, taskId, body, user);
  }

  @Delete("tasks/:taskId")
  remove(@Param("weddingId") weddingId: string, @Param("taskId") taskId: string, @CurrentUser() user: AuthenticatedUser): Promise<{ deleted: true }> {
    return this.planning.remove(weddingId, taskId, user);
  }
}

@Controller("admin/planning")
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles("ADMIN", "STAFF")
export class PlanningAdminController {
  constructor(private readonly planning: PlanningService) {}

  @Post("reminders/process")
  processReminders(): Promise<{ processed: number }> {
    return this.planning.processReminders();
  }
}
