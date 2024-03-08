const DoublyLinkedList = require('./doublyLinkedList');

/** deque: double-ended queue using a doubly linked list */

class Deque {
    constructor() {
        this.list = new DoublyLinkedList();
    }

    /** addToFront(val): add new value to the front of the deque. Returns undefined. */
    addToFront(val) {
        this.list.addToFront(val);
    }

    /** addToBack(val): add new value to the back of the deque. Returns undefined. */
    addToBack(val) {
        this.list.addToBack(val);
    }

    /** removeFromFront(): remove the value from the front of the deque
     * and return it. Should throw an error if the deque is empty. */
    removeFromFront() {
        return this.list.removeFromFront();
    }

    /** removeFromBack(): remove the value from the back of the deque
     * and return it. Should throw an error if the deque is empty. */
    removeFromBack() {
        return this.list.removeFromBack();
    }

    /** peekFront(): return the value of the front of the deque. */
    peekFront() {
        return this.list.peekFront();
    }

    /** peekBack(): return the value of the back of the deque. */
    peekBack() {
        return this.list.peekBack();
    }

    /** isEmpty(): return true if the deque is empty, otherwise false. */
    isEmpty() {
        return this.list.isEmpty();
    }
}

module.exports = Deque;