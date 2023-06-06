/**
 * vim: syntax=javascript expandtab tabstop=4 shiftwidth=4 softtabstop=4:
 */

const x = 1;
const y = 0;
const z = -1;
const n = null;
const o = '';
const p = 'something';

console.log(+x);
console.log(+y);
console.log(+z);
console.log(+n);
console.log(+o);
console.log(+p);

let i = 0;
console.log(i + o);
console.log(o + i);
console.log('' + i);

i += '';
console.log(i);

i += p;
console.log(i);

i += n;
console.log(i);
