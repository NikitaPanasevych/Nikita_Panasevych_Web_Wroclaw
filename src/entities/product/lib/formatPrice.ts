import type { Price } from "../types/Product";

/**
 * Formats a price object into a string representation
 * @param price The price object containing main and fractional parts
 * @param currency The currency symbol to use (defaults to $)
 * @returns Formatted price string (e.g. $10.99)
 */
export const formatPrice = (price: Price, currency: string = "$"): string => {
  return `${currency}${price.main}.${price.fractional.toString().padStart(2, "0")}`;
};
