let obj = {
  name: "Dimitar",
  lastName: "Kocevski",
};

let person = Object.create(obj);
// console.log(person);
// console.log(person.name, person.lastName);

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

let obj1 = { ...target, ...source };
let obj2 = Object.assign(target, source);
// console.log(obj1);
// console.log(obj2);

// console.log(Object.entries(obj)); // [key-value]
// console.log(Object.keys(obj)); // [just keys]
// console.log(Object.values(obj)); // [just values]

let obj3 = { ...obj };
Object.freeze(obj3);

obj3.name = "Bob";
obj3.newProp = "something";
console.log(obj3);

let config = {
  apiUrl: "",
  apiKey: "",
  user: {},
};

if (!Object.isFrozen(config)) {
  Object.freeze(config);
}

console.log(Object.isFrozen(config));

let config1 = {
  apiUrl: "",
  apiKey: "",
  user: {},
};

Object.seal(config1);

config1.apiKey = "12esed3r";
((config1.apiUrl = "www.google.com"),
  (config1.user = {
    id: 1,
    name: "Dimitar",
  }));

delete config1.apiKey;
config1.newProp = "something";
console.log(config1);
