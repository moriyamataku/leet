/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const counts = words.reduce((pre, cur) => {
        pre[cur] ? pre[cur] += 1 : pre[cur] = 1 
        return pre;
    }, {});
    const arrCounts = Object.entries(counts)
    arrCounts.sort((a,b) => {
        if(a[1] === b[1]) {
            return (a[0] > b[0]) ? 1 : -1;
        } else {
            return (b[1] > a[1]) ? 1 : -1;
        }
    });
    return arrCounts.slice(0, k).map(a => a[0]);
};