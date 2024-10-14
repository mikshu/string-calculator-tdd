// stringCalculator.js
function add(numbers) {
  // return 0 if input is an empty string
  if (numbers === "") return 0;

  //replace new line with a comma
  const normalizedNumbers = numbers.replace(/\n/g, ",");

  // Split the string by comma
  const numArr = normalizedNumbers.split(",").map(Number);

  //filter an Array for negative numbers
  const negativesNumArr = numArr.filter((n) => n < 0);

  if (negativesNumArr.length > 0) {
    throw new Error(
      `Negative numbers not allowed: ${negativesNumArr.join(",")}`
    );
  }
  return numArr.reduce((sum, num) => sum + parseInt(num), 0);
}

module.exports = add;
