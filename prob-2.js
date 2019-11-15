// Good morning! Here's your coding interview problem for today.

// This problem was asked by Uber.

// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// Follow-up: what if you can't use division?

function prob2(array) {
  let result = new Array(array.length).fill(1);
  let temp = array[0];

  for (let i = 1; i < array.length; i++) {
    result[i] = temp;
    temp *= array[i];
  }

  temp = array[array.length - 1];

  for (let i = array.length - 2; i >= 0; i--) {
    result[i] = result[i] * temp;
    temp *= array[i];
  }

  return result;
}

console.log(prob2([5, 2, 3, 1, 4]))