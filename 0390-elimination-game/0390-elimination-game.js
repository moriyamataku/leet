/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
    
    let num = n
    let count = 0
    let left = true
    let last = n
    while(num > 1) {
        if(left) {
            last = (num % 2 === 0) ? last : last - Math.pow(2, count)
        } else {
            last = last - Math.pow(2, count)
        }
        num = parseInt(num / 2)
        count++;
        left = !left
    }
    return last
};