import { upsertDeposit } from "../http/depositApi";
import type { NewDeposit } from "../model/NewDeposit";

const deposits = [
  {
    name: "Pizza Money",
    value: 23.98,
    date: new Date(),
  },
  {
    name: "Petrol",
    value: 4.5,
    date: new Date(),
  },
] satisfies NewDeposit[];

deposits.forEach((deposit) => upsertDeposit(deposit));
