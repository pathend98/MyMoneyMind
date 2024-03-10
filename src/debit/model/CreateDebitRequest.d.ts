import type { Debit } from "./Debit";

export type CreateDebitRequest = Omit<Debit, "id">;
