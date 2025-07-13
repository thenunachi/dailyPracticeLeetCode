/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    mapS = new Map();
    mapT = new Map();

    if(s.length != t.length )return false;
    for(let i = 0; i< s.length ;i++){
        mapS.set(s[i],(mapS.get(s[i])|| 0)+1);
        mapT.set(t[i],(mapT.get(t[i])|| 0 )+1)
    }
    for(let [char,values] of mapS.entries()){
        console.log(mapT.get(char) != values)
        if(mapT.get(char) !==values)return false;
    }
    return true;
};