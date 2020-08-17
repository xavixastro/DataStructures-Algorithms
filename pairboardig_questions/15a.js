// streaming_sample
// You know how to use rand to randomly sample an element from an array.

// Now, write a function that, given an input stream of objects, will sample a value.
// The stream has limited length.

// Use only O(1) memory.
// Every value in the stream should have an equal probability of being sampled.


function streamingSample(stream){

    let sample = stream;
    let numEls = 1;

    while (true){
        let nextValue = stream.nextValue;
        if (nextValue === null) break;

        let keepProb = 1 / (numEls + 1)
        if (Math.random() < keepProb) sample = nextValue;
    
        numEls += 1
    }

    return sample;
}