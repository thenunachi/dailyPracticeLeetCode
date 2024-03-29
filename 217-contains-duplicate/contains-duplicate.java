class Solution {
    public boolean containsDuplicate(int[] nums) {
        HashSet<Integer> set = new HashSet<>();
        for(int n : nums){
            if(!set.contains(n)){
                set.add(n);
            }
            else{
                return true;
            }
        }
        return false;
    }
}