// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(val){
        let node = new Node(val);
        if (!this.length) {
            this.top = node;
            this.bottom = node;
        } else {
            let prevTop = this.top;
            prevTop.next = node;
            this.top = node;
        }
        this.length++;
        return this.length;
    }

    pop(){

    }

    size(){

    }

}

exports.Node = Node;
exports.Stack = Stack;
