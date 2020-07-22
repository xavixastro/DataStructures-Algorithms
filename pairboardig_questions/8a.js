// Sums Upon Sums
// I give you a scrambled list of n unique integers between 0 and n.Tell me what number is missing.

// If I let you use O(nlog(n)) time, what is a naive way of doing this ?

// input: [4, 2, 0, 5, 1] => 3

const sumsUponSums = arr => {
    let count = Array(arr.length + 1).fill(false);
    arr.forEach(num => {
        count[num] = true; 
    })
    return count.indexOf(false);
}

console.log(sumsUponSums([4, 2, 0, 5, 1]));

// Next, what if I require that you solve the problem in O(n) time ? What datastructure might you use ?

// Finally, how could you solve the problem in O(n), and also O(1) space ?


