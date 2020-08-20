// Make Change
// Write a function that takes in an amount and a set of coins.Return the minimum number 
// of coins needed to make change for the given amount.You may assume you have an unlimited 
// supply of each type of coin.If it's not possible to make change for a given amount, return nil or NaN.

// Example:

// make_change(14, [10, 7, 1])
// # return 2 because[7, 7] is the smallest combination


function makeChange(amount, coins){

    let bestChange = [];

    for (let i = 0; i < coins.length; i ++) {
        let change = [];
        let currentAmout = amount;
        for (let j = i; j < coins.length; j++) {
            let currentCoin = coins[j];
            while (currentCoin <= currentAmout) {
                change.push(currentCoin);
                currentAmout -= currentCoin;
            }
        }
        if (!bestChange.length || bestChange.length > change.length) bestChange = change;
    }

    return bestChange;

}


console.log(makeChange(14, [10, 7, 1]));
console.log(makeChange(25, [10, 5, 1]));