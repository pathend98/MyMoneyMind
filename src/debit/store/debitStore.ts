import { create } from "zustand";
import type { Debit } from "../model/Debit";
import { getDebits } from "../http/debitApi";

interface DebitStore {
  debits: Debit[];
  fetch: () => void;
  clean: () => void;
}

const query: DebitQuery = {
  startDate: "2024-03-01",
  endDate: "2024-03-31",
};

const useDebitStore = create<DebitStore>()((set) => ({
  debits: [],
  fetch: async () => {
    const debits = await getDebits(query);
    set({ debits });
  },
  clean: () => {
    set({
      debits: [
        {
          id: "123",
          name: "Pharmacy",
          value: 9.81,
          category: "Health",
          date: new Date(),
        },
      ],
    });
  },
}));

setTimeout(useDebitStore.getState().clean, 10000);

export { useDebitStore };
