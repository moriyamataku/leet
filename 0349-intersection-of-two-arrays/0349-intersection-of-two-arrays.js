/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const n1 = nums1.reduce((pre, cur) => {
       pre[cur] = 1
       return pre
    },{})
    const n2 = nums2.reduce((pre, cur) => {
       pre[cur] = 1
       return pre
    },{})
    
    const ret = []
    for(const key of Object.keys(n1)) {
        if(Object.hasOwn(n2, key)) ret.push(key)
    }
    return ret
};