import { useState } from "react";
import { credits as cs } from "../data/creditData";
import type { Credit } from "../model/Credit";

interface CategorySummary {
  paid: number;
  outstanding: number;
}

const CreditSummary = (): JSX.Element => {
  const [credits] = useState<Credit[]>(cs);

  // Can find a better way to do this - map date of payment to a paid field, then group by paid
  const paid = credits.filter((credit) => credit.dateOfPayment !== null);
  const outstanding = credits.filter((credit) => credit.dateOfPayment === null);

  const totalPaid = paid.reduce((total, credit) => total + credit.value, 0);
  const totalOutstanding = outstanding.reduce(
    (total, credit) => total + credit.value,
    0,
  );
  const total = totalPaid + totalOutstanding;

  const categoryTotals = credits.reduce(
    (currentTotals: Record<string, CategorySummary>, credit: Credit) => {
      if (!(credit.category in currentTotals)) {
        currentTotals[credit.category] = {
          paid: 0,
          outstanding: 0,
        };
      }

      const creditStatus =
        credit.dateOfPayment === null ? "outstanding" : "paid";

      currentTotals[credit.category][creditStatus] += credit.value;
      return currentTotals;
    },
    {},
  );

  return (
    <section>
      <h2>Credit Expenses</h2>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Paid</td>
            <td>Outstanding</td>
          </tr>
        </thead>

        <tbody>
          {Object.entries(categoryTotals).map(
            ([category, totals]: [string, CategorySummary]) => (
              <tr key={`credit-${category}`}>
                <td>{category}</td>
                <td>{totals.paid.toFixed(2)}</td>
                <td>{totals.outstanding.toFixed(2)}</td>
              </tr>
            ),
          )}
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
            <td>{total.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
    </section>
  );
};

export { CreditSummary };
