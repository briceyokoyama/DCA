// Good morning! Here's your coding interview problem for today.

// This problem was asked by Google.

// Implement locking in a binary tree. A binary tree node can be locked or unlocked only if all of its descendants or ancestors are not locked.

// Design a binary tree node class with the following methods:

// is_locked, which returns whether the node is locked
// lock, which attempts to lock the node. If it cannot be locked, then it should return false. Otherwise, it should lock it and return true.
// unlock, which unlocks the node. If it cannot be unlocked, then it should return false. Otherwise, it should unlock it and return true.
// You may augment the node to add parent pointers or any other property you would like. You may assume the class is used in a single-threaded program, so there is no need for actual locks or mutexes. Each method should run in O(h), where h is the height of the tree.

class Node {
  constructor() {
    this.locked = false;
    this.parent = null;
    this.left = null;
    this.right = null;
  }

  is_locked() {
    return this.locked;
  }

  lock() {
    if (this.is_locked()) return false;
    let lockable = true;
    let curr = this.parent;

    while(curr) {
      if (curr.is_locked()) {
        lockable = false;
        break;
      }
      curr = curr.parent;
    }

    if (lockable) {
      this.locked = true;
      return true;
    }

    const queue = [this];

    while (queue.length > 0) {
      curr = queue.shift();
      if (curr.is_locked()) {
        return false;
      }
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }

    this.locked = true;
    return true;
  }

  unlock() {
    if (!this.is_locked()) return false;
    let lockable = true;
    let curr = this.parent;

    while(curr) {
      if (curr.is_locked()) {
        lockable = false;
        break;
      }
      curr = curr.parent;
    }

    if (lockable) {
      this.locked = false;
      return true;
    }

    const queue = [this];

    while (queue.length > 0) {
      curr = queue.shift();
      if (curr.is_locked() && curr !== this) {
        return false;
      }
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }

    this.locked = false;
    return true;
  }

}

let a = new Node();
let b = new Node();
let c = new Node();
let d = new Node();

a.left = b;
b.parent = a;
a.right = c;
c.parent = a
c.right = d;
d.parent = c;

console.log(a.lock())
// console.log(a)
console.log(d.lock());
// console.log(d);
console.log(c.lock());
// console.log(c);
console.log(d.unlock())
// console.log(d)
console.log(c.lock())
console.log(c)