/**
 * @param {string} s
 * @return {number}
 */
// var scoreOfString = function (s) {
//     let map = new Map
//     let sum = 0
//     let arr = []
//     for (let i = 0; i < s.length; i++) {
//         let char = s[i]
//         let ascii = s.charCodeAt(i)
//         map.set(char, ascii)
//         // console.log(map)
//     }
//   for (const value of map.values()) {
//     arr.push(value);
// }
  
//     for (let i = 1; i < arr.length; i++) {
//         sum += Math.abs(arr[i] - arr[i-1])
        
//     }
//     return sum
// };
var scoreOfString = function (s) {
    let sum = 0;
    for (let i = 1; i < s.length; i++) {
        sum += Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1));
    }
    return sum;
};