let firstDiv = document.getElementById("first");
console.log(firstDiv);

let allParagraphs = document.getElementsByTagName("p");
console.log(allParagraphs);

let lastDiv = document.querySelector("div:last-of-type");
console.log(lastDiv);
let header3 = lastDiv.querySelector("h3");
console.log(header3);
let header1 = lastDiv.querySelector("h1");
console.log(header1);

let paragraph1 =
  document.querySelector(".anotherDiv").firstElementChild.innerText;
console.log(paragraph1);

let textInSecondDiv = (document.querySelector(
  ".anotherDiv"
).lastElementChild.innerText += " Text");

header1.innerText = "This is the new header 1 text";

header3.innerText = "This is the new header 3 text";
