// Good morning! Here's your coding interview problem for today.

// This problem was recently asked by Google.

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?

function prob1(array, k) {
  const numHash = {};

  for(let i = 0; i < array.length; i++) {
    let diff = k - array[i];
    if (diff in numHash) return true;
    numHash[array[i]] = true;
  }

  return false;
}

console.log(prob1([10,15,3,7], 17))
console.log(prob1([10,15,3,7], 9))