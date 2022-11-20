/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const n = image.length
    const m = image[0].length
    const targetColor = image[sr][sc]
    const queue = [[sr, sc]]
    while(queue.length > 0) {
        const current = queue.shift();
        const row = current[0]
        const col = current[1]
        if(targetColor === color) break;
        image[row][col] = color
        if(row - 1 >= 0 && image[row - 1][col] === targetColor) queue.push([row - 1, col])
        if(row + 1 < n && image[row + 1][col] === targetColor) queue.push([row + 1, col])
        if(col - 1 >= 0 && image[row][col - 1] === targetColor) queue.push([row, col - 1])
        if(col + 1 < m && image[row][col + 1] === targetColor) queue.push([row, col + 1])
        
    }
    
    return image;
};