import type { Debit } from "../model/Debit";
import type { DebitQuery } from "../model/DebitQuery";

export const getDebits = async (query: DebitQuery): Promise<Debit[]> => {
  const response = await fetch(
    "http://localhost:8080/money-service/debit/query",
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
