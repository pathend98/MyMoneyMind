import type { DebitQuery } from "../model/DebitQuery";
import type { Debit } from "../model/Debit";

import { create } from "zustand";
import { getDebits } from "../http/debitApi";

interface DebitStore {
  debits: Debit[];
  write: (debits: Debit[]) => void;
  clear: () => void;
}

const query: DebitQuery = {
  startDate: "2024-03-01",
  endDate: "2024-03-31",
};

const useDebitStore = create<DebitStore>()((set) => ({
  debits: [],
  write: (debits: Debit[]) => {
    set({ debits });
  },
  clear: () => {
    set({ debits: [] });
  },
}));

const populateDebits = async () => {
  const debits = await getDebits(query);
  useDebitStore.getState().write(debits);
};

populateDebits();

export { useDebitStore };
