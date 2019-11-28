
// Good morning! Here's your coding interview problem for today.

// This problem was asked by Facebook.

// Given a stream of elements too large to store in memory, pick a random element from the stream with uniform probability.

function prob15(stream) {

  let result;
  let count = 0;

  count++;

  for (let i = 0; i < stream.length; i++) {
    if (Math.random() < 1/ count) {
      result = stream[i];
    }
    count++;
  }

  return result;
}


console.log(prob15([1]))
console.log(prob15([1, 2]))
console.log(prob15([1, 2, 3]))
console.log(prob15([1, 2, 3, 4]))