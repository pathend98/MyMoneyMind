import type { BillPayment } from "../model/BillPayment";
import { useBillStore } from "../store/billStore";

const BillSummary = (): JSX.Element => {
  const bills = useBillStore((state) => state.billPayments);

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
            <td colSpan={2}>Total Paid:</td>
            <td>{totalPaid.toFixed(2)}</td>
          </tr>
          <tr>
            <td colSpan={2}>Total Outstanding:</td>
            <td>{totalOutstanding.toFixed(2)}</td>
          </tr>
          <tr>
            <td colSpan={2}>Total:</td>
            <td>{totalValue.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
    </section>
  );
};

export { BillSummary };
