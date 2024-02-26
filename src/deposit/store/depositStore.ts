import { create } from "zustand";
import type { Deposit } from "../model/Deposit";

const deposits = [
  {
    id: "064669ae-8681-4182-bc3c-5fd26fa7fd5c",
    name: "Pizza Money",
    value: 23.98,
    date: new Date(),
  },
  {
    id: "67cae2de-a154-4a6f-ace5-e600e36c9013",
    name: "Petrol",
    value: 4.5,
    date: new Date(),
  },
] satisfies Deposit[];

interface DepositStore {
  deposits: Deposit[];
}

const useDepositStore = create<DepositStore>()(() => ({
  deposits,
}));

export { useDepositStore };
