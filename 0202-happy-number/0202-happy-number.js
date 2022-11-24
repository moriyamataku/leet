/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let fast = n
    let slow = n
    
    while(true) {
        fast = calc(calc(fast))
        slow = calc(slow)
        if(fast === slow || fast === 1) break
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