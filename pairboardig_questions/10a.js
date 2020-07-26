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


// Factorial
// Implement factorial with and without recursion.
// What is a potential disadvantage of the recursive way ?

// What is tail - recursion ? 
// Does Ruby have tail - call optimization ? 
// Pretend it did; write a tail - recursive version of rec_fac.

const recursiveFactorial = num => {
    if (num === 0) return 1;
    return num * recursiveFactorial(num - 1);
}

console.log(recursiveFactorial(1));
console.log(recursiveFactorial(2));
console.log(recursiveFactorial(3));
console.log(recursiveFactorial(4));
console.log(recursiveFactorial(10));

const iterativeFactorial = num => {
    let result = 1;
    while (num > 0) {
        result *= num;
        num--;
    }
    return result
}

console.log(iterativeFactorial(1));
console.log(iterativeFactorial(2));
console.log(iterativeFactorial(3));
console.log(iterativeFactorial(4));
console.log(iterativeFactorial(10));