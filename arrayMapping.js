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

console.dir(list.map(x => x.label.en));
