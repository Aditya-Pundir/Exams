const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./Sanskrit.json"));
const parsedData = data;

// Prints the total marks:
console.log("Subject: " + parsedData.subject);
console.log("Marks Obtained: " + parsedData.totalMarks);

// If you want to know that where you've mistaked (If mistakes are there):
// parsedData.answerList.map((sol) => {
//   console.log(sol);
// });

// If you want to print the wrong answered questions:
parsedData.answerList.map((sol) => {
  if (sol.correct === false) {
    console.log(sol);
  }
});
