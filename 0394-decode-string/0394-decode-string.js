/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    // console.log('decodeString', s)
    let count = 0;
    let start = 0;
    let end = 0;
    let multi = "";
    let ret = "";
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '[') {
            if(count === 0) start = i + 1
            count++;
        }
        if(s[i] === ']') {
            count--;
            if(count === 0) {
                end = i;
                const target = s.substring(start, end)
                ret += decodeString(target).repeat(parseInt(multi))
                // console.log(target, multi)
                multi = ""
            }
        }
        if(count === 0) {
            if(/[a-z]/.test(s[i])) {
                ret += s[i]
            }
            if(/[0-9]/.test(s[i])) {
                multi += s[i]
            }
        }
        
    }
    return ret
};

