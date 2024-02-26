import { create } from "zustand";

const startingBalance = 4000.01;

interface BalanceStore {
  startingBalance: number;
}

const useBalanceStore = create<BalanceStore>()(() => ({
  startingBalance,
}));

export { useBalanceStore };
