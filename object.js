/**
 * vim: syntax=javascript expandtab tabstop=4 shiftwidth=4 softtabstop=4:
 */

let testObj = {
    num: 1,
    getNum: () => {
        return testObj.num;
    },
    setNum: (newNum) => {
        testObj.num = newNum;
    }
};

console.dir(testObj.getNum());
testObj.setNum(2);
console.dir(testObj.getNum());
