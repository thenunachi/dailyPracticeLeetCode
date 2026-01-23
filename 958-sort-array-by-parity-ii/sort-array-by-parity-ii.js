/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let odd =1
    let even = 0
    let n = nums.length 
    while(odd < n && even < n){
        if(nums[even] %2===0){
            even +=2
        }
        else if (nums[odd] %2 != 0){
            odd +=2
        }
        else{
            [nums[even], nums[odd]] = [nums[odd], nums[even]]
            even += 2;
            odd += 2;
        }
    }
    return nums
    
};