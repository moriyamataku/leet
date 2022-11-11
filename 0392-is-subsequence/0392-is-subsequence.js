/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(s === t) return true
    let posS = 0;
    let posT = 0;
    while(posT < t.length) {
        if(s[posS] === t[posT]) posS++;
        if(posS >= s.length) return true
        posT++;
    }
    return false
};