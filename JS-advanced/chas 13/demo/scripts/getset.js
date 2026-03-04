class Student {
  constructor(id, fName, lName, age, academyName) {
    this.id = id;
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.academyName = academyName;
  }

  get age() {
    this._age > 18
      ? console.log("This student is adult!")
      : console.log("This student is minor!");
  }
  set age(value) {
    if (value <= 0) {
      throw new Error("Cannot assign value below or equal to zero");
    }
    this._age = value;
  }
}

let dimitar = new Student(
  1,
  "Dimitar",
  "Kocevski",
  19,
  "Avenga Academy - Web Dev",
);
console.log(dimitar.age);
console.log(dimitar);

let mario = new Student(
  2,
  "Mario",
  "Simonovski",
  34,
  "Avenga Academy - Web Dev",
);
console.log(mario.age);

console.log(dimitar instanceof Student);
