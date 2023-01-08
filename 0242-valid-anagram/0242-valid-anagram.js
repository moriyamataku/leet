/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // 15:55 - > 15:58
    const s_count = s.split('').reduce((pre, cur) => {
        pre[cur] ? pre[cur] += 1 : pre[cur] = 1
        return pre
    },{})
    const t_count = t.split('').reduce((pre, cur) => {
        pre[cur] ? pre[cur] += 1 : pre[cur] = 1
        return pre
    },{})
    
    for(const [key, value] of Object.entries(s_count)) {
        if(t_count[key] !== value) return false 
    }
    for(const [key, value] of Object.entries(t_count)) {
        if(s_count[key] !== value) return false 
    }
    
    return true
};