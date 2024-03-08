/** Node: node for a linked list */
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/** LinkedList: where you can 
 * remove from the front or add to the back
 */
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /** addToEnd(val): add new value to the end of the list. Returns undefined */

    addToEnd(Val) {
        const node = new Node(val);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.size++;
    }

    /** removeFromFront(): remove the node from the front of the list
     * and return its value should throw an error if th elist is empty
     */
    removeFromFront() {
        if (!this.head) {
            throw new Error("Can't remove from an empty list.");
        }

        const temp = this.head;

        if(this.head === this.tail) {
            this.tail = null;
        }

        this.head = this.head.next;
        this.size--;
        return temp.val;
    }

    /** peek(): return the value of the first node in the list */
    peek() {
        return this.head ? this.head.val : null;
    }

    /** isEmpty(): return true if the list is empty, otherwise false */
    isEmpty() {
        return this.size === 0;
    }
}

module.exports = LinkedList;