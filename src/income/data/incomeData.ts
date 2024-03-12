import type { NewIncomePayment } from "../model/NewIncomePayment";
import { upsertIncome } from "../http/incomeApi";
import { upsertIncomePayment } from "../http/incomePaymentApi";

const incomePayments = [
  {
    income: {
      id: "3e8cf208-36fb-452a-b7e5-db08d725e965",
      name: "Salary",
      value: 3000.0,
      dayOfMonth: 28,
      active: true as boolean,
    },
    value: 3000.0,
    dateOfPayment: new Date(),
    paid: true,
  },
] satisfies NewIncomePayment[];

incomePayments.forEach(async (incomePayment) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, ...income } = incomePayment.income;
  const newIncome = await upsertIncome(income);
  incomePayment.income = newIncome;
  upsertIncomePayment(incomePayment);
});
