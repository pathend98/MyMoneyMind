import { Debit } from "src/debit/Debit";

const AccountSummary = (): JSX.Element => {
  return (
    <div>
      <h1>Account Summary</h1>
      <Debit />
    </div>
  );
};

export { AccountSummary };
