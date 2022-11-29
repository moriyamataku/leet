/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function(nums, k) {
    const ret = []
    let targets = []
    let ordered = nums.slice(0, k).sort((a,b) => a - b )
    for(let i = 0; i < nums.length - (k - 1) ; i++) {
        if(i > 0) {
            ordered = deleteOne(ordered, nums[i - 1])
            insertOne(ordered, nums[i + (k - 1)], 0, k - 2)
        }
        // console.log(ordered, i)
        const middle = parseInt(k / 2)
        if(k % 2 === 0) {
            ret.push((ordered[middle - 1] + ordered[middle]) / 2)
        } else {
            ret.push(ordered[middle])
        }
    }
    return ret
};

var insertOne = function(ordered, target, left, right) {
    if(ordered.length === 0) {
        ordered.push(target)
        return
    }
    const middle = parseInt((left + right) / 2)
    // console.log('insertOne' ,ordered, target, left, right, middle)
    
    if(ordered[middle] === target) {
        ordered.splice(middle, 0, target);
        return
    }
    
    // console.log(ordered[middle], target, ordered[right])
    if(ordered[middle] < target) {
        if(ordered[right] <= target) {
            ordered.push(target)
            return
        } else if(right - middle === 1) {
            ordered.splice(right, 0, target);
            return
        }
        return insertOne(ordered, target, middle, right)
        
    } else {
        if(ordered[left] >= target) {
            ordered.unshift(target)
            return
        }
        return insertOne(ordered, target, left, middle)
    }
    
}

var deleteOne = function(ordered, target) {
    const idx = ordered.indexOf(target)
    return ordered.filter((_, i) => i !== idx)
}