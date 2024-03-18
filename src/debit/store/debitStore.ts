import type { DebitQuery } from "../model/DebitQuery";
import type { Debit } from "../model/Debit";

import { create } from "zustand";
import { getDebits, upsertDebit } from "../http/debitApi";
import { NewDebit } from "../model/NewDebit";

interface DebitStore {
  debits: Debit[];
  write: (debits: Debit[]) => void;
  addAsync: (debit: NewDebit) => void;
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
  addAsync: async (debit: NewDebit) => {
    const newDebit = await upsertDebit(debit);
    set((state) => ({ debits: [...state.debits, newDebit] }));
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
