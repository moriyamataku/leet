/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        
        return getFirstBad(isBadVersion, 1, n);
        
    };
};

var getFirstBad = function(isBadVersion, start, end) {
    if(isBadVersion(start)) return start;
    
    const middle = parseInt((start + end) / 2)
    
    if(isBadVersion(middle)) {
        return getFirstBad(isBadVersion, start, middle);
    } else {
        return getFirstBad(isBadVersion, middle + 1, end);
    }
}