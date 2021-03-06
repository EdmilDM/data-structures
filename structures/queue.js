const Node = require('../base_elements/node');

class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  getQueue() {
    if (!this.head) {
      console.log('Queue is empty.');
    } else {
      let auxNode = this.head;
      while (auxNode) {
        console.log(auxNode);
        auxNode = auxNode.next;
      }
    }
  }

  push(value) {
    if (!this.head) {
      this.head = new Node(value, null);
    } else {
      let auxNode = this.head;
      while (auxNode.next) {
        auxNode = auxNode.next;
      }
      auxNode.next = new Node(value, null);
    }
    this.length++;
  }

  pop() {
    if (this.length) {
      const returnValue =this.head.value;
      this.head = this.head.next;
      this.length--;
      return returnValue;
    } else {
      console.log('No elements in queue.');
    }
  }
}

module.exports = Queue;
