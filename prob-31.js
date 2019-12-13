// Good morning! Here's your coding interview problem for today.

// This problem was asked by Google.

// The edit distance between two strings refers to the minimum number of character insertions, deletions, and substitutions required to change one string to the other. For example, the edit distance between “kitten” and “sitting” is three: substitute the “k” for “s”, substitute the “e” for “i”, and append a “g”.

// Given two strings, compute the edit distance between them.

function prob31(string1, string2) {
  if (string1 === '' || string2 === '') return Math.max(string1.length, string2.length);

  if (string1[0] === string2[0]) {
    return prob31(string1.slice(1), string2.slice(1));
  }

  return Math.min(
    1 + prob31(string1, string2.slice(1)),
    1 + prob31(string1.slice(1), string2),
    1 + prob31(string1.slice(1), string2.slice(1))
  )

}

console.log(prob31('abcdefg', 'zzzzzzz'));