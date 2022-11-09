/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const ret = []
    nums.sort()
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] === nums[i - 1]) ret.push(nums[i])
    }
    return ret;
};