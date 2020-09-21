import { getNumberOfDigits } from "./get-number-of-digits";

test("should get number of digits, (true)", () => {
  const number = 213;

  expect(getNumberOfDigits(number)).toBe(3);
});

test("should get number of digits, (false)", () => {
  const number = 213;

  expect(getNumberOfDigits(number)).not.toBe(2);
});
