/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const origin = p.split('').reduce((pre, cur) => {
        pre[cur] ? pre[cur] += 1 : pre[cur] = 1 
        return pre
    },{})
    
    const results = []
    
    // console.log(origin)
    
    const count = s.substring(0, p.length).split('').reduce((pre, cur) => {
        pre[cur] ? pre[cur] += 1 : pre[cur] = 1
        return pre
    },{})
    for(let i = 0; i <= (s.length - p.length); i++) {
        if(i > 0) {
            const pre = i - 1
            const add = i + p.length - 1
            count[s[pre]] === 1 ? delete count[s[pre]] : count[s[pre]] -= 1
            count[s[add]] ? count[s[add]] += 1 : count[s[add]] = 1
        }
        
        let ret = true
        for(const key of Object.keys(origin)) {
            if(origin[key] !== count[key]) ret = false
        }
        if(ret) results.push(i)
        // console.log(count)
        // let ret = true

        // if(ret) results.push(i)
    }
    return results;
    
};