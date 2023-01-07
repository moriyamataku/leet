/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    let max = 0
    
    while(left < right) {
        const h = Math.min(height[left], height[right])
        const currnt = h * (right - left)
        max = Math.max(max, currnt)
        // console.log(left, right, h, currnt, max)
        
        if(height[left] > height[right]) {
            right--
        } else {
            left++
        }
    }
    return max
};