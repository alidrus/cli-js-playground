#!/usr/bin/env -S node --harmony

/**
 * vim: syntax=javascript expandtab tabstop=4 shiftwidth=4 softtabstop=4:
 */

let unsortedArray = [
    {
        text: 'Test',
        value: null
    },
    {
        text: 'Post',
        value: 3
    },
    {
        text: 'Reaction',
        value: 5
    },
    {
        text: 'Pre',
        value: 2
    }
];

let order = [
    'Test',
    'Reaction',
    'Pre',
    'Post',
];

let sortedArray = unsortedArray.sort((el1, el2) => {
    let index1 = order.findIndex(x => x === el1.text),
        index2 = order.findIndex(x => x === el2.text);

    return (index1 === index2)
        ? 0
        : (index1 < index2 ? -1 : 1);
});

console.dir(sortedArray);
