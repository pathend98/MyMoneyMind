import type { Deposit } from "./Deposit";

export type NewDeposit = Omit<Deposit, "id">;
