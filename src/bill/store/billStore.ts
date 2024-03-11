import { getBillPayments } from "../http/billPaymentApi";
import type { BillPayment } from "../model/BillPayment";
import type { BillPaymentQuery } from "../model/BillPaymentQuery";

import { create } from "zustand";

interface BillStore {
  billPayments: BillPayment[];
  write: (billPayments: BillPayment[]) => void;
  clear: () => void;
}

const query: BillPaymentQuery = {
  startDate: "2024-03-01",
  endDate: "2024-04-30",
};

const useBillStore = create<BillStore>()((set) => ({
  billPayments: [],
  write: (billPayments: BillPayment[]) => set({ billPayments }),
  clear: () => set({ billPayments: [] }),
}));

const populateBillPayments = async () => {
  const billPayments = await getBillPayments(query);
  useBillStore.getState().write(billPayments);
};

populateBillPayments();

export { useBillStore };
