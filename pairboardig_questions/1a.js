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

// caesar_cipher
// Write a function that takes a message and an increment amount and outputs the same 
// letters shifted by that amount in the alphabet. 
// Assume lowercase and no punctuation. Preserve spaces.

const caesarCipher = (message, amount) => {
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    let newMessage = '';
    for (let i = 0; i < message.length; i++) {
        let char = message[i];
        let idx = alpha.indexOf(char);
        if (idx === -1) { 
            newMessage += char;
        } else {
            newMessage += alpha[(idx + amount) % 26]
        }
    }
    return newMessage;
}


console.log(caesarCipher('middle-outz', 2)); // okffng-qwvb 
console.log(caesarCipher('defend the east wall of the castle', 1)) // efgfoe uif fbtu xbmm pg uif dbtumf

