/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        if(checkCycle(nums, i)) return true
    }
    return false
};

var next = function(nums, index) {
    const len = nums.length
    return (len + index + (nums[index] % len)) % len
}

var checkCycle = function(nums, index) {
    // console.log('checkCycle', nums, index)
    let slow = index
    let fast = index
    let prev = null
    while(true) {
        prev = slow
        slow = next(nums, slow)
        fast = next(nums, next(nums, fast))
        // console.log(slow, fast, prev)
        if(slow === fast) break;
    }
    return (slow !== next(nums, slow)) ? check(nums, slow) : false;
}

var check = function(nums, head) {
    let current = head
    const arr = []
    while(true) {
        arr.push(nums[current])
        current = next(nums, current)
        if(current === head) break;
    }
    return (arr.every(v => v > 0) || arr.every(v => v < 0))
}