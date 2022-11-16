/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(nums[0] > target || nums[nums.length - 1] < target) return -1
    
    return find(nums, 0, nums.length - 1, target)
};

var find = function(nums, left, right, target) {
    const middle = parseInt((left + right) / 2)
    // console.log(nums, left, right, middle, target)
    if(nums[middle] === target) return middle
    
    if(nums[middle] > target) {
        return find(nums, left, middle, target)
    } else {
        if(nums[right] === target) return right
        if(nums[right] > target && right - middle === 1) return -1

        return find(nums, middle, right, target)
    }
}