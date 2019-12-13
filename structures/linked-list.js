const Node = require('../base_elements/node');

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  getList() {
    if (!this.head) {
      console.log('No elements in the list.');
    } else {
      let auxNode = this.head;
      while (auxNode) {
        console.log(auxNode);
        auxNode = auxNode.next;
      }
    }
  }

  getElement(value) {
    if (!this.head) {
      console.log('No elements in the list.');
    } else {
      let auxNode = this.head;
      let counter = 0;
      while (auxNode) {
        if (auxNode.value === value) {
          console.log(`Value ${value} found in position ${counter}.`);
        }
        auxNode = auxNode.next;
        counter++;
      }
    }
  }

  insert(value, position) {
    if (!Number.isInteger(position)) {
      throw new Error('Position is not an integer.');
    } else if (position > this.length) {
      throw new Error('Position can\'t be higher than length.');
    } else if (position < 0) {
      throw new Error('Position can\'t be negative.');
    }
    if (!this.head) {
      this.head = new Node(value, null);
    } else if (position === 0) {
      const newNode = new Node(value, this.head);
      this.head = newNode;
    } else {
      let auxNode = this.head;
      /* Position -1 in order to get to the node before the position
      *  where we want to insert the new node, starts in 1 because it of head.
      */
      for (let i=1; i < position - 1; i++) {
        auxNode = auxNode.next;
      }
      // If it's the last one.
      if (!auxNode.next) {
        auxNode.next = new Node(value, null);
      } else {
        const newNode = new Node(value, auxNode.next);
        auxNode.next = newNode;
      }
    }
    this.length++;
  }

  delete(position) {
    if (!Number.isInteger(position)) {
      throw new Error('Position is not an integer.');
    } else if (position > this.length) {
      throw new Error('Position can\'t be higher than length.');
    } else if (position < 0) {
      throw new Error('Position can\'t be negative.');
    }
    if (position === 0) {
      this.head = this.head.next();
    } else {
      let auxNode = this.head;
      for (let i=1; i < position - 1; i++) {
        auxNode = auxNode.next;
      }
      auxNode.next = auxNode.next.next;
    }
    this.length--;
  }

  deleteAll() {
    this.head = null;
    this.length = 0;
  }
}

module.exports = LinkedList;
