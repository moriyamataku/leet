/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const ret = []
    const keys = new Set();
    const sorted = nums.sort((a,b) => a - b)
    for(let i = 0; i < sorted.length - 3; i++) {
        for(let j = i + 1; j < sorted.length - 2; j++) {
            let left = j + 1;
            let right = sorted.length - 1
            while(left < right) {
                const arr = [sorted[i], sorted[j], sorted[left], sorted[right]]
                const sum = arr.reduce((pre, cur) => pre + cur, 0)
                // console.log(arr, sum)
                if(sum === target) {
                    const key = arr.join('-')
                    if(!keys.has(key)) {
                        ret.push(arr)
                        keys.add(key)
                    }
                }
                if(sum > target) {
                    right--
                } else {
                    left++
                }
            }
        }
    }
    return ret
};