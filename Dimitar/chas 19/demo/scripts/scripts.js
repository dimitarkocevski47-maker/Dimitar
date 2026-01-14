let main = document.getElementById("main");

let text = main.textContent;
console.log(text);
let text1 = main.innerText;
console.log(text1);

let h1 = main.firstElementChild;
// h1.innerText = "New Text";
// h1.innerText = h1.innerText + " Ultra new content";
h1.innerText += " Ultra new content";

// Changing and adding code

// main.innerText = "<p> Hello World </p>";
main.innerHTML += "<p>Hello World!</p>";
// main.innerHTML = "";

//Changing CSS

let pTag = document.getElementsByClassName("myParagraph")[0];
pTag.style.color = "Red";
pTag.style.backgroundColor = "Blue";

pTag.classList.add("demo");
