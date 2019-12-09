// Good morning! Here's your coding interview problem for today.

// This problem was asked by Google.

// Given a singly linked list and an integer k, remove the kth last element from the list. k is guaranteed to be smaller than the length of the list.

// The list is very long, so making more than one pass is prohibitively expensive.

// Do this in constant space and in one pass.

function prob26(root, k) {
  let lead = root;
  let trail = root;

  for(let i = 0; i < k; i++) {
    lead = lead.next;
  }

  while(lead.next) {
    lead = lead.next;
    trail = trail.next;
  }

  trail.next = trail.next.next;

  return trail;
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);
let e = new Node(5);
let f = new Node(6);
let g = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

console.log(prob26(a, 6));
