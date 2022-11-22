/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let bulls = 0
    let cows = 0
    const t1 = {}
    const t2 = {}
    for(let i = 0; i < guess.length; i++) {
        if(guess[i] === secret[i]) {
            bulls++;   
        } else {
            const g = guess[i]
            const s = secret[i]
            t1[g] ? t1[g] += 1 : t1[g] = 1
            t2[s] ? t2[s] += 1 : t2[s] = 1
        }
    }
    
    for(const key of Object.keys(t1)) {
        if(t2[key]) {
            cows += Math.min(t1[key], t2[key])
        }
    }
    return `${bulls}A${cows}B`
};