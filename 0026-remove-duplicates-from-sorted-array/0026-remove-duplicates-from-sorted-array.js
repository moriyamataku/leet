/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let left = 0;
    let right = 0;
    let prev = null;
    while(right < nums.length) {
        if(right === 0) {
            prev = nums[right]
            left++;
        } else if(prev !== nums[right]) {
            nums[left] = nums[right]
            left++;
            prev = nums[right]
        }
        right++;
    }
    // console.log(nums)
    return left
};