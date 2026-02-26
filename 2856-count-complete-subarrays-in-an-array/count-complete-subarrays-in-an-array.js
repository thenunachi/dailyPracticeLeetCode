/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function(nums) {
    let target = new Set(nums).size;
    let map = new Map();
    let l = 0;
    let count = 0;

    for (let r = 0; r < nums.length; r++) {
        map.set(nums[r], (map.get(nums[r]) || 0) + 1);

        while (map.size === target) {
            // Shrink from the left to find the smallest complete window ending at r
            let leftNum = nums[l];
            map.set(leftNum, map.get(leftNum) - 1);
            if (map.get(leftNum) === 0) map.delete(leftNum);
            l++;
        }
        
        // If we found a complete subarray, then 'l' has moved.
        // Every subarray ending at 'r' that starts at 0, 1, ... (l-1) is complete.
        count += l;
    }
    return count;
};