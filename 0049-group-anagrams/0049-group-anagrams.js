/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const result = {}
    strs.forEach(str => {
        const count = str.split('').reduce((pre, cur) => {
            pre[cur] ? pre[cur] += 1 : pre[cur] = 1
            return pre
        },{})
        const key = Object.entries(count).sort((a, b) => a[0].localeCompare(b[0])).map((arr) => `${arr[0]}-${arr[1]}`).join(',')
        
        result[key] ? result[key].push(str) : result[key] = [str]
    })
    // console.log(result)
    return Object.values(result)
};