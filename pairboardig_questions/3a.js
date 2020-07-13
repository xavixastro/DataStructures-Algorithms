// myMap
// Implement the Array.prototype.map function in JavaScript.

Array.prototype.myMap = function(cb){
    let newArr = []
    this.forEach(ele => {
        newArr.push(cb(ele))
    })
    return newArr;
}

console.log([1,2,3,4,5,6].myMap(el => el * 2));
console.log(['a', 'b', 'c'].myMap(el => el + '!'));
console.log([1,2,3,4,5,6].myMap(el => el - 1));