import { BillSummary } from "@/bill";
import { CreditSummary } from "@/credit";
import { DebitSummary } from "@/debit";
import { DepositSummary } from "@/deposit";
import { IncomeSummary } from "@/income";

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
