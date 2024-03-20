import type { Income } from "./Income";

interface IncomePayment {
  id: string;
  income: Income;
  value: number;
  dateOfPayment: Date;
  paid: boolean;
}

export { IncomePayment };
