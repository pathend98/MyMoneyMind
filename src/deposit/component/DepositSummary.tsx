import { useState } from "react";
import type { Deposit } from "../model/Deposit";

const ds = [
  {
    id: "064669ae-8681-4182-bc3c-5fd26fa7fd5c",
    name: "Pizza Money",
    value: 23.98,
    date: new Date(),
  },
  {
    id: "67cae2de-a154-4a6f-ace5-e600e36c9013",
    name: "Petrol",
    value: 4.5,
    date: new Date(),
  },
] satisfies Deposit[];

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
