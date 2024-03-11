import type { Bill } from "../model/Bill";
import type { NewBill } from "../model/NewBill";

export const upsertBill = async (bill: Bill | NewBill): Promise<Bill> => {
  const response = await fetch("http://localhost:8080/money-service/bill", {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(bill),
  });

  return await response.json();
};
