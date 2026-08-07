import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type WeddingCollaboratorModel = runtime.Types.Result.DefaultSelection<Prisma.$WeddingCollaboratorPayload>;
export type AggregateWeddingCollaborator = {
    _count: WeddingCollaboratorCountAggregateOutputType | null;
    _min: WeddingCollaboratorMinAggregateOutputType | null;
    _max: WeddingCollaboratorMaxAggregateOutputType | null;
};
export type WeddingCollaboratorMinAggregateOutputType = {
    id: string | null;
    weddingId: string | null;
    email: string | null;
    userId: string | null;
    invitedById: string | null;
    permission: $Enums.WeddingPermission | null;
    status: $Enums.CollaborationStatus | null;
    token: string | null;
    expiresAt: Date | null;
    acceptedAt: Date | null;
    revokedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type WeddingCollaboratorMaxAggregateOutputType = {
    id: string | null;
    weddingId: string | null;
    email: string | null;
    userId: string | null;
    invitedById: string | null;
    permission: $Enums.WeddingPermission | null;
    status: $Enums.CollaborationStatus | null;
    token: string | null;
    expiresAt: Date | null;
    acceptedAt: Date | null;
    revokedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type WeddingCollaboratorCountAggregateOutputType = {
    id: number;
    weddingId: number;
    email: number;
    userId: number;
    invitedById: number;
    permission: number;
    status: number;
    token: number;
    expiresAt: number;
    acceptedAt: number;
    revokedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type WeddingCollaboratorMinAggregateInputType = {
    id?: true;
    weddingId?: true;
    email?: true;
    userId?: true;
    invitedById?: true;
    permission?: true;
    status?: true;
    token?: true;
    expiresAt?: true;
    acceptedAt?: true;
    revokedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type WeddingCollaboratorMaxAggregateInputType = {
    id?: true;
    weddingId?: true;
    email?: true;
    userId?: true;
    invitedById?: true;
    permission?: true;
    status?: true;
    token?: true;
    expiresAt?: true;
    acceptedAt?: true;
    revokedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type WeddingCollaboratorCountAggregateInputType = {
    id?: true;
    weddingId?: true;
    email?: true;
    userId?: true;
    invitedById?: true;
    permission?: true;
    status?: true;
    token?: true;
    expiresAt?: true;
    acceptedAt?: true;
    revokedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type WeddingCollaboratorAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WeddingCollaboratorWhereInput;
    orderBy?: Prisma.WeddingCollaboratorOrderByWithRelationInput | Prisma.WeddingCollaboratorOrderByWithRelationInput[];
    cursor?: Prisma.WeddingCollaboratorWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | WeddingCollaboratorCountAggregateInputType;
    _min?: WeddingCollaboratorMinAggregateInputType;
    _max?: WeddingCollaboratorMaxAggregateInputType;
};
export type GetWeddingCollaboratorAggregateType<T extends WeddingCollaboratorAggregateArgs> = {
    [P in keyof T & keyof AggregateWeddingCollaborator]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWeddingCollaborator[P]> : Prisma.GetScalarType<T[P], AggregateWeddingCollaborator[P]>;
};
export type WeddingCollaboratorGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WeddingCollaboratorWhereInput;
    orderBy?: Prisma.WeddingCollaboratorOrderByWithAggregationInput | Prisma.WeddingCollaboratorOrderByWithAggregationInput[];
    by: Prisma.WeddingCollaboratorScalarFieldEnum[] | Prisma.WeddingCollaboratorScalarFieldEnum;
    having?: Prisma.WeddingCollaboratorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WeddingCollaboratorCountAggregateInputType | true;
    _min?: WeddingCollaboratorMinAggregateInputType;
    _max?: WeddingCollaboratorMaxAggregateInputType;
};
export type WeddingCollaboratorGroupByOutputType = {
    id: string;
    weddingId: string;
    email: string;
    userId: string | null;
    invitedById: string;
    permission: $Enums.WeddingPermission;
    status: $Enums.CollaborationStatus;
    token: string;
    expiresAt: Date;
    acceptedAt: Date | null;
    revokedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: WeddingCollaboratorCountAggregateOutputType | null;
    _min: WeddingCollaboratorMinAggregateOutputType | null;
    _max: WeddingCollaboratorMaxAggregateOutputType | null;
};
export type GetWeddingCollaboratorGroupByPayload<T extends WeddingCollaboratorGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WeddingCollaboratorGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WeddingCollaboratorGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WeddingCollaboratorGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WeddingCollaboratorGroupByOutputType[P]>;
}>>;
export type WeddingCollaboratorWhereInput = {
    AND?: Prisma.WeddingCollaboratorWhereInput | Prisma.WeddingCollaboratorWhereInput[];
    OR?: Prisma.WeddingCollaboratorWhereInput[];
    NOT?: Prisma.WeddingCollaboratorWhereInput | Prisma.WeddingCollaboratorWhereInput[];
    id?: Prisma.StringFilter<"WeddingCollaborator"> | string;
    weddingId?: Prisma.StringFilter<"WeddingCollaborator"> | string;
    email?: Prisma.StringFilter<"WeddingCollaborator"> | string;
    userId?: Prisma.StringNullableFilter<"WeddingCollaborator"> | string | null;
    invitedById?: Prisma.StringFilter<"WeddingCollaborator"> | string;
    permission?: Prisma.EnumWeddingPermissionFilter<"WeddingCollaborator"> | $Enums.WeddingPermission;
    status?: Prisma.EnumCollaborationStatusFilter<"WeddingCollaborator"> | $Enums.CollaborationStatus;
    token?: Prisma.StringFilter<"WeddingCollaborator"> | string;
    expiresAt?: Prisma.DateTimeFilter<"WeddingCollaborator"> | Date | string;
    acceptedAt?: Prisma.DateTimeNullableFilter<"WeddingCollaborator"> | Date | string | null;
    revokedAt?: Prisma.DateTimeNullableFilter<"WeddingCollaborator"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"WeddingCollaborator"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"WeddingCollaborator"> | Date | string;
    wedding?: Prisma.XOR<Prisma.WeddingScalarRelationFilter, Prisma.WeddingWhereInput>;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    invitedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type WeddingCollaboratorOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    invitedById?: Prisma.SortOrder;
    permission?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    acceptedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    wedding?: Prisma.WeddingOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
    invitedBy?: Prisma.UserOrderByWithRelationInput;
};
export type WeddingCollaboratorWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    token?: string;
    weddingId_email?: Prisma.WeddingCollaboratorWeddingIdEmailCompoundUniqueInput;
    AND?: Prisma.WeddingCollaboratorWhereInput | Prisma.WeddingCollaboratorWhereInput[];
    OR?: Prisma.WeddingCollaboratorWhereInput[];
    NOT?: Prisma.WeddingCollaboratorWhereInput | Prisma.WeddingCollaboratorWhereInput[];
    weddingId?: Prisma.StringFilter<"WeddingCollaborator"> | string;
    email?: Prisma.StringFilter<"WeddingCollaborator"> | string;
    userId?: Prisma.StringNullableFilter<"WeddingCollaborator"> | string | null;
    invitedById?: Prisma.StringFilter<"WeddingCollaborator"> | string;
    permission?: Prisma.EnumWeddingPermissionFilter<"WeddingCollaborator"> | $Enums.WeddingPermission;
    status?: Prisma.EnumCollaborationStatusFilter<"WeddingCollaborator"> | $Enums.CollaborationStatus;
    expiresAt?: Prisma.DateTimeFilter<"WeddingCollaborator"> | Date | string;
    acceptedAt?: Prisma.DateTimeNullableFilter<"WeddingCollaborator"> | Date | string | null;
    revokedAt?: Prisma.DateTimeNullableFilter<"WeddingCollaborator"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"WeddingCollaborator"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"WeddingCollaborator"> | Date | string;
    wedding?: Prisma.XOR<Prisma.WeddingScalarRelationFilter, Prisma.WeddingWhereInput>;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    invitedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "token" | "weddingId_email">;
export type WeddingCollaboratorOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    invitedById?: Prisma.SortOrder;
    permission?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    acceptedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.WeddingCollaboratorCountOrderByAggregateInput;
    _max?: Prisma.WeddingCollaboratorMaxOrderByAggregateInput;
    _min?: Prisma.WeddingCollaboratorMinOrderByAggregateInput;
};
export type WeddingCollaboratorScalarWhereWithAggregatesInput = {
    AND?: Prisma.WeddingCollaboratorScalarWhereWithAggregatesInput | Prisma.WeddingCollaboratorScalarWhereWithAggregatesInput[];
    OR?: Prisma.WeddingCollaboratorScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WeddingCollaboratorScalarWhereWithAggregatesInput | Prisma.WeddingCollaboratorScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"WeddingCollaborator"> | string;
    weddingId?: Prisma.StringWithAggregatesFilter<"WeddingCollaborator"> | string;
    email?: Prisma.StringWithAggregatesFilter<"WeddingCollaborator"> | string;
    userId?: Prisma.StringNullableWithAggregatesFilter<"WeddingCollaborator"> | string | null;
    invitedById?: Prisma.StringWithAggregatesFilter<"WeddingCollaborator"> | string;
    permission?: Prisma.EnumWeddingPermissionWithAggregatesFilter<"WeddingCollaborator"> | $Enums.WeddingPermission;
    status?: Prisma.EnumCollaborationStatusWithAggregatesFilter<"WeddingCollaborator"> | $Enums.CollaborationStatus;
    token?: Prisma.StringWithAggregatesFilter<"WeddingCollaborator"> | string;
    expiresAt?: Prisma.DateTimeWithAggregatesFilter<"WeddingCollaborator"> | Date | string;
    acceptedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"WeddingCollaborator"> | Date | string | null;
    revokedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"WeddingCollaborator"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"WeddingCollaborator"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"WeddingCollaborator"> | Date | string;
};
export type WeddingCollaboratorCreateInput = {
    id?: string;
    email: string;
    permission?: $Enums.WeddingPermission;
    status?: $Enums.CollaborationStatus;
    token: string;
    expiresAt: Date | string;
    acceptedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    wedding: Prisma.WeddingCreateNestedOneWithoutCollaboratorsInput;
    user?: Prisma.UserCreateNestedOneWithoutWeddingCollaborationsInput;
    invitedBy: Prisma.UserCreateNestedOneWithoutSentCollaborationInvitesInput;
};
export type WeddingCollaboratorUncheckedCreateInput = {
    id?: string;
    weddingId: string;
    email: string;
    userId?: string | null;
    invitedById: string;
    permission?: $Enums.WeddingPermission;
    status?: $Enums.CollaborationStatus;
    token: string;
    expiresAt: Date | string;
    acceptedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type WeddingCollaboratorUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    permission?: Prisma.EnumWeddingPermissionFieldUpdateOperationsInput | $Enums.WeddingPermission;
    status?: Prisma.EnumCollaborationStatusFieldUpdateOperationsInput | $Enums.CollaborationStatus;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wedding?: Prisma.WeddingUpdateOneRequiredWithoutCollaboratorsNestedInput;
    user?: Prisma.UserUpdateOneWithoutWeddingCollaborationsNestedInput;
    invitedBy?: Prisma.UserUpdateOneRequiredWithoutSentCollaborationInvitesNestedInput;
};
export type WeddingCollaboratorUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    invitedById?: Prisma.StringFieldUpdateOperationsInput | string;
    permission?: Prisma.EnumWeddingPermissionFieldUpdateOperationsInput | $Enums.WeddingPermission;
    status?: Prisma.EnumCollaborationStatusFieldUpdateOperationsInput | $Enums.CollaborationStatus;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WeddingCollaboratorCreateManyInput = {
    id?: string;
    weddingId: string;
    email: string;
    userId?: string | null;
    invitedById: string;
    permission?: $Enums.WeddingPermission;
    status?: $Enums.CollaborationStatus;
    token: string;
    expiresAt: Date | string;
    acceptedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type WeddingCollaboratorUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    permission?: Prisma.EnumWeddingPermissionFieldUpdateOperationsInput | $Enums.WeddingPermission;
    status?: Prisma.EnumCollaborationStatusFieldUpdateOperationsInput | $Enums.CollaborationStatus;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WeddingCollaboratorUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    invitedById?: Prisma.StringFieldUpdateOperationsInput | string;
    permission?: Prisma.EnumWeddingPermissionFieldUpdateOperationsInput | $Enums.WeddingPermission;
    status?: Prisma.EnumCollaborationStatusFieldUpdateOperationsInput | $Enums.CollaborationStatus;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WeddingCollaboratorListRelationFilter = {
    every?: Prisma.WeddingCollaboratorWhereInput;
    some?: Prisma.WeddingCollaboratorWhereInput;
    none?: Prisma.WeddingCollaboratorWhereInput;
};
export type WeddingCollaboratorOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type WeddingCollaboratorWeddingIdEmailCompoundUniqueInput = {
    weddingId: string;
    email: string;
};
export type WeddingCollaboratorCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    invitedById?: Prisma.SortOrder;
    permission?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    acceptedAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type WeddingCollaboratorMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    invitedById?: Prisma.SortOrder;
    permission?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    acceptedAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type WeddingCollaboratorMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    invitedById?: Prisma.SortOrder;
    permission?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    acceptedAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type WeddingCollaboratorCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.WeddingCollaboratorCreateWithoutUserInput, Prisma.WeddingCollaboratorUncheckedCreateWithoutUserInput> | Prisma.WeddingCollaboratorCreateWithoutUserInput[] | Prisma.WeddingCollaboratorUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.WeddingCollaboratorCreateOrConnectWithoutUserInput | Prisma.WeddingCollaboratorCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.WeddingCollaboratorCreateManyUserInputEnvelope;
    connect?: Prisma.WeddingCollaboratorWhereUniqueInput | Prisma.WeddingCollaboratorWhereUniqueInput[];
};
export type WeddingCollaboratorCreateNestedManyWithoutInvitedByInput = {
    create?: Prisma.XOR<Prisma.WeddingCollaboratorCreateWithoutInvitedByInput, Prisma.WeddingCollaboratorUncheckedCreateWithoutInvitedByInput> | Prisma.WeddingCollaboratorCreateWithoutInvitedByInput[] | Prisma.WeddingCollaboratorUncheckedCreateWithoutInvitedByInput[];
    connectOrCreate?: Prisma.WeddingCollaboratorCreateOrConnectWithoutInvitedByInput | Prisma.WeddingCollaboratorCreateOrConnectWithoutInvitedByInput[];
    createMany?: Prisma.WeddingCollaboratorCreateManyInvitedByInputEnvelope;
    connect?: Prisma.WeddingCollaboratorWhereUniqueInput | Prisma.WeddingCollaboratorWhereUniqueInput[];
};
export type WeddingCollaboratorUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.WeddingCollaboratorCreateWithoutUserInput, Prisma.WeddingCollaboratorUncheckedCreateWithoutUserInput> | Prisma.WeddingCollaboratorCreateWithoutUserInput[] | Prisma.WeddingCollaboratorUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.WeddingCollaboratorCreateOrConnectWithoutUserInput | Prisma.WeddingCollaboratorCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.WeddingCollaboratorCreateManyUserInputEnvelope;
    connect?: Prisma.WeddingCollaboratorWhereUniqueInput | Prisma.WeddingCollaboratorWhereUniqueInput[];
};
export type WeddingCollaboratorUncheckedCreateNestedManyWithoutInvitedByInput = {
    create?: Prisma.XOR<Prisma.WeddingCollaboratorCreateWithoutInvitedByInput, Prisma.WeddingCollaboratorUncheckedCreateWithoutInvitedByInput> | Prisma.WeddingCollaboratorCreateWithoutInvitedByInput[] | Prisma.WeddingCollaboratorUncheckedCreateWithoutInvitedByInput[];
    connectOrCreate?: Prisma.WeddingCollaboratorCreateOrConnectWithoutInvitedByInput | Prisma.WeddingCollaboratorCreateOrConnectWithoutInvitedByInput[];
    createMany?: Prisma.WeddingCollaboratorCreateManyInvitedByInputEnvelope;
    connect?: Prisma.WeddingCollaboratorWhereUniqueInput | Prisma.WeddingCollaboratorWhereUniqueInput[];
};
export type WeddingCollaboratorUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.WeddingCollaboratorCreateWithoutUserInput, Prisma.WeddingCollaboratorUncheckedCreateWithoutUserInput> | Prisma.WeddingCollaboratorCreateWithoutUserInput[] | Prisma.WeddingCollaboratorUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.WeddingCollaboratorCreateOrConnectWithoutUserInput | Prisma.WeddingCollaboratorCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.WeddingCollaboratorUpsertWithWhereUniqueWithoutUserInput | Prisma.WeddingCollaboratorUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.WeddingCollaboratorCreateManyUserInputEnvelope;
    set?: Prisma.WeddingCollaboratorWhereUniqueInput | Prisma.WeddingCollaboratorWhereUniqueInput[];
    disconnect?: Prisma.WeddingCollaboratorWhereUniqueInput | Prisma.WeddingCollaboratorWhereUniqueInput[];
    delete?: Prisma.WeddingCollaboratorWhereUniqueInput | Prisma.WeddingCollaboratorWhereUniqueInput[];
    connect?: Prisma.WeddingCollaboratorWhereUniqueInput | Prisma.WeddingCollaboratorWhereUniqueInput[];
    update?: Prisma.WeddingCollaboratorUpdateWithWhereUniqueWithoutUserInput | Prisma.WeddingCollaboratorUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.WeddingCollaboratorUpdateManyWithWhereWithoutUserInput | Prisma.WeddingCollaboratorUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.WeddingCollaboratorScalarWhereInput | Prisma.WeddingCollaboratorScalarWhereInput[];
};
export type WeddingCollaboratorUpdateManyWithoutInvitedByNestedInput = {
    create?: Prisma.XOR<Prisma.WeddingCollaboratorCreateWithoutInvitedByInput, Prisma.WeddingCollaboratorUncheckedCreateWithoutInvitedByInput> | Prisma.WeddingCollaboratorCreateWithoutInvitedByInput[] | Prisma.WeddingCollaboratorUncheckedCreateWithoutInvitedByInput[];
    connectOrCreate?: Prisma.WeddingCollaboratorCreateOrConnectWithoutInvitedByInput | Prisma.WeddingCollaboratorCreateOrConnectWithoutInvitedByInput[];
    upsert?: Prisma.WeddingCollaboratorUpsertWithWhereUniqueWithoutInvitedByInput | Prisma.WeddingCollaboratorUpsertWithWhereUniqueWithoutInvitedByInput[];
    createMany?: Prisma.WeddingCollaboratorCreateManyInvitedByInputEnvelope;
    set?: Prisma.WeddingCollaboratorWhereUniqueInput | Prisma.WeddingCollaboratorWhereUniqueInput[];
    disconnect?: Prisma.WeddingCollaboratorWhereUniqueInput | Prisma.WeddingCollaboratorWhereUniqueInput[];
    delete?: Prisma.WeddingCollaboratorWhereUniqueInput | Prisma.WeddingCollaboratorWhereUniqueInput[];
    connect?: Prisma.WeddingCollaboratorWhereUniqueInput | Prisma.WeddingCollaboratorWhereUniqueInput[];
    update?: Prisma.WeddingCollaboratorUpdateWithWhereUniqueWithoutInvitedByInput | Prisma.WeddingCollaboratorUpdateWithWhereUniqueWithoutInvitedByInput[];
    updateMany?: Prisma.WeddingCollaboratorUpdateManyWithWhereWithoutInvitedByInput | Prisma.WeddingCollaboratorUpdateManyWithWhereWithoutInvitedByInput[];
    deleteMany?: Prisma.WeddingCollaboratorScalarWhereInput | Prisma.WeddingCollaboratorScalarWhereInput[];
};
export type WeddingCollaboratorUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.WeddingCollaboratorCreateWithoutUserInput, Prisma.WeddingCollaboratorUncheckedCreateWithoutUserInput> | Prisma.WeddingCollaboratorCreateWithoutUserInput[] | Prisma.WeddingCollaboratorUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.WeddingCollaboratorCreateOrConnectWithoutUserInput | Prisma.WeddingCollaboratorCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.WeddingCollaboratorUpsertWithWhereUniqueWithoutUserInput | Prisma.WeddingCollaboratorUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.WeddingCollaboratorCreateManyUserInputEnvelope;
    set?: Prisma.WeddingCollaboratorWhereUniqueInput | Prisma.WeddingCollaboratorWhereUniqueInput[];
    disconnect?: Prisma.WeddingCollaboratorWhereUniqueInput | Prisma.WeddingCollaboratorWhereUniqueInput[];
    delete?: Prisma.WeddingCollaboratorWhereUniqueInput | Prisma.WeddingCollaboratorWhereUniqueInput[];
    connect?: Prisma.WeddingCollaboratorWhereUniqueInput | Prisma.WeddingCollaboratorWhereUniqueInput[];
    update?: Prisma.WeddingCollaboratorUpdateWithWhereUniqueWithoutUserInput | Prisma.WeddingCollaboratorUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.WeddingCollaboratorUpdateManyWithWhereWithoutUserInput | Prisma.WeddingCollaboratorUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.WeddingCollaboratorScalarWhereInput | Prisma.WeddingCollaboratorScalarWhereInput[];
};
export type WeddingCollaboratorUncheckedUpdateManyWithoutInvitedByNestedInput = {
    create?: Prisma.XOR<Prisma.WeddingCollaboratorCreateWithoutInvitedByInput, Prisma.WeddingCollaboratorUncheckedCreateWithoutInvitedByInput> | Prisma.WeddingCollaboratorCreateWithoutInvitedByInput[] | Prisma.WeddingCollaboratorUncheckedCreateWithoutInvitedByInput[];
    connectOrCreate?: Prisma.WeddingCollaboratorCreateOrConnectWithoutInvitedByInput | Prisma.WeddingCollaboratorCreateOrConnectWithoutInvitedByInput[];
    upsert?: Prisma.WeddingCollaboratorUpsertWithWhereUniqueWithoutInvitedByInput | Prisma.WeddingCollaboratorUpsertWithWhereUniqueWithoutInvitedByInput[];
    createMany?: Prisma.WeddingCollaboratorCreateManyInvitedByInputEnvelope;
    set?: Prisma.WeddingCollaboratorWhereUniqueInput | Prisma.WeddingCollaboratorWhereUniqueInput[];
    disconnect?: Prisma.WeddingCollaboratorWhereUniqueInput | Prisma.WeddingCollaboratorWhereUniqueInput[];
    delete?: Prisma.WeddingCollaboratorWhereUniqueInput | Prisma.WeddingCollaboratorWhereUniqueInput[];
    connect?: Prisma.WeddingCollaboratorWhereUniqueInput | Prisma.WeddingCollaboratorWhereUniqueInput[];
    update?: Prisma.WeddingCollaboratorUpdateWithWhereUniqueWithoutInvitedByInput | Prisma.WeddingCollaboratorUpdateWithWhereUniqueWithoutInvitedByInput[];
    updateMany?: Prisma.WeddingCollaboratorUpdateManyWithWhereWithoutInvitedByInput | Prisma.WeddingCollaboratorUpdateManyWithWhereWithoutInvitedByInput[];
    deleteMany?: Prisma.WeddingCollaboratorScalarWhereInput | Prisma.WeddingCollaboratorScalarWhereInput[];
};
export type WeddingCollaboratorCreateNestedManyWithoutWeddingInput = {
    create?: Prisma.XOR<Prisma.WeddingCollaboratorCreateWithoutWeddingInput, Prisma.WeddingCollaboratorUncheckedCreateWithoutWeddingInput> | Prisma.WeddingCollaboratorCreateWithoutWeddingInput[] | Prisma.WeddingCollaboratorUncheckedCreateWithoutWeddingInput[];
    connectOrCreate?: Prisma.WeddingCollaboratorCreateOrConnectWithoutWeddingInput | Prisma.WeddingCollaboratorCreateOrConnectWithoutWeddingInput[];
    createMany?: Prisma.WeddingCollaboratorCreateManyWeddingInputEnvelope;
    connect?: Prisma.WeddingCollaboratorWhereUniqueInput | Prisma.WeddingCollaboratorWhereUniqueInput[];
};
export type WeddingCollaboratorUncheckedCreateNestedManyWithoutWeddingInput = {
    create?: Prisma.XOR<Prisma.WeddingCollaboratorCreateWithoutWeddingInput, Prisma.WeddingCollaboratorUncheckedCreateWithoutWeddingInput> | Prisma.WeddingCollaboratorCreateWithoutWeddingInput[] | Prisma.WeddingCollaboratorUncheckedCreateWithoutWeddingInput[];
    connectOrCreate?: Prisma.WeddingCollaboratorCreateOrConnectWithoutWeddingInput | Prisma.WeddingCollaboratorCreateOrConnectWithoutWeddingInput[];
    createMany?: Prisma.WeddingCollaboratorCreateManyWeddingInputEnvelope;
    connect?: Prisma.WeddingCollaboratorWhereUniqueInput | Prisma.WeddingCollaboratorWhereUniqueInput[];
};
export type WeddingCollaboratorUpdateManyWithoutWeddingNestedInput = {
    create?: Prisma.XOR<Prisma.WeddingCollaboratorCreateWithoutWeddingInput, Prisma.WeddingCollaboratorUncheckedCreateWithoutWeddingInput> | Prisma.WeddingCollaboratorCreateWithoutWeddingInput[] | Prisma.WeddingCollaboratorUncheckedCreateWithoutWeddingInput[];
    connectOrCreate?: Prisma.WeddingCollaboratorCreateOrConnectWithoutWeddingInput | Prisma.WeddingCollaboratorCreateOrConnectWithoutWeddingInput[];
    upsert?: Prisma.WeddingCollaboratorUpsertWithWhereUniqueWithoutWeddingInput | Prisma.WeddingCollaboratorUpsertWithWhereUniqueWithoutWeddingInput[];
    createMany?: Prisma.WeddingCollaboratorCreateManyWeddingInputEnvelope;
    set?: Prisma.WeddingCollaboratorWhereUniqueInput | Prisma.WeddingCollaboratorWhereUniqueInput[];
    disconnect?: Prisma.WeddingCollaboratorWhereUniqueInput | Prisma.WeddingCollaboratorWhereUniqueInput[];
    delete?: Prisma.WeddingCollaboratorWhereUniqueInput | Prisma.WeddingCollaboratorWhereUniqueInput[];
    connect?: Prisma.WeddingCollaboratorWhereUniqueInput | Prisma.WeddingCollaboratorWhereUniqueInput[];
    update?: Prisma.WeddingCollaboratorUpdateWithWhereUniqueWithoutWeddingInput | Prisma.WeddingCollaboratorUpdateWithWhereUniqueWithoutWeddingInput[];
    updateMany?: Prisma.WeddingCollaboratorUpdateManyWithWhereWithoutWeddingInput | Prisma.WeddingCollaboratorUpdateManyWithWhereWithoutWeddingInput[];
    deleteMany?: Prisma.WeddingCollaboratorScalarWhereInput | Prisma.WeddingCollaboratorScalarWhereInput[];
};
export type WeddingCollaboratorUncheckedUpdateManyWithoutWeddingNestedInput = {
    create?: Prisma.XOR<Prisma.WeddingCollaboratorCreateWithoutWeddingInput, Prisma.WeddingCollaboratorUncheckedCreateWithoutWeddingInput> | Prisma.WeddingCollaboratorCreateWithoutWeddingInput[] | Prisma.WeddingCollaboratorUncheckedCreateWithoutWeddingInput[];
    connectOrCreate?: Prisma.WeddingCollaboratorCreateOrConnectWithoutWeddingInput | Prisma.WeddingCollaboratorCreateOrConnectWithoutWeddingInput[];
    upsert?: Prisma.WeddingCollaboratorUpsertWithWhereUniqueWithoutWeddingInput | Prisma.WeddingCollaboratorUpsertWithWhereUniqueWithoutWeddingInput[];
    createMany?: Prisma.WeddingCollaboratorCreateManyWeddingInputEnvelope;
    set?: Prisma.WeddingCollaboratorWhereUniqueInput | Prisma.WeddingCollaboratorWhereUniqueInput[];
    disconnect?: Prisma.WeddingCollaboratorWhereUniqueInput | Prisma.WeddingCollaboratorWhereUniqueInput[];
    delete?: Prisma.WeddingCollaboratorWhereUniqueInput | Prisma.WeddingCollaboratorWhereUniqueInput[];
    connect?: Prisma.WeddingCollaboratorWhereUniqueInput | Prisma.WeddingCollaboratorWhereUniqueInput[];
    update?: Prisma.WeddingCollaboratorUpdateWithWhereUniqueWithoutWeddingInput | Prisma.WeddingCollaboratorUpdateWithWhereUniqueWithoutWeddingInput[];
    updateMany?: Prisma.WeddingCollaboratorUpdateManyWithWhereWithoutWeddingInput | Prisma.WeddingCollaboratorUpdateManyWithWhereWithoutWeddingInput[];
    deleteMany?: Prisma.WeddingCollaboratorScalarWhereInput | Prisma.WeddingCollaboratorScalarWhereInput[];
};
export type EnumWeddingPermissionFieldUpdateOperationsInput = {
    set?: $Enums.WeddingPermission;
};
export type EnumCollaborationStatusFieldUpdateOperationsInput = {
    set?: $Enums.CollaborationStatus;
};
export type WeddingCollaboratorCreateWithoutUserInput = {
    id?: string;
    email: string;
    permission?: $Enums.WeddingPermission;
    status?: $Enums.CollaborationStatus;
    token: string;
    expiresAt: Date | string;
    acceptedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    wedding: Prisma.WeddingCreateNestedOneWithoutCollaboratorsInput;
    invitedBy: Prisma.UserCreateNestedOneWithoutSentCollaborationInvitesInput;
};
export type WeddingCollaboratorUncheckedCreateWithoutUserInput = {
    id?: string;
    weddingId: string;
    email: string;
    invitedById: string;
    permission?: $Enums.WeddingPermission;
    status?: $Enums.CollaborationStatus;
    token: string;
    expiresAt: Date | string;
    acceptedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type WeddingCollaboratorCreateOrConnectWithoutUserInput = {
    where: Prisma.WeddingCollaboratorWhereUniqueInput;
    create: Prisma.XOR<Prisma.WeddingCollaboratorCreateWithoutUserInput, Prisma.WeddingCollaboratorUncheckedCreateWithoutUserInput>;
};
export type WeddingCollaboratorCreateManyUserInputEnvelope = {
    data: Prisma.WeddingCollaboratorCreateManyUserInput | Prisma.WeddingCollaboratorCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type WeddingCollaboratorCreateWithoutInvitedByInput = {
    id?: string;
    email: string;
    permission?: $Enums.WeddingPermission;
    status?: $Enums.CollaborationStatus;
    token: string;
    expiresAt: Date | string;
    acceptedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    wedding: Prisma.WeddingCreateNestedOneWithoutCollaboratorsInput;
    user?: Prisma.UserCreateNestedOneWithoutWeddingCollaborationsInput;
};
export type WeddingCollaboratorUncheckedCreateWithoutInvitedByInput = {
    id?: string;
    weddingId: string;
    email: string;
    userId?: string | null;
    permission?: $Enums.WeddingPermission;
    status?: $Enums.CollaborationStatus;
    token: string;
    expiresAt: Date | string;
    acceptedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type WeddingCollaboratorCreateOrConnectWithoutInvitedByInput = {
    where: Prisma.WeddingCollaboratorWhereUniqueInput;
    create: Prisma.XOR<Prisma.WeddingCollaboratorCreateWithoutInvitedByInput, Prisma.WeddingCollaboratorUncheckedCreateWithoutInvitedByInput>;
};
export type WeddingCollaboratorCreateManyInvitedByInputEnvelope = {
    data: Prisma.WeddingCollaboratorCreateManyInvitedByInput | Prisma.WeddingCollaboratorCreateManyInvitedByInput[];
    skipDuplicates?: boolean;
};
export type WeddingCollaboratorUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.WeddingCollaboratorWhereUniqueInput;
    update: Prisma.XOR<Prisma.WeddingCollaboratorUpdateWithoutUserInput, Prisma.WeddingCollaboratorUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.WeddingCollaboratorCreateWithoutUserInput, Prisma.WeddingCollaboratorUncheckedCreateWithoutUserInput>;
};
export type WeddingCollaboratorUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.WeddingCollaboratorWhereUniqueInput;
    data: Prisma.XOR<Prisma.WeddingCollaboratorUpdateWithoutUserInput, Prisma.WeddingCollaboratorUncheckedUpdateWithoutUserInput>;
};
export type WeddingCollaboratorUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.WeddingCollaboratorScalarWhereInput;
    data: Prisma.XOR<Prisma.WeddingCollaboratorUpdateManyMutationInput, Prisma.WeddingCollaboratorUncheckedUpdateManyWithoutUserInput>;
};
export type WeddingCollaboratorScalarWhereInput = {
    AND?: Prisma.WeddingCollaboratorScalarWhereInput | Prisma.WeddingCollaboratorScalarWhereInput[];
    OR?: Prisma.WeddingCollaboratorScalarWhereInput[];
    NOT?: Prisma.WeddingCollaboratorScalarWhereInput | Prisma.WeddingCollaboratorScalarWhereInput[];
    id?: Prisma.StringFilter<"WeddingCollaborator"> | string;
    weddingId?: Prisma.StringFilter<"WeddingCollaborator"> | string;
    email?: Prisma.StringFilter<"WeddingCollaborator"> | string;
    userId?: Prisma.StringNullableFilter<"WeddingCollaborator"> | string | null;
    invitedById?: Prisma.StringFilter<"WeddingCollaborator"> | string;
    permission?: Prisma.EnumWeddingPermissionFilter<"WeddingCollaborator"> | $Enums.WeddingPermission;
    status?: Prisma.EnumCollaborationStatusFilter<"WeddingCollaborator"> | $Enums.CollaborationStatus;
    token?: Prisma.StringFilter<"WeddingCollaborator"> | string;
    expiresAt?: Prisma.DateTimeFilter<"WeddingCollaborator"> | Date | string;
    acceptedAt?: Prisma.DateTimeNullableFilter<"WeddingCollaborator"> | Date | string | null;
    revokedAt?: Prisma.DateTimeNullableFilter<"WeddingCollaborator"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"WeddingCollaborator"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"WeddingCollaborator"> | Date | string;
};
export type WeddingCollaboratorUpsertWithWhereUniqueWithoutInvitedByInput = {
    where: Prisma.WeddingCollaboratorWhereUniqueInput;
    update: Prisma.XOR<Prisma.WeddingCollaboratorUpdateWithoutInvitedByInput, Prisma.WeddingCollaboratorUncheckedUpdateWithoutInvitedByInput>;
    create: Prisma.XOR<Prisma.WeddingCollaboratorCreateWithoutInvitedByInput, Prisma.WeddingCollaboratorUncheckedCreateWithoutInvitedByInput>;
};
export type WeddingCollaboratorUpdateWithWhereUniqueWithoutInvitedByInput = {
    where: Prisma.WeddingCollaboratorWhereUniqueInput;
    data: Prisma.XOR<Prisma.WeddingCollaboratorUpdateWithoutInvitedByInput, Prisma.WeddingCollaboratorUncheckedUpdateWithoutInvitedByInput>;
};
export type WeddingCollaboratorUpdateManyWithWhereWithoutInvitedByInput = {
    where: Prisma.WeddingCollaboratorScalarWhereInput;
    data: Prisma.XOR<Prisma.WeddingCollaboratorUpdateManyMutationInput, Prisma.WeddingCollaboratorUncheckedUpdateManyWithoutInvitedByInput>;
};
export type WeddingCollaboratorCreateWithoutWeddingInput = {
    id?: string;
    email: string;
    permission?: $Enums.WeddingPermission;
    status?: $Enums.CollaborationStatus;
    token: string;
    expiresAt: Date | string;
    acceptedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user?: Prisma.UserCreateNestedOneWithoutWeddingCollaborationsInput;
    invitedBy: Prisma.UserCreateNestedOneWithoutSentCollaborationInvitesInput;
};
export type WeddingCollaboratorUncheckedCreateWithoutWeddingInput = {
    id?: string;
    email: string;
    userId?: string | null;
    invitedById: string;
    permission?: $Enums.WeddingPermission;
    status?: $Enums.CollaborationStatus;
    token: string;
    expiresAt: Date | string;
    acceptedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type WeddingCollaboratorCreateOrConnectWithoutWeddingInput = {
    where: Prisma.WeddingCollaboratorWhereUniqueInput;
    create: Prisma.XOR<Prisma.WeddingCollaboratorCreateWithoutWeddingInput, Prisma.WeddingCollaboratorUncheckedCreateWithoutWeddingInput>;
};
export type WeddingCollaboratorCreateManyWeddingInputEnvelope = {
    data: Prisma.WeddingCollaboratorCreateManyWeddingInput | Prisma.WeddingCollaboratorCreateManyWeddingInput[];
    skipDuplicates?: boolean;
};
export type WeddingCollaboratorUpsertWithWhereUniqueWithoutWeddingInput = {
    where: Prisma.WeddingCollaboratorWhereUniqueInput;
    update: Prisma.XOR<Prisma.WeddingCollaboratorUpdateWithoutWeddingInput, Prisma.WeddingCollaboratorUncheckedUpdateWithoutWeddingInput>;
    create: Prisma.XOR<Prisma.WeddingCollaboratorCreateWithoutWeddingInput, Prisma.WeddingCollaboratorUncheckedCreateWithoutWeddingInput>;
};
export type WeddingCollaboratorUpdateWithWhereUniqueWithoutWeddingInput = {
    where: Prisma.WeddingCollaboratorWhereUniqueInput;
    data: Prisma.XOR<Prisma.WeddingCollaboratorUpdateWithoutWeddingInput, Prisma.WeddingCollaboratorUncheckedUpdateWithoutWeddingInput>;
};
export type WeddingCollaboratorUpdateManyWithWhereWithoutWeddingInput = {
    where: Prisma.WeddingCollaboratorScalarWhereInput;
    data: Prisma.XOR<Prisma.WeddingCollaboratorUpdateManyMutationInput, Prisma.WeddingCollaboratorUncheckedUpdateManyWithoutWeddingInput>;
};
export type WeddingCollaboratorCreateManyUserInput = {
    id?: string;
    weddingId: string;
    email: string;
    invitedById: string;
    permission?: $Enums.WeddingPermission;
    status?: $Enums.CollaborationStatus;
    token: string;
    expiresAt: Date | string;
    acceptedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type WeddingCollaboratorCreateManyInvitedByInput = {
    id?: string;
    weddingId: string;
    email: string;
    userId?: string | null;
    permission?: $Enums.WeddingPermission;
    status?: $Enums.CollaborationStatus;
    token: string;
    expiresAt: Date | string;
    acceptedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type WeddingCollaboratorUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    permission?: Prisma.EnumWeddingPermissionFieldUpdateOperationsInput | $Enums.WeddingPermission;
    status?: Prisma.EnumCollaborationStatusFieldUpdateOperationsInput | $Enums.CollaborationStatus;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wedding?: Prisma.WeddingUpdateOneRequiredWithoutCollaboratorsNestedInput;
    invitedBy?: Prisma.UserUpdateOneRequiredWithoutSentCollaborationInvitesNestedInput;
};
export type WeddingCollaboratorUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    invitedById?: Prisma.StringFieldUpdateOperationsInput | string;
    permission?: Prisma.EnumWeddingPermissionFieldUpdateOperationsInput | $Enums.WeddingPermission;
    status?: Prisma.EnumCollaborationStatusFieldUpdateOperationsInput | $Enums.CollaborationStatus;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WeddingCollaboratorUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    invitedById?: Prisma.StringFieldUpdateOperationsInput | string;
    permission?: Prisma.EnumWeddingPermissionFieldUpdateOperationsInput | $Enums.WeddingPermission;
    status?: Prisma.EnumCollaborationStatusFieldUpdateOperationsInput | $Enums.CollaborationStatus;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WeddingCollaboratorUpdateWithoutInvitedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    permission?: Prisma.EnumWeddingPermissionFieldUpdateOperationsInput | $Enums.WeddingPermission;
    status?: Prisma.EnumCollaborationStatusFieldUpdateOperationsInput | $Enums.CollaborationStatus;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wedding?: Prisma.WeddingUpdateOneRequiredWithoutCollaboratorsNestedInput;
    user?: Prisma.UserUpdateOneWithoutWeddingCollaborationsNestedInput;
};
export type WeddingCollaboratorUncheckedUpdateWithoutInvitedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    permission?: Prisma.EnumWeddingPermissionFieldUpdateOperationsInput | $Enums.WeddingPermission;
    status?: Prisma.EnumCollaborationStatusFieldUpdateOperationsInput | $Enums.CollaborationStatus;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WeddingCollaboratorUncheckedUpdateManyWithoutInvitedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    permission?: Prisma.EnumWeddingPermissionFieldUpdateOperationsInput | $Enums.WeddingPermission;
    status?: Prisma.EnumCollaborationStatusFieldUpdateOperationsInput | $Enums.CollaborationStatus;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WeddingCollaboratorCreateManyWeddingInput = {
    id?: string;
    email: string;
    userId?: string | null;
    invitedById: string;
    permission?: $Enums.WeddingPermission;
    status?: $Enums.CollaborationStatus;
    token: string;
    expiresAt: Date | string;
    acceptedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type WeddingCollaboratorUpdateWithoutWeddingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    permission?: Prisma.EnumWeddingPermissionFieldUpdateOperationsInput | $Enums.WeddingPermission;
    status?: Prisma.EnumCollaborationStatusFieldUpdateOperationsInput | $Enums.CollaborationStatus;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneWithoutWeddingCollaborationsNestedInput;
    invitedBy?: Prisma.UserUpdateOneRequiredWithoutSentCollaborationInvitesNestedInput;
};
export type WeddingCollaboratorUncheckedUpdateWithoutWeddingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    invitedById?: Prisma.StringFieldUpdateOperationsInput | string;
    permission?: Prisma.EnumWeddingPermissionFieldUpdateOperationsInput | $Enums.WeddingPermission;
    status?: Prisma.EnumCollaborationStatusFieldUpdateOperationsInput | $Enums.CollaborationStatus;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WeddingCollaboratorUncheckedUpdateManyWithoutWeddingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    invitedById?: Prisma.StringFieldUpdateOperationsInput | string;
    permission?: Prisma.EnumWeddingPermissionFieldUpdateOperationsInput | $Enums.WeddingPermission;
    status?: Prisma.EnumCollaborationStatusFieldUpdateOperationsInput | $Enums.CollaborationStatus;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WeddingCollaboratorSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    weddingId?: boolean;
    email?: boolean;
    userId?: boolean;
    invitedById?: boolean;
    permission?: boolean;
    status?: boolean;
    token?: boolean;
    expiresAt?: boolean;
    acceptedAt?: boolean;
    revokedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.WeddingCollaborator$userArgs<ExtArgs>;
    invitedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["weddingCollaborator"]>;
export type WeddingCollaboratorSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    weddingId?: boolean;
    email?: boolean;
    userId?: boolean;
    invitedById?: boolean;
    permission?: boolean;
    status?: boolean;
    token?: boolean;
    expiresAt?: boolean;
    acceptedAt?: boolean;
    revokedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.WeddingCollaborator$userArgs<ExtArgs>;
    invitedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["weddingCollaborator"]>;
export type WeddingCollaboratorSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    weddingId?: boolean;
    email?: boolean;
    userId?: boolean;
    invitedById?: boolean;
    permission?: boolean;
    status?: boolean;
    token?: boolean;
    expiresAt?: boolean;
    acceptedAt?: boolean;
    revokedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.WeddingCollaborator$userArgs<ExtArgs>;
    invitedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["weddingCollaborator"]>;
export type WeddingCollaboratorSelectScalar = {
    id?: boolean;
    weddingId?: boolean;
    email?: boolean;
    userId?: boolean;
    invitedById?: boolean;
    permission?: boolean;
    status?: boolean;
    token?: boolean;
    expiresAt?: boolean;
    acceptedAt?: boolean;
    revokedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type WeddingCollaboratorOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "weddingId" | "email" | "userId" | "invitedById" | "permission" | "status" | "token" | "expiresAt" | "acceptedAt" | "revokedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["weddingCollaborator"]>;
export type WeddingCollaboratorInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.WeddingCollaborator$userArgs<ExtArgs>;
    invitedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type WeddingCollaboratorIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.WeddingCollaborator$userArgs<ExtArgs>;
    invitedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type WeddingCollaboratorIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.WeddingCollaborator$userArgs<ExtArgs>;
    invitedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $WeddingCollaboratorPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "WeddingCollaborator";
    objects: {
        wedding: Prisma.$WeddingPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs> | null;
        invitedBy: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        weddingId: string;
        email: string;
        userId: string | null;
        invitedById: string;
        permission: $Enums.WeddingPermission;
        status: $Enums.CollaborationStatus;
        token: string;
        expiresAt: Date;
        acceptedAt: Date | null;
        revokedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["weddingCollaborator"]>;
    composites: {};
};
export type WeddingCollaboratorGetPayload<S extends boolean | null | undefined | WeddingCollaboratorDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WeddingCollaboratorPayload, S>;
export type WeddingCollaboratorCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WeddingCollaboratorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WeddingCollaboratorCountAggregateInputType | true;
};
export interface WeddingCollaboratorDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['WeddingCollaborator'];
        meta: {
            name: 'WeddingCollaborator';
        };
    };
    findUnique<T extends WeddingCollaboratorFindUniqueArgs>(args: Prisma.SelectSubset<T, WeddingCollaboratorFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WeddingCollaboratorClient<runtime.Types.Result.GetResult<Prisma.$WeddingCollaboratorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends WeddingCollaboratorFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WeddingCollaboratorFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WeddingCollaboratorClient<runtime.Types.Result.GetResult<Prisma.$WeddingCollaboratorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends WeddingCollaboratorFindFirstArgs>(args?: Prisma.SelectSubset<T, WeddingCollaboratorFindFirstArgs<ExtArgs>>): Prisma.Prisma__WeddingCollaboratorClient<runtime.Types.Result.GetResult<Prisma.$WeddingCollaboratorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends WeddingCollaboratorFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WeddingCollaboratorFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WeddingCollaboratorClient<runtime.Types.Result.GetResult<Prisma.$WeddingCollaboratorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends WeddingCollaboratorFindManyArgs>(args?: Prisma.SelectSubset<T, WeddingCollaboratorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WeddingCollaboratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends WeddingCollaboratorCreateArgs>(args: Prisma.SelectSubset<T, WeddingCollaboratorCreateArgs<ExtArgs>>): Prisma.Prisma__WeddingCollaboratorClient<runtime.Types.Result.GetResult<Prisma.$WeddingCollaboratorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends WeddingCollaboratorCreateManyArgs>(args?: Prisma.SelectSubset<T, WeddingCollaboratorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends WeddingCollaboratorCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WeddingCollaboratorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WeddingCollaboratorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends WeddingCollaboratorDeleteArgs>(args: Prisma.SelectSubset<T, WeddingCollaboratorDeleteArgs<ExtArgs>>): Prisma.Prisma__WeddingCollaboratorClient<runtime.Types.Result.GetResult<Prisma.$WeddingCollaboratorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends WeddingCollaboratorUpdateArgs>(args: Prisma.SelectSubset<T, WeddingCollaboratorUpdateArgs<ExtArgs>>): Prisma.Prisma__WeddingCollaboratorClient<runtime.Types.Result.GetResult<Prisma.$WeddingCollaboratorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends WeddingCollaboratorDeleteManyArgs>(args?: Prisma.SelectSubset<T, WeddingCollaboratorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends WeddingCollaboratorUpdateManyArgs>(args: Prisma.SelectSubset<T, WeddingCollaboratorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends WeddingCollaboratorUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WeddingCollaboratorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WeddingCollaboratorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends WeddingCollaboratorUpsertArgs>(args: Prisma.SelectSubset<T, WeddingCollaboratorUpsertArgs<ExtArgs>>): Prisma.Prisma__WeddingCollaboratorClient<runtime.Types.Result.GetResult<Prisma.$WeddingCollaboratorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends WeddingCollaboratorCountArgs>(args?: Prisma.Subset<T, WeddingCollaboratorCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WeddingCollaboratorCountAggregateOutputType> : number>;
    aggregate<T extends WeddingCollaboratorAggregateArgs>(args: Prisma.Subset<T, WeddingCollaboratorAggregateArgs>): Prisma.PrismaPromise<GetWeddingCollaboratorAggregateType<T>>;
    groupBy<T extends WeddingCollaboratorGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WeddingCollaboratorGroupByArgs['orderBy'];
    } : {
        orderBy?: WeddingCollaboratorGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WeddingCollaboratorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeddingCollaboratorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: WeddingCollaboratorFieldRefs;
}
export interface Prisma__WeddingCollaboratorClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    wedding<T extends Prisma.WeddingDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WeddingDefaultArgs<ExtArgs>>): Prisma.Prisma__WeddingClient<runtime.Types.Result.GetResult<Prisma.$WeddingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.WeddingCollaborator$userArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WeddingCollaborator$userArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    invitedBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface WeddingCollaboratorFieldRefs {
    readonly id: Prisma.FieldRef<"WeddingCollaborator", 'String'>;
    readonly weddingId: Prisma.FieldRef<"WeddingCollaborator", 'String'>;
    readonly email: Prisma.FieldRef<"WeddingCollaborator", 'String'>;
    readonly userId: Prisma.FieldRef<"WeddingCollaborator", 'String'>;
    readonly invitedById: Prisma.FieldRef<"WeddingCollaborator", 'String'>;
    readonly permission: Prisma.FieldRef<"WeddingCollaborator", 'WeddingPermission'>;
    readonly status: Prisma.FieldRef<"WeddingCollaborator", 'CollaborationStatus'>;
    readonly token: Prisma.FieldRef<"WeddingCollaborator", 'String'>;
    readonly expiresAt: Prisma.FieldRef<"WeddingCollaborator", 'DateTime'>;
    readonly acceptedAt: Prisma.FieldRef<"WeddingCollaborator", 'DateTime'>;
    readonly revokedAt: Prisma.FieldRef<"WeddingCollaborator", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"WeddingCollaborator", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"WeddingCollaborator", 'DateTime'>;
}
export type WeddingCollaboratorFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WeddingCollaboratorSelect<ExtArgs> | null;
    omit?: Prisma.WeddingCollaboratorOmit<ExtArgs> | null;
    include?: Prisma.WeddingCollaboratorInclude<ExtArgs> | null;
    where: Prisma.WeddingCollaboratorWhereUniqueInput;
};
export type WeddingCollaboratorFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WeddingCollaboratorSelect<ExtArgs> | null;
    omit?: Prisma.WeddingCollaboratorOmit<ExtArgs> | null;
    include?: Prisma.WeddingCollaboratorInclude<ExtArgs> | null;
    where: Prisma.WeddingCollaboratorWhereUniqueInput;
};
export type WeddingCollaboratorFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WeddingCollaboratorSelect<ExtArgs> | null;
    omit?: Prisma.WeddingCollaboratorOmit<ExtArgs> | null;
    include?: Prisma.WeddingCollaboratorInclude<ExtArgs> | null;
    where?: Prisma.WeddingCollaboratorWhereInput;
    orderBy?: Prisma.WeddingCollaboratorOrderByWithRelationInput | Prisma.WeddingCollaboratorOrderByWithRelationInput[];
    cursor?: Prisma.WeddingCollaboratorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WeddingCollaboratorScalarFieldEnum | Prisma.WeddingCollaboratorScalarFieldEnum[];
};
export type WeddingCollaboratorFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WeddingCollaboratorSelect<ExtArgs> | null;
    omit?: Prisma.WeddingCollaboratorOmit<ExtArgs> | null;
    include?: Prisma.WeddingCollaboratorInclude<ExtArgs> | null;
    where?: Prisma.WeddingCollaboratorWhereInput;
    orderBy?: Prisma.WeddingCollaboratorOrderByWithRelationInput | Prisma.WeddingCollaboratorOrderByWithRelationInput[];
    cursor?: Prisma.WeddingCollaboratorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WeddingCollaboratorScalarFieldEnum | Prisma.WeddingCollaboratorScalarFieldEnum[];
};
export type WeddingCollaboratorFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WeddingCollaboratorSelect<ExtArgs> | null;
    omit?: Prisma.WeddingCollaboratorOmit<ExtArgs> | null;
    include?: Prisma.WeddingCollaboratorInclude<ExtArgs> | null;
    where?: Prisma.WeddingCollaboratorWhereInput;
    orderBy?: Prisma.WeddingCollaboratorOrderByWithRelationInput | Prisma.WeddingCollaboratorOrderByWithRelationInput[];
    cursor?: Prisma.WeddingCollaboratorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WeddingCollaboratorScalarFieldEnum | Prisma.WeddingCollaboratorScalarFieldEnum[];
};
export type WeddingCollaboratorCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WeddingCollaboratorSelect<ExtArgs> | null;
    omit?: Prisma.WeddingCollaboratorOmit<ExtArgs> | null;
    include?: Prisma.WeddingCollaboratorInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WeddingCollaboratorCreateInput, Prisma.WeddingCollaboratorUncheckedCreateInput>;
};
export type WeddingCollaboratorCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.WeddingCollaboratorCreateManyInput | Prisma.WeddingCollaboratorCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WeddingCollaboratorCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WeddingCollaboratorSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WeddingCollaboratorOmit<ExtArgs> | null;
    data: Prisma.WeddingCollaboratorCreateManyInput | Prisma.WeddingCollaboratorCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.WeddingCollaboratorIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type WeddingCollaboratorUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WeddingCollaboratorSelect<ExtArgs> | null;
    omit?: Prisma.WeddingCollaboratorOmit<ExtArgs> | null;
    include?: Prisma.WeddingCollaboratorInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WeddingCollaboratorUpdateInput, Prisma.WeddingCollaboratorUncheckedUpdateInput>;
    where: Prisma.WeddingCollaboratorWhereUniqueInput;
};
export type WeddingCollaboratorUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.WeddingCollaboratorUpdateManyMutationInput, Prisma.WeddingCollaboratorUncheckedUpdateManyInput>;
    where?: Prisma.WeddingCollaboratorWhereInput;
    limit?: number;
};
export type WeddingCollaboratorUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WeddingCollaboratorSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WeddingCollaboratorOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WeddingCollaboratorUpdateManyMutationInput, Prisma.WeddingCollaboratorUncheckedUpdateManyInput>;
    where?: Prisma.WeddingCollaboratorWhereInput;
    limit?: number;
    include?: Prisma.WeddingCollaboratorIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type WeddingCollaboratorUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WeddingCollaboratorSelect<ExtArgs> | null;
    omit?: Prisma.WeddingCollaboratorOmit<ExtArgs> | null;
    include?: Prisma.WeddingCollaboratorInclude<ExtArgs> | null;
    where: Prisma.WeddingCollaboratorWhereUniqueInput;
    create: Prisma.XOR<Prisma.WeddingCollaboratorCreateInput, Prisma.WeddingCollaboratorUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.WeddingCollaboratorUpdateInput, Prisma.WeddingCollaboratorUncheckedUpdateInput>;
};
export type WeddingCollaboratorDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WeddingCollaboratorSelect<ExtArgs> | null;
    omit?: Prisma.WeddingCollaboratorOmit<ExtArgs> | null;
    include?: Prisma.WeddingCollaboratorInclude<ExtArgs> | null;
    where: Prisma.WeddingCollaboratorWhereUniqueInput;
};
export type WeddingCollaboratorDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WeddingCollaboratorWhereInput;
    limit?: number;
};
export type WeddingCollaborator$userArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type WeddingCollaboratorDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WeddingCollaboratorSelect<ExtArgs> | null;
    omit?: Prisma.WeddingCollaboratorOmit<ExtArgs> | null;
    include?: Prisma.WeddingCollaboratorInclude<ExtArgs> | null;
};
