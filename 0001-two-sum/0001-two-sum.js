/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const table = {}
    for(let i = 0; i < nums.length; i++){
        const current = nums[i]
        const answer = (target - current).toString()
        // console.log(answer, table)
        if(table[answer] !== undefined) return [table[answer], i]
        table[current] = i
    }
};