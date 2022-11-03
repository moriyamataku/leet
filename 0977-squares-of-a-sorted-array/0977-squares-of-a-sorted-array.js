/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const ret = []
    nums.forEach(obj => ret.push(Math.pow(obj, 2)))
    return ret.sort((a, b) => a - b)
};