/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const range1 = (2 ** 31 - 1);
    const range2 = - (2 ** 31);
    // console.log(range1, range2)
    const base = 10;
    let acc = 0;
    let rest = x
    while(true) {
        const current = rest % base;
        rest = parseInt(rest / base);
        acc = acc * base + current;
        
        // console.log(current, rest, acc);
        
        if(acc > range1 || acc < range2) return 0;

        if(rest === 0) break;
    }
    return acc;
};