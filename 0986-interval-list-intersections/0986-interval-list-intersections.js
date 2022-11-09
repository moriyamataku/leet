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
        const int = makeInter(first, second);
        if(int) ret.push(int);
        
        // console.log(first, second, int, ret);
        
        if(firstList[f][1] < secondList[s][1]) {
            f++;
        } else {
            s++;
        }
    }
    return ret;
};
    
var makeInter = function(first, second) {
    if((first[0] <= second[0] && second[0] <= first[1]) ||
       (second[0] <= first[0] && first[0] <= second[1])) {
        const start = Math.max(first[0], second[0]);
        const end = Math.min(first[1], second[1]);
        return [start, end]
    }
    return null;
}