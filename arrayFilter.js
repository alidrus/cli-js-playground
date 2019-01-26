let testArray = [
    {
        id: 1,
        mode: 'response',
        sequence: 'solitary'
    },
    {
        id: 2,
        mode: 'test',
        sequence: 'pre'
    },
    {
        id: 3,
        mode: 'test',
        sequence: 'post'
    }
];

if (process.argv.length < 5)
{
    console.log('Usage: ' + process.argv[1] + ' ' + process.argv[2] + ' <field> <value>');
    process.exit(4);
}

let found = testArray.filter((x) => x[process.argv[3]] === process.argv[4]);
console.dir(found);
