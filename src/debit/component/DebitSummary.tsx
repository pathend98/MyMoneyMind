import type { Debit } from "../model/Debit";
import { Link } from "react-router-dom";
import { useDebitStore } from "../store/debitStore";

const DebitSummary = (): JSX.Element => {
  const debits = useDebitStore((store) => store.debits);

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
    <section>
      <h2>Debit Expenses</h2>
      <Link to={"debit"}>Full Debit List</Link>
      <table>
        <thead>
          <tr>
            <td colSpan={2}>Type</td>
            <td>Value</td>
          </tr>
        </thead>

        <tbody>
          {Object.entries(categoryTotals).map(
            ([category, total]: [string, number]) => (
              <tr key={`debit-${category}`}>
                <td colSpan={2}>{category}</td>
                <td>{total.toFixed(2)}</td>
              </tr>
            ),
          )}
        </tbody>

        <tfoot>
          <tr>
            <td colSpan={2}>Total:</td>
            <td>{totalPrice.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
    </section>
  );
};

export { DebitSummary };
