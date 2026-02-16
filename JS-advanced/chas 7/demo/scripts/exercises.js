let url =
  " https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";

function getData() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      averageGrades(data);
      console.log(data);
    })
    .catch((error) => console.error(error));
}
getData();

// All students with an average grade higher than 3

function averageGrades(data) {
  let newAverageArr = [];
  newAverageArr = data.filter((student) => {
    return student.averageGrade > 3;
  });
  console.log(newAverageArr);
}
