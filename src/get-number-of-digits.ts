// source: https://stackoverflow.com/a/28203456
export function getNumberOfDigits(x: number) {
  return Math.max(Math.floor(Math.log10(Math.abs(x))), 0) + 1;
}
