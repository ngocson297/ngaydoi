import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.PrismaClientConstructorArgs<Options>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = Prisma.PrismaClientOptions['omit'], in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    $connect(): runtime.Types.Utils.JsPromise<void>;
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    get user(): Prisma.UserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get refreshSession(): Prisma.RefreshSessionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get emailVerificationToken(): Prisma.EmailVerificationTokenDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get passwordResetToken(): Prisma.PasswordResetTokenDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get auditLog(): Prisma.AuditLogDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get wedding(): Prisma.WeddingDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get weddingCollaborator(): Prisma.WeddingCollaboratorDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get event(): Prisma.EventDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get guest(): Prisma.GuestDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get invitation(): Prisma.InvitationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get rsvp(): Prisma.RsvpDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get invitationEvent(): Prisma.InvitationEventDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get rsvpEventSelection(): Prisma.RsvpEventSelectionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get rsvpHistory(): Prisma.RsvpHistoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get notification(): Prisma.NotificationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get mediaAsset(): Prisma.MediaAssetDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get giftQrAsset(): Prisma.GiftQrAssetDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get invitationDesign(): Prisma.InvitationDesignDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get invitationVersion(): Prisma.InvitationVersionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get invitationPreviewToken(): Prisma.InvitationPreviewTokenDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get plan(): Prisma.PlanDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get addOn(): Prisma.AddOnDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get coupon(): Prisma.CouponDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get order(): Prisma.OrderDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get orderItem(): Prisma.OrderItemDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get payment(): Prisma.PaymentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get orderNote(): Prisma.OrderNoteDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get emailOutbox(): Prisma.EmailOutboxDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get webhookEndpoint(): Prisma.WebhookEndpointDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get webhookDelivery(): Prisma.WebhookDeliveryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get pilotChecklistItem(): Prisma.PilotChecklistItemDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get pilotIssue(): Prisma.PilotIssueDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get systemAnnouncement(): Prisma.SystemAnnouncementDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get growthEvent(): Prisma.GrowthEventDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get referralCode(): Prisma.ReferralCodeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get referralAttribution(): Prisma.ReferralAttributionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get onboardingProgress(): Prisma.OnboardingProgressDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get supportTicket(): Prisma.SupportTicketDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get customDomain(): Prisma.CustomDomainDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get partnerOrganization(): Prisma.PartnerOrganizationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get partnerMember(): Prisma.PartnerMemberDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get partnerClient(): Prisma.PartnerClientDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get partnerCommission(): Prisma.PartnerCommissionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get partnerPayout(): Prisma.PartnerPayoutDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get seatingTable(): Prisma.SeatingTableDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get seatAssignment(): Prisma.SeatAssignmentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get checkinStation(): Prisma.CheckinStationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get checkinRecord(): Prisma.CheckinRecordDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get memoryAlbum(): Prisma.MemoryAlbumDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get memoryAsset(): Prisma.MemoryAssetDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get memoryReaction(): Prisma.MemoryReactionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get memoryComment(): Prisma.MemoryCommentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get guestbookEntry(): Prisma.GuestbookEntryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get planningTask(): Prisma.PlanningTaskDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
