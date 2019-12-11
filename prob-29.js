// Good morning! Here's your coding interview problem for today.

// This problem was asked by Amazon.

// Run-length encoding is a fast and simple method of encoding strings. The basic idea is to represent repeated successive characters as a single count and character. For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".

// Implement run-length encoding and decoding. You can assume the string to be encoded have no digits and consists solely of alphabetic characters. You can assume the string to be decoded is valid.

function prob29Encode(string) {

  let count = 1;
  let prevLetter = string[0];
  let result = '';

  for(let i = 1; i <= string.length; i++) {
    if(string[i] === prevLetter) {
      count++;
    } else {
      result += count + prevLetter;
      prevLetter = string[i]
      count = 1;
    }
  }

  return result;
}

console.log(prob29Encode("AAAABBBCCDAA"))

function prob29Decode(string) {
  let result = '';

  for (let i = 0; i < string.length; i += 2) {
    result += string[i+1].repeat(string[i]);
  }
  return result;
}

console.log(prob29Decode(prob29Encode("AAAABBBCCDAA")))