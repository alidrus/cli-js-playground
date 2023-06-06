/**
 * vim: syntax=javascript expandtab tabstop=4 shiftwidth=4 softtabstop=4:
 */

// Hoisting works for functions declared using the "function name() {}" format
yourFunc();

function yourFunc() {
    console.log('hello from yourFunc');
}

// Hoisting also works for all functions within an object
const someObj = {
    func2() {
        someObj.func1();
    },
    func1() {
        console.log('hello from someObj.func1()');
    },
};
someObj.func2();

// There is no hoisting for functions declared using the "const name = () =>
// {};" a.k.a arrow functions, so the following line will produce an error:
myFunc();

const myFunc = function() {
    console.log('hello from myFunc');
};
