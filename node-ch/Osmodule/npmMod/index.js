// const chalk = require('chalk');
// const validator = require("validator")

// console.log(chalk.blue.underline.inverse("hellow world: "));

// const res = validator.isEmail("Sourabhpande43@gmail.com");
// console.log(res ? chalk.green.inverse(res): chalk.red.inverse(res));


const chalk = require("chalk");
const validator = require("validator")
const heroes = require('heroes');
console.log(heroes ? chalk.green.bold.inverse(heroes): chalk.red.inverse(heroes));

console.log(chalk.yellow.bold.inverse("I am saurabh"));
const res = validator.isEmail("sourabhpande54@gmail.co"
)
console.log(res ? chalk.green.bold.inverse(res): chalk.red.inverse(res));