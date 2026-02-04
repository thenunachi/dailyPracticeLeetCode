/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function(s) {
    let low = 1, high = s.length;
    let ans = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        
        if (canFindThrice(s, mid)) {
            ans = mid;    // This length works! 
            low = mid + 1; // Try to find something even longer
        } else {
            high = mid - 1; // Too long, try shorter
        }
    }
    return ans;
};

function canFindThrice(s, len) {
    let counts = new Array(26).fill(0);
    let i = 0;
    
    while (i < s.length) {
        let j = i;
        while (j < s.length && s[j] === s[i]) {
            j++;
        }
        
        let blockLen = j - i;
        if (blockLen >= len) {
            // Formula: a block of 5 has THREE substrings of length 3
            // 5 - 3 + 1 = 3
            let charIdx = s[i].charCodeAt(0) - 97;
            counts[charIdx] += (blockLen - len + 1);
            
            if (counts[charIdx] >= 3) return true;
        }
        i = j;
    }
    return false;
}