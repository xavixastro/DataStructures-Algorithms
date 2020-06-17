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

console.log('---------------------')


// Write a function `keepItQuiet` that accepts a string as an argument. The function should return the
// lowercase version of the string with 3 periods added to the end of it.

let keepItQuiet = str => str.toLowerCase() + '...'

console.log(keepItQuiet("HOORAY")); // 'hooray...'
console.log(keepItQuiet("Doggo")); // 'doggo...'
console.log(keepItQuiet("WHAT?!?!")); // 'what?!?!...'

console.log('---------------------')


// Write a function `isLong` that accepts a string as an argument. The function should return a boolean
// indicating whether or not the string is longer than 5 characters

let isLong = str => str.length > 5;

console.log(isLong("pie")); // false
console.log(isLong("kite")); // false
console.log(isLong("kitty")); // false
console.log(isLong("telescope")); // true
console.log(isLong("thermometer")); // true
console.log(isLong("restaurant")); // true

console.log('---------------------')

// Write a function `half` that accepts a number as an argument. The function should return half of the
// number.

let half = num => num / 2;

console.log(half(8)); // 4
console.log(half(15)); // 7.5
console.log(half(90)); // 45

console.log('---------------------')


// Write a function `endsWithT` that accepts a string as an argument. The function should return a
// boolean indicating whether or not the string ends with the character 't'.

let endsWithT = str => str.slice(-1) === 't';

console.log(endsWithT("smart")); // true
console.log(endsWithT("racket")); // true
console.log(endsWithT("taco")); // false
console.log(endsWithT("boomerang")); // false

console.log('---------------------')



// Write a function `average` that accepts three numbers as arguments. The function should return the
// average of the three numbers.

let average = (n1, n2, n3) => (n1 + n2 + n3) / 3;

console.log(average(3, 10, 8)); // 7
console.log(average(10, 5, 12)); // 9
console.log(average(6, 20, 40)); // 22

console.log('---------------------')


// Write a function `startsWithR` that accepts a string as an argument and returns a boolean indicating
// whether or not the string starts with 'r' or 'R'.

// let startsWithR = str => str[0] === 'r' || str[0] === 'R';
let startsWithR = str => ['r', 'R'].includes(str[0]);

console.log(startsWithR("roger that")); // true
console.log(startsWithR("Row, row, row your boat")); // true
console.log(startsWithR("slip")); // false
console.log(startsWithR("Taxicab")); // false

console.log('---------------------')

// Write a function `parity` that accepts a number as an argument. The function should return the
// string 'even' if the number is even. It should return the string 'odd' if the number is odd.


let parity = num => (num % 2 === 0) ? 'even' : 'odd';

console.log(parity(5)); // 'odd'
console.log(parity(7)); // 'odd'
console.log(parity(13)); // 'odd'
console.log(parity(32)); // 'even'
console.log(parity(10)); // 'even'
console.log(parity(602348)); // 'even'

console.log('---------------------')

// Write a function `longer` that accepts two strings as arguments. The function should return the
// string that is longer. If the strings have the same length, then return the first string.


let longer = (str1, str2) => (str1.length >= str2.length) ? str1 : str2;

console.log(longer("drum", "piranha")); // 'piranha'
console.log(longer("basket", "fork")); // 'basket'
console.log(longer("flannel", "sustainable")); // 'sustainable'
console.log(longer("disrupt", "ability")); // 'disrupt'
console.log(longer("bird", "shoe")); // 'bird'

console.log('---------------------')


// Write a function `oneOrNone` that accepts two booleans as arguments. The function should return true
// if exactly one of the arguments is true. If BOTH arguments are true, then it should return false.

let oneOrNone = (val1, val2) => !!(val1 ^ val2)

console.log(oneOrNone(false, false)); // false
console.log(oneOrNone(true, false)); // true
console.log(oneOrNone(false, true)); // true
console.log(oneOrNone(true, true)); // false

console.log('---------------------')


// Write a function `endsInLy` that accepts a string as an argument and returns a boolean indicating
// whether or not the string ends in the substring 'ly'.

// let endsInLy = str => str.slice(-2) === 'ly';
let endsInLy = str => str.endsWith('ly');

console.log(endsInLy("pretty")); // false
console.log(endsInLy("instant")); // false
console.log(endsInLy("analytic")); // false
console.log(endsInLy("timidly")); // true
console.log(endsInLy("fly")); // true
console.log(endsInLy("gallantly")); // true

console.log('---------------------')


// Write a function `funnySound` that accepts two strings as arguments. The function should return a
// new string containing the first three characters of both strings concatenated together.

// You can assume that the arguments are both at least three characters long.

let funnySound = (str1, str2) => str1.slice(0, 3) + str2.slice(0, 3);

console.log(funnySound("tiger", "spoon")); // 'tigspo'
console.log(funnySound("computer", "phone")); // 'compho'
console.log(funnySound("skate", "bottle")); // 'skabot'
console.log(funnySound("frog", "ashtray")); // 'froash'

console.log('---------------------')


// Write a function `stringSize` that accepts a string as an argument. The function should return the
// string 'small' if the argument is shorter than 5 characters, 'medium' if it is exactly 5 characters, and
// 'large' if it is longer than 5 characters.

let stringSize = str => str.length < 5 ? 'small' : str.length > 5 ? 'large' : 'medium';

console.log(stringSize("cat")); // 'small'
console.log(stringSize("bell")); // 'small'
console.log(stringSize("ready")); // 'medium'
console.log(stringSize("shirt")); // 'medium'
console.log(stringSize("shallow")); // 'large'
console.log(stringSize("intelligence")); // 'large'

console.log('---------------------')


// Write a function `wackyWord` that accepts two strings as arguments. The function should return a new
// string containing the first three characters of the first string concatenated with the last two
// character of the second string.

// You can assume that the first argument has a length of at least three and the second argument has a
// length of at least two.

let wackyWord = (str1, str2) => str1.slice(0, 3) + str2.slice(-2);

console.log(wackyWord("very", "kindly")); // 'verly'
console.log(wackyWord("forever", "sick")); // 'forck'
console.log(wackyWord("cellar", "door")); // 'celor'
console.log(wackyWord("bagel", "sweep")); // 'bagep'

console.log('---------------------')



// Write a function `divisible(num1, num2)` that accepts two numbers as arguments. The function should
// return a boolean indicating whether or not `num1` is divisible by `num2`.

let divisible = (num1, num2) => num1 % num2 === 0;

console.log(divisible(12, 3)); // true
console.log(divisible(12, 5)); // false
console.log(divisible(60, 4)); // true
console.log(divisible(60, 11)); // false
console.log(divisible(21, 7)); // true
console.log(divisible(21, 6)); // false

console.log('---------------------')

// Write a function `caseChange` that accepts a string and a boolean as arguments. The function should
// return the uppercase version of the string if the boolean is true. The function should return the
// lowercase version of the string if the boolean is false.

let caseChange = (str, bool) => bool ? str.toUpperCase() : str.toLowerCase();

console.log(caseChange("Super", true)); // 'SUPER'
console.log(caseChange("Super", false)); // 'super'
console.log(caseChange("tAmBourine", true)); // 'TAMBOURINE'
console.log(caseChange("tAmBourine", false)); // 'tambourine'

console.log('---------------------')


// Write a function `inRange(min, max, n)` that accepts three numbers as arguments. The function should
// return a boolean indicating if `n` is between `min` and `max` inclusive.

let inRange = (min, max, n) => n >= min && n <= max;

console.log(inRange(5, 13, 8)); // true
console.log(inRange(5, 13, 29)); // false
console.log(inRange(100, 125, 100)); // true
console.log(inRange(100, 125, 99)); // false
console.log(inRange(40, 45, 44)); // true
console.log(inRange(40, 45, 45)); // true
console.log(inRange(40, 45, 46)); // false

console.log('---------------------')



// Write a function `averageOfFour(num1, num2, num3, num4)` that accepts four numbers as arguments. The
// function should return the average of all four numbers.

let averageOfFour = (num1, num2, num3, num4) => (num1 + num2 + num3 + num4) / 4;

console.log(averageOfFour(10, 4, 12, 3)); // 7.25
console.log(averageOfFour(-20, 50, 4, 21)); // 13.75
console.log(averageOfFour(10, 4, 12, 3)); // 7.25
console.log(averageOfFour(5, 5, 3, 7)); // 5

console.log('---------------------')


// Write a function `numberChange` that accepts a number as an argument. The function should return
// half the number if it is even. The function should return double the number if it is odd.

let numberChange = num => (num % 2 === 0) ? num / 2 : num * 2;

console.log(numberChange(6)); // 3
console.log(numberChange(7)); // 14
console.log(numberChange(16)); // 8
console.log(numberChange(21)); // 42

console.log('---------------------')



// Write a function `larger` that accepts two numbers as arguments. The function should return the
// larger number.

let larger = (num1, num2) => Math.max(num1, num2);

console.log(larger(256, 400)); // 400
console.log(larger(31, 4)); // 31
console.log(larger(-6, 7)); // 7
console.log(larger(11.3, 11.2)); // 11.3
console.log(larger(-10, -3)); // -3

console.log('---------------------')



// Write a function `contains(str1, str2)` that accepts two strings as arguments. The function should
// return a boolean indicating whether or not `str2` is contained within `str1`. The function should
// ignore any differences in capitalization.


let contains = (str1, str2) => str1.toUpperCase().indexOf(str2.toUpperCase()) > -1;

console.log(contains("caterpillar", "pill")); // true
console.log(contains("lion's share", "on")); // true
console.log(contains("SORRY", "or")); // true
console.log(contains("tangent", "gem")); // false
console.log(contains("clock", "ok")); // false

console.log('---------------------')



// Write a function named `fiveMultiplesOf` that accepts a number as an argument. The function should
// print out the first five multiples of the given number. The function doesn't need to return any
// value. It should just print to the terminal.

let fiveMultiplesOf = number => {
    for (let i = 1; i <= 5; i++) {
        console.log(number * i)
    }
}

fiveMultiplesOf(7);
// prints
//  7
//  14
//  21
//  28
//  35

fiveMultiplesOf(3);
// prints
//  3
//  6
//  9
//  12
//  15

console.log('---------------------')


// Write a function named `sumUpTo(max)` that accepts a max number as an argument. The function should
// return the total sum of all whole numbers from 1 to the max, inclusive.
//
// For example, sumUpTo(4) should return 10 because 1 + 2 + 3 + 4 = 10.


let sumUpTo = max => {
    let sum = 0;
    for (let i = 0; i <= max; i++) {
        sum += i
    }
    return sum;
}

console.log(sumUpTo(4)); // 10
console.log(sumUpTo(5)); // 15
console.log(sumUpTo(2)); // 3

console.log('---------------------')



// Write a function named `noOhs` that accepts a string as an argument. The functions should print the
// characters of the string one by one except the character 'o'. The function doesn't need to return
// any value. It should just print to the terminal.

let noOhs = str => {
    for (let char of str) {
        if (char !== 'o') console.log(char);
    }
}

noOhs("code");
// prints
//  c
//  d
//  e

noOhs("school");
// prints
//  s
//  c
//  h
//  l

console.log('---------------------')


// Write a function named `oddSum(max)` that accepts a max number as an argument. The function should
// return the total sum of all odd numbers from 1 to the max, inclusive.
//
// For example, oddSum(10) should return 25 because 1 + 3 + 5 + 7 + 9 = 25

let oddSum = max => {
    let sum = 0;
    [...Array(max+1).keys()].forEach(ele => {
        if (ele % 2 !== 0) sum += ele
    })
    return sum;
}

console.log(oddSum(10)); // 25
console.log(oddSum(5)); // 9

console.log('---------------------')



// Write a function named `stringRepeater(str, num)` that accepts a string and a number as arguments.
// The function should return a new string consisting of the `str` repeated `num` number of times.

let stringRepeater = (str, num) => str.repeat(num);

console.log(stringRepeater("q", 4)); // 'qqqq'
console.log(stringRepeater("go", 2)); // 'gogo'
console.log(stringRepeater("tac", 3)); // 'tactactac'

console.log('---------------------')



// Write a function named `productUpTo(max)` that accepts a max number as an argument. The function
// should return the total product of all whole numbers from 1 to the max, inclusive. A product is a
// number obtained from multiplying numbers together.
//
// For example, productUpTo(4) should return 24 because 1 * 2 * 3 * 4 = 24

let productUpTo = max => [...Array(max+1).keys()].slice(1).reduce((acc, val) => acc * val);

console.log(productUpTo(4)); // 24
console.log(productUpTo(5)); // 120
console.log(productUpTo(7)); // 5040

console.log('---------------------')


// Write a function named `divByEither(num1, num2, max)` that accepts three numbers as arguments. 
// The function should print out all positive numbers less than max that are divisible by num1 or num2. 
// The function doesn't need to return any value. It should just print to the terminal.

let divByEither = (num1, num2, max) => {
    for (let i = 1; i < max; i++){
        if (i % num1 === 0 || i % num2 === 0) console.log(i);
    }
}

divByEither(4, 3, 16);
// prints
//  3
//  4
//  6
//  8
//  9
//  12
//  15

divByEither(7, 5, 20);
// prints
//  5
//  7
//  10
//  14
//  15
