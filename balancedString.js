const Stack = require('./stack');

function isBalancedString(inputString) {
    const stack = new Stack();
    const openingBrackets = '({[';
    const closingBrackets = ')}]';

    for (let char of inputString) {
        if (openingBrackets.includes(char)) {
            // If it's an opening bracket, push onto the stack
            stack.push(char);
        } else if (closingBrackets.includes(char)) {
            // If it's a closing bracket, check if it matches the last opening bracket
            const lastOpeningBracket = stack.pop();
            if (!lastOpeningBracket || !areBracketsMatching(lastOpeningBracket, char)) {
                // mismatched brackets
                return false;
            }
        }
        // Ignore other characters
    }

    // Check if there are any remaining unclosed opening brackets
    return stack.isEmpty();
}

function areBracketsMatching(openingBracket, closingBracket) {
    // Check if the opening and closing brackets match
    return (
        (openingBracket === '(' && closingBracket === ')')
            (openingBracket === '{' && closingBracket === '}')
            (openingBracket === '[' && closingBracket === ']')
    );
}

