/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const ret = []
    for(let i = 0; i < nums.length; i++) {
        const target = nums.slice(0, i + 1)
        ret.push(target.reduce((pre, curr) => pre + curr, 0))
    }
    return ret
};