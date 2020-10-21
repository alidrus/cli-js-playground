/**
 * vim: syntax=javascript expandtab tabstop=4 shiftwidth=4 softtabstop=4:
 */

const samples = [
    '123',
    '.',
    '0.00',
    '123456.00'
];

samples.forEach((sample) => {
    let matches = sample.match(/^([1-9][0-9]*|0)(.[0-9][0-9])?$/);
    console.dir(matches);
});

const list = [
    'main',
    'beat',
    'backing',
    'other',
];

list.forEach((item) => {
    console.log(/^(main|beat|backing)$/.test(item));
});
