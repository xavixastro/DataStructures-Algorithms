// Square Root
// Implement a square root function that uses only addition, subtraction, multiplication 
// and division in less than linear time.You may assume that input is always a perfect square.

// Hint: One naive solution has a better time complexity than many people realize--
// iterating from 0 until the square root is going to be O(sqrt n), not O(n).However, we can do better!


function squareRoot(num){
    let i = 1
    while (true) {
        if (i * i === num) return i;
        i++;  
    }
}

console.log(squareRoot(1));
console.log(squareRoot(25));
console.log(squareRoot(49));