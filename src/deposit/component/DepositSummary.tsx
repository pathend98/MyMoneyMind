import type { Deposit } from "../model/Deposit";
import { useDepositStore } from "../store/depositStore";

const DepositSummary = (): JSX.Element => {
  const deposits = useDepositStore((store) => store.deposits);

  const total = deposits.reduce(
    (total: number, deposit: Deposit) => total + deposit.value,
    0,
  );

  return (
    <section>
      <h2>Deposits</h2>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Value</td>
          </tr>
        </thead>

        <tbody>
          {deposits.map((deposit) => (
            <tr key={deposit.id}>
              <td>{deposit.name}</td>
              <td>{deposit.value.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td>Total:</td>
            <td>{total}</td>
          </tr>
        </tfoot>
      </table>
    </section>
  );
};

export { DepositSummary };
