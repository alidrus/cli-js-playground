/**
 * vim: syntax=javascript expandtab tabstop=4 shiftwidth=4 softtabstop=4:
 */

// This script will test the effects of Array.from() on both the caller as well
// as the array referenced from within Array.from's mapping function. This
// script will also let us examine what is returned by
// Array.prototype.push()

// This is our target array that we want to copy elements to
const targetArray = [8, 9, 10];

const calledFunction = () => {
    // Create a new array with 7 elements
    const newArray = [1, 2, 3, 4, 5, 6, 7];

    // Assign something with the new array returned by Array.from()
    const something = Array.from(newArray, element => targetArray.push(element));

    // something will contain the new lengths of targetArray after each
    // iteration of Array.from() second argument (i.e. the mapping function)
    // Expected output: [4, 5, 6, 7, 8, 9, 10]
    console.log(something);
};

// We're about to modify targetArray from calledFunction()
calledFunction();

// Display the new contents of targetArray
// Expected output: [8, 9, 10, 1, 2, 3, 4, 5, 6, 7]
console.log(targetArray);
