/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function(s) {
    let counts = {};

    // Step 1: Group consecutive characters into block lengths
    let i = 0;
    while (i < s.length) {
        let char = s[i];
        let start = i;
        while (i < s.length && s[i] === char) {
            i++;
        }
        let length = i - start;
        
        if (!counts[char]) counts[char] = [];
        counts[char].push(length);
    }

    let maxLen = -1;

    // Step 2: For each character, find the best "Thrice" length
    for (let char in counts) {
        let L = counts[char].sort((a, b) => b - a);
        
        // Scenario 1: Three from the same longest block
        // From [5], we can get three [3]s. (L[0] - 2)
        let res1 = L[0] - 2;

        // Scenario 2: Three from the top two blocks
        // From [4, 3], we can get three [3]s.
        let res2 = -1;
        if (L.length >= 2) {
            if (L[0] === L[1]) {
                res2 = L[0] - 1;
            } else {
                res2 = L[1];
            }
        }

        // Scenario 3: Three from the top three blocks
        // From [2, 2, 2], we can get three [2]s.
        let res3 = (L.length >= 3) ? L[2] : -1;

        // Take the best of the 3 scenarios for this character
        let bestForChar = Math.max(res1, res2, res3);
        maxLen = Math.max(maxLen, bestForChar);
    }

    // If maxLen is 0 or less, it means no substring appeared 3 times
    return maxLen > 0 ? maxLen : -1;
};