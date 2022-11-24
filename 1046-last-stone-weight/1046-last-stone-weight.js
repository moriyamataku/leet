/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    if(stones.length === 0) return 0
    if(stones.length === 1) return stones[0]
    
    stones.sort((a, b) => b - a)
    const s1 = stones.shift()
    const s2 = stones.shift()
    if((s1 - s2) > 0) stones.push(s1 - s2)
    return lastStoneWeight(stones)
};