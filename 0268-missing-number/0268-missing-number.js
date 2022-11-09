/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const arr = Array.from({length: nums.length + 1}, (_, n) => n)
    // console.log(arr)
    for(let i = 0; i < nums.length; i++) {
        const pos = arr.indexOf(nums[i])
        arr.splice(pos, 1)
    }
    return arr[0]
};