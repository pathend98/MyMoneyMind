import { Bill } from "./Bill";

interface BillPayment {
  id: string;
  bill: Bill;
  value: number;
  dateOfPayment: Date;
  paid: boolean;
}

export { BillPayment };
