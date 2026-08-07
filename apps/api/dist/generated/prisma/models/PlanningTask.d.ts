import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PlanningTaskModel = runtime.Types.Result.DefaultSelection<Prisma.$PlanningTaskPayload>;
export type AggregatePlanningTask = {
    _count: PlanningTaskCountAggregateOutputType | null;
    _avg: PlanningTaskAvgAggregateOutputType | null;
    _sum: PlanningTaskSumAggregateOutputType | null;
    _min: PlanningTaskMinAggregateOutputType | null;
    _max: PlanningTaskMaxAggregateOutputType | null;
};
export type PlanningTaskAvgAggregateOutputType = {
    sortOrder: number | null;
    reminderDaysBefore: number | null;
};
export type PlanningTaskSumAggregateOutputType = {
    sortOrder: number | null;
    reminderDaysBefore: number | null;
};
export type PlanningTaskMinAggregateOutputType = {
    id: string | null;
    weddingId: string | null;
    title: string | null;
    description: string | null;
    category: $Enums.PlanningTaskCategory | null;
    priority: $Enums.PlanningTaskPriority | null;
    status: $Enums.PlanningTaskStatus | null;
    source: $Enums.PlanningTaskSource | null;
    dueAt: Date | null;
    assigneeName: string | null;
    sortOrder: number | null;
    reminderEnabled: boolean | null;
    reminderDaysBefore: number | null;
    lastReminderAt: Date | null;
    completedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PlanningTaskMaxAggregateOutputType = {
    id: string | null;
    weddingId: string | null;
    title: string | null;
    description: string | null;
    category: $Enums.PlanningTaskCategory | null;
    priority: $Enums.PlanningTaskPriority | null;
    status: $Enums.PlanningTaskStatus | null;
    source: $Enums.PlanningTaskSource | null;
    dueAt: Date | null;
    assigneeName: string | null;
    sortOrder: number | null;
    reminderEnabled: boolean | null;
    reminderDaysBefore: number | null;
    lastReminderAt: Date | null;
    completedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PlanningTaskCountAggregateOutputType = {
    id: number;
    weddingId: number;
    title: number;
    description: number;
    category: number;
    priority: number;
    status: number;
    source: number;
    dueAt: number;
    assigneeName: number;
    sortOrder: number;
    reminderEnabled: number;
    reminderDaysBefore: number;
    lastReminderAt: number;
    completedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PlanningTaskAvgAggregateInputType = {
    sortOrder?: true;
    reminderDaysBefore?: true;
};
export type PlanningTaskSumAggregateInputType = {
    sortOrder?: true;
    reminderDaysBefore?: true;
};
export type PlanningTaskMinAggregateInputType = {
    id?: true;
    weddingId?: true;
    title?: true;
    description?: true;
    category?: true;
    priority?: true;
    status?: true;
    source?: true;
    dueAt?: true;
    assigneeName?: true;
    sortOrder?: true;
    reminderEnabled?: true;
    reminderDaysBefore?: true;
    lastReminderAt?: true;
    completedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PlanningTaskMaxAggregateInputType = {
    id?: true;
    weddingId?: true;
    title?: true;
    description?: true;
    category?: true;
    priority?: true;
    status?: true;
    source?: true;
    dueAt?: true;
    assigneeName?: true;
    sortOrder?: true;
    reminderEnabled?: true;
    reminderDaysBefore?: true;
    lastReminderAt?: true;
    completedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PlanningTaskCountAggregateInputType = {
    id?: true;
    weddingId?: true;
    title?: true;
    description?: true;
    category?: true;
    priority?: true;
    status?: true;
    source?: true;
    dueAt?: true;
    assigneeName?: true;
    sortOrder?: true;
    reminderEnabled?: true;
    reminderDaysBefore?: true;
    lastReminderAt?: true;
    completedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PlanningTaskAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlanningTaskWhereInput;
    orderBy?: Prisma.PlanningTaskOrderByWithRelationInput | Prisma.PlanningTaskOrderByWithRelationInput[];
    cursor?: Prisma.PlanningTaskWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PlanningTaskCountAggregateInputType;
    _avg?: PlanningTaskAvgAggregateInputType;
    _sum?: PlanningTaskSumAggregateInputType;
    _min?: PlanningTaskMinAggregateInputType;
    _max?: PlanningTaskMaxAggregateInputType;
};
export type GetPlanningTaskAggregateType<T extends PlanningTaskAggregateArgs> = {
    [P in keyof T & keyof AggregatePlanningTask]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePlanningTask[P]> : Prisma.GetScalarType<T[P], AggregatePlanningTask[P]>;
};
export type PlanningTaskGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlanningTaskWhereInput;
    orderBy?: Prisma.PlanningTaskOrderByWithAggregationInput | Prisma.PlanningTaskOrderByWithAggregationInput[];
    by: Prisma.PlanningTaskScalarFieldEnum[] | Prisma.PlanningTaskScalarFieldEnum;
    having?: Prisma.PlanningTaskScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PlanningTaskCountAggregateInputType | true;
    _avg?: PlanningTaskAvgAggregateInputType;
    _sum?: PlanningTaskSumAggregateInputType;
    _min?: PlanningTaskMinAggregateInputType;
    _max?: PlanningTaskMaxAggregateInputType;
};
export type PlanningTaskGroupByOutputType = {
    id: string;
    weddingId: string;
    title: string;
    description: string | null;
    category: $Enums.PlanningTaskCategory;
    priority: $Enums.PlanningTaskPriority;
    status: $Enums.PlanningTaskStatus;
    source: $Enums.PlanningTaskSource;
    dueAt: Date | null;
    assigneeName: string | null;
    sortOrder: number;
    reminderEnabled: boolean;
    reminderDaysBefore: number;
    lastReminderAt: Date | null;
    completedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: PlanningTaskCountAggregateOutputType | null;
    _avg: PlanningTaskAvgAggregateOutputType | null;
    _sum: PlanningTaskSumAggregateOutputType | null;
    _min: PlanningTaskMinAggregateOutputType | null;
    _max: PlanningTaskMaxAggregateOutputType | null;
};
export type GetPlanningTaskGroupByPayload<T extends PlanningTaskGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PlanningTaskGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PlanningTaskGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PlanningTaskGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PlanningTaskGroupByOutputType[P]>;
}>>;
export type PlanningTaskWhereInput = {
    AND?: Prisma.PlanningTaskWhereInput | Prisma.PlanningTaskWhereInput[];
    OR?: Prisma.PlanningTaskWhereInput[];
    NOT?: Prisma.PlanningTaskWhereInput | Prisma.PlanningTaskWhereInput[];
    id?: Prisma.StringFilter<"PlanningTask"> | string;
    weddingId?: Prisma.StringFilter<"PlanningTask"> | string;
    title?: Prisma.StringFilter<"PlanningTask"> | string;
    description?: Prisma.StringNullableFilter<"PlanningTask"> | string | null;
    category?: Prisma.EnumPlanningTaskCategoryFilter<"PlanningTask"> | $Enums.PlanningTaskCategory;
    priority?: Prisma.EnumPlanningTaskPriorityFilter<"PlanningTask"> | $Enums.PlanningTaskPriority;
    status?: Prisma.EnumPlanningTaskStatusFilter<"PlanningTask"> | $Enums.PlanningTaskStatus;
    source?: Prisma.EnumPlanningTaskSourceFilter<"PlanningTask"> | $Enums.PlanningTaskSource;
    dueAt?: Prisma.DateTimeNullableFilter<"PlanningTask"> | Date | string | null;
    assigneeName?: Prisma.StringNullableFilter<"PlanningTask"> | string | null;
    sortOrder?: Prisma.IntFilter<"PlanningTask"> | number;
    reminderEnabled?: Prisma.BoolFilter<"PlanningTask"> | boolean;
    reminderDaysBefore?: Prisma.IntFilter<"PlanningTask"> | number;
    lastReminderAt?: Prisma.DateTimeNullableFilter<"PlanningTask"> | Date | string | null;
    completedAt?: Prisma.DateTimeNullableFilter<"PlanningTask"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"PlanningTask"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PlanningTask"> | Date | string;
    wedding?: Prisma.XOR<Prisma.WeddingScalarRelationFilter, Prisma.WeddingWhereInput>;
};
export type PlanningTaskOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    dueAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    assigneeName?: Prisma.SortOrderInput | Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    reminderEnabled?: Prisma.SortOrder;
    reminderDaysBefore?: Prisma.SortOrder;
    lastReminderAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    wedding?: Prisma.WeddingOrderByWithRelationInput;
};
export type PlanningTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PlanningTaskWhereInput | Prisma.PlanningTaskWhereInput[];
    OR?: Prisma.PlanningTaskWhereInput[];
    NOT?: Prisma.PlanningTaskWhereInput | Prisma.PlanningTaskWhereInput[];
    weddingId?: Prisma.StringFilter<"PlanningTask"> | string;
    title?: Prisma.StringFilter<"PlanningTask"> | string;
    description?: Prisma.StringNullableFilter<"PlanningTask"> | string | null;
    category?: Prisma.EnumPlanningTaskCategoryFilter<"PlanningTask"> | $Enums.PlanningTaskCategory;
    priority?: Prisma.EnumPlanningTaskPriorityFilter<"PlanningTask"> | $Enums.PlanningTaskPriority;
    status?: Prisma.EnumPlanningTaskStatusFilter<"PlanningTask"> | $Enums.PlanningTaskStatus;
    source?: Prisma.EnumPlanningTaskSourceFilter<"PlanningTask"> | $Enums.PlanningTaskSource;
    dueAt?: Prisma.DateTimeNullableFilter<"PlanningTask"> | Date | string | null;
    assigneeName?: Prisma.StringNullableFilter<"PlanningTask"> | string | null;
    sortOrder?: Prisma.IntFilter<"PlanningTask"> | number;
    reminderEnabled?: Prisma.BoolFilter<"PlanningTask"> | boolean;
    reminderDaysBefore?: Prisma.IntFilter<"PlanningTask"> | number;
    lastReminderAt?: Prisma.DateTimeNullableFilter<"PlanningTask"> | Date | string | null;
    completedAt?: Prisma.DateTimeNullableFilter<"PlanningTask"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"PlanningTask"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PlanningTask"> | Date | string;
    wedding?: Prisma.XOR<Prisma.WeddingScalarRelationFilter, Prisma.WeddingWhereInput>;
}, "id">;
export type PlanningTaskOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    dueAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    assigneeName?: Prisma.SortOrderInput | Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    reminderEnabled?: Prisma.SortOrder;
    reminderDaysBefore?: Prisma.SortOrder;
    lastReminderAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PlanningTaskCountOrderByAggregateInput;
    _avg?: Prisma.PlanningTaskAvgOrderByAggregateInput;
    _max?: Prisma.PlanningTaskMaxOrderByAggregateInput;
    _min?: Prisma.PlanningTaskMinOrderByAggregateInput;
    _sum?: Prisma.PlanningTaskSumOrderByAggregateInput;
};
export type PlanningTaskScalarWhereWithAggregatesInput = {
    AND?: Prisma.PlanningTaskScalarWhereWithAggregatesInput | Prisma.PlanningTaskScalarWhereWithAggregatesInput[];
    OR?: Prisma.PlanningTaskScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PlanningTaskScalarWhereWithAggregatesInput | Prisma.PlanningTaskScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PlanningTask"> | string;
    weddingId?: Prisma.StringWithAggregatesFilter<"PlanningTask"> | string;
    title?: Prisma.StringWithAggregatesFilter<"PlanningTask"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"PlanningTask"> | string | null;
    category?: Prisma.EnumPlanningTaskCategoryWithAggregatesFilter<"PlanningTask"> | $Enums.PlanningTaskCategory;
    priority?: Prisma.EnumPlanningTaskPriorityWithAggregatesFilter<"PlanningTask"> | $Enums.PlanningTaskPriority;
    status?: Prisma.EnumPlanningTaskStatusWithAggregatesFilter<"PlanningTask"> | $Enums.PlanningTaskStatus;
    source?: Prisma.EnumPlanningTaskSourceWithAggregatesFilter<"PlanningTask"> | $Enums.PlanningTaskSource;
    dueAt?: Prisma.DateTimeNullableWithAggregatesFilter<"PlanningTask"> | Date | string | null;
    assigneeName?: Prisma.StringNullableWithAggregatesFilter<"PlanningTask"> | string | null;
    sortOrder?: Prisma.IntWithAggregatesFilter<"PlanningTask"> | number;
    reminderEnabled?: Prisma.BoolWithAggregatesFilter<"PlanningTask"> | boolean;
    reminderDaysBefore?: Prisma.IntWithAggregatesFilter<"PlanningTask"> | number;
    lastReminderAt?: Prisma.DateTimeNullableWithAggregatesFilter<"PlanningTask"> | Date | string | null;
    completedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"PlanningTask"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PlanningTask"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"PlanningTask"> | Date | string;
};
export type PlanningTaskCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    category?: $Enums.PlanningTaskCategory;
    priority?: $Enums.PlanningTaskPriority;
    status?: $Enums.PlanningTaskStatus;
    source?: $Enums.PlanningTaskSource;
    dueAt?: Date | string | null;
    assigneeName?: string | null;
    sortOrder?: number;
    reminderEnabled?: boolean;
    reminderDaysBefore?: number;
    lastReminderAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    wedding: Prisma.WeddingCreateNestedOneWithoutPlanningTasksInput;
};
export type PlanningTaskUncheckedCreateInput = {
    id?: string;
    weddingId: string;
    title: string;
    description?: string | null;
    category?: $Enums.PlanningTaskCategory;
    priority?: $Enums.PlanningTaskPriority;
    status?: $Enums.PlanningTaskStatus;
    source?: $Enums.PlanningTaskSource;
    dueAt?: Date | string | null;
    assigneeName?: string | null;
    sortOrder?: number;
    reminderEnabled?: boolean;
    reminderDaysBefore?: number;
    lastReminderAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PlanningTaskUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.EnumPlanningTaskCategoryFieldUpdateOperationsInput | $Enums.PlanningTaskCategory;
    priority?: Prisma.EnumPlanningTaskPriorityFieldUpdateOperationsInput | $Enums.PlanningTaskPriority;
    status?: Prisma.EnumPlanningTaskStatusFieldUpdateOperationsInput | $Enums.PlanningTaskStatus;
    source?: Prisma.EnumPlanningTaskSourceFieldUpdateOperationsInput | $Enums.PlanningTaskSource;
    dueAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assigneeName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    reminderEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reminderDaysBefore?: Prisma.IntFieldUpdateOperationsInput | number;
    lastReminderAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wedding?: Prisma.WeddingUpdateOneRequiredWithoutPlanningTasksNestedInput;
};
export type PlanningTaskUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.EnumPlanningTaskCategoryFieldUpdateOperationsInput | $Enums.PlanningTaskCategory;
    priority?: Prisma.EnumPlanningTaskPriorityFieldUpdateOperationsInput | $Enums.PlanningTaskPriority;
    status?: Prisma.EnumPlanningTaskStatusFieldUpdateOperationsInput | $Enums.PlanningTaskStatus;
    source?: Prisma.EnumPlanningTaskSourceFieldUpdateOperationsInput | $Enums.PlanningTaskSource;
    dueAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assigneeName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    reminderEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reminderDaysBefore?: Prisma.IntFieldUpdateOperationsInput | number;
    lastReminderAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PlanningTaskCreateManyInput = {
    id?: string;
    weddingId: string;
    title: string;
    description?: string | null;
    category?: $Enums.PlanningTaskCategory;
    priority?: $Enums.PlanningTaskPriority;
    status?: $Enums.PlanningTaskStatus;
    source?: $Enums.PlanningTaskSource;
    dueAt?: Date | string | null;
    assigneeName?: string | null;
    sortOrder?: number;
    reminderEnabled?: boolean;
    reminderDaysBefore?: number;
    lastReminderAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PlanningTaskUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.EnumPlanningTaskCategoryFieldUpdateOperationsInput | $Enums.PlanningTaskCategory;
    priority?: Prisma.EnumPlanningTaskPriorityFieldUpdateOperationsInput | $Enums.PlanningTaskPriority;
    status?: Prisma.EnumPlanningTaskStatusFieldUpdateOperationsInput | $Enums.PlanningTaskStatus;
    source?: Prisma.EnumPlanningTaskSourceFieldUpdateOperationsInput | $Enums.PlanningTaskSource;
    dueAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assigneeName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    reminderEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reminderDaysBefore?: Prisma.IntFieldUpdateOperationsInput | number;
    lastReminderAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PlanningTaskUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weddingId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.EnumPlanningTaskCategoryFieldUpdateOperationsInput | $Enums.PlanningTaskCategory;
    priority?: Prisma.EnumPlanningTaskPriorityFieldUpdateOperationsInput | $Enums.PlanningTaskPriority;
    status?: Prisma.EnumPlanningTaskStatusFieldUpdateOperationsInput | $Enums.PlanningTaskStatus;
    source?: Prisma.EnumPlanningTaskSourceFieldUpdateOperationsInput | $Enums.PlanningTaskSource;
    dueAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assigneeName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    reminderEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reminderDaysBefore?: Prisma.IntFieldUpdateOperationsInput | number;
    lastReminderAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PlanningTaskListRelationFilter = {
    every?: Prisma.PlanningTaskWhereInput;
    some?: Prisma.PlanningTaskWhereInput;
    none?: Prisma.PlanningTaskWhereInput;
};
export type PlanningTaskOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PlanningTaskCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    dueAt?: Prisma.SortOrder;
    assigneeName?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    reminderEnabled?: Prisma.SortOrder;
    reminderDaysBefore?: Prisma.SortOrder;
    lastReminderAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PlanningTaskAvgOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
    reminderDaysBefore?: Prisma.SortOrder;
};
export type PlanningTaskMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    dueAt?: Prisma.SortOrder;
    assigneeName?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    reminderEnabled?: Prisma.SortOrder;
    reminderDaysBefore?: Prisma.SortOrder;
    lastReminderAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PlanningTaskMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    weddingId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    dueAt?: Prisma.SortOrder;
    assigneeName?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    reminderEnabled?: Prisma.SortOrder;
    reminderDaysBefore?: Prisma.SortOrder;
    lastReminderAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PlanningTaskSumOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
    reminderDaysBefore?: Prisma.SortOrder;
};
export type PlanningTaskCreateNestedManyWithoutWeddingInput = {
    create?: Prisma.XOR<Prisma.PlanningTaskCreateWithoutWeddingInput, Prisma.PlanningTaskUncheckedCreateWithoutWeddingInput> | Prisma.PlanningTaskCreateWithoutWeddingInput[] | Prisma.PlanningTaskUncheckedCreateWithoutWeddingInput[];
    connectOrCreate?: Prisma.PlanningTaskCreateOrConnectWithoutWeddingInput | Prisma.PlanningTaskCreateOrConnectWithoutWeddingInput[];
    createMany?: Prisma.PlanningTaskCreateManyWeddingInputEnvelope;
    connect?: Prisma.PlanningTaskWhereUniqueInput | Prisma.PlanningTaskWhereUniqueInput[];
};
export type PlanningTaskUncheckedCreateNestedManyWithoutWeddingInput = {
    create?: Prisma.XOR<Prisma.PlanningTaskCreateWithoutWeddingInput, Prisma.PlanningTaskUncheckedCreateWithoutWeddingInput> | Prisma.PlanningTaskCreateWithoutWeddingInput[] | Prisma.PlanningTaskUncheckedCreateWithoutWeddingInput[];
    connectOrCreate?: Prisma.PlanningTaskCreateOrConnectWithoutWeddingInput | Prisma.PlanningTaskCreateOrConnectWithoutWeddingInput[];
    createMany?: Prisma.PlanningTaskCreateManyWeddingInputEnvelope;
    connect?: Prisma.PlanningTaskWhereUniqueInput | Prisma.PlanningTaskWhereUniqueInput[];
};
export type PlanningTaskUpdateManyWithoutWeddingNestedInput = {
    create?: Prisma.XOR<Prisma.PlanningTaskCreateWithoutWeddingInput, Prisma.PlanningTaskUncheckedCreateWithoutWeddingInput> | Prisma.PlanningTaskCreateWithoutWeddingInput[] | Prisma.PlanningTaskUncheckedCreateWithoutWeddingInput[];
    connectOrCreate?: Prisma.PlanningTaskCreateOrConnectWithoutWeddingInput | Prisma.PlanningTaskCreateOrConnectWithoutWeddingInput[];
    upsert?: Prisma.PlanningTaskUpsertWithWhereUniqueWithoutWeddingInput | Prisma.PlanningTaskUpsertWithWhereUniqueWithoutWeddingInput[];
    createMany?: Prisma.PlanningTaskCreateManyWeddingInputEnvelope;
    set?: Prisma.PlanningTaskWhereUniqueInput | Prisma.PlanningTaskWhereUniqueInput[];
    disconnect?: Prisma.PlanningTaskWhereUniqueInput | Prisma.PlanningTaskWhereUniqueInput[];
    delete?: Prisma.PlanningTaskWhereUniqueInput | Prisma.PlanningTaskWhereUniqueInput[];
    connect?: Prisma.PlanningTaskWhereUniqueInput | Prisma.PlanningTaskWhereUniqueInput[];
    update?: Prisma.PlanningTaskUpdateWithWhereUniqueWithoutWeddingInput | Prisma.PlanningTaskUpdateWithWhereUniqueWithoutWeddingInput[];
    updateMany?: Prisma.PlanningTaskUpdateManyWithWhereWithoutWeddingInput | Prisma.PlanningTaskUpdateManyWithWhereWithoutWeddingInput[];
    deleteMany?: Prisma.PlanningTaskScalarWhereInput | Prisma.PlanningTaskScalarWhereInput[];
};
export type PlanningTaskUncheckedUpdateManyWithoutWeddingNestedInput = {
    create?: Prisma.XOR<Prisma.PlanningTaskCreateWithoutWeddingInput, Prisma.PlanningTaskUncheckedCreateWithoutWeddingInput> | Prisma.PlanningTaskCreateWithoutWeddingInput[] | Prisma.PlanningTaskUncheckedCreateWithoutWeddingInput[];
    connectOrCreate?: Prisma.PlanningTaskCreateOrConnectWithoutWeddingInput | Prisma.PlanningTaskCreateOrConnectWithoutWeddingInput[];
    upsert?: Prisma.PlanningTaskUpsertWithWhereUniqueWithoutWeddingInput | Prisma.PlanningTaskUpsertWithWhereUniqueWithoutWeddingInput[];
    createMany?: Prisma.PlanningTaskCreateManyWeddingInputEnvelope;
    set?: Prisma.PlanningTaskWhereUniqueInput | Prisma.PlanningTaskWhereUniqueInput[];
    disconnect?: Prisma.PlanningTaskWhereUniqueInput | Prisma.PlanningTaskWhereUniqueInput[];
    delete?: Prisma.PlanningTaskWhereUniqueInput | Prisma.PlanningTaskWhereUniqueInput[];
    connect?: Prisma.PlanningTaskWhereUniqueInput | Prisma.PlanningTaskWhereUniqueInput[];
    update?: Prisma.PlanningTaskUpdateWithWhereUniqueWithoutWeddingInput | Prisma.PlanningTaskUpdateWithWhereUniqueWithoutWeddingInput[];
    updateMany?: Prisma.PlanningTaskUpdateManyWithWhereWithoutWeddingInput | Prisma.PlanningTaskUpdateManyWithWhereWithoutWeddingInput[];
    deleteMany?: Prisma.PlanningTaskScalarWhereInput | Prisma.PlanningTaskScalarWhereInput[];
};
export type EnumPlanningTaskCategoryFieldUpdateOperationsInput = {
    set?: $Enums.PlanningTaskCategory;
};
export type EnumPlanningTaskPriorityFieldUpdateOperationsInput = {
    set?: $Enums.PlanningTaskPriority;
};
export type EnumPlanningTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.PlanningTaskStatus;
};
export type EnumPlanningTaskSourceFieldUpdateOperationsInput = {
    set?: $Enums.PlanningTaskSource;
};
export type PlanningTaskCreateWithoutWeddingInput = {
    id?: string;
    title: string;
    description?: string | null;
    category?: $Enums.PlanningTaskCategory;
    priority?: $Enums.PlanningTaskPriority;
    status?: $Enums.PlanningTaskStatus;
    source?: $Enums.PlanningTaskSource;
    dueAt?: Date | string | null;
    assigneeName?: string | null;
    sortOrder?: number;
    reminderEnabled?: boolean;
    reminderDaysBefore?: number;
    lastReminderAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PlanningTaskUncheckedCreateWithoutWeddingInput = {
    id?: string;
    title: string;
    description?: string | null;
    category?: $Enums.PlanningTaskCategory;
    priority?: $Enums.PlanningTaskPriority;
    status?: $Enums.PlanningTaskStatus;
    source?: $Enums.PlanningTaskSource;
    dueAt?: Date | string | null;
    assigneeName?: string | null;
    sortOrder?: number;
    reminderEnabled?: boolean;
    reminderDaysBefore?: number;
    lastReminderAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PlanningTaskCreateOrConnectWithoutWeddingInput = {
    where: Prisma.PlanningTaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlanningTaskCreateWithoutWeddingInput, Prisma.PlanningTaskUncheckedCreateWithoutWeddingInput>;
};
export type PlanningTaskCreateManyWeddingInputEnvelope = {
    data: Prisma.PlanningTaskCreateManyWeddingInput | Prisma.PlanningTaskCreateManyWeddingInput[];
    skipDuplicates?: boolean;
};
export type PlanningTaskUpsertWithWhereUniqueWithoutWeddingInput = {
    where: Prisma.PlanningTaskWhereUniqueInput;
    update: Prisma.XOR<Prisma.PlanningTaskUpdateWithoutWeddingInput, Prisma.PlanningTaskUncheckedUpdateWithoutWeddingInput>;
    create: Prisma.XOR<Prisma.PlanningTaskCreateWithoutWeddingInput, Prisma.PlanningTaskUncheckedCreateWithoutWeddingInput>;
};
export type PlanningTaskUpdateWithWhereUniqueWithoutWeddingInput = {
    where: Prisma.PlanningTaskWhereUniqueInput;
    data: Prisma.XOR<Prisma.PlanningTaskUpdateWithoutWeddingInput, Prisma.PlanningTaskUncheckedUpdateWithoutWeddingInput>;
};
export type PlanningTaskUpdateManyWithWhereWithoutWeddingInput = {
    where: Prisma.PlanningTaskScalarWhereInput;
    data: Prisma.XOR<Prisma.PlanningTaskUpdateManyMutationInput, Prisma.PlanningTaskUncheckedUpdateManyWithoutWeddingInput>;
};
export type PlanningTaskScalarWhereInput = {
    AND?: Prisma.PlanningTaskScalarWhereInput | Prisma.PlanningTaskScalarWhereInput[];
    OR?: Prisma.PlanningTaskScalarWhereInput[];
    NOT?: Prisma.PlanningTaskScalarWhereInput | Prisma.PlanningTaskScalarWhereInput[];
    id?: Prisma.StringFilter<"PlanningTask"> | string;
    weddingId?: Prisma.StringFilter<"PlanningTask"> | string;
    title?: Prisma.StringFilter<"PlanningTask"> | string;
    description?: Prisma.StringNullableFilter<"PlanningTask"> | string | null;
    category?: Prisma.EnumPlanningTaskCategoryFilter<"PlanningTask"> | $Enums.PlanningTaskCategory;
    priority?: Prisma.EnumPlanningTaskPriorityFilter<"PlanningTask"> | $Enums.PlanningTaskPriority;
    status?: Prisma.EnumPlanningTaskStatusFilter<"PlanningTask"> | $Enums.PlanningTaskStatus;
    source?: Prisma.EnumPlanningTaskSourceFilter<"PlanningTask"> | $Enums.PlanningTaskSource;
    dueAt?: Prisma.DateTimeNullableFilter<"PlanningTask"> | Date | string | null;
    assigneeName?: Prisma.StringNullableFilter<"PlanningTask"> | string | null;
    sortOrder?: Prisma.IntFilter<"PlanningTask"> | number;
    reminderEnabled?: Prisma.BoolFilter<"PlanningTask"> | boolean;
    reminderDaysBefore?: Prisma.IntFilter<"PlanningTask"> | number;
    lastReminderAt?: Prisma.DateTimeNullableFilter<"PlanningTask"> | Date | string | null;
    completedAt?: Prisma.DateTimeNullableFilter<"PlanningTask"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"PlanningTask"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PlanningTask"> | Date | string;
};
export type PlanningTaskCreateManyWeddingInput = {
    id?: string;
    title: string;
    description?: string | null;
    category?: $Enums.PlanningTaskCategory;
    priority?: $Enums.PlanningTaskPriority;
    status?: $Enums.PlanningTaskStatus;
    source?: $Enums.PlanningTaskSource;
    dueAt?: Date | string | null;
    assigneeName?: string | null;
    sortOrder?: number;
    reminderEnabled?: boolean;
    reminderDaysBefore?: number;
    lastReminderAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PlanningTaskUpdateWithoutWeddingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.EnumPlanningTaskCategoryFieldUpdateOperationsInput | $Enums.PlanningTaskCategory;
    priority?: Prisma.EnumPlanningTaskPriorityFieldUpdateOperationsInput | $Enums.PlanningTaskPriority;
    status?: Prisma.EnumPlanningTaskStatusFieldUpdateOperationsInput | $Enums.PlanningTaskStatus;
    source?: Prisma.EnumPlanningTaskSourceFieldUpdateOperationsInput | $Enums.PlanningTaskSource;
    dueAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assigneeName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    reminderEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reminderDaysBefore?: Prisma.IntFieldUpdateOperationsInput | number;
    lastReminderAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PlanningTaskUncheckedUpdateWithoutWeddingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.EnumPlanningTaskCategoryFieldUpdateOperationsInput | $Enums.PlanningTaskCategory;
    priority?: Prisma.EnumPlanningTaskPriorityFieldUpdateOperationsInput | $Enums.PlanningTaskPriority;
    status?: Prisma.EnumPlanningTaskStatusFieldUpdateOperationsInput | $Enums.PlanningTaskStatus;
    source?: Prisma.EnumPlanningTaskSourceFieldUpdateOperationsInput | $Enums.PlanningTaskSource;
    dueAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assigneeName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    reminderEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reminderDaysBefore?: Prisma.IntFieldUpdateOperationsInput | number;
    lastReminderAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PlanningTaskUncheckedUpdateManyWithoutWeddingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.EnumPlanningTaskCategoryFieldUpdateOperationsInput | $Enums.PlanningTaskCategory;
    priority?: Prisma.EnumPlanningTaskPriorityFieldUpdateOperationsInput | $Enums.PlanningTaskPriority;
    status?: Prisma.EnumPlanningTaskStatusFieldUpdateOperationsInput | $Enums.PlanningTaskStatus;
    source?: Prisma.EnumPlanningTaskSourceFieldUpdateOperationsInput | $Enums.PlanningTaskSource;
    dueAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assigneeName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    reminderEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reminderDaysBefore?: Prisma.IntFieldUpdateOperationsInput | number;
    lastReminderAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PlanningTaskSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    weddingId?: boolean;
    title?: boolean;
    description?: boolean;
    category?: boolean;
    priority?: boolean;
    status?: boolean;
    source?: boolean;
    dueAt?: boolean;
    assigneeName?: boolean;
    sortOrder?: boolean;
    reminderEnabled?: boolean;
    reminderDaysBefore?: boolean;
    lastReminderAt?: boolean;
    completedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["planningTask"]>;
export type PlanningTaskSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    weddingId?: boolean;
    title?: boolean;
    description?: boolean;
    category?: boolean;
    priority?: boolean;
    status?: boolean;
    source?: boolean;
    dueAt?: boolean;
    assigneeName?: boolean;
    sortOrder?: boolean;
    reminderEnabled?: boolean;
    reminderDaysBefore?: boolean;
    lastReminderAt?: boolean;
    completedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["planningTask"]>;
export type PlanningTaskSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    weddingId?: boolean;
    title?: boolean;
    description?: boolean;
    category?: boolean;
    priority?: boolean;
    status?: boolean;
    source?: boolean;
    dueAt?: boolean;
    assigneeName?: boolean;
    sortOrder?: boolean;
    reminderEnabled?: boolean;
    reminderDaysBefore?: boolean;
    lastReminderAt?: boolean;
    completedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["planningTask"]>;
export type PlanningTaskSelectScalar = {
    id?: boolean;
    weddingId?: boolean;
    title?: boolean;
    description?: boolean;
    category?: boolean;
    priority?: boolean;
    status?: boolean;
    source?: boolean;
    dueAt?: boolean;
    assigneeName?: boolean;
    sortOrder?: boolean;
    reminderEnabled?: boolean;
    reminderDaysBefore?: boolean;
    lastReminderAt?: boolean;
    completedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PlanningTaskOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "weddingId" | "title" | "description" | "category" | "priority" | "status" | "source" | "dueAt" | "assigneeName" | "sortOrder" | "reminderEnabled" | "reminderDaysBefore" | "lastReminderAt" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["planningTask"]>;
export type PlanningTaskInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
};
export type PlanningTaskIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
};
export type PlanningTaskIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wedding?: boolean | Prisma.WeddingDefaultArgs<ExtArgs>;
};
export type $PlanningTaskPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PlanningTask";
    objects: {
        wedding: Prisma.$WeddingPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        weddingId: string;
        title: string;
        description: string | null;
        category: $Enums.PlanningTaskCategory;
        priority: $Enums.PlanningTaskPriority;
        status: $Enums.PlanningTaskStatus;
        source: $Enums.PlanningTaskSource;
        dueAt: Date | null;
        assigneeName: string | null;
        sortOrder: number;
        reminderEnabled: boolean;
        reminderDaysBefore: number;
        lastReminderAt: Date | null;
        completedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["planningTask"]>;
    composites: {};
};
export type PlanningTaskGetPayload<S extends boolean | null | undefined | PlanningTaskDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PlanningTaskPayload, S>;
export type PlanningTaskCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PlanningTaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PlanningTaskCountAggregateInputType | true;
};
export interface PlanningTaskDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PlanningTask'];
        meta: {
            name: 'PlanningTask';
        };
    };
    findUnique<T extends PlanningTaskFindUniqueArgs>(args: Prisma.SelectSubset<T, PlanningTaskFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PlanningTaskClient<runtime.Types.Result.GetResult<Prisma.$PlanningTaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PlanningTaskFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PlanningTaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PlanningTaskClient<runtime.Types.Result.GetResult<Prisma.$PlanningTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PlanningTaskFindFirstArgs>(args?: Prisma.SelectSubset<T, PlanningTaskFindFirstArgs<ExtArgs>>): Prisma.Prisma__PlanningTaskClient<runtime.Types.Result.GetResult<Prisma.$PlanningTaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PlanningTaskFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PlanningTaskFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PlanningTaskClient<runtime.Types.Result.GetResult<Prisma.$PlanningTaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PlanningTaskFindManyArgs>(args?: Prisma.SelectSubset<T, PlanningTaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlanningTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PlanningTaskCreateArgs>(args: Prisma.SelectSubset<T, PlanningTaskCreateArgs<ExtArgs>>): Prisma.Prisma__PlanningTaskClient<runtime.Types.Result.GetResult<Prisma.$PlanningTaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PlanningTaskCreateManyArgs>(args?: Prisma.SelectSubset<T, PlanningTaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PlanningTaskCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PlanningTaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlanningTaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PlanningTaskDeleteArgs>(args: Prisma.SelectSubset<T, PlanningTaskDeleteArgs<ExtArgs>>): Prisma.Prisma__PlanningTaskClient<runtime.Types.Result.GetResult<Prisma.$PlanningTaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PlanningTaskUpdateArgs>(args: Prisma.SelectSubset<T, PlanningTaskUpdateArgs<ExtArgs>>): Prisma.Prisma__PlanningTaskClient<runtime.Types.Result.GetResult<Prisma.$PlanningTaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PlanningTaskDeleteManyArgs>(args?: Prisma.SelectSubset<T, PlanningTaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PlanningTaskUpdateManyArgs>(args: Prisma.SelectSubset<T, PlanningTaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PlanningTaskUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PlanningTaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlanningTaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PlanningTaskUpsertArgs>(args: Prisma.SelectSubset<T, PlanningTaskUpsertArgs<ExtArgs>>): Prisma.Prisma__PlanningTaskClient<runtime.Types.Result.GetResult<Prisma.$PlanningTaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PlanningTaskCountArgs>(args?: Prisma.Subset<T, PlanningTaskCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PlanningTaskCountAggregateOutputType> : number>;
    aggregate<T extends PlanningTaskAggregateArgs>(args: Prisma.Subset<T, PlanningTaskAggregateArgs>): Prisma.PrismaPromise<GetPlanningTaskAggregateType<T>>;
    groupBy<T extends PlanningTaskGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PlanningTaskGroupByArgs['orderBy'];
    } : {
        orderBy?: PlanningTaskGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PlanningTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanningTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PlanningTaskFieldRefs;
}
export interface Prisma__PlanningTaskClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    wedding<T extends Prisma.WeddingDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WeddingDefaultArgs<ExtArgs>>): Prisma.Prisma__WeddingClient<runtime.Types.Result.GetResult<Prisma.$WeddingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PlanningTaskFieldRefs {
    readonly id: Prisma.FieldRef<"PlanningTask", 'String'>;
    readonly weddingId: Prisma.FieldRef<"PlanningTask", 'String'>;
    readonly title: Prisma.FieldRef<"PlanningTask", 'String'>;
    readonly description: Prisma.FieldRef<"PlanningTask", 'String'>;
    readonly category: Prisma.FieldRef<"PlanningTask", 'PlanningTaskCategory'>;
    readonly priority: Prisma.FieldRef<"PlanningTask", 'PlanningTaskPriority'>;
    readonly status: Prisma.FieldRef<"PlanningTask", 'PlanningTaskStatus'>;
    readonly source: Prisma.FieldRef<"PlanningTask", 'PlanningTaskSource'>;
    readonly dueAt: Prisma.FieldRef<"PlanningTask", 'DateTime'>;
    readonly assigneeName: Prisma.FieldRef<"PlanningTask", 'String'>;
    readonly sortOrder: Prisma.FieldRef<"PlanningTask", 'Int'>;
    readonly reminderEnabled: Prisma.FieldRef<"PlanningTask", 'Boolean'>;
    readonly reminderDaysBefore: Prisma.FieldRef<"PlanningTask", 'Int'>;
    readonly lastReminderAt: Prisma.FieldRef<"PlanningTask", 'DateTime'>;
    readonly completedAt: Prisma.FieldRef<"PlanningTask", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"PlanningTask", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"PlanningTask", 'DateTime'>;
}
export type PlanningTaskFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanningTaskSelect<ExtArgs> | null;
    omit?: Prisma.PlanningTaskOmit<ExtArgs> | null;
    include?: Prisma.PlanningTaskInclude<ExtArgs> | null;
    where: Prisma.PlanningTaskWhereUniqueInput;
};
export type PlanningTaskFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanningTaskSelect<ExtArgs> | null;
    omit?: Prisma.PlanningTaskOmit<ExtArgs> | null;
    include?: Prisma.PlanningTaskInclude<ExtArgs> | null;
    where: Prisma.PlanningTaskWhereUniqueInput;
};
export type PlanningTaskFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanningTaskSelect<ExtArgs> | null;
    omit?: Prisma.PlanningTaskOmit<ExtArgs> | null;
    include?: Prisma.PlanningTaskInclude<ExtArgs> | null;
    where?: Prisma.PlanningTaskWhereInput;
    orderBy?: Prisma.PlanningTaskOrderByWithRelationInput | Prisma.PlanningTaskOrderByWithRelationInput[];
    cursor?: Prisma.PlanningTaskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PlanningTaskScalarFieldEnum | Prisma.PlanningTaskScalarFieldEnum[];
};
export type PlanningTaskFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanningTaskSelect<ExtArgs> | null;
    omit?: Prisma.PlanningTaskOmit<ExtArgs> | null;
    include?: Prisma.PlanningTaskInclude<ExtArgs> | null;
    where?: Prisma.PlanningTaskWhereInput;
    orderBy?: Prisma.PlanningTaskOrderByWithRelationInput | Prisma.PlanningTaskOrderByWithRelationInput[];
    cursor?: Prisma.PlanningTaskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PlanningTaskScalarFieldEnum | Prisma.PlanningTaskScalarFieldEnum[];
};
export type PlanningTaskFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanningTaskSelect<ExtArgs> | null;
    omit?: Prisma.PlanningTaskOmit<ExtArgs> | null;
    include?: Prisma.PlanningTaskInclude<ExtArgs> | null;
    where?: Prisma.PlanningTaskWhereInput;
    orderBy?: Prisma.PlanningTaskOrderByWithRelationInput | Prisma.PlanningTaskOrderByWithRelationInput[];
    cursor?: Prisma.PlanningTaskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PlanningTaskScalarFieldEnum | Prisma.PlanningTaskScalarFieldEnum[];
};
export type PlanningTaskCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanningTaskSelect<ExtArgs> | null;
    omit?: Prisma.PlanningTaskOmit<ExtArgs> | null;
    include?: Prisma.PlanningTaskInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PlanningTaskCreateInput, Prisma.PlanningTaskUncheckedCreateInput>;
};
export type PlanningTaskCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PlanningTaskCreateManyInput | Prisma.PlanningTaskCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PlanningTaskCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanningTaskSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PlanningTaskOmit<ExtArgs> | null;
    data: Prisma.PlanningTaskCreateManyInput | Prisma.PlanningTaskCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PlanningTaskIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PlanningTaskUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanningTaskSelect<ExtArgs> | null;
    omit?: Prisma.PlanningTaskOmit<ExtArgs> | null;
    include?: Prisma.PlanningTaskInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PlanningTaskUpdateInput, Prisma.PlanningTaskUncheckedUpdateInput>;
    where: Prisma.PlanningTaskWhereUniqueInput;
};
export type PlanningTaskUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PlanningTaskUpdateManyMutationInput, Prisma.PlanningTaskUncheckedUpdateManyInput>;
    where?: Prisma.PlanningTaskWhereInput;
    limit?: number;
};
export type PlanningTaskUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanningTaskSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PlanningTaskOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PlanningTaskUpdateManyMutationInput, Prisma.PlanningTaskUncheckedUpdateManyInput>;
    where?: Prisma.PlanningTaskWhereInput;
    limit?: number;
    include?: Prisma.PlanningTaskIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PlanningTaskUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanningTaskSelect<ExtArgs> | null;
    omit?: Prisma.PlanningTaskOmit<ExtArgs> | null;
    include?: Prisma.PlanningTaskInclude<ExtArgs> | null;
    where: Prisma.PlanningTaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlanningTaskCreateInput, Prisma.PlanningTaskUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PlanningTaskUpdateInput, Prisma.PlanningTaskUncheckedUpdateInput>;
};
export type PlanningTaskDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanningTaskSelect<ExtArgs> | null;
    omit?: Prisma.PlanningTaskOmit<ExtArgs> | null;
    include?: Prisma.PlanningTaskInclude<ExtArgs> | null;
    where: Prisma.PlanningTaskWhereUniqueInput;
};
export type PlanningTaskDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlanningTaskWhereInput;
    limit?: number;
};
export type PlanningTaskDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanningTaskSelect<ExtArgs> | null;
    omit?: Prisma.PlanningTaskOmit<ExtArgs> | null;
    include?: Prisma.PlanningTaskInclude<ExtArgs> | null;
};
