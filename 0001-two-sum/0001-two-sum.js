/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const table = {}
    for(let i = 0; i < nums.length; i++){
        const ans = target - nums[i]
        // console.log(i, nums[i], ans ,table)
        if(table.hasOwnProperty(ans.toString())) return [i, table[ans]]
        table[nums[i]] = i
    }
};