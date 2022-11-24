/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function(grid) {
    const n = grid.length
    const m = n !== 0 ? grid[0].length : 0
    const ret = []
    
    for(let i = 0; i < m; i++) {
        // console.log('ball', i)
        let col = i
        let row = 0
        let next
        while(row < n) {
            // console.log(col, row)
            next = -1
            if(col === 0 && grid[row][col] === -1) break;
            if(col === m - 1 && grid[row][col] === 1) break;
            if(grid[row][col] === 1 && grid[row][col + 1] === -1) break;
            if(grid[row][col] === -1 && grid[row][col - 1] === 1) break;
            
            grid[row][col] === 1 ? next = col + 1 : next = col - 1
            col = next
            row++
        }
        ret.push(next)
    }
    return ret
};