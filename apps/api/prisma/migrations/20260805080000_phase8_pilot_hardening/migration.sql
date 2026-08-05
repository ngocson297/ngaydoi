CREATE TYPE "PilotItemStatus" AS ENUM ('NOT_STARTED','IN_PROGRESS','BLOCKED','PASSED','FAILED','WAIVED');
CREATE TYPE "PilotIssueSeverity" AS ENUM ('LOW','MEDIUM','HIGH','CRITICAL');
CREATE TYPE "PilotIssueStatus" AS ENUM ('OPEN','INVESTIGATING','FIXED','VERIFIED','CLOSED');
CREATE TABLE "PilotChecklistItem" (
  "id" TEXT NOT NULL, "code" TEXT NOT NULL, "category" TEXT NOT NULL, "title" TEXT NOT NULL,
  "description" TEXT, "owner" TEXT, "status" "PilotItemStatus" NOT NULL DEFAULT 'NOT_STARTED',
  "evidenceUrl" TEXT, "notes" TEXT, "sortOrder" INTEGER NOT NULL DEFAULT 0, "completedAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "PilotChecklistItem_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "PilotChecklistItem_code_key" ON "PilotChecklistItem"("code");
CREATE INDEX "PilotChecklistItem_category_sortOrder_idx" ON "PilotChecklistItem"("category","sortOrder");
CREATE INDEX "PilotChecklistItem_status_idx" ON "PilotChecklistItem"("status");
CREATE TABLE "PilotIssue" (
  "id" TEXT NOT NULL, "title" TEXT NOT NULL, "description" TEXT NOT NULL,
  "severity" "PilotIssueSeverity" NOT NULL DEFAULT 'MEDIUM', "status" "PilotIssueStatus" NOT NULL DEFAULT 'OPEN',
  "area" TEXT NOT NULL, "reporter" TEXT, "assignee" TEXT, "reproduction" TEXT, "resolution" TEXT,
  "dueAt" TIMESTAMP(3), "resolvedAt" TIMESTAMP(3), "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL, CONSTRAINT "PilotIssue_pkey" PRIMARY KEY ("id")
);
CREATE INDEX "PilotIssue_status_severity_createdAt_idx" ON "PilotIssue"("status","severity","createdAt");
CREATE INDEX "PilotIssue_area_idx" ON "PilotIssue"("area");
CREATE TABLE "SystemAnnouncement" (
  "id" TEXT NOT NULL, "title" TEXT NOT NULL, "message" TEXT NOT NULL, "level" TEXT NOT NULL DEFAULT 'INFO',
  "active" BOOLEAN NOT NULL DEFAULT true, "startsAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "endsAt" TIMESTAMP(3), "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL, CONSTRAINT "SystemAnnouncement_pkey" PRIMARY KEY ("id")
);
CREATE INDEX "SystemAnnouncement_active_startsAt_endsAt_idx" ON "SystemAnnouncement"("active","startsAt","endsAt");
