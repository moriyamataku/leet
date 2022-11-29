/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {
    const hash = {}
    let mirror = 0
    let double = 0
    words.forEach(word => {
        // if(word[0] === word[1]) double = 1
        
        const reverse = word[1] + word[0]
        if(hash[reverse]) {
            hash[reverse] === 1 ? delete hash[reverse] : hash[reverse] -= 1
            mirror++;
        } else {
            hash[word] ? hash[word] += 1 : hash[word] = 1
        }
        // console.log(word, hash, mirror)
    })
    if(Object.keys(hash).some(word => word[0] === word[1])) double = 1
    
    
    return mirror * 4 + double * 2
};