// Good morning! Here's your coding interview problem for today.

// This problem was asked by Amazon.

// Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.

// For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".

function prob13(string, k) {

  let longestString = "";
  let count = 0;
  const chars = {};
  let start = 0;
  let end = 0;

  while (end <= string.length) {
    let endChar = string[end];

    if (chars[endChar] !== undefined) {
      chars[endChar]++;
    } else {
      chars[endChar] = 1;
      count++;
    }

    while(count > k) {
      let startChar = string[start];
      if (end - start > longestString.length) {
        longestString = string.slice(start, end);
      }

      chars[startChar]--;
      if (chars[startChar] === 0) {
        count--;
        delete chars[startChar];
      }
      start++;
    }
    end++;
  }


  return longestString;
}

console.log(prob13("abcba", 2))
console.log(prob13("aaaaaaaaapb", 2))
console.log(prob13("abcbadefgggfg", 2))