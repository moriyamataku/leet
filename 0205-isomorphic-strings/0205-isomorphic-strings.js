/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false
    const hash_s = {}
    const hash_t = {}
    for(let i = 0; i < s.length; i++) {
        if(hash_s[s[i]]) {
            if(hash_s[s[i]] !== t[i]) return false
        } else {
            hash_s[s[i]] = t[i]
        }
        if(hash_t[t[i]]) {
            if(hash_t[t[i]] !== s[i]) return false
        } else {
            hash_t[t[i]] = s[i]
        }
    }
    return true
};

