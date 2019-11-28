// Good morning! Here's your coding interview problem for today.

// This problem was asked by Google.

// The area of a circle is defined as πr^2. Estimate π to 3 decimal places using a Monte Carlo method.

// Hint: The basic equation of a circle is x2 + y2 = r2.

function prob14() {

   let numTests = 1000000
   let totalPoints = 0;
   const radius = 1;

  for (let i = 0; i < numTests; i++) {
    let random_x = Math.random() * radius;
    let random_y = Math.random() * radius;

    if (Math.pow(random_x, 2) +  Math.pow(random_y, 2) < Math.pow(radius, 2)) {
      totalPoints++;
    }
  }

  let estimate = 4 * totalPoints / numTests;

  return estimate
}

console.log(prob14());