const Node = require('../base_elements/node');

class Stack {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  getStack() {
    if (!this.head) {
      console.log('Stack is empty.');
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
      this.head = new Node(value, this.head);
    }
    this.length++;
  }

  pop() {
    if (this.length) {
      const returnValue = this.head.value;
      this.head = this.head.next;
      this.length--;
      return returnValue;
    } else {
      console.log('No elements in stack.');
    }
  }
}

module.exports = Stack;
