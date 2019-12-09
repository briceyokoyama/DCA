
// Good morning! Here's your coding interview problem for today.

// This problem was asked by Facebook.

// Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced (well-formed).

// For example, given the string "([])[]({})", you should return true.

// Given the string "([)]" or "((()", you should return false.

function prob27(string) {

  const openingBrackets = {
    '(': ')',
    '[': ']',
    '{': '}',
  }

  const closingBrackets = {
    ')': '(',
    ']': '[',
    '}': '{',
  }

  const stack = []

  for(let i = 0; i < string.length; i++) {
    if (string[i] in openingBrackets) {
      stack.push(string[i]);
    } else if (string[i] in closingBrackets) {
      if (closingBrackets[string[i] !== stack.pop()]) {
        return false;
      }
    }
  }

  if (stack.length > 0) return false;

  return true;

}


console.log(prob27('([([()])])'))