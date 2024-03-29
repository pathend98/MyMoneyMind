import type { BillPayment } from "@/bill/model/BillPayment";
import type { Credit } from "@/credit/model/Credit";
import type { Debit } from "@/debit/model/Debit";
import type { Deposit } from "@/deposit/model/Deposit";
import type { IncomePayment } from "@/income/model/IncomePayment";
import { useCreditStore } from "@/credit/store/creditStore";
import { useDebitStore } from "@/debit/store/debitStore";
import { useBillStore } from "@/bill/store/billStore";
import { useDepositStore } from "@/deposit/store/depositStore";
import { useIncomeStore } from "@/income/store/incomeStore";
import { useBalanceStore } from "../store/balanceStore";

type MoneySource = BillPayment | Credit | Debit | Deposit | IncomePayment;

const getMoneySourceTotalValue = (sources: MoneySource[]): number => {
  return sources.reduce((total, source) => total + source.value, 0);
};

const Balance = (): JSX.Element => {
  const bills = useBillStore((store) => store.billPayments);
  const credits = useCreditStore((store) => store.credits);
  const debits = useDebitStore((store) => store.debits);
  const deposits = useDepositStore((store) => store.deposits);
  const incomes = useIncomeStore((store) => store.incomes);
  const startingBalance = useBalanceStore((store) => store.startingBalance);

  const totalBillValue = getMoneySourceTotalValue(bills);
  const paidBillValue = getMoneySourceTotalValue(
    bills.filter((bill) => bill.paid),
  );

  const totalCreditValue = getMoneySourceTotalValue(credits);
  const paidCreditValue = getMoneySourceTotalValue(
    credits.filter((credit) => credit.dateOfPayment !== null),
  );

  const totalDebitValue = getMoneySourceTotalValue(debits);
  const totalDepositValue = getMoneySourceTotalValue(deposits);

  const totalReceivedIncomeValue = getMoneySourceTotalValue(
    incomes.filter((income) => income.paid),
  );

  const currentBalance =
    startingBalance -
    (paidBillValue + paidCreditValue + totalDebitValue) +
    totalDepositValue +
    totalReceivedIncomeValue;
  const effectiveBalance =
    startingBalance -
    (totalBillValue + totalCreditValue + totalDebitValue) +
    totalDepositValue +
    totalReceivedIncomeValue;

  return (
    <section>
      <table>
        <tbody>
          <tr>
            <td>Starting Balance:</td>
            <td>{startingBalance.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Current Balance:</td>
            <td>{currentBalance.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Effective Balance:</td>
            <td>{effectiveBalance.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export { Balance };
