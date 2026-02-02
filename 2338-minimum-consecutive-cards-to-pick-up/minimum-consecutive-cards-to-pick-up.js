/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function(cards) {
    let l = 0
    let minLength = Infinity
    let s = new Set()
    for(let r = 0; r < cards.length; r++){
        while(s.has(cards[r])){
           minLength = Math.min(minLength,r-l+1)
        //    console.log(minLength,"m")
           s.delete(cards[l])
           l++
        }
        s.add(cards[r])
    }
    return minLength === Infinity ? -1 : minLength
};