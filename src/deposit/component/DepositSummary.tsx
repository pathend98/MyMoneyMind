import { useState } from "react";
import { deposits as ds } from "../data/depositData";
import type { Deposit } from "../model/Deposit";

const DepositSummary = (): JSX.Element => {
  const [deposits] = useState<Deposit[]>(ds);

  const total = deposits.reduce(
    (total: number, deposit: Deposit) => total + deposit.value,
    0,
  );

  return (
    <>
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
    </>
  );
};

export { DepositSummary };
