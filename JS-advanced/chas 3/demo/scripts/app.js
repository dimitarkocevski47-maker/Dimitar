// let studentJson = `{
//   "studentName": "Dimitar",
//   "assistant": "ChatGPT",
//   "trainers": ["Mario",
//   "Martin",
//   "Dimitar",
//   "Ognen"],
//   "academy": "Avenga Academy"
// }`;

// console.log(studentJson);
// console.log(typeof studentJson);

// let studentObject = JSON.parse(studentJson);
// console.log(studentObject);
// console.log(studentObject.trainers[0]);

// studentObject.age = 19;

// let studentString = JSON.stringify(studentObject);
// console.log(studentString);

// //Get data from API using Plain JS (The very old method)
// document.getElementById("sendRequest").addEventListener("click", function () {
//   let xhr = new XMLHttpRequest();
//   xhr.onload = function () {
//     console.log("Request is sent!");
//     if (xhr.status >= 200 && xhr.status < 300) {
//       console.log("Request successfull!");
//       let objectResponse = JSON.parse(xhr.response);
//       console.log(objectResponse);
//     } else {
//       console.log(xhr.responseText);
//     }
//   };
//   xhr.open(
//     "GET",
//     "https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/shared_data/students.json",
//   );
//   xhr.send();
// });

// Get data from API usin jQuery AJAX

// let btn = $("#sendRequest");

// btn.on("click", function () {
//   $.ajax({
//     url: "https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/shared_data/students.json",
//     success: function (data) {
//       let dataObject = JSON.parse(data);
//       console.log(dataObject);
//     },
//     error: function (error) {
//       console.log(error);
//     },
//   });
// });

// Get data from API using plain JS with fetch()

document.getElementById("sendRequest").addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      let list = document.getElementById("todos");
      list.innerHTML = "";
      for (const todo of data) {
        list.innerHTML += `<li>${todo.title} | Completed: ${todo.completed}</li>`;
      }
    })
    .catch(function (error) {
      console.log(error.responseText);
    });
});
