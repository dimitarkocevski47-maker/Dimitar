function sum(num, num1) {
  return num + num1;
}

function subtract(num, num1) {
  return num - num1;
}

function multiply(num, num1) {
  return num * num1;
}

function divide(num, num1) {
  if (num === 0 || num1 === 0) {
    throw Error("Error: Division by zero");
  }
  return num / num1;
}
