"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get_digit_1 = require("./get-digit");
test("get 3 from 213 (col 0)", function () {
    var number = 213;
    var column = 0;
    expect(get_digit_1.getDigit(number, column)).toBe(3);
});
test("get 1 from 213 (col 1)", function () {
    var number = 213;
    var column = 1;
    expect(get_digit_1.getDigit(number, column)).toBe(1);
});
test("get 2 from 213 (col 2)", function () {
    var number = 213;
    var column = 2;
    expect(get_digit_1.getDigit(number, column)).toBe(2);
});
test("get 0 from 213 (col 3)", function () {
    var number = 213;
    var column = 3;
    expect(get_digit_1.getDigit(number, column)).toBe(0);
});
