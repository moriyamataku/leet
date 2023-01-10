/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    return getIndex(nums, target, 0, nums.length - 1);
};

var getIndex = function(nums, target, start, end) {
    // console.log(target, start, end)
    if(target <= nums[start]) return start;
    if(nums[end] === target) return end;
    if(nums[end] < target) return end + 1;
    
    const middle = Math.floor((start + end) / 2);
    
    if(nums[middle] === target) return middle;
    if(target < nums[middle]) {
        if(middle - start <= 1) return middle
        return getIndex(nums, target, start, middle);
    } else {
        if(end - middle <= 1) return middle + 1
        return getIndex(nums, target, middle, end);
    }
}