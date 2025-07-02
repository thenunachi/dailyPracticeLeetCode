/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];

    for (let token of tokens) {
        if (token === '+' || token === '-' || token === '*' || token === '/') {
            let b = parseInt(stack.pop());
            let a = parseInt(stack.pop());
            let result;
            if (token === '+') result = a + b;
            else if (token === '-') result = a - b;
            else if (token === '*') result = a * b;
            else result = Math.trunc(a / b); // Truncate toward 0
            stack.push(result);
        } else {
            stack.push(parseInt(token));
        }
    }

    return stack.pop();
};