// stringCalculator.js
function add(numbers) {
  if (numbers === "") return 0;

  const numArr = numbers.split(",");
  return numArr.reduce((sum, num) => sum + parseInt(num), 0);
}

module.exports = add;
