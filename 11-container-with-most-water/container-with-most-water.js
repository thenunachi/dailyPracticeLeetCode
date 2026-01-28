/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0;
    let r = height.length-1
    let maxL = 0
    while(l < r){
        let area = Math.min(height[r] , height[l]) * (r-l)
        maxL = Math.max(maxL,area)
        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }
    return maxL
};