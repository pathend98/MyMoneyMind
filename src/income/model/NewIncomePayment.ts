import type { IncomePayment } from "./IncomePayment";

export type NewIncomePayment = Omit<IncomePayment, "id">;
