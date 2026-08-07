import type { AuthenticatedUser } from "../auth/auth.types.js";
import { EventOperationsService } from "./event-operations.service.js";
export declare class EventOperationsController {
    private readonly service;
    constructor(service: EventOperationsService);
    overview(weddingId: string, eventId: string | undefined, user: AuthenticatedUser): Promise<unknown>;
    createTable(weddingId: string, body: Record<string, unknown>, user: AuthenticatedUser): Promise<unknown>;
    updateTable(weddingId: string, tableId: string, body: Record<string, unknown>, user: AuthenticatedUser): Promise<unknown>;
    deleteTable(weddingId: string, tableId: string, user: AuthenticatedUser): Promise<unknown>;
    assign(weddingId: string, body: Record<string, unknown>, user: AuthenticatedUser): Promise<unknown>;
    unassign(weddingId: string, assignmentId: string, user: AuthenticatedUser): Promise<unknown>;
    autoAssign(weddingId: string, body: Record<string, unknown>, user: AuthenticatedUser): Promise<unknown>;
    createStation(weddingId: string, body: Record<string, unknown>, user: AuthenticatedUser): Promise<unknown>;
    updateStation(weddingId: string, stationId: string, body: Record<string, unknown>, user: AuthenticatedUser): Promise<unknown>;
    exportCsv(weddingId: string, eventId: string | undefined, user: AuthenticatedUser): Promise<string>;
    guestQr(invitationToken: string): Promise<string>;
    guestIdQr(guestId: string): Promise<string>;
    station(token: string): Promise<unknown>;
    search(token: string, query: string | undefined): Promise<unknown>;
    checkIn(token: string, body: Record<string, unknown>): Promise<unknown>;
    checkOut(token: string, body: Record<string, unknown>): Promise<unknown>;
}
