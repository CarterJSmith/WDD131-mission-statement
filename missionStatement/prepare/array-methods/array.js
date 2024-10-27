//  arrays.js
const steps = ["one", "two", "three"];
const listTemplate(step) {
  return `<li>${step}</li>`
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join("");


// let new_array = arr.map(function callback( currentValue[, index[, array]]) {
//     // return element for new_array
// }[, thisArg])

let grade = ["a", "b", "c"];
function convertGradeToPoints(grade) {
    let points = 0;
    if (grade === "A") {
      points = 4;
    } else if (grade === "B") {
      points = 3;
    }
    return points;
  }
  const gpaPoints = grades.map(convertGradeToPoints);