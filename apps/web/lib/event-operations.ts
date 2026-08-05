export type EventSummary = { id: string; title: string; startsAt: string; venueName: string };
export type Assignment = { id: string; guestId: string; seatCount: number; note: string | null; guest?: { id: string; fullName: string; groupName: string | null; side: string } };
export type SeatingTable = { id: string; name: string; code: string; capacity: number; zone: string | null; shape: string; note: string | null; sortOrder: number; assignments: Assignment[] };
export type GuestOperation = { id: string; fullName: string; salutation: string | null; phone: string | null; email: string | null; groupName: string | null; side: string; maxAdultCount: number; maxChildCount: number; invitation: { token: string; rsvp: { status: string; adultCount: number; childCount: number } | null } | null; assignment: Assignment | null; checkin: { id: string; adultCount: number; childCount: number; checkedInAt: string; checkedOutAt: string | null } | null };
export type CheckinStation = { id: string; name: string; token: string; status: "ACTIVE" | "DISABLED"; lastUsedAt: string | null; createdAt: string };
export type CheckinRecord = { id: string; guestId: string; adultCount: number; childCount: number; method: string; note: string | null; checkedInAt: string; checkedOutAt: string | null; guest: { fullName: string; groupName: string | null }; station: { name: string } | null };
export type EventOpsOverview = {
  wedding: { id: string; title: string };
  access: "OWNER" | "EDIT" | "VIEW";
  scope: { eventId: string | null; eventKey: string };
  events: EventSummary[];
  tables: SeatingTable[];
  guests: GuestOperation[];
  stations: CheckinStation[];
  records: CheckinRecord[];
  metrics: { tables: number; capacity: number; assignedSeats: number; unassignedGuests: number; checkedInGuests: number; checkedInPeople: number };
};

export const occupiedSeats = (table: SeatingTable): number => table.assignments.reduce((sum, item) => sum + item.seatCount, 0);
export const formatPeople = (adults: number, children: number): string => `${adults + children} người${children ? ` · ${children} trẻ em` : ""}`;
