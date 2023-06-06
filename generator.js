/**
 * vim: syntax=javascript expandtab tabstop=4 shiftwidth=4 softtabstop=4:
 */

console.log('First Test:');

// Declaring a function with "function*" makes it a generator function
function* gen(n) {
    // infinite loop that decrements value by 1 each iteration
    for (let value = n; ; value -= 1) {
        // yield pauses the execution inside the generator function to return
        // the value
        yield value;
    }
}

// A generator function can be used for looping iterations
for (const i of gen(10)) {
    // condition for breaking the loop is located within the loop
    if (i <= 0) {
        break;
    }

    console.log(i);
}

console.log();
console.log('Second Test:');

// A simpler generator function with an infinite while loop that yields the
// current value before decrementing it every iteration
function* minus(n) {
    while(true) {
        yield n;
        n -= 1;
    }
}

// Another way of using this in a for loop
const iterator = minus(10);
for (let j = iterator.next().value; j > 0; j = iterator.next().value) {
    console.log(j);
}

console.log();
console.log('Third Test: The fibonacci sequence!');

// Now to apply this to the infamous Fibonacci sequence
function* fibonacci() {
    let [current, next] = [0, 1];
    while (true) {
        [current, next] = [next, current + next];
        yield {
            current,
            'Φ': next/current,
            '1/Φ': current/next,
        };
    }
}

const f = fibonacci();

// Loop through the first 10 numbers in the series and watch the magic
for (let i = 0; i < 10; i++) {
    console.log(f.next().value);
}
