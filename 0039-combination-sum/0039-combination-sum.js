/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const results = []
    checkSum(results, [], candidates.sort((a,b) => a - b), target)
    return results
};

var checkSum = function(results, stuck, candidates, target) {
    // console.log(results, stuck, candidates, target)
    const sum = stuck.reduce((pre, cur) => pre + cur, 0)
    const base = target - sum
    for(let i = 0; i < candidates.length; i++) {
        if(candidates[i] > base) return;
        const newStack = stuck.concat(candidates[i])
        if(candidates[i] === base) {
            results.push(newStack);
            return;
        }
        if(candidates[i] < base) {
            const newCandidates = candidates.slice(i)
            checkSum(results, newStack, newCandidates, target)
        }
    }
};