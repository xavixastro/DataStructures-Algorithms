// Array#uniq - returns a new array containing each individual element of the 
// original array only once(creating all unique elements)

Array.prototype.uniq = function() {
    let uniques = {}
    this.forEach(ele => {
        uniques[ele] = true;
    })
    return Object.keys(uniques);
}

// Array#twoSum - returns an array of position pairs where the elements sum to zero

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
