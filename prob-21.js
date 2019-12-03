// Good morning! Here's your coding interview problem for today.

// This problem was asked by Snapchat.

// Given an array of time intervals (start, end) for classroom lectures (possibly overlapping), find the minimum number of rooms required.

// For example, given [(30, 75), (0, 50), (60, 150)], you should return 2.

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
}

function prob21(times) {
  if (times.length === 0) return 0

  times.sort((a, b) => a[0] - b[0])

  let rooms = 1
  const heap = new MinHeap
  heap.insert(times[0][1])

  for (let i = 1; i < times.length; i++) {
    let nextInterval = times[i]
    if (nextInterval[0] < heap.peek()) {
      rooms++;
    } else {
      heap.deleteMax()
    }
    heap.insert(nextInterval[1])
  }
  return rooms
}

const times = [
  [30, 75],
  [0, 50],
  [49, 150],
  [0, 75]
]
console.log(prob21(times))

