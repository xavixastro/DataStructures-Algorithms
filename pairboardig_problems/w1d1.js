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

console.log(robotMoves("UD"));
console.log(robotMoves("LL"));