/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    const sorted = nums.sort((a,b) => a - b)
    let ret = Number.POSITIVE_INFINITY
    for(let i = 0; i < sorted.length - 2; i++) {
        let left = i + 1
        let right = sorted.length - 1
        while(left < right) {
            const sum = sorted[i] + sorted[left] + sorted[right]
            if(Math.abs(ret - target) > Math.abs(sum - target)) ret = sum
            
            if(sum > target) {
                right--;
            } else {
                left++;
            }
        }
    }
    return ret
};