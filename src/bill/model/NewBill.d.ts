import type { Bill } from "./Bill";

export type NewBill = Omit<Bill, "id">;
