/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let ret = 0;
    while(true) {
        let changed = {}
        for(let j = 0; j < grid.length; j++) {
            for(let i = 0; i < grid[0].length; i++) {
                if(grid[j][i] !== 2) continue;

                const key = `${i}-${j}`
                if(changed[key]) continue;
                
                rotten(grid, i - 1, j, changed)
                rotten(grid, i + 1, j, changed)
                rotten(grid, i, j - 1, changed)
                rotten(grid, i, j + 1, changed)
            }
        }
        // console.log(grid, changed)
        
        if(Object.keys(changed).length === 0) break;
        ret++;
    }
    return grid.some(row => row.some(value => value === 1)) ? -1 : ret
};

var rotten = function(grid, i, j, changed) {
    const n = grid.length
    const m = grid[0].length
    
    if(i < 0 || i >= m || j < 0 || j >= n) return
    if(grid[j][i] !== 1) return
    
    grid[j][i] = 2
    changed[`${i}-${j}`] = 1
    return
}