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
            this.top = node;
            this.top.next = prevTop;
        }
        this.length++;
        return this.length;
    }

    pop(){
        if (!this.length) return null;
        let prevTop = this.top;
        if (this.length === 1) {
            this.top = null;
            this.bottom = null;
        } else {
            let newTop = this.top.next;
            this.top = newTop;
        }
        this.length--;
        return prevTop.value;
    }

    size(){
        return this.length;
    }

}

exports.Node = Node;
exports.Stack = Stack;
