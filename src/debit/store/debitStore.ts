import { create } from "zustand";
import type { Debit } from "../model/Debit";

interface DebitStore {
  debits: Debit[];
}

const useDebitStore = create<DebitStore>()(() => ({
  debits: [
    {
      id: "9e744782-541a-4d37-af74-f55b3bb414e5",
      name: "Market",
      value: 1.99,
      category: "Groceries",
      date: new Date(),
    },
    {
      id: "8a0b2401-640e-4e20-a4f9-cd10436a59bf",
      name: "Pharmacy",
      value: 9.81,
      category: "Health",
      date: new Date(),
    },
    {
      id: "b1244a0c-155e-4c74-8188-5e9758c48f34",
      name: "Cafe",
      value: 2.5,
      category: "Food / Drink",
      date: new Date(),
    },
    {
      id: "b1244a0c-155e-4c74-8188-5e9758c48f34",
      name: "Haircut",
      value: 24.0,
      category: "Health",
      date: new Date(),
    },
  ],
}));

export { useDebitStore };
