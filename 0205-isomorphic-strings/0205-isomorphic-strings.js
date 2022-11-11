/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    return checkTwo(s, t) && checkTwo(t, s)
};

var checkTwo = function(a, b) {
    if(a.length !== b.length) return false

    const words = {}
    for(let i = 0; i < a.length; i++) {
        if(words[a[i]]) {
            if(words[a[i]] !== b[i]) return false
        }
        words[a[i]] = b[i]
    }
    return true
}