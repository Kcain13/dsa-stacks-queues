const LinkedList = require('./linkedList');

/** Queue: uses a linkedlist where you can
 * remove from the front or add to the back
 */

class Queue {
  constructor() {
    this.list = new LinkedList();
  }

  /** enqueue(val): add new value to the end of the queue. returns undefined */
  enqueue(val) {
    this.list.addToEnd(val);
  }

  /**dequeue(): remove the node from the start of the queue 
   * return its value. should thow an error if the queue is empty
   */

  dequeue(){
    return this.list.removeFromFront();
  }

  /** peek(): return the value of the first node in the queue */
  peek(){
    return this.list.peek();
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */
  isEmpty(){
    return this.list.isEmpty();
  }
}

module.exports = Queue;