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

console.dir(list);

let anotherList = list.map((x) => {
    // modifying x will mutate the original array
    x.test = 'hello world';

    // returning a value without modifying x will not mutate the original array
    return {
        label: x.label
    };
});

console.dir(list);

console.dir(anotherList);
