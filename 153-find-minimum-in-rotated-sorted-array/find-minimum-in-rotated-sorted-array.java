// class Solution {
//     public int findMin(int[] nums) {
//         int l = 0;
//         int r = nums.length-1;
//         while(l<r){
//             int m = (l+r)/2;
//             if(nums[m] > nums[l]){
//                 l = m+1;
//             }
//             else{
//                 r = m-1;
//             }
//         }
//         return nums[l];
//     }
// }
class Solution {
    public int findMin(int[] nums) {
        int l = 0;
        int r= nums.length-1;
        while(l<=r){
            if(nums[l]<= nums[r]){
                return nums[l];
            }
            int m = (l+r)/2;
            if(nums[m] >= nums[l]){
                l = m+1;
            }
            else{
                r= m;
            }
        }
        return 0;
    }
}