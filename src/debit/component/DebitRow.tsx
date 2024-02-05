import { Debit } from "../model/Debit";

interface DebitRowProps {
  debit: Debit;
}

const DebitRow = ({ debit }: DebitRowProps): JSX.Element => {
  return (
    <tr>
      <td>{debit.name}</td>
      <td>{debit.value}</td>
      <td>{debit.category}</td>
    </tr>
  );
};

export { DebitRow };
