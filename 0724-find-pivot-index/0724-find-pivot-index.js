/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    if(nums.length === 0) return -1
    
    let right = 0;
    let left = nums.reduce((p,c) => p + c, 0)
    for(let i = 0; i < nums.length; i++) {
        right = (i !== 0) ? right + nums[i - 1] : right
        left = (i !== nums.length - 1) ? left - nums[i] : 0
        if(right === left) return i
    }
    return -1
};