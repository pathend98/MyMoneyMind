import type { Debit } from "./Debit";

export type NewDebit = Omit<Debit, "id">;
