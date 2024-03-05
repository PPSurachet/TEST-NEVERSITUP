/**
 *
 * @param {number[]} numbers list of numbers example [7], [0], [1,1,2], [0,1,0,0,1], [1,2,3,4,5,6,7,8,9,0]
 * @returns {number} one number that odd number
 */
const findOddNumber = (numbers) => {
  if (!Array.isArray(numbers)) return "Input must be array";

  const result = [];

  const uniqNum = Array.from(new Set(numbers));
  for (let i = 0; i < uniqNum.length; i++) {
    const duplicateNum = numbers.filter((num) => num === uniqNum[i]);
    if (duplicateNum.length % 2 !== 0) result.push(uniqNum[i]);
  }

  return result[0];
};

module.exports = { findOddNumber };
