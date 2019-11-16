// Good morning! Here's your coding interview problem for today.

// This problem was asked by Google.

// Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

// For example, given the following Node class

// class Node:
//     def __init__(self, val, left=None, right=None):
//         self.val = val
//         self.left = left
//         self.right = right

// The following test should pass:

// node = Node('root', Node('left', Node('left.left')), Node('right'))
// assert deserialize(serialize(node)).left.left.val == 'left.left'

function serialize(root) {
  const values = [];
  const queue = [root];

  while(queue.length > 0) {
    let current = queue.shift();
    if (current === null) {
      values.push('null');
    } else {
      values.push(current.val);
      queue.push(current.left, current.right)
    }
  }

  while (values[values.length - 1] === 'null') values.pop();

  return values.toString();
}

function deserialize(s) {
  const values = s.split(',');

  if (values.length === 0) return null;

  const root = new Node(values.shift());
  const queue = [root];
  
  while(queue.length > 0) {
    let current = queue.shift();

    if (values[0] === 'null' || values.length === 0) {
      values.shift();
      current.left = null;
    } else {
      current.left = new Node(values.shift());
      queue.push(current.left);
    }

    if (values[0] === 'null' || values.length === 0) {
      values.shift();
      current.right = null
    } else {
      current.right = new Node(values.shift());
      queue.push(current.right);
    }
  }
  return root;
}

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const node = new Node('root', new Node('left', new Node('left')), new Node('right', new Node('left', new Node('left'))));

console.log(serialize(node));
console.log(deserialize(serialize(node)));


