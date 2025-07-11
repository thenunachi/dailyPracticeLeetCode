/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let l = 0
    for(let r = 1; r< nums.length; r++){
        if(nums[l] != nums[r]){
            l++
            nums[l] = nums[r]
          
            console.log(nums)
        }
       
    }
    return l+1
};