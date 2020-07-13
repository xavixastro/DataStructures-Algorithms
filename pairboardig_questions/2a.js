// fibs
// Write a function, fibs(num) which returns the first n elements from the 
// fibonnacci sequence, given n.

// Solve it both iteratively and recursively.


const fibs = (num) => {
    //Iteratively
    // if (!num) return [];
    // if (num === 1) return [0];
    // let arr = [0, 1];
    // while (arr.length < num) {
    //     arr.push(arr[arr.length-1] + arr[arr.length-2])
    // }
    // return arr;

    //Recursively
    // debugger
    if (!num) return [];
    if (num === 1) return [0];
    if (num === 2) return [0, 1];
    let prev = fibs(num - 1);
    prev.push(prev[prev.length-1] + prev[prev.length-2]);
    return prev;
}

console.log(fibs(0));
console.log(fibs(1));
console.log(fibs(2));
console.log(fibs(4));
console.log(fibs(10));


// isPalindrome
// Write a JavaScript function that takes a string and returns true if it's a 
// palindrome, false if it's not. Use JavaScript.

// This solution takes less time and memory than rebuilding the string backward 
// and comparing the two.

const isPalindrome = str => {
    debugger
    if (!str.length) return true;
    let i = 0;
    while (i < str.length) {
        if (str[i] != str[str.length - 1 - i]) return false;
        i++;
    }
    return true;
}

console.log(isPalindrome('')); //true
console.log(isPalindrome('solos')); //true
console.log(isPalindrome('hello')); //false
console.log(isPalindrome('kayak')); //true
console.log(isPalindrome('mom')); //true
console.log(isPalindrome('murdrum')); //true
console.log(isPalindrome('karen')); //false
