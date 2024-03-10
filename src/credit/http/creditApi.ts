import type { CreditQuery } from "../model/CreditQuery";
import type { Credit } from "../model/Credit";

export const getCredits = async (query: CreditQuery): Promise<Credit[]> => {
  const response = await fetch(
    "http://localhost:8080/money-service/credit/query",
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
