// let input = prompt("Please enter a number");
// console.log(input);
// console.log(typeof input);

// let parsedInput = parseInt(input);
// console.log(parsedInput);
// console.log(typeof parsedInput);

// if (!Number.isNaN(parsedInput)) {
//   if (parsedInput % 2 === 0) {
//     console.log("The number is even");
//   } else {
//     console.log("The number is odd");
//   }
// } else {
//   console.log("Please enter a valid number");
// }

// if (Number.isNaN(parsedInput)) {
//     if (parsedInput % 2 === 0) {
//     console.log("The number is even");
//   } else {
//     console.log("The number is odd");
//   }
// } else {
//   console.log("Please enter a valid number");
// }

// exercise
let userAnswer = prompt("How much money do you have?");

let userMoney = parseInt(userAnswer);

if (userAnswer && !Number.isNaN(userMoney)) {
  if (userMoney >= 100) {
    console.log("You can buy phone");
  } else if (userMoney >= 80) {
    console.log("You can buy shoes");
  } else if (userMoney >= 40) {
    console.log("You can buy cap");
  } else {
    console.log("You cant buy anything");
  }
} else {
  console.log();
}
