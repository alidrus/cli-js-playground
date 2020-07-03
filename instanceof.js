#!/usr/bin/env -S node --harmony

/**
 * vim: syntax=javascript expandtab tabstop=4 shiftwidth=4 softtabstop=4:
 */

let questionNumber = 1;
console.log("questionNumber = 1");
console.log("typeof questionNumber === 'number'");
console.log(typeof questionNumber === 'number');
console.log("questionNumber instanceof Number");
console.log(questionNumber instanceof Number);
console.log('');

let choices = ['A', 'B', 'C', 'D', 'E'];
console.log("choices = ['A', 'B', 'C', 'D', 'E']");
console.log("typeof choices === " + (typeof choices) + "\ntrue");
console.log("choices instanceof Array");
console.log(choices instanceof Array);
console.log('');

let answer = 'A';
console.log("answer = 'A'");
console.log("typeof answer === " + (typeof answer) + "\ntrue");
console.log("answer instanceof String");
console.log(answer instanceof String);
console.log('');

let someObj = {a: 'a', b: 'b'};
console.log("someObj = {a: 'a', b: 'b'}");
console.log("typeof someObj === " + (typeof someObj) + "\ntrue");
console.log("someObj instanceof Object");
console.log(someObj instanceof Object);
