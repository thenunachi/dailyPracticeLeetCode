/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
   let n = temperatures.length;
    let res = new Array(n).fill(0); // Default to 0 if no warmer day is found
    let stack = []; // This will store INDICES

    for (let i = 0; i < n; i++) {
        // While today is warmer than the day at the top of our stack
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let prevIndex = stack.pop();
            // Calculate distance between days
            res[prevIndex] = i - prevIndex;
        }
        
        // Always push the current day's index to the stack
        stack.push(i);
    }
    
    return res; 
};