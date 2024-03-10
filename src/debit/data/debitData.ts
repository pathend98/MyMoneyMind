import type { NewDebit } from "../model/NewDebit";

import { upsertDebit } from "../http/debitApi";

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
] satisfies NewDebit[];

debits.forEach((debit) => upsertDebit(debit));
