export const UserRole = {
    CUSTOMER: 'CUSTOMER',
    FAMILY_EDITOR: 'FAMILY_EDITOR',
    STAFF: 'STAFF',
    ADMIN: 'ADMIN',
    PARTNER: 'PARTNER',
    CHECKIN_STAFF: 'CHECKIN_STAFF'
};
export const UserStatus = {
    PENDING_VERIFICATION: 'PENDING_VERIFICATION',
    ACTIVE: 'ACTIVE',
    DISABLED: 'DISABLED',
    DELETION_REQUESTED: 'DELETION_REQUESTED'
};
export const WeddingStatus = {
    DRAFT: 'DRAFT',
    READY_FOR_REVIEW: 'READY_FOR_REVIEW',
    PUBLISHED: 'PUBLISHED',
    SUSPENDED: 'SUSPENDED',
    EXPIRED: 'EXPIRED',
    ARCHIVED: 'ARCHIVED'
};
export const WeddingSide = {
    SHARED: 'SHARED',
    BRIDE: 'BRIDE',
    GROOM: 'GROOM'
};
export const EventType = {
    ENGAGEMENT: 'ENGAGEMENT',
    ANCESTOR_CEREMONY: 'ANCESTOR_CEREMONY',
    WEDDING_CEREMONY: 'WEDDING_CEREMONY',
    RECEPTION: 'RECEPTION',
    OTHER: 'OTHER'
};
export const WeddingPermission = {
    VIEW: 'VIEW',
    EDIT: 'EDIT'
};
export const CollaborationStatus = {
    PENDING: 'PENDING',
    ACCEPTED: 'ACCEPTED',
    REVOKED: 'REVOKED',
    EXPIRED: 'EXPIRED'
};
export const InvitationStatus = {
    CREATED: 'CREATED',
    SENT: 'SENT',
    VIEWED: 'VIEWED',
    RESPONDED: 'RESPONDED',
    REVOKED: 'REVOKED'
};
export const RsvpStatus = {
    ATTENDING: 'ATTENDING',
    DECLINED: 'DECLINED',
    MAYBE: 'MAYBE'
};
export const PlanCode = {
    FREE: 'FREE',
    STARTER: 'STARTER',
    STANDARD: 'STANDARD',
    PREMIUM: 'PREMIUM'
};
export const OrderStatus = {
    AWAITING_PAYMENT: 'AWAITING_PAYMENT',
    PAYMENT_REVIEW: 'PAYMENT_REVIEW',
    PAID: 'PAID',
    FULFILLING: 'FULFILLING',
    COMPLETED: 'COMPLETED',
    CANCELED: 'CANCELED',
    REFUNDED: 'REFUNDED'
};
export const PaymentStatus = {
    PENDING: 'PENDING',
    SUBMITTED: 'SUBMITTED',
    CONFIRMED: 'CONFIRMED',
    REJECTED: 'REJECTED',
    REFUNDED: 'REFUNDED'
};
export const FulfillmentStatus = {
    PENDING: 'PENDING',
    ACTIVE: 'ACTIVE',
    SUSPENDED: 'SUSPENDED',
    COMPLETED: 'COMPLETED'
};
export const PaymentMethod = {
    MANUAL_BANK_TRANSFER: 'MANUAL_BANK_TRANSFER',
    SANDBOX: 'SANDBOX'
};
export const DiscountType = {
    FIXED: 'FIXED',
    PERCENTAGE: 'PERCENTAGE'
};
export const DeliveryStatus = {
    PENDING: 'PENDING',
    PROCESSING: 'PROCESSING',
    DELIVERED: 'DELIVERED',
    FAILED: 'FAILED',
    DEAD_LETTER: 'DEAD_LETTER'
};
export const SeatingTableShape = {
    ROUND: 'ROUND',
    RECTANGLE: 'RECTANGLE',
    LONG: 'LONG',
    OTHER: 'OTHER'
};
export const CheckinMethod = {
    QR: 'QR',
    MANUAL: 'MANUAL',
    SEARCH: 'SEARCH'
};
export const PublishReviewStatus = {
    NOT_REQUESTED: 'NOT_REQUESTED',
    REQUESTED: 'REQUESTED',
    IN_REVIEW: 'IN_REVIEW',
    APPROVED: 'APPROVED',
    CHANGES_REQUESTED: 'CHANGES_REQUESTED',
    REJECTED: 'REJECTED'
};
export const PlanningTaskStatus = {
    TODO: 'TODO',
    IN_PROGRESS: 'IN_PROGRESS',
    DONE: 'DONE',
    CANCELED: 'CANCELED'
};
export const PlanningTaskPriority = {
    LOW: 'LOW',
    NORMAL: 'NORMAL',
    HIGH: 'HIGH',
    URGENT: 'URGENT'
};
export const PlanningTaskCategory = {
    FOUNDATION: 'FOUNDATION',
    INVITATION: 'INVITATION',
    GUESTS: 'GUESTS',
    CEREMONY: 'CEREMONY',
    VENUE: 'VENUE',
    VENDORS: 'VENDORS',
    FINANCE: 'FINANCE',
    LEGAL: 'LEGAL',
    PERSONAL: 'PERSONAL',
    AFTER_WEDDING: 'AFTER_WEDDING',
    OTHER: 'OTHER'
};
export const PlanningTaskSource = {
    SYSTEM: 'SYSTEM',
    CUSTOM: 'CUSTOM'
};
export const PilotItemStatus = {
    NOT_STARTED: 'NOT_STARTED',
    IN_PROGRESS: 'IN_PROGRESS',
    BLOCKED: 'BLOCKED',
    PASSED: 'PASSED',
    FAILED: 'FAILED',
    WAIVED: 'WAIVED'
};
export const PilotIssueSeverity = {
    LOW: 'LOW',
    MEDIUM: 'MEDIUM',
    HIGH: 'HIGH',
    CRITICAL: 'CRITICAL'
};
export const PilotIssueStatus = {
    OPEN: 'OPEN',
    INVESTIGATING: 'INVESTIGATING',
    FIXED: 'FIXED',
    VERIFIED: 'VERIFIED',
    CLOSED: 'CLOSED'
};
export const SupportTicketStatus = {
    OPEN: 'OPEN',
    IN_PROGRESS: 'IN_PROGRESS',
    WAITING_CUSTOMER: 'WAITING_CUSTOMER',
    RESOLVED: 'RESOLVED',
    CLOSED: 'CLOSED'
};
export const SupportTicketPriority = {
    LOW: 'LOW',
    NORMAL: 'NORMAL',
    HIGH: 'HIGH',
    URGENT: 'URGENT'
};
export const DomainStatus = {
    PENDING_DNS: 'PENDING_DNS',
    VERIFYING: 'VERIFYING',
    VERIFIED: 'VERIFIED',
    ACTIVE: 'ACTIVE',
    FAILED: 'FAILED',
    DISABLED: 'DISABLED'
};
export const PartnerStatus = {
    PENDING: 'PENDING',
    ACTIVE: 'ACTIVE',
    SUSPENDED: 'SUSPENDED',
    REJECTED: 'REJECTED'
};
export const PartnerMemberRole = {
    OWNER: 'OWNER',
    MANAGER: 'MANAGER',
    MEMBER: 'MEMBER'
};
export const CommissionStatus = {
    PENDING: 'PENDING',
    APPROVED: 'APPROVED',
    PAYABLE: 'PAYABLE',
    PAID: 'PAID',
    VOID: 'VOID'
};
export const PayoutStatus = {
    REQUESTED: 'REQUESTED',
    REVIEWING: 'REVIEWING',
    APPROVED: 'APPROVED',
    PROCESSING: 'PROCESSING',
    PAID: 'PAID',
    REJECTED: 'REJECTED',
    CANCELED: 'CANCELED'
};
export const CheckinStationStatus = {
    ACTIVE: 'ACTIVE',
    DISABLED: 'DISABLED'
};
export const MemoryAssetStatus = {
    PENDING: 'PENDING',
    APPROVED: 'APPROVED',
    REJECTED: 'REJECTED',
    ARCHIVED: 'ARCHIVED'
};
export const MemoryAssetType = {
    IMAGE: 'IMAGE',
    VIDEO: 'VIDEO'
};
export const SocialContentStatus = {
    PENDING: 'PENDING',
    APPROVED: 'APPROVED',
    HIDDEN: 'HIDDEN'
};
export const MemoryReactionType = {
    HEART: 'HEART'
};
//# sourceMappingURL=enums.js.map