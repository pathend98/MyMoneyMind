import { useState } from "react";
import { Debit } from "../model/Debit";

const ds: Debit[] = [
  {
    id: "9e744782-541a-4d37-af74-f55b3bb414e5",
    name: "Market",
    value: 1.99,
    category: "Groceries",
    date: new Date(),
  },
  {
    id: "8a0b2401-640e-4e20-a4f9-cd10436a59bf",
    name: "Pharmacy",
    value: 9.81,
    category: "Health",
    date: new Date(),
  },
  {
    id: "b1244a0c-155e-4c74-8188-5e9758c48f34",
    name: "Cafe",
    value: 2.5,
    category: "Food / Drink",
    date: new Date(),
  },
  {
    id: "b1244a0c-155e-4c74-8188-5e9758c48f34",
    name: "Haircut",
    value: 24.0,
    category: "Health",
    date: new Date(),
  },
];

const DebitSummary = (): JSX.Element => {
  const [debits] = useState<Debit[]>(ds);

  const categoryTotals: Record<string, number> = debits.reduce(
    (totals: Record<string, number>, debit: Debit) => {
      if (debit.category in totals) {
        totals[debit.category] += debit.value;
        return totals;
      }

      return {
        ...totals,
        [debit.category]: debit.value,
      };
    },
    {},
  );

  const totalPrice: number = debits.reduce(
    (total: number, debit: Debit) => total + debit.value,
    0,
  );

  return (
    <>
      <h2>Debit Expenses</h2>
      <table>
        <thead>
          <tr>
            <td>Type</td>
            <td></td>
            <td>Value</td>
          </tr>
        </thead>

        <tbody>
          {Object.entries(categoryTotals).map(
            ([category, total]: [string, number]) => (
              <tr key={category}>
                <td>{category}</td>
                <td></td>
                <td>{total}</td>
              </tr>
            ),
          )}
        </tbody>

        <tfoot>
          <tr></tr>
          <tr></tr>
          <tr>
            <td></td>
            <td>Total: </td>
            <td>{totalPrice}</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export { DebitSummary };
