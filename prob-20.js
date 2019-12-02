// Good morning! Here's your coding interview problem for today.

// This problem was asked by Google.

// Given two singly linked lists that intersect at some point, find the intersecting node. The lists are non-cyclical.

// For example, given A = 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, return the node with value 8.

// In this example, assume nodes with the same value are the exact same node objects.

// Do this in O(M + N) time (where M and N are the lengths of the lists) and constant space.

function prob20(head1, head2) {
  let curr1 = head1;
  let curr2 = head2;
  let count1 = 0;
  let count2 = 0;

  while (curr1.next) {
    curr1 = curr1.next;
    count1++;
  }

  while (curr2.next) {
    curr2 = curr2.next;
    count2++;
  }

  if (curr1 !== curr2) return null;

  curr1 = head1;
  curr2 = head2;

  while (count1 > count2) {
    curr1 = curr1.next;
    count1--;
  }

  while (count2 > count1) {
    curr2 = curr2.next;
    count2--;
  }

  while (curr1 !== curr2) {
    curr1 = curr1.next;
    curr2 = curr2.next;
  }

  return curr1;

}

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

const a = new Node(1)
const b = new Node(2)
const c = new Node(3)
const d = new Node(4)
const e = new Node(5)
const f = new Node(6)
const g = new Node(7)

a.next = b
b.next = c
c.next = d
e.next = f
f.next = g
g.next = b

console.log(prob20(a, e))