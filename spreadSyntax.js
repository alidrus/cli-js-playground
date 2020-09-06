/**
 * vim: syntax=javascript expandtab tabstop=4 shiftwidth=4 softtabstop=4:
 */

let obj1 = {
    a: 1,
    b: 2,
    c: 3
};

let obj2 = {
    d: 4,
    e: 5
};

let obj3 = {
    a: 5,
    b: 6,
    c: 7,
    ...obj2
};

console.log(obj3);

let obj4 = {
    ...obj1,
    d: 8,
    e: 9
};

console.log(obj4);
