/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length <= 0) return ''

    let prefix = strs[0];
    for(let i = 1; i < strs.length; i++) {
        let len = Math.min(prefix.length, strs[i].length)
        while(len > 0) {
            prefix = prefix.substring(0, len)
            if(strs[i].startsWith(prefix)) break;
            len--
        }
        if(len === 0) return ""
    }
    return prefix
};