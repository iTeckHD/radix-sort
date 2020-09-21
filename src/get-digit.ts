import { getNumberOfDigits } from "./get-number-of-digits";

/**
 *
 * @param number the number to check
 * @param position position of digit, position 0 for 213 is 3
 */
export function getDigit(number: number, position: number) {
  // return number & Math.pow(10, position);
  return Math.floor((number / Math.pow(10, position)) % 10);
}
