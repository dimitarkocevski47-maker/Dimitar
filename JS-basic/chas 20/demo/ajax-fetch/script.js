let obj = {
  name: "Dimitar",
  lastName: "Kocevski",
  age: 19,
  courses: ["HTML", "CSS", "JS"],
  address: {
    street: "Some street",
    number: 123,
  },
  getAddress: function () {
    return this.address;
  },
};

let jsonObj = JSON.stringify(obj);
console.log(jsonObj);

let toJson = JSON.parse(jsonObj);
console.log(toJson);
console.log(toJson.name);
