let arr = [];
//sonsole.log(typeoff arr);

let daysOfWeek1 = [
  "Monday",
  "Tuesday",
  "Wedensday",
  "Thrusday",
  "Friday",
  "Saturday",
  "Sunday",
];

// let mixedArr = [null, undefined, true, false, 'Dimitar', 54, [], {}];

let daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wedensday",
  "Thrusday",
  "Friday",
  "Saturday",
  "Sunday",
];

let dayOne = daysOfWeek[0];
console.log(dayOne);
let sunday = daysOfWeek[6];
console.log(sunday);
let lastElement = daysOfWeek[daysOfWeek.length - 1];
console.log(lastElement);

//get value
let a = daysOfWeek[3];

//set value
daysOfWeek[3] = "Weekend";
console.log(daysOfWeek);

//adding items

// n = dolzinata na nizata 0 -> n-1
// daysOfWeek[daysOfWeek.length] = "New value";

// //add single elemnt et the end
// daysOfWeek.push("new value added with push");

// //add multiple elemnts at the end
// daysOfWeek.push("first", "second", "third");

//add single elements at the start
// daysOfWeek.unshift("New first day");

//add multiple elements at the start
// daysOfWeek.unshift(1, 2, 3, 4, 5);

//remove elements from end
// let lastValue = daysOfWeek.pop();
// console.log(lastValue);

//remove elemnts from start
let firstElement = daysOfWeek.shift();
console.log(firstElement);

//create new Array
// let newArr = new Array();
// console.log(newArr);
