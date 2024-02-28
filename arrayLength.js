/**
 * vim: syntax=javascript expandtab tabstop=4 shiftwidth=4 softtabstop=4:
 */

const list1 = [1, 2, 3, 4, 5];

console.log('BEFORE', list1);

list1.length = 12;

console.log('AFTER', list1);

list1.length = 0;

console.log('EMPTIED', list1);
