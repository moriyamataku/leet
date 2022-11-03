/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const ret = []
    const set = new Set()
    const sorted = nums.sort((a,b) => a - b)
    let prev = null
    for(i = 0; i < sorted.length - 2; i++) {
        if(prev === sorted[i]) continue
        prev = sorted[i]
        let left = i + 1
        let right = sorted.length - 1
        while(left < right) {
            const sum = sorted[i] + sorted[left] + sorted[right]
            if(sum === 0) {
                key = [sorted[i], sorted[left], sorted[right]].join('')
                if(!set.has(key)) {
                    ret.push([sorted[i], sorted[left], sorted[right] ])
                    set.add(key)
                }
            }
            if(sum > 0) {
                right--;
            } else {
                left++;
            }
        }
    }
    return ret
};




