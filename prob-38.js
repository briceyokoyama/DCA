//  Good morning! Here's your coding interview problem for today.
 
//  This problem was asked by Microsoft.
 
//  You have an N by N board. Write a function that, given N, returns the number of possible arrangements of the board where N queens can be placed on the board without threatening each other, i.e. no two queens share the same row, column, or diagonal.

function prob38(n) {
  const stack = [];
  let results = 0;

  for (let i = 0; i < n; i++) {
    stack.push([i]);
  }

  while(stack.length > 0) {
    let current = stack.pop();

    if (current.length === n) {
      results++;
      continue;
    }

    for(let i = 0; i < n; i++) {
      let check = current.slice();
      check.push(i);
      if(!conflicts(check)) stack.push(check);
    }
  }
  return results;
}

function conflicts(queens) {
  for (let i = 0; i < queens.length - 1; i++) {
    let currQueen = queens[i];

    for (let j = i + 1; j < queens.length; j++) {
      if (currQueen === queens[j] || currQueen === queens[j] + (j - i) || currQueen === queens[j] - (j - i)) return true
    }
  }
  return false;
}

console.log(prob38(3))
console.log(prob38(4))