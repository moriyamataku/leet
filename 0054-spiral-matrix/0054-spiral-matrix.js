/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const ret = []
    const n = matrix.length
    const m = n !== 0 ? matrix[0].length : 0
    let turn = 0
    
    while(true) {
        const row = Math.ceil(turn / 2)
        const col = parseInt(turn / 2)
        if(row >= n || col >= m) break;
    
        const loop = parseInt(turn / 4)
        // console.log(turn, loop, row ,col)
        if(turn % 4 === 0) {
            for(let i = loop; i < (m - loop); i++) {
                // console.log('→', matrix[loop][i])
                ret.push(matrix[loop][i])
            }
        } else if(turn % 4 === 1) {
            for(let i = 1 + loop; i < (n - loop); i++) {
                // console.log('↓', matrix[i][m - 1 - loop])
                ret.push(matrix[i][m - 1 - loop])
            }
        } else if(turn % 4 === 2) {
            for(let i = m - 1 - (loop + 1) ; i >= loop; i--) {
                // console.log('←', matrix[n - 1 - loop][i])
                ret.push(matrix[n - 1 - loop][i])
            }
        } else {
            for(let i = n - 1 - (loop + 1) ; i >= loop + 1; i--) {
                // console.log('↑', matrix[i][loop])
                ret.push(matrix[i][loop])
            }
        }
        // console.log(ret)
        turn++;
    }
    return ret;
};