/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    var sets = new Set();
    pushPermute([], nums, sets)
    var arr = Array.from(sets)
    return arr.map(set => set.split('_'))
};

var pushPermute = function(nums, rems, sets) {
    // console.log(nums, rems, sets)
    if(rems.length === 0) {
        sets.add(nums.join('_'))
        return
    }
    for(let i = 0; i < rems.length; i++) {
        var t = rems[i]
        var r = rems.filter((_, ind) => ind !== i)
        var n = nums.slice()
        n.push(t)
        pushPermute(n, r, sets)
    }
}