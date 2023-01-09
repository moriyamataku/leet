/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const con = new Map();
    Array.from({length: numCourses}, (_, i) => i).forEach(i => {
        con.set(i, [])
    })
    prerequisites.forEach(pre => {
        const tar = con.get(pre[1])
        tar.push(pre[0])
    })
    // console.log(con)
    for (const [key, value] of con.entries()) {
        const queue = value.slice()
        const checked = new Map();
        while(queue.length > 0) {
            const q = queue.shift();
            // console.log(con, queue, q, checked)
            if(checked.has(q)) continue;
            checked.set(q, 1)
            if (q === key) return false;
            const tar = con.get(q)
            tar.forEach(t => queue.push(t))
        }
    }
    return true;
};
