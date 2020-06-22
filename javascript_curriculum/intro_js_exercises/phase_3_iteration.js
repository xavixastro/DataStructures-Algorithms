// Array#bubbleSort - receives an array, returns a sorted array by implementing 
// bubble sort sorting algorithm

Array.prototype.bubbleSort = function () {
    let newArr = this.slice(0);
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < newArr.length; i++) {
            if (newArr[i] > newArr[i + 1]) {
                [newArr[i], newArr[i + 1]] = [newArr[i + 1], newArr[i]]
                sorted = false;
            }
        }
    }
    return newArr
}

// String#substrings - receives a string, returns an array of all substrings

String.prototype.substrings = function(){
    let subs = []
    for (let i = 0; i < this.length; i++){
        for (let j = i; j < this.length; j++){
            subs.push(this.slice(i, j+1))
        }
    }
    return subs
}