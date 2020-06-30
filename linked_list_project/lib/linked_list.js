// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        let node = new Node(val);
        if (this.length === 0){
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (!this.length) return undefined;
        let node = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let newTail = this.head;
            while (newTail.next != this.tail) {
                newTail = newTail.next;
            }
            newTail.next = null;
            this.tail = newTail;
        }
        this.length--;
        return node;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let node = new Node(val)
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (!this.length) return undefined;
        let node = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }
        this.length--;
        return node;
    }

    // TODO: Implement the contains method here
    contains(target) {
        if (!this.length) return false
        let node = this.head
        while (node) {
            if (node.value === target) return true;
            node = node.next;
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if (index >= this.length) return null;
        let node = this.head;
        for (let i = 0; i < this.length; i++) {
            if (index === i) return node;
            node = node.next;
        }
    }

    // TODO: Implement the set method here
    set(index, val) {
        if (index >= this.length) return false;
        let node = this.head;
        for (let i = 0; i < this.length; i++) {
            if (index === i) {
                node.value = val;
                return true;
            }
            node = node.next;
        }
        return false;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index === 0) return this.addToHead(val);
        let nextNode = this.get(index)
        if (!nextNode) return false;
        let prevNode = this.get(index - 1)
        let newNode = new Node (val);
        newNode.next = nextNode;
        prevNode.next = newNode;
        this.length++;
        return true
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index === 0) return this.removeHead();
        if (index === this.length - 1) return this.removeTail();
        let node = this.get(index);
        if (!node) return undefined;
        let prevNode = this.get(index - 1);
        let nextNode = this.get(index + 1);
        prevNode.next = nextNode;
        this.length --; 
        return node;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
