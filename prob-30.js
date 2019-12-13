// Good morning! Here's your coding interview problem for today.

// This problem was asked by Facebook.

// You are given an array of non-negative integers that represents a two-dimensional elevation map where each element is unit-width wall and the integer is the height. Suppose it will rain and all spots between two walls get filled up.

// Compute how many units of water remain trapped on the map in O(N) time and O(1) space.

// For example, given the input [2, 1, 2], we can hold 1 unit of water in the middle.

// Given the input [3, 0, 1, 3, 0, 5], we can hold 3 units in the first index, 2 in the second, and 3 in the fourth index (we cannot hold 5 since it would run off to the left), so we can trap 8 units of water.

function prob30(array) {
  let prevIndex = 0;
  let tallest = 0;
  let water = 0;
  let prevWater = 0;

  for (let i = 0; i < array.length; i++) {
    let currentHeight = array[i];
    water += Math.max(tallest - currentHeight, 0);

    if (currentHeight >= tallest) {
      prevIndex = i;
      prevWater += water;
      water = 0;
      tallest = currentHeight;
    }
  }

  water = 0;
  tallest = 0;

  for (let i = array.length - 1; i >= prevIndex; i--) {
    let currentHeight = array[i];
    water += Math.max(tallest - currentHeight, 0);

    if (currentHeight >= tallest) {
      tallest = currentHeight;
    }
  }

  return water + prevWater;

}

// const water = [3, 0, 1, 3, 0, 5];
const water = [2, 0, 1, 0, 3, 0, 2, 0, 1];

console.log(prob30(water))