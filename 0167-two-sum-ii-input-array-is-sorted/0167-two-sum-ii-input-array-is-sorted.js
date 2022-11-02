/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    while(left < right) {
        const sum = numbers[left] + numbers[right]
        if(sum === target) break;
        
        if(sum < target) left++;
        if(sum > target) right--;
    }
    return [left + 1, right + 1]
};