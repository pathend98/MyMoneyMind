import type { Income } from "./Income";

export type NewIncome = Omit<Income, "id">;
