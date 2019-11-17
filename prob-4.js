// Good morning! Here's your coding interview problem for today.

// This problem was asked by Stripe.

// Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

// You can modify the input array in-place.

function prob4(array) {
  const numHash = {};
  let max = 0;

  array.forEach(num => {
    numHash[num] ? numHash[num]++ : numHash[num] = 1;
    max = Math.max(max, num);
  })

  if (max <= 0) {
    return 1;
  }

  for (let i = 1; i <= max; i++) {
    if (!numHash[i]) return i;
  }
  return max + 1;
}

console.log(prob4([1,2,0]))
console.log(prob4([3, 4, -1, 1]))