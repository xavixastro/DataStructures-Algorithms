// subsets
// Write a function that takes an array and returns all of its subsets. 
// How many sets will it return?

// subsets(["a", "b", "c"]);
// [[], ["c"], ["b"], ["c", "b"], ["a"], ["c", "a"], ["b", "a"], ["c", "b", "a"]];




const subsets = arr => {  //["b"]
    debugger
    if (!arr.length) return [[]];
    if (arr.length === 1) return [[], arr.slice()];
    let ele = arr.shift(); //'a'
    let subs = subsets(arr); //[[], ['b']]
    let newSubs = subs.map(sub => sub.concat(ele)) //[['a'], ['b', 'a']]
    return [...subs, ...newSubs ];
}

console.log(subsets(["a", "b", "c"]));