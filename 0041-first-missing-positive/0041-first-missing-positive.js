/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const k = nums.length + 1;
    const set = new Set(nums.filter(n => n >= 0))
    // console.log(k, set)
    
    for(let i = 1; i <= k ; i++) {
        if(!set.has(i)) return i;
    }
};