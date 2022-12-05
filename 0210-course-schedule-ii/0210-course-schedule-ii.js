/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const courses = Array.from({length: numCourses}, (_, i) => i)
    const checked = Array.from({length: numCourses}, (_, i) => 0)
    const stack = []
    const pres = prerequisites.reduce((pre, cur) => {
        const a = cur[0]
        const b = cur[1]
        pre[b] ? pre[b].push(a) : pre[b] = [a]
        return pre
    },{})
    // console.log(pres)
    
    for(let i = 0; i < numCourses; i++) {
        if(!dfs(i, pres, checked, stack, [])) return []
    }
    
    return stack.reverse()
};

var dfs = function(course, pres, checked, stack, queue) {
    // console.log(course, checked, stack, queue)
    if(checked[course]) return true;
    checked[course] = 1
    
    const nexts = pres[course] || [];
    for(let i = 0; i < nexts.length; i++) {
        if(queue.indexOf(nexts[i]) !== -1) return false
        if(!dfs(nexts[i], pres, checked, stack, queue.concat(course))) return false
    }
    
    stack.push(course)
    return true
}