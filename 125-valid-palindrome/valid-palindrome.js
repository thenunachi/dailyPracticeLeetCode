/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let l = 0
    let r = s.length - 1;

    while (l <= r) {
        console.log(s[l], s[r])
        while (l<r && !alphanumeric(s[l])) l++
        while (l<r && !alphanumeric(s[r])) r--;
        if (s[l].toLowerCase() != s[r].toLowerCase()) return false;

        l++;
        r--;

    }
    return true;
};
const alphanumeric = (r) => {
    if ((r >= "a" && r <= "z") || (r >= "A" && r <= "Z") || (r >= "0" && r <= "9")) {
        return true
    }
    else {
        return false;
    }
}