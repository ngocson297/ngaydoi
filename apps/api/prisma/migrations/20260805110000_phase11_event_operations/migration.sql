CREATE TYPE "SeatingTableShape" AS ENUM ('ROUND','RECTANGLE','LONG','OTHER');
CREATE TYPE "CheckinMethod" AS ENUM ('QR','MANUAL','SEARCH');
CREATE TYPE "CheckinStationStatus" AS ENUM ('ACTIVE','DISABLED');

CREATE TABLE "SeatingTable" (
  "id" TEXT NOT NULL,
  "weddingId" TEXT NOT NULL,
  "eventId" TEXT,
  "eventKey" TEXT NOT NULL DEFAULT 'WEDDING',
  "name" TEXT NOT NULL,
  "code" TEXT NOT NULL,
  "capacity" INTEGER NOT NULL DEFAULT 10,
  "zone" TEXT,
  "shape" "SeatingTableShape" NOT NULL DEFAULT 'ROUND',
  "note" TEXT,
  "sortOrder" INTEGER NOT NULL DEFAULT 0,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "SeatingTable_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "SeatingTable_weddingId_eventKey_code_key" ON "SeatingTable"("weddingId","eventKey","code");
CREATE INDEX "SeatingTable_weddingId_eventKey_sortOrder_idx" ON "SeatingTable"("weddingId","eventKey","sortOrder");
CREATE INDEX "SeatingTable_eventId_idx" ON "SeatingTable"("eventId");

CREATE TABLE "SeatAssignment" (
  "id" TEXT NOT NULL,
  "weddingId" TEXT NOT NULL,
  "eventId" TEXT,
  "eventKey" TEXT NOT NULL DEFAULT 'WEDDING',
  "tableId" TEXT NOT NULL,
  "guestId" TEXT NOT NULL,
  "seatCount" INTEGER NOT NULL DEFAULT 1,
  "note" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "SeatAssignment_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "SeatAssignment_guestId_eventKey_key" ON "SeatAssignment"("guestId","eventKey");
CREATE INDEX "SeatAssignment_weddingId_eventKey_idx" ON "SeatAssignment"("weddingId","eventKey");
CREATE INDEX "SeatAssignment_tableId_idx" ON "SeatAssignment"("tableId");

CREATE TABLE "CheckinStation" (
  "id" TEXT NOT NULL,
  "weddingId" TEXT NOT NULL,
  "eventId" TEXT,
  "eventKey" TEXT NOT NULL DEFAULT 'WEDDING',
  "name" TEXT NOT NULL,
  "token" TEXT NOT NULL,
  "status" "CheckinStationStatus" NOT NULL DEFAULT 'ACTIVE',
  "lastUsedAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "CheckinStation_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "CheckinStation_token_key" ON "CheckinStation"("token");
CREATE INDEX "CheckinStation_weddingId_eventKey_status_idx" ON "CheckinStation"("weddingId","eventKey","status");
CREATE INDEX "CheckinStation_eventId_idx" ON "CheckinStation"("eventId");

CREATE TABLE "CheckinRecord" (
  "id" TEXT NOT NULL,
  "weddingId" TEXT NOT NULL,
  "eventId" TEXT,
  "eventKey" TEXT NOT NULL DEFAULT 'WEDDING',
  "guestId" TEXT NOT NULL,
  "invitationId" TEXT,
  "stationId" TEXT,
  "method" "CheckinMethod" NOT NULL DEFAULT 'MANUAL',
  "adultCount" INTEGER NOT NULL DEFAULT 1,
  "childCount" INTEGER NOT NULL DEFAULT 0,
  "note" TEXT,
  "checkedInAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "checkedOutAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "CheckinRecord_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "CheckinRecord_guestId_eventKey_key" ON "CheckinRecord"("guestId","eventKey");
CREATE INDEX "CheckinRecord_weddingId_eventKey_checkedInAt_idx" ON "CheckinRecord"("weddingId","eventKey","checkedInAt");
CREATE INDEX "CheckinRecord_stationId_checkedInAt_idx" ON "CheckinRecord"("stationId","checkedInAt");

ALTER TABLE "SeatingTable" ADD CONSTRAINT "SeatingTable_weddingId_fkey" FOREIGN KEY ("weddingId") REFERENCES "Wedding"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "SeatingTable" ADD CONSTRAINT "SeatingTable_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "SeatAssignment" ADD CONSTRAINT "SeatAssignment_weddingId_fkey" FOREIGN KEY ("weddingId") REFERENCES "Wedding"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "SeatAssignment" ADD CONSTRAINT "SeatAssignment_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "SeatAssignment" ADD CONSTRAINT "SeatAssignment_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "SeatingTable"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "SeatAssignment" ADD CONSTRAINT "SeatAssignment_guestId_fkey" FOREIGN KEY ("guestId") REFERENCES "Guest"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "CheckinStation" ADD CONSTRAINT "CheckinStation_weddingId_fkey" FOREIGN KEY ("weddingId") REFERENCES "Wedding"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "CheckinStation" ADD CONSTRAINT "CheckinStation_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "CheckinRecord" ADD CONSTRAINT "CheckinRecord_weddingId_fkey" FOREIGN KEY ("weddingId") REFERENCES "Wedding"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "CheckinRecord" ADD CONSTRAINT "CheckinRecord_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "CheckinRecord" ADD CONSTRAINT "CheckinRecord_guestId_fkey" FOREIGN KEY ("guestId") REFERENCES "Guest"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "CheckinRecord" ADD CONSTRAINT "CheckinRecord_invitationId_fkey" FOREIGN KEY ("invitationId") REFERENCES "Invitation"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "CheckinRecord" ADD CONSTRAINT "CheckinRecord_stationId_fkey" FOREIGN KEY ("stationId") REFERENCES "CheckinStation"("id") ON DELETE SET NULL ON UPDATE CASCADE;
