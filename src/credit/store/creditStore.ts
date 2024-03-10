import type { Credit } from "../model/Credit";
import type { CreditQuery } from "../model/CreditQuery";
import { getCredits } from "../http/creditApi";
import { create } from "zustand";

interface CreditStore {
  credits: Credit[];
  write: (credits: Credit[]) => void;
  clear: () => void;
}

const query: CreditQuery = {
  startDate: "2024-03-01",
  endDate: "2024-03-31",
  paid: null,
};

const useCreditStore = create<CreditStore>()((set) => ({
  credits: [],
  write: (credits: Credit[]) => {
    set({ credits });
  },
  clear: () => {
    set({ credits: [] });
  },
}));

const populateCredits = async () => {
  const credits = await getCredits(query);
  useCreditStore.getState().write(credits);
};

populateCredits();

export { useCreditStore };
