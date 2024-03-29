import type { CreditQuery } from "../model/CreditQuery";
import type { Credit } from "../model/Credit";
import type { NewCredit } from "../model/NewCredit";

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

export const upsertCredit = async (
  credit: Credit | NewCredit,
): Promise<Credit> => {
  const response = await fetch("http://localhost:8080/money-service/credit", {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(credit),
  });

  return await response.json();
};
