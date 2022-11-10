/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    if(nums.length === 0) return -1
    
    for(let i = 0; i < nums.length; i++) {
        const right = (i !== 0) ? nums.slice(0, i).reduce((p,c) => p + c, 0) : 0
        const left = (i !== nums.length - 1) ? nums.slice(i + 1).reduce((p,c) => p + c, 0) : 0
        if(right === left) return i
    }
    return -1
};