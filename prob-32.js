// Good morning! Here's your coding interview problem for today.

// This problem was asked by Jane Street.

// Suppose you are given a table of currency exchange rates, represented as a 2D array. Determine whether there is a possible arbitrage: that is, whether there is some sequence of trades you can make, starting with some amount A of any currency, so that you can end up with some amount greater than A of that currency.

// There are no transaction costs and you can trade fractional quantities.

function prob32(table) {
  // const results = [...Array(table.length)].map((row) => Array(table.length).fill(Infinity));
  const results = Array(table.length).fill(Infinity)
  const logTable = table.map(row => row.map(item => -Math.log(item)));

  results[0] = 0;

  let z = 0
  while( z < results.length) {
    for(let i = 0; i < results.length; i++) {
      for(let j = 0; j < results.length; j++) {
        if (logTable[i][j] + results[i] < results[j]) {
          results[j] = logTable[i][j] + results[i];
        }
      }
    }
    z++;
  }

  for(let i = 0; i < results.length; i++) {
    for(let j = 0; j < results.length; j++) {
      if (logTable[i][j] + results[i] < results[j]) return true;
    }
  }

  return false;
}


const rates = [
  [1, 0.23, 0.25, 16.43, 18.21, 4.94],
  [4.34, 1, 1.11, 71.40, 79.09, 21.44],
  [3.93, 0.90, 1, 64.52, 71.48, 19.37],
  [0.061, 0.014, 0.015, 1, 1.11, 0.30],
  [0.055, 0.013, 0.014, 0.90, 1, 0.27],
  [0.20, 0.047, 0.052, 3.33, 3.69, 1],
]
console.log(prob32(rates))