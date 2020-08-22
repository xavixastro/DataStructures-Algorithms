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



// *******RECURSIVE APPROACH*********

// def make_change(target, coins = [25, 10, 5, 1])
//   # Don't need any coins to make 0 cents change
// return [] if target == 0
//   # Can't make change if all the coins are too big. This is in case
//   # the coins are so weird that there isn't a 1 cent piece.
// return nil if coins.none ? { | coin | coin <= target }

//   # Optimization: make sure coins are always sorted descending in
//   # size.We'll see why later.
// coins = coins.sort.reverse

// best_change = nil
// coins.each_with_index do | coin, index |
//     # can't use this coin, it's too big
// next if coin > target

//     # use this coin
// remainder = target - coin

//     # Find the best way to make change with the remainder(recursive
//     # call).Why`coins.drop(index)` ? This is an optimization.Because
//     # we want to avoid double counting; imagine two ways to make
//     # change for 6 cents:
//     #(1) first use a nickel, then a penny
//     #(2) first use a penny, then a nickel
//     # To avoid double counting, we should require that we use * larger
//     # coins first *.This is what`coins.drop(index)` enforces; if we
//     # use a smaller coin, we can never go back to using larger coins
//     # later.
//     best_remainder = make_change(remainder, coins.drop(index))

//     # We may not be able to make the remaining amount of change(e.g.,
//     # if coins doesn't have a 1cent piece), in which case we shouldn't
//     # use this coin.
// next if best_remainder.nil ?

//     # Otherwise, the best way to make the change ** using this coin **,
//     # is the best way to make the remainder, plus this one coin.
//     this_change = [coin] + best_remainder

//     # Is this better than anything we've seen so far?
// if (best_change.nil ? || (this_change.count < best_change.count))
//     best_change = this_change
// end
// end

// return best_change if best_change.nil ?
//     best_change.count
// end



// High Score
// You've created an extremely popular game. You rank players in the game from highest to lowest score. 
// So far you're using an algorithm that sorts in O(nlogn) time, but players are complaining that their 
// rankings aren't updated fast enough. You need a faster sorting algorithm.

// Write a function that takes:

// an array of unsorted_scores
// the highest_possible_score in the game
// and returns a sorted array of scores in less than O(nlogn) time.

// Example

// unsorted_scores = [37, 89, 41, 65, 91, 53]
// HIGHEST_POSSIBLE_SCORE = 100

// sort_scores(unsorted_scores, HIGHEST_POSSIBLE_SCORE)
// # returns[37, 41, 53, 65, 89, 91]

function sortScores(unsortedScores, highestPossibleScore) {
    let scores = Array(highestPossibleScore + 1).fill(0);
    unsortedScores.forEach(score => scores[score] += 1);
    let sorted = [];
    scores.forEach((amount, score) => {
        while (amount > 0) {
            sorted.push(score);
            amount--;
        }
    })
    return sorted;
}

unsortedScores = [37, 89, 41, 65, 91, 53]
highestPossibleScore = 100

console.log(sortScores(unsortedScores, highestPossibleScore));
