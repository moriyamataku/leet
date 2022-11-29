/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const hash = tasks.reduce((pre, cur) => {
        pre[cur] ? pre[cur] += 1 : pre[cur] = 1
        return pre
    }, {})
    
    let time = 0
    const queue = []
    // console.log(Object.entries(hash), hash)
    while(Object.keys(hash).length !== 0) {
        // console.log(hash, queue, time)
        const keys = Object.entries(hash).sort((a, b) => b[1] - a[1])
        let task = null
        let cost = n
        for(let i = 0; i < keys.length; i++) {
            const key = keys[i][0]
            const idle = queue.indexOf(key) + 1
            if(idle === 0) {
                task = key
                hash[task] === 1 ? delete hash[task] : hash[task] -= 1
                break;
            }
        }
        queue.push(task)
        if(queue.length > n) queue.shift()
        time++
    }
    return time
    
};
