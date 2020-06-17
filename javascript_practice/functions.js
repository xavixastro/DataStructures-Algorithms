// Write a function `isDivBy4` that accepts a number as an argument. The function should return a
// boolean indicating whether or not the number is divisible by 4.


//Function Expression(Anonymous Function) ***Not Hoisted
// let isDivBy4 = function (number) {
//     return number % 4 === 0
// }

//Function Declaration(Named Function) ***Hoisted
// function isDivBy4(number){
//     return number % 4 === 0
// }

//Arrow Function
// let isDivBy4 = (number) => {
//     return number % 4 === 0
// }

//One-line Arrow Function
let isDivBy4 = number => number % 4 === 0;

console.log(isDivBy4(8)); // true
console.log(isDivBy4(12)); // true
console.log(isDivBy4(24)); // true
console.log(isDivBy4(9)); // false
console.log(isDivBy4(10)); // false