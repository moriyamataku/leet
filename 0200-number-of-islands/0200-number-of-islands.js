/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const n = grid.length
    const m = grid[0].length
    let island = 0;
    const land = new Set();
    
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            
            if(grid[j][i] === "1" && !land.has(`${j}-${i}`)) {
                island++;
                searchIsland([j, i], land, grid)
                // console.log(island, land)
            }
        }
    }
    return island
};

var searchIsland = function(source, land, grid) {
    const queue = [source]
    while(queue.length > 0) {
        const cur = queue.shift()
        const row = cur[0]
        const col = cur[1]
        const key = `${row}-${col}`
        if(land.has(key)) continue
        land.add(key)
        // console.log(`${row}-${col}`, queue, land)
        queueIfValid(row - 1, col, queue, land, grid)
        queueIfValid(row, col + 1, queue, land, grid)
        queueIfValid(row + 1, col, queue, land, grid)
        queueIfValid(row, col - 1, queue, land, grid)
    }
}

var queueIfValid = function(row, col, queue, land, grid) {
    const n = grid.length
    const m = grid[0].length
    
    if(row < 0 || row >= n) return
    if(col < 0 || col >= m) return
    if(grid[row][col] === "1") {
        queue.push([row, col])   
    }
}