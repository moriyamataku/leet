/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    return costOfStep(cost, cost.length, {})
};

var costOfStep = function(cost, step, cache) {
    if(step === 0) return 0
    if(step === 1) return 0
    // console.log(step, cache)
    
    if(!cache[step]) {
        cache[step] = Math.min(
            costOfStep(cost, step - 1, cache) + cost[step - 1], 
            costOfStep(cost, step - 2, cache) + cost[step - 2]
        )
    }
    return cache[step]
}