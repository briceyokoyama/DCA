// Good morning! Here's your coding interview problem for today.

// This problem was asked by Airbnb.

// Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

// For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

// Follow-up: Can you do this in O(N) time and constant space?

function prob9(array) {

  let max = 0;
  let prevMax = 0;

  for(let i = 0; i < array.length; i++) {
    let curr = array[i];
    let currMax = Math.max(max, prevMax + curr);
    prevMax = max;
    max = currMax;
  }
  return max;
}

console.log(prob9([1, 3, 1, 7, 11]))