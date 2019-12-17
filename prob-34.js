// Good morning! Here's your coding interview problem for today.

// This problem was asked by Quora.

// Given a string, find the palindrome that can be made by inserting the fewest number of characters as possible anywhere in the word. If there is more than one palindrome of minimum length that can be made, return the lexicographically earliest one (the first one alphabetically).

// For example, given the string "race", you should return "ecarace", since we can add three letters to it (which is the smallest amount to make a palindrome). There are seven other palindromes that can be made from "race" by adding three letters, but "ecarace" comes first alphabetically.

// As another example, given the string "google", you should return "elgoogle".

function prob34(string) {
  if (string.length <= 1) return string;

  if (string[0] === string[string.length -1 ]) {
    return string[0] + prob34(string.slice(1, string.length - 1)) + string[string.length - 1];
  }

  const removeFront = string[0] + prob34(string.slice(1)) + string[0];
  const removeBack = string[string.length - 1] + prob34(string.slice(0, string.length - 1)) + string[string.length - 1];

  if (removeFront.length < removeBack.length) {
    return removeFront;
  } else if (removeFront.length > removeBack.length) {
    return removeBack;
  }

  return removeFront < removeBack ? removeFront : removeBack;

}

console.log(prob34("abcd"));
console.log(prob34("racear"));
console.log(prob34("race"));
console.log(prob34("egoogle"));
console.log(prob34("aabbaaacde"));
console.log(prob34("google"));