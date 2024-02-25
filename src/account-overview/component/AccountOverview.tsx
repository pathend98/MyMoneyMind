import { Balance } from "@/balance/component/Balance";
import { BillSummary } from "@/bill";
import { CreditSummary } from "@/credit";
import { DebitSummary } from "@/debit";
import { DepositSummary } from "@/deposit";
import { IncomeSummary } from "@/income";

const AccountOverview = (): JSX.Element => {
  return (
    <>
      <Balance />

      <DebitSummary />
      <DepositSummary />

      <CreditSummary />

      <IncomeSummary />
      <BillSummary />
    </>
  );
};

export { AccountOverview };
