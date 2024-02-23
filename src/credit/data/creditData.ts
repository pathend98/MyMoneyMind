import type { Credit } from "../model/Credit";

const credits = [
  {
    id: "5eeb7ee1-5fe0-49ee-af46-f0a862cc892b",
    name: "Supermarket",
    value: 12.01,
    category: "Groceries",
    date: new Date(),
    dateOfPayment: null,
  },
  {
    id: "91c195a9-77e4-4d62-949e-5a7d58e40476",
    name: "Flights",
    value: 201.77,
    category: "Travel",
    date: new Date(),
    dateOfPayment: new Date(),
  },
  {
    id: "0ffc1d9c-eb28-4434-a380-93616535872c",
    name: "Hotel",
    value: 400.2,
    category: "Travel",
    date: new Date(),
    dateOfPayment: null,
  },
  {
    id: "f8fdbb97-7747-4e52-8ae0-2e69449edd05",
    name: "Taxi",
    value: 24.0,
    category: "Travel",
    date: new Date(),
    dateOfPayment: new Date(),
  },
  {
    id: "4209d380-2a61-46b0-b99a-ddfe13b3c897",
    name: "Shopping",
    value: 110.0,
    category: "Clothing",
    date: new Date(),
    dateOfPayment: new Date(),
  },
] satisfies Credit[];

export { credits };
