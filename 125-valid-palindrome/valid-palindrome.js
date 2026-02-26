/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let alpha = "abcdefghijklmnopqrstuvwxyz1234567890"
    let l = 0
    let r = s.length - 1

    while (l < r) {
        let left = s[l].toLowerCase()
        let right = s[r].toLowerCase()
        if (!alpha.includes(left)) l++
        else if (!alpha.includes(right)) r--

        else {
            if (left != right) return false
            l++
            r--
        }
    }
    return true;
};