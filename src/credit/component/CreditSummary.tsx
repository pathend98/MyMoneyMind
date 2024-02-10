import { useState } from "react";
import type { Credit } from "../model/Credit";

const cs = [
  {
    id: "5eeb7ee1-5fe0-49ee-af46-f0a862cc892b",
    name: "Supermarket",
    value: 12.01,
    category: "Groceries",
    date: new Date(),
    dateOfPayment: null,
  },
  {
    id: "91c195a9-77e4-4d62-949e-5a7d58e40476",
    name: "Flights",
    value: 201.77,
    category: "Travel",
    date: new Date(),
    dateOfPayment: new Date(),
  },
  {
    id: "0ffc1d9c-eb28-4434-a380-93616535872c",
    name: "Hotel",
    value: 400.2,
    category: "Travel",
    date: new Date(),
    dateOfPayment: null,
  },
  {
    id: "f8fdbb97-7747-4e52-8ae0-2e69449edd05",
    name: "Taxi",
    value: 24.0,
    category: "Travel",
    date: new Date(),
    dateOfPayment: new Date(),
  },
  {
    id: "4209d380-2a61-46b0-b99a-ddfe13b3c897",
    name: "Shopping",
    value: 110.0,
    category: "Clothing",
    date: new Date(),
    dateOfPayment: new Date(),
  },
] satisfies Credit[];

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
    <>
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
            <td>Total: </td>
            <td>{total.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export { CreditSummary };
