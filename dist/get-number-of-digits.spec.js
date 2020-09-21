"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get_number_of_digits_1 = require("./get-number-of-digits");
test("should get number of digits, (true)", function () {
    var number = 213;
    expect(get_number_of_digits_1.getNumberOfDigits(number)).toBe(3);
});
test("should get number of digits, (false)", function () {
    var number = 213;
    expect(get_number_of_digits_1.getNumberOfDigits(number)).not.toBe(2);
});
