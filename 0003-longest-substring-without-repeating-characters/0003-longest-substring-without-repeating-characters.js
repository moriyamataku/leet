/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = -1;
    let right = 0;
    let max = 0;
    const count = {}
    
    while(right < s.length) {
        count[s[right]] ? count[s[right]] += 1 : count[s[right]] = 1
        while(Object.entries(count).some(c => c[1] > 1)) {
            left++;
            count[s[left]] === 1 ? delete count[s[left]] : count[s[left]] -= 1
        }
        // console.log(left, right, count)
        max = Math.max(max, right - left)
        right++;
    }
    return max
};