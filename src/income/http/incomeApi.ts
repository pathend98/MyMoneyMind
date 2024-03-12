import type { Income } from "../model/Income";
import type { NewIncome } from "../model/NewIncome";

export const upsertIncome = async (
  income: Income | NewIncome,
): Promise<Income> => {
  const response = await fetch("http://localhost:8080/money-service/income", {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(income),
  });

  return await response.json();
};
