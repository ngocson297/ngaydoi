import type { AuthenticatedUser } from "../auth/auth.types.js";
import { PrismaService } from "../prisma/prisma.service.js";
export declare class EventOperationsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private access;
    private scope;
    overview(weddingId: string, eventId: string | undefined, user: AuthenticatedUser): Promise<unknown>;
    createTable(weddingId: string, body: Record<string, unknown>, user: AuthenticatedUser): Promise<unknown>;
    updateTable(weddingId: string, tableId: string, body: Record<string, unknown>, user: AuthenticatedUser): Promise<unknown>;
    deleteTable(weddingId: string, tableId: string, user: AuthenticatedUser): Promise<unknown>;
    assignGuest(weddingId: string, body: Record<string, unknown>, user: AuthenticatedUser): Promise<unknown>;
    unassignGuest(weddingId: string, assignmentId: string, user: AuthenticatedUser): Promise<unknown>;
    autoAssign(weddingId: string, body: Record<string, unknown>, user: AuthenticatedUser): Promise<unknown>;
    createStation(weddingId: string, body: Record<string, unknown>, user: AuthenticatedUser): Promise<unknown>;
    updateStation(weddingId: string, stationId: string, body: Record<string, unknown>, user: AuthenticatedUser): Promise<unknown>;
    private activeStation;
    stationOverview(token: string): Promise<unknown>;
    searchStationGuests(token: string, query: string): Promise<unknown>;
    checkIn(token: string, body: Record<string, unknown>): Promise<unknown>;
    checkOut(token: string, body: Record<string, unknown>): Promise<unknown>;
    guestQr(invitationToken: string): Promise<string>;
    guestIdQr(guestId: string): Promise<string>;
    exportCsv(weddingId: string, eventId: string | undefined, user: AuthenticatedUser): Promise<string>;
}
