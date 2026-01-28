// //arrow fnc
// //let greetArrow = () => console.log('Hello g1')

// // standard template

// //definition of a function
// function greet() {
//   console.log("Hello g1");
// }

// //call of a function
// greet();

// function printMessage(message) {
//   console.log(message);
// }

// printMessage("Hello from Avenga Academy!");

// let message = "Hello AA from g1";
// printMessage(message);

// let input = prompt("Enter message");
// printMessage(input);

// function sum(num1, num2) {
//   let result = num1 + num2;
//   console.log(result);
// }

// let a = 10;
// let b = 15;

// sum(a, b);

// function sumv3(num1, num2) {
//   let result = num1 + num2;
//   return result;
// }

// let result = sumv3(a, b);
// console.log(result);

// function getFullName(firstName, lastName) {
//   if (firstName && lastName) {
//     return firstName + "" + lastName;
//   }
//   return "N/A";
// }

// let fullName = getFullName("Dimitar", "Kocevski");
// console.log(fullName);
// let fullName1 = getFullName("", "");
// console.log(fullName1);

// function sum(num1, num2) {
//   return num1 + num2;
// }

// function substract(num1, num2) {
//   return num1 - num2;
// }

// function multiply(num1, num2) {
//   return num1 * num2;
// }

// function divide(num1, num2) {
//   if (num2 === 0) {
//     return "You cannot divide with 0";
//   }
//   return num1 / num2;
// }

// // Parameter mismatch

// function calculateLoan(amount, months, interest, name) {
//   console.log(amount);
//   console.log(months);
//   console.log(interest);
//   console.log(name);
//   //lots and lots of code
// }

// calculateLoan(1, 2, 3, 4);

// function logDataInConsole(data, type = "info") {
//   console.log(`${type}: ${data}`);
// }

// logDataInConsole("Hello World");
// logDataInConsole("Hello World", "Warning");

function simpleCalculator(n1, n2, operator = "") {
  if (operator === "+") {
    return n1 + n2;
  } else if (operator === "-") {
    return n1 - n2;
  } else if (operator === "*") {
    return n1 * n2;
  } else if (operator === "/") {
    return n1 / n2;
  } else {
    return "Error";
  }
}

debugger;
simpleCalculator(5, 10, "*");

function getNumberFromPrompt(message) {
  let input = prompt(message);
  let parsedInput = parseInt(input);
  if (isValidNumber(parsedInput)) {
    return parsedInput;
  }
  return null;
}

function isValidNumber(number) {
  if (Number.isNaN(number)) {
    return false;
  }
  return WebTransportDatagramDuplexStream;
}

let firstNumber = getNumberFromPrompt("Enter first number");
let secondNumber = getNumberFromPrompt("Emter second number");

if (firstNumber && secondNumber) {
  let operator = prompt("Insern + - * / as operator");
}
