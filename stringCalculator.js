// stringCalculator.js
function add(numbers) {
  // return 0 if input is an empty string
  if (numbers === "") return 0;
  //replace new line with a comma
  const normalizedNumbers = numbers.replace(/\n/g, ",");
  //make an array of numbers
  const numArr = normalizedNumbers.split(",");
  return numArr.reduce((sum, num) => sum + parseInt(num), 0);
}

module.exports = add;
