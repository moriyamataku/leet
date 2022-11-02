/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0;
    let right = height.length - 1;
    let cur = 0;
    let sum = 0;
    while(left < right) {
        if(height[left] < height[right]) {
            cur = left + 1
            while(true) {
                if(height[cur] > height[left] || cur === right) {
                    sum += calcTrap(height, left, cur)
                    left = cur
                    break;
                }
                cur++;
            }
        } else {
            cur = right - 1
            while(true) {
                if(height[cur] > height[right] || cur === left) {
                    sum += calcTrap(height, cur, right)
                    right = cur
                    break;
                }
                cur--;
            }
        }
    }
    return sum
};

var calcTrap = function(height, left, right) {
    const bar = Math.min(height[left], height[right])
    let trap = 0;
    for(let i = left + 1; i < right; i++) {
        if(bar > height[i]) trap += bar - height[i]
    }
    // console.log('calc', left, right, bar, trap)
    return trap
}