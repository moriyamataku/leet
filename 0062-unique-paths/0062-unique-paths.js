/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    return paths(m, n, {})
};

var paths = function(m, n, cache) {
    if(m <= 1 || n <= 1) return 1
    
    const key = `${m}-${n}`
    if(!cache[key]) {
        cache[key] = paths(m - 1, n, cache) + paths(m, n - 1, cache)
    }
    return cache[key]
}