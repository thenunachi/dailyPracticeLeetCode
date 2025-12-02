/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    for (let i = 0; i < nums.length; i++) {
        let val = 0
        val += fn(init, nums[i])
        
        init = val
        console.log(val,init)
    
    }
    if (nums.length <= 0) return init
    return init
};