import { useState } from "react";
import { billPayments as bs } from "../data/billData";
import type { BillPayment } from "../model/BillPayment";

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
    <section>
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
    </section>
  );
};

export { BillSummary };
