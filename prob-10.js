// Good morning! Here's your coding interview problem for today.

// This problem was asked by Apple.

// Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.


function prob10(f, n) {
  setTimeout(f, n);
}

function test () {
  console.log("Hello!")
}

prob10(test, 1000);