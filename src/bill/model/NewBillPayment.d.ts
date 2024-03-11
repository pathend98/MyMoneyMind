import type { BillPayment } from "./BillPayment";

export type NewBillPayment = Omit<BillPayment, "id">;
