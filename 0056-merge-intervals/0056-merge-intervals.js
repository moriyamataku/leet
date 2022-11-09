/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let ret = []
    for(let i = 0; i < intervals.length; i++) {
        ret = mergeIfOverlap(intervals[i], ret)
    }
    return ret
};

var mergeIfOverlap = function(target, arr) {
    // console.log(target, arr)
    for(let i = 0; i < arr.length; i++) {
        if(mergeAble(target, arr[i])) {
            arr[i][0] = Math.min(arr[i][0], target[0]);
            arr[i][1] = Math.max(arr[i][1], target[1]);
            
            if(arr.length > 1) {
                const merged = arr[i]
                arr = arr.filter((_, idx) => idx !== i)
                return mergeIfOverlap(merged, arr)
            }
            return arr;
        }
    }
    arr.push(target);
    return arr;
}

var mergeAble = function(a, b) {
    if(a[0] <= b[0] && a[1] >= b[0]) return true;
    if(a[0] <= b[1] && a[1] >= b[1]) return true;
    if(b[0] <= a[0] && b[1] >= a[0]) return true;
    if(b[0] <= a[1] && b[1] >= a[1]) return true;
    
    return false;
}
