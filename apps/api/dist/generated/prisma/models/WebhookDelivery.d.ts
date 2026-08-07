import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type WebhookDeliveryModel = runtime.Types.Result.DefaultSelection<Prisma.$WebhookDeliveryPayload>;
export type AggregateWebhookDelivery = {
    _count: WebhookDeliveryCountAggregateOutputType | null;
    _avg: WebhookDeliveryAvgAggregateOutputType | null;
    _sum: WebhookDeliverySumAggregateOutputType | null;
    _min: WebhookDeliveryMinAggregateOutputType | null;
    _max: WebhookDeliveryMaxAggregateOutputType | null;
};
export type WebhookDeliveryAvgAggregateOutputType = {
    attemptCount: number | null;
    responseStatus: number | null;
};
export type WebhookDeliverySumAggregateOutputType = {
    attemptCount: number | null;
    responseStatus: number | null;
};
export type WebhookDeliveryMinAggregateOutputType = {
    id: string | null;
    endpointId: string | null;
    eventType: string | null;
    eventId: string | null;
    status: $Enums.DeliveryStatus | null;
    attemptCount: number | null;
    nextAttemptAt: Date | null;
    responseStatus: number | null;
    responseBody: string | null;
    lastError: string | null;
    deliveredAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type WebhookDeliveryMaxAggregateOutputType = {
    id: string | null;
    endpointId: string | null;
    eventType: string | null;
    eventId: string | null;
    status: $Enums.DeliveryStatus | null;
    attemptCount: number | null;
    nextAttemptAt: Date | null;
    responseStatus: number | null;
    responseBody: string | null;
    lastError: string | null;
    deliveredAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type WebhookDeliveryCountAggregateOutputType = {
    id: number;
    endpointId: number;
    eventType: number;
    eventId: number;
    payload: number;
    status: number;
    attemptCount: number;
    nextAttemptAt: number;
    responseStatus: number;
    responseBody: number;
    lastError: number;
    deliveredAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type WebhookDeliveryAvgAggregateInputType = {
    attemptCount?: true;
    responseStatus?: true;
};
export type WebhookDeliverySumAggregateInputType = {
    attemptCount?: true;
    responseStatus?: true;
};
export type WebhookDeliveryMinAggregateInputType = {
    id?: true;
    endpointId?: true;
    eventType?: true;
    eventId?: true;
    status?: true;
    attemptCount?: true;
    nextAttemptAt?: true;
    responseStatus?: true;
    responseBody?: true;
    lastError?: true;
    deliveredAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type WebhookDeliveryMaxAggregateInputType = {
    id?: true;
    endpointId?: true;
    eventType?: true;
    eventId?: true;
    status?: true;
    attemptCount?: true;
    nextAttemptAt?: true;
    responseStatus?: true;
    responseBody?: true;
    lastError?: true;
    deliveredAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type WebhookDeliveryCountAggregateInputType = {
    id?: true;
    endpointId?: true;
    eventType?: true;
    eventId?: true;
    payload?: true;
    status?: true;
    attemptCount?: true;
    nextAttemptAt?: true;
    responseStatus?: true;
    responseBody?: true;
    lastError?: true;
    deliveredAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type WebhookDeliveryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WebhookDeliveryWhereInput;
    orderBy?: Prisma.WebhookDeliveryOrderByWithRelationInput | Prisma.WebhookDeliveryOrderByWithRelationInput[];
    cursor?: Prisma.WebhookDeliveryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | WebhookDeliveryCountAggregateInputType;
    _avg?: WebhookDeliveryAvgAggregateInputType;
    _sum?: WebhookDeliverySumAggregateInputType;
    _min?: WebhookDeliveryMinAggregateInputType;
    _max?: WebhookDeliveryMaxAggregateInputType;
};
export type GetWebhookDeliveryAggregateType<T extends WebhookDeliveryAggregateArgs> = {
    [P in keyof T & keyof AggregateWebhookDelivery]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWebhookDelivery[P]> : Prisma.GetScalarType<T[P], AggregateWebhookDelivery[P]>;
};
export type WebhookDeliveryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WebhookDeliveryWhereInput;
    orderBy?: Prisma.WebhookDeliveryOrderByWithAggregationInput | Prisma.WebhookDeliveryOrderByWithAggregationInput[];
    by: Prisma.WebhookDeliveryScalarFieldEnum[] | Prisma.WebhookDeliveryScalarFieldEnum;
    having?: Prisma.WebhookDeliveryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WebhookDeliveryCountAggregateInputType | true;
    _avg?: WebhookDeliveryAvgAggregateInputType;
    _sum?: WebhookDeliverySumAggregateInputType;
    _min?: WebhookDeliveryMinAggregateInputType;
    _max?: WebhookDeliveryMaxAggregateInputType;
};
export type WebhookDeliveryGroupByOutputType = {
    id: string;
    endpointId: string;
    eventType: string;
    eventId: string;
    payload: runtime.JsonValue;
    status: $Enums.DeliveryStatus;
    attemptCount: number;
    nextAttemptAt: Date;
    responseStatus: number | null;
    responseBody: string | null;
    lastError: string | null;
    deliveredAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: WebhookDeliveryCountAggregateOutputType | null;
    _avg: WebhookDeliveryAvgAggregateOutputType | null;
    _sum: WebhookDeliverySumAggregateOutputType | null;
    _min: WebhookDeliveryMinAggregateOutputType | null;
    _max: WebhookDeliveryMaxAggregateOutputType | null;
};
export type GetWebhookDeliveryGroupByPayload<T extends WebhookDeliveryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WebhookDeliveryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WebhookDeliveryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WebhookDeliveryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WebhookDeliveryGroupByOutputType[P]>;
}>>;
export type WebhookDeliveryWhereInput = {
    AND?: Prisma.WebhookDeliveryWhereInput | Prisma.WebhookDeliveryWhereInput[];
    OR?: Prisma.WebhookDeliveryWhereInput[];
    NOT?: Prisma.WebhookDeliveryWhereInput | Prisma.WebhookDeliveryWhereInput[];
    id?: Prisma.StringFilter<"WebhookDelivery"> | string;
    endpointId?: Prisma.StringFilter<"WebhookDelivery"> | string;
    eventType?: Prisma.StringFilter<"WebhookDelivery"> | string;
    eventId?: Prisma.StringFilter<"WebhookDelivery"> | string;
    payload?: Prisma.JsonFilter<"WebhookDelivery">;
    status?: Prisma.EnumDeliveryStatusFilter<"WebhookDelivery"> | $Enums.DeliveryStatus;
    attemptCount?: Prisma.IntFilter<"WebhookDelivery"> | number;
    nextAttemptAt?: Prisma.DateTimeFilter<"WebhookDelivery"> | Date | string;
    responseStatus?: Prisma.IntNullableFilter<"WebhookDelivery"> | number | null;
    responseBody?: Prisma.StringNullableFilter<"WebhookDelivery"> | string | null;
    lastError?: Prisma.StringNullableFilter<"WebhookDelivery"> | string | null;
    deliveredAt?: Prisma.DateTimeNullableFilter<"WebhookDelivery"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"WebhookDelivery"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"WebhookDelivery"> | Date | string;
    endpoint?: Prisma.XOR<Prisma.WebhookEndpointScalarRelationFilter, Prisma.WebhookEndpointWhereInput>;
};
export type WebhookDeliveryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    endpointId?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    payload?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    attemptCount?: Prisma.SortOrder;
    nextAttemptAt?: Prisma.SortOrder;
    responseStatus?: Prisma.SortOrderInput | Prisma.SortOrder;
    responseBody?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastError?: Prisma.SortOrderInput | Prisma.SortOrder;
    deliveredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    endpoint?: Prisma.WebhookEndpointOrderByWithRelationInput;
};
export type WebhookDeliveryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    endpointId_eventId?: Prisma.WebhookDeliveryEndpointIdEventIdCompoundUniqueInput;
    AND?: Prisma.WebhookDeliveryWhereInput | Prisma.WebhookDeliveryWhereInput[];
    OR?: Prisma.WebhookDeliveryWhereInput[];
    NOT?: Prisma.WebhookDeliveryWhereInput | Prisma.WebhookDeliveryWhereInput[];
    endpointId?: Prisma.StringFilter<"WebhookDelivery"> | string;
    eventType?: Prisma.StringFilter<"WebhookDelivery"> | string;
    eventId?: Prisma.StringFilter<"WebhookDelivery"> | string;
    payload?: Prisma.JsonFilter<"WebhookDelivery">;
    status?: Prisma.EnumDeliveryStatusFilter<"WebhookDelivery"> | $Enums.DeliveryStatus;
    attemptCount?: Prisma.IntFilter<"WebhookDelivery"> | number;
    nextAttemptAt?: Prisma.DateTimeFilter<"WebhookDelivery"> | Date | string;
    responseStatus?: Prisma.IntNullableFilter<"WebhookDelivery"> | number | null;
    responseBody?: Prisma.StringNullableFilter<"WebhookDelivery"> | string | null;
    lastError?: Prisma.StringNullableFilter<"WebhookDelivery"> | string | null;
    deliveredAt?: Prisma.DateTimeNullableFilter<"WebhookDelivery"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"WebhookDelivery"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"WebhookDelivery"> | Date | string;
    endpoint?: Prisma.XOR<Prisma.WebhookEndpointScalarRelationFilter, Prisma.WebhookEndpointWhereInput>;
}, "id" | "endpointId_eventId">;
export type WebhookDeliveryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    endpointId?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    payload?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    attemptCount?: Prisma.SortOrder;
    nextAttemptAt?: Prisma.SortOrder;
    responseStatus?: Prisma.SortOrderInput | Prisma.SortOrder;
    responseBody?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastError?: Prisma.SortOrderInput | Prisma.SortOrder;
    deliveredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.WebhookDeliveryCountOrderByAggregateInput;
    _avg?: Prisma.WebhookDeliveryAvgOrderByAggregateInput;
    _max?: Prisma.WebhookDeliveryMaxOrderByAggregateInput;
    _min?: Prisma.WebhookDeliveryMinOrderByAggregateInput;
    _sum?: Prisma.WebhookDeliverySumOrderByAggregateInput;
};
export type WebhookDeliveryScalarWhereWithAggregatesInput = {
    AND?: Prisma.WebhookDeliveryScalarWhereWithAggregatesInput | Prisma.WebhookDeliveryScalarWhereWithAggregatesInput[];
    OR?: Prisma.WebhookDeliveryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WebhookDeliveryScalarWhereWithAggregatesInput | Prisma.WebhookDeliveryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"WebhookDelivery"> | string;
    endpointId?: Prisma.StringWithAggregatesFilter<"WebhookDelivery"> | string;
    eventType?: Prisma.StringWithAggregatesFilter<"WebhookDelivery"> | string;
    eventId?: Prisma.StringWithAggregatesFilter<"WebhookDelivery"> | string;
    payload?: Prisma.JsonWithAggregatesFilter<"WebhookDelivery">;
    status?: Prisma.EnumDeliveryStatusWithAggregatesFilter<"WebhookDelivery"> | $Enums.DeliveryStatus;
    attemptCount?: Prisma.IntWithAggregatesFilter<"WebhookDelivery"> | number;
    nextAttemptAt?: Prisma.DateTimeWithAggregatesFilter<"WebhookDelivery"> | Date | string;
    responseStatus?: Prisma.IntNullableWithAggregatesFilter<"WebhookDelivery"> | number | null;
    responseBody?: Prisma.StringNullableWithAggregatesFilter<"WebhookDelivery"> | string | null;
    lastError?: Prisma.StringNullableWithAggregatesFilter<"WebhookDelivery"> | string | null;
    deliveredAt?: Prisma.DateTimeNullableWithAggregatesFilter<"WebhookDelivery"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"WebhookDelivery"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"WebhookDelivery"> | Date | string;
};
export type WebhookDeliveryCreateInput = {
    id?: string;
    eventType: string;
    eventId: string;
    payload: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.DeliveryStatus;
    attemptCount?: number;
    nextAttemptAt?: Date | string;
    responseStatus?: number | null;
    responseBody?: string | null;
    lastError?: string | null;
    deliveredAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    endpoint: Prisma.WebhookEndpointCreateNestedOneWithoutDeliveriesInput;
};
export type WebhookDeliveryUncheckedCreateInput = {
    id?: string;
    endpointId: string;
    eventType: string;
    eventId: string;
    payload: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.DeliveryStatus;
    attemptCount?: number;
    nextAttemptAt?: Date | string;
    responseStatus?: number | null;
    responseBody?: string | null;
    lastError?: string | null;
    deliveredAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type WebhookDeliveryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus;
    attemptCount?: Prisma.IntFieldUpdateOperationsInput | number;
    nextAttemptAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    responseStatus?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    responseBody?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastError?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endpoint?: Prisma.WebhookEndpointUpdateOneRequiredWithoutDeliveriesNestedInput;
};
export type WebhookDeliveryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    endpointId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus;
    attemptCount?: Prisma.IntFieldUpdateOperationsInput | number;
    nextAttemptAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    responseStatus?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    responseBody?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastError?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WebhookDeliveryCreateManyInput = {
    id?: string;
    endpointId: string;
    eventType: string;
    eventId: string;
    payload: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.DeliveryStatus;
    attemptCount?: number;
    nextAttemptAt?: Date | string;
    responseStatus?: number | null;
    responseBody?: string | null;
    lastError?: string | null;
    deliveredAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type WebhookDeliveryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus;
    attemptCount?: Prisma.IntFieldUpdateOperationsInput | number;
    nextAttemptAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    responseStatus?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    responseBody?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastError?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WebhookDeliveryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    endpointId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus;
    attemptCount?: Prisma.IntFieldUpdateOperationsInput | number;
    nextAttemptAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    responseStatus?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    responseBody?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastError?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WebhookDeliveryListRelationFilter = {
    every?: Prisma.WebhookDeliveryWhereInput;
    some?: Prisma.WebhookDeliveryWhereInput;
    none?: Prisma.WebhookDeliveryWhereInput;
};
export type WebhookDeliveryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type WebhookDeliveryEndpointIdEventIdCompoundUniqueInput = {
    endpointId: string;
    eventId: string;
};
export type WebhookDeliveryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    endpointId?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    payload?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    attemptCount?: Prisma.SortOrder;
    nextAttemptAt?: Prisma.SortOrder;
    responseStatus?: Prisma.SortOrder;
    responseBody?: Prisma.SortOrder;
    lastError?: Prisma.SortOrder;
    deliveredAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type WebhookDeliveryAvgOrderByAggregateInput = {
    attemptCount?: Prisma.SortOrder;
    responseStatus?: Prisma.SortOrder;
};
export type WebhookDeliveryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    endpointId?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    attemptCount?: Prisma.SortOrder;
    nextAttemptAt?: Prisma.SortOrder;
    responseStatus?: Prisma.SortOrder;
    responseBody?: Prisma.SortOrder;
    lastError?: Prisma.SortOrder;
    deliveredAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type WebhookDeliveryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    endpointId?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    attemptCount?: Prisma.SortOrder;
    nextAttemptAt?: Prisma.SortOrder;
    responseStatus?: Prisma.SortOrder;
    responseBody?: Prisma.SortOrder;
    lastError?: Prisma.SortOrder;
    deliveredAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type WebhookDeliverySumOrderByAggregateInput = {
    attemptCount?: Prisma.SortOrder;
    responseStatus?: Prisma.SortOrder;
};
export type WebhookDeliveryCreateNestedManyWithoutEndpointInput = {
    create?: Prisma.XOR<Prisma.WebhookDeliveryCreateWithoutEndpointInput, Prisma.WebhookDeliveryUncheckedCreateWithoutEndpointInput> | Prisma.WebhookDeliveryCreateWithoutEndpointInput[] | Prisma.WebhookDeliveryUncheckedCreateWithoutEndpointInput[];
    connectOrCreate?: Prisma.WebhookDeliveryCreateOrConnectWithoutEndpointInput | Prisma.WebhookDeliveryCreateOrConnectWithoutEndpointInput[];
    createMany?: Prisma.WebhookDeliveryCreateManyEndpointInputEnvelope;
    connect?: Prisma.WebhookDeliveryWhereUniqueInput | Prisma.WebhookDeliveryWhereUniqueInput[];
};
export type WebhookDeliveryUncheckedCreateNestedManyWithoutEndpointInput = {
    create?: Prisma.XOR<Prisma.WebhookDeliveryCreateWithoutEndpointInput, Prisma.WebhookDeliveryUncheckedCreateWithoutEndpointInput> | Prisma.WebhookDeliveryCreateWithoutEndpointInput[] | Prisma.WebhookDeliveryUncheckedCreateWithoutEndpointInput[];
    connectOrCreate?: Prisma.WebhookDeliveryCreateOrConnectWithoutEndpointInput | Prisma.WebhookDeliveryCreateOrConnectWithoutEndpointInput[];
    createMany?: Prisma.WebhookDeliveryCreateManyEndpointInputEnvelope;
    connect?: Prisma.WebhookDeliveryWhereUniqueInput | Prisma.WebhookDeliveryWhereUniqueInput[];
};
export type WebhookDeliveryUpdateManyWithoutEndpointNestedInput = {
    create?: Prisma.XOR<Prisma.WebhookDeliveryCreateWithoutEndpointInput, Prisma.WebhookDeliveryUncheckedCreateWithoutEndpointInput> | Prisma.WebhookDeliveryCreateWithoutEndpointInput[] | Prisma.WebhookDeliveryUncheckedCreateWithoutEndpointInput[];
    connectOrCreate?: Prisma.WebhookDeliveryCreateOrConnectWithoutEndpointInput | Prisma.WebhookDeliveryCreateOrConnectWithoutEndpointInput[];
    upsert?: Prisma.WebhookDeliveryUpsertWithWhereUniqueWithoutEndpointInput | Prisma.WebhookDeliveryUpsertWithWhereUniqueWithoutEndpointInput[];
    createMany?: Prisma.WebhookDeliveryCreateManyEndpointInputEnvelope;
    set?: Prisma.WebhookDeliveryWhereUniqueInput | Prisma.WebhookDeliveryWhereUniqueInput[];
    disconnect?: Prisma.WebhookDeliveryWhereUniqueInput | Prisma.WebhookDeliveryWhereUniqueInput[];
    delete?: Prisma.WebhookDeliveryWhereUniqueInput | Prisma.WebhookDeliveryWhereUniqueInput[];
    connect?: Prisma.WebhookDeliveryWhereUniqueInput | Prisma.WebhookDeliveryWhereUniqueInput[];
    update?: Prisma.WebhookDeliveryUpdateWithWhereUniqueWithoutEndpointInput | Prisma.WebhookDeliveryUpdateWithWhereUniqueWithoutEndpointInput[];
    updateMany?: Prisma.WebhookDeliveryUpdateManyWithWhereWithoutEndpointInput | Prisma.WebhookDeliveryUpdateManyWithWhereWithoutEndpointInput[];
    deleteMany?: Prisma.WebhookDeliveryScalarWhereInput | Prisma.WebhookDeliveryScalarWhereInput[];
};
export type WebhookDeliveryUncheckedUpdateManyWithoutEndpointNestedInput = {
    create?: Prisma.XOR<Prisma.WebhookDeliveryCreateWithoutEndpointInput, Prisma.WebhookDeliveryUncheckedCreateWithoutEndpointInput> | Prisma.WebhookDeliveryCreateWithoutEndpointInput[] | Prisma.WebhookDeliveryUncheckedCreateWithoutEndpointInput[];
    connectOrCreate?: Prisma.WebhookDeliveryCreateOrConnectWithoutEndpointInput | Prisma.WebhookDeliveryCreateOrConnectWithoutEndpointInput[];
    upsert?: Prisma.WebhookDeliveryUpsertWithWhereUniqueWithoutEndpointInput | Prisma.WebhookDeliveryUpsertWithWhereUniqueWithoutEndpointInput[];
    createMany?: Prisma.WebhookDeliveryCreateManyEndpointInputEnvelope;
    set?: Prisma.WebhookDeliveryWhereUniqueInput | Prisma.WebhookDeliveryWhereUniqueInput[];
    disconnect?: Prisma.WebhookDeliveryWhereUniqueInput | Prisma.WebhookDeliveryWhereUniqueInput[];
    delete?: Prisma.WebhookDeliveryWhereUniqueInput | Prisma.WebhookDeliveryWhereUniqueInput[];
    connect?: Prisma.WebhookDeliveryWhereUniqueInput | Prisma.WebhookDeliveryWhereUniqueInput[];
    update?: Prisma.WebhookDeliveryUpdateWithWhereUniqueWithoutEndpointInput | Prisma.WebhookDeliveryUpdateWithWhereUniqueWithoutEndpointInput[];
    updateMany?: Prisma.WebhookDeliveryUpdateManyWithWhereWithoutEndpointInput | Prisma.WebhookDeliveryUpdateManyWithWhereWithoutEndpointInput[];
    deleteMany?: Prisma.WebhookDeliveryScalarWhereInput | Prisma.WebhookDeliveryScalarWhereInput[];
};
export type WebhookDeliveryCreateWithoutEndpointInput = {
    id?: string;
    eventType: string;
    eventId: string;
    payload: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.DeliveryStatus;
    attemptCount?: number;
    nextAttemptAt?: Date | string;
    responseStatus?: number | null;
    responseBody?: string | null;
    lastError?: string | null;
    deliveredAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type WebhookDeliveryUncheckedCreateWithoutEndpointInput = {
    id?: string;
    eventType: string;
    eventId: string;
    payload: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.DeliveryStatus;
    attemptCount?: number;
    nextAttemptAt?: Date | string;
    responseStatus?: number | null;
    responseBody?: string | null;
    lastError?: string | null;
    deliveredAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type WebhookDeliveryCreateOrConnectWithoutEndpointInput = {
    where: Prisma.WebhookDeliveryWhereUniqueInput;
    create: Prisma.XOR<Prisma.WebhookDeliveryCreateWithoutEndpointInput, Prisma.WebhookDeliveryUncheckedCreateWithoutEndpointInput>;
};
export type WebhookDeliveryCreateManyEndpointInputEnvelope = {
    data: Prisma.WebhookDeliveryCreateManyEndpointInput | Prisma.WebhookDeliveryCreateManyEndpointInput[];
    skipDuplicates?: boolean;
};
export type WebhookDeliveryUpsertWithWhereUniqueWithoutEndpointInput = {
    where: Prisma.WebhookDeliveryWhereUniqueInput;
    update: Prisma.XOR<Prisma.WebhookDeliveryUpdateWithoutEndpointInput, Prisma.WebhookDeliveryUncheckedUpdateWithoutEndpointInput>;
    create: Prisma.XOR<Prisma.WebhookDeliveryCreateWithoutEndpointInput, Prisma.WebhookDeliveryUncheckedCreateWithoutEndpointInput>;
};
export type WebhookDeliveryUpdateWithWhereUniqueWithoutEndpointInput = {
    where: Prisma.WebhookDeliveryWhereUniqueInput;
    data: Prisma.XOR<Prisma.WebhookDeliveryUpdateWithoutEndpointInput, Prisma.WebhookDeliveryUncheckedUpdateWithoutEndpointInput>;
};
export type WebhookDeliveryUpdateManyWithWhereWithoutEndpointInput = {
    where: Prisma.WebhookDeliveryScalarWhereInput;
    data: Prisma.XOR<Prisma.WebhookDeliveryUpdateManyMutationInput, Prisma.WebhookDeliveryUncheckedUpdateManyWithoutEndpointInput>;
};
export type WebhookDeliveryScalarWhereInput = {
    AND?: Prisma.WebhookDeliveryScalarWhereInput | Prisma.WebhookDeliveryScalarWhereInput[];
    OR?: Prisma.WebhookDeliveryScalarWhereInput[];
    NOT?: Prisma.WebhookDeliveryScalarWhereInput | Prisma.WebhookDeliveryScalarWhereInput[];
    id?: Prisma.StringFilter<"WebhookDelivery"> | string;
    endpointId?: Prisma.StringFilter<"WebhookDelivery"> | string;
    eventType?: Prisma.StringFilter<"WebhookDelivery"> | string;
    eventId?: Prisma.StringFilter<"WebhookDelivery"> | string;
    payload?: Prisma.JsonFilter<"WebhookDelivery">;
    status?: Prisma.EnumDeliveryStatusFilter<"WebhookDelivery"> | $Enums.DeliveryStatus;
    attemptCount?: Prisma.IntFilter<"WebhookDelivery"> | number;
    nextAttemptAt?: Prisma.DateTimeFilter<"WebhookDelivery"> | Date | string;
    responseStatus?: Prisma.IntNullableFilter<"WebhookDelivery"> | number | null;
    responseBody?: Prisma.StringNullableFilter<"WebhookDelivery"> | string | null;
    lastError?: Prisma.StringNullableFilter<"WebhookDelivery"> | string | null;
    deliveredAt?: Prisma.DateTimeNullableFilter<"WebhookDelivery"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"WebhookDelivery"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"WebhookDelivery"> | Date | string;
};
export type WebhookDeliveryCreateManyEndpointInput = {
    id?: string;
    eventType: string;
    eventId: string;
    payload: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.DeliveryStatus;
    attemptCount?: number;
    nextAttemptAt?: Date | string;
    responseStatus?: number | null;
    responseBody?: string | null;
    lastError?: string | null;
    deliveredAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type WebhookDeliveryUpdateWithoutEndpointInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus;
    attemptCount?: Prisma.IntFieldUpdateOperationsInput | number;
    nextAttemptAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    responseStatus?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    responseBody?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastError?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WebhookDeliveryUncheckedUpdateWithoutEndpointInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus;
    attemptCount?: Prisma.IntFieldUpdateOperationsInput | number;
    nextAttemptAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    responseStatus?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    responseBody?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastError?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WebhookDeliveryUncheckedUpdateManyWithoutEndpointInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    payload?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus;
    attemptCount?: Prisma.IntFieldUpdateOperationsInput | number;
    nextAttemptAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    responseStatus?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    responseBody?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastError?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WebhookDeliverySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    endpointId?: boolean;
    eventType?: boolean;
    eventId?: boolean;
    payload?: boolean;
    status?: boolean;
    attemptCount?: boolean;
    nextAttemptAt?: boolean;
    responseStatus?: boolean;
    responseBody?: boolean;
    lastError?: boolean;
    deliveredAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    endpoint?: boolean | Prisma.WebhookEndpointDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["webhookDelivery"]>;
export type WebhookDeliverySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    endpointId?: boolean;
    eventType?: boolean;
    eventId?: boolean;
    payload?: boolean;
    status?: boolean;
    attemptCount?: boolean;
    nextAttemptAt?: boolean;
    responseStatus?: boolean;
    responseBody?: boolean;
    lastError?: boolean;
    deliveredAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    endpoint?: boolean | Prisma.WebhookEndpointDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["webhookDelivery"]>;
export type WebhookDeliverySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    endpointId?: boolean;
    eventType?: boolean;
    eventId?: boolean;
    payload?: boolean;
    status?: boolean;
    attemptCount?: boolean;
    nextAttemptAt?: boolean;
    responseStatus?: boolean;
    responseBody?: boolean;
    lastError?: boolean;
    deliveredAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    endpoint?: boolean | Prisma.WebhookEndpointDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["webhookDelivery"]>;
export type WebhookDeliverySelectScalar = {
    id?: boolean;
    endpointId?: boolean;
    eventType?: boolean;
    eventId?: boolean;
    payload?: boolean;
    status?: boolean;
    attemptCount?: boolean;
    nextAttemptAt?: boolean;
    responseStatus?: boolean;
    responseBody?: boolean;
    lastError?: boolean;
    deliveredAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type WebhookDeliveryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "endpointId" | "eventType" | "eventId" | "payload" | "status" | "attemptCount" | "nextAttemptAt" | "responseStatus" | "responseBody" | "lastError" | "deliveredAt" | "createdAt" | "updatedAt", ExtArgs["result"]["webhookDelivery"]>;
export type WebhookDeliveryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    endpoint?: boolean | Prisma.WebhookEndpointDefaultArgs<ExtArgs>;
};
export type WebhookDeliveryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    endpoint?: boolean | Prisma.WebhookEndpointDefaultArgs<ExtArgs>;
};
export type WebhookDeliveryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    endpoint?: boolean | Prisma.WebhookEndpointDefaultArgs<ExtArgs>;
};
export type $WebhookDeliveryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "WebhookDelivery";
    objects: {
        endpoint: Prisma.$WebhookEndpointPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        endpointId: string;
        eventType: string;
        eventId: string;
        payload: runtime.JsonValue;
        status: $Enums.DeliveryStatus;
        attemptCount: number;
        nextAttemptAt: Date;
        responseStatus: number | null;
        responseBody: string | null;
        lastError: string | null;
        deliveredAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["webhookDelivery"]>;
    composites: {};
};
export type WebhookDeliveryGetPayload<S extends boolean | null | undefined | WebhookDeliveryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WebhookDeliveryPayload, S>;
export type WebhookDeliveryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WebhookDeliveryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WebhookDeliveryCountAggregateInputType | true;
};
export interface WebhookDeliveryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['WebhookDelivery'];
        meta: {
            name: 'WebhookDelivery';
        };
    };
    findUnique<T extends WebhookDeliveryFindUniqueArgs>(args: Prisma.SelectSubset<T, WebhookDeliveryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WebhookDeliveryClient<runtime.Types.Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends WebhookDeliveryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WebhookDeliveryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WebhookDeliveryClient<runtime.Types.Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends WebhookDeliveryFindFirstArgs>(args?: Prisma.SelectSubset<T, WebhookDeliveryFindFirstArgs<ExtArgs>>): Prisma.Prisma__WebhookDeliveryClient<runtime.Types.Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends WebhookDeliveryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WebhookDeliveryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WebhookDeliveryClient<runtime.Types.Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends WebhookDeliveryFindManyArgs>(args?: Prisma.SelectSubset<T, WebhookDeliveryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends WebhookDeliveryCreateArgs>(args: Prisma.SelectSubset<T, WebhookDeliveryCreateArgs<ExtArgs>>): Prisma.Prisma__WebhookDeliveryClient<runtime.Types.Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends WebhookDeliveryCreateManyArgs>(args?: Prisma.SelectSubset<T, WebhookDeliveryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends WebhookDeliveryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WebhookDeliveryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends WebhookDeliveryDeleteArgs>(args: Prisma.SelectSubset<T, WebhookDeliveryDeleteArgs<ExtArgs>>): Prisma.Prisma__WebhookDeliveryClient<runtime.Types.Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends WebhookDeliveryUpdateArgs>(args: Prisma.SelectSubset<T, WebhookDeliveryUpdateArgs<ExtArgs>>): Prisma.Prisma__WebhookDeliveryClient<runtime.Types.Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends WebhookDeliveryDeleteManyArgs>(args?: Prisma.SelectSubset<T, WebhookDeliveryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends WebhookDeliveryUpdateManyArgs>(args: Prisma.SelectSubset<T, WebhookDeliveryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends WebhookDeliveryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WebhookDeliveryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends WebhookDeliveryUpsertArgs>(args: Prisma.SelectSubset<T, WebhookDeliveryUpsertArgs<ExtArgs>>): Prisma.Prisma__WebhookDeliveryClient<runtime.Types.Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends WebhookDeliveryCountArgs>(args?: Prisma.Subset<T, WebhookDeliveryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WebhookDeliveryCountAggregateOutputType> : number>;
    aggregate<T extends WebhookDeliveryAggregateArgs>(args: Prisma.Subset<T, WebhookDeliveryAggregateArgs>): Prisma.PrismaPromise<GetWebhookDeliveryAggregateType<T>>;
    groupBy<T extends WebhookDeliveryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WebhookDeliveryGroupByArgs['orderBy'];
    } : {
        orderBy?: WebhookDeliveryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WebhookDeliveryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebhookDeliveryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: WebhookDeliveryFieldRefs;
}
export interface Prisma__WebhookDeliveryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    endpoint<T extends Prisma.WebhookEndpointDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WebhookEndpointDefaultArgs<ExtArgs>>): Prisma.Prisma__WebhookEndpointClient<runtime.Types.Result.GetResult<Prisma.$WebhookEndpointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface WebhookDeliveryFieldRefs {
    readonly id: Prisma.FieldRef<"WebhookDelivery", 'String'>;
    readonly endpointId: Prisma.FieldRef<"WebhookDelivery", 'String'>;
    readonly eventType: Prisma.FieldRef<"WebhookDelivery", 'String'>;
    readonly eventId: Prisma.FieldRef<"WebhookDelivery", 'String'>;
    readonly payload: Prisma.FieldRef<"WebhookDelivery", 'Json'>;
    readonly status: Prisma.FieldRef<"WebhookDelivery", 'DeliveryStatus'>;
    readonly attemptCount: Prisma.FieldRef<"WebhookDelivery", 'Int'>;
    readonly nextAttemptAt: Prisma.FieldRef<"WebhookDelivery", 'DateTime'>;
    readonly responseStatus: Prisma.FieldRef<"WebhookDelivery", 'Int'>;
    readonly responseBody: Prisma.FieldRef<"WebhookDelivery", 'String'>;
    readonly lastError: Prisma.FieldRef<"WebhookDelivery", 'String'>;
    readonly deliveredAt: Prisma.FieldRef<"WebhookDelivery", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"WebhookDelivery", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"WebhookDelivery", 'DateTime'>;
}
export type WebhookDeliveryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebhookDeliverySelect<ExtArgs> | null;
    omit?: Prisma.WebhookDeliveryOmit<ExtArgs> | null;
    include?: Prisma.WebhookDeliveryInclude<ExtArgs> | null;
    where: Prisma.WebhookDeliveryWhereUniqueInput;
};
export type WebhookDeliveryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebhookDeliverySelect<ExtArgs> | null;
    omit?: Prisma.WebhookDeliveryOmit<ExtArgs> | null;
    include?: Prisma.WebhookDeliveryInclude<ExtArgs> | null;
    where: Prisma.WebhookDeliveryWhereUniqueInput;
};
export type WebhookDeliveryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebhookDeliverySelect<ExtArgs> | null;
    omit?: Prisma.WebhookDeliveryOmit<ExtArgs> | null;
    include?: Prisma.WebhookDeliveryInclude<ExtArgs> | null;
    where?: Prisma.WebhookDeliveryWhereInput;
    orderBy?: Prisma.WebhookDeliveryOrderByWithRelationInput | Prisma.WebhookDeliveryOrderByWithRelationInput[];
    cursor?: Prisma.WebhookDeliveryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WebhookDeliveryScalarFieldEnum | Prisma.WebhookDeliveryScalarFieldEnum[];
};
export type WebhookDeliveryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebhookDeliverySelect<ExtArgs> | null;
    omit?: Prisma.WebhookDeliveryOmit<ExtArgs> | null;
    include?: Prisma.WebhookDeliveryInclude<ExtArgs> | null;
    where?: Prisma.WebhookDeliveryWhereInput;
    orderBy?: Prisma.WebhookDeliveryOrderByWithRelationInput | Prisma.WebhookDeliveryOrderByWithRelationInput[];
    cursor?: Prisma.WebhookDeliveryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WebhookDeliveryScalarFieldEnum | Prisma.WebhookDeliveryScalarFieldEnum[];
};
export type WebhookDeliveryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebhookDeliverySelect<ExtArgs> | null;
    omit?: Prisma.WebhookDeliveryOmit<ExtArgs> | null;
    include?: Prisma.WebhookDeliveryInclude<ExtArgs> | null;
    where?: Prisma.WebhookDeliveryWhereInput;
    orderBy?: Prisma.WebhookDeliveryOrderByWithRelationInput | Prisma.WebhookDeliveryOrderByWithRelationInput[];
    cursor?: Prisma.WebhookDeliveryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WebhookDeliveryScalarFieldEnum | Prisma.WebhookDeliveryScalarFieldEnum[];
};
export type WebhookDeliveryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebhookDeliverySelect<ExtArgs> | null;
    omit?: Prisma.WebhookDeliveryOmit<ExtArgs> | null;
    include?: Prisma.WebhookDeliveryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WebhookDeliveryCreateInput, Prisma.WebhookDeliveryUncheckedCreateInput>;
};
export type WebhookDeliveryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.WebhookDeliveryCreateManyInput | Prisma.WebhookDeliveryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WebhookDeliveryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebhookDeliverySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WebhookDeliveryOmit<ExtArgs> | null;
    data: Prisma.WebhookDeliveryCreateManyInput | Prisma.WebhookDeliveryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.WebhookDeliveryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type WebhookDeliveryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebhookDeliverySelect<ExtArgs> | null;
    omit?: Prisma.WebhookDeliveryOmit<ExtArgs> | null;
    include?: Prisma.WebhookDeliveryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WebhookDeliveryUpdateInput, Prisma.WebhookDeliveryUncheckedUpdateInput>;
    where: Prisma.WebhookDeliveryWhereUniqueInput;
};
export type WebhookDeliveryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.WebhookDeliveryUpdateManyMutationInput, Prisma.WebhookDeliveryUncheckedUpdateManyInput>;
    where?: Prisma.WebhookDeliveryWhereInput;
    limit?: number;
};
export type WebhookDeliveryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebhookDeliverySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WebhookDeliveryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WebhookDeliveryUpdateManyMutationInput, Prisma.WebhookDeliveryUncheckedUpdateManyInput>;
    where?: Prisma.WebhookDeliveryWhereInput;
    limit?: number;
    include?: Prisma.WebhookDeliveryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type WebhookDeliveryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebhookDeliverySelect<ExtArgs> | null;
    omit?: Prisma.WebhookDeliveryOmit<ExtArgs> | null;
    include?: Prisma.WebhookDeliveryInclude<ExtArgs> | null;
    where: Prisma.WebhookDeliveryWhereUniqueInput;
    create: Prisma.XOR<Prisma.WebhookDeliveryCreateInput, Prisma.WebhookDeliveryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.WebhookDeliveryUpdateInput, Prisma.WebhookDeliveryUncheckedUpdateInput>;
};
export type WebhookDeliveryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebhookDeliverySelect<ExtArgs> | null;
    omit?: Prisma.WebhookDeliveryOmit<ExtArgs> | null;
    include?: Prisma.WebhookDeliveryInclude<ExtArgs> | null;
    where: Prisma.WebhookDeliveryWhereUniqueInput;
};
export type WebhookDeliveryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WebhookDeliveryWhereInput;
    limit?: number;
};
export type WebhookDeliveryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebhookDeliverySelect<ExtArgs> | null;
    omit?: Prisma.WebhookDeliveryOmit<ExtArgs> | null;
    include?: Prisma.WebhookDeliveryInclude<ExtArgs> | null;
};
