// 15. We have the following arrays :
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."
// - - - - - - - - - - - - -
// Note : Use ordinal numbers to tell their position.


const colors = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
const ordinals = ["th", "st", "nd", "rd"];

function getOrdinalSuffix(number) {
  if (number >= 11 && number <= 13) {
    return "th";
  } else {
    const lastDigit = number % 10;
    return ordinals[lastDigit] || "th";
  }
}

for (let i = 0; i < colors.length; i++) {
  const ordinal = getOrdinalSuffix(i + 1);
  console.log(`${i + 1}${ordinal} choice is ${colors[i]}`);
}