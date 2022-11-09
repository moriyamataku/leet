/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    const set = new Set(arr)
    let i = 1;
    let count = 0;
    while(true) {
        if(!set.has(i)) {
            count++;
            if(count >= k) return i;
        }
        i++;
    }
};