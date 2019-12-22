// Good morning! Here's your coding interview problem for today.

// This problem was asked by Google.

// The power set of a set is the set of all its subsets. Write a function that, given a set, generates its power set.

// For example, given the set {1, 2, 3}, it should return {{}, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}}.

// You may also use a list or array to represent a set.

function prob37(values) {

  const powerSet = [[]]

  values.forEach(value => {
    let addedSet = []
    powerSet.forEach(set => {
      let currSet = set.slice();
      currSet.push(value);
      addedSet.push(currSet);
    })
    powerSet.push(...addedSet);
  })

  return powerSet;
}

console.log(prob37([1, 2, 3]))