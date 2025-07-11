/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let arr = s.split('');
    let l = 0, r = s.length - 1;

    while (l < r) {
        while (l < r && !vowels.includes(arr[l].toLowerCase())) l++;
        while (l < r && !vowels.includes(arr[r].toLowerCase())) r--;

        // swap vowels
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;

        l++;
        r--;
    }

    return arr.join('');
};