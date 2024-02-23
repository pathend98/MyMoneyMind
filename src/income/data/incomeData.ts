import type { IncomePayment } from "../model/IncomePayment";

const incomes = [
  {
    id: "15b91b3e-63a4-403c-8584-1d4e3d965047",
    income: {
      id: "3e8cf208-36fb-452a-b7e5-db08d725e965",
      name: "Salary",
      value: 3000.0,
      dayOfMonth: 28,
      active: true,
    },
    value: 3000.0,
    dateOfPayment: new Date(),
    paid: true,
  },
] satisfies IncomePayment[];

export { incomes };
