function callInOrder() {
  setTimeout(function () {
    console.log("1. First thing, preparing for the second...");
    setTimeout(function () {
      console.log("2. Second thing");
    }, 2000);
  }, 2000);
}

// console.log("First");

// setTimeout(function () {
//   console.log("Second");
// }, 1500);

// console.log("Third");

// callInOrder();

function complecCallInOrder() {
  setTimeout(function () {
    console.log("1. First thing, preparing for second");
    setTimeout(function () {
      console.log("2. Second thing, preparing for third");
      setTimeout(function () {
        console.log("3. Third thing, preparing for fourth");
        setTimeout(function () {
          console.log("4. Fourth thing, preparing for fifth");
          setTimeout(function () {
            console.log("Fifth thing, preparing for sixth");
            setTimeout(function () {
              console.log("6. Finally sixth thing");
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

// complecCallInOrder();

function workTimeResolvation(workTime) {
  return new Promise((resolve, reject) => {
    if (workTime <= 0) {
      reject("it's too short of a work time.Please try again");
    }
    setTimeout(function () {
      resolve("This time is correct! Welcome!");
    }, workTime);
  });
}

// workTimeResolvation(0)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// let myPromise = new Promise((resolve, reject) => {
//   //resolve("This promise was resolved successfuly");
//   reject("This promise was rejected");
// });
// console.log(myPromise);
