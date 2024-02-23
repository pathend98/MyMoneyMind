import { useState } from "react";

import { billPayments as bs } from "@/bill/data/billData";
import { credits as cs } from "@/credit/data/creditData";
import { debits as ds } from "@/debit/data/debitData";
import { deposits as des } from "@/deposit/data/depositData";
import { incomes as is } from "@/income/data/incomeData";
import { startingBalance as start } from "../data/balanceData";

import type { BillPayment } from "@/bill/model/BillPayment";
import type { Credit } from "@/credit/model/Credit";
import type { Debit } from "@/debit/model/Debit";
import type { Deposit } from "@/deposit/model/Deposit";
import type { IncomePayment } from "@/income/model/IncomePayment";

type MoneySource = BillPayment | Credit | Debit | Deposit | IncomePayment;

const getMoneySourceTotalValue = (sources: MoneySource[]): number => {
  return sources.reduce((total, source) => total + source.value, 0);
};

const Balance = (): JSX.Element => {
  const [bills] = useState<BillPayment[]>(bs);
  const [credits] = useState<Credit[]>(cs);
  const [debits] = useState<Debit[]>(ds);
  const [deposits] = useState<Deposit[]>(des);
  const [incomes] = useState<IncomePayment[]>(is);
  const [startingBalance] = useState<number>(start);

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

  const actualBalance =
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
    <>
      <h2>Balance</h2>
      <p>Starting Balance: {startingBalance}</p>
      <p>Actual Balance: {actualBalance}</p>
      <p>Effective Balance: {effectiveBalance}</p>
    </>
  );
};

export { Balance };
