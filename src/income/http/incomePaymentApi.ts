import type { IncomePayment } from "../model/IncomePayment";
import type { IncomePaymentQuery } from "../model/IncomePaymentQuery";
import type { NewIncomePayment } from "../model/NewIncomePayment";

export const getIncomePayments = async (
  query: IncomePaymentQuery,
): Promise<IncomePayment[]> => {
  const response = await fetch(
    "http://localhost:8080/money-service/income-payment/query",
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

export const upsertIncomePayment = async (
  incomePayment: IncomePayment | NewIncomePayment,
): Promise<IncomePayment> => {
  const response = await fetch(
    "http://localhost:8080/money-service/income-payment",
    {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(incomePayment),
    },
  );

  return await response.json();
};
