/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let fast = calc(n)
    let slow = n
    
    while(fast !== 1 && fast !== slow) {
        fast = calc(calc(fast))
        slow = calc(slow)
    }
    return fast === 1
};

var calc = function(n) {
    let ret = 0;
    while(n !== 0) {
        const p = n % 10
        ret += Math.pow(p, 2)
        n = Number.parseInt(n / 10)
    }
    // console.log('calc', n, ret)
    return ret
}