/**
 * vim: syntax=javascript expandtab tabstop=4 shiftwidth=4 softtabstop=4:
 */

// Original array with only 5 elements
const argv = ["first", "second", "third", "fourth", "fifth"];

// Remove 5 elements
const argvCopy = Array.from(argv);
argvCopy.splice(0, 5);
console.dir(argvCopy);

// Remove 6 elements
const argvCopy2 = Array.from(argv);
argvCopy2.splice(0, 6);
console.dir(argvCopy2);
