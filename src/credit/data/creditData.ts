import type { NewCredit } from "../model/NewCredit";

import { upsertCredit } from "../http/creditApi";

const credits = [
  {
    name: "Supermarket",
    value: 12.01,
    category: "Groceries",
    date: new Date(),
    dateOfPayment: null,
  },
  {
    name: "Flights",
    value: 201.77,
    category: "Travel",
    date: new Date(),
    dateOfPayment: new Date(),
  },
  {
    name: "Hotel",
    value: 400.2,
    category: "Travel",
    date: new Date(),
    dateOfPayment: null,
  },
  {
    name: "Taxi",
    value: 24.0,
    category: "Travel",
    date: new Date(),
    dateOfPayment: new Date(),
  },
  {
    name: "Shopping",
    value: 110.0,
    category: "Clothing",
    date: new Date(),
    dateOfPayment: new Date(),
  },
] satisfies NewCredit[];

credits.forEach((credit) => {
  upsertCredit(credit);
});
