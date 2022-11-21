/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    return maxLength(s, k, 1, s.length)
};

var maxLength = function(s, k, low, high) {
    const mid = Math.ceil((low + high) / 2)
    const v = valid(s, k, mid)
    // console.log(low, mid, high, v)
    
    if(!v) {
        if(low === mid - 1) return low
        return maxLength(s, k ,low, mid, high)
    } else {
        if(valid(s, k, high)) return high
        return maxLength(s, k, mid, high - 1)
    }
}

var valid = function(s, k, len) {
    const count = s.substring(0, len).split('').reduce((pre, cur) => {
        pre[cur] ? pre[cur] += 1 : pre[cur] = 1
        return pre
    },{})
    // console.log('valid', count, len)
    for(let i = 0; i <= (s.length - len); i++) {
        if(i > 0) {
            const del = s[i - 1]
            const add = s[i + len - 1]
            count[del] === 1 ? delete count[del] : count[del] -= 1
            count[add] ? count[add] += 1 : count[add] = 1
        }
        const max = Math.max(...Object.values(count)) 
        // console.log(count, max)
        if(max >= len - k) return true
    }
    return false
}