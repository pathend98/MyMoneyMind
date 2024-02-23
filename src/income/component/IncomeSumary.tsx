import { useState } from "react";
import { incomes as is } from "../data/incomeData";
import type { IncomePayment } from "../model/IncomePayment";

const IncomeSummary = (): JSX.Element => {
  const [incomes] = useState<IncomePayment[]>(is);

  // This component is very similar in nature to the Bill Summary. It could be worth looking into methods to reduce duplication.

  const totalPaid = incomes
    .filter((income) => income.paid)
    .reduce(
      (total: number, income: IncomePayment) => (total += income.value),
      0,
    );

  const totalOutstanding = incomes
    .filter((income) => !income.paid)
    .reduce(
      (total: number, income: IncomePayment) => (total += income.value),
      0,
    );

  const totalValue = totalPaid + totalOutstanding;

  return (
    <>
      <h2>Income</h2>

      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Paid</td>
            <td>Value</td>
          </tr>
        </thead>

        <tbody>
          {incomes.map((income: IncomePayment) => (
            <tr key={income.id}>
              <td>{income.income.name}</td>
              <td>{income.paid ? "Yes" : "No"}</td>
              <td>{income.value.toFixed(2)}</td>
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

export { IncomeSummary };
