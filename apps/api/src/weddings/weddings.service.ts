import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { EntitlementsService } from "../commercial/entitlements.service.js";
import type { AuthenticatedUser } from "../auth/auth.types.js";
import type { Prisma } from "../generated/prisma/client.js";
import { PrismaService } from "../prisma/prisma.service.js";
import { InvitationService } from "../invitation/invitation.service.js";
import { CreateCollaboratorDto } from "./dto/create-collaborator.dto.js";
import { CreateEventDto } from "./dto/create-event.dto.js";
import { CreateWeddingDto } from "./dto/create-wedding.dto.js";
import { DuplicateWeddingDto } from "./dto/duplicate-wedding.dto.js";
import { UpdateEventDto } from "./dto/update-event.dto.js";
import { UpdateLifecycleDto } from "./dto/update-lifecycle.dto.js";
import { UpdateWeddingDto } from "./dto/update-wedding.dto.js";

type AccessLevel = "OWNER" | "EDIT" | "VIEW";
type WeddingStatusValue = UpdateLifecycleDto["status"];

const RESERVED_SLUGS = new Set([
  "admin",
  "api",
  "account",
  "dashboard",
  "login",
  "register",
  "forgot-password",
  "reset-password",
  "verify-email",
  "weddings",
  "new",
]);

const lifecycleTransitions: Record<WeddingStatusValue, WeddingStatusValue[]> = {
  DRAFT: ["READY_FOR_REVIEW", "ARCHIVED"],
  READY_FOR_REVIEW: ["DRAFT", "PUBLISHED", "ARCHIVED"],
  PUBLISHED: ["SUSPENDED", "EXPIRED", "ARCHIVED"],
  SUSPENDED: ["PUBLISHED", "EXPIRED", "ARCHIVED"],
  EXPIRED: ["DRAFT", "ARCHIVED"],
  ARCHIVED: ["DRAFT"],
};

@Injectable()
export class WeddingsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly invitationService: InvitationService,
    private readonly entitlements: EntitlementsService,
  ) {}

  private normalizeSlug(slug: string): string {
    return slug.trim().toLowerCase();
  }

  private normalizeEmail(email: string): string {
    return email.trim().toLowerCase();
  }

  private ensureSlugAllowed(slug: string): void {
    if (RESERVED_SLUGS.has(slug)) throw new ConflictException("This invitation URL is reserved");
  }

  private async assertSlugAvailable(slug: string, excludeWeddingId?: string): Promise<void> {
    this.ensureSlugAllowed(slug);
    const existing = await this.prisma.wedding.findFirst({
      where: { slug, ...(excludeWeddingId ? { id: { not: excludeWeddingId } } : {}) },
      select: { id: true },
    });
    if (existing) throw new ConflictException("This invitation URL is already in use");
  }

  private async getAccess(weddingId: string, user: Pick<AuthenticatedUser, "id" | "email">) {
    const wedding = await this.prisma.wedding.findUnique({
      where: { id: weddingId },
      include: {
        collaborators: {
          where: {
            status: "ACCEPTED",
            OR: [{ userId: user.id }, { email: this.normalizeEmail(user.email) }],
          },
          take: 1,
        },
      },
    });
    if (!wedding) throw new NotFoundException("Wedding not found");
    if (wedding.ownerId === user.id) return { wedding, access: "OWNER" as AccessLevel };
    const collaboration = wedding.collaborators[0];
    if (!collaboration) throw new NotFoundException("Wedding not found");
    return { wedding, access: collaboration.permission as AccessLevel };
  }

  private requireEdit(access: AccessLevel): void {
    if (access === "VIEW") throw new ForbiddenException("You only have view access to this wedding");
  }

  private requireOwner(access: AccessLevel): void {
    if (access !== "OWNER") throw new ForbiddenException("Only the wedding owner can perform this action");
  }

  private buildChecklist(wedding: {
    brideName: string;
    groomName: string;
    mainDate: Date | null;
    brideFatherName: string | null;
    brideMotherName: string | null;
    groomFatherName: string | null;
    groomMotherName: string | null;
    events: Array<{ id: string }>;
  }) {
    const coupleComplete = Boolean(wedding.brideName.trim() && wedding.groomName.trim());
    const familyComplete = Boolean(
      wedding.brideFatherName || wedding.brideMotherName || wedding.groomFatherName || wedding.groomMotherName,
    );
    const eventComplete = wedding.events.length > 0;
    const dateComplete = Boolean(wedding.mainDate);
    const completed = [coupleComplete, dateComplete, eventComplete].filter(Boolean).length;
    return {
      completed,
      required: 3,
      readyToReview: coupleComplete && dateComplete && eventComplete,
      items: [
        { key: "couple", label: "Thông tin cô dâu chú rể", complete: coupleComplete, required: true },
        { key: "date", label: "Ngày cưới chính", complete: dateComplete, required: true },
        { key: "events", label: "Ít nhất một sự kiện", complete: eventComplete, required: true },
        { key: "family", label: "Thông tin gia đình", complete: familyComplete, required: false },
      ],
    };
  }

  async getSlugAvailability(rawSlug: string, excludeWeddingId?: string) {
    const slug = this.normalizeSlug(rawSlug);
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) || slug.length < 3 || slug.length > 80) {
      return { slug, available: false, reason: "Slug must contain 3-80 lowercase letters, numbers or hyphens" };
    }
    if (RESERVED_SLUGS.has(slug)) return { slug, available: false, reason: "This URL is reserved" };
    const existing = await this.prisma.wedding.findFirst({
      where: { slug, ...(excludeWeddingId ? { id: { not: excludeWeddingId } } : {}) },
      select: { id: true },
    });
    return { slug, available: !existing, reason: existing ? "This URL is already in use" : null };
  }

  async list(user: AuthenticatedUser) {
    const weddings = await this.prisma.wedding.findMany({
      where: {
        OR: [
          { ownerId: user.id },
          {
            collaborators: {
              some: {
                status: "ACCEPTED",
                OR: [{ userId: user.id }, { email: this.normalizeEmail(user.email) }],
              },
            },
          },
        ],
      },
      orderBy: { updatedAt: "desc" },
      include: {
        events: { orderBy: [{ sortOrder: "asc" }, { startsAt: "asc" }], take: 3 },
        activePlan: { select: { code: true, name: true, guestLimit: true, mediaLimit: true } },
        _count: { select: { events: true, guests: true, collaborators: true, orders: true } },
        collaborators: {
          where: { status: "ACCEPTED", OR: [{ userId: user.id }, { email: this.normalizeEmail(user.email) }] },
          take: 1,
          select: { permission: true },
        },
      },
    });

    return weddings.map((wedding) => ({
      ...wedding,
      access: wedding.ownerId === user.id ? "OWNER" : (wedding.collaborators[0]?.permission ?? "VIEW"),
      collaborators: undefined,
    }));
  }

  async getOne(id: string, user: AuthenticatedUser) {
    const accessRecord = await this.getAccess(id, user);
    const wedding = await this.prisma.wedding.findUnique({
      where: { id },
      include: {
        events: { orderBy: [{ sortOrder: "asc" }, { startsAt: "asc" }] },
        collaborators: {
          orderBy: { createdAt: "desc" },
          select: {
            id: true,
            email: true,
            permission: true,
            status: true,
            token: true,
            expiresAt: true,
            acceptedAt: true,
            revokedAt: true,
            createdAt: true,
            user: { select: { id: true, displayName: true, email: true } },
          },
        },
        activePlan: { select: { code: true, name: true, guestLimit: true, mediaLimit: true, requiresPublishReview: true } },
        _count: { select: { events: true, guests: true, collaborators: true, mediaAssets: true, orders: true } },
      },
    });
    if (!wedding) throw new NotFoundException("Wedding not found");
    return {
      ...wedding,
      collaborators: accessRecord.access === "OWNER" ? wedding.collaborators : [],
      access: accessRecord.access,
      checklist: this.buildChecklist(wedding),
    };
  }

  async getPublicBySlug(slug: string) {
    const now = new Date();
    const wedding = await this.prisma.wedding.findFirst({
      where: {
        slug: this.normalizeSlug(slug),
        status: "PUBLISHED",
        OR: [{ expiresAt: null }, { expiresAt: { gt: now } }],
      },
      select: {
        id: true,
        slug: true,
        title: true,
        brideName: true,
        groomName: true,
        mainDate: true,
        brideFatherName: true,
        brideMotherName: true,
        groomFatherName: true,
        groomMotherName: true,
        showBrideParents: true,
        showGroomParents: true,
        story: true,
        status: true,
        coverImageUrl: true,
        musicUrl: true,
        templateKey: true,
        timezone: true,
        events: {
          orderBy: [{ sortOrder: "asc" }, { startsAt: "asc" }],
          select: {
            id: true,
            type: true,
            side: true,
            title: true,
            startsAt: true,
            endsAt: true,
            timezone: true,
            venueName: true,
            address: true,
            mapUrl: true,
            dressCode: true,
            note: true,
            sortOrder: true,
          },
        },
        invitationDesign: true,
        memoryAlbum: { select: { token: true, publicEnabled: true, guestbookEnabled: true } },
        guestbookEntries: { where: { status: "APPROVED" }, orderBy: [{ approvedAt: "desc" }, { createdAt: "desc" }], take: 6, select: { id: true, authorName: true, message: true, approvedAt: true, createdAt: true } },
        mediaAssets: {
          orderBy: [{ isCover: "desc" }, { sortOrder: "asc" }],
          select: { id: true, type: true, publicUrl: true, mimeType: true, width: true, height: true, isCover: true, altText: true, sortOrder: true },
        },
      },
    });

    if (!wedding) throw new NotFoundException("Wedding invitation not found");
    return wedding;
  }

  async getDashboard(id: string, user: AuthenticatedUser) {
    const { access } = await this.getAccess(id, user);
    const wedding = await this.prisma.wedding.findUnique({
      where: { id },
      include: { events: { select: { id: true } } },
    });
    if (!wedding) throw new NotFoundException("Wedding not found");

    const [totalGuests, viewed, attending, declined, pending, headcount] = await Promise.all([
      this.prisma.guest.count({ where: { weddingId: id } }),
      this.prisma.invitation.count({ where: { guest: { weddingId: id }, firstViewedAt: { not: null } } }),
      this.prisma.rsvp.count({ where: { invitation: { guest: { weddingId: id } }, status: "ATTENDING" } }),
      this.prisma.rsvp.count({ where: { invitation: { guest: { weddingId: id } }, status: "DECLINED" } }),
      this.prisma.invitation.count({ where: { guest: { weddingId: id }, rsvp: null } }),
      this.prisma.rsvp.aggregate({
        where: { invitation: { guest: { weddingId: id } }, status: "ATTENDING" },
        _sum: { adultCount: true, childCount: true },
      }),
    ]);

    return {
      wedding: {
        id: wedding.id,
        title: wedding.title,
        slug: wedding.slug,
        brideName: wedding.brideName,
        groomName: wedding.groomName,
        mainDate: wedding.mainDate,
        status: wedding.status,
        access,
      },
      checklist: this.buildChecklist(wedding),
      metrics: {
        totalGuests,
        viewed,
        attending,
        declined,
        pending,
        estimatedHeadcount: (headcount._sum.adultCount ?? 0) + (headcount._sum.childCount ?? 0),
      },
    };
  }

  async create(dto: CreateWeddingDto, user: AuthenticatedUser) {
    const slug = this.normalizeSlug(dto.slug);
    await this.assertSlugAvailable(slug);
    const wedding = await this.prisma.wedding.create({
      data: {
        ownerId: user.id,
        title: dto.title.trim(),
        brideName: dto.brideName.trim(),
        groomName: dto.groomName.trim(),
        slug,
        mainDate: dto.mainDate ? new Date(dto.mainDate) : null,
        timezone: dto.timezone ?? "Asia/Ho_Chi_Minh",
      },
    });
    await this.prisma.invitationDesign.create({ data: { weddingId: wedding.id } });
    await this.writeAudit(user.id, "WEDDING_CREATED", { weddingId: wedding.id, slug });
    return wedding;
  }

  async update(id: string, dto: UpdateWeddingDto, user: AuthenticatedUser) {
    const { access } = await this.getAccess(id, user);
    this.requireEdit(access);
    const slug = dto.slug ? this.normalizeSlug(dto.slug) : undefined;
    if (slug) await this.assertSlugAvailable(slug, id);

    const nullableText = (value: string | undefined): string | null | undefined => {
      if (value === undefined) return undefined;
      const normalized = value.trim();
      return normalized.length ? normalized : null;
    };

    const wedding = await this.prisma.wedding.update({
      where: { id },
      data: {
        title: dto.title?.trim(),
        brideName: dto.brideName?.trim(),
        groomName: dto.groomName?.trim(),
        slug,
        mainDate: dto.mainDate ? new Date(dto.mainDate) : undefined,
        timezone: dto.timezone,
        brideFatherName: nullableText(dto.brideFatherName),
        brideMotherName: nullableText(dto.brideMotherName),
        groomFatherName: nullableText(dto.groomFatherName),
        groomMotherName: nullableText(dto.groomMotherName),
        showBrideParents: dto.showBrideParents,
        showGroomParents: dto.showGroomParents,
        story: nullableText(dto.story),
      },
    });
    await this.writeAudit(user.id, "WEDDING_UPDATED", { weddingId: id });
    return wedding;
  }

  async updateLifecycle(id: string, dto: UpdateLifecycleDto, user: AuthenticatedUser) {
    const { wedding, access } = await this.getAccess(id, user);
    this.requireOwner(access);
    const current = wedding.status as WeddingStatusValue;
    if (current === dto.status) return wedding;
    if (!lifecycleTransitions[current].includes(dto.status)) {
      throw new BadRequestException(`Cannot change wedding status from ${current} to ${dto.status}`);
    }

    if (dto.status === "READY_FOR_REVIEW" || dto.status === "PUBLISHED") {
      const eventCount = await this.prisma.event.count({ where: { weddingId: id } });
      if (!wedding.mainDate || eventCount < 1) {
        throw new BadRequestException("Add the main wedding date and at least one event before review or publish");
      }
    }

    if (dto.status === "PUBLISHED") {
      const access = await this.entitlements.getWeddingEntitlements(id);
      if (access.plan.code === "FREE") throw new BadRequestException("Vui lòng chọn gói dịch vụ trước khi xuất bản thiệp.");
      if (access.plan.requiresPublishReview && wedding.publishReviewStatus !== "APPROVED") {
        throw new BadRequestException("Gói hiện tại cần được đội ngũ Ngày Đôi duyệt trước khi xuất bản.");
      }
    }

    const now = new Date();
    const updated = await this.prisma.wedding.update({
      where: { id },
      data: {
        status: dto.status,
        readyForReviewAt: dto.status === "READY_FOR_REVIEW" ? now : wedding.readyForReviewAt,
        publishedAt: dto.status === "PUBLISHED" ? now : wedding.publishedAt,
        suspendedAt: dto.status === "SUSPENDED" ? now : dto.status === "PUBLISHED" ? null : wedding.suspendedAt,
        archivedAt: dto.status === "ARCHIVED" ? now : dto.status === "DRAFT" ? null : wedding.archivedAt,
      },
    });
    if (dto.status === "PUBLISHED") {
      await this.invitationService.saveVersion(id, user.id, "PUBLISH");
    }
    await this.writeAudit(user.id, "WEDDING_STATUS_CHANGED", { weddingId: id, from: current, to: dto.status });
    return updated;
  }

  async requestPublish(id: string, user: AuthenticatedUser) {
    const { wedding, access } = await this.getAccess(id, user);
    this.requireOwner(access);
    const [eventCount, entitlement] = await Promise.all([
      this.prisma.event.count({ where: { weddingId: id } }),
      this.entitlements.getWeddingEntitlements(id),
    ]);
    if (!wedding.mainDate || eventCount < 1) throw new BadRequestException("Vui lòng hoàn tất ngày cưới và ít nhất một sự kiện trước khi gửi duyệt.");
    if (entitlement.plan.code === "FREE") throw new BadRequestException("Vui lòng chọn gói dịch vụ trước khi gửi yêu cầu xuất bản.");
    const now = new Date();
    if (!entitlement.plan.requiresPublishReview) {
      const published = await this.prisma.wedding.update({
        where: { id },
        data: { status: "PUBLISHED", publishReviewStatus: "APPROVED", publishRequestedAt: now, publishReviewedAt: now, publishedAt: now },
      });
      await this.invitationService.saveVersion(id, user.id, "PUBLISH");
      await this.writeAudit(user.id, "PUBLISH_AUTO_APPROVED", { weddingId: id, planCode: entitlement.plan.code });
      return published;
    }
    const updated = await this.prisma.wedding.update({
      where: { id },
      data: { status: "READY_FOR_REVIEW", readyForReviewAt: now, publishReviewStatus: "REQUESTED", publishRequestedAt: now, publishReviewedAt: null },
    });
    await this.writeAudit(user.id, "PUBLISH_REQUESTED", { weddingId: id, planCode: entitlement.plan.code });
    return updated;
  }

  async archive(id: string, user: AuthenticatedUser) {
    const { access } = await this.getAccess(id, user);
    this.requireOwner(access);
    const wedding = await this.prisma.wedding.update({
      where: { id },
      data: { status: "ARCHIVED", archivedAt: new Date() },
    });
    await this.writeAudit(user.id, "WEDDING_ARCHIVED", { weddingId: id });
    return wedding;
  }

  async duplicate(id: string, dto: DuplicateWeddingDto, user: AuthenticatedUser) {
    const { wedding, access } = await this.getAccess(id, user);
    this.requireOwner(access);
    const slug = this.normalizeSlug(dto.slug);
    await this.assertSlugAvailable(slug);
    const [events, design] = await Promise.all([
      this.prisma.event.findMany({ where: { weddingId: id }, orderBy: { sortOrder: "asc" } }),
      this.prisma.invitationDesign.findUnique({ where: { weddingId: id } }),
    ]);

    const copy = await this.prisma.$transaction(async (tx) => {
      const created = await tx.wedding.create({
        data: {
          ownerId: user.id,
          slug,
          title: dto.title.trim(),
          brideName: wedding.brideName,
          groomName: wedding.groomName,
          mainDate: wedding.mainDate,
          brideFatherName: wedding.brideFatherName,
          brideMotherName: wedding.brideMotherName,
          groomFatherName: wedding.groomFatherName,
          groomMotherName: wedding.groomMotherName,
          showBrideParents: wedding.showBrideParents,
          showGroomParents: wedding.showGroomParents,
          story: wedding.story,
          templateKey: wedding.templateKey,
          timezone: wedding.timezone,
          status: "DRAFT",
          duplicatedFromId: wedding.id,
        },
      });
      if (design) {
        await tx.invitationDesign.create({
          data: {
            weddingId: created.id,
            templateKey: design.templateKey,
            paletteKey: design.paletteKey,
            primaryColor: design.primaryColor,
            accentColor: design.accentColor,
            backgroundColor: design.backgroundColor,
            surfaceColor: design.surfaceColor,
            textColor: design.textColor,
            headingFont: design.headingFont,
            bodyFont: design.bodyFont,
            heroEyebrow: design.heroEyebrow,
            greeting: design.greeting,
            storyTitle: design.storyTitle,
            galleryTitle: design.galleryTitle,
            eventsTitle: design.eventsTitle,
            countdownTitle: design.countdownTitle,
            footerMessage: design.footerMessage,
            showHero: design.showHero,
            showFamily: design.showFamily,
            showStory: design.showStory,
            showGallery: design.showGallery,
            showEvents: design.showEvents,
            showCountdown: design.showCountdown,
            showFooter: design.showFooter,
            musicEnabled: design.musicEnabled,
            musicUrl: design.musicUrl,
            sectionOrder: design.sectionOrder,
          },
        });
      } else {
        await tx.invitationDesign.create({ data: { weddingId: created.id } });
      }
      if (events.length) {
        await tx.event.createMany({
          data: events.map((event) => ({
            weddingId: created.id,
            type: event.type,
            side: event.side,
            title: event.title,
            startsAt: event.startsAt,
            endsAt: event.endsAt,
            timezone: event.timezone,
            venueName: event.venueName,
            address: event.address,
            mapUrl: event.mapUrl,
            dressCode: event.dressCode,
            note: event.note,
            sortOrder: event.sortOrder,
          })),
        });
      }
      return created;
    });
    await this.writeAudit(user.id, "WEDDING_DUPLICATED", { weddingId: id, duplicateWeddingId: copy.id });
    return copy;
  }

  async createEvent(weddingId: string, dto: CreateEventDto, user: AuthenticatedUser) {
    const { access, wedding } = await this.getAccess(weddingId, user);
    this.requireEdit(access);
    const startsAt = new Date(dto.startsAt);
    const endsAt = dto.endsAt ? new Date(dto.endsAt) : null;
    if (endsAt && endsAt <= startsAt) throw new BadRequestException("Event end time must be after start time");
    const event = await this.prisma.event.create({
      data: {
        weddingId,
        type: dto.type,
        side: dto.side,
        title: dto.title.trim(),
        startsAt,
        endsAt,
        timezone: dto.timezone ?? wedding.timezone,
        venueName: dto.venueName.trim(),
        address: dto.address.trim(),
        mapUrl: dto.mapUrl || null,
        dressCode: dto.dressCode?.trim() || null,
        note: dto.note?.trim() || null,
        sortOrder: dto.sortOrder ?? 0,
      },
    });
    await this.writeAudit(user.id, "WEDDING_EVENT_CREATED", { weddingId, eventId: event.id });
    return event;
  }

  async updateEvent(weddingId: string, eventId: string, dto: UpdateEventDto, user: AuthenticatedUser) {
    const { access } = await this.getAccess(weddingId, user);
    this.requireEdit(access);
    const current = await this.prisma.event.findFirst({ where: { id: eventId, weddingId } });
    if (!current) throw new NotFoundException("Event not found");
    const startsAt = dto.startsAt ? new Date(dto.startsAt) : current.startsAt;
    const endsAt = dto.endsAt ? new Date(dto.endsAt) : current.endsAt;
    if (endsAt && endsAt <= startsAt) throw new BadRequestException("Event end time must be after start time");

    const event = await this.prisma.event.update({
      where: { id: eventId },
      data: {
        type: dto.type,
        side: dto.side,
        title: dto.title?.trim(),
        startsAt: dto.startsAt ? startsAt : undefined,
        endsAt: dto.endsAt ? endsAt : undefined,
        timezone: dto.timezone,
        venueName: dto.venueName?.trim(),
        address: dto.address?.trim(),
        mapUrl: dto.mapUrl,
        dressCode: dto.dressCode?.trim(),
        note: dto.note?.trim(),
        sortOrder: dto.sortOrder,
      },
    });
    await this.writeAudit(user.id, "WEDDING_EVENT_UPDATED", { weddingId, eventId });
    return event;
  }

  async deleteEvent(weddingId: string, eventId: string, user: AuthenticatedUser) {
    const { access } = await this.getAccess(weddingId, user);
    this.requireEdit(access);
    const event = await this.prisma.event.findFirst({ where: { id: eventId, weddingId }, select: { id: true } });
    if (!event) throw new NotFoundException("Event not found");
    await this.prisma.event.delete({ where: { id: eventId } });
    await this.writeAudit(user.id, "WEDDING_EVENT_DELETED", { weddingId, eventId });
    return { success: true };
  }

  async inviteCollaborator(weddingId: string, dto: CreateCollaboratorDto, user: AuthenticatedUser) {
    const { access } = await this.getAccess(weddingId, user);
    this.requireOwner(access);
    const email = this.normalizeEmail(dto.email);
    if (email === this.normalizeEmail(user.email)) throw new BadRequestException("The owner already has full access");
    const existingUser = await this.prisma.user.findUnique({ where: { email }, select: { id: true } });
    const existing = await this.prisma.weddingCollaborator.findUnique({
      where: { weddingId_email: { weddingId, email } },
    });
    if (existing?.status === "ACCEPTED") throw new ConflictException("This collaborator already has access");

    const token = crypto.randomUUID();
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const invitation = existing
      ? await this.prisma.weddingCollaborator.update({
          where: { id: existing.id },
          data: {
            userId: existingUser?.id ?? null,
            invitedById: user.id,
            permission: dto.permission,
            status: "PENDING",
            token,
            expiresAt,
            acceptedAt: null,
            revokedAt: null,
          },
        })
      : await this.prisma.weddingCollaborator.create({
          data: {
            weddingId,
            email,
            userId: existingUser?.id ?? null,
            invitedById: user.id,
            permission: dto.permission,
            token,
            expiresAt,
          },
        });
    await this.writeAudit(user.id, "WEDDING_COLLABORATOR_INVITED", { weddingId, collaboratorEmail: email, permission: dto.permission });
    return invitation;
  }

  async acceptCollaboration(token: string, user: AuthenticatedUser) {
    const invitation = await this.prisma.weddingCollaborator.findUnique({ where: { token } });
    if (!invitation || invitation.status !== "PENDING") throw new NotFoundException("Collaboration invitation not found");
    if (invitation.expiresAt <= new Date()) {
      await this.prisma.weddingCollaborator.update({ where: { id: invitation.id }, data: { status: "EXPIRED" } });
      throw new BadRequestException("Collaboration invitation has expired");
    }
    if (invitation.email !== this.normalizeEmail(user.email)) {
      throw new ForbiddenException("Sign in with the email address that received this invitation");
    }
    const accepted = await this.prisma.weddingCollaborator.update({
      where: { id: invitation.id },
      data: { userId: user.id, status: "ACCEPTED", acceptedAt: new Date() },
    });
    await this.writeAudit(user.id, "WEDDING_COLLABORATION_ACCEPTED", { weddingId: invitation.weddingId });
    return accepted;
  }

  async revokeCollaborator(weddingId: string, collaboratorId: string, user: AuthenticatedUser) {
    const { access } = await this.getAccess(weddingId, user);
    this.requireOwner(access);
    const invitation = await this.prisma.weddingCollaborator.findFirst({ where: { id: collaboratorId, weddingId } });
    if (!invitation) throw new NotFoundException("Collaborator not found");
    const revoked = await this.prisma.weddingCollaborator.update({
      where: { id: collaboratorId },
      data: { status: "REVOKED", revokedAt: new Date() },
    });
    await this.writeAudit(user.id, "WEDDING_COLLABORATOR_REVOKED", { weddingId, collaboratorId });
    return revoked;
  }

  private async writeAudit(userId: string, action: string, metadata: Record<string, unknown>): Promise<void> {
    await this.prisma.auditLog.create({ data: { userId, action, metadata: metadata as Prisma.InputJsonValue } });
  }
}
