
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

const stream = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const counter = new Array(stream.length).fill(0)

for( let i = 0; i < 1000; i++) {
  let result = prob15(stream)
  counter[result] += 1
}
console.log(counter)