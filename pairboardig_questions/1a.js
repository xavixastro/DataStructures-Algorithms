// digital_root
// Write a method, digital_root(num). It should sum the digits of a positive integer. 
// If it is greater than or equal to 10, sum the digits of the resulting number. 
// Keep repeating until there is only one digit in the result, called the "digital root". 
// Do not use string conversion within your method.

const digitalRoot = (num) => {
    //find if num < 10 return num
    // get lastDigit using num % 10
    // otherNums using Math.floor(num / 10)
    //return the sum of lastDigit + recursive call to the otherNums
    //return if < 10 || recursive call

    if (num < 10) return num;
    let lastDigit = num % 10;
    let otherDigits = Math.floor(num / 10);
    let result = lastDigit + digitalRoot(otherDigits);
    return digitalRoot(result);
}

console.log(digitalRoot(6823)); //1
console.log(digitalRoot(22)); //4
console.log(digitalRoot(99)); //9
console.log(digitalRoot(4)); //4