#!/usr/bin/env -S node --harmony

/**
 * vim: syntax=javascript expandtab tabstop=4 shiftwidth=4 softtabstop=4:
 */

let samples = [
    '123',
    '.',
    '0.00',
    '123456.00'
];

samples.forEach((sample) => {
    let matches = sample.match(/^([1-9][0-9]*|0)(.[0-9][0-9])?$/);
    console.dir(matches);
});
