import { create } from "zustand";
import type { Deposit } from "../model/Deposit";
import { DepositQuery } from "../model/DepositQuery";
import { getDeposits } from "../http/depositApi";

interface DepositStore {
  deposits: Deposit[];
  write: (deposits: Deposit[]) => void;
  clear: () => void;
}

const query: DepositQuery = {
  startDate: "2024-03-01",
  endDate: "2024-03-31",
};

const useDepositStore = create<DepositStore>()((set) => ({
  deposits: [],
  write: (deposits: Deposit[]) => set({ deposits }),
  clear: () => set({ deposits: [] }),
}));

const populateDeposits = async () => {
  const deposits = await getDeposits(query);
  useDepositStore.getState().write(deposits);
};

populateDeposits();

export { useDepositStore };
