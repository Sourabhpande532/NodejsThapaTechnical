// const {add1 , sub2, multi3} = require("./operator");
// console.log(add1(2,4));
// console.log(sub2(45,4));
// console.log(multi3(45,4));


// is called argument its must need defined function
// har individual file ko ham module kahte hai like index.js operator.js

const {add , sub, multi, name, div} = require("./operator");
console.log(add(2,4));
console.log(sub(45,4));
console.log(multi(45,4));
console.log(div(45,4));

console.log(name)
