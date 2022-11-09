/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    let f = 0;
    let s = 0;
    const ret = [];
    while(f < firstList.length && s < secondList.length) {
        const first = firstList[f];
        const second = secondList[s];
        const lo = Math.max(first[0], second[0]);
        const hi = Math.min(first[1], second[1]);
        if(lo <= hi) ret.push([lo, hi])
        
        if(firstList[f][1] < secondList[s][1]) {
            f++;
        } else {
            s++;
        }
    }
    return ret;
};
    