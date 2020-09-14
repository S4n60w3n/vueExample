export const getPercentage = (value: number, fromAmount: number): number => {
  return Math.round(value / (fromAmount / 100));
};

export const getPercentageFromAmount = (
  percentage: number,
  fromAmount: number
): number => {
  return Math.round(fromAmount * (percentage / 100));
};

export const isUnderAmount = (value: number, amount: number): boolean => {
  return value < amount;
};
