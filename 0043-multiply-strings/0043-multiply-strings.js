/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let result = ""
    let digit = 0
    let add = 0
    while(digit < (num1.length + num2.length - 1)) {
        const sum = sumMulti(num1, num2, digit, add)
        // console.log(sum)
        result = (sum % 10).toString() + result
        add = parseInt(sum / 10)
        digit++;
    }
    if(add !== 0) result = add.toString() + result
   
    while(result.length > 1) {
        if(result[0] === '0') {
            result = result.substring(1)
        } else {
            break;
        }
    }
    return result
};

var sumMulti = function(num1, num2, digit, add) {
    let result = 0
    for(let i = 0; i < num1.length; i++) {
        for(let j = 0; j < num2.length; j++) {
            if((i + j) !== digit) continue
            
            result += parseInt(num1[num1.length - 1 - i]) * parseInt(num2[num2.length - 1 - j])
        }
    }
    return result + add
}

