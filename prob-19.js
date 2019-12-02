// Good morning! Here's your coding interview problem for today.

// This problem was asked by Facebook.

// A builder is looking to build a row of N houses that can be of K different colors. He has a goal of minimizing cost while ensuring that no two neighboring houses are of the same color.

// Given an N by K matrix where the nth row and kth column represents the cost to build the nth house with kth color, return the minimum cost which achieves this goal.

function prob19(n, k, costMatrix) {
  let minCost = Infinity
  for (let i = 0; i < k; i++) {
    let prevIndex = i;
    let totalCost = costMatrix[0][i];
  
    for (let j = 1; j < n; j++) {
      let currentLine = costMatrix[j]
      let possible = currentLine.slice(0, prevIndex).concat(currentLine.slice(prevIndex + 1))
      let currMin = Infinity
      let currIndex
  
      possible.forEach((ele, idx) => {
        if (ele < currMin) {
          currIndex = idx
          currMin = ele
        }
      })
      
      if (currIndex < prevIndex) {
        prevIndex = currIndex
      } else {
        prevIndex = currIndex + 1
      }
      totalCost += currMin
    }
    if (totalCost < minCost) {
      minCost = totalCost
    }
  }

  return minCost
}

costMatrix = [
  [6, 2, 5],
  [8, 3, 5],
  [4, 5, 2],
  [3, 4, 4],
  [8, 8, 4]
]

console.log(prob19(5, 3, costMatrix))