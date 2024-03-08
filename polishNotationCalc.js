const Stack = require('./stack');

function calc(expression) {
    const stack = new Stack();
    let currentNumber = '';

    // Process each character in reverse order
    for (let i = expression.length - 1; i >= 0; i--) {
        const char = expression[i];

        if (char === ' ') {
            // Ignore spaces
            continue;
        }

        if (isOperator(char) || i === 0) {
            // If it's an operator or the first character, push the accumulated num onto the stack
            const operand = parseFloar(currentNumber || expression[i]);
            stack.push(operand);
            currentNumber = ''; // Reset the currentNumber for the next operand

            if (isOperator(char)) {
                // For operators, push onto the stack
                stack.push(char);
            }
        } else {
            // If it's a digit, accumulate the characters to form a number
            currentNumber = char + currentNumber;
        }
    }

    // Process the stack to calculate the result
    while (stack.size > 1) {
        const operand2 = stack.pop();
        const operator = stack.pop();
        const operand1 = stack.pop();
        const result = applyOperator(operator, operand1, operand2);
        stack.push(result);
    }

    // the final result is on the top of the stack
    return stack.pop();
}

function isOperator(token) {
    return ['+', '-', '*', '/'].includes(token);
}

function applyOperator(operator, operand1, operand2) {
    switch (operator) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        case '/':
            if (operand2 === 0) {
                throw new Error('Division by zero');
            }
            return operand1 / operand2;
        default:
            throw new Error('Invalid Operator');
    }
}