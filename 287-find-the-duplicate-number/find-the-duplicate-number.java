class Solution {
    public int findDuplicate(int[] nums) {
        //cant use map,set 
            int low = 1;
        int high = nums.length - 1;
        
        while (low < high) {
            int mid = low + (high - low) / 2;
            int count = 0;
            
            for (int num : nums) {
                if (num <= mid) {
                    count++;
                }
            }
            System.out.println(mid);
              System.out.print("---");
              System.out.println(count);
            if (count > mid) {
                high = mid;
            } else {
                low = mid + 1;
            }
        }
        
        return low;
    }
}
// time-O(n log n)
//space O(1)