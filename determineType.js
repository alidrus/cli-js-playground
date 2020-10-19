#!/usr/bin/env -S node --harmony

/**
 * vim: syntax=javascript expandtab tabstop=4 shiftwidth=4 softtabstop=4:
 */

var a = true;
console.log(typeof a === 'boolean');

var x = [1, 2, 3];
console.log(x instanceof Array);

var y = { a: 1, b: 2 };
console.log(x instanceof Object);
