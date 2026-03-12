/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
    let stack = []


    for (let i = 0; i < s.length; i++) {
        let top = stack[stack.length - 1]
        let curr = s[i]
        if (stack.length > 0) {
            if ((top === "A" && curr === "B")|| (top === "C" && curr === "D")){
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
return stack.length
};