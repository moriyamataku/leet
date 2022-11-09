/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let ret = []
    const sorted = intervals.sort((a, b) => a[0] - b[0])
    for(let i = 0; i < sorted.length; i++) {
        if(ret.length === 0) {
            ret.push(sorted[i]); 
            continue;
        }
        
        const checker = ret[ret.length - 1]
        // console.log(checker, ret, sorted[i])
        if(checker[1] < sorted[i][0]) {
            ret.push(sorted[i])
        } else {
            checker[1] = Math.max(checker[1], sorted[i][1])
        }
    }
    return ret
    // return sorted
};


