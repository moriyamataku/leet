/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const n = heights.length
    const m = (n !== 0) ? heights[0].length : 0
    
    const pacific = new Array(n).fill(0).map(() => new Array(m).fill(0));
    const atlantic = new Array(n).fill(0).map(() => new Array(m).fill(0));
    // const checked = new Array(n).fill(0).map(() => new Array(m).fill(0));
    
    const results = []
    
    for(let j = 0; j < n; j++) {
        checkOcean(heights, 0, j, pacific, 0)
        checkOcean(heights, m - 1, j, atlantic, 0)
    }
    for(let i = 0; i < m; i++) {
        checkOcean(heights, i, 0, pacific, 0)
        checkOcean(heights, i, n - 1, atlantic, 0)
    }
    for(let j = 0; j < n; j++) {
        for(let i = 0; i < m; i++) {
            if(pacific[j][i] === 1 && atlantic[j][i] === 1) results.push([j, i])
        }
    }
    
    // console.log(pacific, atlantic)
    return results
};

var checkOcean = function(heights, i, j, ocean, previousHeight) {
    const n = heights.length
    const m = (n !== 0) ? heights[0].length : 0
    if(i < 0 || j < 0 || i === m || j === n) return
    if(heights[j][i] < previousHeight) return
    
    // console.log(i, j)
    if(ocean[j][i] === 1) return
    ocean[j][i] = 1
    const height = heights[j][i]
    
    checkOcean(heights, i + 1, j, ocean, height)
    checkOcean(heights, i - 1, j, ocean, height)
    checkOcean(heights, i, j + 1, ocean, height)
    checkOcean(heights, i, j - 1, ocean, height)
}