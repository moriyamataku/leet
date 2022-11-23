/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const s1 = s.split('').reduce(removeBackspace, []).join('')
    const t1 = t.split('').reduce(removeBackspace, []).join('')
    return s1 === t1
};
                                  
var removeBackspace = function(pre, cur) {
    cur === '#' ? pre.pop() : pre.push(cur)
    return pre
}