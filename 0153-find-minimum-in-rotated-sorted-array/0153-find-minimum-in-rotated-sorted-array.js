/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if(nums.length === 1) return nums[0]
    let l = 0
    let r = nums.length - 1
    
    while(nums[r] < nums[l]){
        let m = Math.floor((l + r) / 2)
        // console.log(l, m ,r)
        if(m === l) return nums[r]
        if(nums[l] > nums[m]) {
            r = m
        } else {
            l = m
        }
    }
    return nums[l]
};