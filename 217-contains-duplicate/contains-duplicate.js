/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let s = new Set();
    for (let i = 0; i< nums.length; i++){
        if(!s.has(nums[i])){
            s.add(nums[i])
        }
        else{
            return true
        }
    }
    return false
};