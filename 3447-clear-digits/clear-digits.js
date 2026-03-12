/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let num = "0123456789"
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (stack.length > 0) {
            if (alpha.includes(stack[stack.length - 1]) && num.includes(s[i])) {
                stack.pop()
            }
            else {
                stack.push(s[i])
            }
        }
        else {
            stack.push(s[i])
        }
    }
    return stack.join("")
};