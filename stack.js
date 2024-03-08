const LinkedList = require('./linkedList');

/** Stack: uses a linked list where you can 
 * remove from the top or add to the top
 */

class Stack {
  constructor() {
    this.list = new LinkedList();
  }
  /** push(val): add new value to the top of the stack. Returns undefined */
  push(val) {
    this.list.addToEnd(val);
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. should throw an error if the stack is empty
   */
  pop() {
    return this.list.removeFromEnd();
  }

  /** peek(): return the value of the first node in the stack */
  peek() {
    return this.list.peek();
  } 

  /** isEmpty(): return true if the stack is empty, otherwise false */
  isEmpty(){
    return this.list.isEmpty();
  }
}

module.exports = Stack;