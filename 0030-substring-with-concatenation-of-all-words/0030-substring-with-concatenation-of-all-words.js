/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    const results = [];
    const hash = words.reduce((prev, curr) => {
        prev[curr] ? prev[curr] += 1 : prev[curr] = 1
        return prev
    },{})
    const wordLength = words.length
    const wordSize = wordLength !== 0 ? words[0].length : 0;
    const windowLength = wordLength * wordSize
    let left = 0;
    
    while(left <= s.length - windowLength) {
        const subStr = s.substring(left, left + windowLength)
        if(check(subStr, hash, wordSize, wordLength)) results.push(left)
        left++;
    }
    return results
};

var check = function(subStr, hash, wordSize, wordLength) {
    const h = Object.assign({}, hash);
    for(let i = 0; i < wordLength; i++) {
        const left = i * wordSize
        const target = subStr.substring(left, left + wordSize)
        if(!h[target]) {
            return false
        } else {
            h[target] === 1 ? delete h[target] : h[target] -= 1
        }
    }
    return true
}