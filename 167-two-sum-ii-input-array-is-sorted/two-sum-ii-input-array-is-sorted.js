/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    //will have two pointers which one starts from beginning and another starts from end
    //then will have a while loop add the two indices of the numbser and check equal to target
    //if equal to target return the indices+1 in the array
    //else return -1,-1

    let l = 0
    let r = numbers.length-1
   while(l < r ){
    if(numbers[l] + numbers[r] > target){
        r -=1
    }
    else if (numbers[l] + numbers[r] < target){
        l += 1
    }
    else{
        return [l+1 , r+1]
    }
   }
   return [-1,-1]
};