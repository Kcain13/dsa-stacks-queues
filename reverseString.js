const Stack = require('./stack');

function reverseString(inputString) {
    const stack = new Stack();

    // Push each character onto the stack
    for (let i = 0; i < inputString.length; i++) {
        stack.push(inputString[i]);
    }

    let reversedString = '';

    // Pop each charachter from the stack to build the reversed string
    while (!stack.isEmpty()) {
        reverseString += stack.pop();
    }

    return reversedString;
}

// Example usage:
const originalString = 'Hello, World!';
const reversedString = reverseString(originalString);
console.log(`Original String: ${originalString}`);
console.log(`Reversed String: ${reversedString}`);