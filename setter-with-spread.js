/**
 * vim: syntax=javascript expandtab tabstop=4 shiftwidth=4 softtabstop=4:
 */

let someProp = {
    one: 'hello world',
    two: 'world',
};

class Test {
    constructor() {
    }

    set prop(val) {
        someProp = {
            ...someProp,
            ...val,
        };
    }
}

const test = new Test();

console.log('BEFORE:\n', someProp);

test.prop = {
    one: 'hello',
};

console.log('AFTER:\n', someProp);
