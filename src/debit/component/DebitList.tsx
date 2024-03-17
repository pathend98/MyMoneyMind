import type { Debit } from "../model/Debit";
import { useDebitStore } from "../store/debitStore";

export const DebitList = (): JSX.Element => {
  const debits = useDebitStore((store) => store.debits);

  const totalPrice: number = debits.reduce(
    (total: number, debit: Debit) => total + debit.value,
    0,
  );

  return (
    <>
      <h1>Debit List</h1>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
            <td>Category</td>
          </tr>
        </thead>

        <tbody>
          {debits.map((debit) => (
            <tr key={debit.id}>
              <td>{debit.name}</td>
              <td>{debit.value}</td>
              <td>{debit.category}</td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td colSpan={2}>Total:</td>
            <td>{totalPrice}</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};
