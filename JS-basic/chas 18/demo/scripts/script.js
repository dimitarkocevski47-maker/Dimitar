// let obj = {
//   name: "Quay",
//   rooms: 40,
//   booked: 25,
//   gym: true,
//   roomTypes: ["twin", "double", "suite"],
//   checkAvailability: function () {
//     return this.rooms - this.booked;
//   },
// };

// console.log(obj);

// let obj2 = new Object();
// obj2.name = "Quay2";
// obj2.rooms = 50;
// obj2.booked = 30;
// obj2.gym = false;
// obj2.roomTypes = ["single", "double", "suite", "presidential"];
// obj2.checkAvailability = function () {
//   return this.rooms - this.booked;
// };
// console.log(obj2);

// //get value
// let a = obj.name;
// let aa = obj["name"];

// //set value
// obj.booked = 30;
// obj["booked"] = 30;

// //calling method
// console.log(obj.checkAvailability());

// //exercise 1
// let objDimitar = new Object();
// objDimitar.firstName = "Dimitar";
// objDimitar.lastName = "Kocevski";
// objDimitar.age = 19;
// objDimitar.studentStatus = "active";
// objDimitar.academy = "Avenga";

// console.log(objDimitar);

// delete obj.gym;

// objDimitar.firstName = "Mitko";
// objDimitar.lastName = "Kocovski";
// objDimitar.age = 20;
// objDimitar.studentStatus = "inactive";
// objDimitar.academy = "SEDC";

// let trainer = {
//   name: "Stefan",
//   lastName: "Stefanovski",
//   academy: "SEDC",
//   lecture: "Objects",
// };

// console.log(trainer);

// delete trainer.lecture;
// trainer.age = 25;
// trainer.getFullName = function () {
//   return `${this.name} ${this.lastName}`;
// };

function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.hasGym = false;

  this.checkAvailability = function () {
    return this.rooms - this.booked;
  };
}

let holidayInn = new Hotel("Holiday Inn", 120, 110);
let meriot = new Hotel("Meriot", 200, 100);

console.log(holidayInn);
console.log(meriot);

function checkThis() {
  console.log(this);
}

checkThis();

let shape = {
  width: 100,
  height: 100,
  checkThisInObj: function () {
    console.log(this);
  },
};

shape.checkThisInObj();

function Car(model, year, color, fuel, fuelConsumption) {
  this.model = model;
  this.year = year;
  this.color = color;
  this.fuel = fuel;
  this.fuelConsumption = fuelConsumption;
  this.calcuateFuel = function (distance) {
    let neededFuel = (distance / 100) * this.fuelConsumption;
    return neededFuel;
  };
}
let car1 = new Car("Toyota", 2020, "red", "gasoline", 7);
let car2 = new Car("BMW", 2018, "black", "diesel", 5);

console.log(
  `To travel 100km, the ${car1.model} needs ${car1.calcuateFuel(
    100
  )} liters of fuel.`
);
console.log(
  `To travel 100km, the ${car2.model} needs ${car2.calcuateFuel(
    100
  )} liters of fuel.`
);
