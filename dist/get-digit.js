"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDigit = void 0;
/**
 *
 * @param number the number to check
 * @param position position of digit, position 0 for 213 is 3
 */
function getDigit(number, position) {
    var s = number.toString();
    var length = number.toString().length - 1;
    if (position > length) {
        return 0;
    }
    return parseInt(s[length - position]);
}
exports.getDigit = getDigit;
