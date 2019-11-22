// Good morning! Here's your coding interview problem for today.

// This problem was asked by Google.

// A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

// Given the root to a binary tree, count the number of unival subtrees.

// For example, the following tree has 5 unival subtrees:

//    0
//   / \
//  1   0
//     / \
//    1   0
//   / \
//  1   1

function prob8(root) {
  let [counter, _] = helper(root);
  return counter;
}

function helper(root) {
  if (!root) return [0, true];

  let [left_count, left_unival] = helper(root.left)
  let [right_count, right_unival] = helper(root.right)
  let total_count = left_count + right_count

  if (left_unival && right_unival) {
    if (root.left && root.val !== root.left.val) return [total_count, false]
    if (root.right && root.val !== root.right.val) return [total_count, false]
    return [total_count + 1, true]
  } else {
    return [total_count, false]
  }
}

class node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let a = new node('a')
let b = new node('a')
let c = new node('b')
let d = new node('a')

a.left = b;
a.right = c;
b.left = d;

console.log(prob8(a))