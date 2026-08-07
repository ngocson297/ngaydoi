import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EmailOutboxModel = runtime.Types.Result.DefaultSelection<Prisma.$EmailOutboxPayload>;
export type AggregateEmailOutbox = {
    _count: EmailOutboxCountAggregateOutputType | null;
    _avg: EmailOutboxAvgAggregateOutputType | null;
    _sum: EmailOutboxSumAggregateOutputType | null;
    _min: EmailOutboxMinAggregateOutputType | null;
    _max: EmailOutboxMaxAggregateOutputType | null;
};
export type EmailOutboxAvgAggregateOutputType = {
    attemptCount: number | null;
};
export type EmailOutboxSumAggregateOutputType = {
    attemptCount: number | null;
};
export type EmailOutboxMinAggregateOutputType = {
    id: string | null;
    recipient: string | null;
    subject: string | null;
    htmlBody: string | null;
    textBody: string | null;
    templateKey: string | null;
    status: $Enums.DeliveryStatus | null;
    provider: string | null;
    providerMessageId: string | null;
    attemptCount: number | null;
    nextAttemptAt: Date | null;
    sentAt: Date | null;
    lastError: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type EmailOutboxMaxAggregateOutputType = {
    id: string | null;
    recipient: string | null;
    subject: string | null;
    htmlBody: string | null;
    textBody: string | null;
    templateKey: string | null;
    status: $Enums.DeliveryStatus | null;
    provider: string | null;
    providerMessageId: string | null;
    attemptCount: number | null;
    nextAttemptAt: Date | null;
    sentAt: Date | null;
    lastError: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type EmailOutboxCountAggregateOutputType = {
    id: number;
    recipient: number;
    subject: number;
    htmlBody: number;
    textBody: number;
    templateKey: number;
    metadata: number;
    status: number;
    provider: number;
    providerMessageId: number;
    attemptCount: number;
    nextAttemptAt: number;
    sentAt: number;
    lastError: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type EmailOutboxAvgAggregateInputType = {
    attemptCount?: true;
};
export type EmailOutboxSumAggregateInputType = {
    attemptCount?: true;
};
export type EmailOutboxMinAggregateInputType = {
    id?: true;
    recipient?: true;
    subject?: true;
    htmlBody?: true;
    textBody?: true;
    templateKey?: true;
    status?: true;
    provider?: true;
    providerMessageId?: true;
    attemptCount?: true;
    nextAttemptAt?: true;
    sentAt?: true;
    lastError?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type EmailOutboxMaxAggregateInputType = {
    id?: true;
    recipient?: true;
    subject?: true;
    htmlBody?: true;
    textBody?: true;
    templateKey?: true;
    status?: true;
    provider?: true;
    providerMessageId?: true;
    attemptCount?: true;
    nextAttemptAt?: true;
    sentAt?: true;
    lastError?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type EmailOutboxCountAggregateInputType = {
    id?: true;
    recipient?: true;
    subject?: true;
    htmlBody?: true;
    textBody?: true;
    templateKey?: true;
    metadata?: true;
    status?: true;
    provider?: true;
    providerMessageId?: true;
    attemptCount?: true;
    nextAttemptAt?: true;
    sentAt?: true;
    lastError?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type EmailOutboxAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmailOutboxWhereInput;
    orderBy?: Prisma.EmailOutboxOrderByWithRelationInput | Prisma.EmailOutboxOrderByWithRelationInput[];
    cursor?: Prisma.EmailOutboxWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EmailOutboxCountAggregateInputType;
    _avg?: EmailOutboxAvgAggregateInputType;
    _sum?: EmailOutboxSumAggregateInputType;
    _min?: EmailOutboxMinAggregateInputType;
    _max?: EmailOutboxMaxAggregateInputType;
};
export type GetEmailOutboxAggregateType<T extends EmailOutboxAggregateArgs> = {
    [P in keyof T & keyof AggregateEmailOutbox]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEmailOutbox[P]> : Prisma.GetScalarType<T[P], AggregateEmailOutbox[P]>;
};
export type EmailOutboxGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmailOutboxWhereInput;
    orderBy?: Prisma.EmailOutboxOrderByWithAggregationInput | Prisma.EmailOutboxOrderByWithAggregationInput[];
    by: Prisma.EmailOutboxScalarFieldEnum[] | Prisma.EmailOutboxScalarFieldEnum;
    having?: Prisma.EmailOutboxScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EmailOutboxCountAggregateInputType | true;
    _avg?: EmailOutboxAvgAggregateInputType;
    _sum?: EmailOutboxSumAggregateInputType;
    _min?: EmailOutboxMinAggregateInputType;
    _max?: EmailOutboxMaxAggregateInputType;
};
export type EmailOutboxGroupByOutputType = {
    id: string;
    recipient: string;
    subject: string;
    htmlBody: string;
    textBody: string | null;
    templateKey: string | null;
    metadata: runtime.JsonValue | null;
    status: $Enums.DeliveryStatus;
    provider: string;
    providerMessageId: string | null;
    attemptCount: number;
    nextAttemptAt: Date;
    sentAt: Date | null;
    lastError: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: EmailOutboxCountAggregateOutputType | null;
    _avg: EmailOutboxAvgAggregateOutputType | null;
    _sum: EmailOutboxSumAggregateOutputType | null;
    _min: EmailOutboxMinAggregateOutputType | null;
    _max: EmailOutboxMaxAggregateOutputType | null;
};
export type GetEmailOutboxGroupByPayload<T extends EmailOutboxGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EmailOutboxGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EmailOutboxGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EmailOutboxGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EmailOutboxGroupByOutputType[P]>;
}>>;
export type EmailOutboxWhereInput = {
    AND?: Prisma.EmailOutboxWhereInput | Prisma.EmailOutboxWhereInput[];
    OR?: Prisma.EmailOutboxWhereInput[];
    NOT?: Prisma.EmailOutboxWhereInput | Prisma.EmailOutboxWhereInput[];
    id?: Prisma.StringFilter<"EmailOutbox"> | string;
    recipient?: Prisma.StringFilter<"EmailOutbox"> | string;
    subject?: Prisma.StringFilter<"EmailOutbox"> | string;
    htmlBody?: Prisma.StringFilter<"EmailOutbox"> | string;
    textBody?: Prisma.StringNullableFilter<"EmailOutbox"> | string | null;
    templateKey?: Prisma.StringNullableFilter<"EmailOutbox"> | string | null;
    metadata?: Prisma.JsonNullableFilter<"EmailOutbox">;
    status?: Prisma.EnumDeliveryStatusFilter<"EmailOutbox"> | $Enums.DeliveryStatus;
    provider?: Prisma.StringFilter<"EmailOutbox"> | string;
    providerMessageId?: Prisma.StringNullableFilter<"EmailOutbox"> | string | null;
    attemptCount?: Prisma.IntFilter<"EmailOutbox"> | number;
    nextAttemptAt?: Prisma.DateTimeFilter<"EmailOutbox"> | Date | string;
    sentAt?: Prisma.DateTimeNullableFilter<"EmailOutbox"> | Date | string | null;
    lastError?: Prisma.StringNullableFilter<"EmailOutbox"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"EmailOutbox"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EmailOutbox"> | Date | string;
};
export type EmailOutboxOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    recipient?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    htmlBody?: Prisma.SortOrder;
    textBody?: Prisma.SortOrderInput | Prisma.SortOrder;
    templateKey?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    providerMessageId?: Prisma.SortOrderInput | Prisma.SortOrder;
    attemptCount?: Prisma.SortOrder;
    nextAttemptAt?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastError?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EmailOutboxWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.EmailOutboxWhereInput | Prisma.EmailOutboxWhereInput[];
    OR?: Prisma.EmailOutboxWhereInput[];
    NOT?: Prisma.EmailOutboxWhereInput | Prisma.EmailOutboxWhereInput[];
    recipient?: Prisma.StringFilter<"EmailOutbox"> | string;
    subject?: Prisma.StringFilter<"EmailOutbox"> | string;
    htmlBody?: Prisma.StringFilter<"EmailOutbox"> | string;
    textBody?: Prisma.StringNullableFilter<"EmailOutbox"> | string | null;
    templateKey?: Prisma.StringNullableFilter<"EmailOutbox"> | string | null;
    metadata?: Prisma.JsonNullableFilter<"EmailOutbox">;
    status?: Prisma.EnumDeliveryStatusFilter<"EmailOutbox"> | $Enums.DeliveryStatus;
    provider?: Prisma.StringFilter<"EmailOutbox"> | string;
    providerMessageId?: Prisma.StringNullableFilter<"EmailOutbox"> | string | null;
    attemptCount?: Prisma.IntFilter<"EmailOutbox"> | number;
    nextAttemptAt?: Prisma.DateTimeFilter<"EmailOutbox"> | Date | string;
    sentAt?: Prisma.DateTimeNullableFilter<"EmailOutbox"> | Date | string | null;
    lastError?: Prisma.StringNullableFilter<"EmailOutbox"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"EmailOutbox"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EmailOutbox"> | Date | string;
}, "id">;
export type EmailOutboxOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    recipient?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    htmlBody?: Prisma.SortOrder;
    textBody?: Prisma.SortOrderInput | Prisma.SortOrder;
    templateKey?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    providerMessageId?: Prisma.SortOrderInput | Prisma.SortOrder;
    attemptCount?: Prisma.SortOrder;
    nextAttemptAt?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastError?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.EmailOutboxCountOrderByAggregateInput;
    _avg?: Prisma.EmailOutboxAvgOrderByAggregateInput;
    _max?: Prisma.EmailOutboxMaxOrderByAggregateInput;
    _min?: Prisma.EmailOutboxMinOrderByAggregateInput;
    _sum?: Prisma.EmailOutboxSumOrderByAggregateInput;
};
export type EmailOutboxScalarWhereWithAggregatesInput = {
    AND?: Prisma.EmailOutboxScalarWhereWithAggregatesInput | Prisma.EmailOutboxScalarWhereWithAggregatesInput[];
    OR?: Prisma.EmailOutboxScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EmailOutboxScalarWhereWithAggregatesInput | Prisma.EmailOutboxScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"EmailOutbox"> | string;
    recipient?: Prisma.StringWithAggregatesFilter<"EmailOutbox"> | string;
    subject?: Prisma.StringWithAggregatesFilter<"EmailOutbox"> | string;
    htmlBody?: Prisma.StringWithAggregatesFilter<"EmailOutbox"> | string;
    textBody?: Prisma.StringNullableWithAggregatesFilter<"EmailOutbox"> | string | null;
    templateKey?: Prisma.StringNullableWithAggregatesFilter<"EmailOutbox"> | string | null;
    metadata?: Prisma.JsonNullableWithAggregatesFilter<"EmailOutbox">;
    status?: Prisma.EnumDeliveryStatusWithAggregatesFilter<"EmailOutbox"> | $Enums.DeliveryStatus;
    provider?: Prisma.StringWithAggregatesFilter<"EmailOutbox"> | string;
    providerMessageId?: Prisma.StringNullableWithAggregatesFilter<"EmailOutbox"> | string | null;
    attemptCount?: Prisma.IntWithAggregatesFilter<"EmailOutbox"> | number;
    nextAttemptAt?: Prisma.DateTimeWithAggregatesFilter<"EmailOutbox"> | Date | string;
    sentAt?: Prisma.DateTimeNullableWithAggregatesFilter<"EmailOutbox"> | Date | string | null;
    lastError?: Prisma.StringNullableWithAggregatesFilter<"EmailOutbox"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"EmailOutbox"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"EmailOutbox"> | Date | string;
};
export type EmailOutboxCreateInput = {
    id?: string;
    recipient: string;
    subject: string;
    htmlBody: string;
    textBody?: string | null;
    templateKey?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.DeliveryStatus;
    provider?: string;
    providerMessageId?: string | null;
    attemptCount?: number;
    nextAttemptAt?: Date | string;
    sentAt?: Date | string | null;
    lastError?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EmailOutboxUncheckedCreateInput = {
    id?: string;
    recipient: string;
    subject: string;
    htmlBody: string;
    textBody?: string | null;
    templateKey?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.DeliveryStatus;
    provider?: string;
    providerMessageId?: string | null;
    attemptCount?: number;
    nextAttemptAt?: Date | string;
    sentAt?: Date | string | null;
    lastError?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EmailOutboxUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recipient?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    htmlBody?: Prisma.StringFieldUpdateOperationsInput | string;
    textBody?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    templateKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    providerMessageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attemptCount?: Prisma.IntFieldUpdateOperationsInput | number;
    nextAttemptAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastError?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmailOutboxUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recipient?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    htmlBody?: Prisma.StringFieldUpdateOperationsInput | string;
    textBody?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    templateKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    providerMessageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attemptCount?: Prisma.IntFieldUpdateOperationsInput | number;
    nextAttemptAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastError?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmailOutboxCreateManyInput = {
    id?: string;
    recipient: string;
    subject: string;
    htmlBody: string;
    textBody?: string | null;
    templateKey?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    status?: $Enums.DeliveryStatus;
    provider?: string;
    providerMessageId?: string | null;
    attemptCount?: number;
    nextAttemptAt?: Date | string;
    sentAt?: Date | string | null;
    lastError?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EmailOutboxUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recipient?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    htmlBody?: Prisma.StringFieldUpdateOperationsInput | string;
    textBody?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    templateKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    providerMessageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attemptCount?: Prisma.IntFieldUpdateOperationsInput | number;
    nextAttemptAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastError?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmailOutboxUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recipient?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    htmlBody?: Prisma.StringFieldUpdateOperationsInput | string;
    textBody?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    templateKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    providerMessageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attemptCount?: Prisma.IntFieldUpdateOperationsInput | number;
    nextAttemptAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastError?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmailOutboxCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    recipient?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    htmlBody?: Prisma.SortOrder;
    textBody?: Prisma.SortOrder;
    templateKey?: Prisma.SortOrder;
    metadata?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    providerMessageId?: Prisma.SortOrder;
    attemptCount?: Prisma.SortOrder;
    nextAttemptAt?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
    lastError?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EmailOutboxAvgOrderByAggregateInput = {
    attemptCount?: Prisma.SortOrder;
};
export type EmailOutboxMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    recipient?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    htmlBody?: Prisma.SortOrder;
    textBody?: Prisma.SortOrder;
    templateKey?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    providerMessageId?: Prisma.SortOrder;
    attemptCount?: Prisma.SortOrder;
    nextAttemptAt?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
    lastError?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EmailOutboxMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    recipient?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    htmlBody?: Prisma.SortOrder;
    textBody?: Prisma.SortOrder;
    templateKey?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    providerMessageId?: Prisma.SortOrder;
    attemptCount?: Prisma.SortOrder;
    nextAttemptAt?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
    lastError?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EmailOutboxSumOrderByAggregateInput = {
    attemptCount?: Prisma.SortOrder;
};
export type EnumDeliveryStatusFieldUpdateOperationsInput = {
    set?: $Enums.DeliveryStatus;
};
export type EmailOutboxSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    recipient?: boolean;
    subject?: boolean;
    htmlBody?: boolean;
    textBody?: boolean;
    templateKey?: boolean;
    metadata?: boolean;
    status?: boolean;
    provider?: boolean;
    providerMessageId?: boolean;
    attemptCount?: boolean;
    nextAttemptAt?: boolean;
    sentAt?: boolean;
    lastError?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["emailOutbox"]>;
export type EmailOutboxSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    recipient?: boolean;
    subject?: boolean;
    htmlBody?: boolean;
    textBody?: boolean;
    templateKey?: boolean;
    metadata?: boolean;
    status?: boolean;
    provider?: boolean;
    providerMessageId?: boolean;
    attemptCount?: boolean;
    nextAttemptAt?: boolean;
    sentAt?: boolean;
    lastError?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["emailOutbox"]>;
export type EmailOutboxSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    recipient?: boolean;
    subject?: boolean;
    htmlBody?: boolean;
    textBody?: boolean;
    templateKey?: boolean;
    metadata?: boolean;
    status?: boolean;
    provider?: boolean;
    providerMessageId?: boolean;
    attemptCount?: boolean;
    nextAttemptAt?: boolean;
    sentAt?: boolean;
    lastError?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["emailOutbox"]>;
export type EmailOutboxSelectScalar = {
    id?: boolean;
    recipient?: boolean;
    subject?: boolean;
    htmlBody?: boolean;
    textBody?: boolean;
    templateKey?: boolean;
    metadata?: boolean;
    status?: boolean;
    provider?: boolean;
    providerMessageId?: boolean;
    attemptCount?: boolean;
    nextAttemptAt?: boolean;
    sentAt?: boolean;
    lastError?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type EmailOutboxOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "recipient" | "subject" | "htmlBody" | "textBody" | "templateKey" | "metadata" | "status" | "provider" | "providerMessageId" | "attemptCount" | "nextAttemptAt" | "sentAt" | "lastError" | "createdAt" | "updatedAt", ExtArgs["result"]["emailOutbox"]>;
export type $EmailOutboxPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EmailOutbox";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        recipient: string;
        subject: string;
        htmlBody: string;
        textBody: string | null;
        templateKey: string | null;
        metadata: runtime.JsonValue | null;
        status: $Enums.DeliveryStatus;
        provider: string;
        providerMessageId: string | null;
        attemptCount: number;
        nextAttemptAt: Date;
        sentAt: Date | null;
        lastError: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["emailOutbox"]>;
    composites: {};
};
export type EmailOutboxGetPayload<S extends boolean | null | undefined | EmailOutboxDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EmailOutboxPayload, S>;
export type EmailOutboxCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EmailOutboxFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EmailOutboxCountAggregateInputType | true;
};
export interface EmailOutboxDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EmailOutbox'];
        meta: {
            name: 'EmailOutbox';
        };
    };
    findUnique<T extends EmailOutboxFindUniqueArgs>(args: Prisma.SelectSubset<T, EmailOutboxFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EmailOutboxClient<runtime.Types.Result.GetResult<Prisma.$EmailOutboxPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EmailOutboxFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EmailOutboxFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EmailOutboxClient<runtime.Types.Result.GetResult<Prisma.$EmailOutboxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EmailOutboxFindFirstArgs>(args?: Prisma.SelectSubset<T, EmailOutboxFindFirstArgs<ExtArgs>>): Prisma.Prisma__EmailOutboxClient<runtime.Types.Result.GetResult<Prisma.$EmailOutboxPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EmailOutboxFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EmailOutboxFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EmailOutboxClient<runtime.Types.Result.GetResult<Prisma.$EmailOutboxPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EmailOutboxFindManyArgs>(args?: Prisma.SelectSubset<T, EmailOutboxFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmailOutboxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EmailOutboxCreateArgs>(args: Prisma.SelectSubset<T, EmailOutboxCreateArgs<ExtArgs>>): Prisma.Prisma__EmailOutboxClient<runtime.Types.Result.GetResult<Prisma.$EmailOutboxPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EmailOutboxCreateManyArgs>(args?: Prisma.SelectSubset<T, EmailOutboxCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EmailOutboxCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EmailOutboxCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmailOutboxPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EmailOutboxDeleteArgs>(args: Prisma.SelectSubset<T, EmailOutboxDeleteArgs<ExtArgs>>): Prisma.Prisma__EmailOutboxClient<runtime.Types.Result.GetResult<Prisma.$EmailOutboxPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EmailOutboxUpdateArgs>(args: Prisma.SelectSubset<T, EmailOutboxUpdateArgs<ExtArgs>>): Prisma.Prisma__EmailOutboxClient<runtime.Types.Result.GetResult<Prisma.$EmailOutboxPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EmailOutboxDeleteManyArgs>(args?: Prisma.SelectSubset<T, EmailOutboxDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EmailOutboxUpdateManyArgs>(args: Prisma.SelectSubset<T, EmailOutboxUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EmailOutboxUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EmailOutboxUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmailOutboxPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EmailOutboxUpsertArgs>(args: Prisma.SelectSubset<T, EmailOutboxUpsertArgs<ExtArgs>>): Prisma.Prisma__EmailOutboxClient<runtime.Types.Result.GetResult<Prisma.$EmailOutboxPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EmailOutboxCountArgs>(args?: Prisma.Subset<T, EmailOutboxCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EmailOutboxCountAggregateOutputType> : number>;
    aggregate<T extends EmailOutboxAggregateArgs>(args: Prisma.Subset<T, EmailOutboxAggregateArgs>): Prisma.PrismaPromise<GetEmailOutboxAggregateType<T>>;
    groupBy<T extends EmailOutboxGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EmailOutboxGroupByArgs['orderBy'];
    } : {
        orderBy?: EmailOutboxGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EmailOutboxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailOutboxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EmailOutboxFieldRefs;
}
export interface Prisma__EmailOutboxClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EmailOutboxFieldRefs {
    readonly id: Prisma.FieldRef<"EmailOutbox", 'String'>;
    readonly recipient: Prisma.FieldRef<"EmailOutbox", 'String'>;
    readonly subject: Prisma.FieldRef<"EmailOutbox", 'String'>;
    readonly htmlBody: Prisma.FieldRef<"EmailOutbox", 'String'>;
    readonly textBody: Prisma.FieldRef<"EmailOutbox", 'String'>;
    readonly templateKey: Prisma.FieldRef<"EmailOutbox", 'String'>;
    readonly metadata: Prisma.FieldRef<"EmailOutbox", 'Json'>;
    readonly status: Prisma.FieldRef<"EmailOutbox", 'DeliveryStatus'>;
    readonly provider: Prisma.FieldRef<"EmailOutbox", 'String'>;
    readonly providerMessageId: Prisma.FieldRef<"EmailOutbox", 'String'>;
    readonly attemptCount: Prisma.FieldRef<"EmailOutbox", 'Int'>;
    readonly nextAttemptAt: Prisma.FieldRef<"EmailOutbox", 'DateTime'>;
    readonly sentAt: Prisma.FieldRef<"EmailOutbox", 'DateTime'>;
    readonly lastError: Prisma.FieldRef<"EmailOutbox", 'String'>;
    readonly createdAt: Prisma.FieldRef<"EmailOutbox", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"EmailOutbox", 'DateTime'>;
}
export type EmailOutboxFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmailOutboxSelect<ExtArgs> | null;
    omit?: Prisma.EmailOutboxOmit<ExtArgs> | null;
    where: Prisma.EmailOutboxWhereUniqueInput;
};
export type EmailOutboxFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmailOutboxSelect<ExtArgs> | null;
    omit?: Prisma.EmailOutboxOmit<ExtArgs> | null;
    where: Prisma.EmailOutboxWhereUniqueInput;
};
export type EmailOutboxFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmailOutboxSelect<ExtArgs> | null;
    omit?: Prisma.EmailOutboxOmit<ExtArgs> | null;
    where?: Prisma.EmailOutboxWhereInput;
    orderBy?: Prisma.EmailOutboxOrderByWithRelationInput | Prisma.EmailOutboxOrderByWithRelationInput[];
    cursor?: Prisma.EmailOutboxWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmailOutboxScalarFieldEnum | Prisma.EmailOutboxScalarFieldEnum[];
};
export type EmailOutboxFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmailOutboxSelect<ExtArgs> | null;
    omit?: Prisma.EmailOutboxOmit<ExtArgs> | null;
    where?: Prisma.EmailOutboxWhereInput;
    orderBy?: Prisma.EmailOutboxOrderByWithRelationInput | Prisma.EmailOutboxOrderByWithRelationInput[];
    cursor?: Prisma.EmailOutboxWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmailOutboxScalarFieldEnum | Prisma.EmailOutboxScalarFieldEnum[];
};
export type EmailOutboxFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmailOutboxSelect<ExtArgs> | null;
    omit?: Prisma.EmailOutboxOmit<ExtArgs> | null;
    where?: Prisma.EmailOutboxWhereInput;
    orderBy?: Prisma.EmailOutboxOrderByWithRelationInput | Prisma.EmailOutboxOrderByWithRelationInput[];
    cursor?: Prisma.EmailOutboxWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmailOutboxScalarFieldEnum | Prisma.EmailOutboxScalarFieldEnum[];
};
export type EmailOutboxCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmailOutboxSelect<ExtArgs> | null;
    omit?: Prisma.EmailOutboxOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmailOutboxCreateInput, Prisma.EmailOutboxUncheckedCreateInput>;
};
export type EmailOutboxCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EmailOutboxCreateManyInput | Prisma.EmailOutboxCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EmailOutboxCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmailOutboxSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EmailOutboxOmit<ExtArgs> | null;
    data: Prisma.EmailOutboxCreateManyInput | Prisma.EmailOutboxCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EmailOutboxUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmailOutboxSelect<ExtArgs> | null;
    omit?: Prisma.EmailOutboxOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmailOutboxUpdateInput, Prisma.EmailOutboxUncheckedUpdateInput>;
    where: Prisma.EmailOutboxWhereUniqueInput;
};
export type EmailOutboxUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EmailOutboxUpdateManyMutationInput, Prisma.EmailOutboxUncheckedUpdateManyInput>;
    where?: Prisma.EmailOutboxWhereInput;
    limit?: number;
};
export type EmailOutboxUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmailOutboxSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EmailOutboxOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmailOutboxUpdateManyMutationInput, Prisma.EmailOutboxUncheckedUpdateManyInput>;
    where?: Prisma.EmailOutboxWhereInput;
    limit?: number;
};
export type EmailOutboxUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmailOutboxSelect<ExtArgs> | null;
    omit?: Prisma.EmailOutboxOmit<ExtArgs> | null;
    where: Prisma.EmailOutboxWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmailOutboxCreateInput, Prisma.EmailOutboxUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EmailOutboxUpdateInput, Prisma.EmailOutboxUncheckedUpdateInput>;
};
export type EmailOutboxDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmailOutboxSelect<ExtArgs> | null;
    omit?: Prisma.EmailOutboxOmit<ExtArgs> | null;
    where: Prisma.EmailOutboxWhereUniqueInput;
};
export type EmailOutboxDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmailOutboxWhereInput;
    limit?: number;
};
export type EmailOutboxDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmailOutboxSelect<ExtArgs> | null;
    omit?: Prisma.EmailOutboxOmit<ExtArgs> | null;
};
