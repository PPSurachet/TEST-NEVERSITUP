/**
 *
 * @param text string of value example "aabb", "abcde"
 * @returns {string[]} string array of result
 */

const factorial = (number: number) => {
  let answer = 1;

  if (number !== 0) {
    for (let i = 2; i <= number; i++) {
      answer = answer * i;
    }
  }

  return answer;
};

export function manipulate(text: string): string[] {
  const result: string[] = [];

  const splitChar = text.split("");
  for (let index = 0; index < splitChar.length; index++) {
    let char = splitChar[index];
    const otherChar = splitChar.filter((_, i) => index !== i);

    for (let loop = 0; loop < factorial(otherChar.length); loop++) {
      if (loop) {
        const firstElement = otherChar.shift();
        if (firstElement) otherChar.push(firstElement);
      }
      const combine = char + otherChar.join("");
      if (!result.includes(combine)) result.push(combine);
    }
  }

  return result;
}
