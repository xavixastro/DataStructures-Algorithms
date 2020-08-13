// rand7
// Write a method to generate a random integer(0...7), given a method that generates 
// a random integer between(0...5).The resulting rand7 distribution must be uniform.

function rand5(){
    return Math.floor(Math.random() * 5);
}

function rand7(){
    while (true){
        //generate rand5
        num = 5 * rand5() + rand5();
        if (num < 21) return num % 7;
    }
}

console.log(rand7());
console.log(rand7());
console.log(rand7());
console.log(rand7());