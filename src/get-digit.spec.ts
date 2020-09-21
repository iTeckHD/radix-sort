import { getDigit } from "./get-digit";

test("get 3 from 213 (col 0)", () => {
  const number = 213;
  const column = 0;

  expect(getDigit(number, column)).toBe(3);
});

test("get 1 from 213 (col 1)", () => {
  const number = 213;
  const column = 1;

  expect(getDigit(number, column)).toBe(1);
});

test("get 2 from 213 (col 2)", () => {
  const number = 213;
  const column = 2;

  expect(getDigit(number, column)).toBe(2);
});

test("get 0 from 213 (col 3)", () => {
  const number = 213;
  const column = 3;

  expect(getDigit(number, column)).toBe(0);
});
