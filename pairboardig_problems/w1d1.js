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
    [...str].forEach(ch => {
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

// console.log(robotMoves("UD"));
// console.log(robotMoves("LL"));


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


// Hard
// In a 2 dimensional array grid, each value grid[i][j] represents the height of a building located there.
// We are allowed to increase the height of any number of buildings, by any amount(the amounts can be different 
// for different buildings).Height 0 is considered to be a building as well.

// At the end, the "skyline" when viewed from all four directions of the grid, i.e.top, bottom, left, and right, 
// must be the same as the skyline of the original grid.A city's skyline is the outer contour of the rectangles 
// formed by all the buildings when viewed from a distance. See the following example.

// What is the maximum total sum that the height of the buildings can be increased ?

// Example
// Input: grid = [[3, 0, 8, 4], [2, 4, 5, 7], [9, 2, 6, 3], [0, 3, 1, 0]]
// Output: 35

//make a copy of the array where all the values on each row are the highest number on that row
// [8, 8, 8, 8]
// [7, 7, 7, 7]
// [9, 9, 9, 9]
// [3, 3, 3, 3]
//look for highest number on each column on original array HIGH
// col 0 => 9
// col 1 => 4
// col 2 => 8
// col 3 => 7
//iterate through each column on copy arr and replace any numbers that are hight than HIGH
// [8, 4, 8, 7]
// [7, 4, 7, 7]
// [9, 4, 8, 7]
// [3, 3, 3, 3]
//declare variable sum = 0
//iterate through each [i, j] on my grid => sum += copy[i[j] - original[i][j]

// const deepCopy = arr => {
//     let copy = []
//     arr.forEach(el =>{
//         if (Array.isArray(el)){
//             copy.push(deepCopy(el))
//         } else {
//             copy.push(el)
//         }
//     })
//     return copy
// }

const skyline = grid => {
    debugger
    let copy = Array(grid.length)
    for (let i = 0; i < copy.length; i++) {
        copy[i] = Array(grid[i].length).fill(Math.max(...grid[i]))
    }

    for (let i = 0; i < grid.length; i++) {
        let max = 0;
        for (let j = 0; j < grid.length; j++) {
            if (grid[j][i] > max) max = grid[j][i]
        }
        for (let j = 0; j < copy.length; j++) {
            if (copy[j][i] > max) copy[j][i] = max
        }
    }

    let sum = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            sum += (copy[i][j] - grid[i][j])
        }
    }

    return sum;
}

console.log(skyline([[3, 0, 8, 4], [2, 4, 5, 7], [9, 2, 6, 3], [0, 3, 1, 0]]))