/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let arr = s.split("");
    let r = arr.length - 1
    let l = 0
    let vowels = ['a', 'e', 'i', 'o', 'u']
    while (l <= r) {
        while (l < r && !vowels.includes(arr[l].toLowerCase())) l++;
        while (l < r &&!vowels.includes(arr[r].toLowerCase())) r--;
        let temp = s[r];
        arr[r] = arr[l]
       arr[l] = temp
        l++
        r--

    }
    return arr.join("")
};