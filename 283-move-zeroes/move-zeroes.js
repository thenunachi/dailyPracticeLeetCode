/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function(nums) {
//     let l = 0
//     for(let r = 1;r <nums.length;r++){
//         if(nums[l] === 0 && nums[r] != 0){
//             // console.log(nums[l],nums[r],l,r)
//             let temp = nums[l]
//             nums[l] = nums[r]
//             nums[r] = temp
//             l++
//             // console.log(nums)
//         }
//         if(r < nums.length && nums[r] ===0){
//             l++
//             continue
//         }
//     }
// };
var moveZeroes = function(nums) {
    let l = 0;
    for (let r = 0; r < nums.length; r++) {
        if (nums[r] !== 0) {
            // Swap only if l and r are different
            if (l !== r) {
                let temp = nums[l];
                nums[l] = nums[r];
                nums[r] = temp;
            }
            l++;
        }
    }
};