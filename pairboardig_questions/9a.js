// Hash Directory
// Suppose a hash representing a directory.All keys are strings with names for 
// either folders or files.Keys that are folders point to nested hashes.
// Keys that are files point to "true".Write a function that takes such a hash and 
// returns an array of strings with the path to each file in the hash.

// Example:

files = {
    'a' : {
        'b' : {
            'c' : {
                'd' : {
                    'e' : true
                },

                'f' : true
            }
        }
    }
}

const fileList = hashDir => {
    let paths = [];
    Object.keys(hashDir).forEach(key => {
        if (hashDir[key] === true) {
            paths.push(`${key}`);
        } else {
            fileList(hashDir[key]).forEach(el => {
                paths.push(`${key}/` + el);
            })
        }
    })
    return paths;
}

console.log(fileList(files)); //['a/b/c/d/e', 'a/b/c/f']
