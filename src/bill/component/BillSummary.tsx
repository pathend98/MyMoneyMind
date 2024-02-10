import { useState } from "react";
import type { BillPayment } from "../model/BillPayment";

const bs = [
  {
    id: "f12bcb30-6f49-4a52-89d5-9cdd37fa6d20",
    bill: {
      id: "eea635de-dcb5-4f64-9100-9a0ec88fee21",
      name: "Rent",
      value: 2000.0,
      dayOfMonth: 1,
      active: true,
    },
    value: 2000.0,
    dateOfPayment: new Date(),
    paid: true,
  },
  {
    id: "dfa3e2fb-51c4-4b3d-a4c9-832268dd6c91",
    bill: {
      id: "be800b5a-d793-4168-a123-73a9e8fe1376",
      name: "Energy",
      value: 150.0,
      dayOfMonth: 12,
      active: true,
    },
    value: 150.0,
    dateOfPayment: new Date(),
    paid: true,
  },
  {
    id: "76e6014c-0acd-47c6-ba8c-dedcd335bfeb",
    bill: {
      id: "8b7a4559-da1d-4b17-aeca-c78a3081e6cc",
      name: "Water",
      value: 50.0,
      dayOfMonth: 15,
      active: true,
    },
    value: 50.0,
    dateOfPayment: new Date(),
    paid: false,
  },
] satisfies BillPayment[];

const BillSummary = (): JSX.Element => {
  const [bills] = useState<BillPayment[]>(bs);

  const totalPaid = bills
    .filter((bill) => bill.paid)
    .reduce((total: number, bill: BillPayment) => (total += bill.value), 0);

  const totalOutstanding = bills
    .filter((bill) => !bill.paid)
    .reduce((total: number, bill: BillPayment) => (total += bill.value), 0);

  const totalValue = totalPaid + totalOutstanding;

  return (
    <>
      <h2>Bills</h2>

      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Paid</td>
            <td>Value</td>
          </tr>
        </thead>

        <tbody>
          {bills.map((bill: BillPayment) => (
            <tr key={bill.id}>
              <td>{bill.bill.name}</td>
              <td>{bill.paid ? "Yes" : "No"}</td>
              <td>{bill.value.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td></td>
            <td>Total Paid:</td>
            <td>{totalPaid.toFixed(2)}</td>
          </tr>
          <tr>
            <td></td>
            <td>Total Outstanding:</td>
            <td>{totalOutstanding.toFixed(2)}</td>
          </tr>
          <tr>
            <td></td>
            <td>Total:</td>
            <td>{totalValue.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export { BillSummary };
