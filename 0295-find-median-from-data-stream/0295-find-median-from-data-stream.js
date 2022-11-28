
var MedianFinder = function() {
    this.arr = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    insertNum(this.arr, num, 0, this.arr.length - 1);
};

function insertNum(nums, num, start, end) {
    // console.log(nums, num, start, end);
    if(num <= nums[start]) return nums.splice(start, 0, num);
    if(nums[end] <= num || end < 0) return nums.push(num);
    
    const midA = parseInt((start + end) / 2);
    const midB = Math.ceil((start + end) / 2);
    if(nums[midA] <= num && num <= nums[midB]) return nums.splice(midA + 1, 0, num);

    if(num < nums[midA]) {
        return insertNum(nums, num, start, midA);
    } else {
        return insertNum(nums, num, midB, end);
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    const midA = parseInt((this.arr.length + 1) / 2) - 1;
    const midB = Math.ceil((this.arr.length + 1) / 2) - 1;
    // console.log(this.arr, midA, midB, this.arr[midA], this.arr[midB]);
    return (this.arr[midA] + this.arr[midB]) / 2;
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */