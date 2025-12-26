// Global scope
function myFnc() {
  // function scope

  function myFnc1() {
    // myFnc1 function scope
  }

  if (expression) {
    // if scope
  }
}

function simpleFnc() {
  let number = 10;
  console.log(number);
}

// global scope
let str = "Somestring";
function simpleFnc1() {
  let str = "Some other string";
  console.log(str);
}

// simpleFnc1();
// console.log(str);

let globalVar = 500;
function simpleFnc2() {
  globalVar = 600;
  console.log(globalVar);
}

simpleFnc2();
console.log(globalVar);

let num = 5;
let isEven = false;

if (num % 2 === 0) {
  let isEven = true;
} else {
  isEven = false;
}

function simpleFnc3() {
  a = 50;
}

simpleFnc3();
console.log(a);

//How to get the date and time
// let date = new Date();
// date.getFullYear();

function calucalteAge(birthYear, currentYear = new Date().getFullYear()) {
  return currentYear - birthYear;
}

console.log(calucalteAge(2000, 2011));
console.log(calucalteAge(2006));
