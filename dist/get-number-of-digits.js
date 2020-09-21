"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNumberOfDigits = void 0;
// source: https://stackoverflow.com/a/28203456
function getNumberOfDigits(x) {
    return Math.max(Math.floor(Math.log10(Math.abs(x))), 0) + 1;
}
exports.getNumberOfDigits = getNumberOfDigits;
