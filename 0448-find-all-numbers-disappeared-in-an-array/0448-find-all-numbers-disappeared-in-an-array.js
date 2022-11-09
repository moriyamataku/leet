/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const set = new Set(Array.from({length: nums.length}, (_, i) => i + 1))
    nums.forEach(num => {
        set.delete(num)
    });
    return Array.from(set)
};