// stringCalculator.js
const add = require("./stringCalculator");

test("should return 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("should return number itself if only one number is provided", () => {
  expect(add("1")).toBe(1);
});
