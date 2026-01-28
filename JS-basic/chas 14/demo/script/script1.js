let a = 2 / "test";
console.log(a);
console.log(typeof a);

let b = 10;
let c = "Dimitar";

let result = b / c;
console.log("Result is: " + result);

console.log(result == NaN);
console.log(result === NaN);

let d = isNaN(result);
console.log("Using isNaN result is: " + d);

let text = "Text";
console.log("Text: " + isNaN(text));
