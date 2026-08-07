import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> = [
    PrismaClientOptions
] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? ((Without<T, U> & U) | (Without<U, T> & T)) & object : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly User: "User";
    readonly RefreshSession: "RefreshSession";
    readonly EmailVerificationToken: "EmailVerificationToken";
    readonly PasswordResetToken: "PasswordResetToken";
    readonly AuditLog: "AuditLog";
    readonly Wedding: "Wedding";
    readonly WeddingCollaborator: "WeddingCollaborator";
    readonly Event: "Event";
    readonly Guest: "Guest";
    readonly Invitation: "Invitation";
    readonly Rsvp: "Rsvp";
    readonly InvitationEvent: "InvitationEvent";
    readonly RsvpEventSelection: "RsvpEventSelection";
    readonly RsvpHistory: "RsvpHistory";
    readonly Notification: "Notification";
    readonly MediaAsset: "MediaAsset";
    readonly GiftQrAsset: "GiftQrAsset";
    readonly InvitationDesign: "InvitationDesign";
    readonly InvitationVersion: "InvitationVersion";
    readonly InvitationPreviewToken: "InvitationPreviewToken";
    readonly Plan: "Plan";
    readonly AddOn: "AddOn";
    readonly Coupon: "Coupon";
    readonly Order: "Order";
    readonly OrderItem: "OrderItem";
    readonly Payment: "Payment";
    readonly OrderNote: "OrderNote";
    readonly EmailOutbox: "EmailOutbox";
    readonly WebhookEndpoint: "WebhookEndpoint";
    readonly WebhookDelivery: "WebhookDelivery";
    readonly PilotChecklistItem: "PilotChecklistItem";
    readonly PilotIssue: "PilotIssue";
    readonly SystemAnnouncement: "SystemAnnouncement";
    readonly GrowthEvent: "GrowthEvent";
    readonly ReferralCode: "ReferralCode";
    readonly ReferralAttribution: "ReferralAttribution";
    readonly OnboardingProgress: "OnboardingProgress";
    readonly SupportTicket: "SupportTicket";
    readonly CustomDomain: "CustomDomain";
    readonly PartnerOrganization: "PartnerOrganization";
    readonly PartnerMember: "PartnerMember";
    readonly PartnerClient: "PartnerClient";
    readonly PartnerCommission: "PartnerCommission";
    readonly PartnerPayout: "PartnerPayout";
    readonly SeatingTable: "SeatingTable";
    readonly SeatAssignment: "SeatAssignment";
    readonly CheckinStation: "CheckinStation";
    readonly CheckinRecord: "CheckinRecord";
    readonly MemoryAlbum: "MemoryAlbum";
    readonly MemoryAsset: "MemoryAsset";
    readonly MemoryReaction: "MemoryReaction";
    readonly MemoryComment: "MemoryComment";
    readonly GuestbookEntry: "GuestbookEntry";
    readonly PlanningTask: "PlanningTask";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "refreshSession" | "emailVerificationToken" | "passwordResetToken" | "auditLog" | "wedding" | "weddingCollaborator" | "event" | "guest" | "invitation" | "rsvp" | "invitationEvent" | "rsvpEventSelection" | "rsvpHistory" | "notification" | "mediaAsset" | "giftQrAsset" | "invitationDesign" | "invitationVersion" | "invitationPreviewToken" | "plan" | "addOn" | "coupon" | "order" | "orderItem" | "payment" | "orderNote" | "emailOutbox" | "webhookEndpoint" | "webhookDelivery" | "pilotChecklistItem" | "pilotIssue" | "systemAnnouncement" | "growthEvent" | "referralCode" | "referralAttribution" | "onboardingProgress" | "supportTicket" | "customDomain" | "partnerOrganization" | "partnerMember" | "partnerClient" | "partnerCommission" | "partnerPayout" | "seatingTable" | "seatAssignment" | "checkinStation" | "checkinRecord" | "memoryAlbum" | "memoryAsset" | "memoryReaction" | "memoryComment" | "guestbookEntry" | "planningTask";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        RefreshSession: {
            payload: Prisma.$RefreshSessionPayload<ExtArgs>;
            fields: Prisma.RefreshSessionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RefreshSessionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshSessionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RefreshSessionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshSessionPayload>;
                };
                findFirst: {
                    args: Prisma.RefreshSessionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshSessionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RefreshSessionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshSessionPayload>;
                };
                findMany: {
                    args: Prisma.RefreshSessionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshSessionPayload>[];
                };
                create: {
                    args: Prisma.RefreshSessionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshSessionPayload>;
                };
                createMany: {
                    args: Prisma.RefreshSessionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RefreshSessionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshSessionPayload>[];
                };
                delete: {
                    args: Prisma.RefreshSessionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshSessionPayload>;
                };
                update: {
                    args: Prisma.RefreshSessionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshSessionPayload>;
                };
                deleteMany: {
                    args: Prisma.RefreshSessionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RefreshSessionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RefreshSessionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshSessionPayload>[];
                };
                upsert: {
                    args: Prisma.RefreshSessionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshSessionPayload>;
                };
                aggregate: {
                    args: Prisma.RefreshSessionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRefreshSession>;
                };
                groupBy: {
                    args: Prisma.RefreshSessionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RefreshSessionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RefreshSessionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RefreshSessionCountAggregateOutputType> | number;
                };
            };
        };
        EmailVerificationToken: {
            payload: Prisma.$EmailVerificationTokenPayload<ExtArgs>;
            fields: Prisma.EmailVerificationTokenFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EmailVerificationTokenFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EmailVerificationTokenFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>;
                };
                findFirst: {
                    args: Prisma.EmailVerificationTokenFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EmailVerificationTokenFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>;
                };
                findMany: {
                    args: Prisma.EmailVerificationTokenFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>[];
                };
                create: {
                    args: Prisma.EmailVerificationTokenCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>;
                };
                createMany: {
                    args: Prisma.EmailVerificationTokenCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EmailVerificationTokenCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>[];
                };
                delete: {
                    args: Prisma.EmailVerificationTokenDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>;
                };
                update: {
                    args: Prisma.EmailVerificationTokenUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>;
                };
                deleteMany: {
                    args: Prisma.EmailVerificationTokenDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EmailVerificationTokenUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EmailVerificationTokenUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>[];
                };
                upsert: {
                    args: Prisma.EmailVerificationTokenUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>;
                };
                aggregate: {
                    args: Prisma.EmailVerificationTokenAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEmailVerificationToken>;
                };
                groupBy: {
                    args: Prisma.EmailVerificationTokenGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EmailVerificationTokenGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EmailVerificationTokenCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EmailVerificationTokenCountAggregateOutputType> | number;
                };
            };
        };
        PasswordResetToken: {
            payload: Prisma.$PasswordResetTokenPayload<ExtArgs>;
            fields: Prisma.PasswordResetTokenFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PasswordResetTokenFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                findFirst: {
                    args: Prisma.PasswordResetTokenFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                findMany: {
                    args: Prisma.PasswordResetTokenFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[];
                };
                create: {
                    args: Prisma.PasswordResetTokenCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                createMany: {
                    args: Prisma.PasswordResetTokenCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[];
                };
                delete: {
                    args: Prisma.PasswordResetTokenDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                update: {
                    args: Prisma.PasswordResetTokenUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                deleteMany: {
                    args: Prisma.PasswordResetTokenDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PasswordResetTokenUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[];
                };
                upsert: {
                    args: Prisma.PasswordResetTokenUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                aggregate: {
                    args: Prisma.PasswordResetTokenAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePasswordResetToken>;
                };
                groupBy: {
                    args: Prisma.PasswordResetTokenGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PasswordResetTokenGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PasswordResetTokenCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PasswordResetTokenCountAggregateOutputType> | number;
                };
            };
        };
        AuditLog: {
            payload: Prisma.$AuditLogPayload<ExtArgs>;
            fields: Prisma.AuditLogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AuditLogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findFirst: {
                    args: Prisma.AuditLogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findMany: {
                    args: Prisma.AuditLogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                create: {
                    args: Prisma.AuditLogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                createMany: {
                    args: Prisma.AuditLogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                delete: {
                    args: Prisma.AuditLogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                update: {
                    args: Prisma.AuditLogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                deleteMany: {
                    args: Prisma.AuditLogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AuditLogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                upsert: {
                    args: Prisma.AuditLogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                aggregate: {
                    args: Prisma.AuditLogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAuditLog>;
                };
                groupBy: {
                    args: Prisma.AuditLogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AuditLogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogCountAggregateOutputType> | number;
                };
            };
        };
        Wedding: {
            payload: Prisma.$WeddingPayload<ExtArgs>;
            fields: Prisma.WeddingFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.WeddingFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WeddingPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.WeddingFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WeddingPayload>;
                };
                findFirst: {
                    args: Prisma.WeddingFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WeddingPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.WeddingFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WeddingPayload>;
                };
                findMany: {
                    args: Prisma.WeddingFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WeddingPayload>[];
                };
                create: {
                    args: Prisma.WeddingCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WeddingPayload>;
                };
                createMany: {
                    args: Prisma.WeddingCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.WeddingCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WeddingPayload>[];
                };
                delete: {
                    args: Prisma.WeddingDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WeddingPayload>;
                };
                update: {
                    args: Prisma.WeddingUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WeddingPayload>;
                };
                deleteMany: {
                    args: Prisma.WeddingDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.WeddingUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.WeddingUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WeddingPayload>[];
                };
                upsert: {
                    args: Prisma.WeddingUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WeddingPayload>;
                };
                aggregate: {
                    args: Prisma.WeddingAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateWedding>;
                };
                groupBy: {
                    args: Prisma.WeddingGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WeddingGroupByOutputType>[];
                };
                count: {
                    args: Prisma.WeddingCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WeddingCountAggregateOutputType> | number;
                };
            };
        };
        WeddingCollaborator: {
            payload: Prisma.$WeddingCollaboratorPayload<ExtArgs>;
            fields: Prisma.WeddingCollaboratorFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.WeddingCollaboratorFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WeddingCollaboratorPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.WeddingCollaboratorFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WeddingCollaboratorPayload>;
                };
                findFirst: {
                    args: Prisma.WeddingCollaboratorFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WeddingCollaboratorPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.WeddingCollaboratorFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WeddingCollaboratorPayload>;
                };
                findMany: {
                    args: Prisma.WeddingCollaboratorFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WeddingCollaboratorPayload>[];
                };
                create: {
                    args: Prisma.WeddingCollaboratorCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WeddingCollaboratorPayload>;
                };
                createMany: {
                    args: Prisma.WeddingCollaboratorCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.WeddingCollaboratorCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WeddingCollaboratorPayload>[];
                };
                delete: {
                    args: Prisma.WeddingCollaboratorDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WeddingCollaboratorPayload>;
                };
                update: {
                    args: Prisma.WeddingCollaboratorUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WeddingCollaboratorPayload>;
                };
                deleteMany: {
                    args: Prisma.WeddingCollaboratorDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.WeddingCollaboratorUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.WeddingCollaboratorUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WeddingCollaboratorPayload>[];
                };
                upsert: {
                    args: Prisma.WeddingCollaboratorUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WeddingCollaboratorPayload>;
                };
                aggregate: {
                    args: Prisma.WeddingCollaboratorAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateWeddingCollaborator>;
                };
                groupBy: {
                    args: Prisma.WeddingCollaboratorGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WeddingCollaboratorGroupByOutputType>[];
                };
                count: {
                    args: Prisma.WeddingCollaboratorCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WeddingCollaboratorCountAggregateOutputType> | number;
                };
            };
        };
        Event: {
            payload: Prisma.$EventPayload<ExtArgs>;
            fields: Prisma.EventFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EventFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload>;
                };
                findFirst: {
                    args: Prisma.EventFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload>;
                };
                findMany: {
                    args: Prisma.EventFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload>[];
                };
                create: {
                    args: Prisma.EventCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload>;
                };
                createMany: {
                    args: Prisma.EventCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload>[];
                };
                delete: {
                    args: Prisma.EventDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload>;
                };
                update: {
                    args: Prisma.EventUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload>;
                };
                deleteMany: {
                    args: Prisma.EventDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EventUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload>[];
                };
                upsert: {
                    args: Prisma.EventUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload>;
                };
                aggregate: {
                    args: Prisma.EventAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEvent>;
                };
                groupBy: {
                    args: Prisma.EventGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EventGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EventCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EventCountAggregateOutputType> | number;
                };
            };
        };
        Guest: {
            payload: Prisma.$GuestPayload<ExtArgs>;
            fields: Prisma.GuestFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.GuestFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GuestPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.GuestFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GuestPayload>;
                };
                findFirst: {
                    args: Prisma.GuestFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GuestPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.GuestFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GuestPayload>;
                };
                findMany: {
                    args: Prisma.GuestFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GuestPayload>[];
                };
                create: {
                    args: Prisma.GuestCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GuestPayload>;
                };
                createMany: {
                    args: Prisma.GuestCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.GuestCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GuestPayload>[];
                };
                delete: {
                    args: Prisma.GuestDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GuestPayload>;
                };
                update: {
                    args: Prisma.GuestUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GuestPayload>;
                };
                deleteMany: {
                    args: Prisma.GuestDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.GuestUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.GuestUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GuestPayload>[];
                };
                upsert: {
                    args: Prisma.GuestUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GuestPayload>;
                };
                aggregate: {
                    args: Prisma.GuestAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateGuest>;
                };
                groupBy: {
                    args: Prisma.GuestGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GuestGroupByOutputType>[];
                };
                count: {
                    args: Prisma.GuestCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GuestCountAggregateOutputType> | number;
                };
            };
        };
        Invitation: {
            payload: Prisma.$InvitationPayload<ExtArgs>;
            fields: Prisma.InvitationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.InvitationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.InvitationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationPayload>;
                };
                findFirst: {
                    args: Prisma.InvitationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.InvitationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationPayload>;
                };
                findMany: {
                    args: Prisma.InvitationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationPayload>[];
                };
                create: {
                    args: Prisma.InvitationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationPayload>;
                };
                createMany: {
                    args: Prisma.InvitationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.InvitationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationPayload>[];
                };
                delete: {
                    args: Prisma.InvitationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationPayload>;
                };
                update: {
                    args: Prisma.InvitationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationPayload>;
                };
                deleteMany: {
                    args: Prisma.InvitationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.InvitationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.InvitationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationPayload>[];
                };
                upsert: {
                    args: Prisma.InvitationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationPayload>;
                };
                aggregate: {
                    args: Prisma.InvitationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateInvitation>;
                };
                groupBy: {
                    args: Prisma.InvitationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InvitationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.InvitationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InvitationCountAggregateOutputType> | number;
                };
            };
        };
        Rsvp: {
            payload: Prisma.$RsvpPayload<ExtArgs>;
            fields: Prisma.RsvpFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RsvpFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RsvpPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RsvpFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RsvpPayload>;
                };
                findFirst: {
                    args: Prisma.RsvpFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RsvpPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RsvpFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RsvpPayload>;
                };
                findMany: {
                    args: Prisma.RsvpFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RsvpPayload>[];
                };
                create: {
                    args: Prisma.RsvpCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RsvpPayload>;
                };
                createMany: {
                    args: Prisma.RsvpCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RsvpCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RsvpPayload>[];
                };
                delete: {
                    args: Prisma.RsvpDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RsvpPayload>;
                };
                update: {
                    args: Prisma.RsvpUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RsvpPayload>;
                };
                deleteMany: {
                    args: Prisma.RsvpDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RsvpUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RsvpUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RsvpPayload>[];
                };
                upsert: {
                    args: Prisma.RsvpUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RsvpPayload>;
                };
                aggregate: {
                    args: Prisma.RsvpAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRsvp>;
                };
                groupBy: {
                    args: Prisma.RsvpGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RsvpGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RsvpCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RsvpCountAggregateOutputType> | number;
                };
            };
        };
        InvitationEvent: {
            payload: Prisma.$InvitationEventPayload<ExtArgs>;
            fields: Prisma.InvitationEventFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.InvitationEventFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationEventPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.InvitationEventFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationEventPayload>;
                };
                findFirst: {
                    args: Prisma.InvitationEventFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationEventPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.InvitationEventFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationEventPayload>;
                };
                findMany: {
                    args: Prisma.InvitationEventFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationEventPayload>[];
                };
                create: {
                    args: Prisma.InvitationEventCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationEventPayload>;
                };
                createMany: {
                    args: Prisma.InvitationEventCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.InvitationEventCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationEventPayload>[];
                };
                delete: {
                    args: Prisma.InvitationEventDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationEventPayload>;
                };
                update: {
                    args: Prisma.InvitationEventUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationEventPayload>;
                };
                deleteMany: {
                    args: Prisma.InvitationEventDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.InvitationEventUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.InvitationEventUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationEventPayload>[];
                };
                upsert: {
                    args: Prisma.InvitationEventUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationEventPayload>;
                };
                aggregate: {
                    args: Prisma.InvitationEventAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateInvitationEvent>;
                };
                groupBy: {
                    args: Prisma.InvitationEventGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InvitationEventGroupByOutputType>[];
                };
                count: {
                    args: Prisma.InvitationEventCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InvitationEventCountAggregateOutputType> | number;
                };
            };
        };
        RsvpEventSelection: {
            payload: Prisma.$RsvpEventSelectionPayload<ExtArgs>;
            fields: Prisma.RsvpEventSelectionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RsvpEventSelectionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RsvpEventSelectionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RsvpEventSelectionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RsvpEventSelectionPayload>;
                };
                findFirst: {
                    args: Prisma.RsvpEventSelectionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RsvpEventSelectionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RsvpEventSelectionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RsvpEventSelectionPayload>;
                };
                findMany: {
                    args: Prisma.RsvpEventSelectionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RsvpEventSelectionPayload>[];
                };
                create: {
                    args: Prisma.RsvpEventSelectionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RsvpEventSelectionPayload>;
                };
                createMany: {
                    args: Prisma.RsvpEventSelectionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RsvpEventSelectionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RsvpEventSelectionPayload>[];
                };
                delete: {
                    args: Prisma.RsvpEventSelectionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RsvpEventSelectionPayload>;
                };
                update: {
                    args: Prisma.RsvpEventSelectionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RsvpEventSelectionPayload>;
                };
                deleteMany: {
                    args: Prisma.RsvpEventSelectionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RsvpEventSelectionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RsvpEventSelectionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RsvpEventSelectionPayload>[];
                };
                upsert: {
                    args: Prisma.RsvpEventSelectionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RsvpEventSelectionPayload>;
                };
                aggregate: {
                    args: Prisma.RsvpEventSelectionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRsvpEventSelection>;
                };
                groupBy: {
                    args: Prisma.RsvpEventSelectionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RsvpEventSelectionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RsvpEventSelectionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RsvpEventSelectionCountAggregateOutputType> | number;
                };
            };
        };
        RsvpHistory: {
            payload: Prisma.$RsvpHistoryPayload<ExtArgs>;
            fields: Prisma.RsvpHistoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RsvpHistoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RsvpHistoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RsvpHistoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RsvpHistoryPayload>;
                };
                findFirst: {
                    args: Prisma.RsvpHistoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RsvpHistoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RsvpHistoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RsvpHistoryPayload>;
                };
                findMany: {
                    args: Prisma.RsvpHistoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RsvpHistoryPayload>[];
                };
                create: {
                    args: Prisma.RsvpHistoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RsvpHistoryPayload>;
                };
                createMany: {
                    args: Prisma.RsvpHistoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RsvpHistoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RsvpHistoryPayload>[];
                };
                delete: {
                    args: Prisma.RsvpHistoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RsvpHistoryPayload>;
                };
                update: {
                    args: Prisma.RsvpHistoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RsvpHistoryPayload>;
                };
                deleteMany: {
                    args: Prisma.RsvpHistoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RsvpHistoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RsvpHistoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RsvpHistoryPayload>[];
                };
                upsert: {
                    args: Prisma.RsvpHistoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RsvpHistoryPayload>;
                };
                aggregate: {
                    args: Prisma.RsvpHistoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRsvpHistory>;
                };
                groupBy: {
                    args: Prisma.RsvpHistoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RsvpHistoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RsvpHistoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RsvpHistoryCountAggregateOutputType> | number;
                };
            };
        };
        Notification: {
            payload: Prisma.$NotificationPayload<ExtArgs>;
            fields: Prisma.NotificationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.NotificationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                findFirst: {
                    args: Prisma.NotificationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                findMany: {
                    args: Prisma.NotificationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                create: {
                    args: Prisma.NotificationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                createMany: {
                    args: Prisma.NotificationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                delete: {
                    args: Prisma.NotificationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                update: {
                    args: Prisma.NotificationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                deleteMany: {
                    args: Prisma.NotificationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.NotificationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                upsert: {
                    args: Prisma.NotificationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                aggregate: {
                    args: Prisma.NotificationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNotification>;
                };
                groupBy: {
                    args: Prisma.NotificationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.NotificationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationCountAggregateOutputType> | number;
                };
            };
        };
        MediaAsset: {
            payload: Prisma.$MediaAssetPayload<ExtArgs>;
            fields: Prisma.MediaAssetFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MediaAssetFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MediaAssetPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MediaAssetFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MediaAssetPayload>;
                };
                findFirst: {
                    args: Prisma.MediaAssetFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MediaAssetPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MediaAssetFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MediaAssetPayload>;
                };
                findMany: {
                    args: Prisma.MediaAssetFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MediaAssetPayload>[];
                };
                create: {
                    args: Prisma.MediaAssetCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MediaAssetPayload>;
                };
                createMany: {
                    args: Prisma.MediaAssetCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MediaAssetCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MediaAssetPayload>[];
                };
                delete: {
                    args: Prisma.MediaAssetDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MediaAssetPayload>;
                };
                update: {
                    args: Prisma.MediaAssetUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MediaAssetPayload>;
                };
                deleteMany: {
                    args: Prisma.MediaAssetDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MediaAssetUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MediaAssetUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MediaAssetPayload>[];
                };
                upsert: {
                    args: Prisma.MediaAssetUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MediaAssetPayload>;
                };
                aggregate: {
                    args: Prisma.MediaAssetAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMediaAsset>;
                };
                groupBy: {
                    args: Prisma.MediaAssetGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MediaAssetGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MediaAssetCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MediaAssetCountAggregateOutputType> | number;
                };
            };
        };
        GiftQrAsset: {
            payload: Prisma.$GiftQrAssetPayload<ExtArgs>;
            fields: Prisma.GiftQrAssetFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.GiftQrAssetFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GiftQrAssetPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.GiftQrAssetFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GiftQrAssetPayload>;
                };
                findFirst: {
                    args: Prisma.GiftQrAssetFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GiftQrAssetPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.GiftQrAssetFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GiftQrAssetPayload>;
                };
                findMany: {
                    args: Prisma.GiftQrAssetFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GiftQrAssetPayload>[];
                };
                create: {
                    args: Prisma.GiftQrAssetCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GiftQrAssetPayload>;
                };
                createMany: {
                    args: Prisma.GiftQrAssetCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.GiftQrAssetCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GiftQrAssetPayload>[];
                };
                delete: {
                    args: Prisma.GiftQrAssetDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GiftQrAssetPayload>;
                };
                update: {
                    args: Prisma.GiftQrAssetUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GiftQrAssetPayload>;
                };
                deleteMany: {
                    args: Prisma.GiftQrAssetDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.GiftQrAssetUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.GiftQrAssetUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GiftQrAssetPayload>[];
                };
                upsert: {
                    args: Prisma.GiftQrAssetUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GiftQrAssetPayload>;
                };
                aggregate: {
                    args: Prisma.GiftQrAssetAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateGiftQrAsset>;
                };
                groupBy: {
                    args: Prisma.GiftQrAssetGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GiftQrAssetGroupByOutputType>[];
                };
                count: {
                    args: Prisma.GiftQrAssetCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GiftQrAssetCountAggregateOutputType> | number;
                };
            };
        };
        InvitationDesign: {
            payload: Prisma.$InvitationDesignPayload<ExtArgs>;
            fields: Prisma.InvitationDesignFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.InvitationDesignFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationDesignPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.InvitationDesignFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationDesignPayload>;
                };
                findFirst: {
                    args: Prisma.InvitationDesignFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationDesignPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.InvitationDesignFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationDesignPayload>;
                };
                findMany: {
                    args: Prisma.InvitationDesignFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationDesignPayload>[];
                };
                create: {
                    args: Prisma.InvitationDesignCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationDesignPayload>;
                };
                createMany: {
                    args: Prisma.InvitationDesignCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.InvitationDesignCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationDesignPayload>[];
                };
                delete: {
                    args: Prisma.InvitationDesignDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationDesignPayload>;
                };
                update: {
                    args: Prisma.InvitationDesignUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationDesignPayload>;
                };
                deleteMany: {
                    args: Prisma.InvitationDesignDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.InvitationDesignUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.InvitationDesignUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationDesignPayload>[];
                };
                upsert: {
                    args: Prisma.InvitationDesignUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationDesignPayload>;
                };
                aggregate: {
                    args: Prisma.InvitationDesignAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateInvitationDesign>;
                };
                groupBy: {
                    args: Prisma.InvitationDesignGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InvitationDesignGroupByOutputType>[];
                };
                count: {
                    args: Prisma.InvitationDesignCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InvitationDesignCountAggregateOutputType> | number;
                };
            };
        };
        InvitationVersion: {
            payload: Prisma.$InvitationVersionPayload<ExtArgs>;
            fields: Prisma.InvitationVersionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.InvitationVersionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationVersionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.InvitationVersionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationVersionPayload>;
                };
                findFirst: {
                    args: Prisma.InvitationVersionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationVersionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.InvitationVersionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationVersionPayload>;
                };
                findMany: {
                    args: Prisma.InvitationVersionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationVersionPayload>[];
                };
                create: {
                    args: Prisma.InvitationVersionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationVersionPayload>;
                };
                createMany: {
                    args: Prisma.InvitationVersionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.InvitationVersionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationVersionPayload>[];
                };
                delete: {
                    args: Prisma.InvitationVersionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationVersionPayload>;
                };
                update: {
                    args: Prisma.InvitationVersionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationVersionPayload>;
                };
                deleteMany: {
                    args: Prisma.InvitationVersionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.InvitationVersionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.InvitationVersionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationVersionPayload>[];
                };
                upsert: {
                    args: Prisma.InvitationVersionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationVersionPayload>;
                };
                aggregate: {
                    args: Prisma.InvitationVersionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateInvitationVersion>;
                };
                groupBy: {
                    args: Prisma.InvitationVersionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InvitationVersionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.InvitationVersionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InvitationVersionCountAggregateOutputType> | number;
                };
            };
        };
        InvitationPreviewToken: {
            payload: Prisma.$InvitationPreviewTokenPayload<ExtArgs>;
            fields: Prisma.InvitationPreviewTokenFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.InvitationPreviewTokenFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationPreviewTokenPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.InvitationPreviewTokenFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationPreviewTokenPayload>;
                };
                findFirst: {
                    args: Prisma.InvitationPreviewTokenFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationPreviewTokenPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.InvitationPreviewTokenFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationPreviewTokenPayload>;
                };
                findMany: {
                    args: Prisma.InvitationPreviewTokenFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationPreviewTokenPayload>[];
                };
                create: {
                    args: Prisma.InvitationPreviewTokenCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationPreviewTokenPayload>;
                };
                createMany: {
                    args: Prisma.InvitationPreviewTokenCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.InvitationPreviewTokenCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationPreviewTokenPayload>[];
                };
                delete: {
                    args: Prisma.InvitationPreviewTokenDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationPreviewTokenPayload>;
                };
                update: {
                    args: Prisma.InvitationPreviewTokenUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationPreviewTokenPayload>;
                };
                deleteMany: {
                    args: Prisma.InvitationPreviewTokenDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.InvitationPreviewTokenUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.InvitationPreviewTokenUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationPreviewTokenPayload>[];
                };
                upsert: {
                    args: Prisma.InvitationPreviewTokenUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationPreviewTokenPayload>;
                };
                aggregate: {
                    args: Prisma.InvitationPreviewTokenAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateInvitationPreviewToken>;
                };
                groupBy: {
                    args: Prisma.InvitationPreviewTokenGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InvitationPreviewTokenGroupByOutputType>[];
                };
                count: {
                    args: Prisma.InvitationPreviewTokenCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InvitationPreviewTokenCountAggregateOutputType> | number;
                };
            };
        };
        Plan: {
            payload: Prisma.$PlanPayload<ExtArgs>;
            fields: Prisma.PlanFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PlanFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PlanFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanPayload>;
                };
                findFirst: {
                    args: Prisma.PlanFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PlanFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanPayload>;
                };
                findMany: {
                    args: Prisma.PlanFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanPayload>[];
                };
                create: {
                    args: Prisma.PlanCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanPayload>;
                };
                createMany: {
                    args: Prisma.PlanCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PlanCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanPayload>[];
                };
                delete: {
                    args: Prisma.PlanDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanPayload>;
                };
                update: {
                    args: Prisma.PlanUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanPayload>;
                };
                deleteMany: {
                    args: Prisma.PlanDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PlanUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PlanUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanPayload>[];
                };
                upsert: {
                    args: Prisma.PlanUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanPayload>;
                };
                aggregate: {
                    args: Prisma.PlanAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePlan>;
                };
                groupBy: {
                    args: Prisma.PlanGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PlanGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PlanCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PlanCountAggregateOutputType> | number;
                };
            };
        };
        AddOn: {
            payload: Prisma.$AddOnPayload<ExtArgs>;
            fields: Prisma.AddOnFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AddOnFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AddOnPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AddOnFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AddOnPayload>;
                };
                findFirst: {
                    args: Prisma.AddOnFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AddOnPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AddOnFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AddOnPayload>;
                };
                findMany: {
                    args: Prisma.AddOnFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AddOnPayload>[];
                };
                create: {
                    args: Prisma.AddOnCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AddOnPayload>;
                };
                createMany: {
                    args: Prisma.AddOnCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AddOnCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AddOnPayload>[];
                };
                delete: {
                    args: Prisma.AddOnDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AddOnPayload>;
                };
                update: {
                    args: Prisma.AddOnUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AddOnPayload>;
                };
                deleteMany: {
                    args: Prisma.AddOnDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AddOnUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AddOnUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AddOnPayload>[];
                };
                upsert: {
                    args: Prisma.AddOnUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AddOnPayload>;
                };
                aggregate: {
                    args: Prisma.AddOnAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAddOn>;
                };
                groupBy: {
                    args: Prisma.AddOnGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AddOnGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AddOnCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AddOnCountAggregateOutputType> | number;
                };
            };
        };
        Coupon: {
            payload: Prisma.$CouponPayload<ExtArgs>;
            fields: Prisma.CouponFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CouponFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CouponFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponPayload>;
                };
                findFirst: {
                    args: Prisma.CouponFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CouponFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponPayload>;
                };
                findMany: {
                    args: Prisma.CouponFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponPayload>[];
                };
                create: {
                    args: Prisma.CouponCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponPayload>;
                };
                createMany: {
                    args: Prisma.CouponCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CouponCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponPayload>[];
                };
                delete: {
                    args: Prisma.CouponDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponPayload>;
                };
                update: {
                    args: Prisma.CouponUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponPayload>;
                };
                deleteMany: {
                    args: Prisma.CouponDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CouponUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CouponUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponPayload>[];
                };
                upsert: {
                    args: Prisma.CouponUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponPayload>;
                };
                aggregate: {
                    args: Prisma.CouponAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCoupon>;
                };
                groupBy: {
                    args: Prisma.CouponGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CouponGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CouponCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CouponCountAggregateOutputType> | number;
                };
            };
        };
        Order: {
            payload: Prisma.$OrderPayload<ExtArgs>;
            fields: Prisma.OrderFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OrderFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                findFirst: {
                    args: Prisma.OrderFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                findMany: {
                    args: Prisma.OrderFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>[];
                };
                create: {
                    args: Prisma.OrderCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                createMany: {
                    args: Prisma.OrderCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>[];
                };
                delete: {
                    args: Prisma.OrderDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                update: {
                    args: Prisma.OrderUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                deleteMany: {
                    args: Prisma.OrderDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OrderUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>[];
                };
                upsert: {
                    args: Prisma.OrderUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                aggregate: {
                    args: Prisma.OrderAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrder>;
                };
                groupBy: {
                    args: Prisma.OrderGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OrderCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderCountAggregateOutputType> | number;
                };
            };
        };
        OrderItem: {
            payload: Prisma.$OrderItemPayload<ExtArgs>;
            fields: Prisma.OrderItemFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OrderItemFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                findFirst: {
                    args: Prisma.OrderItemFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                findMany: {
                    args: Prisma.OrderItemFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>[];
                };
                create: {
                    args: Prisma.OrderItemCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                createMany: {
                    args: Prisma.OrderItemCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OrderItemCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>[];
                };
                delete: {
                    args: Prisma.OrderItemDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                update: {
                    args: Prisma.OrderItemUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                deleteMany: {
                    args: Prisma.OrderItemDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OrderItemUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OrderItemUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>[];
                };
                upsert: {
                    args: Prisma.OrderItemUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                aggregate: {
                    args: Prisma.OrderItemAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrderItem>;
                };
                groupBy: {
                    args: Prisma.OrderItemGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderItemGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OrderItemCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderItemCountAggregateOutputType> | number;
                };
            };
        };
        Payment: {
            payload: Prisma.$PaymentPayload<ExtArgs>;
            fields: Prisma.PaymentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PaymentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>;
                };
                findFirst: {
                    args: Prisma.PaymentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>;
                };
                findMany: {
                    args: Prisma.PaymentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>[];
                };
                create: {
                    args: Prisma.PaymentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>;
                };
                createMany: {
                    args: Prisma.PaymentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>[];
                };
                delete: {
                    args: Prisma.PaymentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>;
                };
                update: {
                    args: Prisma.PaymentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>;
                };
                deleteMany: {
                    args: Prisma.PaymentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PaymentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>[];
                };
                upsert: {
                    args: Prisma.PaymentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>;
                };
                aggregate: {
                    args: Prisma.PaymentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePayment>;
                };
                groupBy: {
                    args: Prisma.PaymentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaymentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PaymentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaymentCountAggregateOutputType> | number;
                };
            };
        };
        OrderNote: {
            payload: Prisma.$OrderNotePayload<ExtArgs>;
            fields: Prisma.OrderNoteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OrderNoteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderNotePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OrderNoteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderNotePayload>;
                };
                findFirst: {
                    args: Prisma.OrderNoteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderNotePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OrderNoteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderNotePayload>;
                };
                findMany: {
                    args: Prisma.OrderNoteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderNotePayload>[];
                };
                create: {
                    args: Prisma.OrderNoteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderNotePayload>;
                };
                createMany: {
                    args: Prisma.OrderNoteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OrderNoteCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderNotePayload>[];
                };
                delete: {
                    args: Prisma.OrderNoteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderNotePayload>;
                };
                update: {
                    args: Prisma.OrderNoteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderNotePayload>;
                };
                deleteMany: {
                    args: Prisma.OrderNoteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OrderNoteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OrderNoteUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderNotePayload>[];
                };
                upsert: {
                    args: Prisma.OrderNoteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderNotePayload>;
                };
                aggregate: {
                    args: Prisma.OrderNoteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrderNote>;
                };
                groupBy: {
                    args: Prisma.OrderNoteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderNoteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OrderNoteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderNoteCountAggregateOutputType> | number;
                };
            };
        };
        EmailOutbox: {
            payload: Prisma.$EmailOutboxPayload<ExtArgs>;
            fields: Prisma.EmailOutboxFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EmailOutboxFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailOutboxPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EmailOutboxFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailOutboxPayload>;
                };
                findFirst: {
                    args: Prisma.EmailOutboxFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailOutboxPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EmailOutboxFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailOutboxPayload>;
                };
                findMany: {
                    args: Prisma.EmailOutboxFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailOutboxPayload>[];
                };
                create: {
                    args: Prisma.EmailOutboxCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailOutboxPayload>;
                };
                createMany: {
                    args: Prisma.EmailOutboxCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EmailOutboxCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailOutboxPayload>[];
                };
                delete: {
                    args: Prisma.EmailOutboxDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailOutboxPayload>;
                };
                update: {
                    args: Prisma.EmailOutboxUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailOutboxPayload>;
                };
                deleteMany: {
                    args: Prisma.EmailOutboxDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EmailOutboxUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EmailOutboxUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailOutboxPayload>[];
                };
                upsert: {
                    args: Prisma.EmailOutboxUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailOutboxPayload>;
                };
                aggregate: {
                    args: Prisma.EmailOutboxAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEmailOutbox>;
                };
                groupBy: {
                    args: Prisma.EmailOutboxGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EmailOutboxGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EmailOutboxCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EmailOutboxCountAggregateOutputType> | number;
                };
            };
        };
        WebhookEndpoint: {
            payload: Prisma.$WebhookEndpointPayload<ExtArgs>;
            fields: Prisma.WebhookEndpointFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.WebhookEndpointFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WebhookEndpointPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.WebhookEndpointFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WebhookEndpointPayload>;
                };
                findFirst: {
                    args: Prisma.WebhookEndpointFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WebhookEndpointPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.WebhookEndpointFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WebhookEndpointPayload>;
                };
                findMany: {
                    args: Prisma.WebhookEndpointFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WebhookEndpointPayload>[];
                };
                create: {
                    args: Prisma.WebhookEndpointCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WebhookEndpointPayload>;
                };
                createMany: {
                    args: Prisma.WebhookEndpointCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.WebhookEndpointCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WebhookEndpointPayload>[];
                };
                delete: {
                    args: Prisma.WebhookEndpointDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WebhookEndpointPayload>;
                };
                update: {
                    args: Prisma.WebhookEndpointUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WebhookEndpointPayload>;
                };
                deleteMany: {
                    args: Prisma.WebhookEndpointDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.WebhookEndpointUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.WebhookEndpointUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WebhookEndpointPayload>[];
                };
                upsert: {
                    args: Prisma.WebhookEndpointUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WebhookEndpointPayload>;
                };
                aggregate: {
                    args: Prisma.WebhookEndpointAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateWebhookEndpoint>;
                };
                groupBy: {
                    args: Prisma.WebhookEndpointGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WebhookEndpointGroupByOutputType>[];
                };
                count: {
                    args: Prisma.WebhookEndpointCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WebhookEndpointCountAggregateOutputType> | number;
                };
            };
        };
        WebhookDelivery: {
            payload: Prisma.$WebhookDeliveryPayload<ExtArgs>;
            fields: Prisma.WebhookDeliveryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.WebhookDeliveryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.WebhookDeliveryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload>;
                };
                findFirst: {
                    args: Prisma.WebhookDeliveryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.WebhookDeliveryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload>;
                };
                findMany: {
                    args: Prisma.WebhookDeliveryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload>[];
                };
                create: {
                    args: Prisma.WebhookDeliveryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload>;
                };
                createMany: {
                    args: Prisma.WebhookDeliveryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.WebhookDeliveryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload>[];
                };
                delete: {
                    args: Prisma.WebhookDeliveryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload>;
                };
                update: {
                    args: Prisma.WebhookDeliveryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload>;
                };
                deleteMany: {
                    args: Prisma.WebhookDeliveryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.WebhookDeliveryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.WebhookDeliveryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload>[];
                };
                upsert: {
                    args: Prisma.WebhookDeliveryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload>;
                };
                aggregate: {
                    args: Prisma.WebhookDeliveryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateWebhookDelivery>;
                };
                groupBy: {
                    args: Prisma.WebhookDeliveryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WebhookDeliveryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.WebhookDeliveryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WebhookDeliveryCountAggregateOutputType> | number;
                };
            };
        };
        PilotChecklistItem: {
            payload: Prisma.$PilotChecklistItemPayload<ExtArgs>;
            fields: Prisma.PilotChecklistItemFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PilotChecklistItemFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PilotChecklistItemPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PilotChecklistItemFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PilotChecklistItemPayload>;
                };
                findFirst: {
                    args: Prisma.PilotChecklistItemFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PilotChecklistItemPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PilotChecklistItemFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PilotChecklistItemPayload>;
                };
                findMany: {
                    args: Prisma.PilotChecklistItemFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PilotChecklistItemPayload>[];
                };
                create: {
                    args: Prisma.PilotChecklistItemCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PilotChecklistItemPayload>;
                };
                createMany: {
                    args: Prisma.PilotChecklistItemCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PilotChecklistItemCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PilotChecklistItemPayload>[];
                };
                delete: {
                    args: Prisma.PilotChecklistItemDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PilotChecklistItemPayload>;
                };
                update: {
                    args: Prisma.PilotChecklistItemUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PilotChecklistItemPayload>;
                };
                deleteMany: {
                    args: Prisma.PilotChecklistItemDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PilotChecklistItemUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PilotChecklistItemUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PilotChecklistItemPayload>[];
                };
                upsert: {
                    args: Prisma.PilotChecklistItemUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PilotChecklistItemPayload>;
                };
                aggregate: {
                    args: Prisma.PilotChecklistItemAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePilotChecklistItem>;
                };
                groupBy: {
                    args: Prisma.PilotChecklistItemGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PilotChecklistItemGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PilotChecklistItemCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PilotChecklistItemCountAggregateOutputType> | number;
                };
            };
        };
        PilotIssue: {
            payload: Prisma.$PilotIssuePayload<ExtArgs>;
            fields: Prisma.PilotIssueFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PilotIssueFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PilotIssuePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PilotIssueFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PilotIssuePayload>;
                };
                findFirst: {
                    args: Prisma.PilotIssueFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PilotIssuePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PilotIssueFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PilotIssuePayload>;
                };
                findMany: {
                    args: Prisma.PilotIssueFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PilotIssuePayload>[];
                };
                create: {
                    args: Prisma.PilotIssueCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PilotIssuePayload>;
                };
                createMany: {
                    args: Prisma.PilotIssueCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PilotIssueCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PilotIssuePayload>[];
                };
                delete: {
                    args: Prisma.PilotIssueDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PilotIssuePayload>;
                };
                update: {
                    args: Prisma.PilotIssueUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PilotIssuePayload>;
                };
                deleteMany: {
                    args: Prisma.PilotIssueDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PilotIssueUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PilotIssueUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PilotIssuePayload>[];
                };
                upsert: {
                    args: Prisma.PilotIssueUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PilotIssuePayload>;
                };
                aggregate: {
                    args: Prisma.PilotIssueAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePilotIssue>;
                };
                groupBy: {
                    args: Prisma.PilotIssueGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PilotIssueGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PilotIssueCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PilotIssueCountAggregateOutputType> | number;
                };
            };
        };
        SystemAnnouncement: {
            payload: Prisma.$SystemAnnouncementPayload<ExtArgs>;
            fields: Prisma.SystemAnnouncementFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SystemAnnouncementFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SystemAnnouncementPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SystemAnnouncementFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SystemAnnouncementPayload>;
                };
                findFirst: {
                    args: Prisma.SystemAnnouncementFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SystemAnnouncementPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SystemAnnouncementFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SystemAnnouncementPayload>;
                };
                findMany: {
                    args: Prisma.SystemAnnouncementFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SystemAnnouncementPayload>[];
                };
                create: {
                    args: Prisma.SystemAnnouncementCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SystemAnnouncementPayload>;
                };
                createMany: {
                    args: Prisma.SystemAnnouncementCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SystemAnnouncementCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SystemAnnouncementPayload>[];
                };
                delete: {
                    args: Prisma.SystemAnnouncementDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SystemAnnouncementPayload>;
                };
                update: {
                    args: Prisma.SystemAnnouncementUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SystemAnnouncementPayload>;
                };
                deleteMany: {
                    args: Prisma.SystemAnnouncementDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SystemAnnouncementUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SystemAnnouncementUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SystemAnnouncementPayload>[];
                };
                upsert: {
                    args: Prisma.SystemAnnouncementUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SystemAnnouncementPayload>;
                };
                aggregate: {
                    args: Prisma.SystemAnnouncementAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSystemAnnouncement>;
                };
                groupBy: {
                    args: Prisma.SystemAnnouncementGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SystemAnnouncementGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SystemAnnouncementCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SystemAnnouncementCountAggregateOutputType> | number;
                };
            };
        };
        GrowthEvent: {
            payload: Prisma.$GrowthEventPayload<ExtArgs>;
            fields: Prisma.GrowthEventFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.GrowthEventFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GrowthEventPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.GrowthEventFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GrowthEventPayload>;
                };
                findFirst: {
                    args: Prisma.GrowthEventFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GrowthEventPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.GrowthEventFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GrowthEventPayload>;
                };
                findMany: {
                    args: Prisma.GrowthEventFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GrowthEventPayload>[];
                };
                create: {
                    args: Prisma.GrowthEventCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GrowthEventPayload>;
                };
                createMany: {
                    args: Prisma.GrowthEventCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.GrowthEventCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GrowthEventPayload>[];
                };
                delete: {
                    args: Prisma.GrowthEventDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GrowthEventPayload>;
                };
                update: {
                    args: Prisma.GrowthEventUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GrowthEventPayload>;
                };
                deleteMany: {
                    args: Prisma.GrowthEventDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.GrowthEventUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.GrowthEventUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GrowthEventPayload>[];
                };
                upsert: {
                    args: Prisma.GrowthEventUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GrowthEventPayload>;
                };
                aggregate: {
                    args: Prisma.GrowthEventAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateGrowthEvent>;
                };
                groupBy: {
                    args: Prisma.GrowthEventGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GrowthEventGroupByOutputType>[];
                };
                count: {
                    args: Prisma.GrowthEventCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GrowthEventCountAggregateOutputType> | number;
                };
            };
        };
        ReferralCode: {
            payload: Prisma.$ReferralCodePayload<ExtArgs>;
            fields: Prisma.ReferralCodeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ReferralCodeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReferralCodePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ReferralCodeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReferralCodePayload>;
                };
                findFirst: {
                    args: Prisma.ReferralCodeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReferralCodePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ReferralCodeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReferralCodePayload>;
                };
                findMany: {
                    args: Prisma.ReferralCodeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReferralCodePayload>[];
                };
                create: {
                    args: Prisma.ReferralCodeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReferralCodePayload>;
                };
                createMany: {
                    args: Prisma.ReferralCodeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ReferralCodeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReferralCodePayload>[];
                };
                delete: {
                    args: Prisma.ReferralCodeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReferralCodePayload>;
                };
                update: {
                    args: Prisma.ReferralCodeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReferralCodePayload>;
                };
                deleteMany: {
                    args: Prisma.ReferralCodeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ReferralCodeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ReferralCodeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReferralCodePayload>[];
                };
                upsert: {
                    args: Prisma.ReferralCodeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReferralCodePayload>;
                };
                aggregate: {
                    args: Prisma.ReferralCodeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateReferralCode>;
                };
                groupBy: {
                    args: Prisma.ReferralCodeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReferralCodeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ReferralCodeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReferralCodeCountAggregateOutputType> | number;
                };
            };
        };
        ReferralAttribution: {
            payload: Prisma.$ReferralAttributionPayload<ExtArgs>;
            fields: Prisma.ReferralAttributionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ReferralAttributionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReferralAttributionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ReferralAttributionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReferralAttributionPayload>;
                };
                findFirst: {
                    args: Prisma.ReferralAttributionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReferralAttributionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ReferralAttributionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReferralAttributionPayload>;
                };
                findMany: {
                    args: Prisma.ReferralAttributionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReferralAttributionPayload>[];
                };
                create: {
                    args: Prisma.ReferralAttributionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReferralAttributionPayload>;
                };
                createMany: {
                    args: Prisma.ReferralAttributionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ReferralAttributionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReferralAttributionPayload>[];
                };
                delete: {
                    args: Prisma.ReferralAttributionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReferralAttributionPayload>;
                };
                update: {
                    args: Prisma.ReferralAttributionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReferralAttributionPayload>;
                };
                deleteMany: {
                    args: Prisma.ReferralAttributionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ReferralAttributionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ReferralAttributionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReferralAttributionPayload>[];
                };
                upsert: {
                    args: Prisma.ReferralAttributionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReferralAttributionPayload>;
                };
                aggregate: {
                    args: Prisma.ReferralAttributionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateReferralAttribution>;
                };
                groupBy: {
                    args: Prisma.ReferralAttributionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReferralAttributionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ReferralAttributionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReferralAttributionCountAggregateOutputType> | number;
                };
            };
        };
        OnboardingProgress: {
            payload: Prisma.$OnboardingProgressPayload<ExtArgs>;
            fields: Prisma.OnboardingProgressFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OnboardingProgressFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingProgressPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OnboardingProgressFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingProgressPayload>;
                };
                findFirst: {
                    args: Prisma.OnboardingProgressFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingProgressPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OnboardingProgressFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingProgressPayload>;
                };
                findMany: {
                    args: Prisma.OnboardingProgressFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingProgressPayload>[];
                };
                create: {
                    args: Prisma.OnboardingProgressCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingProgressPayload>;
                };
                createMany: {
                    args: Prisma.OnboardingProgressCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OnboardingProgressCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingProgressPayload>[];
                };
                delete: {
                    args: Prisma.OnboardingProgressDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingProgressPayload>;
                };
                update: {
                    args: Prisma.OnboardingProgressUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingProgressPayload>;
                };
                deleteMany: {
                    args: Prisma.OnboardingProgressDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OnboardingProgressUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OnboardingProgressUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingProgressPayload>[];
                };
                upsert: {
                    args: Prisma.OnboardingProgressUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingProgressPayload>;
                };
                aggregate: {
                    args: Prisma.OnboardingProgressAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOnboardingProgress>;
                };
                groupBy: {
                    args: Prisma.OnboardingProgressGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OnboardingProgressGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OnboardingProgressCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OnboardingProgressCountAggregateOutputType> | number;
                };
            };
        };
        SupportTicket: {
            payload: Prisma.$SupportTicketPayload<ExtArgs>;
            fields: Prisma.SupportTicketFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SupportTicketFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SupportTicketFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload>;
                };
                findFirst: {
                    args: Prisma.SupportTicketFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SupportTicketFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload>;
                };
                findMany: {
                    args: Prisma.SupportTicketFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload>[];
                };
                create: {
                    args: Prisma.SupportTicketCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload>;
                };
                createMany: {
                    args: Prisma.SupportTicketCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SupportTicketCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload>[];
                };
                delete: {
                    args: Prisma.SupportTicketDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload>;
                };
                update: {
                    args: Prisma.SupportTicketUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload>;
                };
                deleteMany: {
                    args: Prisma.SupportTicketDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SupportTicketUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SupportTicketUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload>[];
                };
                upsert: {
                    args: Prisma.SupportTicketUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload>;
                };
                aggregate: {
                    args: Prisma.SupportTicketAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSupportTicket>;
                };
                groupBy: {
                    args: Prisma.SupportTicketGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SupportTicketGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SupportTicketCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SupportTicketCountAggregateOutputType> | number;
                };
            };
        };
        CustomDomain: {
            payload: Prisma.$CustomDomainPayload<ExtArgs>;
            fields: Prisma.CustomDomainFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CustomDomainFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomDomainPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CustomDomainFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomDomainPayload>;
                };
                findFirst: {
                    args: Prisma.CustomDomainFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomDomainPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CustomDomainFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomDomainPayload>;
                };
                findMany: {
                    args: Prisma.CustomDomainFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomDomainPayload>[];
                };
                create: {
                    args: Prisma.CustomDomainCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomDomainPayload>;
                };
                createMany: {
                    args: Prisma.CustomDomainCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CustomDomainCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomDomainPayload>[];
                };
                delete: {
                    args: Prisma.CustomDomainDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomDomainPayload>;
                };
                update: {
                    args: Prisma.CustomDomainUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomDomainPayload>;
                };
                deleteMany: {
                    args: Prisma.CustomDomainDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CustomDomainUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CustomDomainUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomDomainPayload>[];
                };
                upsert: {
                    args: Prisma.CustomDomainUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomDomainPayload>;
                };
                aggregate: {
                    args: Prisma.CustomDomainAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCustomDomain>;
                };
                groupBy: {
                    args: Prisma.CustomDomainGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CustomDomainGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CustomDomainCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CustomDomainCountAggregateOutputType> | number;
                };
            };
        };
        PartnerOrganization: {
            payload: Prisma.$PartnerOrganizationPayload<ExtArgs>;
            fields: Prisma.PartnerOrganizationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PartnerOrganizationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerOrganizationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PartnerOrganizationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerOrganizationPayload>;
                };
                findFirst: {
                    args: Prisma.PartnerOrganizationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerOrganizationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PartnerOrganizationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerOrganizationPayload>;
                };
                findMany: {
                    args: Prisma.PartnerOrganizationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerOrganizationPayload>[];
                };
                create: {
                    args: Prisma.PartnerOrganizationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerOrganizationPayload>;
                };
                createMany: {
                    args: Prisma.PartnerOrganizationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PartnerOrganizationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerOrganizationPayload>[];
                };
                delete: {
                    args: Prisma.PartnerOrganizationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerOrganizationPayload>;
                };
                update: {
                    args: Prisma.PartnerOrganizationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerOrganizationPayload>;
                };
                deleteMany: {
                    args: Prisma.PartnerOrganizationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PartnerOrganizationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PartnerOrganizationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerOrganizationPayload>[];
                };
                upsert: {
                    args: Prisma.PartnerOrganizationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerOrganizationPayload>;
                };
                aggregate: {
                    args: Prisma.PartnerOrganizationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePartnerOrganization>;
                };
                groupBy: {
                    args: Prisma.PartnerOrganizationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PartnerOrganizationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PartnerOrganizationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PartnerOrganizationCountAggregateOutputType> | number;
                };
            };
        };
        PartnerMember: {
            payload: Prisma.$PartnerMemberPayload<ExtArgs>;
            fields: Prisma.PartnerMemberFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PartnerMemberFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerMemberPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PartnerMemberFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerMemberPayload>;
                };
                findFirst: {
                    args: Prisma.PartnerMemberFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerMemberPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PartnerMemberFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerMemberPayload>;
                };
                findMany: {
                    args: Prisma.PartnerMemberFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerMemberPayload>[];
                };
                create: {
                    args: Prisma.PartnerMemberCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerMemberPayload>;
                };
                createMany: {
                    args: Prisma.PartnerMemberCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PartnerMemberCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerMemberPayload>[];
                };
                delete: {
                    args: Prisma.PartnerMemberDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerMemberPayload>;
                };
                update: {
                    args: Prisma.PartnerMemberUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerMemberPayload>;
                };
                deleteMany: {
                    args: Prisma.PartnerMemberDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PartnerMemberUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PartnerMemberUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerMemberPayload>[];
                };
                upsert: {
                    args: Prisma.PartnerMemberUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerMemberPayload>;
                };
                aggregate: {
                    args: Prisma.PartnerMemberAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePartnerMember>;
                };
                groupBy: {
                    args: Prisma.PartnerMemberGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PartnerMemberGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PartnerMemberCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PartnerMemberCountAggregateOutputType> | number;
                };
            };
        };
        PartnerClient: {
            payload: Prisma.$PartnerClientPayload<ExtArgs>;
            fields: Prisma.PartnerClientFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PartnerClientFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerClientPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PartnerClientFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerClientPayload>;
                };
                findFirst: {
                    args: Prisma.PartnerClientFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerClientPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PartnerClientFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerClientPayload>;
                };
                findMany: {
                    args: Prisma.PartnerClientFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerClientPayload>[];
                };
                create: {
                    args: Prisma.PartnerClientCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerClientPayload>;
                };
                createMany: {
                    args: Prisma.PartnerClientCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PartnerClientCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerClientPayload>[];
                };
                delete: {
                    args: Prisma.PartnerClientDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerClientPayload>;
                };
                update: {
                    args: Prisma.PartnerClientUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerClientPayload>;
                };
                deleteMany: {
                    args: Prisma.PartnerClientDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PartnerClientUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PartnerClientUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerClientPayload>[];
                };
                upsert: {
                    args: Prisma.PartnerClientUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerClientPayload>;
                };
                aggregate: {
                    args: Prisma.PartnerClientAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePartnerClient>;
                };
                groupBy: {
                    args: Prisma.PartnerClientGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PartnerClientGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PartnerClientCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PartnerClientCountAggregateOutputType> | number;
                };
            };
        };
        PartnerCommission: {
            payload: Prisma.$PartnerCommissionPayload<ExtArgs>;
            fields: Prisma.PartnerCommissionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PartnerCommissionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerCommissionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PartnerCommissionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerCommissionPayload>;
                };
                findFirst: {
                    args: Prisma.PartnerCommissionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerCommissionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PartnerCommissionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerCommissionPayload>;
                };
                findMany: {
                    args: Prisma.PartnerCommissionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerCommissionPayload>[];
                };
                create: {
                    args: Prisma.PartnerCommissionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerCommissionPayload>;
                };
                createMany: {
                    args: Prisma.PartnerCommissionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PartnerCommissionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerCommissionPayload>[];
                };
                delete: {
                    args: Prisma.PartnerCommissionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerCommissionPayload>;
                };
                update: {
                    args: Prisma.PartnerCommissionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerCommissionPayload>;
                };
                deleteMany: {
                    args: Prisma.PartnerCommissionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PartnerCommissionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PartnerCommissionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerCommissionPayload>[];
                };
                upsert: {
                    args: Prisma.PartnerCommissionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerCommissionPayload>;
                };
                aggregate: {
                    args: Prisma.PartnerCommissionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePartnerCommission>;
                };
                groupBy: {
                    args: Prisma.PartnerCommissionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PartnerCommissionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PartnerCommissionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PartnerCommissionCountAggregateOutputType> | number;
                };
            };
        };
        PartnerPayout: {
            payload: Prisma.$PartnerPayoutPayload<ExtArgs>;
            fields: Prisma.PartnerPayoutFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PartnerPayoutFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerPayoutPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PartnerPayoutFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerPayoutPayload>;
                };
                findFirst: {
                    args: Prisma.PartnerPayoutFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerPayoutPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PartnerPayoutFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerPayoutPayload>;
                };
                findMany: {
                    args: Prisma.PartnerPayoutFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerPayoutPayload>[];
                };
                create: {
                    args: Prisma.PartnerPayoutCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerPayoutPayload>;
                };
                createMany: {
                    args: Prisma.PartnerPayoutCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PartnerPayoutCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerPayoutPayload>[];
                };
                delete: {
                    args: Prisma.PartnerPayoutDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerPayoutPayload>;
                };
                update: {
                    args: Prisma.PartnerPayoutUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerPayoutPayload>;
                };
                deleteMany: {
                    args: Prisma.PartnerPayoutDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PartnerPayoutUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PartnerPayoutUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerPayoutPayload>[];
                };
                upsert: {
                    args: Prisma.PartnerPayoutUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartnerPayoutPayload>;
                };
                aggregate: {
                    args: Prisma.PartnerPayoutAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePartnerPayout>;
                };
                groupBy: {
                    args: Prisma.PartnerPayoutGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PartnerPayoutGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PartnerPayoutCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PartnerPayoutCountAggregateOutputType> | number;
                };
            };
        };
        SeatingTable: {
            payload: Prisma.$SeatingTablePayload<ExtArgs>;
            fields: Prisma.SeatingTableFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SeatingTableFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeatingTablePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SeatingTableFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeatingTablePayload>;
                };
                findFirst: {
                    args: Prisma.SeatingTableFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeatingTablePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SeatingTableFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeatingTablePayload>;
                };
                findMany: {
                    args: Prisma.SeatingTableFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeatingTablePayload>[];
                };
                create: {
                    args: Prisma.SeatingTableCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeatingTablePayload>;
                };
                createMany: {
                    args: Prisma.SeatingTableCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SeatingTableCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeatingTablePayload>[];
                };
                delete: {
                    args: Prisma.SeatingTableDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeatingTablePayload>;
                };
                update: {
                    args: Prisma.SeatingTableUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeatingTablePayload>;
                };
                deleteMany: {
                    args: Prisma.SeatingTableDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SeatingTableUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SeatingTableUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeatingTablePayload>[];
                };
                upsert: {
                    args: Prisma.SeatingTableUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeatingTablePayload>;
                };
                aggregate: {
                    args: Prisma.SeatingTableAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSeatingTable>;
                };
                groupBy: {
                    args: Prisma.SeatingTableGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SeatingTableGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SeatingTableCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SeatingTableCountAggregateOutputType> | number;
                };
            };
        };
        SeatAssignment: {
            payload: Prisma.$SeatAssignmentPayload<ExtArgs>;
            fields: Prisma.SeatAssignmentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SeatAssignmentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeatAssignmentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SeatAssignmentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeatAssignmentPayload>;
                };
                findFirst: {
                    args: Prisma.SeatAssignmentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeatAssignmentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SeatAssignmentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeatAssignmentPayload>;
                };
                findMany: {
                    args: Prisma.SeatAssignmentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeatAssignmentPayload>[];
                };
                create: {
                    args: Prisma.SeatAssignmentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeatAssignmentPayload>;
                };
                createMany: {
                    args: Prisma.SeatAssignmentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SeatAssignmentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeatAssignmentPayload>[];
                };
                delete: {
                    args: Prisma.SeatAssignmentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeatAssignmentPayload>;
                };
                update: {
                    args: Prisma.SeatAssignmentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeatAssignmentPayload>;
                };
                deleteMany: {
                    args: Prisma.SeatAssignmentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SeatAssignmentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SeatAssignmentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeatAssignmentPayload>[];
                };
                upsert: {
                    args: Prisma.SeatAssignmentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeatAssignmentPayload>;
                };
                aggregate: {
                    args: Prisma.SeatAssignmentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSeatAssignment>;
                };
                groupBy: {
                    args: Prisma.SeatAssignmentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SeatAssignmentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SeatAssignmentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SeatAssignmentCountAggregateOutputType> | number;
                };
            };
        };
        CheckinStation: {
            payload: Prisma.$CheckinStationPayload<ExtArgs>;
            fields: Prisma.CheckinStationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CheckinStationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckinStationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CheckinStationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckinStationPayload>;
                };
                findFirst: {
                    args: Prisma.CheckinStationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckinStationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CheckinStationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckinStationPayload>;
                };
                findMany: {
                    args: Prisma.CheckinStationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckinStationPayload>[];
                };
                create: {
                    args: Prisma.CheckinStationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckinStationPayload>;
                };
                createMany: {
                    args: Prisma.CheckinStationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CheckinStationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckinStationPayload>[];
                };
                delete: {
                    args: Prisma.CheckinStationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckinStationPayload>;
                };
                update: {
                    args: Prisma.CheckinStationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckinStationPayload>;
                };
                deleteMany: {
                    args: Prisma.CheckinStationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CheckinStationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CheckinStationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckinStationPayload>[];
                };
                upsert: {
                    args: Prisma.CheckinStationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckinStationPayload>;
                };
                aggregate: {
                    args: Prisma.CheckinStationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCheckinStation>;
                };
                groupBy: {
                    args: Prisma.CheckinStationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CheckinStationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CheckinStationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CheckinStationCountAggregateOutputType> | number;
                };
            };
        };
        CheckinRecord: {
            payload: Prisma.$CheckinRecordPayload<ExtArgs>;
            fields: Prisma.CheckinRecordFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CheckinRecordFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckinRecordPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CheckinRecordFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckinRecordPayload>;
                };
                findFirst: {
                    args: Prisma.CheckinRecordFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckinRecordPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CheckinRecordFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckinRecordPayload>;
                };
                findMany: {
                    args: Prisma.CheckinRecordFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckinRecordPayload>[];
                };
                create: {
                    args: Prisma.CheckinRecordCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckinRecordPayload>;
                };
                createMany: {
                    args: Prisma.CheckinRecordCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CheckinRecordCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckinRecordPayload>[];
                };
                delete: {
                    args: Prisma.CheckinRecordDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckinRecordPayload>;
                };
                update: {
                    args: Prisma.CheckinRecordUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckinRecordPayload>;
                };
                deleteMany: {
                    args: Prisma.CheckinRecordDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CheckinRecordUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CheckinRecordUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckinRecordPayload>[];
                };
                upsert: {
                    args: Prisma.CheckinRecordUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CheckinRecordPayload>;
                };
                aggregate: {
                    args: Prisma.CheckinRecordAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCheckinRecord>;
                };
                groupBy: {
                    args: Prisma.CheckinRecordGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CheckinRecordGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CheckinRecordCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CheckinRecordCountAggregateOutputType> | number;
                };
            };
        };
        MemoryAlbum: {
            payload: Prisma.$MemoryAlbumPayload<ExtArgs>;
            fields: Prisma.MemoryAlbumFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MemoryAlbumFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemoryAlbumPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MemoryAlbumFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemoryAlbumPayload>;
                };
                findFirst: {
                    args: Prisma.MemoryAlbumFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemoryAlbumPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MemoryAlbumFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemoryAlbumPayload>;
                };
                findMany: {
                    args: Prisma.MemoryAlbumFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemoryAlbumPayload>[];
                };
                create: {
                    args: Prisma.MemoryAlbumCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemoryAlbumPayload>;
                };
                createMany: {
                    args: Prisma.MemoryAlbumCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MemoryAlbumCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemoryAlbumPayload>[];
                };
                delete: {
                    args: Prisma.MemoryAlbumDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemoryAlbumPayload>;
                };
                update: {
                    args: Prisma.MemoryAlbumUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemoryAlbumPayload>;
                };
                deleteMany: {
                    args: Prisma.MemoryAlbumDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MemoryAlbumUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MemoryAlbumUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemoryAlbumPayload>[];
                };
                upsert: {
                    args: Prisma.MemoryAlbumUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemoryAlbumPayload>;
                };
                aggregate: {
                    args: Prisma.MemoryAlbumAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMemoryAlbum>;
                };
                groupBy: {
                    args: Prisma.MemoryAlbumGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MemoryAlbumGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MemoryAlbumCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MemoryAlbumCountAggregateOutputType> | number;
                };
            };
        };
        MemoryAsset: {
            payload: Prisma.$MemoryAssetPayload<ExtArgs>;
            fields: Prisma.MemoryAssetFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MemoryAssetFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemoryAssetPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MemoryAssetFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemoryAssetPayload>;
                };
                findFirst: {
                    args: Prisma.MemoryAssetFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemoryAssetPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MemoryAssetFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemoryAssetPayload>;
                };
                findMany: {
                    args: Prisma.MemoryAssetFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemoryAssetPayload>[];
                };
                create: {
                    args: Prisma.MemoryAssetCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemoryAssetPayload>;
                };
                createMany: {
                    args: Prisma.MemoryAssetCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MemoryAssetCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemoryAssetPayload>[];
                };
                delete: {
                    args: Prisma.MemoryAssetDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemoryAssetPayload>;
                };
                update: {
                    args: Prisma.MemoryAssetUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemoryAssetPayload>;
                };
                deleteMany: {
                    args: Prisma.MemoryAssetDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MemoryAssetUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MemoryAssetUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemoryAssetPayload>[];
                };
                upsert: {
                    args: Prisma.MemoryAssetUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemoryAssetPayload>;
                };
                aggregate: {
                    args: Prisma.MemoryAssetAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMemoryAsset>;
                };
                groupBy: {
                    args: Prisma.MemoryAssetGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MemoryAssetGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MemoryAssetCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MemoryAssetCountAggregateOutputType> | number;
                };
            };
        };
        MemoryReaction: {
            payload: Prisma.$MemoryReactionPayload<ExtArgs>;
            fields: Prisma.MemoryReactionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MemoryReactionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemoryReactionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MemoryReactionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemoryReactionPayload>;
                };
                findFirst: {
                    args: Prisma.MemoryReactionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemoryReactionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MemoryReactionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemoryReactionPayload>;
                };
                findMany: {
                    args: Prisma.MemoryReactionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemoryReactionPayload>[];
                };
                create: {
                    args: Prisma.MemoryReactionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemoryReactionPayload>;
                };
                createMany: {
                    args: Prisma.MemoryReactionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MemoryReactionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemoryReactionPayload>[];
                };
                delete: {
                    args: Prisma.MemoryReactionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemoryReactionPayload>;
                };
                update: {
                    args: Prisma.MemoryReactionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemoryReactionPayload>;
                };
                deleteMany: {
                    args: Prisma.MemoryReactionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MemoryReactionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MemoryReactionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemoryReactionPayload>[];
                };
                upsert: {
                    args: Prisma.MemoryReactionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemoryReactionPayload>;
                };
                aggregate: {
                    args: Prisma.MemoryReactionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMemoryReaction>;
                };
                groupBy: {
                    args: Prisma.MemoryReactionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MemoryReactionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MemoryReactionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MemoryReactionCountAggregateOutputType> | number;
                };
            };
        };
        MemoryComment: {
            payload: Prisma.$MemoryCommentPayload<ExtArgs>;
            fields: Prisma.MemoryCommentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MemoryCommentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemoryCommentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MemoryCommentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemoryCommentPayload>;
                };
                findFirst: {
                    args: Prisma.MemoryCommentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemoryCommentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MemoryCommentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemoryCommentPayload>;
                };
                findMany: {
                    args: Prisma.MemoryCommentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemoryCommentPayload>[];
                };
                create: {
                    args: Prisma.MemoryCommentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemoryCommentPayload>;
                };
                createMany: {
                    args: Prisma.MemoryCommentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MemoryCommentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemoryCommentPayload>[];
                };
                delete: {
                    args: Prisma.MemoryCommentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemoryCommentPayload>;
                };
                update: {
                    args: Prisma.MemoryCommentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemoryCommentPayload>;
                };
                deleteMany: {
                    args: Prisma.MemoryCommentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MemoryCommentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MemoryCommentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemoryCommentPayload>[];
                };
                upsert: {
                    args: Prisma.MemoryCommentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemoryCommentPayload>;
                };
                aggregate: {
                    args: Prisma.MemoryCommentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMemoryComment>;
                };
                groupBy: {
                    args: Prisma.MemoryCommentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MemoryCommentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MemoryCommentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MemoryCommentCountAggregateOutputType> | number;
                };
            };
        };
        GuestbookEntry: {
            payload: Prisma.$GuestbookEntryPayload<ExtArgs>;
            fields: Prisma.GuestbookEntryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.GuestbookEntryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GuestbookEntryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.GuestbookEntryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GuestbookEntryPayload>;
                };
                findFirst: {
                    args: Prisma.GuestbookEntryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GuestbookEntryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.GuestbookEntryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GuestbookEntryPayload>;
                };
                findMany: {
                    args: Prisma.GuestbookEntryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GuestbookEntryPayload>[];
                };
                create: {
                    args: Prisma.GuestbookEntryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GuestbookEntryPayload>;
                };
                createMany: {
                    args: Prisma.GuestbookEntryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.GuestbookEntryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GuestbookEntryPayload>[];
                };
                delete: {
                    args: Prisma.GuestbookEntryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GuestbookEntryPayload>;
                };
                update: {
                    args: Prisma.GuestbookEntryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GuestbookEntryPayload>;
                };
                deleteMany: {
                    args: Prisma.GuestbookEntryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.GuestbookEntryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.GuestbookEntryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GuestbookEntryPayload>[];
                };
                upsert: {
                    args: Prisma.GuestbookEntryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GuestbookEntryPayload>;
                };
                aggregate: {
                    args: Prisma.GuestbookEntryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateGuestbookEntry>;
                };
                groupBy: {
                    args: Prisma.GuestbookEntryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GuestbookEntryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.GuestbookEntryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GuestbookEntryCountAggregateOutputType> | number;
                };
            };
        };
        PlanningTask: {
            payload: Prisma.$PlanningTaskPayload<ExtArgs>;
            fields: Prisma.PlanningTaskFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PlanningTaskFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanningTaskPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PlanningTaskFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanningTaskPayload>;
                };
                findFirst: {
                    args: Prisma.PlanningTaskFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanningTaskPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PlanningTaskFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanningTaskPayload>;
                };
                findMany: {
                    args: Prisma.PlanningTaskFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanningTaskPayload>[];
                };
                create: {
                    args: Prisma.PlanningTaskCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanningTaskPayload>;
                };
                createMany: {
                    args: Prisma.PlanningTaskCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PlanningTaskCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanningTaskPayload>[];
                };
                delete: {
                    args: Prisma.PlanningTaskDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanningTaskPayload>;
                };
                update: {
                    args: Prisma.PlanningTaskUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanningTaskPayload>;
                };
                deleteMany: {
                    args: Prisma.PlanningTaskDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PlanningTaskUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PlanningTaskUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanningTaskPayload>[];
                };
                upsert: {
                    args: Prisma.PlanningTaskUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanningTaskPayload>;
                };
                aggregate: {
                    args: Prisma.PlanningTaskAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePlanningTask>;
                };
                groupBy: {
                    args: Prisma.PlanningTaskGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PlanningTaskGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PlanningTaskCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PlanningTaskCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly displayName: "displayName";
    readonly phone: "phone";
    readonly avatarUrl: "avatarUrl";
    readonly role: "role";
    readonly status: "status";
    readonly emailVerifiedAt: "emailVerifiedAt";
    readonly passwordChangedAt: "passwordChangedAt";
    readonly authVersion: "authVersion";
    readonly failedLoginAttempts: "failedLoginAttempts";
    readonly lockedUntil: "lockedUntil";
    readonly accountDeletionRequestedAt: "accountDeletionRequestedAt";
    readonly deletedAt: "deletedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const RefreshSessionScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly tokenHash: "tokenHash";
    readonly familyId: "familyId";
    readonly expiresAt: "expiresAt";
    readonly lastUsedAt: "lastUsedAt";
    readonly revokedAt: "revokedAt";
    readonly revokeReason: "revokeReason";
    readonly replacedBySessionId: "replacedBySessionId";
    readonly ipAddress: "ipAddress";
    readonly userAgent: "userAgent";
    readonly createdAt: "createdAt";
};
export type RefreshSessionScalarFieldEnum = (typeof RefreshSessionScalarFieldEnum)[keyof typeof RefreshSessionScalarFieldEnum];
export declare const EmailVerificationTokenScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly tokenHash: "tokenHash";
    readonly expiresAt: "expiresAt";
    readonly usedAt: "usedAt";
    readonly createdAt: "createdAt";
};
export type EmailVerificationTokenScalarFieldEnum = (typeof EmailVerificationTokenScalarFieldEnum)[keyof typeof EmailVerificationTokenScalarFieldEnum];
export declare const PasswordResetTokenScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly tokenHash: "tokenHash";
    readonly expiresAt: "expiresAt";
    readonly usedAt: "usedAt";
    readonly createdAt: "createdAt";
};
export type PasswordResetTokenScalarFieldEnum = (typeof PasswordResetTokenScalarFieldEnum)[keyof typeof PasswordResetTokenScalarFieldEnum];
export declare const AuditLogScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly action: "action";
    readonly success: "success";
    readonly ipAddress: "ipAddress";
    readonly userAgent: "userAgent";
    readonly metadata: "metadata";
    readonly createdAt: "createdAt";
};
export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum];
export declare const WeddingScalarFieldEnum: {
    readonly id: "id";
    readonly ownerId: "ownerId";
    readonly slug: "slug";
    readonly title: "title";
    readonly brideName: "brideName";
    readonly groomName: "groomName";
    readonly mainDate: "mainDate";
    readonly brideFatherName: "brideFatherName";
    readonly brideMotherName: "brideMotherName";
    readonly groomFatherName: "groomFatherName";
    readonly groomMotherName: "groomMotherName";
    readonly showBrideParents: "showBrideParents";
    readonly showGroomParents: "showGroomParents";
    readonly story: "story";
    readonly coverImageUrl: "coverImageUrl";
    readonly musicUrl: "musicUrl";
    readonly templateKey: "templateKey";
    readonly status: "status";
    readonly timezone: "timezone";
    readonly readyForReviewAt: "readyForReviewAt";
    readonly publishedAt: "publishedAt";
    readonly suspendedAt: "suspendedAt";
    readonly expiresAt: "expiresAt";
    readonly archivedAt: "archivedAt";
    readonly duplicatedFromId: "duplicatedFromId";
    readonly activePlanId: "activePlanId";
    readonly publishReviewStatus: "publishReviewStatus";
    readonly publishRequestedAt: "publishRequestedAt";
    readonly publishReviewedAt: "publishReviewedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type WeddingScalarFieldEnum = (typeof WeddingScalarFieldEnum)[keyof typeof WeddingScalarFieldEnum];
export declare const WeddingCollaboratorScalarFieldEnum: {
    readonly id: "id";
    readonly weddingId: "weddingId";
    readonly email: "email";
    readonly userId: "userId";
    readonly invitedById: "invitedById";
    readonly permission: "permission";
    readonly status: "status";
    readonly token: "token";
    readonly expiresAt: "expiresAt";
    readonly acceptedAt: "acceptedAt";
    readonly revokedAt: "revokedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type WeddingCollaboratorScalarFieldEnum = (typeof WeddingCollaboratorScalarFieldEnum)[keyof typeof WeddingCollaboratorScalarFieldEnum];
export declare const EventScalarFieldEnum: {
    readonly id: "id";
    readonly weddingId: "weddingId";
    readonly type: "type";
    readonly side: "side";
    readonly title: "title";
    readonly startsAt: "startsAt";
    readonly endsAt: "endsAt";
    readonly timezone: "timezone";
    readonly venueName: "venueName";
    readonly address: "address";
    readonly mapUrl: "mapUrl";
    readonly dressCode: "dressCode";
    readonly note: "note";
    readonly sortOrder: "sortOrder";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum];
export declare const GuestScalarFieldEnum: {
    readonly id: "id";
    readonly weddingId: "weddingId";
    readonly fullName: "fullName";
    readonly salutation: "salutation";
    readonly phone: "phone";
    readonly email: "email";
    readonly groupName: "groupName";
    readonly side: "side";
    readonly invitedBy: "invitedBy";
    readonly tableName: "tableName";
    readonly maxAdultCount: "maxAdultCount";
    readonly maxChildCount: "maxChildCount";
    readonly note: "note";
    readonly tags: "tags";
    readonly archivedAt: "archivedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type GuestScalarFieldEnum = (typeof GuestScalarFieldEnum)[keyof typeof GuestScalarFieldEnum];
export declare const InvitationScalarFieldEnum: {
    readonly id: "id";
    readonly guestId: "guestId";
    readonly eventId: "eventId";
    readonly token: "token";
    readonly greeting: "greeting";
    readonly status: "status";
    readonly sentAt: "sentAt";
    readonly firstViewedAt: "firstViewedAt";
    readonly lastViewedAt: "lastViewedAt";
    readonly viewCount: "viewCount";
    readonly revokedAt: "revokedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type InvitationScalarFieldEnum = (typeof InvitationScalarFieldEnum)[keyof typeof InvitationScalarFieldEnum];
export declare const RsvpScalarFieldEnum: {
    readonly id: "id";
    readonly invitationId: "invitationId";
    readonly eventId: "eventId";
    readonly status: "status";
    readonly adultCount: "adultCount";
    readonly childCount: "childCount";
    readonly vegetarianCount: "vegetarianCount";
    readonly needsTransport: "needsTransport";
    readonly message: "message";
    readonly publishWish: "publishWish";
    readonly respondedAt: "respondedAt";
    readonly updatedAt: "updatedAt";
};
export type RsvpScalarFieldEnum = (typeof RsvpScalarFieldEnum)[keyof typeof RsvpScalarFieldEnum];
export declare const InvitationEventScalarFieldEnum: {
    readonly id: "id";
    readonly invitationId: "invitationId";
    readonly eventId: "eventId";
    readonly createdAt: "createdAt";
};
export type InvitationEventScalarFieldEnum = (typeof InvitationEventScalarFieldEnum)[keyof typeof InvitationEventScalarFieldEnum];
export declare const RsvpEventSelectionScalarFieldEnum: {
    readonly id: "id";
    readonly rsvpId: "rsvpId";
    readonly eventId: "eventId";
    readonly createdAt: "createdAt";
};
export type RsvpEventSelectionScalarFieldEnum = (typeof RsvpEventSelectionScalarFieldEnum)[keyof typeof RsvpEventSelectionScalarFieldEnum];
export declare const RsvpHistoryScalarFieldEnum: {
    readonly id: "id";
    readonly rsvpId: "rsvpId";
    readonly status: "status";
    readonly adultCount: "adultCount";
    readonly childCount: "childCount";
    readonly vegetarianCount: "vegetarianCount";
    readonly needsTransport: "needsTransport";
    readonly message: "message";
    readonly selectedEventIds: "selectedEventIds";
    readonly source: "source";
    readonly createdAt: "createdAt";
};
export type RsvpHistoryScalarFieldEnum = (typeof RsvpHistoryScalarFieldEnum)[keyof typeof RsvpHistoryScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly id: "id";
    readonly weddingId: "weddingId";
    readonly userId: "userId";
    readonly type: "type";
    readonly title: "title";
    readonly message: "message";
    readonly metadata: "metadata";
    readonly readAt: "readAt";
    readonly createdAt: "createdAt";
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const MediaAssetScalarFieldEnum: {
    readonly id: "id";
    readonly weddingId: "weddingId";
    readonly type: "type";
    readonly storageKey: "storageKey";
    readonly publicUrl: "publicUrl";
    readonly mimeType: "mimeType";
    readonly sizeBytes: "sizeBytes";
    readonly width: "width";
    readonly height: "height";
    readonly isCover: "isCover";
    readonly altText: "altText";
    readonly sortOrder: "sortOrder";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MediaAssetScalarFieldEnum = (typeof MediaAssetScalarFieldEnum)[keyof typeof MediaAssetScalarFieldEnum];
export declare const GiftQrAssetScalarFieldEnum: {
    readonly id: "id";
    readonly weddingId: "weddingId";
    readonly storageKey: "storageKey";
    readonly publicUrl: "publicUrl";
    readonly mimeType: "mimeType";
    readonly sizeBytes: "sizeBytes";
    readonly createdAt: "createdAt";
};
export type GiftQrAssetScalarFieldEnum = (typeof GiftQrAssetScalarFieldEnum)[keyof typeof GiftQrAssetScalarFieldEnum];
export declare const InvitationDesignScalarFieldEnum: {
    readonly id: "id";
    readonly weddingId: "weddingId";
    readonly templateKey: "templateKey";
    readonly paletteKey: "paletteKey";
    readonly primaryColor: "primaryColor";
    readonly accentColor: "accentColor";
    readonly backgroundColor: "backgroundColor";
    readonly surfaceColor: "surfaceColor";
    readonly textColor: "textColor";
    readonly headingFont: "headingFont";
    readonly bodyFont: "bodyFont";
    readonly heroEyebrow: "heroEyebrow";
    readonly greeting: "greeting";
    readonly storyTitle: "storyTitle";
    readonly galleryTitle: "galleryTitle";
    readonly eventsTitle: "eventsTitle";
    readonly countdownTitle: "countdownTitle";
    readonly footerMessage: "footerMessage";
    readonly giftTitle: "giftTitle";
    readonly giftMessage: "giftMessage";
    readonly giftAccounts: "giftAccounts";
    readonly showHero: "showHero";
    readonly showFamily: "showFamily";
    readonly showStory: "showStory";
    readonly showGallery: "showGallery";
    readonly showEvents: "showEvents";
    readonly showCountdown: "showCountdown";
    readonly showFooter: "showFooter";
    readonly showGift: "showGift";
    readonly musicEnabled: "musicEnabled";
    readonly musicUrl: "musicUrl";
    readonly sectionOrder: "sectionOrder";
    readonly revision: "revision";
    readonly autosavedAt: "autosavedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type InvitationDesignScalarFieldEnum = (typeof InvitationDesignScalarFieldEnum)[keyof typeof InvitationDesignScalarFieldEnum];
export declare const InvitationVersionScalarFieldEnum: {
    readonly id: "id";
    readonly weddingId: "weddingId";
    readonly versionNumber: "versionNumber";
    readonly reason: "reason";
    readonly snapshot: "snapshot";
    readonly createdById: "createdById";
    readonly createdAt: "createdAt";
};
export type InvitationVersionScalarFieldEnum = (typeof InvitationVersionScalarFieldEnum)[keyof typeof InvitationVersionScalarFieldEnum];
export declare const InvitationPreviewTokenScalarFieldEnum: {
    readonly id: "id";
    readonly weddingId: "weddingId";
    readonly token: "token";
    readonly expiresAt: "expiresAt";
    readonly revokedAt: "revokedAt";
    readonly createdById: "createdById";
    readonly createdAt: "createdAt";
};
export type InvitationPreviewTokenScalarFieldEnum = (typeof InvitationPreviewTokenScalarFieldEnum)[keyof typeof InvitationPreviewTokenScalarFieldEnum];
export declare const PlanScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly name: "name";
    readonly description: "description";
    readonly priceAmount: "priceAmount";
    readonly currency: "currency";
    readonly guestLimit: "guestLimit";
    readonly mediaLimit: "mediaLimit";
    readonly templateKeys: "templateKeys";
    readonly customDomain: "customDomain";
    readonly prioritySupport: "prioritySupport";
    readonly requiresPublishReview: "requiresPublishReview";
    readonly active: "active";
    readonly sortOrder: "sortOrder";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PlanScalarFieldEnum = (typeof PlanScalarFieldEnum)[keyof typeof PlanScalarFieldEnum];
export declare const AddOnScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly name: "name";
    readonly description: "description";
    readonly priceAmount: "priceAmount";
    readonly currency: "currency";
    readonly guestLimitBonus: "guestLimitBonus";
    readonly mediaLimitBonus: "mediaLimitBonus";
    readonly active: "active";
    readonly sortOrder: "sortOrder";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AddOnScalarFieldEnum = (typeof AddOnScalarFieldEnum)[keyof typeof AddOnScalarFieldEnum];
export declare const CouponScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly name: "name";
    readonly discountType: "discountType";
    readonly discountValue: "discountValue";
    readonly startsAt: "startsAt";
    readonly endsAt: "endsAt";
    readonly usageLimit: "usageLimit";
    readonly usedCount: "usedCount";
    readonly active: "active";
    readonly planCodes: "planCodes";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CouponScalarFieldEnum = (typeof CouponScalarFieldEnum)[keyof typeof CouponScalarFieldEnum];
export declare const OrderScalarFieldEnum: {
    readonly id: "id";
    readonly orderNumber: "orderNumber";
    readonly userId: "userId";
    readonly weddingId: "weddingId";
    readonly planId: "planId";
    readonly couponId: "couponId";
    readonly subtotalAmount: "subtotalAmount";
    readonly discountAmount: "discountAmount";
    readonly totalAmount: "totalAmount";
    readonly currency: "currency";
    readonly status: "status";
    readonly paymentStatus: "paymentStatus";
    readonly fulfillmentStatus: "fulfillmentStatus";
    readonly customerNote: "customerNote";
    readonly internalNote: "internalNote";
    readonly assignedStaffId: "assignedStaffId";
    readonly revisionCount: "revisionCount";
    readonly activatedAt: "activatedAt";
    readonly completedAt: "completedAt";
    readonly canceledAt: "canceledAt";
    readonly refundedAt: "refundedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum];
export declare const OrderItemScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly itemType: "itemType";
    readonly planId: "planId";
    readonly addOnId: "addOnId";
    readonly name: "name";
    readonly quantity: "quantity";
    readonly unitAmount: "unitAmount";
    readonly totalAmount: "totalAmount";
    readonly metadata: "metadata";
    readonly createdAt: "createdAt";
};
export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum];
export declare const PaymentScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly method: "method";
    readonly status: "status";
    readonly amount: "amount";
    readonly currency: "currency";
    readonly reference: "reference";
    readonly proofUrl: "proofUrl";
    readonly note: "note";
    readonly provider: "provider";
    readonly providerTransactionId: "providerTransactionId";
    readonly idempotencyKey: "idempotencyKey";
    readonly submittedAt: "submittedAt";
    readonly confirmedAt: "confirmedAt";
    readonly rejectedAt: "rejectedAt";
    readonly refundedAt: "refundedAt";
    readonly reviewedById: "reviewedById";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum];
export declare const OrderNoteScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly authorId: "authorId";
    readonly visibility: "visibility";
    readonly body: "body";
    readonly createdAt: "createdAt";
};
export type OrderNoteScalarFieldEnum = (typeof OrderNoteScalarFieldEnum)[keyof typeof OrderNoteScalarFieldEnum];
export declare const EmailOutboxScalarFieldEnum: {
    readonly id: "id";
    readonly recipient: "recipient";
    readonly subject: "subject";
    readonly htmlBody: "htmlBody";
    readonly textBody: "textBody";
    readonly templateKey: "templateKey";
    readonly metadata: "metadata";
    readonly status: "status";
    readonly provider: "provider";
    readonly providerMessageId: "providerMessageId";
    readonly attemptCount: "attemptCount";
    readonly nextAttemptAt: "nextAttemptAt";
    readonly sentAt: "sentAt";
    readonly lastError: "lastError";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type EmailOutboxScalarFieldEnum = (typeof EmailOutboxScalarFieldEnum)[keyof typeof EmailOutboxScalarFieldEnum];
export declare const WebhookEndpointScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly url: "url";
    readonly secretCiphertext: "secretCiphertext";
    readonly events: "events";
    readonly active: "active";
    readonly failureCount: "failureCount";
    readonly lastDeliveredAt: "lastDeliveredAt";
    readonly lastFailedAt: "lastFailedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type WebhookEndpointScalarFieldEnum = (typeof WebhookEndpointScalarFieldEnum)[keyof typeof WebhookEndpointScalarFieldEnum];
export declare const WebhookDeliveryScalarFieldEnum: {
    readonly id: "id";
    readonly endpointId: "endpointId";
    readonly eventType: "eventType";
    readonly eventId: "eventId";
    readonly payload: "payload";
    readonly status: "status";
    readonly attemptCount: "attemptCount";
    readonly nextAttemptAt: "nextAttemptAt";
    readonly responseStatus: "responseStatus";
    readonly responseBody: "responseBody";
    readonly lastError: "lastError";
    readonly deliveredAt: "deliveredAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type WebhookDeliveryScalarFieldEnum = (typeof WebhookDeliveryScalarFieldEnum)[keyof typeof WebhookDeliveryScalarFieldEnum];
export declare const PilotChecklistItemScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly category: "category";
    readonly title: "title";
    readonly description: "description";
    readonly owner: "owner";
    readonly status: "status";
    readonly evidenceUrl: "evidenceUrl";
    readonly notes: "notes";
    readonly sortOrder: "sortOrder";
    readonly completedAt: "completedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PilotChecklistItemScalarFieldEnum = (typeof PilotChecklistItemScalarFieldEnum)[keyof typeof PilotChecklistItemScalarFieldEnum];
export declare const PilotIssueScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly description: "description";
    readonly severity: "severity";
    readonly status: "status";
    readonly area: "area";
    readonly reporter: "reporter";
    readonly assignee: "assignee";
    readonly reproduction: "reproduction";
    readonly resolution: "resolution";
    readonly dueAt: "dueAt";
    readonly resolvedAt: "resolvedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PilotIssueScalarFieldEnum = (typeof PilotIssueScalarFieldEnum)[keyof typeof PilotIssueScalarFieldEnum];
export declare const SystemAnnouncementScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly message: "message";
    readonly level: "level";
    readonly active: "active";
    readonly startsAt: "startsAt";
    readonly endsAt: "endsAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SystemAnnouncementScalarFieldEnum = (typeof SystemAnnouncementScalarFieldEnum)[keyof typeof SystemAnnouncementScalarFieldEnum];
export declare const GrowthEventScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly weddingId: "weddingId";
    readonly sessionId: "sessionId";
    readonly eventName: "eventName";
    readonly source: "source";
    readonly campaign: "campaign";
    readonly properties: "properties";
    readonly occurredAt: "occurredAt";
};
export type GrowthEventScalarFieldEnum = (typeof GrowthEventScalarFieldEnum)[keyof typeof GrowthEventScalarFieldEnum];
export declare const ReferralCodeScalarFieldEnum: {
    readonly id: "id";
    readonly ownerUserId: "ownerUserId";
    readonly code: "code";
    readonly label: "label";
    readonly active: "active";
    readonly visitCount: "visitCount";
    readonly signupCount: "signupCount";
    readonly conversionCount: "conversionCount";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ReferralCodeScalarFieldEnum = (typeof ReferralCodeScalarFieldEnum)[keyof typeof ReferralCodeScalarFieldEnum];
export declare const ReferralAttributionScalarFieldEnum: {
    readonly id: "id";
    readonly referralCodeId: "referralCodeId";
    readonly referredUserId: "referredUserId";
    readonly sessionId: "sessionId";
    readonly source: "source";
    readonly attributedAt: "attributedAt";
    readonly convertedAt: "convertedAt";
};
export type ReferralAttributionScalarFieldEnum = (typeof ReferralAttributionScalarFieldEnum)[keyof typeof ReferralAttributionScalarFieldEnum];
export declare const OnboardingProgressScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly steps: "steps";
    readonly dismissed: "dismissed";
    readonly completedAt: "completedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type OnboardingProgressScalarFieldEnum = (typeof OnboardingProgressScalarFieldEnum)[keyof typeof OnboardingProgressScalarFieldEnum];
export declare const SupportTicketScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly email: "email";
    readonly subject: "subject";
    readonly category: "category";
    readonly priority: "priority";
    readonly status: "status";
    readonly message: "message";
    readonly resolution: "resolution";
    readonly assignedTo: "assignedTo";
    readonly firstResponseAt: "firstResponseAt";
    readonly resolvedAt: "resolvedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SupportTicketScalarFieldEnum = (typeof SupportTicketScalarFieldEnum)[keyof typeof SupportTicketScalarFieldEnum];
export declare const CustomDomainScalarFieldEnum: {
    readonly id: "id";
    readonly weddingId: "weddingId";
    readonly requestedById: "requestedById";
    readonly hostname: "hostname";
    readonly status: "status";
    readonly verificationToken: "verificationToken";
    readonly dnsTarget: "dnsTarget";
    readonly lastCheckedAt: "lastCheckedAt";
    readonly verifiedAt: "verifiedAt";
    readonly activatedAt: "activatedAt";
    readonly failureReason: "failureReason";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CustomDomainScalarFieldEnum = (typeof CustomDomainScalarFieldEnum)[keyof typeof CustomDomainScalarFieldEnum];
export declare const PartnerOrganizationScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly status: "status";
    readonly contactEmail: "contactEmail";
    readonly contactPhone: "contactPhone";
    readonly website: "website";
    readonly logoUrl: "logoUrl";
    readonly brandName: "brandName";
    readonly primaryColor: "primaryColor";
    readonly hideNgayDoiBrand: "hideNgayDoiBrand";
    readonly commissionRateBps: "commissionRateBps";
    readonly minimumPayout: "minimumPayout";
    readonly approvedAt: "approvedAt";
    readonly approvedById: "approvedById";
    readonly suspendedAt: "suspendedAt";
    readonly notes: "notes";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PartnerOrganizationScalarFieldEnum = (typeof PartnerOrganizationScalarFieldEnum)[keyof typeof PartnerOrganizationScalarFieldEnum];
export declare const PartnerMemberScalarFieldEnum: {
    readonly id: "id";
    readonly partnerId: "partnerId";
    readonly userId: "userId";
    readonly role: "role";
    readonly active: "active";
    readonly invitedAt: "invitedAt";
    readonly joinedAt: "joinedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PartnerMemberScalarFieldEnum = (typeof PartnerMemberScalarFieldEnum)[keyof typeof PartnerMemberScalarFieldEnum];
export declare const PartnerClientScalarFieldEnum: {
    readonly id: "id";
    readonly partnerId: "partnerId";
    readonly customerId: "customerId";
    readonly weddingId: "weddingId";
    readonly source: "source";
    readonly externalRef: "externalRef";
    readonly notes: "notes";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PartnerClientScalarFieldEnum = (typeof PartnerClientScalarFieldEnum)[keyof typeof PartnerClientScalarFieldEnum];
export declare const PartnerCommissionScalarFieldEnum: {
    readonly id: "id";
    readonly partnerId: "partnerId";
    readonly orderId: "orderId";
    readonly customerId: "customerId";
    readonly weddingId: "weddingId";
    readonly description: "description";
    readonly baseAmount: "baseAmount";
    readonly rateBps: "rateBps";
    readonly commissionAmount: "commissionAmount";
    readonly status: "status";
    readonly availableAt: "availableAt";
    readonly approvedAt: "approvedAt";
    readonly paidAt: "paidAt";
    readonly payoutId: "payoutId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PartnerCommissionScalarFieldEnum = (typeof PartnerCommissionScalarFieldEnum)[keyof typeof PartnerCommissionScalarFieldEnum];
export declare const PartnerPayoutScalarFieldEnum: {
    readonly id: "id";
    readonly partnerId: "partnerId";
    readonly requestedById: "requestedById";
    readonly reviewedById: "reviewedById";
    readonly amount: "amount";
    readonly status: "status";
    readonly bankName: "bankName";
    readonly accountName: "accountName";
    readonly accountNumberMasked: "accountNumberMasked";
    readonly note: "note";
    readonly rejectionReason: "rejectionReason";
    readonly requestedAt: "requestedAt";
    readonly reviewedAt: "reviewedAt";
    readonly paidAt: "paidAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PartnerPayoutScalarFieldEnum = (typeof PartnerPayoutScalarFieldEnum)[keyof typeof PartnerPayoutScalarFieldEnum];
export declare const SeatingTableScalarFieldEnum: {
    readonly id: "id";
    readonly weddingId: "weddingId";
    readonly eventId: "eventId";
    readonly eventKey: "eventKey";
    readonly name: "name";
    readonly code: "code";
    readonly capacity: "capacity";
    readonly zone: "zone";
    readonly shape: "shape";
    readonly note: "note";
    readonly sortOrder: "sortOrder";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SeatingTableScalarFieldEnum = (typeof SeatingTableScalarFieldEnum)[keyof typeof SeatingTableScalarFieldEnum];
export declare const SeatAssignmentScalarFieldEnum: {
    readonly id: "id";
    readonly weddingId: "weddingId";
    readonly eventId: "eventId";
    readonly eventKey: "eventKey";
    readonly tableId: "tableId";
    readonly guestId: "guestId";
    readonly seatCount: "seatCount";
    readonly note: "note";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SeatAssignmentScalarFieldEnum = (typeof SeatAssignmentScalarFieldEnum)[keyof typeof SeatAssignmentScalarFieldEnum];
export declare const CheckinStationScalarFieldEnum: {
    readonly id: "id";
    readonly weddingId: "weddingId";
    readonly eventId: "eventId";
    readonly eventKey: "eventKey";
    readonly name: "name";
    readonly token: "token";
    readonly status: "status";
    readonly lastUsedAt: "lastUsedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CheckinStationScalarFieldEnum = (typeof CheckinStationScalarFieldEnum)[keyof typeof CheckinStationScalarFieldEnum];
export declare const CheckinRecordScalarFieldEnum: {
    readonly id: "id";
    readonly weddingId: "weddingId";
    readonly eventId: "eventId";
    readonly eventKey: "eventKey";
    readonly guestId: "guestId";
    readonly invitationId: "invitationId";
    readonly stationId: "stationId";
    readonly method: "method";
    readonly adultCount: "adultCount";
    readonly childCount: "childCount";
    readonly note: "note";
    readonly checkedInAt: "checkedInAt";
    readonly checkedOutAt: "checkedOutAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CheckinRecordScalarFieldEnum = (typeof CheckinRecordScalarFieldEnum)[keyof typeof CheckinRecordScalarFieldEnum];
export declare const MemoryAlbumScalarFieldEnum: {
    readonly id: "id";
    readonly weddingId: "weddingId";
    readonly token: "token";
    readonly title: "title";
    readonly description: "description";
    readonly thankYouTitle: "thankYouTitle";
    readonly thankYouMessage: "thankYouMessage";
    readonly uploadEnabled: "uploadEnabled";
    readonly publicEnabled: "publicEnabled";
    readonly moderationRequired: "moderationRequired";
    readonly showUploaderName: "showUploaderName";
    readonly reactionsEnabled: "reactionsEnabled";
    readonly commentsEnabled: "commentsEnabled";
    readonly commentModerationRequired: "commentModerationRequired";
    readonly downloadsEnabled: "downloadsEnabled";
    readonly guestbookEnabled: "guestbookEnabled";
    readonly guestbookModerationRequired: "guestbookModerationRequired";
    readonly memoryModeEnabled: "memoryModeEnabled";
    readonly thankYouSignature: "thankYouSignature";
    readonly showCouplePhoto: "showCouplePhoto";
    readonly showWeddingDate: "showWeddingDate";
    readonly closesAt: "closesAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MemoryAlbumScalarFieldEnum = (typeof MemoryAlbumScalarFieldEnum)[keyof typeof MemoryAlbumScalarFieldEnum];
export declare const MemoryAssetScalarFieldEnum: {
    readonly id: "id";
    readonly albumId: "albumId";
    readonly invitationId: "invitationId";
    readonly type: "type";
    readonly status: "status";
    readonly storageKey: "storageKey";
    readonly publicUrl: "publicUrl";
    readonly mimeType: "mimeType";
    readonly sizeBytes: "sizeBytes";
    readonly originalName: "originalName";
    readonly uploaderName: "uploaderName";
    readonly uploaderMessage: "uploaderMessage";
    readonly width: "width";
    readonly height: "height";
    readonly rejectionReason: "rejectionReason";
    readonly moderationNote: "moderationNote";
    readonly featuredOrder: "featuredOrder";
    readonly featuredAt: "featuredAt";
    readonly approvedAt: "approvedAt";
    readonly rejectedAt: "rejectedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MemoryAssetScalarFieldEnum = (typeof MemoryAssetScalarFieldEnum)[keyof typeof MemoryAssetScalarFieldEnum];
export declare const MemoryReactionScalarFieldEnum: {
    readonly id: "id";
    readonly assetId: "assetId";
    readonly actorHash: "actorHash";
    readonly type: "type";
    readonly createdAt: "createdAt";
};
export type MemoryReactionScalarFieldEnum = (typeof MemoryReactionScalarFieldEnum)[keyof typeof MemoryReactionScalarFieldEnum];
export declare const MemoryCommentScalarFieldEnum: {
    readonly id: "id";
    readonly assetId: "assetId";
    readonly invitationId: "invitationId";
    readonly authorName: "authorName";
    readonly actorHash: "actorHash";
    readonly body: "body";
    readonly status: "status";
    readonly approvedAt: "approvedAt";
    readonly hiddenAt: "hiddenAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MemoryCommentScalarFieldEnum = (typeof MemoryCommentScalarFieldEnum)[keyof typeof MemoryCommentScalarFieldEnum];
export declare const GuestbookEntryScalarFieldEnum: {
    readonly id: "id";
    readonly weddingId: "weddingId";
    readonly invitationId: "invitationId";
    readonly authorName: "authorName";
    readonly message: "message";
    readonly status: "status";
    readonly approvedAt: "approvedAt";
    readonly hiddenAt: "hiddenAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type GuestbookEntryScalarFieldEnum = (typeof GuestbookEntryScalarFieldEnum)[keyof typeof GuestbookEntryScalarFieldEnum];
export declare const PlanningTaskScalarFieldEnum: {
    readonly id: "id";
    readonly weddingId: "weddingId";
    readonly title: "title";
    readonly description: "description";
    readonly category: "category";
    readonly priority: "priority";
    readonly status: "status";
    readonly source: "source";
    readonly dueAt: "dueAt";
    readonly assigneeName: "assigneeName";
    readonly sortOrder: "sortOrder";
    readonly reminderEnabled: "reminderEnabled";
    readonly reminderDaysBefore: "reminderDaysBefore";
    readonly lastReminderAt: "lastReminderAt";
    readonly completedAt: "completedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PlanningTaskScalarFieldEnum = (typeof PlanningTaskScalarFieldEnum)[keyof typeof PlanningTaskScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const JsonNullValueInput: {
    readonly JsonNull: runtime.JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>;
export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>;
export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>;
export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
export type EnumWeddingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WeddingStatus'>;
export type ListEnumWeddingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WeddingStatus[]'>;
export type EnumPublishReviewStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PublishReviewStatus'>;
export type ListEnumPublishReviewStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PublishReviewStatus[]'>;
export type EnumWeddingPermissionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WeddingPermission'>;
export type ListEnumWeddingPermissionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WeddingPermission[]'>;
export type EnumCollaborationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CollaborationStatus'>;
export type ListEnumCollaborationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CollaborationStatus[]'>;
export type EnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventType'>;
export type ListEnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventType[]'>;
export type EnumWeddingSideFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WeddingSide'>;
export type ListEnumWeddingSideFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WeddingSide[]'>;
export type EnumInvitationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvitationStatus'>;
export type ListEnumInvitationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvitationStatus[]'>;
export type EnumRsvpStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RsvpStatus'>;
export type ListEnumRsvpStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RsvpStatus[]'>;
export type EnumPlanCodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanCode'>;
export type ListEnumPlanCodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanCode[]'>;
export type EnumDiscountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DiscountType'>;
export type ListEnumDiscountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DiscountType[]'>;
export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>;
export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>;
export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>;
export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>;
export type EnumFulfillmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FulfillmentStatus'>;
export type ListEnumFulfillmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FulfillmentStatus[]'>;
export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>;
export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>;
export type EnumDeliveryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryStatus'>;
export type ListEnumDeliveryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryStatus[]'>;
export type EnumPilotItemStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PilotItemStatus'>;
export type ListEnumPilotItemStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PilotItemStatus[]'>;
export type EnumPilotIssueSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PilotIssueSeverity'>;
export type ListEnumPilotIssueSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PilotIssueSeverity[]'>;
export type EnumPilotIssueStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PilotIssueStatus'>;
export type ListEnumPilotIssueStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PilotIssueStatus[]'>;
export type EnumSupportTicketPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SupportTicketPriority'>;
export type ListEnumSupportTicketPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SupportTicketPriority[]'>;
export type EnumSupportTicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SupportTicketStatus'>;
export type ListEnumSupportTicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SupportTicketStatus[]'>;
export type EnumDomainStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DomainStatus'>;
export type ListEnumDomainStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DomainStatus[]'>;
export type EnumPartnerStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PartnerStatus'>;
export type ListEnumPartnerStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PartnerStatus[]'>;
export type EnumPartnerMemberRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PartnerMemberRole'>;
export type ListEnumPartnerMemberRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PartnerMemberRole[]'>;
export type EnumCommissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CommissionStatus'>;
export type ListEnumCommissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CommissionStatus[]'>;
export type EnumPayoutStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayoutStatus'>;
export type ListEnumPayoutStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayoutStatus[]'>;
export type EnumSeatingTableShapeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SeatingTableShape'>;
export type ListEnumSeatingTableShapeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SeatingTableShape[]'>;
export type EnumCheckinStationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CheckinStationStatus'>;
export type ListEnumCheckinStationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CheckinStationStatus[]'>;
export type EnumCheckinMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CheckinMethod'>;
export type ListEnumCheckinMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CheckinMethod[]'>;
export type EnumMemoryAssetTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MemoryAssetType'>;
export type ListEnumMemoryAssetTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MemoryAssetType[]'>;
export type EnumMemoryAssetStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MemoryAssetStatus'>;
export type ListEnumMemoryAssetStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MemoryAssetStatus[]'>;
export type EnumMemoryReactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MemoryReactionType'>;
export type ListEnumMemoryReactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MemoryReactionType[]'>;
export type EnumSocialContentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SocialContentStatus'>;
export type ListEnumSocialContentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SocialContentStatus[]'>;
export type EnumPlanningTaskCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanningTaskCategory'>;
export type ListEnumPlanningTaskCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanningTaskCategory[]'>;
export type EnumPlanningTaskPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanningTaskPriority'>;
export type ListEnumPlanningTaskPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanningTaskPriority[]'>;
export type EnumPlanningTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanningTaskStatus'>;
export type ListEnumPlanningTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanningTaskStatus[]'>;
export type EnumPlanningTaskSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanningTaskSource'>;
export type ListEnumPlanningTaskSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanningTaskSource[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientBaseOptions {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
}
export interface PrismaClientOptionsWithAccelerateUrl extends PrismaClientBaseOptions {
    accelerateUrl: string;
    adapter?: never;
}
export interface PrismaClientOptionsWithAdapter extends PrismaClientBaseOptions {
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
}
export type PrismaClientOptions = PrismaClientOptionsWithAccelerateUrl | PrismaClientOptionsWithAdapter;
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    refreshSession?: Prisma.RefreshSessionOmit;
    emailVerificationToken?: Prisma.EmailVerificationTokenOmit;
    passwordResetToken?: Prisma.PasswordResetTokenOmit;
    auditLog?: Prisma.AuditLogOmit;
    wedding?: Prisma.WeddingOmit;
    weddingCollaborator?: Prisma.WeddingCollaboratorOmit;
    event?: Prisma.EventOmit;
    guest?: Prisma.GuestOmit;
    invitation?: Prisma.InvitationOmit;
    rsvp?: Prisma.RsvpOmit;
    invitationEvent?: Prisma.InvitationEventOmit;
    rsvpEventSelection?: Prisma.RsvpEventSelectionOmit;
    rsvpHistory?: Prisma.RsvpHistoryOmit;
    notification?: Prisma.NotificationOmit;
    mediaAsset?: Prisma.MediaAssetOmit;
    giftQrAsset?: Prisma.GiftQrAssetOmit;
    invitationDesign?: Prisma.InvitationDesignOmit;
    invitationVersion?: Prisma.InvitationVersionOmit;
    invitationPreviewToken?: Prisma.InvitationPreviewTokenOmit;
    plan?: Prisma.PlanOmit;
    addOn?: Prisma.AddOnOmit;
    coupon?: Prisma.CouponOmit;
    order?: Prisma.OrderOmit;
    orderItem?: Prisma.OrderItemOmit;
    payment?: Prisma.PaymentOmit;
    orderNote?: Prisma.OrderNoteOmit;
    emailOutbox?: Prisma.EmailOutboxOmit;
    webhookEndpoint?: Prisma.WebhookEndpointOmit;
    webhookDelivery?: Prisma.WebhookDeliveryOmit;
    pilotChecklistItem?: Prisma.PilotChecklistItemOmit;
    pilotIssue?: Prisma.PilotIssueOmit;
    systemAnnouncement?: Prisma.SystemAnnouncementOmit;
    growthEvent?: Prisma.GrowthEventOmit;
    referralCode?: Prisma.ReferralCodeOmit;
    referralAttribution?: Prisma.ReferralAttributionOmit;
    onboardingProgress?: Prisma.OnboardingProgressOmit;
    supportTicket?: Prisma.SupportTicketOmit;
    customDomain?: Prisma.CustomDomainOmit;
    partnerOrganization?: Prisma.PartnerOrganizationOmit;
    partnerMember?: Prisma.PartnerMemberOmit;
    partnerClient?: Prisma.PartnerClientOmit;
    partnerCommission?: Prisma.PartnerCommissionOmit;
    partnerPayout?: Prisma.PartnerPayoutOmit;
    seatingTable?: Prisma.SeatingTableOmit;
    seatAssignment?: Prisma.SeatAssignmentOmit;
    checkinStation?: Prisma.CheckinStationOmit;
    checkinRecord?: Prisma.CheckinRecordOmit;
    memoryAlbum?: Prisma.MemoryAlbumOmit;
    memoryAsset?: Prisma.MemoryAssetOmit;
    memoryReaction?: Prisma.MemoryReactionOmit;
    memoryComment?: Prisma.MemoryCommentOmit;
    guestbookEntry?: Prisma.GuestbookEntryOmit;
    planningTask?: Prisma.PlanningTaskOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
