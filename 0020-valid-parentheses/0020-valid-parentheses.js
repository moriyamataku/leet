/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const chars = {
        ')': '(',
        ']': '[',
        '}': '{',
    }
    const cur = [];
    
    for(let i = 0; i < s.length; i++) {
        const tar = s[i];
        
        if(Object.hasOwn(chars, tar)) {
            const del = chars[tar]
            if(cur.length === 0 || cur[cur.length - 1] !== del) return false
            cur.pop()
        } else {
           cur.push(tar)
        }
    }
    return cur.length === 0;
};