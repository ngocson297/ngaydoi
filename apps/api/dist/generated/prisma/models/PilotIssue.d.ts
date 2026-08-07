import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PilotIssueModel = runtime.Types.Result.DefaultSelection<Prisma.$PilotIssuePayload>;
export type AggregatePilotIssue = {
    _count: PilotIssueCountAggregateOutputType | null;
    _min: PilotIssueMinAggregateOutputType | null;
    _max: PilotIssueMaxAggregateOutputType | null;
};
export type PilotIssueMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    severity: $Enums.PilotIssueSeverity | null;
    status: $Enums.PilotIssueStatus | null;
    area: string | null;
    reporter: string | null;
    assignee: string | null;
    reproduction: string | null;
    resolution: string | null;
    dueAt: Date | null;
    resolvedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PilotIssueMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    severity: $Enums.PilotIssueSeverity | null;
    status: $Enums.PilotIssueStatus | null;
    area: string | null;
    reporter: string | null;
    assignee: string | null;
    reproduction: string | null;
    resolution: string | null;
    dueAt: Date | null;
    resolvedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PilotIssueCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    severity: number;
    status: number;
    area: number;
    reporter: number;
    assignee: number;
    reproduction: number;
    resolution: number;
    dueAt: number;
    resolvedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PilotIssueMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    severity?: true;
    status?: true;
    area?: true;
    reporter?: true;
    assignee?: true;
    reproduction?: true;
    resolution?: true;
    dueAt?: true;
    resolvedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PilotIssueMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    severity?: true;
    status?: true;
    area?: true;
    reporter?: true;
    assignee?: true;
    reproduction?: true;
    resolution?: true;
    dueAt?: true;
    resolvedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PilotIssueCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    severity?: true;
    status?: true;
    area?: true;
    reporter?: true;
    assignee?: true;
    reproduction?: true;
    resolution?: true;
    dueAt?: true;
    resolvedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PilotIssueAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PilotIssueWhereInput;
    orderBy?: Prisma.PilotIssueOrderByWithRelationInput | Prisma.PilotIssueOrderByWithRelationInput[];
    cursor?: Prisma.PilotIssueWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PilotIssueCountAggregateInputType;
    _min?: PilotIssueMinAggregateInputType;
    _max?: PilotIssueMaxAggregateInputType;
};
export type GetPilotIssueAggregateType<T extends PilotIssueAggregateArgs> = {
    [P in keyof T & keyof AggregatePilotIssue]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePilotIssue[P]> : Prisma.GetScalarType<T[P], AggregatePilotIssue[P]>;
};
export type PilotIssueGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PilotIssueWhereInput;
    orderBy?: Prisma.PilotIssueOrderByWithAggregationInput | Prisma.PilotIssueOrderByWithAggregationInput[];
    by: Prisma.PilotIssueScalarFieldEnum[] | Prisma.PilotIssueScalarFieldEnum;
    having?: Prisma.PilotIssueScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PilotIssueCountAggregateInputType | true;
    _min?: PilotIssueMinAggregateInputType;
    _max?: PilotIssueMaxAggregateInputType;
};
export type PilotIssueGroupByOutputType = {
    id: string;
    title: string;
    description: string;
    severity: $Enums.PilotIssueSeverity;
    status: $Enums.PilotIssueStatus;
    area: string;
    reporter: string | null;
    assignee: string | null;
    reproduction: string | null;
    resolution: string | null;
    dueAt: Date | null;
    resolvedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: PilotIssueCountAggregateOutputType | null;
    _min: PilotIssueMinAggregateOutputType | null;
    _max: PilotIssueMaxAggregateOutputType | null;
};
export type GetPilotIssueGroupByPayload<T extends PilotIssueGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PilotIssueGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PilotIssueGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PilotIssueGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PilotIssueGroupByOutputType[P]>;
}>>;
export type PilotIssueWhereInput = {
    AND?: Prisma.PilotIssueWhereInput | Prisma.PilotIssueWhereInput[];
    OR?: Prisma.PilotIssueWhereInput[];
    NOT?: Prisma.PilotIssueWhereInput | Prisma.PilotIssueWhereInput[];
    id?: Prisma.StringFilter<"PilotIssue"> | string;
    title?: Prisma.StringFilter<"PilotIssue"> | string;
    description?: Prisma.StringFilter<"PilotIssue"> | string;
    severity?: Prisma.EnumPilotIssueSeverityFilter<"PilotIssue"> | $Enums.PilotIssueSeverity;
    status?: Prisma.EnumPilotIssueStatusFilter<"PilotIssue"> | $Enums.PilotIssueStatus;
    area?: Prisma.StringFilter<"PilotIssue"> | string;
    reporter?: Prisma.StringNullableFilter<"PilotIssue"> | string | null;
    assignee?: Prisma.StringNullableFilter<"PilotIssue"> | string | null;
    reproduction?: Prisma.StringNullableFilter<"PilotIssue"> | string | null;
    resolution?: Prisma.StringNullableFilter<"PilotIssue"> | string | null;
    dueAt?: Prisma.DateTimeNullableFilter<"PilotIssue"> | Date | string | null;
    resolvedAt?: Prisma.DateTimeNullableFilter<"PilotIssue"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"PilotIssue"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PilotIssue"> | Date | string;
};
export type PilotIssueOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    severity?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    area?: Prisma.SortOrder;
    reporter?: Prisma.SortOrderInput | Prisma.SortOrder;
    assignee?: Prisma.SortOrderInput | Prisma.SortOrder;
    reproduction?: Prisma.SortOrderInput | Prisma.SortOrder;
    resolution?: Prisma.SortOrderInput | Prisma.SortOrder;
    dueAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    resolvedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PilotIssueWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PilotIssueWhereInput | Prisma.PilotIssueWhereInput[];
    OR?: Prisma.PilotIssueWhereInput[];
    NOT?: Prisma.PilotIssueWhereInput | Prisma.PilotIssueWhereInput[];
    title?: Prisma.StringFilter<"PilotIssue"> | string;
    description?: Prisma.StringFilter<"PilotIssue"> | string;
    severity?: Prisma.EnumPilotIssueSeverityFilter<"PilotIssue"> | $Enums.PilotIssueSeverity;
    status?: Prisma.EnumPilotIssueStatusFilter<"PilotIssue"> | $Enums.PilotIssueStatus;
    area?: Prisma.StringFilter<"PilotIssue"> | string;
    reporter?: Prisma.StringNullableFilter<"PilotIssue"> | string | null;
    assignee?: Prisma.StringNullableFilter<"PilotIssue"> | string | null;
    reproduction?: Prisma.StringNullableFilter<"PilotIssue"> | string | null;
    resolution?: Prisma.StringNullableFilter<"PilotIssue"> | string | null;
    dueAt?: Prisma.DateTimeNullableFilter<"PilotIssue"> | Date | string | null;
    resolvedAt?: Prisma.DateTimeNullableFilter<"PilotIssue"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"PilotIssue"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PilotIssue"> | Date | string;
}, "id">;
export type PilotIssueOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    severity?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    area?: Prisma.SortOrder;
    reporter?: Prisma.SortOrderInput | Prisma.SortOrder;
    assignee?: Prisma.SortOrderInput | Prisma.SortOrder;
    reproduction?: Prisma.SortOrderInput | Prisma.SortOrder;
    resolution?: Prisma.SortOrderInput | Prisma.SortOrder;
    dueAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    resolvedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PilotIssueCountOrderByAggregateInput;
    _max?: Prisma.PilotIssueMaxOrderByAggregateInput;
    _min?: Prisma.PilotIssueMinOrderByAggregateInput;
};
export type PilotIssueScalarWhereWithAggregatesInput = {
    AND?: Prisma.PilotIssueScalarWhereWithAggregatesInput | Prisma.PilotIssueScalarWhereWithAggregatesInput[];
    OR?: Prisma.PilotIssueScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PilotIssueScalarWhereWithAggregatesInput | Prisma.PilotIssueScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PilotIssue"> | string;
    title?: Prisma.StringWithAggregatesFilter<"PilotIssue"> | string;
    description?: Prisma.StringWithAggregatesFilter<"PilotIssue"> | string;
    severity?: Prisma.EnumPilotIssueSeverityWithAggregatesFilter<"PilotIssue"> | $Enums.PilotIssueSeverity;
    status?: Prisma.EnumPilotIssueStatusWithAggregatesFilter<"PilotIssue"> | $Enums.PilotIssueStatus;
    area?: Prisma.StringWithAggregatesFilter<"PilotIssue"> | string;
    reporter?: Prisma.StringNullableWithAggregatesFilter<"PilotIssue"> | string | null;
    assignee?: Prisma.StringNullableWithAggregatesFilter<"PilotIssue"> | string | null;
    reproduction?: Prisma.StringNullableWithAggregatesFilter<"PilotIssue"> | string | null;
    resolution?: Prisma.StringNullableWithAggregatesFilter<"PilotIssue"> | string | null;
    dueAt?: Prisma.DateTimeNullableWithAggregatesFilter<"PilotIssue"> | Date | string | null;
    resolvedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"PilotIssue"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PilotIssue"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"PilotIssue"> | Date | string;
};
export type PilotIssueCreateInput = {
    id?: string;
    title: string;
    description: string;
    severity?: $Enums.PilotIssueSeverity;
    status?: $Enums.PilotIssueStatus;
    area: string;
    reporter?: string | null;
    assignee?: string | null;
    reproduction?: string | null;
    resolution?: string | null;
    dueAt?: Date | string | null;
    resolvedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PilotIssueUncheckedCreateInput = {
    id?: string;
    title: string;
    description: string;
    severity?: $Enums.PilotIssueSeverity;
    status?: $Enums.PilotIssueStatus;
    area: string;
    reporter?: string | null;
    assignee?: string | null;
    reproduction?: string | null;
    resolution?: string | null;
    dueAt?: Date | string | null;
    resolvedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PilotIssueUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.EnumPilotIssueSeverityFieldUpdateOperationsInput | $Enums.PilotIssueSeverity;
    status?: Prisma.EnumPilotIssueStatusFieldUpdateOperationsInput | $Enums.PilotIssueStatus;
    area?: Prisma.StringFieldUpdateOperationsInput | string;
    reporter?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assignee?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reproduction?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PilotIssueUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.EnumPilotIssueSeverityFieldUpdateOperationsInput | $Enums.PilotIssueSeverity;
    status?: Prisma.EnumPilotIssueStatusFieldUpdateOperationsInput | $Enums.PilotIssueStatus;
    area?: Prisma.StringFieldUpdateOperationsInput | string;
    reporter?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assignee?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reproduction?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PilotIssueCreateManyInput = {
    id?: string;
    title: string;
    description: string;
    severity?: $Enums.PilotIssueSeverity;
    status?: $Enums.PilotIssueStatus;
    area: string;
    reporter?: string | null;
    assignee?: string | null;
    reproduction?: string | null;
    resolution?: string | null;
    dueAt?: Date | string | null;
    resolvedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PilotIssueUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.EnumPilotIssueSeverityFieldUpdateOperationsInput | $Enums.PilotIssueSeverity;
    status?: Prisma.EnumPilotIssueStatusFieldUpdateOperationsInput | $Enums.PilotIssueStatus;
    area?: Prisma.StringFieldUpdateOperationsInput | string;
    reporter?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assignee?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reproduction?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PilotIssueUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.EnumPilotIssueSeverityFieldUpdateOperationsInput | $Enums.PilotIssueSeverity;
    status?: Prisma.EnumPilotIssueStatusFieldUpdateOperationsInput | $Enums.PilotIssueStatus;
    area?: Prisma.StringFieldUpdateOperationsInput | string;
    reporter?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assignee?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reproduction?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PilotIssueCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    severity?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    area?: Prisma.SortOrder;
    reporter?: Prisma.SortOrder;
    assignee?: Prisma.SortOrder;
    reproduction?: Prisma.SortOrder;
    resolution?: Prisma.SortOrder;
    dueAt?: Prisma.SortOrder;
    resolvedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PilotIssueMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    severity?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    area?: Prisma.SortOrder;
    reporter?: Prisma.SortOrder;
    assignee?: Prisma.SortOrder;
    reproduction?: Prisma.SortOrder;
    resolution?: Prisma.SortOrder;
    dueAt?: Prisma.SortOrder;
    resolvedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PilotIssueMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    severity?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    area?: Prisma.SortOrder;
    reporter?: Prisma.SortOrder;
    assignee?: Prisma.SortOrder;
    reproduction?: Prisma.SortOrder;
    resolution?: Prisma.SortOrder;
    dueAt?: Prisma.SortOrder;
    resolvedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EnumPilotIssueSeverityFieldUpdateOperationsInput = {
    set?: $Enums.PilotIssueSeverity;
};
export type EnumPilotIssueStatusFieldUpdateOperationsInput = {
    set?: $Enums.PilotIssueStatus;
};
export type PilotIssueSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    severity?: boolean;
    status?: boolean;
    area?: boolean;
    reporter?: boolean;
    assignee?: boolean;
    reproduction?: boolean;
    resolution?: boolean;
    dueAt?: boolean;
    resolvedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["pilotIssue"]>;
export type PilotIssueSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    severity?: boolean;
    status?: boolean;
    area?: boolean;
    reporter?: boolean;
    assignee?: boolean;
    reproduction?: boolean;
    resolution?: boolean;
    dueAt?: boolean;
    resolvedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["pilotIssue"]>;
export type PilotIssueSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    severity?: boolean;
    status?: boolean;
    area?: boolean;
    reporter?: boolean;
    assignee?: boolean;
    reproduction?: boolean;
    resolution?: boolean;
    dueAt?: boolean;
    resolvedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["pilotIssue"]>;
export type PilotIssueSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    severity?: boolean;
    status?: boolean;
    area?: boolean;
    reporter?: boolean;
    assignee?: boolean;
    reproduction?: boolean;
    resolution?: boolean;
    dueAt?: boolean;
    resolvedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PilotIssueOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "description" | "severity" | "status" | "area" | "reporter" | "assignee" | "reproduction" | "resolution" | "dueAt" | "resolvedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["pilotIssue"]>;
export type $PilotIssuePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PilotIssue";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        description: string;
        severity: $Enums.PilotIssueSeverity;
        status: $Enums.PilotIssueStatus;
        area: string;
        reporter: string | null;
        assignee: string | null;
        reproduction: string | null;
        resolution: string | null;
        dueAt: Date | null;
        resolvedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["pilotIssue"]>;
    composites: {};
};
export type PilotIssueGetPayload<S extends boolean | null | undefined | PilotIssueDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PilotIssuePayload, S>;
export type PilotIssueCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PilotIssueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PilotIssueCountAggregateInputType | true;
};
export interface PilotIssueDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PilotIssue'];
        meta: {
            name: 'PilotIssue';
        };
    };
    findUnique<T extends PilotIssueFindUniqueArgs>(args: Prisma.SelectSubset<T, PilotIssueFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PilotIssueClient<runtime.Types.Result.GetResult<Prisma.$PilotIssuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PilotIssueFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PilotIssueFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PilotIssueClient<runtime.Types.Result.GetResult<Prisma.$PilotIssuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PilotIssueFindFirstArgs>(args?: Prisma.SelectSubset<T, PilotIssueFindFirstArgs<ExtArgs>>): Prisma.Prisma__PilotIssueClient<runtime.Types.Result.GetResult<Prisma.$PilotIssuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PilotIssueFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PilotIssueFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PilotIssueClient<runtime.Types.Result.GetResult<Prisma.$PilotIssuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PilotIssueFindManyArgs>(args?: Prisma.SelectSubset<T, PilotIssueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PilotIssuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PilotIssueCreateArgs>(args: Prisma.SelectSubset<T, PilotIssueCreateArgs<ExtArgs>>): Prisma.Prisma__PilotIssueClient<runtime.Types.Result.GetResult<Prisma.$PilotIssuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PilotIssueCreateManyArgs>(args?: Prisma.SelectSubset<T, PilotIssueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PilotIssueCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PilotIssueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PilotIssuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PilotIssueDeleteArgs>(args: Prisma.SelectSubset<T, PilotIssueDeleteArgs<ExtArgs>>): Prisma.Prisma__PilotIssueClient<runtime.Types.Result.GetResult<Prisma.$PilotIssuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PilotIssueUpdateArgs>(args: Prisma.SelectSubset<T, PilotIssueUpdateArgs<ExtArgs>>): Prisma.Prisma__PilotIssueClient<runtime.Types.Result.GetResult<Prisma.$PilotIssuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PilotIssueDeleteManyArgs>(args?: Prisma.SelectSubset<T, PilotIssueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PilotIssueUpdateManyArgs>(args: Prisma.SelectSubset<T, PilotIssueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PilotIssueUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PilotIssueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PilotIssuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PilotIssueUpsertArgs>(args: Prisma.SelectSubset<T, PilotIssueUpsertArgs<ExtArgs>>): Prisma.Prisma__PilotIssueClient<runtime.Types.Result.GetResult<Prisma.$PilotIssuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PilotIssueCountArgs>(args?: Prisma.Subset<T, PilotIssueCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PilotIssueCountAggregateOutputType> : number>;
    aggregate<T extends PilotIssueAggregateArgs>(args: Prisma.Subset<T, PilotIssueAggregateArgs>): Prisma.PrismaPromise<GetPilotIssueAggregateType<T>>;
    groupBy<T extends PilotIssueGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PilotIssueGroupByArgs['orderBy'];
    } : {
        orderBy?: PilotIssueGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PilotIssueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPilotIssueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PilotIssueFieldRefs;
}
export interface Prisma__PilotIssueClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PilotIssueFieldRefs {
    readonly id: Prisma.FieldRef<"PilotIssue", 'String'>;
    readonly title: Prisma.FieldRef<"PilotIssue", 'String'>;
    readonly description: Prisma.FieldRef<"PilotIssue", 'String'>;
    readonly severity: Prisma.FieldRef<"PilotIssue", 'PilotIssueSeverity'>;
    readonly status: Prisma.FieldRef<"PilotIssue", 'PilotIssueStatus'>;
    readonly area: Prisma.FieldRef<"PilotIssue", 'String'>;
    readonly reporter: Prisma.FieldRef<"PilotIssue", 'String'>;
    readonly assignee: Prisma.FieldRef<"PilotIssue", 'String'>;
    readonly reproduction: Prisma.FieldRef<"PilotIssue", 'String'>;
    readonly resolution: Prisma.FieldRef<"PilotIssue", 'String'>;
    readonly dueAt: Prisma.FieldRef<"PilotIssue", 'DateTime'>;
    readonly resolvedAt: Prisma.FieldRef<"PilotIssue", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"PilotIssue", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"PilotIssue", 'DateTime'>;
}
export type PilotIssueFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PilotIssueSelect<ExtArgs> | null;
    omit?: Prisma.PilotIssueOmit<ExtArgs> | null;
    where: Prisma.PilotIssueWhereUniqueInput;
};
export type PilotIssueFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PilotIssueSelect<ExtArgs> | null;
    omit?: Prisma.PilotIssueOmit<ExtArgs> | null;
    where: Prisma.PilotIssueWhereUniqueInput;
};
export type PilotIssueFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PilotIssueSelect<ExtArgs> | null;
    omit?: Prisma.PilotIssueOmit<ExtArgs> | null;
    where?: Prisma.PilotIssueWhereInput;
    orderBy?: Prisma.PilotIssueOrderByWithRelationInput | Prisma.PilotIssueOrderByWithRelationInput[];
    cursor?: Prisma.PilotIssueWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PilotIssueScalarFieldEnum | Prisma.PilotIssueScalarFieldEnum[];
};
export type PilotIssueFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PilotIssueSelect<ExtArgs> | null;
    omit?: Prisma.PilotIssueOmit<ExtArgs> | null;
    where?: Prisma.PilotIssueWhereInput;
    orderBy?: Prisma.PilotIssueOrderByWithRelationInput | Prisma.PilotIssueOrderByWithRelationInput[];
    cursor?: Prisma.PilotIssueWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PilotIssueScalarFieldEnum | Prisma.PilotIssueScalarFieldEnum[];
};
export type PilotIssueFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PilotIssueSelect<ExtArgs> | null;
    omit?: Prisma.PilotIssueOmit<ExtArgs> | null;
    where?: Prisma.PilotIssueWhereInput;
    orderBy?: Prisma.PilotIssueOrderByWithRelationInput | Prisma.PilotIssueOrderByWithRelationInput[];
    cursor?: Prisma.PilotIssueWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PilotIssueScalarFieldEnum | Prisma.PilotIssueScalarFieldEnum[];
};
export type PilotIssueCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PilotIssueSelect<ExtArgs> | null;
    omit?: Prisma.PilotIssueOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PilotIssueCreateInput, Prisma.PilotIssueUncheckedCreateInput>;
};
export type PilotIssueCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PilotIssueCreateManyInput | Prisma.PilotIssueCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PilotIssueCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PilotIssueSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PilotIssueOmit<ExtArgs> | null;
    data: Prisma.PilotIssueCreateManyInput | Prisma.PilotIssueCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PilotIssueUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PilotIssueSelect<ExtArgs> | null;
    omit?: Prisma.PilotIssueOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PilotIssueUpdateInput, Prisma.PilotIssueUncheckedUpdateInput>;
    where: Prisma.PilotIssueWhereUniqueInput;
};
export type PilotIssueUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PilotIssueUpdateManyMutationInput, Prisma.PilotIssueUncheckedUpdateManyInput>;
    where?: Prisma.PilotIssueWhereInput;
    limit?: number;
};
export type PilotIssueUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PilotIssueSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PilotIssueOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PilotIssueUpdateManyMutationInput, Prisma.PilotIssueUncheckedUpdateManyInput>;
    where?: Prisma.PilotIssueWhereInput;
    limit?: number;
};
export type PilotIssueUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PilotIssueSelect<ExtArgs> | null;
    omit?: Prisma.PilotIssueOmit<ExtArgs> | null;
    where: Prisma.PilotIssueWhereUniqueInput;
    create: Prisma.XOR<Prisma.PilotIssueCreateInput, Prisma.PilotIssueUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PilotIssueUpdateInput, Prisma.PilotIssueUncheckedUpdateInput>;
};
export type PilotIssueDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PilotIssueSelect<ExtArgs> | null;
    omit?: Prisma.PilotIssueOmit<ExtArgs> | null;
    where: Prisma.PilotIssueWhereUniqueInput;
};
export type PilotIssueDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PilotIssueWhereInput;
    limit?: number;
};
export type PilotIssueDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PilotIssueSelect<ExtArgs> | null;
    omit?: Prisma.PilotIssueOmit<ExtArgs> | null;
};
