
let calc = require("./calcMethod");

let personalData = require("./personData")

console.log(calc.math("A",1,calc.add));
console.log(calc.math(1,3,calc.subtract));
console.log(calc.math(1,3,calc.multiply));

console.log(personalData("Hegabovic",1995));