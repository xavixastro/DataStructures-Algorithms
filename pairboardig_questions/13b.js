// Square Root
// Implement a square root function that uses only addition, subtraction, multiplication 
// and division in less than linear time.You may assume that input is always a perfect square.

// Hint: One naive solution has a better time complexity than many people realize--
// iterating from 0 until the square root is going to be O(sqrt n), not O(n).However, we can do better!


// function squareRoot(num){
//     let i = 1
//     while (true) {
//         if (i * i === num) return i;
//         i++;  
//     }
// }

function squareRoot(num, candidates = null) {
    // debugger
    if (num === 1) return num;
    candidates = candidates || [...Array(Math.floor(num / 2)+1).keys()].slice(1);
    let middle = candidates.length / 2;
    switch (Math.sign(num - (candidates[middle] * candidates[middle]))){
        case 1:
            return squareRoot(num, candidates.slice(0, middle))
        case 0:
            return candidates[middle];
        case -1: 
            return squareRoot(num, candidates.slice(middle + 1))
    } 
}

// console.log(squareRoot(1));
console.log(squareRoot(4));
// console.log(squareRoot(25));
// console.log(squareRoot(49));