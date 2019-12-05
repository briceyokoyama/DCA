// Good morning! Here's your coding interview problem for today.

// This problem was asked by Microsoft.

// Given a dictionary of words and a string made up of those words (no spaces), return the original sentence in a list. If there is more than one possible reconstruction, return any of them. If there is no possible reconstruction, then return null.

// For example, given the set of words 'quick', 'brown', 'the', 'fox', and the string "thequickbrownfox", you should return ['the', 'quick', 'brown', 'fox'].

// Given the set of words 'bed', 'bath', 'bedbath', 'and', 'beyond', and the string "bedbathandbeyond", return either ['bed', 'bath', 'and', 'beyond] or ['bedbath', 'and', 'beyond'].

function prob22(dictionary, string) {

  let i = 0;
  let j = 1;
  const words = [];

  while(j <= string.length) {
    if(dictionary.has(string.slice(i, j))) {
      words.push(string.slice(i, j))
      i = j;
    }
    j++;
  }

  return words.length > 0 ? words : null;

}

// const dictionary = new Set();
// dictionary.add('quick');
// dictionary.add('brown');
// dictionary.add('the');
// dictionary.add('fox');
// const string = 'thequickbrownfox';

const dictionary = new Set();
dictionary.add('bed');
dictionary.add('bath');
dictionary.add('bedbath');
dictionary.add('and');
dictionary.add('beyond');
const string = 'bedbathandbeyond';

console.log(prob22(dictionary, string))