// 1. Write a function that:
//   - Console.logs 'Hello World'

function greeting() {
  console.log('Hello World');
}
greeting();


// 2. Write a function with 1 parameter that:
//  - Console.logs whatever you want it to say.
//  - This would be a good time to use string interpolation!

function hi(phrase) {
  console.log(`hi ${phrase}`);
}
hi('brisk');

// 3. Write a function with 1 parameter that:
//  - Prints a random number between 1 and whatever number is for the provided argument. 
//  - You might need to search how to generate a random number.
//  - You might need to search how to round a number up.

function number(num) {
  console.log(Math.ceil(Math.random() * num));
}

number(682);

// 4. Write a function with 3 parameters that:
//  - Takes the product of the first two parameters and raises them to the power of the third parameter.
//  - Returns the solution.
//  - Example: Passing this function 1, 2, 3 should give you back the answer to (1 * 2)^3, which is 8. 
//  - You may need to search how to raise the power of a number!

function mathematics(num1, num2, num3) {
  return Math.pow(num1 * num2, num3);
}

console.log(mathematics(3, 3, 3));

// 5. Write a function with 1 parameter that:
//  - Converts Celsius to Fahrenheit.
//  - The formula to convert Celsius to Fahrenhiet: F = (C * 1.8) + 32

function moreMath(num) {
  return (num * 1.8) + 32;
}
console.log(moreMath(32));

// 6. Write a function with 1 parameter that:
//  - Takes a word and consoles the letters in alphabetical order.
//  - You'll need to break the word apart, sort the letters, and bring them back together for this!

function abcs(word) {
  let letters = word.split('');
  letters.sort();
  console.log(letters.join(''));
}
abcs('whywereyougivingmenativecodebefore');


// BONUS FUNCTIONS!
// 7. Write a function that:
//  - Reverses a number.

// 8. Write a function that:
//  - If the number is even, prints “This number is EVEN!”
//  - If the number is odd, prints “This number is ODD!”

// 9. Write a function that:
//  - Prints every number between 1 and 100.
//  - This requires a loop - you may need to look this up!

// 10. Write a function that:
//  -  Prints every EVEN number between 1 and 100.
//  - This requires a loop - you may need to look this up!

