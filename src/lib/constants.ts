
export const CURRENCY = {
  SYMBOL: "₹",
  CODE: "INR"
};

export const formatCurrency = (amount: number): string => {
  return `${CURRENCY.SYMBOL}${amount.toFixed(2)}`;
};
