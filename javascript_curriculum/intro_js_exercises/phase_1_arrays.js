const { PerformanceObserver, performance } = require('perf_hooks');

// Array#uniq - returns a new array containing each individual element of the 
// original array only once(creating all unique elements)

Array.prototype.uniq = function() {
    let uniques = {}
    this.forEach(ele => {
        uniques[ele] = true;
    })
    return Object.keys(uniques);
    // let uniq = []
    // for (let i = 0; i < this.length; i++) {
    //     if (uniq.indexOf(this[i]) === -1){
    //         uniq.push(this[i])
    //     }
    // }
    // return uniq;
}


// Array#twoSum - returns an array of position pairs where the elements sum to zero


//O(N^2)
Array.prototype.twoSum = function(){
    let pairs = []
    for (let i = 0; i < this.length-1; i++) {
        for (let j = i+1; j < this.length; j++) {
            if (this[i] + this[j] === 0) pairs.push([i, j])
        }
    }
    return pairs;
}


// Array#transpose - where we have a two - dimensional array representing a matrix.returns the transpose

Array.prototype.transpose = function(){
    let transposed = Array(this.length).fill().map(() => Array());
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this[i].length; j++) {
            transposed[j].push(this[i][j])
        }
    }
    return transposed;
}



var t0 = performance.now()
console.log([2, 3, 5, 1, 3, 2, 4, 4, 2, 2, 2, 25, 6, 8, 3, 8].uniq())
var t1 = performance.now()
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
console.log(this);