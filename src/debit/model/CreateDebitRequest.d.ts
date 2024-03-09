import type { Debit } from "./Debit";

type CreateDebitRequest = Omit<Debit, "id">;
