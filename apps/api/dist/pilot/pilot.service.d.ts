import { PrismaService } from "../prisma/prisma.service.js";
import type { CreateAnnouncementDto } from "./dto/create-announcement.dto.js";
import type { CreateIssueDto } from "./dto/create-issue.dto.js";
import type { UpdateChecklistDto } from "./dto/update-checklist.dto.js";
import type { UpdateIssueDto } from "./dto/update-issue.dto.js";
export declare class PilotService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    overview(): Promise<{
        checklist: {
            id: string;
            status: import("../generated/prisma/enums.js").PilotItemStatus;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            owner: string | null;
            code: string;
            description: string | null;
            sortOrder: number;
            completedAt: Date | null;
            notes: string | null;
            category: string;
            evidenceUrl: string | null;
        }[];
        issues: {
            id: string;
            status: import("../generated/prisma/enums.js").PilotIssueStatus;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            description: string;
            resolution: string | null;
            resolvedAt: Date | null;
            severity: import("../generated/prisma/enums.js").PilotIssueSeverity;
            area: string;
            reporter: string | null;
            assignee: string | null;
            reproduction: string | null;
            dueAt: Date | null;
        }[];
        announcements: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            message: string;
            active: boolean;
            title: string;
            startsAt: Date;
            endsAt: Date | null;
            level: string;
        }[];
        metrics: {
            completion: number;
            blockers: number;
            totalChecklist: number;
            openIssues: number;
        };
        goLiveReady: boolean;
    }>;
    updateChecklist(id: string, dto: UpdateChecklistDto): Promise<{
        id: string;
        status: import("../generated/prisma/enums.js").PilotItemStatus;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        owner: string | null;
        code: string;
        description: string | null;
        sortOrder: number;
        completedAt: Date | null;
        notes: string | null;
        category: string;
        evidenceUrl: string | null;
    }>;
    createIssue(dto: CreateIssueDto): import("../generated/prisma/models.js").Prisma__PilotIssueClient<{
        id: string;
        status: import("../generated/prisma/enums.js").PilotIssueStatus;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        resolution: string | null;
        resolvedAt: Date | null;
        severity: import("../generated/prisma/enums.js").PilotIssueSeverity;
        area: string;
        reporter: string | null;
        assignee: string | null;
        reproduction: string | null;
        dueAt: Date | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    updateIssue(id: string, dto: UpdateIssueDto): Promise<{
        id: string;
        status: import("../generated/prisma/enums.js").PilotIssueStatus;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        resolution: string | null;
        resolvedAt: Date | null;
        severity: import("../generated/prisma/enums.js").PilotIssueSeverity;
        area: string;
        reporter: string | null;
        assignee: string | null;
        reproduction: string | null;
        dueAt: Date | null;
    }>;
    createAnnouncement(dto: CreateAnnouncementDto): import("../generated/prisma/models.js").Prisma__SystemAnnouncementClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        message: string;
        active: boolean;
        title: string;
        startsAt: Date;
        endsAt: Date | null;
        level: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    toggleAnnouncement(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        message: string;
        active: boolean;
        title: string;
        startsAt: Date;
        endsAt: Date | null;
        level: string;
    }>;
    publicAnnouncements(): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        message: string;
        active: boolean;
        title: string;
        startsAt: Date;
        endsAt: Date | null;
        level: string;
    }[]>;
}
