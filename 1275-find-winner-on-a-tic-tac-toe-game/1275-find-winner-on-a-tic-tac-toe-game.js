/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    const a = []
    const b = []
    for(let i = 0; i < moves.length; i++) {
        if(i % 2 === 0) {
            a.push(moves[i])
        } else {
            b.push(moves[i])
        }
    }
    if(check(a)) return "A"
    if(check(b)) return "B"
    return moves.length === 9 ? "Draw" : "Pending"
};

var check = function(moves) {
    // console.log(moves)
    for(let i = 0; i < 3; i++) {
        if(hasArray(moves, [i, 0]) && hasArray(moves, [i, 1]) && hasArray(moves, [i, 2])) return true
    }
    
    for(let i = 0; i < 3; i++) {
        if(hasArray(moves, [0, i]) && hasArray(moves, [1, i]) && hasArray(moves, [2, i])) return true
    }
    
    if(hasArray(moves, [0, 0]) && hasArray(moves, [1, 1]) && hasArray(moves, [2, 2])) return true
    if(hasArray(moves, [2, 0]) && hasArray(moves, [1, 1]) && hasArray(moves, [0, 2])) return true
    
    return false
};

var hasArray = function(moves, arr) {
    for(let i = 0; i < moves.length; i++) {
        if(moves[i].join('-') === arr.join('-')) return true
    }
    return false
}
