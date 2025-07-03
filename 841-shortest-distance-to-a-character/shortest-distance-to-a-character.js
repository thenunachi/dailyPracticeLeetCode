/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    let prev = Infinity;
    let n = s.length;
    let distance = new Array(n).fill(Infinity);
    for(let i = 0;i<n;i++){
        if(s[i] === c){
            prev = i;
        }
        if(prev != Infinity){
            distance[i] = i-prev;
        }
    }
    for(let i = n-1; i>=0; i--){
        if(s[i] === c){
            prev = i;
        }
        if(prev != Infinity){
            distance[i] = Math.min(distance[i],Math.abs(prev-i))
        }
    }
    return distance
};