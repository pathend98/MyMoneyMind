import type { Credit } from "./Credit";

export type NewCredit = Omit<Credit, "id">;
