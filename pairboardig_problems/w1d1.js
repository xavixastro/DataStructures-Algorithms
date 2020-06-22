// Initially, there is a Robot at position(0, 0).
// Given a sequence of its moves, judge if this robot makes a circle, 
// which means it moves back to the original place.

// The move sequence is represented by a string. And each move is represent by a character.
// The valid robot moves are R(Right), L(Left), U(Up) and D(down). The output should be 
// true or false representing whether the robot makes a circle.

// Example
// Input: "UD"
// Output: true
// Example 2:
// Input: "LL"
// Output: false

//Iterate through each char on my str
//keep a tracker for x position, initial 0 
//keep a tracker for y position, initial 0
//if find U x+=1
//if find D x-=1
//if find R y+=1
//if find L y-=1
//check x === 0 && y === 0


const robotMoves = str => {
    let xPos = 0;
    let yPos = 0;
    str.forEach(ch => {
        console.log(ch)
        switch (ch) {
            case 'U': xPos += 1; break;
            case 'D': xPos -= 1; break;
            case 'R': yPos += 1; break;
            case 'L': yPos -= 1; break;
        }  
    })
    return (xPos === 0 && yPos === 0)
}

console.log(robotMoves("UD"));
console.log(robotMoves("LL"));


// A self - dividing number is a number that is divisible by every digit it contains.
// For example, 128 is a self - dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

// Also, a self - dividing number is not allowed to contain the digit zero.

// Given a lower and upper number bound, output a list of every possible self dividing number, 
// including the bounds if possible.

// Example
// Input: left = 1, right = 22
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]

//Helper method: isSelfDividing(n) => boolean
//Convert n to string
//Iterate through each char(num) 
//if num === 0 || n % num !== 0 return false
//return true after iterating through all numbers

//main function: findSelfDividingRange(left, right)
//create a variable to keep track of numbers
//while left <= right call helper function
//if helper function return true add number to arr
//return arr

const isSelfDividing = (num) => {
    let divisible = true;
    let digits = num.toString();
    [...digits].forEach(div => {
        if (div == 0 || num % div !== 0) divisible = false;
    })
    return divisible
}

const findSelfDividingRange = (left, right) => {
    let nums = [];
    while (left <= right) {
        if (isSelfDividing(left)) nums.push(left);
        left += 1;
    }
    return nums;
}