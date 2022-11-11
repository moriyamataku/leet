/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const memo = {};
    return getSteps(n, memo)
};

var getSteps = function(n, memo) {
    if(n === 1) return 1
    if(n === 2) return 2
    
    if(!memo[n]) {
        memo[n] = getSteps(n - 1, memo) + getSteps(n - 2, memo)
    }
    return memo[n]
}