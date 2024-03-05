// Write your test here

const { findOddNumber } = require("./odd-number");

test("test invalid input", () => {
  const input = 0;
  const result = "Input must be array";
  expect(findOddNumber(input)).toBe(result);
});

test("input [7] should return 7, because it occurs 1 time", () => {
  const input = [7];
  const result = 7;
  expect(findOddNumber(input)).toStrictEqual(result);
});

test("input [1,1,2] should return 2, because it occurs 1 time", () => {
  const input = [1, 1, 2];
  const result = 2;
  expect(findOddNumber(input)).toStrictEqual(result);
});

test("input [0,1,0,0,1] should return 0, because it occurs 3 time", () => {
  const input = [0, 1, 0, 0, 1];
  const result = 0;
  expect(findOddNumber(input)).toStrictEqual(result);
});
