/**
 * vim: syntax=javascript expandtab tabstop=4 shiftwidth=4 softtabstop=4:
 */

// This works
yourFunc();

function yourFunc() {
    console.log('hello from yourFunc');
}

// This works
const someObj = {
    func2() {
        someObj.func1();
    },
    func1() {
        console.log('hello from someObj.func1()');
    },
};
someObj.func2();

// This doesn't work
myFunc();

const myFunc = function() {
    console.log('hello from myFunc');
};
