/**
 * vim: syntax=javascript expandtab tabstop=4 shiftwidth=4 softtabstop=4:
 */

let list = [
    {
        label: {
            en: 'one',
            ms: 'satu'
        },
        value: 'A'
    },
    {
        label: {
            en: 'two',
            ms: 'dua'
        },
        value: 'B'
    },
    {
        label: {
            en: 'three',
            ms: 'tiga'
        },
        value: 'C'
    },
    {
        label: {
            en: 'four',
            ms: 'empat'
        },
        value: 'D'
    },
    {
        label: {
            en: 'five',
            ms: 'lima'
        },
        value: 'E'
    }
];

console.log('The original array:');
console.dir(list);
console.log('');

let anotherList = list.map((x) => {
    // modifying x will mutate the original array
    x.test = 'hello world';

    // returning a value without modifying x will not mutate the original array
    return {
        label: x.label
    };
});

console.log('The original array, after the mutating list.map() call:');
console.dir(list);
console.log('');

console.log('Another array, assigned the value of the list.map() call. It receives the original value of the array before the mutation occured:');
console.dir(anotherList);
console.log('');
