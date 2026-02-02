// 1. Generate an array that has all the numbers that are divisible by 3 from 1 to 1000
function divisibleArrayBy3() {
  let arr = [];

  for (let i = 1; i <= 1000; i++) {
    if (i % 3 === 0) {
      arr.push(i);
    }
  }
  console.log(arr);
}
divisibleArrayBy3();

// 1.2Generate an array that has all the even numbers that are divisible by 4 from 1 to 1000
function divisibleArrayBy4() {
  let arr = [];

  for (let i = 1; i <= 1000; i++) {
    if (i % 4 === 0) {
      arr.push(i);
    }
  }
  console.log(arr);
}
divisibleArrayBy4();

// 1.3Generate an array that has all the numbers that end with the digit 1 from 1 to 1000
function arrayEndWith1() {
  let arr = [];

  for (let i = 1; i <= 1000; i++) {
    if (i % 10 === 1) {
      arr.push(i);
    }
  }
  console.log(arr);
}
arrayEndWith1();

let test = [
  true,
  false,
  12,
  13,
  44,
  2345,
  "Bob",
  "Jill",
  false,
  undefined,
  1000,
  null,
  "Jack",
  "",
  "",
  99,
  "Greg",
  undefined,
  NaN,
  1,
  22,
];

// 2.Create a function that cleans an array of any values and leaves only STRINGS
function cleanString(arr) {
  let newArray = [];

  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
console.log(cleanString(test));

//2.1 Create a function that cleans an array of any values and leaves only NUMBERS
function leaveOnlyNum(arr) {
  let newArray = [];

  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] === "number" && !Number.isNaN(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
console.log(leaveOnlyNum(test));

// 2.2 Create a function that cleans undefined, null, NaN, and "" and leaves all other values
function cleanArray(arr) {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] || arr[i] === false) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
console.log(cleanArray(test));
