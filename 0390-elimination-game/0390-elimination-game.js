/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
    let num = n
    let counter = 1
    let left = true
    let last = n
    while(num > 1) {
        if(left) {
            last = (num % 2 === 0) ? last : last - counter
        } else {
            last = last - counter
        }
        num = parseInt(num / 2)
        counter = counter * 2
        left = !left
    }
    return last
};