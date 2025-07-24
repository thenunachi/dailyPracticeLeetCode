/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let s = ""
    let l = 0
     let r = 0
     while(l < word1.length && r < word2.length){
        s += word1[l]
        s+= word2[r]
        l++
        r++
     }
     while(l < word1.length){
        s+= word1[l]
        l++
     }
     while(r< word2.length){
        s+= word2[r]
        r++
     }
     return s;
};