/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const index = binarySearch(nums, 0, nums.length - 1, target)
    if(index === -1) return [-1,-1]
    
    return getRange(nums, target, index)
};

var binarySearch = function(nums, left, right, target) {
    // console.log(nums, left, right, target)
    if(nums.length === 0　 || nums[left] > target || nums[right] < target) return -1
    if(nums[left] === target) return left;
    if(nums[right] === target) return right;
    
    const middle = parseInt((left + right) / 2)
    if(nums[middle] === target) return middle;
    if(left === middle) return -1
    
    if(nums[middle] > target) {
        return binarySearch(nums, left, middle, target);
    } else {
        return binarySearch(nums, middle, right, target);
    }
}

var getRange = function(nums, target, middle) {
    // console.log(nums, target, middle)
    
    let left = parseInt(middle / 2)
    let prev = 0
    while(true) {
        // console.log('left => ', left, prev, nums[left])
        if(nums[left] === target) {
            if(left === 0) break;
            if(left === middle) break;
            if(nums[left - 1] !== target) break;

            left = parseInt((left + prev) / 2)
        } else {
            prev = left
            left = Math.ceil((left + middle) / 2)
        }
    }
    
    const last = nums.length - 1
    let right = parseInt((middle + last) / 2)
    prev = middle
    while(true) {
        // console.log('right => ', right, nums[right])
        if(nums[right] === target) {
            if(right === last) break;
            if(nums[right + 1] !== target) break;

            prev = right
            right = Math.ceil((right + last) / 2)
        } else {
            right = parseInt((right + prev) / 2)
        }
    }
    
    return [left, right]
}