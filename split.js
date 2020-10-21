/**
 * vim: syntax=javascript expandtab tabstop=4 shiftwidth=4 softtabstop=4:
 */

let answer = {
    answer: '1:4'
};
let parts = answer.answer.split(':');

console.dir(Object.assign({answer: parts[0]}, answer));
console.dir(Object.assign({answer: parts[1]}, answer));
