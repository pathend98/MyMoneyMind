import type { IncomePayment } from "../model/IncomePayment";
import { create } from "zustand";
import { IncomePaymentQuery } from "../model/IncomePaymentQuery";
import { getIncomePayments } from "../http/incomePaymentApi";

interface IncomeStore {
  incomes: IncomePayment[];
  write: (incomes: IncomePayment[]) => void;
  clear: () => void;
}

const query: IncomePaymentQuery = {
  startDate: "2024-03-01",
  endDate: "2024-04-30",
};

const useIncomeStore = create<IncomeStore>()((set) => ({
  incomes: [],
  write: (incomes: IncomePayment[]) => set({ incomes }),
  clear: () => set({ incomes: [] }),
}));

const populateIncomes = async () => {
  const incomes = await getIncomePayments(query);
  useIncomeStore.getState().write(incomes);
};

populateIncomes();

export { useIncomeStore };
