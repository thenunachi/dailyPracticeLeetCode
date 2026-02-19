/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {
    // Exactly K = AtMost(K) - AtMost(K-1)
    return atMost(nums, k) - atMost(nums, k - 1);
};
function atMost(nums, k) {
    let l = 0;
    let count = 0;
    let freq = new Map();

    for (let r = 0; r < nums.length; r++) {
        // 1. Add current number to frequency map
        freq.set(nums[r], (freq.get(nums[r]) || 0) + 1);

        // 2. Shrink window if we have more than k distinct integers
        while (freq.size > k) {
            let leftNum = nums[l];
            freq.set(leftNum, freq.get(leftNum) - 1);
            if (freq.get(leftNum) === 0) {
                freq.delete(leftNum);
            }
            l++;
        }

        // 3. The magic step: 
        // All subarrays ending at 'r' and starting from any index between 'l' and 'r'
        // are valid. There are (r - l + 1) such subarrays.
        count += (r - l + 1);
    }
    
    return count;
}