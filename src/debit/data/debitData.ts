import type { CreateDebitRequest } from "../model/CreateDebitRequest";

const debits = [
  {
    name: "Market",
    value: 1.99,
    category: "Groceries",
    date: new Date(),
  },
  {
    name: "Pharmacy",
    value: 9.81,
    category: "Health",
    date: new Date(),
  },
  {
    name: "Cafe",
    value: 2.5,
    category: "Food / Drink",
    date: new Date(),
  },
  {
    name: "Haircut",
    value: 24.0,
    category: "Health",
    date: new Date(),
  },
] satisfies CreateDebitRequest[];

debits.forEach(async (debit) => {
  await fetch("http://localhost:8080/money-service/debit", {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(debit),
  });
});
