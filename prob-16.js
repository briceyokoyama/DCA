// Good morning! Here's your coding interview problem for today.

// This problem was asked by Twitter.

// You run an e-commerce website and want to record the last N order ids in a log. Implement a data structure to accomplish this, with the following API:

// record(order_id): adds the order_id to the log
// get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.
// You should be as efficient with time and space as possible.

class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class Log {
  constructor(size) {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.maxSize = size
  }

  record(orderId) {
    const newNode = new Node(orderId);

    if (!this.head) {
      this.head = newNode;
      this.last = newNode;
      this.size++;
      return;
    }

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;

    if (this.size === this.maxSize) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      return;
    }
    this.count++;
  }

  getLast(position = 1) {
    let node = this.head;

    for(let i = 1; i < position; i++) {
      node = node.next;
    }
    return node.val;
  }
}

const log = new Log(3);

log.record(1)
log.record(2)
log.record(3)
console.log(log.getLast(3))
console.log(log.getLast(2))
console.log(log.getLast(1))
log.record(10)
log.record(14)
log.record(6)
console.log(log.getLast(3))
console.log(log.getLast(2))
console.log(log.getLast(1))
