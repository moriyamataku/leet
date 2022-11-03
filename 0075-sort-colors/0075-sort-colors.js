/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let changed = true
    while(changed) {
        changed = false
        for(let i = 0; i < nums.length - 1; i++) {
            if(nums[i] > nums[i + 1]) {
                const tmp = nums[i]
                nums[i] = nums[i + 1]
                nums[i + 1] = tmp
                changed = true
            }
        }
    }
};