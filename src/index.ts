import { getNumberOfDigits } from "./get-number-of-digits";
import { getDigit } from "./get-digit";

const MIN_NUMBER = 0;
const MAX_NUMBER = 999999999999999999999;
const NUMBER_OF_ITEMS = 99999999;

const UNSORTED_ARRAY1: number[] = [];
const UNSORTED_ARRAY2: number[] = [];
for (let i = 0; i < NUMBER_OF_ITEMS; i++) {
  UNSORTED_ARRAY1[i] = UNSORTED_ARRAY2[i] = getRandom(MIN_NUMBER, MAX_NUMBER);
}

console.log("Input", UNSORTED_ARRAY1);
const RESULT_ARRAY_SORT = time("Array.sort", () => arraySort(UNSORTED_ARRAY1));
const RESULT_RADIX_SORT = time("radix sort", () => radixSort(UNSORTED_ARRAY2));

function getRandom(min: number, max: number) {
  const _min = Math.ceil(min);
  const _max = Math.floor(max);
  return Math.floor(Math.random() * (_max - _min) + _min);
}

function time<T extends any>(label: string, fn: () => T): T {
  console.time(label);
  const result = fn();
  console.timeEnd(label);
  return result;
}

function radixSort(input: number[]) {
  const iterations = getNumberOfDigits(Math.max(...input));

  for (let col = 0; col < iterations; col++) {
    const bucket: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const output: number[] = [];

    // Count digits by column
    console.time("time");
    for (let i = 0; i < input.length; i++) {
      bucket[getDigit(input[i], col)]++;
    }
    console.timeEnd("time");

    // Calculate prefix sum
    for (let i = 1; i <= bucket.length - 1; i++) {
      bucket[i] = bucket[i - 1] + bucket[i];
    }

    // Recreate array
    for (let i = input.length - 1; i > -1; i--) {
      const digit = getDigit(input[i], col);
      bucket[digit]--;
      output[bucket[digit]] = input[i];
    }
    // Set input as output
    input = output;
  }

  return input;
}

function arraySort(input: number[]) {
  return input.sort((a, b) => a - b);
}
