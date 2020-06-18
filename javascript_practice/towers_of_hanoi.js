const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


class Game {
    constructor(){
        this.towers = Array(3).fill().map(() => Array())
        let values = [4,3,2,1];
        for (let v of values) {this.towers[0].push(v)}
    }

    promptMove(rl, cb){
        //(1) prints the stacks
        this.towers.forEach(tower => console.log(tower))
        //(2) asks the user where they want to move a disc to/from
        let startTowerIdx;
        let endTowerIdx;
        rl.question('Where do you want to move from?', answer1 => {
            rl.question('Where do you want to move to?', answer2 => {
                startTowerIdx = parseInt(answer1);
                endTowerIdx = parseInt(answer2);
                // console.log(`You wanna move from ${startTowerIdx} to ${endTowerIdx}`)
                cb(startTowerIdx, endTowerIdx);
            })
        });


    }

    isValidMove(startTowerIdx, endTowerIdx) {
        debugger
        if (![0, 1, 2].includes(startTowerIdx) || ![0, 1, 2].includes(endTowerIdx)) return false;
        return (!this.towers[endTowerIdx].length || this.towers[startTowerIdx].slice(-1) < this.towers[endTowerIdx].slice(-1))
    }

    move(startTowerIdx, endTowerIdx) {
        if (this.isValidMove(startTowerIdx, endTowerIdx)){
            // console.log('perform move happening in 3, 2, 1...')
            this.towers[endTowerIdx].push(this.towers[startTowerIdx].pop(1))
            this.print();
            return true;
        }
        return false;
    }

    print(){
        console.log(JSON.stringify(this.towers));
    }


    isWon(){
        return (this.towers[1].length === 5 || this.towers[2].length === 5)
    }

    run(reader, completionCallback){
        this.promptMove(reader, (start, end) => {

            if (!this.move(start, end)) console.log('Invalid move');

            if (this.isWon()){
                console.log('YOU WON!');
                completionCallback();
            } else {
                this.run(reader, completionCallback)
            }

        });
    }
}


function completion() {
    reader.question("Play again? y or n: ", restartGame => {
        if (restartGame === "y") {
            g = new Game();
            g.run(reader, completion);
        } else {
            reader.close();
        }
    });
};

g = new Game();
g.run(rl, completion);
