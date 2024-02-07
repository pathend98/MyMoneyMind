const objectHasProperty = <T extends object, U extends string>(
  o: T,
  property: U,
): o is T & Record<U, unknown> => {
  return property in o;
};

const calculateGroupTotals = (
  entries: object[],
  groupField: string,
  valueField: string,
): Record<string, number> => {
  return entries.reduce((totals: Record<string, number>, entry: object) => {
    if (
      !objectHasProperty(entry, groupField) ||
      !objectHasProperty(entry, valueField)
    ) {
      return totals;
    }

    const group = entry[groupField];
    const value = entry[valueField];

    if (typeof group !== "string" || typeof value !== "number") {
      return totals;
    }

    if (group in totals) {
      totals[group] += value;
      return totals;
    }

    return {
      ...totals,
      [group]: value,
    };
  }, {});
};

export { calculateGroupTotals };
