/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
    let stack = []
 
    for (let i = 0; i < s.length; i++) {
        if (stack.length > 0) {
            if (stack[stack.length - 1] !== s[i] && stack[stack.length - 1].toLowerCase() === s[i].toLowerCase()) {
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