/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const memo = new Set();
    return matchWordBreak(s, wordDict, memo);
};

function matchWordBreak(s, wordDict, memo) {
    if(memo.has(s)) return false;

    for(let i = 0; i < wordDict.length; i++) {
        const word = wordDict[i]
        if(s.startsWith(word)) {
            if(s === word) return true;
            const ret = matchWordBreak(s.substring(word.length), wordDict, memo);
            if(ret) return true;
        }
    }
    memo.add(s);
    return false;
}