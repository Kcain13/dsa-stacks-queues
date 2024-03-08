/** Node: node for a doubly linked list */

const LinkedList = require("./linkedList");

class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList extends LinkedList {
    constructor () {
        super(); // call the constructor of the parent class (LinkedList)
    }

    /** addToFront(val): add new value to the front of the list. Returns undefined. */
    addToFront(val) {
        const node = new Node(val);

        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }

        this.size++;
    }

    /** addToBack(val): add new value to the baack of the list. Returns undefined */
    addToBack(val) {
        const node = new Node (val);

        if(!this.tail) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }

        this.size++;
    }

    /** removeFromFront(): remove the node from the front of the list
     * and return its value. Should throw an error if the list is empty
     */
    removeFromFront(){
        if (!this.head) {
            throw new Error("Can't remove from an empty list.");
        }

        const temp = this.head;

        if (this.head === this.tail ) {
            this.tail = null;
        } else {
            this.head.prev = null;
        }

        this.size--;
        return temp.val;
    }

    /** removeFromBack(): remove the node from the back of the list
     * and return its value. Should throw an error if the list is empty.
     */

    removeFromBack(){
        if(!this.tail) {
            throw new Error("Can't remove from an empty list.");
        }

        const temp = this.tail;
        if( this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        this.size--;
        return temp.val;
    }
}

module.exports = DoublyLinkedList;