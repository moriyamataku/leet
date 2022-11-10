/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    const hash = {}
    return tribo(n, hash)
};

var tribo = function(n, hash) {
    if(n === 0) return 0
    if(n === 1 || n === 2) return 1
    if(hash[n]) return hash[n]

    hash[n - 3] = tribo(n - 3, hash)
    hash[n - 2] = tribo(n - 2, hash)
    hash[n - 1] = tribo(n - 1, hash)
    return hash[n - 3] + hash[n - 2] + hash[n - 1]
}