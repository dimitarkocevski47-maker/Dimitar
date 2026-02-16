let student = {
  fullName: "Dimitar Kocevski",
  age: 19,
  academy: "Avenga Academy - Web developer",
  grades: [6, 6, 7, 9, 10, 7, 8, 6, 8],
};

// With no higher order function
let allGradesAboveSeven = [];
let sum = 0;

for (const grade of student.grades) {
  if (grade > 7) {
    allGradesAboveSeven.push(grade);
  }
}

for (const grade of allGradesAboveSeven) {
  sum += grade;
}

let average = sum / allGradesAboveSeven.length;
console.log(average);

// With higher order functon
let averageGrade =
  student.grades
    .filter((grade) => grade > 7)
    .reduce((newSum, grade) => (newSum += grade), 0) /
  allGradesAboveSeven.length;
console.log(averageGrade);

let numbers = [10, 20, 30, 40, 50];
let numbersArr = numbers;

numbersArr.push(60, 70, 80, 90, 100);
console.log(numbersArr);

function copyArr(array) {
  let copied = [];
  array.forEach((element) => copied.push(element));
  return copied;
}

let myCopyArr = copyArr(numbers);
myCopyArr.push(200, 300, 400, 500);
console.log(myCopyArr);
console.log(numbers);

let ages = [18, 20, 22, 32, 28, 29, 23, 33, 50];

// Higher order function - every()
let areAllMature = ages.every((age) => age >= 18);
console.log(areAllMature);

// Higher order function - some()
let isSomeoneUnderage = ages.some((age) => age < 18);
console.log(isSomeoneUnderage);

// Higher order function - find()

let cities = ["Skopje", "Prague", "Barcelona", "Belgrade", "Ljubljana"];

let skopje = cities.find((city) => city === "Skopje");
console.log(skopje);

// Higher order function - findIndex()
let barcelonaIndex = cities.findIndex((city) => city === "Barcelona");
console.log(barcelonaIndex);

// Higher order function - includes()
let isPragueInArr = cities.includes("Prague");
console.log(isPragueInArr);

// Higher order function - flat(), flatMap()
let specialArray = [1, 2, 3, [4, 5, [6, 7]]];
let flattened = specialArray.flat(1);
console.log(flattened);

let cityCharacthers = cities.flatMap((city) => city.split(""));
console.log(cityCharacthers);

// Higher order function - join()
let joinCharachtersCities = cityCharacthers.join("");
console.log(joinCharachtersCities);

// Higher order function - slice(), splice()
let sliced = cities.slice(1, 3);
console.log(sliced);

let spliced = cities.splice(0, 2);
console.log(cities);
console.log(spliced);

// Higher order function - reverse()
let reversed = cities.reverse();
console.log(reversed);

// Pure functions

function increaseByOne(numbers) {
  let result = [];
  for (const numbers of numbers) {
    result.push(number + 1);
  }
  return result;
}

// Impure function - using a variable from the outside scope
let one = 1;

function increaseByOneImpure(numbers) {
  let result = [];
  for (const number of numbers) {
    result.push(number + one);
  }
  return result;
}

// Impure function - mutating data from outside

function increaseByOneImpureFunc(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] += 1;
  }
  return numbers;
}

// Impure function - changing the DOM outside of the function

function increaseByOneInDom(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] + 1);
    document.getElementById("result").innerHTML = numbers[i] + " ";
  }
}
