import { useState } from "react";
import type { IncomePayment } from "../model/IncomePayment";

const is = [
  {
    id: "15b91b3e-63a4-403c-8584-1d4e3d965047",
    income: {
      id: "3e8cf208-36fb-452a-b7e5-db08d725e965",
      name: "Salary",
      value: 3000.0,
      dayOfMonth: 28,
      active: true,
    },
    value: 3000.0,
    dateOfPayment: new Date(),
    paid: true,
  },
] satisfies IncomePayment[];

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
