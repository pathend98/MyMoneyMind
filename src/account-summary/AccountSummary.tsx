import { BillSummary } from "@/bill/BillSummary";
import { CreditSummary } from "@/credit/CreditSummary";
import { DebitSummary } from "@/debit";
import { DepositSummary } from "@/deposit/DepositSummary";
import { IncomeSummary } from "@/income/IncomeSumary";

const AccountSummary = (): JSX.Element => {
  return (
    <div>
      <h1>Account Summary</h1>
      <DebitSummary />
      <DepositSummary />

      <CreditSummary />

      <IncomeSummary />
      <BillSummary />
    </div>
  );
};

export { AccountSummary };
