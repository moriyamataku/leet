/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    return search(matrix, target, 0, matrix.flat().length - 1)
};

var search = function(matrix, target, left, right) {
    const middle = parseInt((left + right) / 2)
    // console.log('search', left, right, middle)
    
    const val = matrixVal(matrix, middle)
    // console.log(middle, val, target)
    if(val === target) return true
    if(val > target) {
        const minVal = matrixVal(matrix, left)
        if(minVal > target) return false
        if(minVal === target) return true
        if(minVal < target && middle - left <= 1) return false

        return search(matrix, target, left, middle)
    } else {
        const maxVal = matrixVal(matrix, right)
        // console.log(right, maxVal)
        if(maxVal < target) return false
        if(maxVal === target) return true
        if(maxVal > target && right - middle <= 1) return false
        
        return search(matrix, target, middle, right)
    }
    
}
    
var matrixVal = function(matrix, pos) {
    const m = matrix[0].length
    const y = parseInt(pos / m)
    const x = pos % m
    // console.log(x, y)
    return matrix[y][x]
    
}