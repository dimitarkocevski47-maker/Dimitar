//1.Arrays and Loops
let randomArray = [
  1,
  2,
  3,
  "Dimitar",
  "Ivan",
  undefined,
  true,
  false,
  null,
  10.5,
  NaN,
];

console.log(randomArray);

let names = ["Dimitar", "Mario", "Klementina", "Marko", "Ivana"];
let numbers = [1, 2, 3, 4];

let counter = 0;
while (counter < names.length) {
  console.log(names[counter]);
  counter++;
}

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

//2.Functions

//Funtions with no input params
function printNames() {
  console.log("Printing Names:");
  for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
}
printNames();

//Functons with input params
function printItems(array) {
  console.log("Printing any items:");
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
printItems(names);
printItems(randomArray);
printItems(numbers);

function greetPerson(personName) {
  console.log(`Hello there ${personName}`);
}
greetPerson("Dimitar");
greetPerson("Mario");
greetPerson("Martin");

//3. Objects

// By using Object literal
let student = {
  firstName: "Jhon",
  lastName: "Doe",
  age: 22,
  birthYear: 2004,
  subjects: ["HTML/CSS", "BJS", "AJS"],
  currentSubject: "AJS",
  printSubjects: function () {
    for (let sub of this.subjects) {
      console.log(sub);
    }
  },
};

console.log(student);
console.log(student.printSubjects());

// By using the Object();
let trainer = new Object();
trainer.firstName = "Martin";
trainer.lastName = "Panovski";
trainer.birthYear = 1993;
trainer.calculateAge = function () {
  const year = new Date().getFullYear();
  return year - this.birthYear;
};
console.log(trainer);
console.log(trainer.calculateAge());

// By using constructor function
function Academy(name, city, address, numberOfStudents) {
  this.name = name;
  this.city = city;
  this.address = address;
  this.numberOfStudents = numberOfStudents;
  this.getNumberOfStudents = function () {
    return this.numberOfStudents;
  };

  this.getLocation = function (nameOfCity) {
    if (nameOfCity.toLowerCase() === this.city.toLowerCase()) {
      console.log(
        `The location of this ${this.name} academy is in ${this.city} on ${this.address}`,
      );
    } else {
      console.log(`There is no ${this.name} academy on this locaton.`);
    }
  };
}

let avenga = new Academy("Avenga", "Skopje", "Test addres 1", 120);
let qinshift = new Academy("Qinshift", "Ohrid", "Test addres 2", 120);
let sedc = new Academy("SEDC", "Nis", "Test addres Nis", 150);

console.log(avenga);
console.log(qinshift);
console.log(sedc);

avenga.getLocation("Ohrid");
qinshift.getLocation("Ohrid");
sedc.getLocation("Ohrid");
