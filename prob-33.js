// Good morning! Here's your coding interview problem for today.

// This problem was asked by Microsoft.

// Compute the running median of a sequence of numbers. That is, given a stream of numbers, print out the median of the list so far on each new element.

// Recall that the median of an even-numbered list is the average of the two middle numbers.

// For example, given the sequence [2, 1, 5, 7, 2, 0, 5], your algorithm should print out:

// 2
// 1.5
// 2
// 3.5
// 2
// 2
// 2

class MinHeap {
  constructor() {
    this.array = [null];
  }

  getParent(idx) {
    return Math.floor(idx/2);
  }

  getLeftChild(idx) {
    return idx*2;
  }

  getRightChild(idx) {
    return idx*2 + 1;
  }

  siftUp(idx) {
    if (idx === 1) return;

    let parentIdx = this.getParent(idx);

    if (this.array[idx] < this.array[parentIdx]) {
      [this.array[idx], this.array[parentIdx]] = [this.array[parentIdx], this.array[idx]];

      this.siftUp(parentIdx);
    }
  }

  insert(val) {
    this.array.push(val);

    this.siftUp(this.array.length - 1);
  }

  siftDown(idx) {
    let leftIdx = this.getLeftChild(idx);
    let rightIdx = this.getRightChild(idx);
    let left = this.array[leftIdx];
    let right = this.array[rightIdx];

    if (left === undefined) left = Infinity;
    if (right === undefined) right = Infinity;

    if (this.array[idx] < left && this.array[idx] < right) return;

    if (left > right) {
      var swapIdx = rightIdx;
    } else {
      var swapIdx = leftIdx;
    }

    [this.array[idx], this.array[swapIdx]] = [this.array[swapIdx], this.array[idx]];

    this.siftDown(swapIdx);
  }

  deleteMax() {
    if (this.array.length === 1) return null;
    if (this.array.length === 2) return this.array.pop();

    let temp = this.array[1];

    this.array[1] = this.array.pop();

    this.siftDown(1);

    return temp;
  }

  peek() {
    return this.array[1]
  }

  size() {
    return this.array.length
  }
}

class MaxHeap {
  constructor() {
    this.array = [null];
  }

  getParent(idx) {
    return Math.floor(idx/2);
  }

  getLeftChild(idx) {
    return idx*2;
  }

  getRightChild(idx) {
    return idx*2 + 1;
  }

  siftUp(idx) {
    if (idx === 1) return;

    let parentIdx = this.getParent(idx);

    if (this.array[idx] > this.array[parentIdx]) {
      [this.array[idx], this.array[parentIdx]] = [this.array[parentIdx], this.array[idx]];

      this.siftUp(parentIdx);
    }
  }

  insert(val) {
    this.array.push(val);

    this.siftUp(this.array.length - 1);
  }

  siftDown(idx) {
    let leftIdx = this.getLeftChild(idx);
    let rightIdx = this.getRightChild(idx);
    let left = this.array[leftIdx];
    let right = this.array[rightIdx];

    if (left === undefined) left = -Infinity;
    if (right === undefined) right = -Infinity;

    if (this.array[idx] > left && this.array[idx] > right) return;

    if (left < right) {
      var swapIdx = rightIdx;
    } else {
      var swapIdx = leftIdx;
    }

    [this.array[idx], this.array[swapIdx]] = [this.array[swapIdx], this.array[idx]];

    this.siftDown(swapIdx);
  }

  deleteMin() {
    if (this.array.length === 1) return null;
    if (this.array.length === 2) return this.array.pop();

    let temp = this.array[1];

    this.array[1] = this.array.pop();

    this.siftDown(1);

    return temp;
  }

  peek() {
    return this.array[1]
  }

  size() {
    return this.array.length
  }
}

function prob33(numbers) {

  const mins = new MaxHeap;
  const maxs = new MinHeap;

  maxs.insert(numbers[0]);
  console.log(numbers[0]);

  for(let i = 1; i < numbers.length; i++) {
    if (numbers[i] >= maxs.peek()) {
      maxs.insert(numbers[i]);
    } else {
      mins.insert(numbers[i]);
    }

    rebalance();

    if((maxs.size() + mins.size()) % 2 === 0) {
      console.log((mins.peek() + maxs.peek()) / 2)
    } else {
      console.log(maxs.peek())
    }
  }

  function rebalance() {
    let unbalanced = false;
    while (!unbalanced) {
      unbalanced = true;
      if (mins.size() > maxs.size()) {
        maxs.insert(mins.deleteMin())
        unbalanced = false;
      } else if (maxs.size() > mins.size() + 1) {
        mins.insert(maxs.deleteMax())
        unbalanced = false;
      }
    }
  }
}


const numbers = [2, 1, 5, 7, 2, 0, 5]

console.log(prob33(numbers));
