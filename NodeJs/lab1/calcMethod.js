// using function callback
let add = function add(num1, num2) {
    return num1 + num2;
}

let subtract = function subtract(num1, num2) {
    return num1 - num2;
}

let multiply = function multiply(num1, num2) {
    return num1 * num2;
}

let math = function math(num1, num2, func) {
    if( isNaN(num1) || isNaN(num2) ){
        return "please enter a valid number";
    }else {
        return func(num1, num2);
    }
}

module.exports = {
    add,
    subtract,
    multiply,
    math
}

