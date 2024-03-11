import type { Deposit } from "../model/Deposit";
import type { NewDeposit } from "../model/NewDeposit";
import type { DepositQuery } from "../model/DepositQuery";

export const getDeposits = async (query: DepositQuery): Promise<Deposit[]> => {
  const response = await fetch(
    "http://localhost:8080/money-service/deposit/query",
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

export const upsertDeposit = async (
  deposit: Deposit | NewDeposit,
): Promise<Deposit> => {
  const response = await fetch("http://localhost:8080/money-service/deposit", {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(deposit),
  });

  return await response.json();
};
