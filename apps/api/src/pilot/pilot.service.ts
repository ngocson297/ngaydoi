import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import type { CreateAnnouncementDto } from "./dto/create-announcement.dto.js";
import type { CreateIssueDto } from "./dto/create-issue.dto.js";
import type { UpdateChecklistDto } from "./dto/update-checklist.dto.js";
import type { UpdateIssueDto } from "./dto/update-issue.dto.js";

@Injectable()
export class PilotService {
  constructor(private readonly prisma: PrismaService) {}
  async overview() {
    const [checklist, issues, announcements] = await Promise.all([
      this.prisma.pilotChecklistItem.findMany({ orderBy: [{ category: "asc" }, { sortOrder: "asc" }] }),
      this.prisma.pilotIssue.findMany({ orderBy: [{ severity: "desc" }, { createdAt: "desc" }] }),
      this.prisma.systemAnnouncement.findMany({ orderBy: { createdAt: "desc" }, take: 20 }),
    ]);
    const blockers = issues.filter((item) => ["OPEN","INVESTIGATING"].includes(item.status) && ["HIGH","CRITICAL"].includes(item.severity)).length;
    const passed = checklist.filter((item) => ["PASSED","WAIVED"].includes(item.status)).length;
    const completion = checklist.length ? Math.round((passed / checklist.length) * 100) : 0;
    return { checklist, issues, announcements, metrics: { completion, blockers, totalChecklist: checklist.length, openIssues: issues.filter((item) => !["VERIFIED","CLOSED"].includes(item.status)).length }, goLiveReady: completion === 100 && blockers === 0 };
  }
  async updateChecklist(id: string, dto: UpdateChecklistDto) {
    const found = await this.prisma.pilotChecklistItem.findUnique({ where: { id } });
    if (!found) throw new NotFoundException("Không tìm thấy checklist item");
    return this.prisma.pilotChecklistItem.update({ where: { id }, data: { ...dto, completedAt: dto.status === "PASSED" ? new Date() : dto.status ? null : undefined } });
  }
  createIssue(dto: CreateIssueDto) { return this.prisma.pilotIssue.create({ data: dto }); }
  async updateIssue(id: string, dto: UpdateIssueDto) {
    const found = await this.prisma.pilotIssue.findUnique({ where: { id } });
    if (!found) throw new NotFoundException("Không tìm thấy issue");
    return this.prisma.pilotIssue.update({ where: { id }, data: { ...dto, resolvedAt: dto.status === "VERIFIED" || dto.status === "CLOSED" ? new Date() : undefined } });
  }
  createAnnouncement(dto: CreateAnnouncementDto) { return this.prisma.systemAnnouncement.create({ data: { title: dto.title, message: dto.message, level: dto.level, endsAt: dto.endsAt ? new Date(dto.endsAt) : null } }); }
  async toggleAnnouncement(id: string) {
    const item = await this.prisma.systemAnnouncement.findUnique({ where: { id } });
    if (!item) throw new NotFoundException("Không tìm thấy thông báo");
    return this.prisma.systemAnnouncement.update({ where: { id }, data: { active: !item.active } });
  }
  publicAnnouncements() {
    const now = new Date();
    return this.prisma.systemAnnouncement.findMany({ where: { active: true, startsAt: { lte: now }, OR: [{ endsAt: null }, { endsAt: { gt: now } }] }, orderBy: { startsAt: "desc" } });
  }
}
