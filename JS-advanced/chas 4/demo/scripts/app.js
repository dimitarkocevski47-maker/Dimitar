// Function in JS

function sayHello() {
  console.log("Hello from my function");
}
sayHello();

function sumTwoNum(num1, num2) {
  return num1 + num2;
}
sumTwoNum(5, 10);

// Anonymous function
let diffTwoNum = function (num1, num2) {
  return num2 - num1;
};
diffTwoNum(10, 20);

let multiply = function (num1, num2) {
  return num1 * num2;
};

let divison = function (num1, num2) {
  return num1 / num2;
};

// Arrow functions

let multiplyArrow = (num1, num2) => num1 * num2;
let divisonArrow = (num1, num2) => num1 / num2;
let sumOfThreArrow = (num1, num2, num3) => num1 + num2 + num3;
let diffOfThreeArrow = (num1, num2, num3) => num1 - num2 - num3;
let squareNumberArrow = (num) => num * num;

let convertCurrency = (currencyType, currencyValue) => {
  if (currencyType === "EUR") {
    return currencyValue / 61.5;
  }
  if (currencyType === "MKD") {
    return currencyValue * 61.5;
  }
};

// (2 * 5) + (2 / 5)

let product = multiply(2, 5);
let divisonValue = divison(2, 5);

sumTwoNum(product, divisonValue);
sumTwoNum(multiplyArrow(2, 5), divisonArrow(2, 5));

// Self-invoked functions or IFFEs

(function (num1, num2) {
  console.log(num1 + num2);
})(100, 50);

let array = [1, 2, 3, (num1, num2) => num1 + num2];
console.log(array[3](22, 44));

// Exercise

let countDigits = (num) => {
  return Math.abs(num).toString().length;
};

let evenOrOdd = (num) => {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
};

let positiveOrNegative = (num) => {
  if (num > 0) {
    return "positive";
  } else {
    return "negative";
  }
};

let numberInfo = (num) => {
  console.log(
    `The number ${num} has ${countDigits(num)} digits, it is ${evenOrOdd(num)}, and it is ${positiveOrNegative(num)}`,
  );
};
numberInfo(-124);

function sumTo(number) {
  if (number === 0) {
    return 0;
  }
  return number + sumTo(number - 1);
}

sumTo(20);
