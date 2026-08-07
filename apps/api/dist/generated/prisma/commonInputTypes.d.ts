import type * as runtime from "@prisma/client/runtime/client";
import * as $Enums from "./enums.js";
import type * as Prisma from "./internal/prismaNamespace.js";
export type StringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | Prisma.EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole;
};
export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | Prisma.EnumUserStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus;
};
export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type IntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type SortOrderInput = {
    sort: Prisma.SortOrder;
    nulls?: Prisma.NullsOrder;
};
export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | Prisma.EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumUserRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumUserRoleFilter<$PrismaModel>;
};
export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | Prisma.EnumUserStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumUserStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumUserStatusFilter<$PrismaModel>;
};
export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type JsonNullableFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>, Required<JsonNullableFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>;
export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>, Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>;
export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedJsonNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedJsonNullableFilter<$PrismaModel>;
};
export type EnumWeddingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WeddingStatus | Prisma.EnumWeddingStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.WeddingStatus[] | Prisma.ListEnumWeddingStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.WeddingStatus[] | Prisma.ListEnumWeddingStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumWeddingStatusFilter<$PrismaModel> | $Enums.WeddingStatus;
};
export type EnumPublishReviewStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PublishReviewStatus | Prisma.EnumPublishReviewStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PublishReviewStatus[] | Prisma.ListEnumPublishReviewStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PublishReviewStatus[] | Prisma.ListEnumPublishReviewStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPublishReviewStatusFilter<$PrismaModel> | $Enums.PublishReviewStatus;
};
export type EnumWeddingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WeddingStatus | Prisma.EnumWeddingStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.WeddingStatus[] | Prisma.ListEnumWeddingStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.WeddingStatus[] | Prisma.ListEnumWeddingStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumWeddingStatusWithAggregatesFilter<$PrismaModel> | $Enums.WeddingStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumWeddingStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumWeddingStatusFilter<$PrismaModel>;
};
export type EnumPublishReviewStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PublishReviewStatus | Prisma.EnumPublishReviewStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PublishReviewStatus[] | Prisma.ListEnumPublishReviewStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PublishReviewStatus[] | Prisma.ListEnumPublishReviewStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPublishReviewStatusWithAggregatesFilter<$PrismaModel> | $Enums.PublishReviewStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPublishReviewStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPublishReviewStatusFilter<$PrismaModel>;
};
export type EnumWeddingPermissionFilter<$PrismaModel = never> = {
    equals?: $Enums.WeddingPermission | Prisma.EnumWeddingPermissionFieldRefInput<$PrismaModel>;
    in?: $Enums.WeddingPermission[] | Prisma.ListEnumWeddingPermissionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.WeddingPermission[] | Prisma.ListEnumWeddingPermissionFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumWeddingPermissionFilter<$PrismaModel> | $Enums.WeddingPermission;
};
export type EnumCollaborationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CollaborationStatus | Prisma.EnumCollaborationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CollaborationStatus[] | Prisma.ListEnumCollaborationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CollaborationStatus[] | Prisma.ListEnumCollaborationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCollaborationStatusFilter<$PrismaModel> | $Enums.CollaborationStatus;
};
export type EnumWeddingPermissionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WeddingPermission | Prisma.EnumWeddingPermissionFieldRefInput<$PrismaModel>;
    in?: $Enums.WeddingPermission[] | Prisma.ListEnumWeddingPermissionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.WeddingPermission[] | Prisma.ListEnumWeddingPermissionFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumWeddingPermissionWithAggregatesFilter<$PrismaModel> | $Enums.WeddingPermission;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumWeddingPermissionFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumWeddingPermissionFilter<$PrismaModel>;
};
export type EnumCollaborationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CollaborationStatus | Prisma.EnumCollaborationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CollaborationStatus[] | Prisma.ListEnumCollaborationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CollaborationStatus[] | Prisma.ListEnumCollaborationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCollaborationStatusWithAggregatesFilter<$PrismaModel> | $Enums.CollaborationStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCollaborationStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCollaborationStatusFilter<$PrismaModel>;
};
export type EnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | Prisma.EnumEventTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.EventType[] | Prisma.ListEnumEventTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventType[] | Prisma.ListEnumEventTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType;
};
export type EnumWeddingSideFilter<$PrismaModel = never> = {
    equals?: $Enums.WeddingSide | Prisma.EnumWeddingSideFieldRefInput<$PrismaModel>;
    in?: $Enums.WeddingSide[] | Prisma.ListEnumWeddingSideFieldRefInput<$PrismaModel>;
    notIn?: $Enums.WeddingSide[] | Prisma.ListEnumWeddingSideFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumWeddingSideFilter<$PrismaModel> | $Enums.WeddingSide;
};
export type EnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | Prisma.EnumEventTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.EventType[] | Prisma.ListEnumEventTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventType[] | Prisma.ListEnumEventTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumEventTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumEventTypeFilter<$PrismaModel>;
};
export type EnumWeddingSideWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WeddingSide | Prisma.EnumWeddingSideFieldRefInput<$PrismaModel>;
    in?: $Enums.WeddingSide[] | Prisma.ListEnumWeddingSideFieldRefInput<$PrismaModel>;
    notIn?: $Enums.WeddingSide[] | Prisma.ListEnumWeddingSideFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumWeddingSideWithAggregatesFilter<$PrismaModel> | $Enums.WeddingSide;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumWeddingSideFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumWeddingSideFilter<$PrismaModel>;
};
export type EnumInvitationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationStatus | Prisma.EnumInvitationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.InvitationStatus[] | Prisma.ListEnumInvitationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.InvitationStatus[] | Prisma.ListEnumInvitationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumInvitationStatusFilter<$PrismaModel> | $Enums.InvitationStatus;
};
export type EnumInvitationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationStatus | Prisma.EnumInvitationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.InvitationStatus[] | Prisma.ListEnumInvitationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.InvitationStatus[] | Prisma.ListEnumInvitationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumInvitationStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvitationStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumInvitationStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumInvitationStatusFilter<$PrismaModel>;
};
export type EnumRsvpStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RsvpStatus | Prisma.EnumRsvpStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.RsvpStatus[] | Prisma.ListEnumRsvpStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RsvpStatus[] | Prisma.ListEnumRsvpStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRsvpStatusFilter<$PrismaModel> | $Enums.RsvpStatus;
};
export type EnumRsvpStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RsvpStatus | Prisma.EnumRsvpStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.RsvpStatus[] | Prisma.ListEnumRsvpStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RsvpStatus[] | Prisma.ListEnumRsvpStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRsvpStatusWithAggregatesFilter<$PrismaModel> | $Enums.RsvpStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRsvpStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRsvpStatusFilter<$PrismaModel>;
};
export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type JsonFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>, Required<JsonFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>;
export type JsonFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type JsonWithAggregatesFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>, Required<JsonWithAggregatesFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>;
export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedJsonFilter<$PrismaModel>;
    _max?: Prisma.NestedJsonFilter<$PrismaModel>;
};
export type EnumPlanCodeFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanCode | Prisma.EnumPlanCodeFieldRefInput<$PrismaModel>;
    in?: $Enums.PlanCode[] | Prisma.ListEnumPlanCodeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PlanCode[] | Prisma.ListEnumPlanCodeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPlanCodeFilter<$PrismaModel> | $Enums.PlanCode;
};
export type EnumPlanCodeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanCode | Prisma.EnumPlanCodeFieldRefInput<$PrismaModel>;
    in?: $Enums.PlanCode[] | Prisma.ListEnumPlanCodeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PlanCode[] | Prisma.ListEnumPlanCodeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPlanCodeWithAggregatesFilter<$PrismaModel> | $Enums.PlanCode;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPlanCodeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPlanCodeFilter<$PrismaModel>;
};
export type EnumDiscountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DiscountType | Prisma.EnumDiscountTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.DiscountType[] | Prisma.ListEnumDiscountTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DiscountType[] | Prisma.ListEnumDiscountTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDiscountTypeFilter<$PrismaModel> | $Enums.DiscountType;
};
export type EnumDiscountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DiscountType | Prisma.EnumDiscountTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.DiscountType[] | Prisma.ListEnumDiscountTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DiscountType[] | Prisma.ListEnumDiscountTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDiscountTypeWithAggregatesFilter<$PrismaModel> | $Enums.DiscountType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDiscountTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDiscountTypeFilter<$PrismaModel>;
};
export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | Prisma.EnumOrderStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OrderStatus[] | Prisma.ListEnumOrderStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OrderStatus[] | Prisma.ListEnumOrderStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus;
};
export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | Prisma.EnumPaymentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentStatus[] | Prisma.ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentStatus[] | Prisma.ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus;
};
export type EnumFulfillmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FulfillmentStatus | Prisma.EnumFulfillmentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.FulfillmentStatus[] | Prisma.ListEnumFulfillmentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FulfillmentStatus[] | Prisma.ListEnumFulfillmentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFulfillmentStatusFilter<$PrismaModel> | $Enums.FulfillmentStatus;
};
export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | Prisma.EnumOrderStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OrderStatus[] | Prisma.ListEnumOrderStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OrderStatus[] | Prisma.ListEnumOrderStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumOrderStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumOrderStatusFilter<$PrismaModel>;
};
export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | Prisma.EnumPaymentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentStatus[] | Prisma.ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentStatus[] | Prisma.ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPaymentStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPaymentStatusFilter<$PrismaModel>;
};
export type EnumFulfillmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FulfillmentStatus | Prisma.EnumFulfillmentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.FulfillmentStatus[] | Prisma.ListEnumFulfillmentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FulfillmentStatus[] | Prisma.ListEnumFulfillmentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFulfillmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.FulfillmentStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumFulfillmentStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumFulfillmentStatusFilter<$PrismaModel>;
};
export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | Prisma.EnumPaymentMethodFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentMethod[] | Prisma.ListEnumPaymentMethodFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentMethod[] | Prisma.ListEnumPaymentMethodFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod;
};
export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | Prisma.EnumPaymentMethodFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentMethod[] | Prisma.ListEnumPaymentMethodFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentMethod[] | Prisma.ListEnumPaymentMethodFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPaymentMethodFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPaymentMethodFilter<$PrismaModel>;
};
export type EnumDeliveryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | Prisma.EnumDeliveryStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.DeliveryStatus[] | Prisma.ListEnumDeliveryStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DeliveryStatus[] | Prisma.ListEnumDeliveryStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDeliveryStatusFilter<$PrismaModel> | $Enums.DeliveryStatus;
};
export type EnumDeliveryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | Prisma.EnumDeliveryStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.DeliveryStatus[] | Prisma.ListEnumDeliveryStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DeliveryStatus[] | Prisma.ListEnumDeliveryStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDeliveryStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDeliveryStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDeliveryStatusFilter<$PrismaModel>;
};
export type EnumPilotItemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PilotItemStatus | Prisma.EnumPilotItemStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PilotItemStatus[] | Prisma.ListEnumPilotItemStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PilotItemStatus[] | Prisma.ListEnumPilotItemStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPilotItemStatusFilter<$PrismaModel> | $Enums.PilotItemStatus;
};
export type EnumPilotItemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PilotItemStatus | Prisma.EnumPilotItemStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PilotItemStatus[] | Prisma.ListEnumPilotItemStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PilotItemStatus[] | Prisma.ListEnumPilotItemStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPilotItemStatusWithAggregatesFilter<$PrismaModel> | $Enums.PilotItemStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPilotItemStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPilotItemStatusFilter<$PrismaModel>;
};
export type EnumPilotIssueSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.PilotIssueSeverity | Prisma.EnumPilotIssueSeverityFieldRefInput<$PrismaModel>;
    in?: $Enums.PilotIssueSeverity[] | Prisma.ListEnumPilotIssueSeverityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PilotIssueSeverity[] | Prisma.ListEnumPilotIssueSeverityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPilotIssueSeverityFilter<$PrismaModel> | $Enums.PilotIssueSeverity;
};
export type EnumPilotIssueStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PilotIssueStatus | Prisma.EnumPilotIssueStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PilotIssueStatus[] | Prisma.ListEnumPilotIssueStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PilotIssueStatus[] | Prisma.ListEnumPilotIssueStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPilotIssueStatusFilter<$PrismaModel> | $Enums.PilotIssueStatus;
};
export type EnumPilotIssueSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PilotIssueSeverity | Prisma.EnumPilotIssueSeverityFieldRefInput<$PrismaModel>;
    in?: $Enums.PilotIssueSeverity[] | Prisma.ListEnumPilotIssueSeverityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PilotIssueSeverity[] | Prisma.ListEnumPilotIssueSeverityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPilotIssueSeverityWithAggregatesFilter<$PrismaModel> | $Enums.PilotIssueSeverity;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPilotIssueSeverityFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPilotIssueSeverityFilter<$PrismaModel>;
};
export type EnumPilotIssueStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PilotIssueStatus | Prisma.EnumPilotIssueStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PilotIssueStatus[] | Prisma.ListEnumPilotIssueStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PilotIssueStatus[] | Prisma.ListEnumPilotIssueStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPilotIssueStatusWithAggregatesFilter<$PrismaModel> | $Enums.PilotIssueStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPilotIssueStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPilotIssueStatusFilter<$PrismaModel>;
};
export type EnumSupportTicketPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.SupportTicketPriority | Prisma.EnumSupportTicketPriorityFieldRefInput<$PrismaModel>;
    in?: $Enums.SupportTicketPriority[] | Prisma.ListEnumSupportTicketPriorityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SupportTicketPriority[] | Prisma.ListEnumSupportTicketPriorityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSupportTicketPriorityFilter<$PrismaModel> | $Enums.SupportTicketPriority;
};
export type EnumSupportTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SupportTicketStatus | Prisma.EnumSupportTicketStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.SupportTicketStatus[] | Prisma.ListEnumSupportTicketStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SupportTicketStatus[] | Prisma.ListEnumSupportTicketStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSupportTicketStatusFilter<$PrismaModel> | $Enums.SupportTicketStatus;
};
export type EnumSupportTicketPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SupportTicketPriority | Prisma.EnumSupportTicketPriorityFieldRefInput<$PrismaModel>;
    in?: $Enums.SupportTicketPriority[] | Prisma.ListEnumSupportTicketPriorityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SupportTicketPriority[] | Prisma.ListEnumSupportTicketPriorityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSupportTicketPriorityWithAggregatesFilter<$PrismaModel> | $Enums.SupportTicketPriority;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSupportTicketPriorityFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSupportTicketPriorityFilter<$PrismaModel>;
};
export type EnumSupportTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SupportTicketStatus | Prisma.EnumSupportTicketStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.SupportTicketStatus[] | Prisma.ListEnumSupportTicketStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SupportTicketStatus[] | Prisma.ListEnumSupportTicketStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSupportTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.SupportTicketStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSupportTicketStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSupportTicketStatusFilter<$PrismaModel>;
};
export type EnumDomainStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DomainStatus | Prisma.EnumDomainStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.DomainStatus[] | Prisma.ListEnumDomainStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DomainStatus[] | Prisma.ListEnumDomainStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDomainStatusFilter<$PrismaModel> | $Enums.DomainStatus;
};
export type EnumDomainStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DomainStatus | Prisma.EnumDomainStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.DomainStatus[] | Prisma.ListEnumDomainStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DomainStatus[] | Prisma.ListEnumDomainStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDomainStatusWithAggregatesFilter<$PrismaModel> | $Enums.DomainStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDomainStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDomainStatusFilter<$PrismaModel>;
};
export type EnumPartnerStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PartnerStatus | Prisma.EnumPartnerStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PartnerStatus[] | Prisma.ListEnumPartnerStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PartnerStatus[] | Prisma.ListEnumPartnerStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPartnerStatusFilter<$PrismaModel> | $Enums.PartnerStatus;
};
export type EnumPartnerStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PartnerStatus | Prisma.EnumPartnerStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PartnerStatus[] | Prisma.ListEnumPartnerStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PartnerStatus[] | Prisma.ListEnumPartnerStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPartnerStatusWithAggregatesFilter<$PrismaModel> | $Enums.PartnerStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPartnerStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPartnerStatusFilter<$PrismaModel>;
};
export type EnumPartnerMemberRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.PartnerMemberRole | Prisma.EnumPartnerMemberRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.PartnerMemberRole[] | Prisma.ListEnumPartnerMemberRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PartnerMemberRole[] | Prisma.ListEnumPartnerMemberRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPartnerMemberRoleFilter<$PrismaModel> | $Enums.PartnerMemberRole;
};
export type EnumPartnerMemberRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PartnerMemberRole | Prisma.EnumPartnerMemberRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.PartnerMemberRole[] | Prisma.ListEnumPartnerMemberRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PartnerMemberRole[] | Prisma.ListEnumPartnerMemberRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPartnerMemberRoleWithAggregatesFilter<$PrismaModel> | $Enums.PartnerMemberRole;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPartnerMemberRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPartnerMemberRoleFilter<$PrismaModel>;
};
export type EnumCommissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CommissionStatus | Prisma.EnumCommissionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CommissionStatus[] | Prisma.ListEnumCommissionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CommissionStatus[] | Prisma.ListEnumCommissionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCommissionStatusFilter<$PrismaModel> | $Enums.CommissionStatus;
};
export type EnumCommissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CommissionStatus | Prisma.EnumCommissionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CommissionStatus[] | Prisma.ListEnumCommissionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CommissionStatus[] | Prisma.ListEnumCommissionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCommissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.CommissionStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCommissionStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCommissionStatusFilter<$PrismaModel>;
};
export type EnumPayoutStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PayoutStatus | Prisma.EnumPayoutStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PayoutStatus[] | Prisma.ListEnumPayoutStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PayoutStatus[] | Prisma.ListEnumPayoutStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPayoutStatusFilter<$PrismaModel> | $Enums.PayoutStatus;
};
export type EnumPayoutStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayoutStatus | Prisma.EnumPayoutStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PayoutStatus[] | Prisma.ListEnumPayoutStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PayoutStatus[] | Prisma.ListEnumPayoutStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPayoutStatusWithAggregatesFilter<$PrismaModel> | $Enums.PayoutStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPayoutStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPayoutStatusFilter<$PrismaModel>;
};
export type EnumSeatingTableShapeFilter<$PrismaModel = never> = {
    equals?: $Enums.SeatingTableShape | Prisma.EnumSeatingTableShapeFieldRefInput<$PrismaModel>;
    in?: $Enums.SeatingTableShape[] | Prisma.ListEnumSeatingTableShapeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SeatingTableShape[] | Prisma.ListEnumSeatingTableShapeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSeatingTableShapeFilter<$PrismaModel> | $Enums.SeatingTableShape;
};
export type EnumSeatingTableShapeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SeatingTableShape | Prisma.EnumSeatingTableShapeFieldRefInput<$PrismaModel>;
    in?: $Enums.SeatingTableShape[] | Prisma.ListEnumSeatingTableShapeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SeatingTableShape[] | Prisma.ListEnumSeatingTableShapeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSeatingTableShapeWithAggregatesFilter<$PrismaModel> | $Enums.SeatingTableShape;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSeatingTableShapeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSeatingTableShapeFilter<$PrismaModel>;
};
export type EnumCheckinStationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckinStationStatus | Prisma.EnumCheckinStationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CheckinStationStatus[] | Prisma.ListEnumCheckinStationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CheckinStationStatus[] | Prisma.ListEnumCheckinStationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCheckinStationStatusFilter<$PrismaModel> | $Enums.CheckinStationStatus;
};
export type EnumCheckinStationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckinStationStatus | Prisma.EnumCheckinStationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CheckinStationStatus[] | Prisma.ListEnumCheckinStationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CheckinStationStatus[] | Prisma.ListEnumCheckinStationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCheckinStationStatusWithAggregatesFilter<$PrismaModel> | $Enums.CheckinStationStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCheckinStationStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCheckinStationStatusFilter<$PrismaModel>;
};
export type EnumCheckinMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckinMethod | Prisma.EnumCheckinMethodFieldRefInput<$PrismaModel>;
    in?: $Enums.CheckinMethod[] | Prisma.ListEnumCheckinMethodFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CheckinMethod[] | Prisma.ListEnumCheckinMethodFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCheckinMethodFilter<$PrismaModel> | $Enums.CheckinMethod;
};
export type EnumCheckinMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckinMethod | Prisma.EnumCheckinMethodFieldRefInput<$PrismaModel>;
    in?: $Enums.CheckinMethod[] | Prisma.ListEnumCheckinMethodFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CheckinMethod[] | Prisma.ListEnumCheckinMethodFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCheckinMethodWithAggregatesFilter<$PrismaModel> | $Enums.CheckinMethod;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCheckinMethodFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCheckinMethodFilter<$PrismaModel>;
};
export type EnumMemoryAssetTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MemoryAssetType | Prisma.EnumMemoryAssetTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.MemoryAssetType[] | Prisma.ListEnumMemoryAssetTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MemoryAssetType[] | Prisma.ListEnumMemoryAssetTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMemoryAssetTypeFilter<$PrismaModel> | $Enums.MemoryAssetType;
};
export type EnumMemoryAssetStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MemoryAssetStatus | Prisma.EnumMemoryAssetStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.MemoryAssetStatus[] | Prisma.ListEnumMemoryAssetStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MemoryAssetStatus[] | Prisma.ListEnumMemoryAssetStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMemoryAssetStatusFilter<$PrismaModel> | $Enums.MemoryAssetStatus;
};
export type EnumMemoryAssetTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemoryAssetType | Prisma.EnumMemoryAssetTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.MemoryAssetType[] | Prisma.ListEnumMemoryAssetTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MemoryAssetType[] | Prisma.ListEnumMemoryAssetTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMemoryAssetTypeWithAggregatesFilter<$PrismaModel> | $Enums.MemoryAssetType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumMemoryAssetTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumMemoryAssetTypeFilter<$PrismaModel>;
};
export type EnumMemoryAssetStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemoryAssetStatus | Prisma.EnumMemoryAssetStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.MemoryAssetStatus[] | Prisma.ListEnumMemoryAssetStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MemoryAssetStatus[] | Prisma.ListEnumMemoryAssetStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMemoryAssetStatusWithAggregatesFilter<$PrismaModel> | $Enums.MemoryAssetStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumMemoryAssetStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumMemoryAssetStatusFilter<$PrismaModel>;
};
export type EnumMemoryReactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MemoryReactionType | Prisma.EnumMemoryReactionTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.MemoryReactionType[] | Prisma.ListEnumMemoryReactionTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MemoryReactionType[] | Prisma.ListEnumMemoryReactionTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMemoryReactionTypeFilter<$PrismaModel> | $Enums.MemoryReactionType;
};
export type EnumMemoryReactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemoryReactionType | Prisma.EnumMemoryReactionTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.MemoryReactionType[] | Prisma.ListEnumMemoryReactionTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MemoryReactionType[] | Prisma.ListEnumMemoryReactionTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMemoryReactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.MemoryReactionType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumMemoryReactionTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumMemoryReactionTypeFilter<$PrismaModel>;
};
export type EnumSocialContentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SocialContentStatus | Prisma.EnumSocialContentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.SocialContentStatus[] | Prisma.ListEnumSocialContentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SocialContentStatus[] | Prisma.ListEnumSocialContentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSocialContentStatusFilter<$PrismaModel> | $Enums.SocialContentStatus;
};
export type EnumSocialContentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SocialContentStatus | Prisma.EnumSocialContentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.SocialContentStatus[] | Prisma.ListEnumSocialContentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SocialContentStatus[] | Prisma.ListEnumSocialContentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSocialContentStatusWithAggregatesFilter<$PrismaModel> | $Enums.SocialContentStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSocialContentStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSocialContentStatusFilter<$PrismaModel>;
};
export type EnumPlanningTaskCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanningTaskCategory | Prisma.EnumPlanningTaskCategoryFieldRefInput<$PrismaModel>;
    in?: $Enums.PlanningTaskCategory[] | Prisma.ListEnumPlanningTaskCategoryFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PlanningTaskCategory[] | Prisma.ListEnumPlanningTaskCategoryFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPlanningTaskCategoryFilter<$PrismaModel> | $Enums.PlanningTaskCategory;
};
export type EnumPlanningTaskPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanningTaskPriority | Prisma.EnumPlanningTaskPriorityFieldRefInput<$PrismaModel>;
    in?: $Enums.PlanningTaskPriority[] | Prisma.ListEnumPlanningTaskPriorityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PlanningTaskPriority[] | Prisma.ListEnumPlanningTaskPriorityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPlanningTaskPriorityFilter<$PrismaModel> | $Enums.PlanningTaskPriority;
};
export type EnumPlanningTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanningTaskStatus | Prisma.EnumPlanningTaskStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PlanningTaskStatus[] | Prisma.ListEnumPlanningTaskStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PlanningTaskStatus[] | Prisma.ListEnumPlanningTaskStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPlanningTaskStatusFilter<$PrismaModel> | $Enums.PlanningTaskStatus;
};
export type EnumPlanningTaskSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanningTaskSource | Prisma.EnumPlanningTaskSourceFieldRefInput<$PrismaModel>;
    in?: $Enums.PlanningTaskSource[] | Prisma.ListEnumPlanningTaskSourceFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PlanningTaskSource[] | Prisma.ListEnumPlanningTaskSourceFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPlanningTaskSourceFilter<$PrismaModel> | $Enums.PlanningTaskSource;
};
export type EnumPlanningTaskCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanningTaskCategory | Prisma.EnumPlanningTaskCategoryFieldRefInput<$PrismaModel>;
    in?: $Enums.PlanningTaskCategory[] | Prisma.ListEnumPlanningTaskCategoryFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PlanningTaskCategory[] | Prisma.ListEnumPlanningTaskCategoryFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPlanningTaskCategoryWithAggregatesFilter<$PrismaModel> | $Enums.PlanningTaskCategory;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPlanningTaskCategoryFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPlanningTaskCategoryFilter<$PrismaModel>;
};
export type EnumPlanningTaskPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanningTaskPriority | Prisma.EnumPlanningTaskPriorityFieldRefInput<$PrismaModel>;
    in?: $Enums.PlanningTaskPriority[] | Prisma.ListEnumPlanningTaskPriorityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PlanningTaskPriority[] | Prisma.ListEnumPlanningTaskPriorityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPlanningTaskPriorityWithAggregatesFilter<$PrismaModel> | $Enums.PlanningTaskPriority;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPlanningTaskPriorityFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPlanningTaskPriorityFilter<$PrismaModel>;
};
export type EnumPlanningTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanningTaskStatus | Prisma.EnumPlanningTaskStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PlanningTaskStatus[] | Prisma.ListEnumPlanningTaskStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PlanningTaskStatus[] | Prisma.ListEnumPlanningTaskStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPlanningTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.PlanningTaskStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPlanningTaskStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPlanningTaskStatusFilter<$PrismaModel>;
};
export type EnumPlanningTaskSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanningTaskSource | Prisma.EnumPlanningTaskSourceFieldRefInput<$PrismaModel>;
    in?: $Enums.PlanningTaskSource[] | Prisma.ListEnumPlanningTaskSourceFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PlanningTaskSource[] | Prisma.ListEnumPlanningTaskSourceFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPlanningTaskSourceWithAggregatesFilter<$PrismaModel> | $Enums.PlanningTaskSource;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPlanningTaskSourceFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPlanningTaskSourceFilter<$PrismaModel>;
};
export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | Prisma.EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole;
};
export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | Prisma.EnumUserStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus;
};
export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | Prisma.EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumUserRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumUserRoleFilter<$PrismaModel>;
};
export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | Prisma.EnumUserStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumUserStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumUserStatusFilter<$PrismaModel>;
};
export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type NestedJsonNullableFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>, Required<NestedJsonNullableFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>;
export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type NestedEnumWeddingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WeddingStatus | Prisma.EnumWeddingStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.WeddingStatus[] | Prisma.ListEnumWeddingStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.WeddingStatus[] | Prisma.ListEnumWeddingStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumWeddingStatusFilter<$PrismaModel> | $Enums.WeddingStatus;
};
export type NestedEnumPublishReviewStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PublishReviewStatus | Prisma.EnumPublishReviewStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PublishReviewStatus[] | Prisma.ListEnumPublishReviewStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PublishReviewStatus[] | Prisma.ListEnumPublishReviewStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPublishReviewStatusFilter<$PrismaModel> | $Enums.PublishReviewStatus;
};
export type NestedEnumWeddingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WeddingStatus | Prisma.EnumWeddingStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.WeddingStatus[] | Prisma.ListEnumWeddingStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.WeddingStatus[] | Prisma.ListEnumWeddingStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumWeddingStatusWithAggregatesFilter<$PrismaModel> | $Enums.WeddingStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumWeddingStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumWeddingStatusFilter<$PrismaModel>;
};
export type NestedEnumPublishReviewStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PublishReviewStatus | Prisma.EnumPublishReviewStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PublishReviewStatus[] | Prisma.ListEnumPublishReviewStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PublishReviewStatus[] | Prisma.ListEnumPublishReviewStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPublishReviewStatusWithAggregatesFilter<$PrismaModel> | $Enums.PublishReviewStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPublishReviewStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPublishReviewStatusFilter<$PrismaModel>;
};
export type NestedEnumWeddingPermissionFilter<$PrismaModel = never> = {
    equals?: $Enums.WeddingPermission | Prisma.EnumWeddingPermissionFieldRefInput<$PrismaModel>;
    in?: $Enums.WeddingPermission[] | Prisma.ListEnumWeddingPermissionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.WeddingPermission[] | Prisma.ListEnumWeddingPermissionFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumWeddingPermissionFilter<$PrismaModel> | $Enums.WeddingPermission;
};
export type NestedEnumCollaborationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CollaborationStatus | Prisma.EnumCollaborationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CollaborationStatus[] | Prisma.ListEnumCollaborationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CollaborationStatus[] | Prisma.ListEnumCollaborationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCollaborationStatusFilter<$PrismaModel> | $Enums.CollaborationStatus;
};
export type NestedEnumWeddingPermissionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WeddingPermission | Prisma.EnumWeddingPermissionFieldRefInput<$PrismaModel>;
    in?: $Enums.WeddingPermission[] | Prisma.ListEnumWeddingPermissionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.WeddingPermission[] | Prisma.ListEnumWeddingPermissionFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumWeddingPermissionWithAggregatesFilter<$PrismaModel> | $Enums.WeddingPermission;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumWeddingPermissionFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumWeddingPermissionFilter<$PrismaModel>;
};
export type NestedEnumCollaborationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CollaborationStatus | Prisma.EnumCollaborationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CollaborationStatus[] | Prisma.ListEnumCollaborationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CollaborationStatus[] | Prisma.ListEnumCollaborationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCollaborationStatusWithAggregatesFilter<$PrismaModel> | $Enums.CollaborationStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCollaborationStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCollaborationStatusFilter<$PrismaModel>;
};
export type NestedEnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | Prisma.EnumEventTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.EventType[] | Prisma.ListEnumEventTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventType[] | Prisma.ListEnumEventTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType;
};
export type NestedEnumWeddingSideFilter<$PrismaModel = never> = {
    equals?: $Enums.WeddingSide | Prisma.EnumWeddingSideFieldRefInput<$PrismaModel>;
    in?: $Enums.WeddingSide[] | Prisma.ListEnumWeddingSideFieldRefInput<$PrismaModel>;
    notIn?: $Enums.WeddingSide[] | Prisma.ListEnumWeddingSideFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumWeddingSideFilter<$PrismaModel> | $Enums.WeddingSide;
};
export type NestedEnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | Prisma.EnumEventTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.EventType[] | Prisma.ListEnumEventTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventType[] | Prisma.ListEnumEventTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumEventTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumEventTypeFilter<$PrismaModel>;
};
export type NestedEnumWeddingSideWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WeddingSide | Prisma.EnumWeddingSideFieldRefInput<$PrismaModel>;
    in?: $Enums.WeddingSide[] | Prisma.ListEnumWeddingSideFieldRefInput<$PrismaModel>;
    notIn?: $Enums.WeddingSide[] | Prisma.ListEnumWeddingSideFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumWeddingSideWithAggregatesFilter<$PrismaModel> | $Enums.WeddingSide;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumWeddingSideFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumWeddingSideFilter<$PrismaModel>;
};
export type NestedEnumInvitationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationStatus | Prisma.EnumInvitationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.InvitationStatus[] | Prisma.ListEnumInvitationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.InvitationStatus[] | Prisma.ListEnumInvitationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumInvitationStatusFilter<$PrismaModel> | $Enums.InvitationStatus;
};
export type NestedEnumInvitationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationStatus | Prisma.EnumInvitationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.InvitationStatus[] | Prisma.ListEnumInvitationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.InvitationStatus[] | Prisma.ListEnumInvitationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumInvitationStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvitationStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumInvitationStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumInvitationStatusFilter<$PrismaModel>;
};
export type NestedEnumRsvpStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RsvpStatus | Prisma.EnumRsvpStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.RsvpStatus[] | Prisma.ListEnumRsvpStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RsvpStatus[] | Prisma.ListEnumRsvpStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRsvpStatusFilter<$PrismaModel> | $Enums.RsvpStatus;
};
export type NestedEnumRsvpStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RsvpStatus | Prisma.EnumRsvpStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.RsvpStatus[] | Prisma.ListEnumRsvpStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RsvpStatus[] | Prisma.ListEnumRsvpStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRsvpStatusWithAggregatesFilter<$PrismaModel> | $Enums.RsvpStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRsvpStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRsvpStatusFilter<$PrismaModel>;
};
export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableFilter<$PrismaModel> | number | null;
};
export type NestedJsonFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>, Required<NestedJsonFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>;
export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type NestedEnumPlanCodeFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanCode | Prisma.EnumPlanCodeFieldRefInput<$PrismaModel>;
    in?: $Enums.PlanCode[] | Prisma.ListEnumPlanCodeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PlanCode[] | Prisma.ListEnumPlanCodeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPlanCodeFilter<$PrismaModel> | $Enums.PlanCode;
};
export type NestedEnumPlanCodeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanCode | Prisma.EnumPlanCodeFieldRefInput<$PrismaModel>;
    in?: $Enums.PlanCode[] | Prisma.ListEnumPlanCodeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PlanCode[] | Prisma.ListEnumPlanCodeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPlanCodeWithAggregatesFilter<$PrismaModel> | $Enums.PlanCode;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPlanCodeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPlanCodeFilter<$PrismaModel>;
};
export type NestedEnumDiscountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DiscountType | Prisma.EnumDiscountTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.DiscountType[] | Prisma.ListEnumDiscountTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DiscountType[] | Prisma.ListEnumDiscountTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDiscountTypeFilter<$PrismaModel> | $Enums.DiscountType;
};
export type NestedEnumDiscountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DiscountType | Prisma.EnumDiscountTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.DiscountType[] | Prisma.ListEnumDiscountTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DiscountType[] | Prisma.ListEnumDiscountTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDiscountTypeWithAggregatesFilter<$PrismaModel> | $Enums.DiscountType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDiscountTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDiscountTypeFilter<$PrismaModel>;
};
export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | Prisma.EnumOrderStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OrderStatus[] | Prisma.ListEnumOrderStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OrderStatus[] | Prisma.ListEnumOrderStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus;
};
export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | Prisma.EnumPaymentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentStatus[] | Prisma.ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentStatus[] | Prisma.ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus;
};
export type NestedEnumFulfillmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FulfillmentStatus | Prisma.EnumFulfillmentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.FulfillmentStatus[] | Prisma.ListEnumFulfillmentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FulfillmentStatus[] | Prisma.ListEnumFulfillmentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFulfillmentStatusFilter<$PrismaModel> | $Enums.FulfillmentStatus;
};
export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | Prisma.EnumOrderStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OrderStatus[] | Prisma.ListEnumOrderStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OrderStatus[] | Prisma.ListEnumOrderStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumOrderStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumOrderStatusFilter<$PrismaModel>;
};
export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | Prisma.EnumPaymentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentStatus[] | Prisma.ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentStatus[] | Prisma.ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPaymentStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPaymentStatusFilter<$PrismaModel>;
};
export type NestedEnumFulfillmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FulfillmentStatus | Prisma.EnumFulfillmentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.FulfillmentStatus[] | Prisma.ListEnumFulfillmentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FulfillmentStatus[] | Prisma.ListEnumFulfillmentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFulfillmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.FulfillmentStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumFulfillmentStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumFulfillmentStatusFilter<$PrismaModel>;
};
export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | Prisma.EnumPaymentMethodFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentMethod[] | Prisma.ListEnumPaymentMethodFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentMethod[] | Prisma.ListEnumPaymentMethodFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod;
};
export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | Prisma.EnumPaymentMethodFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentMethod[] | Prisma.ListEnumPaymentMethodFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentMethod[] | Prisma.ListEnumPaymentMethodFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPaymentMethodFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPaymentMethodFilter<$PrismaModel>;
};
export type NestedEnumDeliveryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | Prisma.EnumDeliveryStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.DeliveryStatus[] | Prisma.ListEnumDeliveryStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DeliveryStatus[] | Prisma.ListEnumDeliveryStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDeliveryStatusFilter<$PrismaModel> | $Enums.DeliveryStatus;
};
export type NestedEnumDeliveryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | Prisma.EnumDeliveryStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.DeliveryStatus[] | Prisma.ListEnumDeliveryStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DeliveryStatus[] | Prisma.ListEnumDeliveryStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDeliveryStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDeliveryStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDeliveryStatusFilter<$PrismaModel>;
};
export type NestedEnumPilotItemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PilotItemStatus | Prisma.EnumPilotItemStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PilotItemStatus[] | Prisma.ListEnumPilotItemStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PilotItemStatus[] | Prisma.ListEnumPilotItemStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPilotItemStatusFilter<$PrismaModel> | $Enums.PilotItemStatus;
};
export type NestedEnumPilotItemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PilotItemStatus | Prisma.EnumPilotItemStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PilotItemStatus[] | Prisma.ListEnumPilotItemStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PilotItemStatus[] | Prisma.ListEnumPilotItemStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPilotItemStatusWithAggregatesFilter<$PrismaModel> | $Enums.PilotItemStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPilotItemStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPilotItemStatusFilter<$PrismaModel>;
};
export type NestedEnumPilotIssueSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.PilotIssueSeverity | Prisma.EnumPilotIssueSeverityFieldRefInput<$PrismaModel>;
    in?: $Enums.PilotIssueSeverity[] | Prisma.ListEnumPilotIssueSeverityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PilotIssueSeverity[] | Prisma.ListEnumPilotIssueSeverityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPilotIssueSeverityFilter<$PrismaModel> | $Enums.PilotIssueSeverity;
};
export type NestedEnumPilotIssueStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PilotIssueStatus | Prisma.EnumPilotIssueStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PilotIssueStatus[] | Prisma.ListEnumPilotIssueStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PilotIssueStatus[] | Prisma.ListEnumPilotIssueStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPilotIssueStatusFilter<$PrismaModel> | $Enums.PilotIssueStatus;
};
export type NestedEnumPilotIssueSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PilotIssueSeverity | Prisma.EnumPilotIssueSeverityFieldRefInput<$PrismaModel>;
    in?: $Enums.PilotIssueSeverity[] | Prisma.ListEnumPilotIssueSeverityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PilotIssueSeverity[] | Prisma.ListEnumPilotIssueSeverityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPilotIssueSeverityWithAggregatesFilter<$PrismaModel> | $Enums.PilotIssueSeverity;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPilotIssueSeverityFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPilotIssueSeverityFilter<$PrismaModel>;
};
export type NestedEnumPilotIssueStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PilotIssueStatus | Prisma.EnumPilotIssueStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PilotIssueStatus[] | Prisma.ListEnumPilotIssueStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PilotIssueStatus[] | Prisma.ListEnumPilotIssueStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPilotIssueStatusWithAggregatesFilter<$PrismaModel> | $Enums.PilotIssueStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPilotIssueStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPilotIssueStatusFilter<$PrismaModel>;
};
export type NestedEnumSupportTicketPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.SupportTicketPriority | Prisma.EnumSupportTicketPriorityFieldRefInput<$PrismaModel>;
    in?: $Enums.SupportTicketPriority[] | Prisma.ListEnumSupportTicketPriorityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SupportTicketPriority[] | Prisma.ListEnumSupportTicketPriorityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSupportTicketPriorityFilter<$PrismaModel> | $Enums.SupportTicketPriority;
};
export type NestedEnumSupportTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SupportTicketStatus | Prisma.EnumSupportTicketStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.SupportTicketStatus[] | Prisma.ListEnumSupportTicketStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SupportTicketStatus[] | Prisma.ListEnumSupportTicketStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSupportTicketStatusFilter<$PrismaModel> | $Enums.SupportTicketStatus;
};
export type NestedEnumSupportTicketPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SupportTicketPriority | Prisma.EnumSupportTicketPriorityFieldRefInput<$PrismaModel>;
    in?: $Enums.SupportTicketPriority[] | Prisma.ListEnumSupportTicketPriorityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SupportTicketPriority[] | Prisma.ListEnumSupportTicketPriorityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSupportTicketPriorityWithAggregatesFilter<$PrismaModel> | $Enums.SupportTicketPriority;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSupportTicketPriorityFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSupportTicketPriorityFilter<$PrismaModel>;
};
export type NestedEnumSupportTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SupportTicketStatus | Prisma.EnumSupportTicketStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.SupportTicketStatus[] | Prisma.ListEnumSupportTicketStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SupportTicketStatus[] | Prisma.ListEnumSupportTicketStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSupportTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.SupportTicketStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSupportTicketStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSupportTicketStatusFilter<$PrismaModel>;
};
export type NestedEnumDomainStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DomainStatus | Prisma.EnumDomainStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.DomainStatus[] | Prisma.ListEnumDomainStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DomainStatus[] | Prisma.ListEnumDomainStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDomainStatusFilter<$PrismaModel> | $Enums.DomainStatus;
};
export type NestedEnumDomainStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DomainStatus | Prisma.EnumDomainStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.DomainStatus[] | Prisma.ListEnumDomainStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DomainStatus[] | Prisma.ListEnumDomainStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDomainStatusWithAggregatesFilter<$PrismaModel> | $Enums.DomainStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDomainStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDomainStatusFilter<$PrismaModel>;
};
export type NestedEnumPartnerStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PartnerStatus | Prisma.EnumPartnerStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PartnerStatus[] | Prisma.ListEnumPartnerStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PartnerStatus[] | Prisma.ListEnumPartnerStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPartnerStatusFilter<$PrismaModel> | $Enums.PartnerStatus;
};
export type NestedEnumPartnerStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PartnerStatus | Prisma.EnumPartnerStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PartnerStatus[] | Prisma.ListEnumPartnerStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PartnerStatus[] | Prisma.ListEnumPartnerStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPartnerStatusWithAggregatesFilter<$PrismaModel> | $Enums.PartnerStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPartnerStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPartnerStatusFilter<$PrismaModel>;
};
export type NestedEnumPartnerMemberRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.PartnerMemberRole | Prisma.EnumPartnerMemberRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.PartnerMemberRole[] | Prisma.ListEnumPartnerMemberRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PartnerMemberRole[] | Prisma.ListEnumPartnerMemberRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPartnerMemberRoleFilter<$PrismaModel> | $Enums.PartnerMemberRole;
};
export type NestedEnumPartnerMemberRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PartnerMemberRole | Prisma.EnumPartnerMemberRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.PartnerMemberRole[] | Prisma.ListEnumPartnerMemberRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PartnerMemberRole[] | Prisma.ListEnumPartnerMemberRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPartnerMemberRoleWithAggregatesFilter<$PrismaModel> | $Enums.PartnerMemberRole;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPartnerMemberRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPartnerMemberRoleFilter<$PrismaModel>;
};
export type NestedEnumCommissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CommissionStatus | Prisma.EnumCommissionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CommissionStatus[] | Prisma.ListEnumCommissionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CommissionStatus[] | Prisma.ListEnumCommissionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCommissionStatusFilter<$PrismaModel> | $Enums.CommissionStatus;
};
export type NestedEnumCommissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CommissionStatus | Prisma.EnumCommissionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CommissionStatus[] | Prisma.ListEnumCommissionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CommissionStatus[] | Prisma.ListEnumCommissionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCommissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.CommissionStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCommissionStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCommissionStatusFilter<$PrismaModel>;
};
export type NestedEnumPayoutStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PayoutStatus | Prisma.EnumPayoutStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PayoutStatus[] | Prisma.ListEnumPayoutStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PayoutStatus[] | Prisma.ListEnumPayoutStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPayoutStatusFilter<$PrismaModel> | $Enums.PayoutStatus;
};
export type NestedEnumPayoutStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayoutStatus | Prisma.EnumPayoutStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PayoutStatus[] | Prisma.ListEnumPayoutStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PayoutStatus[] | Prisma.ListEnumPayoutStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPayoutStatusWithAggregatesFilter<$PrismaModel> | $Enums.PayoutStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPayoutStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPayoutStatusFilter<$PrismaModel>;
};
export type NestedEnumSeatingTableShapeFilter<$PrismaModel = never> = {
    equals?: $Enums.SeatingTableShape | Prisma.EnumSeatingTableShapeFieldRefInput<$PrismaModel>;
    in?: $Enums.SeatingTableShape[] | Prisma.ListEnumSeatingTableShapeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SeatingTableShape[] | Prisma.ListEnumSeatingTableShapeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSeatingTableShapeFilter<$PrismaModel> | $Enums.SeatingTableShape;
};
export type NestedEnumSeatingTableShapeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SeatingTableShape | Prisma.EnumSeatingTableShapeFieldRefInput<$PrismaModel>;
    in?: $Enums.SeatingTableShape[] | Prisma.ListEnumSeatingTableShapeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SeatingTableShape[] | Prisma.ListEnumSeatingTableShapeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSeatingTableShapeWithAggregatesFilter<$PrismaModel> | $Enums.SeatingTableShape;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSeatingTableShapeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSeatingTableShapeFilter<$PrismaModel>;
};
export type NestedEnumCheckinStationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckinStationStatus | Prisma.EnumCheckinStationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CheckinStationStatus[] | Prisma.ListEnumCheckinStationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CheckinStationStatus[] | Prisma.ListEnumCheckinStationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCheckinStationStatusFilter<$PrismaModel> | $Enums.CheckinStationStatus;
};
export type NestedEnumCheckinStationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckinStationStatus | Prisma.EnumCheckinStationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CheckinStationStatus[] | Prisma.ListEnumCheckinStationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CheckinStationStatus[] | Prisma.ListEnumCheckinStationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCheckinStationStatusWithAggregatesFilter<$PrismaModel> | $Enums.CheckinStationStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCheckinStationStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCheckinStationStatusFilter<$PrismaModel>;
};
export type NestedEnumCheckinMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckinMethod | Prisma.EnumCheckinMethodFieldRefInput<$PrismaModel>;
    in?: $Enums.CheckinMethod[] | Prisma.ListEnumCheckinMethodFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CheckinMethod[] | Prisma.ListEnumCheckinMethodFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCheckinMethodFilter<$PrismaModel> | $Enums.CheckinMethod;
};
export type NestedEnumCheckinMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckinMethod | Prisma.EnumCheckinMethodFieldRefInput<$PrismaModel>;
    in?: $Enums.CheckinMethod[] | Prisma.ListEnumCheckinMethodFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CheckinMethod[] | Prisma.ListEnumCheckinMethodFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCheckinMethodWithAggregatesFilter<$PrismaModel> | $Enums.CheckinMethod;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCheckinMethodFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCheckinMethodFilter<$PrismaModel>;
};
export type NestedEnumMemoryAssetTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MemoryAssetType | Prisma.EnumMemoryAssetTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.MemoryAssetType[] | Prisma.ListEnumMemoryAssetTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MemoryAssetType[] | Prisma.ListEnumMemoryAssetTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMemoryAssetTypeFilter<$PrismaModel> | $Enums.MemoryAssetType;
};
export type NestedEnumMemoryAssetStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MemoryAssetStatus | Prisma.EnumMemoryAssetStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.MemoryAssetStatus[] | Prisma.ListEnumMemoryAssetStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MemoryAssetStatus[] | Prisma.ListEnumMemoryAssetStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMemoryAssetStatusFilter<$PrismaModel> | $Enums.MemoryAssetStatus;
};
export type NestedEnumMemoryAssetTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemoryAssetType | Prisma.EnumMemoryAssetTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.MemoryAssetType[] | Prisma.ListEnumMemoryAssetTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MemoryAssetType[] | Prisma.ListEnumMemoryAssetTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMemoryAssetTypeWithAggregatesFilter<$PrismaModel> | $Enums.MemoryAssetType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumMemoryAssetTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumMemoryAssetTypeFilter<$PrismaModel>;
};
export type NestedEnumMemoryAssetStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemoryAssetStatus | Prisma.EnumMemoryAssetStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.MemoryAssetStatus[] | Prisma.ListEnumMemoryAssetStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MemoryAssetStatus[] | Prisma.ListEnumMemoryAssetStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMemoryAssetStatusWithAggregatesFilter<$PrismaModel> | $Enums.MemoryAssetStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumMemoryAssetStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumMemoryAssetStatusFilter<$PrismaModel>;
};
export type NestedEnumMemoryReactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MemoryReactionType | Prisma.EnumMemoryReactionTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.MemoryReactionType[] | Prisma.ListEnumMemoryReactionTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MemoryReactionType[] | Prisma.ListEnumMemoryReactionTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMemoryReactionTypeFilter<$PrismaModel> | $Enums.MemoryReactionType;
};
export type NestedEnumMemoryReactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemoryReactionType | Prisma.EnumMemoryReactionTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.MemoryReactionType[] | Prisma.ListEnumMemoryReactionTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MemoryReactionType[] | Prisma.ListEnumMemoryReactionTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMemoryReactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.MemoryReactionType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumMemoryReactionTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumMemoryReactionTypeFilter<$PrismaModel>;
};
export type NestedEnumSocialContentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SocialContentStatus | Prisma.EnumSocialContentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.SocialContentStatus[] | Prisma.ListEnumSocialContentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SocialContentStatus[] | Prisma.ListEnumSocialContentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSocialContentStatusFilter<$PrismaModel> | $Enums.SocialContentStatus;
};
export type NestedEnumSocialContentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SocialContentStatus | Prisma.EnumSocialContentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.SocialContentStatus[] | Prisma.ListEnumSocialContentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SocialContentStatus[] | Prisma.ListEnumSocialContentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSocialContentStatusWithAggregatesFilter<$PrismaModel> | $Enums.SocialContentStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSocialContentStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSocialContentStatusFilter<$PrismaModel>;
};
export type NestedEnumPlanningTaskCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanningTaskCategory | Prisma.EnumPlanningTaskCategoryFieldRefInput<$PrismaModel>;
    in?: $Enums.PlanningTaskCategory[] | Prisma.ListEnumPlanningTaskCategoryFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PlanningTaskCategory[] | Prisma.ListEnumPlanningTaskCategoryFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPlanningTaskCategoryFilter<$PrismaModel> | $Enums.PlanningTaskCategory;
};
export type NestedEnumPlanningTaskPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanningTaskPriority | Prisma.EnumPlanningTaskPriorityFieldRefInput<$PrismaModel>;
    in?: $Enums.PlanningTaskPriority[] | Prisma.ListEnumPlanningTaskPriorityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PlanningTaskPriority[] | Prisma.ListEnumPlanningTaskPriorityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPlanningTaskPriorityFilter<$PrismaModel> | $Enums.PlanningTaskPriority;
};
export type NestedEnumPlanningTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanningTaskStatus | Prisma.EnumPlanningTaskStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PlanningTaskStatus[] | Prisma.ListEnumPlanningTaskStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PlanningTaskStatus[] | Prisma.ListEnumPlanningTaskStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPlanningTaskStatusFilter<$PrismaModel> | $Enums.PlanningTaskStatus;
};
export type NestedEnumPlanningTaskSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanningTaskSource | Prisma.EnumPlanningTaskSourceFieldRefInput<$PrismaModel>;
    in?: $Enums.PlanningTaskSource[] | Prisma.ListEnumPlanningTaskSourceFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PlanningTaskSource[] | Prisma.ListEnumPlanningTaskSourceFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPlanningTaskSourceFilter<$PrismaModel> | $Enums.PlanningTaskSource;
};
export type NestedEnumPlanningTaskCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanningTaskCategory | Prisma.EnumPlanningTaskCategoryFieldRefInput<$PrismaModel>;
    in?: $Enums.PlanningTaskCategory[] | Prisma.ListEnumPlanningTaskCategoryFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PlanningTaskCategory[] | Prisma.ListEnumPlanningTaskCategoryFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPlanningTaskCategoryWithAggregatesFilter<$PrismaModel> | $Enums.PlanningTaskCategory;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPlanningTaskCategoryFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPlanningTaskCategoryFilter<$PrismaModel>;
};
export type NestedEnumPlanningTaskPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanningTaskPriority | Prisma.EnumPlanningTaskPriorityFieldRefInput<$PrismaModel>;
    in?: $Enums.PlanningTaskPriority[] | Prisma.ListEnumPlanningTaskPriorityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PlanningTaskPriority[] | Prisma.ListEnumPlanningTaskPriorityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPlanningTaskPriorityWithAggregatesFilter<$PrismaModel> | $Enums.PlanningTaskPriority;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPlanningTaskPriorityFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPlanningTaskPriorityFilter<$PrismaModel>;
};
export type NestedEnumPlanningTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanningTaskStatus | Prisma.EnumPlanningTaskStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PlanningTaskStatus[] | Prisma.ListEnumPlanningTaskStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PlanningTaskStatus[] | Prisma.ListEnumPlanningTaskStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPlanningTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.PlanningTaskStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPlanningTaskStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPlanningTaskStatusFilter<$PrismaModel>;
};
export type NestedEnumPlanningTaskSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanningTaskSource | Prisma.EnumPlanningTaskSourceFieldRefInput<$PrismaModel>;
    in?: $Enums.PlanningTaskSource[] | Prisma.ListEnumPlanningTaskSourceFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PlanningTaskSource[] | Prisma.ListEnumPlanningTaskSourceFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPlanningTaskSourceWithAggregatesFilter<$PrismaModel> | $Enums.PlanningTaskSource;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPlanningTaskSourceFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPlanningTaskSourceFilter<$PrismaModel>;
};
