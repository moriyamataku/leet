/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const ret = []
    let tar = newInterval;
    intervals.push(newInterval)
    const sorted = intervals.sort((a, b) => a[0] - b[0])
    for(let i = 0; i < sorted.length; i++) {
        const cur = sorted[i]
        const tar = (ret.length === 0) ? null : ret[ret.length - 1]
        if(tar && cur[0] <= tar[1]) {
            tar[0] = Math.min(tar[0], cur[0])
            tar[1] = Math.max(tar[1], cur[1])
        } else {
            ret.push(cur)
        }
    }
    return ret
};