/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const target = s.toLowerCase().split('').map(c => {
        if(/[a-z0-9]/.test(c)) return c
    }).filter(item => item).join('')
    let j = target.length
    console.log(target, j)
    for(let i = 0; i <= j ; i++) {
        j--
        if(target[i] !== target[j]) return false
    }
    return true
};