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

    constructor(){
        // this.stack = new Stack();
        // this.helper = new Stack();
        this.inStack = new Stack();
        this.outStack = new Stack();
        this.front = null;
        this.back = null;
    }

    enqueue(val){
        let node = new Node(val);
        // while (this.stack.length) {
        //     this.helper.push(this.stack.pop());
        // }
        // this.stack.push(node);
        // while (this.helper.length) {
        //     this.stack.push(this.helper.pop());
        // }
        // return this.stack.size();
        debugger
        if (!this.size()){
            this.front = node;            
            this.back = node;            
        } else {
            this.back.next = node;
            this.back = node;
        }
        this.inStack.push(new Node(node.value));
        return this.size();
    }

    dequeue(){
        // if (!this.stack.size()) return null;
        // return this.stack.pop();

        if (!this.size()) return null;
      
        if (this.size() === 1) {
            this.front = null;
            this.back = null;
        } else {
            this.front = this.front.next; 
        }
        
        if (!this.outStack.size()){
            while (this.inStack.size() > 0){
                this.outStack.push(this.inStack.pop())
            }
        }
        let node = this.outStack.pop();

        return node; 


    }

    size(){
        return this.inStack.size() + this.outStack.size();
    }

};

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;

let sq = new StackQueue();
sq.enqueue(4);
sq.enqueue(8);
