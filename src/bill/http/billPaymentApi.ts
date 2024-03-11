import type { BillPayment } from "../model/BillPayment";
import type { BillPaymentQuery } from "../model/BillPaymentQuery";
import type { NewBillPayment } from "../model/NewBillPayment";

export const getBillPayments = async (
  query: BillPaymentQuery,
): Promise<BillPayment[]> => {
  const response = await fetch(
    "http://localhost:8080/money-service/bill-payment/query",
    {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(query),
    },
  );

  return await response.json();
};

export const upsertBillPayment = async (
  billPayment: BillPayment | NewBillPayment,
): Promise<BillPayment> => {
  const response = await fetch(
    "http://localhost:8080/money-service/bill-payment",
    {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(billPayment),
    },
  );

  return await response.json();
};
