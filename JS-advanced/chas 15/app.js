// Import from another JS file

const funcs = require("./functions");

console.log("Hello there from my script file!");

let a = 10;
let b = 20;

let person = {
  fullName: "Dimitar Kocevski",
  age: 19,
  jobTitle: "Software Developer",
};

let printPersonInfo = (person) => {
  console.log(
    `Full Name ${person.fullName} | Age ${person.age} | Job ${person.jobTitle}`,
  );
};

console.log(a);
console.log(b);

printPersonInfo(person);

funcs.sayHello("Bob");
funcs.sayGoodbye("Bob");

funcs.printInConsole("This is something");
