/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let l = 0
    let r = s.length - 1;
    while (l <= r) {
        let temp = s[r]
        s[r] = s[l]
        s[l] =temp
        l++;
        r--;
    }
};