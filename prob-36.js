// Given the root to a binary search tree, find the second largest node in the tree.

function prob36(root) {

  if (!root) return null;

  let lead = root;
  let trail = null;

  while(lead.right) {
    trail = lead;
    lead = lead.right;
  }

  if (!trail) return lead.left;

  if (lead.left && lead.left.val > trail.val) {
    trail = lead.left;
  }

  return trail;

}

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let a = new Node(1)
let b = new Node(2)
let c = new Node(3)
let d = new Node(4)
let e = new Node(5)
let f = new Node(6)
let g = new Node(7)
let h = new Node(8)
let i = new Node(9)
let j = new Node(10)


e.left = c;
e.right = h;
c.left = a;
c.right = d;
a.right = b;
h.left = f;
h.right = j;
f.right = g;
// j.left = i;

console.log(prob36(e))