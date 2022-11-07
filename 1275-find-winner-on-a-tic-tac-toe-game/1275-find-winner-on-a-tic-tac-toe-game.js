/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    const a = []
    const b = []
    for(let i = 0; i < moves.length; i++) {
        const val = movetoval(moves[i]);
        (i % 2 === 0) ? a.push(val) : b.push(val);
    }
    if(check(a)) return "A"
    if(check(b)) return "B"
    return moves.length === 9 ? "Draw" : "Pending"
};

var movetoval = function(move) {
    return move[0] + move[1] * 3
}

var check = function(vals) {
    // console.log(vals)
    for(let i = 0; i < 3; i++) {
        if(vals.includes(i + 0) && vals.includes(i + 3)&& vals.includes(i + 6)) return true
    }
    
    for(let i = 0; i < 3; i++) {
        if(vals.includes(i * 3 + 0) && vals.includes(i * 3 + 1)&& vals.includes(i * 3 + 2)) return true
    }
    
    if(vals.includes(0) && vals.includes(4)&& vals.includes(8)) return true
    if(vals.includes(2) && vals.includes(4)&& vals.includes(6)) return true
    
    return false
};

