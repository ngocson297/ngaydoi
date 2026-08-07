export declare const UserRole: {
    readonly CUSTOMER: "CUSTOMER";
    readonly FAMILY_EDITOR: "FAMILY_EDITOR";
    readonly STAFF: "STAFF";
    readonly ADMIN: "ADMIN";
    readonly PARTNER: "PARTNER";
    readonly CHECKIN_STAFF: "CHECKIN_STAFF";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const UserStatus: {
    readonly PENDING_VERIFICATION: "PENDING_VERIFICATION";
    readonly ACTIVE: "ACTIVE";
    readonly DISABLED: "DISABLED";
    readonly DELETION_REQUESTED: "DELETION_REQUESTED";
};
export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];
export declare const WeddingStatus: {
    readonly DRAFT: "DRAFT";
    readonly READY_FOR_REVIEW: "READY_FOR_REVIEW";
    readonly PUBLISHED: "PUBLISHED";
    readonly SUSPENDED: "SUSPENDED";
    readonly EXPIRED: "EXPIRED";
    readonly ARCHIVED: "ARCHIVED";
};
export type WeddingStatus = (typeof WeddingStatus)[keyof typeof WeddingStatus];
export declare const WeddingSide: {
    readonly SHARED: "SHARED";
    readonly BRIDE: "BRIDE";
    readonly GROOM: "GROOM";
};
export type WeddingSide = (typeof WeddingSide)[keyof typeof WeddingSide];
export declare const EventType: {
    readonly ENGAGEMENT: "ENGAGEMENT";
    readonly ANCESTOR_CEREMONY: "ANCESTOR_CEREMONY";
    readonly WEDDING_CEREMONY: "WEDDING_CEREMONY";
    readonly RECEPTION: "RECEPTION";
    readonly OTHER: "OTHER";
};
export type EventType = (typeof EventType)[keyof typeof EventType];
export declare const WeddingPermission: {
    readonly VIEW: "VIEW";
    readonly EDIT: "EDIT";
};
export type WeddingPermission = (typeof WeddingPermission)[keyof typeof WeddingPermission];
export declare const CollaborationStatus: {
    readonly PENDING: "PENDING";
    readonly ACCEPTED: "ACCEPTED";
    readonly REVOKED: "REVOKED";
    readonly EXPIRED: "EXPIRED";
};
export type CollaborationStatus = (typeof CollaborationStatus)[keyof typeof CollaborationStatus];
export declare const InvitationStatus: {
    readonly CREATED: "CREATED";
    readonly SENT: "SENT";
    readonly VIEWED: "VIEWED";
    readonly RESPONDED: "RESPONDED";
    readonly REVOKED: "REVOKED";
};
export type InvitationStatus = (typeof InvitationStatus)[keyof typeof InvitationStatus];
export declare const RsvpStatus: {
    readonly ATTENDING: "ATTENDING";
    readonly DECLINED: "DECLINED";
    readonly MAYBE: "MAYBE";
};
export type RsvpStatus = (typeof RsvpStatus)[keyof typeof RsvpStatus];
export declare const PlanCode: {
    readonly FREE: "FREE";
    readonly STARTER: "STARTER";
    readonly STANDARD: "STANDARD";
    readonly PREMIUM: "PREMIUM";
};
export type PlanCode = (typeof PlanCode)[keyof typeof PlanCode];
export declare const OrderStatus: {
    readonly AWAITING_PAYMENT: "AWAITING_PAYMENT";
    readonly PAYMENT_REVIEW: "PAYMENT_REVIEW";
    readonly PAID: "PAID";
    readonly FULFILLING: "FULFILLING";
    readonly COMPLETED: "COMPLETED";
    readonly CANCELED: "CANCELED";
    readonly REFUNDED: "REFUNDED";
};
export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];
export declare const PaymentStatus: {
    readonly PENDING: "PENDING";
    readonly SUBMITTED: "SUBMITTED";
    readonly CONFIRMED: "CONFIRMED";
    readonly REJECTED: "REJECTED";
    readonly REFUNDED: "REFUNDED";
};
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];
export declare const FulfillmentStatus: {
    readonly PENDING: "PENDING";
    readonly ACTIVE: "ACTIVE";
    readonly SUSPENDED: "SUSPENDED";
    readonly COMPLETED: "COMPLETED";
};
export type FulfillmentStatus = (typeof FulfillmentStatus)[keyof typeof FulfillmentStatus];
export declare const PaymentMethod: {
    readonly MANUAL_BANK_TRANSFER: "MANUAL_BANK_TRANSFER";
    readonly SANDBOX: "SANDBOX";
};
export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod];
export declare const DiscountType: {
    readonly FIXED: "FIXED";
    readonly PERCENTAGE: "PERCENTAGE";
};
export type DiscountType = (typeof DiscountType)[keyof typeof DiscountType];
export declare const DeliveryStatus: {
    readonly PENDING: "PENDING";
    readonly PROCESSING: "PROCESSING";
    readonly DELIVERED: "DELIVERED";
    readonly FAILED: "FAILED";
    readonly DEAD_LETTER: "DEAD_LETTER";
};
export type DeliveryStatus = (typeof DeliveryStatus)[keyof typeof DeliveryStatus];
export declare const SeatingTableShape: {
    readonly ROUND: "ROUND";
    readonly RECTANGLE: "RECTANGLE";
    readonly LONG: "LONG";
    readonly OTHER: "OTHER";
};
export type SeatingTableShape = (typeof SeatingTableShape)[keyof typeof SeatingTableShape];
export declare const CheckinMethod: {
    readonly QR: "QR";
    readonly MANUAL: "MANUAL";
    readonly SEARCH: "SEARCH";
};
export type CheckinMethod = (typeof CheckinMethod)[keyof typeof CheckinMethod];
export declare const PublishReviewStatus: {
    readonly NOT_REQUESTED: "NOT_REQUESTED";
    readonly REQUESTED: "REQUESTED";
    readonly IN_REVIEW: "IN_REVIEW";
    readonly APPROVED: "APPROVED";
    readonly CHANGES_REQUESTED: "CHANGES_REQUESTED";
    readonly REJECTED: "REJECTED";
};
export type PublishReviewStatus = (typeof PublishReviewStatus)[keyof typeof PublishReviewStatus];
export declare const PlanningTaskStatus: {
    readonly TODO: "TODO";
    readonly IN_PROGRESS: "IN_PROGRESS";
    readonly DONE: "DONE";
    readonly CANCELED: "CANCELED";
};
export type PlanningTaskStatus = (typeof PlanningTaskStatus)[keyof typeof PlanningTaskStatus];
export declare const PlanningTaskPriority: {
    readonly LOW: "LOW";
    readonly NORMAL: "NORMAL";
    readonly HIGH: "HIGH";
    readonly URGENT: "URGENT";
};
export type PlanningTaskPriority = (typeof PlanningTaskPriority)[keyof typeof PlanningTaskPriority];
export declare const PlanningTaskCategory: {
    readonly FOUNDATION: "FOUNDATION";
    readonly INVITATION: "INVITATION";
    readonly GUESTS: "GUESTS";
    readonly CEREMONY: "CEREMONY";
    readonly VENUE: "VENUE";
    readonly VENDORS: "VENDORS";
    readonly FINANCE: "FINANCE";
    readonly LEGAL: "LEGAL";
    readonly PERSONAL: "PERSONAL";
    readonly AFTER_WEDDING: "AFTER_WEDDING";
    readonly OTHER: "OTHER";
};
export type PlanningTaskCategory = (typeof PlanningTaskCategory)[keyof typeof PlanningTaskCategory];
export declare const PlanningTaskSource: {
    readonly SYSTEM: "SYSTEM";
    readonly CUSTOM: "CUSTOM";
};
export type PlanningTaskSource = (typeof PlanningTaskSource)[keyof typeof PlanningTaskSource];
export declare const PilotItemStatus: {
    readonly NOT_STARTED: "NOT_STARTED";
    readonly IN_PROGRESS: "IN_PROGRESS";
    readonly BLOCKED: "BLOCKED";
    readonly PASSED: "PASSED";
    readonly FAILED: "FAILED";
    readonly WAIVED: "WAIVED";
};
export type PilotItemStatus = (typeof PilotItemStatus)[keyof typeof PilotItemStatus];
export declare const PilotIssueSeverity: {
    readonly LOW: "LOW";
    readonly MEDIUM: "MEDIUM";
    readonly HIGH: "HIGH";
    readonly CRITICAL: "CRITICAL";
};
export type PilotIssueSeverity = (typeof PilotIssueSeverity)[keyof typeof PilotIssueSeverity];
export declare const PilotIssueStatus: {
    readonly OPEN: "OPEN";
    readonly INVESTIGATING: "INVESTIGATING";
    readonly FIXED: "FIXED";
    readonly VERIFIED: "VERIFIED";
    readonly CLOSED: "CLOSED";
};
export type PilotIssueStatus = (typeof PilotIssueStatus)[keyof typeof PilotIssueStatus];
export declare const SupportTicketStatus: {
    readonly OPEN: "OPEN";
    readonly IN_PROGRESS: "IN_PROGRESS";
    readonly WAITING_CUSTOMER: "WAITING_CUSTOMER";
    readonly RESOLVED: "RESOLVED";
    readonly CLOSED: "CLOSED";
};
export type SupportTicketStatus = (typeof SupportTicketStatus)[keyof typeof SupportTicketStatus];
export declare const SupportTicketPriority: {
    readonly LOW: "LOW";
    readonly NORMAL: "NORMAL";
    readonly HIGH: "HIGH";
    readonly URGENT: "URGENT";
};
export type SupportTicketPriority = (typeof SupportTicketPriority)[keyof typeof SupportTicketPriority];
export declare const DomainStatus: {
    readonly PENDING_DNS: "PENDING_DNS";
    readonly VERIFYING: "VERIFYING";
    readonly VERIFIED: "VERIFIED";
    readonly ACTIVE: "ACTIVE";
    readonly FAILED: "FAILED";
    readonly DISABLED: "DISABLED";
};
export type DomainStatus = (typeof DomainStatus)[keyof typeof DomainStatus];
export declare const PartnerStatus: {
    readonly PENDING: "PENDING";
    readonly ACTIVE: "ACTIVE";
    readonly SUSPENDED: "SUSPENDED";
    readonly REJECTED: "REJECTED";
};
export type PartnerStatus = (typeof PartnerStatus)[keyof typeof PartnerStatus];
export declare const PartnerMemberRole: {
    readonly OWNER: "OWNER";
    readonly MANAGER: "MANAGER";
    readonly MEMBER: "MEMBER";
};
export type PartnerMemberRole = (typeof PartnerMemberRole)[keyof typeof PartnerMemberRole];
export declare const CommissionStatus: {
    readonly PENDING: "PENDING";
    readonly APPROVED: "APPROVED";
    readonly PAYABLE: "PAYABLE";
    readonly PAID: "PAID";
    readonly VOID: "VOID";
};
export type CommissionStatus = (typeof CommissionStatus)[keyof typeof CommissionStatus];
export declare const PayoutStatus: {
    readonly REQUESTED: "REQUESTED";
    readonly REVIEWING: "REVIEWING";
    readonly APPROVED: "APPROVED";
    readonly PROCESSING: "PROCESSING";
    readonly PAID: "PAID";
    readonly REJECTED: "REJECTED";
    readonly CANCELED: "CANCELED";
};
export type PayoutStatus = (typeof PayoutStatus)[keyof typeof PayoutStatus];
export declare const CheckinStationStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly DISABLED: "DISABLED";
};
export type CheckinStationStatus = (typeof CheckinStationStatus)[keyof typeof CheckinStationStatus];
export declare const MemoryAssetStatus: {
    readonly PENDING: "PENDING";
    readonly APPROVED: "APPROVED";
    readonly REJECTED: "REJECTED";
    readonly ARCHIVED: "ARCHIVED";
};
export type MemoryAssetStatus = (typeof MemoryAssetStatus)[keyof typeof MemoryAssetStatus];
export declare const MemoryAssetType: {
    readonly IMAGE: "IMAGE";
    readonly VIDEO: "VIDEO";
};
export type MemoryAssetType = (typeof MemoryAssetType)[keyof typeof MemoryAssetType];
export declare const SocialContentStatus: {
    readonly PENDING: "PENDING";
    readonly APPROVED: "APPROVED";
    readonly HIDDEN: "HIDDEN";
};
export type SocialContentStatus = (typeof SocialContentStatus)[keyof typeof SocialContentStatus];
export declare const MemoryReactionType: {
    readonly HEART: "HEART";
};
export type MemoryReactionType = (typeof MemoryReactionType)[keyof typeof MemoryReactionType];
