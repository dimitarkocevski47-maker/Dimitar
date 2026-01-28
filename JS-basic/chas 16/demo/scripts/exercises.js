//Write a JavaScript program to read ten array values, determine the largest value, and print it

// let elements = [];

// let i = 0;
// while (i < 3) {
//   let input = prompt("Vnesi broj");
//   let parsedInput = parseInt(input);
//   elements.push(parsedInput);
//   i += 1;
// }
// console.log(elements);

// let largest = -Infinity;

// let counter = 0;
// while (counter < elements.length) {
//   let element = elements[counter];
//   if (element > largest) {
//     largest = element;
//   }
//   counter += 1;
// }
// console.log(largest);

// Write a JavaScript program to write the sum of squares of the numbers from 101 to 150

// let sum = 0;
// let i = 101;
// while (i <= 150) {
//   sum += Math.pow(i, 2);
//   i += 1;
// }
// console.log(sum);

//Write a JavaScript program that will read in a number and write out its digits

function digitsInNum(number) {
  while (Math.floor(number) / 10 !== 0) {
    let digit = number % 10;
    console.log(digit);
    number = Math.floor(number / 10);
  }
}
digitsInNum(9876);
digitsInNum(2113);
