#!/usr/bin/env -S node --harmony

/**
 * vim: syntax=javascript expandtab tabstop=4 shiftwidth=4 softtabstop=4:
 */

let testObj = {
    num: 1,
    getNum: function() {
        return this.num;
    },
    setNum: function(newNum) {
        this.num = newNum;
    },
    subObj: {
        num: 99,
        getNum: function() {
            return this.num;
        },
        setNum: function(newNum) {
            this.num = newNum;
        }
    }
};

console.dir(testObj.getNum());
console.dir(testObj.subObj.getNum());

testObj.setNum(2);
testObj.subObj.setNum(100);


console.dir(testObj.getNum());
console.dir(testObj.subObj.getNum());
