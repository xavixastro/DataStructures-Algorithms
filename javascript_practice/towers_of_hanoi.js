const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


class Game {
    constructor(){
        this.towers = Array(3).fill().map(() => Array())
    }

    promptMove(){
        //(1) prints the stacks
        this.towers.forEach(tower => console.log(tower))
        let startTowerIdx;
        let endTowerIdx;
        //(2) asks the user where they want to move a disc to/from
        rl.question('Where do you want to move from?', answer1 => {
            rl.question('Where do you want to move to?', answer2 => {
                startTowerIdx = answer1;
                endTowerIdx = answer2;
                console.log(`You wanna move from ${startTowerIdx} to ${endTowerIdx}`)
                rl.close();
            })
        });


    }
}

g = new Game();
g.promptMove();