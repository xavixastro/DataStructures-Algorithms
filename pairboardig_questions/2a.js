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
    debugger
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