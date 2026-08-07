import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type WebhookEndpointModel = runtime.Types.Result.DefaultSelection<Prisma.$WebhookEndpointPayload>;
export type AggregateWebhookEndpoint = {
    _count: WebhookEndpointCountAggregateOutputType | null;
    _avg: WebhookEndpointAvgAggregateOutputType | null;
    _sum: WebhookEndpointSumAggregateOutputType | null;
    _min: WebhookEndpointMinAggregateOutputType | null;
    _max: WebhookEndpointMaxAggregateOutputType | null;
};
export type WebhookEndpointAvgAggregateOutputType = {
    failureCount: number | null;
};
export type WebhookEndpointSumAggregateOutputType = {
    failureCount: number | null;
};
export type WebhookEndpointMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    url: string | null;
    secretCiphertext: string | null;
    active: boolean | null;
    failureCount: number | null;
    lastDeliveredAt: Date | null;
    lastFailedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type WebhookEndpointMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    url: string | null;
    secretCiphertext: string | null;
    active: boolean | null;
    failureCount: number | null;
    lastDeliveredAt: Date | null;
    lastFailedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type WebhookEndpointCountAggregateOutputType = {
    id: number;
    name: number;
    url: number;
    secretCiphertext: number;
    events: number;
    active: number;
    failureCount: number;
    lastDeliveredAt: number;
    lastFailedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type WebhookEndpointAvgAggregateInputType = {
    failureCount?: true;
};
export type WebhookEndpointSumAggregateInputType = {
    failureCount?: true;
};
export type WebhookEndpointMinAggregateInputType = {
    id?: true;
    name?: true;
    url?: true;
    secretCiphertext?: true;
    active?: true;
    failureCount?: true;
    lastDeliveredAt?: true;
    lastFailedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type WebhookEndpointMaxAggregateInputType = {
    id?: true;
    name?: true;
    url?: true;
    secretCiphertext?: true;
    active?: true;
    failureCount?: true;
    lastDeliveredAt?: true;
    lastFailedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type WebhookEndpointCountAggregateInputType = {
    id?: true;
    name?: true;
    url?: true;
    secretCiphertext?: true;
    events?: true;
    active?: true;
    failureCount?: true;
    lastDeliveredAt?: true;
    lastFailedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type WebhookEndpointAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WebhookEndpointWhereInput;
    orderBy?: Prisma.WebhookEndpointOrderByWithRelationInput | Prisma.WebhookEndpointOrderByWithRelationInput[];
    cursor?: Prisma.WebhookEndpointWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | WebhookEndpointCountAggregateInputType;
    _avg?: WebhookEndpointAvgAggregateInputType;
    _sum?: WebhookEndpointSumAggregateInputType;
    _min?: WebhookEndpointMinAggregateInputType;
    _max?: WebhookEndpointMaxAggregateInputType;
};
export type GetWebhookEndpointAggregateType<T extends WebhookEndpointAggregateArgs> = {
    [P in keyof T & keyof AggregateWebhookEndpoint]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWebhookEndpoint[P]> : Prisma.GetScalarType<T[P], AggregateWebhookEndpoint[P]>;
};
export type WebhookEndpointGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WebhookEndpointWhereInput;
    orderBy?: Prisma.WebhookEndpointOrderByWithAggregationInput | Prisma.WebhookEndpointOrderByWithAggregationInput[];
    by: Prisma.WebhookEndpointScalarFieldEnum[] | Prisma.WebhookEndpointScalarFieldEnum;
    having?: Prisma.WebhookEndpointScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WebhookEndpointCountAggregateInputType | true;
    _avg?: WebhookEndpointAvgAggregateInputType;
    _sum?: WebhookEndpointSumAggregateInputType;
    _min?: WebhookEndpointMinAggregateInputType;
    _max?: WebhookEndpointMaxAggregateInputType;
};
export type WebhookEndpointGroupByOutputType = {
    id: string;
    name: string;
    url: string;
    secretCiphertext: string;
    events: string[];
    active: boolean;
    failureCount: number;
    lastDeliveredAt: Date | null;
    lastFailedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: WebhookEndpointCountAggregateOutputType | null;
    _avg: WebhookEndpointAvgAggregateOutputType | null;
    _sum: WebhookEndpointSumAggregateOutputType | null;
    _min: WebhookEndpointMinAggregateOutputType | null;
    _max: WebhookEndpointMaxAggregateOutputType | null;
};
export type GetWebhookEndpointGroupByPayload<T extends WebhookEndpointGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WebhookEndpointGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WebhookEndpointGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WebhookEndpointGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WebhookEndpointGroupByOutputType[P]>;
}>>;
export type WebhookEndpointWhereInput = {
    AND?: Prisma.WebhookEndpointWhereInput | Prisma.WebhookEndpointWhereInput[];
    OR?: Prisma.WebhookEndpointWhereInput[];
    NOT?: Prisma.WebhookEndpointWhereInput | Prisma.WebhookEndpointWhereInput[];
    id?: Prisma.StringFilter<"WebhookEndpoint"> | string;
    name?: Prisma.StringFilter<"WebhookEndpoint"> | string;
    url?: Prisma.StringFilter<"WebhookEndpoint"> | string;
    secretCiphertext?: Prisma.StringFilter<"WebhookEndpoint"> | string;
    events?: Prisma.StringNullableListFilter<"WebhookEndpoint">;
    active?: Prisma.BoolFilter<"WebhookEndpoint"> | boolean;
    failureCount?: Prisma.IntFilter<"WebhookEndpoint"> | number;
    lastDeliveredAt?: Prisma.DateTimeNullableFilter<"WebhookEndpoint"> | Date | string | null;
    lastFailedAt?: Prisma.DateTimeNullableFilter<"WebhookEndpoint"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"WebhookEndpoint"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"WebhookEndpoint"> | Date | string;
    deliveries?: Prisma.WebhookDeliveryListRelationFilter;
};
export type WebhookEndpointOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    secretCiphertext?: Prisma.SortOrder;
    events?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    failureCount?: Prisma.SortOrder;
    lastDeliveredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastFailedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deliveries?: Prisma.WebhookDeliveryOrderByRelationAggregateInput;
};
export type WebhookEndpointWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.WebhookEndpointWhereInput | Prisma.WebhookEndpointWhereInput[];
    OR?: Prisma.WebhookEndpointWhereInput[];
    NOT?: Prisma.WebhookEndpointWhereInput | Prisma.WebhookEndpointWhereInput[];
    name?: Prisma.StringFilter<"WebhookEndpoint"> | string;
    url?: Prisma.StringFilter<"WebhookEndpoint"> | string;
    secretCiphertext?: Prisma.StringFilter<"WebhookEndpoint"> | string;
    events?: Prisma.StringNullableListFilter<"WebhookEndpoint">;
    active?: Prisma.BoolFilter<"WebhookEndpoint"> | boolean;
    failureCount?: Prisma.IntFilter<"WebhookEndpoint"> | number;
    lastDeliveredAt?: Prisma.DateTimeNullableFilter<"WebhookEndpoint"> | Date | string | null;
    lastFailedAt?: Prisma.DateTimeNullableFilter<"WebhookEndpoint"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"WebhookEndpoint"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"WebhookEndpoint"> | Date | string;
    deliveries?: Prisma.WebhookDeliveryListRelationFilter;
}, "id">;
export type WebhookEndpointOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    secretCiphertext?: Prisma.SortOrder;
    events?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    failureCount?: Prisma.SortOrder;
    lastDeliveredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastFailedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.WebhookEndpointCountOrderByAggregateInput;
    _avg?: Prisma.WebhookEndpointAvgOrderByAggregateInput;
    _max?: Prisma.WebhookEndpointMaxOrderByAggregateInput;
    _min?: Prisma.WebhookEndpointMinOrderByAggregateInput;
    _sum?: Prisma.WebhookEndpointSumOrderByAggregateInput;
};
export type WebhookEndpointScalarWhereWithAggregatesInput = {
    AND?: Prisma.WebhookEndpointScalarWhereWithAggregatesInput | Prisma.WebhookEndpointScalarWhereWithAggregatesInput[];
    OR?: Prisma.WebhookEndpointScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WebhookEndpointScalarWhereWithAggregatesInput | Prisma.WebhookEndpointScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"WebhookEndpoint"> | string;
    name?: Prisma.StringWithAggregatesFilter<"WebhookEndpoint"> | string;
    url?: Prisma.StringWithAggregatesFilter<"WebhookEndpoint"> | string;
    secretCiphertext?: Prisma.StringWithAggregatesFilter<"WebhookEndpoint"> | string;
    events?: Prisma.StringNullableListFilter<"WebhookEndpoint">;
    active?: Prisma.BoolWithAggregatesFilter<"WebhookEndpoint"> | boolean;
    failureCount?: Prisma.IntWithAggregatesFilter<"WebhookEndpoint"> | number;
    lastDeliveredAt?: Prisma.DateTimeNullableWithAggregatesFilter<"WebhookEndpoint"> | Date | string | null;
    lastFailedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"WebhookEndpoint"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"WebhookEndpoint"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"WebhookEndpoint"> | Date | string;
};
export type WebhookEndpointCreateInput = {
    id?: string;
    name: string;
    url: string;
    secretCiphertext: string;
    events?: Prisma.WebhookEndpointCreateeventsInput | string[];
    active?: boolean;
    failureCount?: number;
    lastDeliveredAt?: Date | string | null;
    lastFailedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deliveries?: Prisma.WebhookDeliveryCreateNestedManyWithoutEndpointInput;
};
export type WebhookEndpointUncheckedCreateInput = {
    id?: string;
    name: string;
    url: string;
    secretCiphertext: string;
    events?: Prisma.WebhookEndpointCreateeventsInput | string[];
    active?: boolean;
    failureCount?: number;
    lastDeliveredAt?: Date | string | null;
    lastFailedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deliveries?: Prisma.WebhookDeliveryUncheckedCreateNestedManyWithoutEndpointInput;
};
export type WebhookEndpointUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    secretCiphertext?: Prisma.StringFieldUpdateOperationsInput | string;
    events?: Prisma.WebhookEndpointUpdateeventsInput | string[];
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    failureCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastDeliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastFailedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deliveries?: Prisma.WebhookDeliveryUpdateManyWithoutEndpointNestedInput;
};
export type WebhookEndpointUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    secretCiphertext?: Prisma.StringFieldUpdateOperationsInput | string;
    events?: Prisma.WebhookEndpointUpdateeventsInput | string[];
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    failureCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastDeliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastFailedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deliveries?: Prisma.WebhookDeliveryUncheckedUpdateManyWithoutEndpointNestedInput;
};
export type WebhookEndpointCreateManyInput = {
    id?: string;
    name: string;
    url: string;
    secretCiphertext: string;
    events?: Prisma.WebhookEndpointCreateeventsInput | string[];
    active?: boolean;
    failureCount?: number;
    lastDeliveredAt?: Date | string | null;
    lastFailedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type WebhookEndpointUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    secretCiphertext?: Prisma.StringFieldUpdateOperationsInput | string;
    events?: Prisma.WebhookEndpointUpdateeventsInput | string[];
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    failureCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastDeliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastFailedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WebhookEndpointUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    secretCiphertext?: Prisma.StringFieldUpdateOperationsInput | string;
    events?: Prisma.WebhookEndpointUpdateeventsInput | string[];
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    failureCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastDeliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastFailedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WebhookEndpointCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    secretCiphertext?: Prisma.SortOrder;
    events?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    failureCount?: Prisma.SortOrder;
    lastDeliveredAt?: Prisma.SortOrder;
    lastFailedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type WebhookEndpointAvgOrderByAggregateInput = {
    failureCount?: Prisma.SortOrder;
};
export type WebhookEndpointMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    secretCiphertext?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    failureCount?: Prisma.SortOrder;
    lastDeliveredAt?: Prisma.SortOrder;
    lastFailedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type WebhookEndpointMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    secretCiphertext?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    failureCount?: Prisma.SortOrder;
    lastDeliveredAt?: Prisma.SortOrder;
    lastFailedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type WebhookEndpointSumOrderByAggregateInput = {
    failureCount?: Prisma.SortOrder;
};
export type WebhookEndpointScalarRelationFilter = {
    is?: Prisma.WebhookEndpointWhereInput;
    isNot?: Prisma.WebhookEndpointWhereInput;
};
export type WebhookEndpointCreateeventsInput = {
    set: string[];
};
export type WebhookEndpointUpdateeventsInput = {
    set?: string[];
    push?: string | string[];
};
export type WebhookEndpointCreateNestedOneWithoutDeliveriesInput = {
    create?: Prisma.XOR<Prisma.WebhookEndpointCreateWithoutDeliveriesInput, Prisma.WebhookEndpointUncheckedCreateWithoutDeliveriesInput>;
    connectOrCreate?: Prisma.WebhookEndpointCreateOrConnectWithoutDeliveriesInput;
    connect?: Prisma.WebhookEndpointWhereUniqueInput;
};
export type WebhookEndpointUpdateOneRequiredWithoutDeliveriesNestedInput = {
    create?: Prisma.XOR<Prisma.WebhookEndpointCreateWithoutDeliveriesInput, Prisma.WebhookEndpointUncheckedCreateWithoutDeliveriesInput>;
    connectOrCreate?: Prisma.WebhookEndpointCreateOrConnectWithoutDeliveriesInput;
    upsert?: Prisma.WebhookEndpointUpsertWithoutDeliveriesInput;
    connect?: Prisma.WebhookEndpointWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.WebhookEndpointUpdateToOneWithWhereWithoutDeliveriesInput, Prisma.WebhookEndpointUpdateWithoutDeliveriesInput>, Prisma.WebhookEndpointUncheckedUpdateWithoutDeliveriesInput>;
};
export type WebhookEndpointCreateWithoutDeliveriesInput = {
    id?: string;
    name: string;
    url: string;
    secretCiphertext: string;
    events?: Prisma.WebhookEndpointCreateeventsInput | string[];
    active?: boolean;
    failureCount?: number;
    lastDeliveredAt?: Date | string | null;
    lastFailedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type WebhookEndpointUncheckedCreateWithoutDeliveriesInput = {
    id?: string;
    name: string;
    url: string;
    secretCiphertext: string;
    events?: Prisma.WebhookEndpointCreateeventsInput | string[];
    active?: boolean;
    failureCount?: number;
    lastDeliveredAt?: Date | string | null;
    lastFailedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type WebhookEndpointCreateOrConnectWithoutDeliveriesInput = {
    where: Prisma.WebhookEndpointWhereUniqueInput;
    create: Prisma.XOR<Prisma.WebhookEndpointCreateWithoutDeliveriesInput, Prisma.WebhookEndpointUncheckedCreateWithoutDeliveriesInput>;
};
export type WebhookEndpointUpsertWithoutDeliveriesInput = {
    update: Prisma.XOR<Prisma.WebhookEndpointUpdateWithoutDeliveriesInput, Prisma.WebhookEndpointUncheckedUpdateWithoutDeliveriesInput>;
    create: Prisma.XOR<Prisma.WebhookEndpointCreateWithoutDeliveriesInput, Prisma.WebhookEndpointUncheckedCreateWithoutDeliveriesInput>;
    where?: Prisma.WebhookEndpointWhereInput;
};
export type WebhookEndpointUpdateToOneWithWhereWithoutDeliveriesInput = {
    where?: Prisma.WebhookEndpointWhereInput;
    data: Prisma.XOR<Prisma.WebhookEndpointUpdateWithoutDeliveriesInput, Prisma.WebhookEndpointUncheckedUpdateWithoutDeliveriesInput>;
};
export type WebhookEndpointUpdateWithoutDeliveriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    secretCiphertext?: Prisma.StringFieldUpdateOperationsInput | string;
    events?: Prisma.WebhookEndpointUpdateeventsInput | string[];
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    failureCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastDeliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastFailedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WebhookEndpointUncheckedUpdateWithoutDeliveriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    secretCiphertext?: Prisma.StringFieldUpdateOperationsInput | string;
    events?: Prisma.WebhookEndpointUpdateeventsInput | string[];
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    failureCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastDeliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastFailedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WebhookEndpointCountOutputType = {
    deliveries: number;
};
export type WebhookEndpointCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    deliveries?: boolean | WebhookEndpointCountOutputTypeCountDeliveriesArgs;
};
export type WebhookEndpointCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebhookEndpointCountOutputTypeSelect<ExtArgs> | null;
};
export type WebhookEndpointCountOutputTypeCountDeliveriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WebhookDeliveryWhereInput;
};
export type WebhookEndpointSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    url?: boolean;
    secretCiphertext?: boolean;
    events?: boolean;
    active?: boolean;
    failureCount?: boolean;
    lastDeliveredAt?: boolean;
    lastFailedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deliveries?: boolean | Prisma.WebhookEndpoint$deliveriesArgs<ExtArgs>;
    _count?: boolean | Prisma.WebhookEndpointCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["webhookEndpoint"]>;
export type WebhookEndpointSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    url?: boolean;
    secretCiphertext?: boolean;
    events?: boolean;
    active?: boolean;
    failureCount?: boolean;
    lastDeliveredAt?: boolean;
    lastFailedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["webhookEndpoint"]>;
export type WebhookEndpointSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    url?: boolean;
    secretCiphertext?: boolean;
    events?: boolean;
    active?: boolean;
    failureCount?: boolean;
    lastDeliveredAt?: boolean;
    lastFailedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["webhookEndpoint"]>;
export type WebhookEndpointSelectScalar = {
    id?: boolean;
    name?: boolean;
    url?: boolean;
    secretCiphertext?: boolean;
    events?: boolean;
    active?: boolean;
    failureCount?: boolean;
    lastDeliveredAt?: boolean;
    lastFailedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type WebhookEndpointOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "url" | "secretCiphertext" | "events" | "active" | "failureCount" | "lastDeliveredAt" | "lastFailedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["webhookEndpoint"]>;
export type WebhookEndpointInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    deliveries?: boolean | Prisma.WebhookEndpoint$deliveriesArgs<ExtArgs>;
    _count?: boolean | Prisma.WebhookEndpointCountOutputTypeDefaultArgs<ExtArgs>;
};
export type WebhookEndpointIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type WebhookEndpointIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $WebhookEndpointPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "WebhookEndpoint";
    objects: {
        deliveries: Prisma.$WebhookDeliveryPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        url: string;
        secretCiphertext: string;
        events: string[];
        active: boolean;
        failureCount: number;
        lastDeliveredAt: Date | null;
        lastFailedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["webhookEndpoint"]>;
    composites: {};
};
export type WebhookEndpointGetPayload<S extends boolean | null | undefined | WebhookEndpointDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WebhookEndpointPayload, S>;
export type WebhookEndpointCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WebhookEndpointFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WebhookEndpointCountAggregateInputType | true;
};
export interface WebhookEndpointDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['WebhookEndpoint'];
        meta: {
            name: 'WebhookEndpoint';
        };
    };
    findUnique<T extends WebhookEndpointFindUniqueArgs>(args: Prisma.SelectSubset<T, WebhookEndpointFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WebhookEndpointClient<runtime.Types.Result.GetResult<Prisma.$WebhookEndpointPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends WebhookEndpointFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WebhookEndpointFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WebhookEndpointClient<runtime.Types.Result.GetResult<Prisma.$WebhookEndpointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends WebhookEndpointFindFirstArgs>(args?: Prisma.SelectSubset<T, WebhookEndpointFindFirstArgs<ExtArgs>>): Prisma.Prisma__WebhookEndpointClient<runtime.Types.Result.GetResult<Prisma.$WebhookEndpointPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends WebhookEndpointFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WebhookEndpointFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WebhookEndpointClient<runtime.Types.Result.GetResult<Prisma.$WebhookEndpointPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends WebhookEndpointFindManyArgs>(args?: Prisma.SelectSubset<T, WebhookEndpointFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WebhookEndpointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends WebhookEndpointCreateArgs>(args: Prisma.SelectSubset<T, WebhookEndpointCreateArgs<ExtArgs>>): Prisma.Prisma__WebhookEndpointClient<runtime.Types.Result.GetResult<Prisma.$WebhookEndpointPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends WebhookEndpointCreateManyArgs>(args?: Prisma.SelectSubset<T, WebhookEndpointCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends WebhookEndpointCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WebhookEndpointCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WebhookEndpointPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends WebhookEndpointDeleteArgs>(args: Prisma.SelectSubset<T, WebhookEndpointDeleteArgs<ExtArgs>>): Prisma.Prisma__WebhookEndpointClient<runtime.Types.Result.GetResult<Prisma.$WebhookEndpointPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends WebhookEndpointUpdateArgs>(args: Prisma.SelectSubset<T, WebhookEndpointUpdateArgs<ExtArgs>>): Prisma.Prisma__WebhookEndpointClient<runtime.Types.Result.GetResult<Prisma.$WebhookEndpointPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends WebhookEndpointDeleteManyArgs>(args?: Prisma.SelectSubset<T, WebhookEndpointDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends WebhookEndpointUpdateManyArgs>(args: Prisma.SelectSubset<T, WebhookEndpointUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends WebhookEndpointUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WebhookEndpointUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WebhookEndpointPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends WebhookEndpointUpsertArgs>(args: Prisma.SelectSubset<T, WebhookEndpointUpsertArgs<ExtArgs>>): Prisma.Prisma__WebhookEndpointClient<runtime.Types.Result.GetResult<Prisma.$WebhookEndpointPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends WebhookEndpointCountArgs>(args?: Prisma.Subset<T, WebhookEndpointCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WebhookEndpointCountAggregateOutputType> : number>;
    aggregate<T extends WebhookEndpointAggregateArgs>(args: Prisma.Subset<T, WebhookEndpointAggregateArgs>): Prisma.PrismaPromise<GetWebhookEndpointAggregateType<T>>;
    groupBy<T extends WebhookEndpointGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WebhookEndpointGroupByArgs['orderBy'];
    } : {
        orderBy?: WebhookEndpointGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WebhookEndpointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebhookEndpointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: WebhookEndpointFieldRefs;
}
export interface Prisma__WebhookEndpointClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    deliveries<T extends Prisma.WebhookEndpoint$deliveriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WebhookEndpoint$deliveriesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface WebhookEndpointFieldRefs {
    readonly id: Prisma.FieldRef<"WebhookEndpoint", 'String'>;
    readonly name: Prisma.FieldRef<"WebhookEndpoint", 'String'>;
    readonly url: Prisma.FieldRef<"WebhookEndpoint", 'String'>;
    readonly secretCiphertext: Prisma.FieldRef<"WebhookEndpoint", 'String'>;
    readonly events: Prisma.FieldRef<"WebhookEndpoint", 'String[]'>;
    readonly active: Prisma.FieldRef<"WebhookEndpoint", 'Boolean'>;
    readonly failureCount: Prisma.FieldRef<"WebhookEndpoint", 'Int'>;
    readonly lastDeliveredAt: Prisma.FieldRef<"WebhookEndpoint", 'DateTime'>;
    readonly lastFailedAt: Prisma.FieldRef<"WebhookEndpoint", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"WebhookEndpoint", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"WebhookEndpoint", 'DateTime'>;
}
export type WebhookEndpointFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebhookEndpointSelect<ExtArgs> | null;
    omit?: Prisma.WebhookEndpointOmit<ExtArgs> | null;
    include?: Prisma.WebhookEndpointInclude<ExtArgs> | null;
    where: Prisma.WebhookEndpointWhereUniqueInput;
};
export type WebhookEndpointFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebhookEndpointSelect<ExtArgs> | null;
    omit?: Prisma.WebhookEndpointOmit<ExtArgs> | null;
    include?: Prisma.WebhookEndpointInclude<ExtArgs> | null;
    where: Prisma.WebhookEndpointWhereUniqueInput;
};
export type WebhookEndpointFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebhookEndpointSelect<ExtArgs> | null;
    omit?: Prisma.WebhookEndpointOmit<ExtArgs> | null;
    include?: Prisma.WebhookEndpointInclude<ExtArgs> | null;
    where?: Prisma.WebhookEndpointWhereInput;
    orderBy?: Prisma.WebhookEndpointOrderByWithRelationInput | Prisma.WebhookEndpointOrderByWithRelationInput[];
    cursor?: Prisma.WebhookEndpointWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WebhookEndpointScalarFieldEnum | Prisma.WebhookEndpointScalarFieldEnum[];
};
export type WebhookEndpointFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebhookEndpointSelect<ExtArgs> | null;
    omit?: Prisma.WebhookEndpointOmit<ExtArgs> | null;
    include?: Prisma.WebhookEndpointInclude<ExtArgs> | null;
    where?: Prisma.WebhookEndpointWhereInput;
    orderBy?: Prisma.WebhookEndpointOrderByWithRelationInput | Prisma.WebhookEndpointOrderByWithRelationInput[];
    cursor?: Prisma.WebhookEndpointWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WebhookEndpointScalarFieldEnum | Prisma.WebhookEndpointScalarFieldEnum[];
};
export type WebhookEndpointFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebhookEndpointSelect<ExtArgs> | null;
    omit?: Prisma.WebhookEndpointOmit<ExtArgs> | null;
    include?: Prisma.WebhookEndpointInclude<ExtArgs> | null;
    where?: Prisma.WebhookEndpointWhereInput;
    orderBy?: Prisma.WebhookEndpointOrderByWithRelationInput | Prisma.WebhookEndpointOrderByWithRelationInput[];
    cursor?: Prisma.WebhookEndpointWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WebhookEndpointScalarFieldEnum | Prisma.WebhookEndpointScalarFieldEnum[];
};
export type WebhookEndpointCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebhookEndpointSelect<ExtArgs> | null;
    omit?: Prisma.WebhookEndpointOmit<ExtArgs> | null;
    include?: Prisma.WebhookEndpointInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WebhookEndpointCreateInput, Prisma.WebhookEndpointUncheckedCreateInput>;
};
export type WebhookEndpointCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.WebhookEndpointCreateManyInput | Prisma.WebhookEndpointCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WebhookEndpointCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebhookEndpointSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WebhookEndpointOmit<ExtArgs> | null;
    data: Prisma.WebhookEndpointCreateManyInput | Prisma.WebhookEndpointCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WebhookEndpointUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebhookEndpointSelect<ExtArgs> | null;
    omit?: Prisma.WebhookEndpointOmit<ExtArgs> | null;
    include?: Prisma.WebhookEndpointInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WebhookEndpointUpdateInput, Prisma.WebhookEndpointUncheckedUpdateInput>;
    where: Prisma.WebhookEndpointWhereUniqueInput;
};
export type WebhookEndpointUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.WebhookEndpointUpdateManyMutationInput, Prisma.WebhookEndpointUncheckedUpdateManyInput>;
    where?: Prisma.WebhookEndpointWhereInput;
    limit?: number;
};
export type WebhookEndpointUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebhookEndpointSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WebhookEndpointOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WebhookEndpointUpdateManyMutationInput, Prisma.WebhookEndpointUncheckedUpdateManyInput>;
    where?: Prisma.WebhookEndpointWhereInput;
    limit?: number;
};
export type WebhookEndpointUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebhookEndpointSelect<ExtArgs> | null;
    omit?: Prisma.WebhookEndpointOmit<ExtArgs> | null;
    include?: Prisma.WebhookEndpointInclude<ExtArgs> | null;
    where: Prisma.WebhookEndpointWhereUniqueInput;
    create: Prisma.XOR<Prisma.WebhookEndpointCreateInput, Prisma.WebhookEndpointUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.WebhookEndpointUpdateInput, Prisma.WebhookEndpointUncheckedUpdateInput>;
};
export type WebhookEndpointDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebhookEndpointSelect<ExtArgs> | null;
    omit?: Prisma.WebhookEndpointOmit<ExtArgs> | null;
    include?: Prisma.WebhookEndpointInclude<ExtArgs> | null;
    where: Prisma.WebhookEndpointWhereUniqueInput;
};
export type WebhookEndpointDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WebhookEndpointWhereInput;
    limit?: number;
};
export type WebhookEndpoint$deliveriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type WebhookEndpointDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebhookEndpointSelect<ExtArgs> | null;
    omit?: Prisma.WebhookEndpointOmit<ExtArgs> | null;
    include?: Prisma.WebhookEndpointInclude<ExtArgs> | null;
};
