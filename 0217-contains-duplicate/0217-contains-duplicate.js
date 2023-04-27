/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const counts = nums.reduce((pre, cur) => {
        pre[cur] ? pre[cur] += 1 : pre[cur] = 1 
        return pre
    },{})
    
    return Object.values(counts).some(count => count > 1)
};