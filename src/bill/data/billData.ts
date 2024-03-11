import { upsertBill } from "../http/billApi";
import { upsertBillPayment } from "../http/billPaymentApi";
import type { NewBillPayment } from "../model/NewBillPayment";

const billPayments = [
  {
    bill: {
      id: "eea635de-dcb5-4f64-9100-9a0ec88fee21",
      name: "Rent",
      value: 2000.0,
      dayOfMonth: 1,
      active: true as boolean,
    },
    value: 2000.0,
    dateOfPayment: new Date(),
    paid: true,
  },
  {
    bill: {
      id: "be800b5a-d793-4168-a123-73a9e8fe1376",
      name: "Energy",
      value: 150.0,
      dayOfMonth: 12,
      active: true as boolean,
    },
    value: 150.0,
    dateOfPayment: new Date(),
    paid: true,
  },
  {
    bill: {
      id: "8b7a4559-da1d-4b17-aeca-c78a3081e6cc",
      name: "Water",
      value: 50.0,
      dayOfMonth: 15,
      active: true as boolean,
    },
    value: 50.0,
    dateOfPayment: new Date(),
    paid: false,
  },
] satisfies NewBillPayment[];

billPayments.forEach(async (billPayment) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, ...bill } = billPayment.bill;
  const newBill = await upsertBill(bill);
  billPayment.bill = newBill;
  upsertBillPayment(billPayment);
});
