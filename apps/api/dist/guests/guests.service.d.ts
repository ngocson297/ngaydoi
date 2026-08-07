import type { AuthenticatedUser } from "../auth/auth.types.js";
import { EntitlementsService } from "../commercial/entitlements.service.js";
import { PrismaService } from "../prisma/prisma.service.js";
import { BulkGuestsDto } from "./dto/bulk-guests.dto.js";
import { CreateGuestDto } from "./dto/create-guest.dto.js";
import { ImportGuestsDto } from "./dto/import-guests.dto.js";
import { UpdateGuestInvitationDto } from "./dto/update-invitation.dto.js";
import { UpdateGuestDto } from "./dto/update-guest.dto.js";
type AccessLevel = "OWNER" | "EDIT" | "VIEW";
export declare class GuestsService {
    private readonly prisma;
    private readonly entitlements;
    constructor(prisma: PrismaService, entitlements: EntitlementsService);
    private normalizeEmail;
    private normalizePhone;
    private cleanText;
    private cleanTags;
    private createInvitationToken;
    private getAccess;
    private requireEdit;
    private ensureGuest;
    private validateEventIds;
    private guestInclude;
    list(weddingId: string, user: AuthenticatedUser, query: Record<string, string | undefined>): Promise<{
        wedding: {
            id: string;
            title: string;
            slug: string;
            status: import("../generated/prisma/enums.js").WeddingStatus;
            access: AccessLevel;
            events: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                type: import("../generated/prisma/enums.js").EventType;
                weddingId: string;
                note: string | null;
                title: string;
                timezone: string;
                sortOrder: number;
                startsAt: Date;
                endsAt: Date | null;
                side: import("../generated/prisma/enums.js").WeddingSide;
                venueName: string;
                address: string;
                mapUrl: string | null;
                dressCode: string | null;
            }[];
        };
        items: {
            invitation: {
                rsvp: ({
                    selectedEvents: {
                        eventId: string;
                    }[];
                } & {
                    id: string;
                    status: import("../generated/prisma/enums.js").RsvpStatus;
                    updatedAt: Date;
                    message: string | null;
                    eventId: string | null;
                    invitationId: string;
                    adultCount: number;
                    childCount: number;
                    vegetarianCount: number;
                    needsTransport: boolean;
                    publishWish: boolean;
                    respondedAt: Date;
                }) | null;
                visibleEvents: {
                    eventId: string;
                }[];
            } & {
                id: string;
                status: import("../generated/prisma/enums.js").InvitationStatus;
                createdAt: Date;
                updatedAt: Date;
                revokedAt: Date | null;
                eventId: string | null;
                greeting: string | null;
                token: string;
                sentAt: Date | null;
                guestId: string;
                firstViewedAt: Date | null;
                lastViewedAt: Date | null;
                viewCount: number;
            };
            invitations: undefined;
            id: string;
            email: string | null;
            phone: string | null;
            createdAt: Date;
            updatedAt: Date;
            weddingId: string;
            note: string | null;
            archivedAt: Date | null;
            side: import("../generated/prisma/enums.js").WeddingSide;
            invitedBy: string | null;
            fullName: string;
            salutation: string | null;
            groupName: string | null;
            tableName: string | null;
            maxAdultCount: number;
            maxChildCount: number;
            tags: string[];
        }[];
        pagination: {
            page: number;
            pageSize: number;
            total: number;
            totalPages: number;
        };
        groups: {
            name: string;
            count: number;
        }[];
    }>;
    create(weddingId: string, dto: CreateGuestDto, user: AuthenticatedUser): Promise<{
        invitation: {
            rsvp: {
                id: string;
                status: import("../generated/prisma/enums.js").RsvpStatus;
                updatedAt: Date;
                message: string | null;
                eventId: string | null;
                invitationId: string;
                adultCount: number;
                childCount: number;
                vegetarianCount: number;
                needsTransport: boolean;
                publishWish: boolean;
                respondedAt: Date;
            } | null;
            visibleEvents: {
                eventId: string;
            }[];
        } & {
            id: string;
            status: import("../generated/prisma/enums.js").InvitationStatus;
            createdAt: Date;
            updatedAt: Date;
            revokedAt: Date | null;
            eventId: string | null;
            greeting: string | null;
            token: string;
            sentAt: Date | null;
            guestId: string;
            firstViewedAt: Date | null;
            lastViewedAt: Date | null;
            viewCount: number;
        };
        id: string;
        email: string | null;
        phone: string | null;
        createdAt: Date;
        updatedAt: Date;
        weddingId: string;
        note: string | null;
        archivedAt: Date | null;
        side: import("../generated/prisma/enums.js").WeddingSide;
        invitedBy: string | null;
        fullName: string;
        salutation: string | null;
        groupName: string | null;
        tableName: string | null;
        maxAdultCount: number;
        maxChildCount: number;
        tags: string[];
    }>;
    update(weddingId: string, guestId: string, dto: UpdateGuestDto, user: AuthenticatedUser): Promise<{
        id: string;
        email: string | null;
        phone: string | null;
        createdAt: Date;
        updatedAt: Date;
        weddingId: string;
        note: string | null;
        archivedAt: Date | null;
        side: import("../generated/prisma/enums.js").WeddingSide;
        invitedBy: string | null;
        fullName: string;
        salutation: string | null;
        groupName: string | null;
        tableName: string | null;
        maxAdultCount: number;
        maxChildCount: number;
        tags: string[];
    }>;
    remove(weddingId: string, guestId: string, user: AuthenticatedUser): Promise<{
        success: boolean;
    }>;
    updateInvitation(weddingId: string, guestId: string, dto: UpdateGuestInvitationDto, user: AuthenticatedUser, writeAudit?: boolean): Promise<({
        rsvp: ({
            selectedEvents: {
                eventId: string;
            }[];
        } & {
            id: string;
            status: import("../generated/prisma/enums.js").RsvpStatus;
            updatedAt: Date;
            message: string | null;
            eventId: string | null;
            invitationId: string;
            adultCount: number;
            childCount: number;
            vegetarianCount: number;
            needsTransport: boolean;
            publishWish: boolean;
            respondedAt: Date;
        }) | null;
        visibleEvents: {
            eventId: string;
        }[];
    } & {
        id: string;
        status: import("../generated/prisma/enums.js").InvitationStatus;
        createdAt: Date;
        updatedAt: Date;
        revokedAt: Date | null;
        eventId: string | null;
        greeting: string | null;
        token: string;
        sentAt: Date | null;
        guestId: string;
        firstViewedAt: Date | null;
        lastViewedAt: Date | null;
        viewCount: number;
    }) | null>;
    markSent(weddingId: string, guestId: string, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../generated/prisma/enums.js").InvitationStatus;
        createdAt: Date;
        updatedAt: Date;
        revokedAt: Date | null;
        eventId: string | null;
        greeting: string | null;
        token: string;
        sentAt: Date | null;
        guestId: string;
        firstViewedAt: Date | null;
        lastViewedAt: Date | null;
        viewCount: number;
    }>;
    bulk(weddingId: string, dto: BulkGuestsDto, user: AuthenticatedUser): Promise<{
        success: boolean;
        action: import("./dto/bulk-guests.dto.js").BulkGuestActionDto;
        affected: number;
    }>;
    importGuests(weddingId: string, dto: ImportGuestsDto, user: AuthenticatedUser, preview: boolean): Promise<{
        preview: boolean;
        totalRows: number;
        validRows: number;
        errorRows: number;
        duplicateRows: number;
        willCreate: number;
        willUpdate: number;
        willSkip: number;
        errors: {
            row: number;
            message: string;
        }[];
        duplicates: {
            row: number;
            guestId: string;
            fullName: string;
        }[];
        sample: {
            duplicate: boolean;
            fullName: string;
            salutation?: string;
            phone?: string;
            email?: string;
            groupName?: string;
            side: "SHARED" | "BRIDE" | "GROOM";
            invitedBy?: string;
            maxAdultCount: number;
            maxChildCount: number;
            note?: string;
            tags: string[];
            row: number;
        }[];
    } | {
        preview: boolean;
        imported: number;
        totalRows: number;
        validRows: number;
        errorRows: number;
        duplicateRows: number;
        willCreate: number;
        willUpdate: number;
        willSkip: number;
        errors: {
            row: number;
            message: string;
        }[];
        duplicates: {
            row: number;
            guestId: string;
            fullName: string;
        }[];
        sample: {
            duplicate: boolean;
            fullName: string;
            salutation?: string;
            phone?: string;
            email?: string;
            groupName?: string;
            side: "SHARED" | "BRIDE" | "GROOM";
            invitedBy?: string;
            maxAdultCount: number;
            maxChildCount: number;
            note?: string;
            tags: string[];
            row: number;
        }[];
    }>;
    exportGuests(weddingId: string, user: AuthenticatedUser): Promise<{
        salutation: string;
        fullName: string;
        phone: string;
        email: string;
        groupName: string;
        side: import("../generated/prisma/enums.js").WeddingSide;
        invitedBy: string;
        maxAdultCount: number;
        maxChildCount: number;
        tableName: string;
        tags: string;
        invitationStatus: import("../generated/prisma/enums.js").InvitationStatus;
        personalizedPath: string;
        rsvpStatus: string;
        adultCount: number;
        childCount: number;
        vegetarianCount: number;
        needsTransport: string;
        message: string;
        note: string;
    }[]>;
    analytics(weddingId: string, user: AuthenticatedUser): Promise<{
        wedding: {
            id: string;
            title: string;
            slug: string;
            access: AccessLevel;
        };
        metrics: {
            invited: number;
            sent: number;
            viewed: number;
            responded: number;
            attending: number;
            declined: number;
            maybe: number;
            pending: number;
            estimatedHeadcount: number;
            vegetarianMeals: number;
            transportRequests: number;
            viewToRsvpRate: number;
        };
        bySide: {
            total: number;
            attending: number;
            headcount: number;
            label: string;
        }[];
        byGroup: {
            total: number;
            attending: number;
            headcount: number;
            label: string;
        }[];
        byInviter: {
            total: number;
            attending: number;
            headcount: number;
            label: string;
        }[];
        byEvent: {
            id: string;
            title: string;
            headcount: number;
        }[];
    }>;
    getPersonalizedInvitation(token: string): Promise<{
        id: string;
        slug: string;
        title: string;
        brideName: string;
        groomName: string;
        mainDate: Date | null;
        brideFatherName: string | null;
        brideMotherName: string | null;
        groomFatherName: string | null;
        groomMotherName: string | null;
        showBrideParents: boolean;
        showGroomParents: boolean;
        story: string | null;
        status: "PUBLISHED";
        timezone: string;
        invitationDesign: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            weddingId: string;
            musicUrl: string | null;
            templateKey: string;
            paletteKey: string;
            primaryColor: string;
            accentColor: string;
            backgroundColor: string;
            surfaceColor: string;
            textColor: string;
            headingFont: string;
            bodyFont: string;
            heroEyebrow: string;
            greeting: string;
            storyTitle: string;
            galleryTitle: string;
            eventsTitle: string;
            countdownTitle: string;
            giftTitle: string;
            giftMessage: string;
            giftAccounts: import("@prisma/client/runtime/client").JsonValue;
            footerMessage: string;
            showHero: boolean;
            showFamily: boolean;
            showStory: boolean;
            showGallery: boolean;
            showEvents: boolean;
            showCountdown: boolean;
            showGift: boolean;
            showFooter: boolean;
            musicEnabled: boolean;
            sectionOrder: string[];
            revision: number;
            autosavedAt: Date;
        } | null;
        mediaAssets: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            type: string;
            weddingId: string;
            sortOrder: number;
            altText: string | null;
            isCover: boolean;
            width: number | null;
            height: number | null;
            storageKey: string;
            publicUrl: string;
            sizeBytes: number;
            mimeType: string;
        }[];
        memoryAlbum: {
            token: string;
            thankYouTitle: string;
            thankYouMessage: string;
            publicEnabled: boolean;
            guestbookEnabled: boolean;
            memoryModeEnabled: boolean;
            thankYouSignature: string | null;
            showCouplePhoto: boolean;
            showWeddingDate: boolean;
            assets: {
                id: string;
                type: import("../generated/prisma/enums.js").MemoryAssetType;
                publicUrl: string;
                featuredOrder: number | null;
                mimeType: string;
                uploaderMessage: string | null;
            }[];
        } | null;
        guestbookEntries: {
            id: string;
            createdAt: Date;
            message: string;
            approvedAt: Date | null;
            authorName: string;
        }[];
        events: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            type: import("../generated/prisma/enums.js").EventType;
            weddingId: string;
            note: string | null;
            title: string;
            timezone: string;
            sortOrder: number;
            startsAt: Date;
            endsAt: Date | null;
            side: import("../generated/prisma/enums.js").WeddingSide;
            venueName: string;
            address: string;
            mapUrl: string | null;
            dressCode: string | null;
        }[];
        personalization: {
            token: string;
            guestName: string;
            salutation: string | null;
            displayName: string;
            greeting: string | null;
            maxAdultCount: number;
            maxChildCount: number;
            invitationStatus: import("../generated/prisma/enums.js").InvitationStatus;
            viewCount: number;
            currentRsvp: {
                status: import("../generated/prisma/enums.js").RsvpStatus;
                adultCount: number;
                childCount: number;
                vegetarianCount: number;
                needsTransport: boolean;
                message: string | null;
                publishWish: boolean;
                selectedEventIds: string[];
                respondedAt: Date;
                updatedAt: Date;
            } | null;
        };
    }>;
    notifications(weddingId: string, user: AuthenticatedUser): Promise<{
        access: AccessLevel;
        unread: number;
        items: {
            id: string;
            createdAt: Date;
            message: string;
            userId: string | null;
            metadata: import("@prisma/client/runtime/client").JsonValue | null;
            type: string;
            weddingId: string;
            title: string;
            readAt: Date | null;
        }[];
    }>;
    markNotificationRead(weddingId: string, notificationId: string, user: AuthenticatedUser): Promise<{
        id: string;
        createdAt: Date;
        message: string;
        userId: string | null;
        metadata: import("@prisma/client/runtime/client").JsonValue | null;
        type: string;
        weddingId: string;
        title: string;
        readAt: Date | null;
    }>;
    private assertNoDuplicate;
    private normalizeImportRow;
    private writeAudit;
}
export {};
