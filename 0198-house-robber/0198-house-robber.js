/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const hash = {}
    return Math.max(maxMoney(nums, nums.length - 1, hash), maxMoney(nums, nums.length - 2, hash))
};

var maxMoney = function(nums, pos, hash) {
    // console.log(pos, hash)
    let ret = null
    if(pos < 0) ret = 0
    if(pos === 0 || pos === 1) ret = nums[pos]
    if(pos === 2) ret = nums[0] + nums[2]
    if(ret !== null) hash[pos] = ret
    
    if(!Object.hasOwn(hash, pos)) {
        const previous = Math.max(maxMoney(nums, pos - 2, hash), maxMoney(nums, pos - 3, hash))
        hash[pos] = previous + nums[pos]
    }
    return hash[pos]
 }