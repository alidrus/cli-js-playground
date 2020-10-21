/**
 * vim: syntax=javascript expandtab tabstop=4 shiftwidth=4 softtabstop=4:
 */

const numberString = "22";
const numberInt = 22;
const nonNumber = "some random string";
const mixedAlpha1 = "10littleIndians";
const mixedAlpha2 = "little10Indians";
const mixedAlpha3 = "littleIndians10";

console.log('%o parses to %s', numberString, parseInt(numberString, 10));
console.log('%o parses to %s', numberInt, parseInt(numberInt, 10));
console.log('%o parses to %s', nonNumber, parseInt(nonNumber, 10));
console.log('%o parses to %s', mixedAlpha1, parseInt(mixedAlpha1, 10));
console.log('%o parses to %s', mixedAlpha2, parseInt(mixedAlpha2, 10));
console.log('%o parses to %s', mixedAlpha3, parseInt(mixedAlpha3, 10));
