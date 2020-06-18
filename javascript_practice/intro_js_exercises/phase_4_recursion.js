// range(start, end) - receives a start and end value, 
// returns an array from start up to end


let range = (start, end) => {
    if (start === end) return [start]
    return [start, ...range(start+1, end)]
}

// sumRec(arr) - receives an array of numbers and recursively sums them

let sumRec = arr => {
    if (!arr.length) return 0;
    return arr[0] + sumRec(arr.slice(1))
}

// exponent(base, exp) - receives a base and exponent, 
// returns the base raise to the power of the exponent(base ^ exp)

let exponent = (base, exp) => {
    if (exp === 0) return 1;
    return base * exponent(base, exp-1)
}


// fibonacci(n) - receives an integer, n, and returns the first n Fibonacci numbers

let fibonacci = n => {
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    let prev = fibonacci(n - 1); //[0, 1]
    prev.push(prev[prev.length-1] + prev[prev.length-2])
    return prev;
}

// deepDup(arr) - deep dup of an Array!

let deepDup = arr => {
    let newArr = [];
    arr.forEach(el => {
        if (!Array.isArray(el)) {
            newArr.push(el)
        } else {
            newArr.push(deepDup(el))
        }
    })
    return newArr
}