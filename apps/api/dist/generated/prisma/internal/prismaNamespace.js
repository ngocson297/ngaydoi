import * as runtime from "@prisma/client/runtime/client";
import {} from "./class.js";
export const PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export const PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export const PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export const PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export const PrismaClientValidationError = runtime.PrismaClientValidationError;
export const sql = runtime.sqltag;
export const empty = runtime.empty;
export const join = runtime.join;
export const raw = runtime.raw;
export const Sql = runtime.Sql;
export const Decimal = runtime.Decimal;
export const getExtensionContext = runtime.Extensions.getExtensionContext;
export const prismaVersion = {
    client: "7.9.1",
    engine: "e922089b7d7502aff4249d5da3420f6fa55fc6ad"
};
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    User: 'User',
    RefreshSession: 'RefreshSession',
    EmailVerificationToken: 'EmailVerificationToken',
    PasswordResetToken: 'PasswordResetToken',
    AuditLog: 'AuditLog',
    Wedding: 'Wedding',
    WeddingCollaborator: 'WeddingCollaborator',
    Event: 'Event',
    Guest: 'Guest',
    Invitation: 'Invitation',
    Rsvp: 'Rsvp',
    InvitationEvent: 'InvitationEvent',
    RsvpEventSelection: 'RsvpEventSelection',
    RsvpHistory: 'RsvpHistory',
    Notification: 'Notification',
    MediaAsset: 'MediaAsset',
    GiftQrAsset: 'GiftQrAsset',
    InvitationDesign: 'InvitationDesign',
    InvitationVersion: 'InvitationVersion',
    InvitationPreviewToken: 'InvitationPreviewToken',
    Plan: 'Plan',
    AddOn: 'AddOn',
    Coupon: 'Coupon',
    Order: 'Order',
    OrderItem: 'OrderItem',
    Payment: 'Payment',
    OrderNote: 'OrderNote',
    EmailOutbox: 'EmailOutbox',
    WebhookEndpoint: 'WebhookEndpoint',
    WebhookDelivery: 'WebhookDelivery',
    PilotChecklistItem: 'PilotChecklistItem',
    PilotIssue: 'PilotIssue',
    SystemAnnouncement: 'SystemAnnouncement',
    GrowthEvent: 'GrowthEvent',
    ReferralCode: 'ReferralCode',
    ReferralAttribution: 'ReferralAttribution',
    OnboardingProgress: 'OnboardingProgress',
    SupportTicket: 'SupportTicket',
    CustomDomain: 'CustomDomain',
    PartnerOrganization: 'PartnerOrganization',
    PartnerMember: 'PartnerMember',
    PartnerClient: 'PartnerClient',
    PartnerCommission: 'PartnerCommission',
    PartnerPayout: 'PartnerPayout',
    SeatingTable: 'SeatingTable',
    SeatAssignment: 'SeatAssignment',
    CheckinStation: 'CheckinStation',
    CheckinRecord: 'CheckinRecord',
    MemoryAlbum: 'MemoryAlbum',
    MemoryAsset: 'MemoryAsset',
    MemoryReaction: 'MemoryReaction',
    MemoryComment: 'MemoryComment',
    GuestbookEntry: 'GuestbookEntry',
    PlanningTask: 'PlanningTask'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
export const UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    displayName: 'displayName',
    phone: 'phone',
    avatarUrl: 'avatarUrl',
    role: 'role',
    status: 'status',
    emailVerifiedAt: 'emailVerifiedAt',
    passwordChangedAt: 'passwordChangedAt',
    authVersion: 'authVersion',
    failedLoginAttempts: 'failedLoginAttempts',
    lockedUntil: 'lockedUntil',
    accountDeletionRequestedAt: 'accountDeletionRequestedAt',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const RefreshSessionScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    tokenHash: 'tokenHash',
    familyId: 'familyId',
    expiresAt: 'expiresAt',
    lastUsedAt: 'lastUsedAt',
    revokedAt: 'revokedAt',
    revokeReason: 'revokeReason',
    replacedBySessionId: 'replacedBySessionId',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    createdAt: 'createdAt'
};
export const EmailVerificationTokenScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    tokenHash: 'tokenHash',
    expiresAt: 'expiresAt',
    usedAt: 'usedAt',
    createdAt: 'createdAt'
};
export const PasswordResetTokenScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    tokenHash: 'tokenHash',
    expiresAt: 'expiresAt',
    usedAt: 'usedAt',
    createdAt: 'createdAt'
};
export const AuditLogScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    action: 'action',
    success: 'success',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    metadata: 'metadata',
    createdAt: 'createdAt'
};
export const WeddingScalarFieldEnum = {
    id: 'id',
    ownerId: 'ownerId',
    slug: 'slug',
    title: 'title',
    brideName: 'brideName',
    groomName: 'groomName',
    mainDate: 'mainDate',
    brideFatherName: 'brideFatherName',
    brideMotherName: 'brideMotherName',
    groomFatherName: 'groomFatherName',
    groomMotherName: 'groomMotherName',
    showBrideParents: 'showBrideParents',
    showGroomParents: 'showGroomParents',
    story: 'story',
    coverImageUrl: 'coverImageUrl',
    musicUrl: 'musicUrl',
    templateKey: 'templateKey',
    status: 'status',
    timezone: 'timezone',
    readyForReviewAt: 'readyForReviewAt',
    publishedAt: 'publishedAt',
    suspendedAt: 'suspendedAt',
    expiresAt: 'expiresAt',
    archivedAt: 'archivedAt',
    duplicatedFromId: 'duplicatedFromId',
    activePlanId: 'activePlanId',
    publishReviewStatus: 'publishReviewStatus',
    publishRequestedAt: 'publishRequestedAt',
    publishReviewedAt: 'publishReviewedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const WeddingCollaboratorScalarFieldEnum = {
    id: 'id',
    weddingId: 'weddingId',
    email: 'email',
    userId: 'userId',
    invitedById: 'invitedById',
    permission: 'permission',
    status: 'status',
    token: 'token',
    expiresAt: 'expiresAt',
    acceptedAt: 'acceptedAt',
    revokedAt: 'revokedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const EventScalarFieldEnum = {
    id: 'id',
    weddingId: 'weddingId',
    type: 'type',
    side: 'side',
    title: 'title',
    startsAt: 'startsAt',
    endsAt: 'endsAt',
    timezone: 'timezone',
    venueName: 'venueName',
    address: 'address',
    mapUrl: 'mapUrl',
    dressCode: 'dressCode',
    note: 'note',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const GuestScalarFieldEnum = {
    id: 'id',
    weddingId: 'weddingId',
    fullName: 'fullName',
    salutation: 'salutation',
    phone: 'phone',
    email: 'email',
    groupName: 'groupName',
    side: 'side',
    invitedBy: 'invitedBy',
    tableName: 'tableName',
    maxAdultCount: 'maxAdultCount',
    maxChildCount: 'maxChildCount',
    note: 'note',
    tags: 'tags',
    archivedAt: 'archivedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const InvitationScalarFieldEnum = {
    id: 'id',
    guestId: 'guestId',
    eventId: 'eventId',
    token: 'token',
    greeting: 'greeting',
    status: 'status',
    sentAt: 'sentAt',
    firstViewedAt: 'firstViewedAt',
    lastViewedAt: 'lastViewedAt',
    viewCount: 'viewCount',
    revokedAt: 'revokedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const RsvpScalarFieldEnum = {
    id: 'id',
    invitationId: 'invitationId',
    eventId: 'eventId',
    status: 'status',
    adultCount: 'adultCount',
    childCount: 'childCount',
    vegetarianCount: 'vegetarianCount',
    needsTransport: 'needsTransport',
    message: 'message',
    publishWish: 'publishWish',
    respondedAt: 'respondedAt',
    updatedAt: 'updatedAt'
};
export const InvitationEventScalarFieldEnum = {
    id: 'id',
    invitationId: 'invitationId',
    eventId: 'eventId',
    createdAt: 'createdAt'
};
export const RsvpEventSelectionScalarFieldEnum = {
    id: 'id',
    rsvpId: 'rsvpId',
    eventId: 'eventId',
    createdAt: 'createdAt'
};
export const RsvpHistoryScalarFieldEnum = {
    id: 'id',
    rsvpId: 'rsvpId',
    status: 'status',
    adultCount: 'adultCount',
    childCount: 'childCount',
    vegetarianCount: 'vegetarianCount',
    needsTransport: 'needsTransport',
    message: 'message',
    selectedEventIds: 'selectedEventIds',
    source: 'source',
    createdAt: 'createdAt'
};
export const NotificationScalarFieldEnum = {
    id: 'id',
    weddingId: 'weddingId',
    userId: 'userId',
    type: 'type',
    title: 'title',
    message: 'message',
    metadata: 'metadata',
    readAt: 'readAt',
    createdAt: 'createdAt'
};
export const MediaAssetScalarFieldEnum = {
    id: 'id',
    weddingId: 'weddingId',
    type: 'type',
    storageKey: 'storageKey',
    publicUrl: 'publicUrl',
    mimeType: 'mimeType',
    sizeBytes: 'sizeBytes',
    width: 'width',
    height: 'height',
    isCover: 'isCover',
    altText: 'altText',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const GiftQrAssetScalarFieldEnum = {
    id: 'id',
    weddingId: 'weddingId',
    storageKey: 'storageKey',
    publicUrl: 'publicUrl',
    mimeType: 'mimeType',
    sizeBytes: 'sizeBytes',
    createdAt: 'createdAt'
};
export const InvitationDesignScalarFieldEnum = {
    id: 'id',
    weddingId: 'weddingId',
    templateKey: 'templateKey',
    paletteKey: 'paletteKey',
    primaryColor: 'primaryColor',
    accentColor: 'accentColor',
    backgroundColor: 'backgroundColor',
    surfaceColor: 'surfaceColor',
    textColor: 'textColor',
    headingFont: 'headingFont',
    bodyFont: 'bodyFont',
    heroEyebrow: 'heroEyebrow',
    greeting: 'greeting',
    storyTitle: 'storyTitle',
    galleryTitle: 'galleryTitle',
    eventsTitle: 'eventsTitle',
    countdownTitle: 'countdownTitle',
    footerMessage: 'footerMessage',
    giftTitle: 'giftTitle',
    giftMessage: 'giftMessage',
    giftAccounts: 'giftAccounts',
    showHero: 'showHero',
    showFamily: 'showFamily',
    showStory: 'showStory',
    showGallery: 'showGallery',
    showEvents: 'showEvents',
    showCountdown: 'showCountdown',
    showFooter: 'showFooter',
    showGift: 'showGift',
    musicEnabled: 'musicEnabled',
    musicUrl: 'musicUrl',
    sectionOrder: 'sectionOrder',
    revision: 'revision',
    autosavedAt: 'autosavedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const InvitationVersionScalarFieldEnum = {
    id: 'id',
    weddingId: 'weddingId',
    versionNumber: 'versionNumber',
    reason: 'reason',
    snapshot: 'snapshot',
    createdById: 'createdById',
    createdAt: 'createdAt'
};
export const InvitationPreviewTokenScalarFieldEnum = {
    id: 'id',
    weddingId: 'weddingId',
    token: 'token',
    expiresAt: 'expiresAt',
    revokedAt: 'revokedAt',
    createdById: 'createdById',
    createdAt: 'createdAt'
};
export const PlanScalarFieldEnum = {
    id: 'id',
    code: 'code',
    name: 'name',
    description: 'description',
    priceAmount: 'priceAmount',
    currency: 'currency',
    guestLimit: 'guestLimit',
    mediaLimit: 'mediaLimit',
    templateKeys: 'templateKeys',
    customDomain: 'customDomain',
    prioritySupport: 'prioritySupport',
    requiresPublishReview: 'requiresPublishReview',
    active: 'active',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const AddOnScalarFieldEnum = {
    id: 'id',
    code: 'code',
    name: 'name',
    description: 'description',
    priceAmount: 'priceAmount',
    currency: 'currency',
    guestLimitBonus: 'guestLimitBonus',
    mediaLimitBonus: 'mediaLimitBonus',
    active: 'active',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const CouponScalarFieldEnum = {
    id: 'id',
    code: 'code',
    name: 'name',
    discountType: 'discountType',
    discountValue: 'discountValue',
    startsAt: 'startsAt',
    endsAt: 'endsAt',
    usageLimit: 'usageLimit',
    usedCount: 'usedCount',
    active: 'active',
    planCodes: 'planCodes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const OrderScalarFieldEnum = {
    id: 'id',
    orderNumber: 'orderNumber',
    userId: 'userId',
    weddingId: 'weddingId',
    planId: 'planId',
    couponId: 'couponId',
    subtotalAmount: 'subtotalAmount',
    discountAmount: 'discountAmount',
    totalAmount: 'totalAmount',
    currency: 'currency',
    status: 'status',
    paymentStatus: 'paymentStatus',
    fulfillmentStatus: 'fulfillmentStatus',
    customerNote: 'customerNote',
    internalNote: 'internalNote',
    assignedStaffId: 'assignedStaffId',
    revisionCount: 'revisionCount',
    activatedAt: 'activatedAt',
    completedAt: 'completedAt',
    canceledAt: 'canceledAt',
    refundedAt: 'refundedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const OrderItemScalarFieldEnum = {
    id: 'id',
    orderId: 'orderId',
    itemType: 'itemType',
    planId: 'planId',
    addOnId: 'addOnId',
    name: 'name',
    quantity: 'quantity',
    unitAmount: 'unitAmount',
    totalAmount: 'totalAmount',
    metadata: 'metadata',
    createdAt: 'createdAt'
};
export const PaymentScalarFieldEnum = {
    id: 'id',
    orderId: 'orderId',
    method: 'method',
    status: 'status',
    amount: 'amount',
    currency: 'currency',
    reference: 'reference',
    proofUrl: 'proofUrl',
    note: 'note',
    provider: 'provider',
    providerTransactionId: 'providerTransactionId',
    idempotencyKey: 'idempotencyKey',
    submittedAt: 'submittedAt',
    confirmedAt: 'confirmedAt',
    rejectedAt: 'rejectedAt',
    refundedAt: 'refundedAt',
    reviewedById: 'reviewedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const OrderNoteScalarFieldEnum = {
    id: 'id',
    orderId: 'orderId',
    authorId: 'authorId',
    visibility: 'visibility',
    body: 'body',
    createdAt: 'createdAt'
};
export const EmailOutboxScalarFieldEnum = {
    id: 'id',
    recipient: 'recipient',
    subject: 'subject',
    htmlBody: 'htmlBody',
    textBody: 'textBody',
    templateKey: 'templateKey',
    metadata: 'metadata',
    status: 'status',
    provider: 'provider',
    providerMessageId: 'providerMessageId',
    attemptCount: 'attemptCount',
    nextAttemptAt: 'nextAttemptAt',
    sentAt: 'sentAt',
    lastError: 'lastError',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const WebhookEndpointScalarFieldEnum = {
    id: 'id',
    name: 'name',
    url: 'url',
    secretCiphertext: 'secretCiphertext',
    events: 'events',
    active: 'active',
    failureCount: 'failureCount',
    lastDeliveredAt: 'lastDeliveredAt',
    lastFailedAt: 'lastFailedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const WebhookDeliveryScalarFieldEnum = {
    id: 'id',
    endpointId: 'endpointId',
    eventType: 'eventType',
    eventId: 'eventId',
    payload: 'payload',
    status: 'status',
    attemptCount: 'attemptCount',
    nextAttemptAt: 'nextAttemptAt',
    responseStatus: 'responseStatus',
    responseBody: 'responseBody',
    lastError: 'lastError',
    deliveredAt: 'deliveredAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const PilotChecklistItemScalarFieldEnum = {
    id: 'id',
    code: 'code',
    category: 'category',
    title: 'title',
    description: 'description',
    owner: 'owner',
    status: 'status',
    evidenceUrl: 'evidenceUrl',
    notes: 'notes',
    sortOrder: 'sortOrder',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const PilotIssueScalarFieldEnum = {
    id: 'id',
    title: 'title',
    description: 'description',
    severity: 'severity',
    status: 'status',
    area: 'area',
    reporter: 'reporter',
    assignee: 'assignee',
    reproduction: 'reproduction',
    resolution: 'resolution',
    dueAt: 'dueAt',
    resolvedAt: 'resolvedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const SystemAnnouncementScalarFieldEnum = {
    id: 'id',
    title: 'title',
    message: 'message',
    level: 'level',
    active: 'active',
    startsAt: 'startsAt',
    endsAt: 'endsAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const GrowthEventScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    weddingId: 'weddingId',
    sessionId: 'sessionId',
    eventName: 'eventName',
    source: 'source',
    campaign: 'campaign',
    properties: 'properties',
    occurredAt: 'occurredAt'
};
export const ReferralCodeScalarFieldEnum = {
    id: 'id',
    ownerUserId: 'ownerUserId',
    code: 'code',
    label: 'label',
    active: 'active',
    visitCount: 'visitCount',
    signupCount: 'signupCount',
    conversionCount: 'conversionCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const ReferralAttributionScalarFieldEnum = {
    id: 'id',
    referralCodeId: 'referralCodeId',
    referredUserId: 'referredUserId',
    sessionId: 'sessionId',
    source: 'source',
    attributedAt: 'attributedAt',
    convertedAt: 'convertedAt'
};
export const OnboardingProgressScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    steps: 'steps',
    dismissed: 'dismissed',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const SupportTicketScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    email: 'email',
    subject: 'subject',
    category: 'category',
    priority: 'priority',
    status: 'status',
    message: 'message',
    resolution: 'resolution',
    assignedTo: 'assignedTo',
    firstResponseAt: 'firstResponseAt',
    resolvedAt: 'resolvedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const CustomDomainScalarFieldEnum = {
    id: 'id',
    weddingId: 'weddingId',
    requestedById: 'requestedById',
    hostname: 'hostname',
    status: 'status',
    verificationToken: 'verificationToken',
    dnsTarget: 'dnsTarget',
    lastCheckedAt: 'lastCheckedAt',
    verifiedAt: 'verifiedAt',
    activatedAt: 'activatedAt',
    failureReason: 'failureReason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const PartnerOrganizationScalarFieldEnum = {
    id: 'id',
    name: 'name',
    slug: 'slug',
    status: 'status',
    contactEmail: 'contactEmail',
    contactPhone: 'contactPhone',
    website: 'website',
    logoUrl: 'logoUrl',
    brandName: 'brandName',
    primaryColor: 'primaryColor',
    hideNgayDoiBrand: 'hideNgayDoiBrand',
    commissionRateBps: 'commissionRateBps',
    minimumPayout: 'minimumPayout',
    approvedAt: 'approvedAt',
    approvedById: 'approvedById',
    suspendedAt: 'suspendedAt',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const PartnerMemberScalarFieldEnum = {
    id: 'id',
    partnerId: 'partnerId',
    userId: 'userId',
    role: 'role',
    active: 'active',
    invitedAt: 'invitedAt',
    joinedAt: 'joinedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const PartnerClientScalarFieldEnum = {
    id: 'id',
    partnerId: 'partnerId',
    customerId: 'customerId',
    weddingId: 'weddingId',
    source: 'source',
    externalRef: 'externalRef',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const PartnerCommissionScalarFieldEnum = {
    id: 'id',
    partnerId: 'partnerId',
    orderId: 'orderId',
    customerId: 'customerId',
    weddingId: 'weddingId',
    description: 'description',
    baseAmount: 'baseAmount',
    rateBps: 'rateBps',
    commissionAmount: 'commissionAmount',
    status: 'status',
    availableAt: 'availableAt',
    approvedAt: 'approvedAt',
    paidAt: 'paidAt',
    payoutId: 'payoutId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const PartnerPayoutScalarFieldEnum = {
    id: 'id',
    partnerId: 'partnerId',
    requestedById: 'requestedById',
    reviewedById: 'reviewedById',
    amount: 'amount',
    status: 'status',
    bankName: 'bankName',
    accountName: 'accountName',
    accountNumberMasked: 'accountNumberMasked',
    note: 'note',
    rejectionReason: 'rejectionReason',
    requestedAt: 'requestedAt',
    reviewedAt: 'reviewedAt',
    paidAt: 'paidAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const SeatingTableScalarFieldEnum = {
    id: 'id',
    weddingId: 'weddingId',
    eventId: 'eventId',
    eventKey: 'eventKey',
    name: 'name',
    code: 'code',
    capacity: 'capacity',
    zone: 'zone',
    shape: 'shape',
    note: 'note',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const SeatAssignmentScalarFieldEnum = {
    id: 'id',
    weddingId: 'weddingId',
    eventId: 'eventId',
    eventKey: 'eventKey',
    tableId: 'tableId',
    guestId: 'guestId',
    seatCount: 'seatCount',
    note: 'note',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const CheckinStationScalarFieldEnum = {
    id: 'id',
    weddingId: 'weddingId',
    eventId: 'eventId',
    eventKey: 'eventKey',
    name: 'name',
    token: 'token',
    status: 'status',
    lastUsedAt: 'lastUsedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const CheckinRecordScalarFieldEnum = {
    id: 'id',
    weddingId: 'weddingId',
    eventId: 'eventId',
    eventKey: 'eventKey',
    guestId: 'guestId',
    invitationId: 'invitationId',
    stationId: 'stationId',
    method: 'method',
    adultCount: 'adultCount',
    childCount: 'childCount',
    note: 'note',
    checkedInAt: 'checkedInAt',
    checkedOutAt: 'checkedOutAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const MemoryAlbumScalarFieldEnum = {
    id: 'id',
    weddingId: 'weddingId',
    token: 'token',
    title: 'title',
    description: 'description',
    thankYouTitle: 'thankYouTitle',
    thankYouMessage: 'thankYouMessage',
    uploadEnabled: 'uploadEnabled',
    publicEnabled: 'publicEnabled',
    moderationRequired: 'moderationRequired',
    showUploaderName: 'showUploaderName',
    reactionsEnabled: 'reactionsEnabled',
    commentsEnabled: 'commentsEnabled',
    commentModerationRequired: 'commentModerationRequired',
    downloadsEnabled: 'downloadsEnabled',
    guestbookEnabled: 'guestbookEnabled',
    guestbookModerationRequired: 'guestbookModerationRequired',
    memoryModeEnabled: 'memoryModeEnabled',
    thankYouSignature: 'thankYouSignature',
    showCouplePhoto: 'showCouplePhoto',
    showWeddingDate: 'showWeddingDate',
    closesAt: 'closesAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const MemoryAssetScalarFieldEnum = {
    id: 'id',
    albumId: 'albumId',
    invitationId: 'invitationId',
    type: 'type',
    status: 'status',
    storageKey: 'storageKey',
    publicUrl: 'publicUrl',
    mimeType: 'mimeType',
    sizeBytes: 'sizeBytes',
    originalName: 'originalName',
    uploaderName: 'uploaderName',
    uploaderMessage: 'uploaderMessage',
    width: 'width',
    height: 'height',
    rejectionReason: 'rejectionReason',
    moderationNote: 'moderationNote',
    featuredOrder: 'featuredOrder',
    featuredAt: 'featuredAt',
    approvedAt: 'approvedAt',
    rejectedAt: 'rejectedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const MemoryReactionScalarFieldEnum = {
    id: 'id',
    assetId: 'assetId',
    actorHash: 'actorHash',
    type: 'type',
    createdAt: 'createdAt'
};
export const MemoryCommentScalarFieldEnum = {
    id: 'id',
    assetId: 'assetId',
    invitationId: 'invitationId',
    authorName: 'authorName',
    actorHash: 'actorHash',
    body: 'body',
    status: 'status',
    approvedAt: 'approvedAt',
    hiddenAt: 'hiddenAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const GuestbookEntryScalarFieldEnum = {
    id: 'id',
    weddingId: 'weddingId',
    invitationId: 'invitationId',
    authorName: 'authorName',
    message: 'message',
    status: 'status',
    approvedAt: 'approvedAt',
    hiddenAt: 'hiddenAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const PlanningTaskScalarFieldEnum = {
    id: 'id',
    weddingId: 'weddingId',
    title: 'title',
    description: 'description',
    category: 'category',
    priority: 'priority',
    status: 'status',
    source: 'source',
    dueAt: 'dueAt',
    assigneeName: 'assigneeName',
    sortOrder: 'sortOrder',
    reminderEnabled: 'reminderEnabled',
    reminderDaysBefore: 'reminderDaysBefore',
    lastReminderAt: 'lastReminderAt',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const NullableJsonNullValueInput = {
    DbNull: DbNull,
    JsonNull: JsonNull
};
export const JsonNullValueInput = {
    JsonNull: JsonNull
};
export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
export const JsonNullValueFilter = {
    DbNull: DbNull,
    JsonNull: JsonNull,
    AnyNull: AnyNull
};
export const defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map