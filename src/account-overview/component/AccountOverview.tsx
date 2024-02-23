import { Balance } from "@/balance/component/Balance";
import { BillSummary } from "@/bill";
import { CreditSummary } from "@/credit";
import { DebitSummary } from "@/debit";
import { DepositSummary } from "@/deposit";
import { IncomeSummary } from "@/income";

const AccountOverview = (): JSX.Element => {
  return (
    <div>
      <h1>Account Summary</h1>

      <Balance />

      <DebitSummary />
      <DepositSummary />

      <CreditSummary />

      <IncomeSummary />
      <BillSummary />
    </div>
  );
};

export { AccountOverview };
