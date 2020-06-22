// Array#myEach(callback) - receives a callback function and executes the 
// callback for each element in the array

Array.prototype.myEach = function(cb) {
    for(let i = 0; i < this.length; i++){
        cb(this[i])
    }
}

// Array#myMap(callback) - receives a callback function, returns a new array 
// of the results of calling the callback function on each element of the array

Array.prototype.myMap = function(cb) {
    let newArr = []
    this.myEach(el => newArr.push(cb(el)));
    return newArr
}

// Array#myReduce(callback[, initialValue]) - (like Ruby's Array#inject) receives 
// a callback function, and optional initial value, returns an accumulator by applying 
// the callback function to each element and the result of the last invocation of the 
// callback (or initial value if supplied)

// initialValue is optional and should default to the first element of the array if not provided

Array.prototype.myReduce = function(cb, initialValue){
    let arr = this.slice();
    let acc = initialValue || arr.shift(1);
    arr.myEach(el => acc = cb(acc, el) );
    return acc
}