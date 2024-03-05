// Write your test here

import { countSmilyFace } from "./smily";

test(`input [":)", ";(", ";}", ":-D"] should be return 2`, () => {
  const input = [":)", ";(", ";}", ":-D"];
  const result = 2;
  expect(countSmilyFace(input)).toStrictEqual(result);
});

test(`input [";D", ":-(", ":-)", ";~)"] should be return 3`, () => {
  const input = [";D", ":-(", ":-)", ";~)"];
  const result = 3;
  expect(countSmilyFace(input)).toStrictEqual(result);
});

test(`input [";]", ":[", ";*", ":$", ";-D"] should be return 1`, () => {
  const input = [";]", ":[", ";*", ":$", ";-D"];
  const result = 1;
  expect(countSmilyFace(input)).toStrictEqual(result);
});
