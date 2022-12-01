/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const r = roated(nums, 0, nums.length - 1)
    return searchTarget(nums, target, r, 0, nums.length - 1)
};

var roated = function(nums, left, right) {
    if(nums[left] < nums[right] || left === right) return left
    
    const middle = parseInt((left + right) / 2)
    if(nums[left] > nums[middle]) {
        return roated(nums, left, middle)
    } else {
        if(right - middle === 1) return right
        return roated(nums, middle, right)
    }
}

var searchTarget = function(nums, target, rotated, left, right) {
    // console.log('searchTarget', target, rotated, left, right)
    const middle = parseInt((left + right) / 2)
    const len = nums.length
    const m = (middle + rotated) % len
    if(nums[m] === target) return m
    
    if(nums[m] > target) {
        const l = (left + rotated) % len
        if(nums[l] > target) return -1
        if(nums[l] === target) return l
        if(nums[l] < target && middle - left === 1) return -1
        
        return searchTarget(nums, target, rotated, left, middle)
    } else {
        const r = (right + rotated) % len
        if(nums[r] < target) return -1
        if(nums[r] === target) return r
        if(nums[r] > target && right - middle === 1) return -1
        
        return searchTarget(nums, target, rotated, middle, right)
    }
}