// Good morning! Here's your coding interview problem for today.

// This problem was asked by Palantir.

// Write an algorithm to justify text. Given a sequence of words and an integer line length k, return a list of strings which represents each line, fully justified.

// More specifically, you should have as many words as possible in each line. There should be at least one space between each word. Pad extra spaces when necessary so that each line has exactly length k. Spaces should be distributed as equally as possible, with the extra spaces, if any, distributed starting from the left.

// If you can only fit one word on a line, then you should pad the right-hand side with spaces.

// Each word is guaranteed not to be longer than k.

// For example, given the list of words ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"] and k = 16, you should return the following:

// ["the  quick brown", # 1 extra space on the left
// "fox  jumps  over", # 2 extra spaces distributed evenly
// "the   lazy   dog"] # 4 extra spaces distributed evenly

function prob28(words, k) {

  let count = 0;
  let results = []
  let currArray = [];

  for (let i = 0; i < words.length; i++) {
    if (count + words[i].length > k) {
      buildSentence();
    }
    currArray.push(words[i]);
    count += words[i].length;
    currArray.push(" ");
    count += 1;
  }

  buildSentence();

  return results;

  function buildSentence() {
    currArray.pop();
    let difference = k - count + 1;
    let j = 0;
    while (difference > 0) {
      if (j % 2 === 1) {
        currArray[j % currArray.length] = currArray[j % currArray.length] + ' ';
        difference--;
      }
      j++;
    }
    results.push(currArray.join(""));
    currArray = [];
    count = 0;
  }
}


console.log(prob28(["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"], 16));
