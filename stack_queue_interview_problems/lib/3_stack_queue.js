// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push 
//   - Pop 
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
// -----------

class Node {
    // TODO: Implement the Node class!
    constructor(val){
        this.value = val;
        this.next = null;
    }

}

class Stack {
    // TODO: Implement the Stack class!
    constructor(){
        this.bottom = null;
        this.top = null;
        this.length = 0;
    }

    push(node){
        // let node = new Node(val);
        if (!this.length) {
            this.top = node; 
            this.bottom = node;
        } else {
            node.next = this.top;
            this.top = node;
        }
        this.length++;
        return this.length;
    }

    pop(){  
        if (!this.length) return null;
        let node = this.top;
        if (this.length === 1) {
            this.top = null;
            this.bottom = null;
        } else {
            this.top = this.top.next;
        }
        this.length--;
        return node;
    }

    size(){
        return this.length;
    }

}

class StackQueue {
    // TODO: Implement the StackQueue class!

};

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
