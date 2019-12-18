// Good morning! Here's your coding interview problem for today.

// This problem was asked by Google.

// Given an array of strictly the characters 'R', 'G', and 'B', segregate the values of the array so that all the Rs come first, the Gs come second, and the Bs come last. You can only swap elements of the array.

// Do this in linear time and in-place.

// For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], it should become ['R', 'R', 'R', 'G', 'G', 'B', 'B'].

function prob35(array) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < array.length) {

    if (array[i] === 'R') {
      [array[i], array[j]] = [array[j], array[i]];
      j++;
      k++;
    }
    i++;
  }

  while(j < array.length) {
    if (array[j] === 'G') {
      [array[j], array[k]] = [array[k], array[j]];
      k++;
    }
    j++;
  }

  return array;

}

const array = ['G', 'B', 'R', 'R', 'B', 'R', 'G'];
console.log(prob35(array));