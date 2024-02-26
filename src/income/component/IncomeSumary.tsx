import type { IncomePayment } from "../model/IncomePayment";
import { useIncomeStore } from "../store/incomeStore";

const IncomeSummary = (): JSX.Element => {
  const incomes = useIncomeStore((store) => store.incomes);

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
    <section>
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

export { IncomeSummary };
