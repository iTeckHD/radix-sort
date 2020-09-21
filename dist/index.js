"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get_number_of_digits_1 = require("./get-number-of-digits");
var get_digit_1 = require("./get-digit");
var MIN_NUMBER = 0;
var MAX_NUMBER = 9999999;
var NUMBER_OF_ITEMS = 99999;
var UNSORTED_ARRAY1 = [];
var UNSORTED_ARRAY2 = [];
for (var i = 0; i < NUMBER_OF_ITEMS; i++) {
    UNSORTED_ARRAY1[i] = UNSORTED_ARRAY2[i] = getRandom(MIN_NUMBER, MAX_NUMBER);
}
console.log("Input", UNSORTED_ARRAY1);
var RESULT_ARRAY_SORT = time("Array.sort", function () { return arraySort(UNSORTED_ARRAY1); });
console.log("Array.sort", RESULT_ARRAY_SORT);
var RESULT_RADIX_SORT = time("radix sort", function () { return radixSort(UNSORTED_ARRAY2); });
console.log("Radix Sort", RESULT_RADIX_SORT);
function getRandom(min, max) {
    var _min = Math.ceil(min);
    var _max = Math.floor(max);
    return Math.floor(Math.random() * (_max - _min) + _min);
}
function time(label, fn) {
    console.time(label);
    var result = fn();
    console.timeEnd(label);
    return result;
}
function radixSort(input) {
    console.time("iterations");
    var iterations = get_number_of_digits_1.getNumberOfDigits(input.reduce(function (curr, prev) { return (curr < prev ? prev : curr); }, 0));
    console.timeEnd("iterations");
    console.time("iterations2");
    var iterations2 = get_number_of_digits_1.getNumberOfDigits(Math.max.apply(Math, input));
    console.timeEnd("iterations2");
    for (var col = 0; col < iterations; col++) {
        var bucket = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        var output = [];
        console.time("col " + col);
        // Count digits by column
        for (var i = 0; i < input.length; i++) {
            bucket[get_digit_1.getDigit(input[i], col)]++;
        }
        console.timeEnd("col " + col);
        // Calculate prefix sum
        for (var i = 1; i <= bucket.length - 1; i++) {
            bucket[i] = bucket[i - 1] + bucket[i];
        }
        // Recreate array
        for (var i = input.length - 1; i > -1; i--) {
            var digit = get_digit_1.getDigit(input[i], col);
            bucket[digit]--;
            output[bucket[digit]] = input[i];
        }
        // Set input as output
        input = output;
    }
    return input;
}
function arraySort(input) {
    return input.sort(function (a, b) { return a - b; });
}
