/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
    for(let col = 0; col < 9; col++) {
        const set = {};
        for(let row = 0; row < 9; row++) {
            const val = board[col][row];
            if(val !== ".") {
                if(set[val]) return false
                set[val] = 1
            }
        }
    }
    
    for(let row = 0; row < 9; row++) {
        const set = {};
        for(let col = 0; col < 9; col++) {
            const val = board[col][row];
            if(val !== ".") {
                if(set[val]) return false
                set[val] = 1
            }
        }
    }
    
    for(let sCol = 0; sCol < 3; sCol++) {
        for(let sRow = 0; sRow < 3; sRow++) {
            const set = {};
            for(let iCol = 0; iCol < 3; iCol++) {
                for(let iRow = 0; iRow < 3; iRow++) {
                    const val = board[sCol * 3 + iCol][sRow * 3 + iRow];
                    if(val !== ".") {
                        if(set[val]) return false
                        set[val] = 1
                    }
                }
            }
        }
    }
    return true
};