// Good morning! Here's your coding interview problem for today.

// This problem was asked by Twitter.

// Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.

// For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

// Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.

class Node {
  constructor(val) {
    this.children = {};
    this.terminal = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insertRecur(word, root = this.root) {
    if (word.length === 0) {
      root.isTerminal = true;
      return;
    }

    if (!(word[0] in root.children)) root.children[word[0]] = new Node();

    this.insertRecur(word.slice(1), root.children[word[0]]);
  }

  insertIter(word) {
    let currNode = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!(word[i] in currNode.children)) currNode.children[word[i]] = new Node();

      currNode = children[word[i]];
    }
    currNode.isTerminal = true;
  }

  searchRecur(word, root = this.root) {
    if (word.length == 0) {
      if (root.isTerminal) {
        return true;
      } else {
        return false;
      }
    }

    if (!(word[0] in root.children)) return false;

    return this.searchRecur(word.slice(1), root.children[word[0]]);
  }

  searchIter(word) {
    let currNode = this.root;
    for (let i = 0 ; i < word.length; i++) {
      if (!word[i] in currNode.children) return false;

      currNode = currNode.children[word[i]]
    }
    if (currNode.isTerminal) {
      return true;
    } else {
      return false;
    }
  }

  wordsWithPrefix(prefix, root = this.root) {
    let currNode = root;
    let words = [];
    let addWords = [];

    for (let i = 0; i < prefix.length; i++) {
          if (!(prefix[i] in currNode.children)) return [];
          currNode = currNode.children[prefix[i]];
    }
    if (currNode.isTerminal) addWords.push(prefix.slice(0));

    for (let key in currNode.children) {
      words.push(...this.wordsWithPrefix(key, currNode));
    }

    for (let i = 0; i < words.length; i++) {
      words[i] = "" + prefix + words[i];
    }
    return [...words, ...addWords];
  }
}

const dictionary = ["dog", "deer", "deal", "dealer", "dig", "dangerous", "dagger", "done"];
const trie = new Trie();

dictionary.forEach(word => {
  trie.insertRecur(word);
})

console.log(trie.wordsWithPrefix("de"))
console.log(trie.wordsWithPrefix("da"))
console.log(trie.wordsWithPrefix("do"))