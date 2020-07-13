// valid_ip?
// Write a method that takes a string as input. It should return true if the input 
// is a valid IPv4 address (ie. anything between 0.0.0.0 and 255.255.255.255 is valid).

const valid_ip = str => {
    let arr = str.split('.')
    if (arr.length != 4) return false
    return arr.map(ip => parseInt(ip)).every(ip => ip >= 0 && ip <= 255);
}

console.log(valid_ip('0.0.0.0')); //true
console.log(valid_ip('255.255.255.255')); //true
console.log(valid_ip('255.256.255.0')); //false
console.log(valid_ip('128.255.0.255')); //true
console.log(valid_ip('128.0.255')); //false
console.log(valid_ip('255')); //false

// shuffle
// You are given an array and a random number generator. Shuffle the array.

const shuffle = arr => {
    let newArr = [];
    while (arr.length) {
        let randIdx = Math.floor(Math.random() * arr.length);
        let ele = arr.splice(randIdx, 1);
        newArr = newArr.concat(ele);
    }
    return newArr;
}

console.log(shuffle(["Banana", "Orange", "Apple", "Mango"]));
console.log(shuffle([1,2,3,4,5,6,7,8,9]));
console.log(shuffle(['a','b','c','d','e','f']));
console.log(shuffle(["hello", 99, true, 5.4]));
