import type { Credit } from "./Credit";

export type CreateCreditRequest = Omit<Credit, "id">;
