let first = () => console.log("I am first");
let second = () => console.log("I am second");
let third = () => console.log("I am third");

// If we call these functions in the following order,
// they will get executed in the exact same order
// first();
// second();
// third();

// first();
// setTimeout(second, 2000);
// third();

console.log("Example 2 of setTimeot()");
// first();
// setTimeout(function () {
//   console.log("I am second");
// });
// third();

console.log("Example 3 of setTimeot()");
// first();
// setTimeout(function () {
//   console.log("I am before second");
//   second();
// }, 2000);
// third();

console.log("Example 4 of setTimeot()");
// setTimeout(function () {
//   first();
//   setTimeout(function () {
//     second();
//   }, 2000);
// }, 3000);
// third();

// Callbacks

console.log("======Callbacks======");

// let sayHello = (personName) =>
//   console.log(`First say hello! Hello, ${personName}`);

// let sayGoodbye = (personName) => console.log(`Bye bye ${personName}`);

// let greetSomeone = (callback) => {
//   setTimeout(function () {
//     console.log("Greet person first!");
//     callback("Dimitar");
//   }, 1000);
// };

// greetSomeone(sayHello);

setTimeout(function () {
  console.log("first");
  setTimeout(function () {
    console.log("second");
    setTimeout(function () {
      console.log("third");
    }, 1000);
  }, 1000);
}, 1000);
