import { Body, Controller, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard.js";
import { Roles } from "../auth/roles.decorator.js";
import { RolesGuard } from "../auth/roles.guard.js";
import { CreateAnnouncementDto } from "./dto/create-announcement.dto.js";
import { CreateIssueDto } from "./dto/create-issue.dto.js";
import { UpdateChecklistDto } from "./dto/update-checklist.dto.js";
import { UpdateIssueDto } from "./dto/update-issue.dto.js";
import { PilotService } from "./pilot.service.js";
@Controller()
export class PilotController {
  constructor(private readonly pilot: PilotService) {}
  @Get("public/announcements") announcements() { return this.pilot.publicAnnouncements(); }
  @Get("admin/pilot") @UseGuards(JwtAuthGuard, RolesGuard) @Roles("ADMIN","STAFF") overview() { return this.pilot.overview(); }
  @Patch("admin/pilot/checklist/:id") @UseGuards(JwtAuthGuard, RolesGuard) @Roles("ADMIN","STAFF") checklist(@Param("id") id: string, @Body() dto: UpdateChecklistDto) { return this.pilot.updateChecklist(id, dto); }
  @Post("admin/pilot/issues") @UseGuards(JwtAuthGuard, RolesGuard) @Roles("ADMIN","STAFF") issue(@Body() dto: CreateIssueDto) { return this.pilot.createIssue(dto); }
  @Patch("admin/pilot/issues/:id") @UseGuards(JwtAuthGuard, RolesGuard) @Roles("ADMIN","STAFF") issueUpdate(@Param("id") id: string, @Body() dto: UpdateIssueDto) { return this.pilot.updateIssue(id, dto); }
  @Post("admin/pilot/announcements") @UseGuards(JwtAuthGuard, RolesGuard) @Roles("ADMIN","STAFF") announcement(@Body() dto: CreateAnnouncementDto) { return this.pilot.createAnnouncement(dto); }
  @Patch("admin/pilot/announcements/:id/toggle") @UseGuards(JwtAuthGuard, RolesGuard) @Roles("ADMIN","STAFF") toggle(@Param("id") id: string) { return this.pilot.toggleAnnouncement(id); }
}
