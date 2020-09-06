#!/usr/bin/env -S node --harmony

/**
 * vim: syntax=javascript expandtab tabstop=4 shiftwidth=4 softtabstop=4:
 */

let questionNumber = 1;
console.log("questionNumber = %o", questionNumber);
console.log("(typeof questionNumber === 'number') evaluates to %o", typeof questionNumber === 'number');
console.log("(questionNumber instanceof Number) evualuates to %o", questionNumber instanceof Number);
console.log('');

let choices = ['A', 'B', 'C', 'D', 'E'];
console.log("choices = %o", choices);
console.log("(typeof choices === 'object') evaluates to %o", typeof choices === 'object');
console.log("(choices instanceof Array) evaluates to %o", choices instanceof Array);
console.log('');

let answer = 'A';
console.log("answer = %o", answer);
console.log("(typeof answer === 'string') evaluates to %o", (typeof answer === 'string'));
console.log("(answer instanceof String) evaluates to %o", answer instanceof String);
console.log('');

let someObj = {a: 'a', b: 'b'};
console.log("someObj = %o", someObj);
console.log("(typeof someObj === 'object') evaluates to %o", (typeof someObj === 'object'));
console.log("(someObj instanceof Object) evaluates to %o", someObj instanceof Object);
