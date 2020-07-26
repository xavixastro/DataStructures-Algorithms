// binary
// Write a function that takes an integer and returns it in binary form.

const binary = num => {
    let pow = 8;
    let binaryNum = "";
    while (pow >= 0) {
        if (2**pow <= num) {
            binaryNum += "1"
            num -= (2**pow)
        } else {
            binaryNum += "0";
        }
        pow--;
    }
    return binaryNum;
}

console.log(binary(0)); //00000000
console.log(binary(1)); //00000001
console.log(binary(2)); //00000010
console.log(binary(12)); //00001100
console.log(binary(16)); //00010000

