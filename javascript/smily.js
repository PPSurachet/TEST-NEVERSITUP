/**
 *
 * @param {string[]} texts list of string [":)", ":(", ":>"]
 * @returns {number} amount of smily face detected
 */

const countSmilyFace = (texts) => {
  if (!Array.isArray(texts)) return "Input must be array";
  const regex = /[:;][-~]?[)D]/g;
  const matching = texts.filter((smile) => smile.match(regex));
  return matching.length;
};

module.exports = { countSmilyFace };
