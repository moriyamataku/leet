/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const ret = []
    for(let i = 0; i < n; i++) {
        const num = i + 1
        if(num % 15 === 0) {
            ret.push("FizzBuzz")
        } else if(num % 5 === 0) {
            ret.push("Buzz")
        } else if(num % 3 === 0) {
            ret.push("Fizz")
        } else {
            ret.push(`${num}`)
        }
    }
    return ret
};