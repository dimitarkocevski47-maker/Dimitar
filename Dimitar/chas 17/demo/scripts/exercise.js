//JavaScript function takes an array and a string odd or even and returns only the numbers that match that type
// function findOddOrEven(numbers, type) {
//   let result = [];
//   if (type === "odd") {
//     for (let num of numbers) {
//       if (num % 2 !== 0) {
//         result.push(num);
//       }
//     }
//   } else if (type === "even") {
//     for (let num of numbers) {
//       if (num % 2 === 0) {
//         result.push(num);
//       }
//     }
//   }
//   return result;
// }

let numbers = [5, 12, 18, 7, 22];

function calculatePoints(amount) {
  if (amount > 20) {
    return 3;
  } else if (amount >= 10 && amount <= 20) {
    return 2;
  } else if (amount < 10) {
    return 1;
  }
}

let totalPoints = 0;

function calucalteReward() {
  for (let parchuse of numbers) {
    let points = calculatePoints(parchuse);
    totalPoints += points;
  }
  if (totalPoints >= 10) {
    console.log("Dobivte kafe");
  } else {
    let pointsNedded = 10 - totalPoints;
    console.log(`Points nedded: ${pointsNedded}`);
  }
}
calucalteReward();
