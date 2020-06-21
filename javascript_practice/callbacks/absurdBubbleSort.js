const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askIfGreaterThan = (el1, el2, cb) => {
    reader.question(`Is ${el1} greater than ${el2}?`, answer => {
        (answer === 'yes') ? cb(true) : cb(false)
    })
}

const innerBubbleSortLoop = (arr, i, madeAnySwaps, outerBubbleSortLoop) => {
    if (i == (arr.length - 1)) outerBubbleSortLoop(madeAnySwaps)
    if (i < arr.length - 1) {
        askIfGreaterThan(arr[i], arr[i + 1], (isGreaterThan) => {
            if (isGreaterThan) {
                debugger
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]],
                madeAnySwaps = true
            } 
            innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop)
        })
    }
    // reader.close();
}

const absurdBubbleSort = (arr, sortCompletionCallback) => {
    const outerBubbleSortLoop = (madeAnySwaps) => {
        if (madeAnySwaps == true) {
            innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop)
        } else {
            sortCompletionCallback(arr)
        }
    }
    outerBubbleSortLoop(true)
}


absurdBubbleSort([3, 2, 1], function (arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    reader.close();
});

